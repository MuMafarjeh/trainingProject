
import { TableHead, TableRow, TableCell, makeStyles, createStyles, Theme } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { ITableHeaderContainer } from './TableHeaderContainer';

interface IProps extends React.Props<ITableHeaderContainer> ,ITableHeaderContainer {
  columns: Array<any>;
  sortDirection: any;
  columnSorted: any;
  onSortDispatch:(dataSorted:any)=> void;
  
}

function TableHeader(props: IProps) {
  const { columns, sortDirection, columnSorted,onSortDispatch } = props;
  const [data,setData]= useState([] as any);
  const handleClick = (e: any, column: any) => {
    props.onSort(column);
    
    onSortDispatch(data);
    //  console.log(data,"pops")
  }
    useEffect(()=>{
      setData(props.DataSorted);
     console.log(data,"dataSorted")

    },[])
    
   

  return <TableHead>
    <TableRow >
      {
       props.columns.map((x: any, i: any) =>
          <TableCell key={x.Header + x.id} onClick={e => handleClick(e, x)} > {x.Header}
            {x.accessor == props.columnSorted ? (props.sortDirection == "" ? <ArrowDropUpIcon />  :(props.sortDirection=="DESC"?<ArrowDropDownIcon/>:null) ): null}



            


          </TableCell>)
      }
    </TableRow>
  </TableHead>


}


export { TableHeader as default }