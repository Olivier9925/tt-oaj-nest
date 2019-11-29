import React, { useContext, useState } from 'react';
import { NestorContext } from '../providers/Provider';
import { Switch, Route } from 'react-router-dom';


const RoomList = () =>
{
	const [SelectedRoom, setSelectedRoom] = useState(null);
	const { rooms } = useContext(NestorContext);

	return (
		<div>
			<h2>Room list</h2>
			{rooms.map((room, i) => { return (<div className='styleRoomLine' key={i} onClick={() => { (setSelectedRoom(room.id)) }}>{room.name}</div>); })}
			{console.log(SelectedRoom)}
		</div>
	)
}


export default RoomList;
