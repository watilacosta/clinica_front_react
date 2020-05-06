import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(() => ({
  divider: {
    marginBottom: 30,
  }
}))

const Header = (props) => {
  const classes = useStyles()

  return(
    <>
      <Typography variant="h4" 
                  color="textSecondary" 
      >
        {props.texto}
      </Typography>
      <Divider light variant="fullWidth" className={classes.divider} />
    </>
  )
}

export default Header