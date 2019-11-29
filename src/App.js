import React, { Component, createContext } from 'react';
import axios from 'axios';
import RoomList from './components/RoomList'
import ClientList from './components/ClientList'
import { Switch, Route } from 'react-router-dom';


import './App.css';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      rooms: [],
      clients: [],
    }
  }




  render()
  {
    return (
      <Switch>
        <div className="App">
          <Route exact path="/" Component={RoomList} />
          <Route path="/clients" Component={ClientList} />
        </div>
      </Switch>
    );
  }
}

export default App;
