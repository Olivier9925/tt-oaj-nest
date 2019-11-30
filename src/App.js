import React, { useState } from 'react';
import RoomList from './components/RoomList'
import ClientList from './components/ClientList'
import { Switch, Route, NavLink } from 'react-router-dom';
import Provider from "./providers/Provider";
import Menu from './components/Menu';
import Room from './components/Room';
import Home from './pages/Home'


const App = () =>
{
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const displayRooms = (rooms) => rooms.map((room, i) =>
  {

    console.log('selectedRoomId : ', selectedRoomId)
    return (<div className='styleRoomLine' key={i} onClick={() => setSelectedRoomId(room.id)}><NavLink to="/selectedRoom" >{room.name}</NavLink></div>);

  })
  console.log(selectedRoomId)
  return (
    <Provider>
      <Menu />
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rooms" component={() => <RoomList displayRooms={displayRooms} />} />
          <Route path="/clients" component={ClientList} />
          <Route path="/selectedRoom" component={() => <Room selectedRoomId={selectedRoomId} />} />
        </Switch>
      </div>
    </Provider>
  );
}


export default App;
