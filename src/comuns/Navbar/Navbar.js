import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { createBrowserHistory } from 'history'

import LinksMenu from './components/LinksMenu/LinksMenu'
import { logout } from '../../services/auth'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  profileButton: {
    fontSize: 30
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    background: '#00CCCC'
  },
  toobar: {
    margin: 0,
    padding: 0
  },
  linkMenu: {
    margin: 8
  }
}))

export default function Navbar() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const history = createBrowserHistory({forceRefresh: true})
  
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }

  function handleLogout() {
    logout()
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toobar}>
            <Typography variant="h5" className={classes.title}>Clínica Médica</Typography>
            <LinksMenu />
            <IconButton color="inherit" 
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleMenu}>
              <AccountCircle className={classes.profileButton} />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}