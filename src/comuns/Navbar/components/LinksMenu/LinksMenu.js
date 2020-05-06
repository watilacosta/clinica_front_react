import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import GroupIcon from '@material-ui/icons/Group'

const LinksMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return(
    <>
      <Button component={RouterLink}
            to="/"
            color="inherit"
      >
        Início
      </Button>
      <Button component={RouterLink}
            to="/agendamentos"
            color="inherit"
            >
            Agendamentos
      </Button>
      <Button aria-controls="simple-menu" 
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
      >
        Cadastros
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={RouterLink} to="/funcionarios">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          Funcionários
        </MenuItem>
      </Menu>

    </>
  )
}

export default LinksMenu
