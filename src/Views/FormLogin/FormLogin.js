import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import { withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Background from '../../images/image_login.jpg'
import Api from '../../services/api'
import { login } from '../../services/auth'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Clínica Médica
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(5),
    backgroundColor: '#00CCCC',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#00CCCC',
    color: 'white',
    height: 40
  },
  alert: {
    marginTop: theme.spacing(2)
  }
}))

const FormLogin = () => {
  const classes = useStyles()
  const history = createBrowserHistory({forceRefresh: true})

  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [open, setOpen]         = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault()

    if(!email || !password) {
      setError("Preencha os campos de email e password para entrar no sistema!")
      setOpen(true)
    } else {
      try {
        const response = await Api.post("/funcionario_token", {"auth": {email, password}})
        login(response.data.jwt)
        history.push('/app')
      } catch (err) {
        setError("Não foi possível fazer o login no sistema, verifique suas credenciais.")
        setOpen(true)
      }
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Acesso do Usuário
          </Typography>
          { open ? <Alert onClose={() => setOpen(false)} 
                          severity="warning"
                          className={classes.alert}>{error}</Alert> : '' }

          <form className={classes.form} 
                noValidate
                onSubmit={handleSignIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Entrar
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="!#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
            </Grid> */}
            <Box mt={2}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default withRouter(FormLogin)