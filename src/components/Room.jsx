import React, { useContext, useState, useEffect } from 'react';
import { NestorContext } from '../providers/Provider';
import axios from 'axios';

const Room = (props) =>
{
	const { clients } = useContext(NestorContext);
	const [room, setRoom] = useState('loading...');

	useEffect(() =>
	{
		axios.get("https://technical-test-api.herokuapp.com/rooms/" + props.selectedRoomId)
			.then((response) => setRoom(response.data));
	}
	)

	const displayClientRoom = () => clients.map((client) => { if (client.roomId === props.selectedRoomId) return client.name });

	return (
		<div>
			<h2>Room</h2>
			<div>
				<div className="text-secondary"><div className={room.status} />{room.name}</div>
				<div>{room.address}</div>
				<div>{room.zip}</div>
				<div>{room.city}</div>
			</div>
			<div>
				{displayClientRoom()}
			</div>
		</div>
	)

}
export default Room;
