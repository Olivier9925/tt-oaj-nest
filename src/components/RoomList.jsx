import React, { useContext, useState } from 'react';
import { NestorContext } from '../providers/Provider';
import { Link } from 'react-router-dom'

const RoomList = (props) =>
{
	const [selectedStatus, setselectedStatus] = useState('all');
	const { rooms } = useContext(NestorContext);

	const handleChange = (event) => setselectedStatus(event.target.value);

	return (
		<>
			<h2 style={{ margin: '20px', color: 'white', position: 'absolute', fontSize: '50px' }}><Link to='/'>{'<< '}</Link>Room list</h2>
			<div style={{ padding: '150px' }} >
				<select onChange={handleChange} style={{ position: 'relative', background: '#FFFFFF' }}>
					<option value='all'>All</option>
					<option value='occupied'>Occupied</option>
					<option value='available'>Available</option>
				</select>
				<div className="roomListStyle">

					{props.displayRoomsByStatus(rooms, selectedStatus)}
				</div>
			</div>
		</>
	)
}
export default RoomList;
