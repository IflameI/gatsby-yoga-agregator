const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query AllYogas {
      allMongodbYogasYoga {
        nodes {
          id
        }
      }
    }
  `)

  data.allMongodbYogasYoga.nodes.forEach(node => {
    console.log(node.id)
    createPage({
      path: `/place/${node.id}`,
      component: path.resolve("./src/pages/InternalPage.js"),
      context: { url: node.id },
    })
  })
}
