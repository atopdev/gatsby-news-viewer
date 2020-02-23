import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
    marginBottom: 16,
    marginRight: 10,
    '&:last-child': {
      marginRight: 0,
    },
  },
  description: {
    height: 126,
    fontSize: 14,
    lineHeight: 1.5,
    overflow: 'hidden',
  },
  content: {
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    lineHeight: 1.5,
    height: 54,
    overflow: 'hidden',
  },
})

export default function NewsCard({
  news: { description, title, url, urlToImage },
}) {
  const classes = useStyles()
  if (!title) {
    return null
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={urlToImage}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={url}>
          View
        </Button>
      </CardActions>
    </Card>
  )
}
