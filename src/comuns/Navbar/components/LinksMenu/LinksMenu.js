import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  linkMenu: {
    margin: 8,
  }
}))

const LinksMenu = () => {
  const classes = useStyles()

  return(
    <>
      <Link component={RouterLink}
            to="/app"
            color="inherit"
            underline="hover"
            className={classes.linkMenu}>
            Início
      </Link>
      <Link component={RouterLink}
            to="/agendamentos"
            color="inherit"
            underline="hover"
            className={classes.linkMenu}>
            Agendamentos
      </Link>
    </>
  )
}

export default LinksMenu
