import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Button, Switch } from '@material-ui/core';
import { borderRight } from '@material-ui/system';
import { BrowserRouter, Route } from "react-router-dom";
import Chart from '../chartComponent/Chart';
import TheTable from '../myTable/MyTable';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 5,
    backgroundColor: theme.palette.background.paper,
    marginTop: 10,

  },
  appBArAr: {
    display: "flex",
    padding: 30,

  },
  button: {
    margin: theme.spacing(1),
  },

}));

export default function SimpleTabs(props: any) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBArAr}>
        <div>
          <Button variant="contained" className={classes.button} onClick={() => {

          }} >


            <a href="/">The Table</a>

          </Button>
          <Button variant="contained" className={classes.button} onClick={() => {

          }}  >

            <a href="/chart">The Chart</a>
          </Button>
          <Button variant="contained" className={classes.button} onClick={() => {

          }}>

            <a href="/form">The Form</a>
          </Button>
          <Button variant="contained" className={classes.button}>

            <a href="/other">Other</a>
          </Button>
        </div>

      </AppBar>

    </div>
  );
}

