import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Navbar from '../../comuns/Navbar'
import Header from '../../comuns/Header'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))

const Home = () => {
  const classes = useStyles()

  return(
    <>
      <Navbar />
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Header texto="Área Administrativa" />
          teste
        </div>
      </Container>
    </>
  )
}

export default Home