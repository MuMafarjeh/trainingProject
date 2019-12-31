import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Button, Switch, InputBase, IconButton, Menu, MenuItem, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { borderRight } from '@material-ui/system';
import { withRouter, RouteComponentProps } from "react-router-dom";
import Chart from '../../pages/chart/components/Chart';
import TheTable from '../../tableComponent/Table';
import useStyles from './style';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

interface IType extends RouteComponentProps {
  [key: string]: any
}
function SimpleTabs(props: IType) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBArAr}>
        <div className={classes.appBarContent}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            My-Project
          </Typography>

          <div className={classes.allButton}>
            <Button variant="contained" className={classes.button} onClick={() => {
              props.history.push("/")
            }} >

              Table
              {/* <a href="/"> Table</a> */}

            </Button>
            <Button variant="contained" className={classes.button} onClick={() => {
              props.history.push("/chart")
            }}>
              Chart
            {/* <a href="/chart"> Chart</a> */}
            </Button>
            <Button variant="contained" className={classes.button} onClick={() => {
              props.history.push("/form")
            }}>
              Form
            {/* <a href="/form"> Form</a> */}
            </Button>
            <Button variant="contained" className={classes.button} onClick={() => {
              props.history.push("/other")
            }

            }>
              Other
            {/* <a href="/other">Other</a> */}
            </Button>
          </div>
          {/* <div className={classes.grow} /> */}
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>


            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </div>


      </AppBar>

    </div>
  );
}

export default withRouter(SimpleTabs)

