import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Assesment from './pages/Assesment'
import Result from './pages/Result'



import './stylesheets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/assesment" component={Assesment} />
          <Route path="/result" component={Result} />
        </Switch>
       </BrowserRouter> 
    );
  }
}

export default App;
