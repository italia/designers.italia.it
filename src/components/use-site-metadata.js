import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
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
        }
      }
    }
  `)

  return data.site.siteMetadata
}