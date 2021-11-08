const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
  
    // community/member/id メンバー詳細ページ作成
    const autherTemplate = path.resolve(`./src/templates/auther-post.js`)
    const autherPostResult = await graphql(
      (`
        {
          authers: allMicrocmsAuthers {
            edges {
              node {
                id
              }
            }
          }
        }
      `)
    )

    autherPostResult.data.authers.edges.forEach(edge => {
        createPage({
          path: `/auther/${edge.node.id}`,
          component: autherTemplate,
          context: {
            id: edge.node.id,
          },
        })
      })
}