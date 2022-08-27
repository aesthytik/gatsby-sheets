import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import VideoCard from "../components/VideoCard"


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    margin: 10,
    width: 70,
    height: 70,
  },
  ListItemParentDiv: {
    display: "flex",
  },
  flexBoxParentDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    "&::after": {
      content: "",
      flex: "auto",
    },
  },
})

class IndexPage extends React.Component {
  render() {
    const classes = this.props.classes

    let items = this.props.data.allItem.edges

    return (
      <Layout>
        <SEO title="AcroTags" />
        <div className={classes.root}>
          <div className={classes.flexBoxParentDiv}>
            {items.map((item, index) => (
           
                <VideoCard key={index} item={item} />
          
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default withStyles(styles)(IndexPage)

export const query = graphql`
  query IndexQuery {
    allItem {
      edges {
        node {
          id
      optimized_thumbnail {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      optimized_instructor_image {
        childImageSharp {
          fluid(maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
        }
      }
    }
  }
`
