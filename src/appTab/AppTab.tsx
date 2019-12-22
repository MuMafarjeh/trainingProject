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
import TheTable from '../tableComponent/Table';
import useStyles from './style';

export default function SimpleTabs(props: any) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBArAr}>
        <div>
          <Button variant="contained" className={classes.button} onClick={() => {

          }} >


            <a href="/"> Table</a>

          </Button>
          <Button variant="contained" className={classes.button} onClick={() => {

          }}  >

            <a href="/chart"> Chart</a>
          </Button>
          <Button variant="contained" className={classes.button} onClick={() => {

          }}>

            <a href="/form"> Form</a>
          </Button>
          <Button variant="contained" className={classes.button}>

            <a href="/other">Other</a>
          </Button>
        </div>

      </AppBar>

    </div>
  );
}

