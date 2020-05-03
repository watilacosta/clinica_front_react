import React from 'react'
import { Container } from '@material-ui/core'
import { HashRouter } from 'react-router-dom'

import Rotas from './rotas'
import Navbar from './comuns/Navbar'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Container maxWidth="lg">
        <Rotas />
      </Container>
    </HashRouter>
  )
}

export default App
