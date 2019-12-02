import React, { useContext, useState, useEffect } from 'react';
import { NestorContext } from '../providers/Provider';
import axios from 'axios';
import { Link } from 'react-router-dom'

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

	const displayClientRoom = () => clients.map((client) =>
	{
		if (client.roomId === props.selectedRoomId)
			return (
				<div className="boxOrange">
					<h3>Client</h3>
					<div className="text-secondary">{client.name}</div>
					<div><b>eMail :</b> {client.email}</div>
					<div><b>Phone : </b>{client.phone}</div>
					<div><b>Birth Date :</b> {client.birthDate}</div>
					<div><b>Nationality : </b>{client.nationality} {setFlagToCountry(client.nationality)}</div>
					<div><b>Status : </b>{client.status}</div>
				</div>
			)
	});

	return (
		<>
			<h2 style={{ margin: '20px', color: 'white', position: 'absolute', fontSize: '50px' }}><Link to='/rooms'>{'<< '}</Link>Room</h2>

			<div className="roomStyle" style={{ padding: '150px' }}>
				<div className="boxBlue">
					<h3>Room</h3>
					<div>
						<div className="text-secondary"><div className={room.status} />{room.name}</div>
						<div>{room.address}</div>
						<div>{room.zip}</div>
						<div>{room.city}</div>
					</div>
				</div>
				{displayClientRoom()}
			</div>
		</>
	)

}
export default Room;


const setFlagToCountry = (country) =>
{
	switch (country) {
		case 'France':
			return <img src="https://www.countryflags.io/fr/flat/64.png" width="20" alt="" />
		case 'USA':
			return <img src="https://www.countryflags.io/us/flat/64.png" width="20" alt="" />
		case 'United Kingdom':
			return <img src="https://www.countryflags.io/gb/flat/64.png" width="20" alt="" />
		case 'South Korea':
			return <img src="https://www.countryflags.io/kr/flat/64.png" width="20" alt="" />
		case 'Malta':
			return <img src="https://www.countryflags.io/mt/flat/64.png" width="20" alt="" />
		case 'Saint-Martin':
			return <img src="https://www.countryflags.io/mf/flat/64.png" width="20" alt="" />
		case 'Italy':
			return <img src="https://www.countryflags.io/it/flat/64.png" width="20" alt="" />
		case 'Mexico':
			return <img src="https://www.countryflags.io/mx/flat/64.png" width="20" alt="" />
		case 'Brazil':
			return <img src="https://www.countryflags.io/br/flat/64.png" width="20" alt="" />
		case 'China':
			return <img src="https://www.countryflags.io/cn/flat/64.png" width="20" alt="" />
		default:
	}
}