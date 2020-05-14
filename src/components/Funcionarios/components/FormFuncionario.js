import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  button: {
    backgroundColor: '#00CCCC',
    '&:hover': {
      backgroundColor: '#00CCCC'
    },
    color: 'white',
  },
  titulo: {
    marginBottom: 20,
  },
  input: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00CCCC',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'lightgray',
      },
      '&:hover fieldset': {
        borderColor: 'gray',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00CCCC',
      }
    },
  }
}))

const estadoInicial = {
  nome: '',
  sobrenome: '',
  telefone: '',
  email: '',
  cpf: '',
  cargo: '',
  ctps: '',
  pis: '',
  endereco: '',
  cidade: '',
  uf: ''
}

const FormFuncionario = (props) => {
  const classes = useStyles()
  const [funcionario, setFuncionario] = useState(estadoInicial)

  const handleChange = event => {
    setFuncionario({
      ...funcionario,
      [event.target.name]: event.target.value
    })
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    props.salvar(funcionario)
    props.toggleForm()
    setFuncionario(estadoInicial)
  }

  return(
    <div className={classes.root}>
      <Typography variant="h5" 
                  color="textSecondary"
                  className={classes.titulo}
      >
        Formulário de Cadastro
      </Typography>
      <form className={classes.form}
            noValidate
            onSubmit={handleSubmit}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <TextField id="func_nome" 
                      label="Nome"
                      name="nome"
                      value={funcionario.nome}
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      className={classes.input}
                      onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="func_sobrenome" 
                      label="Sobrenome"
                      name="sobrenome"
                      value={funcionario.sobrenome}
                      variant="outlined"
                      required
                      fullWidth
                      size="small"
                      className={classes.input}
                      onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="func_telefone"
                       label="Telefone"
                       name="telefone"
                       value={funcionario.telefone}
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input}
                       onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="func_email"
                       label="Email"
                       name="email"
                       value={funcionario.email}
                       required
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input} 
                       onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="func_cpf"
                       label="CPF"
                       name="cpf"
                       value={funcionario.cpf}
                       required
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input} 
                       onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="func_cargo"
                       label="Cargo"
                       name="cargo"
                       value={funcionario.cargo}
                       required
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input}
                       onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="func_ctps"
                       label="CTPS"
                       name="ctps"
                       value={funcionario.ctps}
                       required
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input}
                       onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="func_pis"
                       label="PIS"
                       name="pis"
                       value={funcionario.pis}
                       required
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input}
                       onChange={handleChange}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="func_endereco"
                       label="Endereço"
                       name="endereco"
                       value={funcionario.endereco}
                       required
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input}
                       onChange={handleChange}
              />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField id="func_cidade"
                       label="Cidade"
                       name="cidade"
                       value={funcionario.cidade}
                       required
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input}
                       onChange={handleChange}
              />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField id="func_uf"
                       label="UF"
                       name="uf"
                       value={funcionario.uf}
                       required
                       variant="outlined"
                       fullWidth
                       size="small"
                       className={classes.input}
                       onChange={handleChange}
              />
          </Grid>
          <Grid item xs={12} 
                container
                direction="row"
                justify="flex-end"
                
          >
            <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<CheckIcon />}
                className={classes.button}
              >
                Salvar
            </Button>
          </Grid>
          
        </Grid>
      </form>
    </div>
  )

}

export default FormFuncionario