/* eslint-disable no-console */ // console.log is ok here for progress reporting

const { createRemoteFileNode } = require("gatsby-source-filesystem");

const jsYaml = require(`js-yaml`);

const path = require("path");
const express = require("express");
const slugify = require("slugify");
const { fetchDataFiles } = require("./server/fetchDataFiles");
const { findValues } = require("./server/utils/findValues");

const isRemoteAsset = (assetPath) => assetPath.startsWith("http");

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("public"));
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type RemoteAsset implements Node {
      source: String
      file: File @link(from: "fields.localFile")
    }

    type ContentComponentsHighlightCardsLoop {
      id: String
      title: String
      headingLevel: Int
      text: String
      col4: Boolean
      background: String
      nopadtop: Boolean
      cardSettings: ContentComponentsHighlightCardsLoopCardSettings
      buttons: [ContentComponentsHighlightCardsLoopButtons]
      topics: ContentComponentsHighlightCardsLoopTopics
      cards: [ContentComponentsHighlightCardsLoopCards]
    }

    type ContentComponentsHighlightCardsLoopCardSettings {
      headingLevel: Int
      customCol: String
      imgRatio: String
      imgPlaceholder: Boolean
      fullHeight: Boolean
      rounded: Boolean
      showDateInfo: Boolean
      showTags: Boolean
      cardEvent: Boolean
      titleSmall: Boolean
      showDateOverlay: Boolean
      showTag: Boolean
      showIconOverlay: Boolean
    }

    type ContentComponentsHighlightCardsLoopButtons {
      btnStyle: String
      label: String
      addonStyle: String
      url: String
      blank: Boolean
      ariaLabel: String
      icon: ContentComponentsHighlightCardsLoopButtonsIcon
    }

    type ContentComponentsHighlightCardsLoopButtonsIcon {
      icon: String
      color: String
      align: String
      size: String
      addonClasses: String
    }

    type ContentComponentsHighlightCardsLoopTopics {
      title: String
      headingLevel: Int
      icon: ContentComponentsHighlightCardsLoopTopicsIcon
      button: ContentComponentsHighlightCardsLoopTopicsButton
      tags: [String]
    }

    type ContentComponentsHighlightCardsLoopTopicsIcon {
      icon: String
      color: String
      hidden: Boolean
    }

    type ContentComponentsHighlightCardsLoopTopicsButton {
      btnStyle: String
      label: String
      url: String
    }
    
    type ContentComponentsHighlightCardsLoopCards {
      cardEvent: Boolean
      iconOverlay: ContentComponentsHighlightCardsLoopCardsIconOverlay
      dateOverlay: ContentComponentsHighlightCardsLoopCardsDateOverlay
      dateInfo: String
      tag: ContentComponentsHighlightCardsLoopCardsTag
      text: String
      title: String
      headingLevel: Int
      customCol: String
      img: String
      alt: String
      imgRatio: String
      imgPlaceholder: Boolean
      fullHeight: Boolean
      rounded: Boolean
      url: String
      tags: [String]
      blank: Boolean
      externalLink: ContentComponentsHighlightCardsLoopCardsExternalLink
      moreInfo: String
      titleSmall: Boolean
    }
    
    type ContentComponentsHighlightCardsLoopCardsIconOverlay {
      icon: String
      ariaLabel: String
    }
    
    type ContentComponentsHighlightCardsLoopCardsDateOverlay {
      day: String
      month: String
      year: String
    }
    
    type ContentComponentsHighlightCardsLoopCardsTag {
      label: String
      addonClasses: String
    }

    type ContentComponentsHighlightCardsLoopCardsExternalLink {
      label: String
      screenReaderText: String
      icon: ContentComponentsHighlightCardsLoopCardsExternalLinkIcon
    }

    type ContentComponentsHighlightCardsLoopCardsExternalLinkIcon {
      icon: String
      size: String
    }
  `);
};

exports.sourceNodes = async ({ actions: { createNode } }) => {
  // assets import in graphQL for gatsby-plugin-image
  const dataFiles = fetchDataFiles();
  const assets = [...new Set(findValues(dataFiles, "img"))]; // new Set removes duplicates

  assets.forEach((asset, idx) => {
    if (isRemoteAsset(asset)) {
      const data = {
        source: asset,
      };
      createNode({
        ...data,
        id: `asset-${idx}`,
        parent: null,
        children: [],
        internal: {
          type: "RemoteAsset",
          // contentDigest: createContentDigest(data),
        },
      });
    }
  });
};

exports.onCreateNode = async ({
  node,
  actions: { createParentChildLink, createNode, createNodeField },
  createNodeId,
  createContentDigest,
  loadNodeContent,
  getCache,
}) => {
  const CONTENT_NODE_TYPE = "Content";
  const EDITORIALBOARD_NODE_TYPE = "EditorialBoard";

  if (node.internal.type === "RemoteAsset") {
    const fileNode = await createRemoteFileNode({
      url: node.source,
      parentNodeId: node.id,
      createNode,
      createNodeId, // `${node.unique_identifier_prop}-assets-${index}`,
      getCache,
    });
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  } else if (
    node.internal.type === "File" &&
    (node.extension === "yaml" || node.extension === "yml")
  ) {
    // content
    if (node.sourceInstanceName === "content") {
      const content = await loadNodeContent(node);
      const parsedContent = jsYaml.load(content);

      const contentNode = {
        ...parsedContent,
        id: createNodeId(`${CONTENT_NODE_TYPE}-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: CONTENT_NODE_TYPE,
          contentDigest: createContentDigest(node),
        },
        relativePath: node.relativePath.replace(/(\.yaml$|\.yml$)/i, ""),
      };

      createNode(contentNode);
      createParentChildLink({ parent: node, child: contentNode });
    } else if (node.sourceInstanceName === "editorialBoard") {
      // editorialboard setting nodes
      // XXX > NOW WE HAVE THEM ON THE GRAPHQL SCHEMA, we have just to read them... and create the right array for the right page below... who know if it's the best way to do this...
      /*
      try this query: 
        
      { allEditorialBoard {
          nodes {
            highlightedCards {
              page
              sections {
                section
              }
            }
          }
        }
      }
      */
      const content = await loadNodeContent(node);
      const parsedContent = jsYaml.load(content);

      const editorialBoardNode = {
        ...parsedContent,
        id: createNodeId(`${EDITORIALBOARD_NODE_TYPE}-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: EDITORIALBOARD_NODE_TYPE,
          contentDigest: createContentDigest(node),
        },
        relativePath: node.relativePath.replace(/(\.yaml$|\.yml$)/i, ""),
      };

      createNode(editorialBoardNode);
      createParentChildLink({ parent: node, child: editorialBoardNode });
    }
  }
};

/* eslint-disable consistent-return */
exports.onCreatePage = async ({ page, actions, getNodesByType }) => {
  if (page.context.highlighted) {
    return "Skipping already highlighted page";
  }

  const { createPage, deletePage } = actions;
  const editorialBoardNodes = getNodesByType("EditorialBoard");
  const highlighted = [];
  const editorialSections = [];

  console.log(`🔍 Processing page: ${page.path}`);
  console.log(`📊 Found ${editorialBoardNodes.length} editorial board nodes`);

  if (editorialBoardNodes.length > 0) {
    const editorialData = editorialBoardNodes[0];
    console.log(
      "📋 Editorial data:",
      JSON.stringify(editorialData.highlightedCards, null, 2),
    );

    // Determine page key based on path
    let pageKey = "index"; // default
    if (page.path.includes("/design-system/")) {
      pageKey = "design-system";
    } else if (page.path.includes("/community/")) {
      pageKey = "community";
    }

    console.log(`🔍 Looking for page config: ${pageKey}`);

    const pageConfig = editorialData.highlightedCards?.find(
      (config) => config.page === pageKey,
    );

    console.log(`📄 Found page config:`, pageConfig);

    if (pageConfig?.sections) {
      // Process each section
      pageConfig.sections.forEach((section) => {
        console.log(`📝 Processing section: ${section.section}`);
        console.log(`📋 Cards in section:`, section.cards);

        const sectionTitles = section.cards?.map((card) => card.title) || [];
        console.log(`🏷️ Extracted titles:`, sectionTitles);

        editorialSections.push({
          section: section.section,
          highlighted: sectionTitles,
        });

        // Add to global array for GraphQL query
        highlighted.push(...sectionTitles);
      });

      console.log(
        `✅ Final highlighted array (${highlighted.length} items):`,
        highlighted,
      );
      console.log(`✅ Final editorial sections:`, editorialSections);
    } else {
      console.log(`⚠️ No sections found for page ${pageKey}`);
    }
  } else {
    console.log("⚠️ No editorial board nodes found");
  }

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      highlighted,
      editorialSections,
    },
  });

  console.log(`✅ Recreated page ${page.path} with context:`, {
    highlighted: highlighted.length,
    editorialSections: editorialSections.length,
  });
};

exports.createPages = async ({ graphql, actions }) => {
  // tags
  const { createPage } = actions;
  const tagTemplate = path.resolve("src/templates/tag.js");
  const tags = await graphql(`
    {
      tagsGroup: allContent {
        group(field: { components: { hero: { kangaroo: { tags: SELECT } } } }) {
          fieldValue
        }
      }
    }
  `);
  tags.data.tagsGroup.group.forEach((tag) => {
    if (process.env.DEBUG === "true") {
      console.log(`Creating tag page: ${tag.fieldValue} `);
    }
    createPage({
      path: `/argomenti/${slugify(tag.fieldValue, {
        strict: true,
        lower: true,
      })}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
  // tagsDesignSystem
  const tagDesignSystemTemplate = path.resolve(
    "src/templates/design-system-index-components-tags.js",
  );
  const tagsDesignSystem = await graphql(`
    {
      tagsDesignSystemGroup: allContent {
        group(
          field: {
            components: { hero: { kangaroo: { tagsDesignSystem: SELECT } } }
          }
        ) {
          fieldValue
        }
      }
    }
  `);
  tagsDesignSystem.data.tagsDesignSystemGroup.group.forEach((tag) => {
    if (process.env.DEBUG === "true") {
      console.log(`Creating tag page: ${tag.fieldValue}`);
    }
    createPage({
      path: `/design-system/componenti/utili-per/${slugify(tag.fieldValue, {
        strict: true,
        lower: true,
      })}/`,
      component: tagDesignSystemTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  // redirs
  const { createRedirect } = actions;
  const redirs = await graphql(`
    {
      allContent(filter: { metadata: { redirect_from: { ne: null } } }) {
        edges {
          node {
            seo {
              pathname
            }
            metadata {
              redirect_from
            }
          }
        }
      }
    }
  `);
  redirs.data.allContent.edges.forEach((edge) => {
    const { node } = edge;
    node.metadata.redirect_from.forEach((fromPath) => {
      const toPath = edge.node.seo.pathname;
      if (process.env.DEBUG === "true") {
        console.log(`Creating redirect: ${fromPath} -> ${toPath}...`);
      }

      createRedirect({ fromPath, toPath });
    });
  });
};
