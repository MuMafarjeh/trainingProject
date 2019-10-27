
import { TableHead, TableRow, TableCell, makeStyles, createStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',


    },
    table: {
      minWidth: 650,
    },
  }),
);

interface IProps {
  columns: Array<any>;
  onSort: (column: any) => void;
}

function TableHeader(props: IProps) {
  const { columns, onSort } = props;

  const handleClick = (e: any, column: any) => {

    onSort(column);
  }
  return <div>

    <TableHead>

      <TableRow>
        {
          columns.map((x: any, i: any) =>
            <TableCell key={i} onClick={e => handleClick(e, x)} > {x.Header}</TableCell>)
        }
      </TableRow>
    </TableHead>

  </div>
}


export { TableHeader as default }