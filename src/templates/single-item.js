import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Chip from "@material-ui/core/Chip"
import Typography from "@material-ui/core/Typography"

import Avatar from "@material-ui/core/Avatar"


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: ".2em",
  },
  backButton: {
    textDecoration: "none",
  },
  card: {
    width: "50vw",
    margin: "0 auto",
    [theme.breakpoints.down('sm')]: {
      width: "95vw",
    },
  },
  player:{
    [theme.breakpoints.down('sm')]: {
      width: "98vw !important",

    },


  },
  cardContent: {
    height: 200,
  },

  title: {
    lineHeight: 1.2,
    fontsize: "1.3rem",
  },
  instructor: {
    color: "#616161",
  },
  tagChips: {
    margin: "3px 3px 3px 0px",
    height: 26,
  },
  tagArea: {
    marginTop: 10,
  },
  chipLabel: {
    color: "#c5c5c5",
  },
  instructorChips: {
    marginTop: 5,
    background: "none",
  },
})

const ItemPage = ({ data, classes }) => {
  //console.log(data);
  const item = data.item

  return (
    <Layout>
      <Card className={classes.card}>
        <CardActionArea>
          {/* <ReactPlayer controls={true} url={item.videoUrl} playing className={classes.player} /> */}

          <CardContent className={classes.cardContent}>
            <Link
              key={item.id}
              style={{ textDecoration: "none" }}
              to={`/book/${item.id}`}
            >
              <Typography variant="h5" component="h3" className={classes.title}>
                {item.title}
              </Typography>
            </Link>
            <div            
              style={{ textDecoration: "none" }}
            >
              <Chip
                avatar={
                  <Avatar alt="Instructor image" src={item.optimized_instructor_image.childImageSharp.fluid.src} />
                }
                label={item.author}
                variant="outlined"
                clickable
                className={classes.instructorChips}
              />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Layout>
  )
}

export default withStyles(styles)(ItemPage)

export const ItemPageQuery = graphql`
  query ItemDetails($itemId: String!) {
    item(id: { eq: $itemId }) {
      id
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
`
