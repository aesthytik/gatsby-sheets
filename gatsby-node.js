const path = require(`path`)
const axios = require("axios")
const _ = require("lodash")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allItem {
        edges {
          node {
            title
            subTitle
            description
            cardLink
            backgroundImageLink
            tag1
            tag2
            tag3
            tag4
            filter
            textColor
            backgroundColor
            cssClassNames
            author
            noOfPages
            isbnCode
            isbnLink
            color
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const items = result.data.allItem.edges

    items.forEach(edge => {
      const id = edge.node.title
      const title = edge.node.title
      const videoPath = `/book/${_.kebabCase(title)}/`

      createPage({
        path: videoPath,
        component: path.resolve(`src/templates/single-item.js`),
        context: {
          itemId: id,
        },
      })
    })

    // Tag pages:
    // let tags = []

    // items.forEach(item => {
    //   if (item.node.tags.length > -1) {
    //     tags = tags.concat(item.node.tags)
    //   }
    // })

    // tags = _.uniq(tags)

    // tags.forEach(tag => {
    //   const tagPath = `/tag/${_.kebabCase(tag)}/`

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/single-tag.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })

    // let instructors = []

    // items.forEach(item => {
    //   if (item.node.instructor.length > -1) {
    //     instructors = instructors.concat(item.node.instructor)
    //   }
    // })

    // instructors = _.uniq(instructors)

    // instructors.forEach(instructor => {
    //   const instructorPath = `/instructor/${_.kebabCase(instructor)}/`

    //   createPage({
    //     path: instructorPath,
    //     component: path.resolve(`src/templates/single-instructor.js`),
    //     context: {
    //       instructor,
    //     },
    //   })
    // })
  })
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const fetchFormItems = () =>
    axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/1yOjr0NnVh_suhi3gZ3UgX1zevxE98MEwVEVBCfvqDbU/values:batchGet?ranges=Body-Cards&majorDimension=ROWS&key=AIzaSyBHsyTGw6l2iNavJxLOHBvWh7p03hjXPb4`
    )

  const response = await fetchFormItems()

  const arrayOfItems = response.data.valueRanges[0].values

  let rows = []
  for (var i = 1; i < arrayOfItems.length; i++) {
    var rowObject = {}
    for (var j = 0; j < arrayOfItems[i].length; j++) {
      rowObject[arrayOfItems[0][j]] = arrayOfItems[i][j]
    }
    rows.push(rowObject)
  }

  let itemsArray = rows;

  itemsArray.map((item, i) => {
    const itemNode = {
      id: createNodeId(`${i}`),
      parent: `__SOURCE__`,
      internal: {
        type: `item`, // name of the graphQL query --> allItem {}
        contentDigest: createContentDigest(item),
      },
      children: [],
      title: item.title,
      subTitle: item.subTitle,
      description: item.description,
      cardLink: item.cardLink,
      backgroundImageLink: item.backgroundImageLink,
      tag1: item.tag1,
      tag2: item.tag2,
      tag3: item.tag3,
      tag4: item.tag4,
      filter: item.filter,
      textColor: item.textColor,
      backgroundColor: item.backgroundColor,
      cssClassNames: item.cssClassNames,
      author: item.author,
      noOfPages: item.noOfPages,
      isbnCode: item.isbnCode,
      isbnLink: item.isbnLink,
      color: item.color,
    }

    createNode(itemNode)
  })
}
