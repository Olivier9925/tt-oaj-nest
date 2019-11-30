import React, { useContext } from 'react';
import { NestorContext } from '../providers/Provider';


const RoomList = (props) =>
{
	const { rooms } = useContext(NestorContext);
	return (
		<div>
			<h2>Room list</h2>
			{props.displayRooms(rooms)}
		</div>
	)
}
export default RoomList;
