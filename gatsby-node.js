/* eslint-disable no-console */

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

    type ContentComponentsHighlightCards {
      id: String
      title: String
      headingLevel: Int
      text: String
      col4: Boolean
      background: String
      nopadtop: Boolean
      cardSettings: ContentComponentsHighlightCardsCardSettings
      cards: [ContentComponentsHighlightCardsCards]
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

    type ContentComponentsHighlightCardsCardSettings {
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

    type ContentComponentsHighlightCardsCards {
      cardEvent: Boolean
      iconOverlay: ContentComponentsHighlightCardsCardsIconOverlay
      dateOverlay: ContentComponentsHighlightCardsCardsDateOverlay
      dateInfo: String
      tag: ContentComponentsHighlightCardsCardsTag
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
      externalLink: ContentComponentsHighlightCardsCardsExternalLink
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

    type ContentComponentsHighlightCardsCardsIconOverlay {
      icon: String
      ariaLabel: String
    }
    
    type ContentComponentsHighlightCardsCardsDateOverlay {
      day: String
      month: String
      year: String
    }
    
    type ContentComponentsHighlightCardsCardsTag {
      label: String
      addonClasses: String
    }

    type ContentComponentsHighlightCardsCardsExternalLink {
      label: String
      screenReaderText: String
      icon: ContentComponentsHighlightCardsCardsExternalLinkIcon
    }

    type ContentComponentsHighlightCardsCardsExternalLinkIcon {
      icon: String
      size: String
    }
  `);
};

exports.sourceNodes = async ({ actions: { createNode } }) => {
  const dataFiles = fetchDataFiles();
  const assets = [...new Set(findValues(dataFiles, "img"))];

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
      createNodeId,
      getCache,
    });
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  } else if (
    node.internal.type === "File" &&
    (node.extension === "yaml" || node.extension === "yml")
  ) {
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

exports.onCreatePage = async ({ page, actions, getNodesByType }) => {
  if (page.context.highlighted) {
    return "Skipping already highlighted page";
  }

  const { createPage, deletePage } = actions;
  const editorialBoardNodes = getNodesByType("EditorialBoard");
  const highlighted = [];
  const editorialSections = [];

  if (editorialBoardNodes.length > 0) {
    const editorialData = editorialBoardNodes[0];

    let pageKey = "index";
    if (page.path.includes("/design-system/")) {
      pageKey = "design-system";
    } else if (page.path.includes("/community/")) {
      pageKey = "community";
    } else if (page.path.includes("/normativa/")) {
      pageKey = "normativa";
    }

    const pageConfig = editorialData.highlightedCards?.find(
      (config) => config.page === pageKey,
    );

    if (pageConfig?.sections) {
      pageConfig.sections.forEach((section) => {
        if (section.section === "header-bookmarks") {
          editorialSections.push({
            section: section.section,
            highlighted: section.cards || [],
          });
          return;
        }

        const sectionTitles =
          section.cards
            ?.map((card) => {
              if (typeof card === "string") {
                return card;
              }
              return card.title;
            })
            .filter(Boolean) || [];

        editorialSections.push({
          section: section.section,
          highlighted: section.cards || [],
        });

        highlighted.push(...sectionTitles);
      });
    }
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

  return "Page created with editorial sections";
};

exports.createPages = async ({ graphql, actions }) => {
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
