import React, { Component } from 'react';
import axios from 'axios';
import RoomList from './components/RoomList'

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

  componentDidMount()
  {
    axios.get("https://technical-test-api.herokuapp.com/rooms")
      .then((response) => response.data)
      .then((data) =>
      {
        this.setState({
          rooms: data
        });
      });

    axios.get("https://technical-test-api.herokuapp.com/clients")
      .then((response) => response.data)
      .then((data) =>
      {
        this.setState({
          clients: data
        });
      });
  }


  render()
  {
    return (
      <div className="App">
        <RoomList rooms={this.state.rooms} />
      </div>
    );
  }
}

export default App;
