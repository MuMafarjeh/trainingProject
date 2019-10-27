import { TableRow, TableCell, TableBody, makeStyles, Theme, createStyles } from '@material-ui/core';
import getAllData from './getTableData';
import React from 'react';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    marginTop: theme.spacing(10),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

interface IProps {
  theData: Array<any>
}

function BodyTable(props: IProps) {
  const { theData } = props;

  return <div><TableBody>
    {theData.map((row: any) => (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.first_name}</TableCell>
        <TableCell align="right">{row.last_name}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  </div>
}

export { BodyTable as default }