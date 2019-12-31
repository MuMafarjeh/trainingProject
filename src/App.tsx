import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppTab from './components/appTab/AppTab';
import Footer from './components/appFooter/Footer';
import Chart from './pages/chart/index';
import Form from './pages/registerForm/Form';
import getingData from './pages/enhancedTable/getData/getingData';
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom';
import ListOfData from './pages/enhancedTable/getData/getingData';
import { type } from 'os';
import TheTable from './pages/enhancedTable';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store/store'


const theme = createMuiTheme({

  palette: {

    primary: {
      main: '#004D40',
    },
    secondary: {
      main: '#747B27',
    },
  },
});


const App = () => {
  return (

    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppTab />
            <Switch>
              <Route path="/chart" component={Chart} />
              <Route path="/form" component={Form} />
              <Route exact component={TheTable} />
              <Route path="/other" component={undefined} />
            </Switch>
          </BrowserRouter>
          {/* <Footer/> */}
        </ThemeProvider>
      </Provider>
    </div>

  );
}


export default App;
