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

	let nbBooked = 0, nbCheckedIn = 0, nbCheckedOut = 0;
	clients.map((client) =>
	{
		switch (client.status) {
			case "booked":
				{ nbBooked += 1 }
				break;
			case "checked-in":
				{ nbCheckedIn += 1 }
				break;
			case "checked-out":
				{ nbCheckedOut += 1 }
				break;
			default:
				break;
		}
	})
	const PercentageCalcul = (item, total) => { return Math.round((100 * item) / total.length) };
	const bookedPercentage = PercentageCalcul(nbBooked, clients);
	const checkedInPercentage = PercentageCalcul(nbCheckedIn, clients);
	const checkedOutPercentage = PercentageCalcul(nbCheckedOut, clients);


	const styleStats = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		alignContent: 'stretch'
	}

	return (
		<>
			<h2 style={{ margin: '20px', color: 'white', position: 'absolute', fontSize: '50px' }}>Dashboard</h2>

			<div style={{ padding: '150px 0 0 0', display: 'flex', flexWrap: 'wrap' }} >
				<Link to='/rooms'>
					<div className='boxBlue' style={{ width: '30vw' }}>
						<h3>Rooms</h3>
						<div className="text-secondary">filling rate</div>
						<div style={styleStats}>
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
						<div style={styleStats}>
							<span><b>Booked : </b>{bookedPercentage}%</span>
							<span><b>checked-in : </b>{checkedInPercentage}%</span>
							<span><b>checked-out : </b>{checkedOutPercentage}%</span>
						</div>
						<Progress multi>
							<Progress bar color="success" value={bookedPercentage}></Progress>
							<Progress bar color="info" value={checkedInPercentage}></Progress>
							<Progress bar color="danger" value={checkedOutPercentage}></Progress>
						</Progress>
					</div>
				</Link>
			</div>
		</>
	)
}
export default Home;
