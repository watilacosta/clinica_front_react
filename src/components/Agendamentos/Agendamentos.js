import React from "react"
import Container from "@material-ui/core/Container"

import Navbar from "../../comuns/Navbar"
import Header from "../../comuns/Header"

const Agendamentos = () => {
  return(
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Header texto="Agendamentos" />
      </Container>
    </>
  )
}

export default Agendamentos