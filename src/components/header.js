import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withFirebase } from './FirebaseContext'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = ({ siteTitle, firebase }) => {
  const classes = useStyles()

  const signOut = () => {
    firebase.auth().signOut()
  }

  const { currentUser } = firebase.auth()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          {currentUser && (
            <Button color="inherit" onClick={signOut}>
              Log out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withFirebase(Header)
