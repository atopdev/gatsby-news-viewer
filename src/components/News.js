import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import NewsCard from './NewsCard'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 30,
    justifyContent: 'center',
  },
})

const News = () => {
  const classes = useStyles()

  // Build Time Data Fetching
  const data = useStaticQuery(graphql`
    query {
      allInternalPosts(filter: { id: { ne: "dummy" } }) {
        edges {
          node {
            description
            title
            content
            url
            urlToImage
            author
          }
        }
      }
    }
  `)

  return (
    <div className={classes.container}>
      {data.allInternalPosts.edges.map(({ node }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <NewsCard key={`news-${index}`} news={node} />
      ))}
    </div>
  )
}
export default News
