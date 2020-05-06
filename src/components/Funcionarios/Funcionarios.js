import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'

import Navbar from '../../comuns/Navbar'
import Header from '../../comuns/Header'
import Api from '../../services/api'
import TbFuncionarios from './components/TbFuncionarios'

const Funcionarios = () => {
  const [funcionarios, setFuncionarios] = useState([])

  
  const listarFuncionarios = () => {
    Api.get("/funcionarios").then(resp => {
      setFuncionarios(resp.data)
      console.log(resp.data)
    }).catch(error => {
      console.log(error)
    })
  }
  
  useEffect(() => {
    listarFuncionarios()
  }, [])

  return(
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Header texto="Funcionarios" />
        <TbFuncionarios funcionarios={funcionarios} />
      </Container>
    </>
  )
}

export default Funcionarios