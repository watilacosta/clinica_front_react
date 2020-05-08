import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function TbFuncionarios(props) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="a dense table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome Completo</TableCell>
            <TableCell align="center">Telefone</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Cargo</TableCell>
            <TableCell align="center">Cidade/UF</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { props.funcionarios.map((funcionario) => (
            <TableRow key={funcionario.id}>
              <TableCell component="th" scope="row">
                <Chip avatar={<Avatar>{funcionario.nome.charAt(0).toUpperCase()}</Avatar>} 
                      label={`${funcionario.nome} ${funcionario.sobrenome}`}
                />
              </TableCell>
              <TableCell align="center">{funcionario.telefone}</TableCell>
              <TableCell align="center">{funcionario.email}</TableCell>
              <TableCell align="center">{funcionario.cargo}</TableCell>
              <TableCell align="center">{`${funcionario.cidade || '-'} - ${funcionario.uf || '-'}`}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" size="small">
                  <EditIcon fontSize="inherit" color="action" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon fontSize="inherit" color="action" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
