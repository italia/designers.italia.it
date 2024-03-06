import { graphql, useStaticQuery } from "gatsby";

// eslint-disable-next-line import/prefer-default-export
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
          twitterSite
          twitterCreator
          themeColor
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
