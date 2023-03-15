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
        additionalTrackers: [
          {
            siteId: `eO35WAwqon`,
            trackerUrl: `https://ingestion.webanalytics.italia.it/matomo.php`,
          },
        ],
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
        engineOptions: {
          profile: "score",
          charset: "latin:advanced",
          // encode: "extra",
          tokenize: "strict", // < strict = full word (better performance) | forward or reverse partials... 
          threshold: 11,
          resolution: 22,
          depth: 2,
          filter: [
            // XXX we need a stemmer also... 
            // array stopwords italian > https://www.ranks.nl/stopwords/italian
            "a",
            "adesso",
            "ai",
            "al",
            "alla",
            "allo",
            "allora",
            "altre",
            "altri",
            "altro",
            "anche",
            "ancora",
            "avere",
            "aveva",
            "avevano",
            "ben",
            "buono",
            "che",
            "chi",
            // "cinque",
            "comprare",
            "con",
            "consecutivi",
            "consecutivo",
            "cosa",
            "cui",
            "da",
            "del",
            "della",
            "dello",
            "dentro",
            "deve",
            "devo",
            "di",
            "doppio",
            "due",
            "e",
            "ecco",
            "fare",
            "fine",
            "fino",
            "fra",
            "gente",
            "giu",
            "ha",
            "hai",
            "hanno",
            "ho",
            "il",
            "indietro", 
            "invece",
            "io",
            "la",
            // "lavoro",
            "le",
            "lei",
            "lo",
            "loro",
            "lui",
            "lungo",
            "ma",
            "me",
            "meglio",
            "molta",
            "molti",
            "molto",
            "nei",
            "nella",
            "no",
            "noi",
            "nome",
            "nostro",
            "nove",
            "nuovi",
            "nuovo",
            "o",
            "oltre",
            "ora",
            "otto",
            "peggio",
            "pero",
            "persone",
            "piu",
            "poco",
            "primo",
            "promesso",
            "qua",
            "quarto",
            "quasi",
            "quattro",
            "quello",
            "questo",
            "qui",
            "quindi",
            "quinto",
            "rispetto",
            "sara",
            "secondo",
            "sei",
            "sembra",	
            "sembrava",
            "senza",
            "sette",
            "sia",
            "siamo",
            "siete",
            "solo",
            "sono",
            "sopra",
            "soprattutto",
            "sotto",
            "stati",
            "stato",
            "stesso",
            "su",
            "subito",
            "sul",
            "sulla",
            "tanto",
            "te",
            "tempo",
            "terzo",
            "tra",
            "tre",
            "triplo",
            "ultimo",
            "un",
            "una",
            "uno",
            "va",
            "vai",
            "voi",
            "volte",
            "vostro",
          ],
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
        {
          allContent {
            edges {
              node {
                id
                relativePath
                metadata {
                  template {
                    name
                  }
                }
                seo {
                  name
                  description
                  pathname
                }
                components {
                  hero {
                    title
                    subtitle
                    text
                    tag {
                      label
                    }
                  }
                  sectionIntro {
                    title
                    text
                    moreText
                  }
                  sectionsEditorial {
                    title
                    text
                    components {
                      title
                      text
                    }
                  }
                  sectionsEditorial2 {
                    title
                    text
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
        index: ["title", "description", "body"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["id", "template", "relativePath", "path", "title", "description", "tag"],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allContent.edges.map((edge) => {
            return {
              id: edge.node.id,
              template: edge.node.metadata?.template?.name,
              relativePath: "/" + edge.node.relativePath,
              path: `${edge.node.seo?.pathname}`,
              title: `${edge.node.components?.hero?.title}`,
              description: `${edge.node.seo?.description}`,
              tag: `${edge.node.components?.hero?.tag?.label}`,
              body:  `${edge.node.components?.hero?.subtitle} ${edge.node.components?.hero?.text}` 
                + ' ' + `${edge.node.components?.sectionIntro?.title} ${edge.node.components?.sectionIntro?.text} ${edge.node.components?.sectionIntro?.moreText}` 
                + ' ' + edge.node.components?.sectionsEditorial?.map(s => s.title).join(' ')
                + ' ' + edge.node.components?.sectionsEditorial?.map(s => s.components?.map(c=> c.title)).join(' ')
                + ' ' + edge.node.components?.sectionsEditorial2?.map(s => s.components?.map(c => c.title)).join(' ')
                + ' ' + edge.node.components?.sectionsEditorial?.map(s => s.text).join(' ')
                + ' ' + edge.node.components?.sectionsEditorial?.map(s => s.components?.map(c => c.text)).join(' ') 
                + ' ' + edge.node.components?.sectionsEditorial2?.map(s => s.components?.map(c => c.text)).join(' '),
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
