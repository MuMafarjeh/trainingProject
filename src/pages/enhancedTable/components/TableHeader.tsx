
import { TableHead, TableRow, TableCell, makeStyles, createStyles, Theme } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { ITableHeaderContainer } from './TableHeaderContainer';

interface IProps extends React.Props<ITableHeaderContainer>, ITableHeaderContainer {
  columns: Array<any>;
  sortDirection: any;
  columnSorted: any;
  onSort: (column: any) => void;


}

function TableHeader(props: IProps) {
  const { columns, sortDirection, columnSorted, onSort } = props;
  const [data, setData] = useState([] as any);
  const handleClick = (e: any, column: any) => {
    props.onSort(column);


  }




  return <TableHead>
    <TableRow >
      {
        props.columns.map((x: any, i: any) =>
          <TableCell key={x.Header + x.id} onClick={e => handleClick(e, x)} > {x.Header}
            {x.accessor == props.columnSorted ? (props.sortDirection == "" ? <ArrowDropUpIcon /> :
              (props.sortDirection == "DESC" ? <ArrowDropDownIcon /> : null)) : null}
          </TableCell>
        )

      }
      <TableCell>Inline Edit</TableCell>
      <TableCell>Delete Row</TableCell>
      <TableCell>Dialog Edit</TableCell>
    </TableRow>
  </TableHead>


}


export { TableHeader as default }