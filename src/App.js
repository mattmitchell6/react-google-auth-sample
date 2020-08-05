import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

// components
import Home from './components/home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
