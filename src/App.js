import React from 'react';
import RoomList from './components/RoomList'
import ClientList from './components/ClientList'
import { Switch, Route } from 'react-router-dom';
import Provider from "./providers/Provider";
import Menu from './components/Menu';
import { Card } from 'reactstrap';


const App = () =>
{
  const displayRooms = (rooms) => rooms.map((room, i) => { return (<div className='styleRoomLine' key={i} onClick={() => { (this.setState({ selectedRoom: room.id })) }}>{room.name}</div>); })

  return (
    <Provider>
      <Menu />
      <Card style={{ width: '80vw', margin: '0 auto' }}>
        <Switch>
          <Route exact path="/" component={() => <RoomList displayRooms={displayRooms} />} />
          <Route path="/clients" component={ClientList} />
        </Switch>
      </Card>
    </Provider>
  );
}


export default App;
