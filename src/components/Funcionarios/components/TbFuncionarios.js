import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TbFuncionarios(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome Completo</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Cargo</TableCell>
            <TableCell align="right">Cidade/UF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.funcionarios.map((funcionario) => (
            <TableRow key={funcionario.id}>
              <TableCell component="th" scope="row">
                {`${funcionario.nome} ${funcionario.sobrenome}`}
              </TableCell>
              <TableCell align="right">{funcionario.telefone}</TableCell>
              <TableCell align="right">{funcionario.email}</TableCell>
              <TableCell align="right">{funcionario.cargo}</TableCell>
              <TableCell align="right">{`${funcionario.cidade} - ${funcionario.uf}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
