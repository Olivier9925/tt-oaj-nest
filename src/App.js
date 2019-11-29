import React from 'react';
import RoomList from './components/RoomList'
import ClientList from './components/ClientList'
import { Switch, Route } from 'react-router-dom';
import Provider from "./providers/Provider";


const App = () =>
{

  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={RoomList} />
        <Route path="/clients" component={ClientList} />
      </Switch>
    </Provider>
  );
}


export default App;
