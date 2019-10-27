

import React, { useState, useEffect, Component } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader';
import BodyOfTable from "./bodyoftable";
import { any, number, string } from 'prop-types';
import axios from 'axios';
import BodyTable from './bodyoftable';
import SearchBar from './SearchBar';
import { filterData } from './utils'
import { InputBase, TextField } from '@material-ui/core';
import getAllData from './getTableData';

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
    input: {
      marginLeft: theme.spacing(2),
      flex: 1,
      marginTop: '5px',
      padding: '2px 4px',
      display: 'flex',

      width: 400,
    },
    theForm: {
      marginTop: '5px',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
  }),
);


export default function SimpleTable() {


  const columns = [
    {
      Header: "User Id",
      accessor: "id",

    },
    {
      Header: "User Email",
      accessor: "email",

    },
    {
      Header: "First Name",
      accessor: "first_name",

    },
    {
      Header: "Last Name",
      accessor: "last_name"
    }
  ]

  const classes = useStyles();
  const [theData, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getAllData().then(data => {
      setData(data);
      setFilteredData(data)
      return data
    });

  }, [])


  const [sortDirection, setSortDirection] = useState("ASC");

  const handleSort = (sortedColumn: any) => {
    const columnToSort = sortedColumn;

    const result = theData.slice(0);
    result.sort((a, b) => {
      console.log(sortDirection);
      if (columnToSort === sortedColumn) {
        if (sortDirection === "ASC") {

          setSortDirection("DESC")
          if (a[sortedColumn.accessor] < b[sortedColumn.accessor]) return -1;
          if (a[sortedColumn.accessor] > b[sortedColumn.accessor]) return 1;

        }

        else if (sortDirection === "DESC") {
          setSortDirection("ASC")
          if (a[sortedColumn.accessor] > b[sortedColumn.accessor]) return -1;
          if (a[sortedColumn.accessor] < b[sortedColumn.accessor]) return 1;

        }

      }

      return 0;

    });

    console.log(result);
    setFilteredData(result);
  }


  const doFilter = (v: any) => {
    const filterd = filterData(v, theData);
    setFilteredData(filterd);
    console.log(filterd);
  }
  return (

    <div>
      <div>

        <SearchBar onChange={doFilter} />

      </div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHeader onSort={handleSort} columns={columns} />
          <BodyTable theData={filteredData} />
        </Table>
      </Paper>
    </div>
  );
}



