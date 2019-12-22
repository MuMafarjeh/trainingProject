import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppTab from './appTab/AppTab';
import Footer from './appFooter/Footer';
import Chart from './chartComponent/Chart';
import Form from './formComponent/Form';
import getingData from './getData/getingData';
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom';
import ListOfData from './getData/getingData';
import { type } from 'os';
import TheTable from './enhancedTable';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store/store'


const theme = createMuiTheme({

  palette: {

    primary: {
      main: '#004D40',
    },
    secondary:{
     main:'#747B27',
    },
  },
});

const App = () => {
  return (

    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppTab />
          <BrowserRouter>
            <Switch>

              <Route path="/chart" component={Chart} />
              <Route path="/form" component={Form} />
              <Route path="/Table" component={TheTable} />
              <Route exact component={TheTable} />
            </Switch>
          </BrowserRouter>
          {/* <Footer/> */}
        </ThemeProvider>

      </Provider>
    </div>

  );
}


export default App;
