import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    color: 'blue'
  }
})

export default withStyles(styles)(({ classes }) => (
  <p className={classes.root}>Dumb withStyles</p>
)
)
