import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Link from "gatsby-link"

import Img from 'gatsby-image'

import { kebabCase } from "lodash"

const styles = theme => ({
  card: {
    width: 310,
    margin: 10,
    [theme.breakpoints.down('sm')]: {
      width: "98vw",
    },

  },
  cardContent: {
    height: 230,
    [theme.breakpoints.down('sm')]: {
      height:180
    },
  },
  media: {
    height: 170,
  },
  title: {
    lineHeight: 1.2,
    fontSize: "1.2rem",
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

function VideoCard(props) {
  const { classes, item } = props

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link
          key={item.node.id}
          style={{ textDecoration: "none" }}
          to={`/book/${kebabCase(item.node.title)}/`}
        >
      
          <Img
          alt={`Picture of ${item.node.title}`}
          fluid={item.node.backgroundImageLink}
        />
        </Link>
        <CardContent className={classes.cardContent}>
          <Link
            key={item.node.id}
            style={{ textDecoration: "none" }}
            to={`/video/${kebabCase(item.node.title)}/`}
          >
            <Typography variant="h5" component="h3" className={classes.title}>
              {item.node.title}
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withStyles(styles)(VideoCard)
