import React from 'react'
import Container from '@material-ui/core/Container'

import Navbar from '../../comuns/Navbar'

const Inicio = () => {
  return(
    <>
      <Navbar />
      <Container maxWidth="lg">
        <h1>Início</h1>
      </Container>
    </>
  )
}

export default Inicio