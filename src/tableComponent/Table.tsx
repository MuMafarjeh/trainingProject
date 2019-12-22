

import React, { useState, useEffect, Component } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader';
import BodyOfTable from "./TableBody";
import { any, number, string } from 'prop-types';
import axios from 'axios';
import BodyTable from './TableBody';
import BodyTableContainer from './TableBodyContainer';
import SearchBarContainer from './SearchBarContainer';
import { filterData } from './utils'
import { InputBase, TextField } from '@material-ui/core';
import getAllData from './getTableData';
import { createContext } from 'react';
import { EditContext } from './editContext';
import useStyles from './style';
import TableHeaderContainer from './TableHeaderContainer';



function SimpleTable() {

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
  const [allData, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);


  useEffect(() => {

  setSearchedData(filteredData);
  // console.log(searchedData,"searchedData");
  
  


  })


  const [sortDirection, setSortDirection] = useState("ASC");
  const [columnSorted, setColumnToSort] = useState("");

  const handleSort = (sortedColumn: any) => {

    const columnToSort = sortedColumn;
    setColumnToSort(columnToSort.accessor);
    // console.log(filteredData, "fffffffff");
    const result = filteredData.slice(0);


    result.sort((a, b) => {

      let nextDirection = sortDirection == "" ? "ASC" : (sortDirection == "ASC" ? "DESC" : "");

      setSortDirection(nextDirection);
      console.log(sortDirection)
      if (columnToSort === sortedColumn) {
        if (sortDirection === "ASC") {

          if (a[sortedColumn.accessor] < b[sortedColumn.accessor]) return -1;
          if (a[sortedColumn.accessor] > b[sortedColumn.accessor]) return 1;


        }
        else if (sortDirection === "DESC") {

          if (a[sortedColumn.accessor] > b[sortedColumn.accessor]) return -1;
          if (a[sortedColumn.accessor] < b[sortedColumn.accessor]) return 1;

        }



      }

      return 0;

    });
    setFilteredData(result);

    console.log(result, "rererere");

  }


  const doFilter = (v: any) => {
    const filterd = filterData(v, filteredData);
    console.log(filteredData, "foil")
    // setFilteredData(filterd);
    setSearchedData(filterd);

    console.log(filterd);
  }

  return (

    <>
      <>
        <SearchBarContainer
          dataFilter={searchedData}
          onChange={doFilter} 
          />
        {/* <SearchBar onChange={doFilter} /> */}

      </>

      <Paper className={classes.root}>

        <Table className={classes.table}>

          <TableHeaderContainer
            DataSorted={filteredData}
            onSort={handleSort}
            columns={columns}
            sortDirection={sortDirection}
            columnSorted={columnSorted}
          // onSortData={(data:any) => getData(data)}
          />
          {/* <TableHeader
            onSort={handleSort}
            columns={columns}
            sortDirection={sortDirection}
            columnSorted={columnSorted}
          /> */}

          <BodyTableContainer
            allData={filteredData}
            onEdit={(data) => setFilteredData(data)}

          />




        </Table>
      </Paper>
    </>
  );
}
export default (SimpleTable);


