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

  const displayRoomsByStatus = (rooms, selectedStatus) => rooms.map((room, i) =>
  {
    let classBox = 'boxRed';
    if (room.status === 'available') { classBox = 'boxGreen' }
    if (room.status === selectedStatus || selectedStatus === 'all')
      return (<div className={classBox} style={{ width: '400px' }} key={i} onClick={() => setSelectedRoomId(room.id)}><NavLink to="/selectedRoom" >{room.name}</NavLink>{room.city}</div>);
  })


  return (
    <div style={{ background: 'linear-gradient(to bottom right, #1c2a4a, #343b6e)', height: '120vh' }} >
      <Provider>
        <Menu />
        <Switch>
          <div style={{ width: '80vw', margin: '0px auto' }}>
            <Route exact path="/" component={Home} />
            <Route path="/rooms" component={() => <RoomList displayRoomsByStatus={displayRoomsByStatus} />} />
            <Route path="/clients" component={ClientList} />
            <Route path="/selectedRoom" component={() => <Room selectedRoomId={selectedRoomId} />} />
          </div>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
