import { graphql, useStaticQuery } from "gatsby"

export const SeoGetSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
			siteUrl
			title
			author
			lang
			description
			site_name
			image
			twitter_image
			twitter_site
			twitter_creator
			theme_color
        }
      }
    }
  `)

  return data.site.siteMetadata
}