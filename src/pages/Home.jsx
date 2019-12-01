import React, { useContext } from 'react';
import { Progress } from 'reactstrap';
import { NestorContext } from '../providers/Provider';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) =>
{
	const { rooms, clients } = useContext(NestorContext);

	let nbOccupied = 0;
	rooms.map((room) => { if (room.status === "occupied") { nbOccupied += 1 } })

	let nbBooked = 0
	let nbCheckedIn = 0
	let nbCheckedOut = 0;
	clients.map((client) =>
	{
		if (client.status === "booked") { nbBooked += 1 }
		if (client.status === "checked-in") { nbCheckedIn += 1 }
		if (client.status === "checked-out") { nbCheckedOut += 1 }
	})
	console.log('nbBooked = ', nbBooked)
	console.log('nbCheckedIn = ', nbCheckedIn)
	console.log('nbCheckedOut = ', nbCheckedOut)

	return (
		<>
			<h2 style={{ margin: '20px', color: 'white', position: 'absolute', fontSize: '50px' }}>Dashboard</h2>

			<div style={{ padding: '150px', display: 'flex', flexWrap: 'wrap' }} >
				<Link to='/rooms'>
					<div className='boxBlue' style={{ width: '20vw' }}>
						<h3>Rooms</h3>
						<div className="text-secondary">filling rate</div>
						<div style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'nowrap',
							justifyContent: 'space-between',
							alignItems: 'stretch',
							alignContent: 'stretch'
						}}>
							<span><b>Occupied : </b>{nbOccupied}</span>
							<span><b>Nb of rooms : </b>{rooms.length}</span>
						</div>
						<Progress value={nbOccupied} max={rooms.length} color="dark" />
					</div>
				</Link>

				<Link to='/clients'>
					<div className='boxOrange' style={{ width: '30vw' }}>
						<h3>Clients</h3>
						<div className="text-secondary">Clients status</div>
						<div style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'nowrap',
							justifyContent: 'space-between',
							alignItems: 'stretch',
							alignContent: 'stretch'
						}}>
							<span><b>Booked : </b>{Math.round((100 * nbBooked) / clients.length)}%</span>
							<span><b>checked-in : </b>{Math.round((100 * nbCheckedIn) / clients.length)}%</span>
							<span><b>checked-out : </b>{Math.round((100 * nbCheckedOut) / clients.length)}%</span>
						</div>
						<Progress multi>
							<Progress bar color="success" value={(100 * nbBooked) / clients.length}></Progress>
							<Progress bar color="info" value={(100 * nbCheckedIn) / clients.length}></Progress>
							<Progress bar color="danger" value={(100 * nbCheckedOut) / clients.length}></Progress>
						</Progress>
					</div>
				</Link>
			</div>
		</>
	)
}
export default Home;
