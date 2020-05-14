import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PersonIcon from '@material-ui/icons/PersonAdd';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'

// COMPONENTS
import Navbar from '../../comuns/Navbar'
import Header from '../../comuns/Header'
import TbFuncionarios from './components/TbFuncionarios'

// ACTIONS
import { listar, salvar, excluir } from '../../store/FuncionariosReducer'
import FormFuncionario from './components/FormFuncionario';

const useStyles = makeStyles(() => ({
  container: {
    marginBottom: 30
  },
  gridContainer: {
    marginBottom: 10
  },
  collapse: {
    marginBottom: 40,
  },
  paper: {
    padding: 20
  }
}));

const Funcionarios = (props) => {
  const classes = useStyles()
  const [visible, setVisible] = useState(false)
  
  const { listar } = props

  useEffect(() => {
    listar()
  }, [listar])

  const toggleForm = () => {
    setVisible(!visible)
  }

  return(
    <>
      <Navbar />
      <Container maxWidth="xl"
                 className={classes.container}
      >
        <Header texto="Funcionarios" />
        <Grid
          container
          className={classes.gridContainer}
          direction="column"
          justify="center"
          alignItems="flex-end"
          
        >
          <Button variant="outlined"
                  size="large"
                  startIcon={<PersonIcon />}
                  onClick={toggleForm}
          >
            Adicionar
          </Button>
        </Grid>
        <Collapse in={visible}
                  timeout={500}
                  className={classes.collapse}
        >
          <Paper className={classes.paper}>
            <FormFuncionario salvar={props.salvar} toggleForm={toggleForm} />
          </Paper>
        </Collapse>

        <TbFuncionarios funcionarios={props.funcionarios}
                        excluir={props.excluir} />
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  funcionarios: state.funcionarios.funcionarios
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ listar, salvar, excluir }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Funcionarios)