import React, { useContext } from 'react';
import { Progress } from 'reactstrap';
import { NestorContext } from '../providers/Provider';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) =>
{
	const { rooms } = useContext(NestorContext);

	let nbOccupied = 0;
	rooms.map((room) => { if (room.status === "occupied") { nbOccupied += 1 } })

	return (
		<>
			<h2 style={{ margin: '20px', color: 'white', position: 'absolute', fontSize: '50px' }}>Dashboard</h2>

			<div style={{ padding: '150px', display: 'flex', flexWrap: 'wrap' }} >
				<Link to='/rooms'>
					<div className='boxBlue' style={{ width: '20vw' }}>
						<h3>Rooms</h3>
						<div className="text-secondary">
							filling rate</div>
						<Progress value={nbOccupied} max={rooms.length} color="dark" />
					</div>
				</Link>

				<Link to='/clients'>
					<div className='boxOrange' style={{ width: '20vw' }}>
						<h3>Clients</h3>
						<div className="text-secondary">
							Client stats</div>

					</div>
				</Link>
			</div>
		</>
	)
}
export default Home;
