const { createRemoteFileNode,  } = require("gatsby-source-filesystem")
const jsYaml = require(`js-yaml`)

const { fetchDataFiles } = require('./server/fetchDataFiles')
const { findValues } = require('./server/utils/findValues')

const isRemoteAsset= (assetPath) => {
  return assetPath.startsWith('http')
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html"  || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap-italia/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type RemoteAsset implements Node {
      source: String
      file: File @link(from: "fields.localFile")
    }
  `)
}

exports.sourceNodes = async ({
  actions: { createNode },
}) => {

  //assets import in graphQL for gatsby-plugin-image
  const data = fetchDataFiles()
  const assets = [...new Set(findValues(data, 'img'))] //new Set removes duplicates

  assets.forEach((asset, idx) => {
    if (isRemoteAsset(asset)) {
      const data = {
        source: asset
      }
      createNode({
        ...data,
        id: 'asset-' + idx,
        parent: null,
        children: [],
        internal: {
          type: 'RemoteAsset',
          contentDigest: createContentDigest(data),
        },
      })
    }
  })
}

exports.onCreateNode = async ({
  node,
  actions: { createParentChildLink, createNode, createNodeField },
  createNodeId,
  createContentDigest,
  loadNodeContent,
  getCache,
}) => {
  const CONTENT_NODE_TYPE = "Content"

  if (node.internal.type === "RemoteAsset") {
    const fileNode = await createRemoteFileNode({
      url: node.source,
      parentNodeId: node.id,
      createNode,
      createNodeId,//`${node.unique_identifier_prop}-assets-${index}`,
      getCache,
    })
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  } else if (
    node.internal.type === "File" &&
    node.sourceInstanceName === "content" &&
    (node.extension === 'yaml' ||
     node.extension === 'yml')
  ) {
    const content = await loadNodeContent(node)
    const parsedContent = jsYaml.load(content)

    const contentNode = {
      ...parsedContent,
      id: createNodeId(`${CONTENT_NODE_TYPE}-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        type: CONTENT_NODE_TYPE,
        contentDigest: createContentDigest(node),
      },
      relativePath: node.relativePath.replace(/(\.yaml$|\.yml$)/i, ''),
    };

    createNode(contentNode)
    createParentChildLink({ parent: node, child: contentNode })
  }
}
