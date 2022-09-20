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
			siteName
			image
			twitterImage
			twitterSite
			twitterCreator
			themeColor
        }
      }
    }
  `)

  return data.site.siteMetadata
}