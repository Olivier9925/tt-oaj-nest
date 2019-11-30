import React, { useContext, useState } from 'react';
import { NestorContext } from '../providers/Provider';




const RoomList = (props) =>
{
	const [selectedStatus, setselectedStatus] = useState('all');
	const { rooms } = useContext(NestorContext);


	const handleChange = (event) =>
	{
		setselectedStatus(event.target.value);
	}

	return (
		<div>
			<h2>Room list</h2>
			<select onChange={handleChange}>
				<option value='all'>All</option>
				<option value='occupied'>Occupied</option>
				<option value='available'>Available</option>
			</select>

			{props.displayRoomsByStatus(rooms, selectedStatus)}
		</div>
	)
}
export default RoomList;
