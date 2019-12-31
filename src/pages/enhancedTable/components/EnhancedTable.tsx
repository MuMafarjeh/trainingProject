
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import BodyTableContainer from './TableBodyContainer';
import SearchBarContainer from './SearchBarContainer';
import { filterData } from './utils'
import { createContext } from 'react';
import { useStyles } from './style';
import TableHeaderContainer from './TableHeaderContainer';
import { withStyles } from '@material-ui/styles';



class simpleTable extends Component<any, any>{

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      searchedData: [],
      sortDirection: "ASC",
      columnSorted: "",
      sortedData: [],
      classes: useStyles,
      columns: [
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
        },
      ]
    };
    // this.doFilter.bind(this)
  }

  componentDidMount() {
    this.setState({ data: this.props.allData })
  }
  componentDidUpdate(prevProps: any) {
    if (JSON.stringify(prevProps.allData) != JSON.stringify(this.props.allData)) {
      this.setState({ data: this.props.allData })
      this.setState({ sortedData: this.props.allData })
      console.log(this.props.allData, 'allData');
    }
  }

  handleSort = (sortedColumn: any) => {
    const result = this.props.allData.slice(0);
    console.log(result, 'fromApi');
    // debugger
    const columnToSort = sortedColumn;
    this.setState({ columnSorted: columnToSort.accessor })

    result.sort((a: any, b: any) => {
      let nextDirection = this.state.sortDirection == "" ? "ASC" : (this.state.sortDirection == "ASC" ? "DESC" : "");
      this.setState({ sortDirection: nextDirection });
      if (columnToSort === sortedColumn) {
        if (this.state.sortDirection === "ASC") {

          if (a[sortedColumn.accessor] < b[sortedColumn.accessor]) return -1;
          if (a[sortedColumn.accessor] > b[sortedColumn.accessor]) return 1;


        }
        else if (this.state.sortDirection === "DESC") {

          if (a[sortedColumn.accessor] > b[sortedColumn.accessor]) return -1;
          if (a[sortedColumn.accessor] < b[sortedColumn.accessor]) return 1;


        }

      }
      return 0;
    });
    this.setState({ data: result })
    //  this.props.dispatchSort(result);
    console.log(this.state.data, "rererere");
  }



  doFilter = (value: any) => {
    console.log(value, 'vvv');
    console.log(this.state.searchedData, 'searchstate');
    const filterd = filterData(value, this.props.allData);
    this.setState({ data: filterd });
    console.log(filterd, 'filtered');
    //  this.props.dispatchSearch(filterd);
  }
  render() {
    const { classes } = this.props;
    return (

      <>
        <>
          <SearchBarContainer
            onChange={this.doFilter}
          />
        </>
        <Paper className={classes.root}>
          <Table >

            <TableHeaderContainer
              onSort={this.handleSort}
              columns={this.state.columns}
              sortDirection={this.state.sortDirection}
              columnSorted={this.state.columnSorted}
            />


            <BodyTableContainer
              allData={this.state.data}
            />




          </Table>
        </Paper>
      </>
    )
  }
}
export default (useStyles)(simpleTable);



