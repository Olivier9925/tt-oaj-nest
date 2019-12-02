import React, { useContext, useState } from 'react';
import { NestorContext } from '../providers/Provider';
import { Link } from 'react-router-dom'

const RoomList = (props) =>
{
	const [selectedStatus, setselectedStatus] = useState('all');
	const [selectedCity, setselectedCity] = useState('all');
	const { rooms } = useContext(NestorContext);

	const handleChange = (event) => setselectedStatus(event.target.value);
	const handleChangeCity = (event) => setselectedCity(event.target.value);

	const sortedCities = [];
	const map = new Map();
	for (const item of rooms) {
		if (!map.has(item.city)) {
			map.set(item.city, true);    // set any value to Map
			sortedCities.push({
				city: item.city
			});
		}
	}

	const styleSelect = {
		position: 'relative',
		background: '#FFFFFF',
		margin: '5px'
	}

	return (
		<>
			<h2 style={{ margin: '20px', color: 'white', position: 'absolute', fontSize: '50px' }}><Link to='/'>{'<< '}</Link>Room list</h2>
			<div style={{ padding: '150px' }} >
				<select onChange={handleChange} style={styleSelect}>
					<option value='all'>All rooms</option>
					<option value='occupied'>Occupied</option>
					<option value='available'>Available</option>
				</select>

				<select onChange={handleChangeCity} style={styleSelect}>
					<option value='all'>All cities</option>
					{sortedCities.map((room) => <option value={room.city}>{room.city}</option>)}
				</select>

				<div className="roomListStyle">
					{props.displayRoomsByStatus(rooms, selectedStatus, selectedCity)}
				</div>
			</div>
		</>
	)
}
export default RoomList;
