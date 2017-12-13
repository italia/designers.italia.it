#
# Custom generator for importing Medium posts.
# This code runs during jekyll build step.
# Inspired by http://stackoverflow.com/questions/27828996/is-there-a-way-to-parse-external-rss-feeds-with-jekyll
# Originally developed for https://teamdigitale.governo.it/
#
# TODO replace RSS feed with JSON, see:
#

require 'rest_client'
require 'json'
require 'rmagick'
require "open-uri"

class MediumImporter < Jekyll::Generator
  safe true
  priority :high
  def generate(site)

    feed_url = Jekyll.configuration({})['medium_archive_url']
    puts "[*] Fetching Medium feed from: " + feed_url
    # ENGLISH version
    feed_url_eng = Jekyll.configuration({})['medium_archive_url_eng']
    puts "[*] Fetching Medium feed from: " + feed_url_eng

    feed_res = RestClient.get feed_url, {:accept => :json}
    feed_res_eng = RestClient.get feed_url_eng, {:accept => :json}

    # removes anti json-hijacking prefix
    feed_json_str = "{" + feed_res.to_str.partition("{").last
    feed_json_str_eng = "{" + feed_res_eng.to_str.partition("{").last

    # parse json
    feed_json = JSON.parse(feed_json_str)
    feed_json_eng = JSON.parse(feed_json_str_eng)

    posts = feed_json['payload']['references']['Post'].values
    posts_eng = feed_json_eng['payload']['references']['Post'].values
    users = feed_json['payload']['references']['User']
    users_eng = feed_json_eng['payload']['references']['User']
    head_tags = feed_json['payload']['collection']['navItems']

    puts "Total italian posts fetched: " + posts.size.to_s
    puts "Total english posts fetched: " + posts_eng.size.to_s
    puts "Total users fetched: " + users.size.to_s
    puts "Total tags fetched: " + head_tags.size.to_s

    # Let's merge ita and eng posts and users
    posts.push(*posts_eng)
    users = users_eng.merge(users)

    posts.size > 0 or die("No posts fetched")

    posts = posts.sort_by { |item| item['latestPublishedAt'].to_i }.reverse

    post_url_base = "https://medium.com/" + feed_json['payload']['collection']['slug'] + "/"

    # Create a new on-the-fly Jekyll collection called "medium_feed"
    jekyll_coll = Jekyll::Collection.new(site, 'medium_feed')
    site.collections['medium_feed'] = jekyll_coll

    # Create a new on-the-fly Jekyll collection called "medium_all_tags"
    jekyll_coll_all_tags = Jekyll::Collection.new(site, 'medium_all_tags')
    site.collections['medium_all_tags'] = jekyll_coll_all_tags

    all_tags = []

    # Create a new on-the-fly Jekyll collection called "medium_head_tags"
    jekyll_coll_head_tags = Jekyll::Collection.new(site, 'medium_head_tags')
    site.collections['medium_head_tags'] = jekyll_coll_head_tags

    # Add fake virtual documents to the collection
    posts.each do |item|

      path = "blog/" + item['id']
      path = site.in_source_dir(path)
      doc = Jekyll::Document.new(path, {
        site: site,
        collection: jekyll_coll
      })
      # Extract article attributes
      # TODO more sanity checks
      doc.data['medium_author'] = users[item['creatorId']]['name']
      doc.data['medium_author_link'] = "https://medium.com/@" + users[item['creatorId']]['username']
      doc.data['medium_title'] = item['title']
      doc.data['medium_subtitle'] = item['content']['subtitle']
      doc.data['meta_description'] = item['content']['metaDescription']
      doc.data['medium_url'] = post_url_base + item['uniqueSlug']
      doc.data['medium_tags'] = item['virtuals']['tags']
      doc.data['medium_preview_image_url'] = "https://cdn-images-1.medium.com/max/1600/" + item['virtuals']['previewImage']['imageId']
      open(doc.data['medium_preview_image_url']) { |f|
        File.open("/tmp/medium_image.jpg","wb") do |file|
          file.puts f.read
        end
      }
      img =  Magick::Image.read("/tmp/medium_image.jpg").first
      pix = img.scale(1, 1)
      avg_color_hex = pix.to_color(pix.pixel_color(0,0))
      doc.data['medium_preview_image_color_avg'] = avg_color_hex
      doc.data['medium_post_id'] = item['id']
      doc.data['medium_detected_lang'] = item['detectedLanguage']
      doc.data['medium_slug'] = item['slug']
      doc.data['medium_published_at'] = item['latestPublishedAt']
      doc.data['medium_firstpublished_at'] = item['firstPublishedAt']
      doc.data['medium_created_at'] = item['createdAt']
      doc.data['medium_tagsarray'] = []
      if item['virtuals']['tags'] != nil
        item['virtuals']['tags'].each do |x|
          doc.data['medium_tagsarray'].push({'title' => x['slug'], 'link' => post_url_base + "tagged/" + x['slug']})
          all_tags.push(x['slug'])
        end
      end
      jekyll_coll.docs << doc
    end

    all_tags = all_tags.uniq

    all_tags.each do |item|
      path = "_all_tags/" + item
      path = site.in_source_dir(path)
      tag = Jekyll::Document.new(path, {
        site: site,
        collection: jekyll_coll_all_tags
      })
      tag.data['title'] = item.downcase
      tag.data['link'] = post_url_base + "tagged/" + item
      jekyll_coll_all_tags.docs << tag
    end

    head_tags.each do |item|
      if item['type'] == 1
        path = "_head_tags/" + item['tagSlug']
        path = site.in_source_dir(path)
        tag = Jekyll::Document.new(path, {
          site: site,
          collection: jekyll_coll_head_tags
        })
        tag.data['title'] = item['title'].split(" ").map(&:capitalize).join(" ")
        tag.data['link'] = item['url']
        jekyll_coll_head_tags.docs << tag
      end
    end
  end
end
