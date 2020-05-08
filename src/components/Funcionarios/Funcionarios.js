import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PersonIcon from '@material-ui/icons/PersonAdd';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/'
import Button from '@material-ui/core/Button'

// COMPONENTS
import Navbar from '../../comuns/Navbar'
import Header from '../../comuns/Header'
import TbFuncionarios from './components/TbFuncionarios'

// ACTIONS
import { listar, salvar } from '../../store/FuncionariosReducer'

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: 30
  }
}));

const Funcionarios = (props) => {
  const classes = useStyles()

  useEffect(() => {
    props.listar()
  })

  const showForm = () => {

  }

  return(
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Header texto="Funcionarios" />
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Button variant="outlined"
                  size="large"
                  className={classes.button}
                  startIcon={<PersonIcon />}
                  onClick={showForm}
          >
            Adicionar
          </Button>
        </Grid>
        <TbFuncionarios funcionarios={props.funcionarios} />
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  funcionarios: state.funcionarios.funcionarios
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({listar, salvar}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Funcionarios)