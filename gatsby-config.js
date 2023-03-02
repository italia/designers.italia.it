const { getCrumbLabelUpdates } = require('./scripts/breadcrumbs');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    siteUrl: `https://designers.italia.it`,
    title : "Designers Italia",
    author : "Dipartimento per la trasformazione digitale e AGID",
    lang : "it",
    description : "Il punto di riferimento per la progettazione dei servizi pubblici digitali",
    siteName : "Designers Italia",
    image : "https://designers.italia.it/assets/icons/logo-it.png",
    twitterImage : "https://designers.italia.it/assets/icons/logo-it.png",
    twitterSite : "@DesignersITA",
    twitterCreator : "Dipartimento per la trasformazione digitale e AGID",
    themeColor: "#0066cc"
  },
  plugins: [
    {
      resolve:`gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        crumbLabelUpdates: getCrumbLabelUpdates(),
        autoGenHomeLabel: `Inizio`,
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`
        ],
        trailingSlashes: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-sharp`, // Needed for dynamic images
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "dominantColor", // or blurred ...
          quality: 70
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staticImages`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./src/data/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/`,
      },
    },
    `@colliercz/gatsby-transformer-gitinfo`,
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: `https://designers-italia.matomo.cloud/`,
        siteUrl: "https://prossima.designers.italia.it",
        matomoPhpScript: "matomo.php",
        matomoJsScript: "matomo.js",
        enableJSErrorTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "pages",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: "speed",

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
        {
          allContent {
            edges {
              node {
                id
                relativePath
                components {
                  sectionsEditorial {
                    components {
                      title
                      text
                    }
                  }
                  sectionsEditorial2 {
                    components {
                      title
                      text
                    }
                  }
                }
              }
            }
          }
        }`,

        // Field used as the reference value for each document.
        ref: "id",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        index: [
          "textContent",
        ],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["relativePath", "textContent"],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allContent.edges.map((edge) => {
            return {
              id: edge.node.id,
              relativePath: edge.node.relativePath,
              textContent: edge.node.components?.sectionsEditorial?.map(s => s.components?.map(c => c.text)).join(" "),
            }
          }),
      },
    },
    // This must be the last plugin in the array
    `gatsby-plugin-meta-redirect`,
  ],
  pathPrefix: '/',
  flags: {
    DEV_SSR: true
  },
}
