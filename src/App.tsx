import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppTab from './appTab/AppTab';
import Chart from './chartComponent/Chart';
import Form from './theForm/Form';
import getingData from './getData/getingData';
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker'
import ReactDOM from 'react-dom';
import ListOfData from './getData/getingData';
import { type } from 'os';
import TheTable from './myTable/MyTable';

const App = () => {
  return (

    <div className="App">

      <AppTab />
      <BrowserRouter>
        <Switch>

          <Route path="/chart" component={Chart} />
          <Route path="/form" component={Form} />
          <Route path="/Table" component={TheTable} />
          <Route exact component={TheTable} />
        </Switch>
      </BrowserRouter>

    </div>

  );
}


export default App;
