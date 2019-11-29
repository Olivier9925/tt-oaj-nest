import React, { useContext } from 'react';
import { NestorContext } from '../providers/Provider';


const RoomList = () =>
{


	const { rooms } = useContext(NestorContext);

	return rooms.map((room, i) =>
	{
		return (
			<div key={i}>
				<div>{room.name}</div>
				<div>Address : {room.address}</div>
				<div>city : {room.city}</div>
			</div>
		);
	});

}


export default RoomList;