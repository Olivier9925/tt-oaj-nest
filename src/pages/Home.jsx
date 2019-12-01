import React, { useContext } from 'react';
import { Progress } from 'reactstrap';
import { NestorContext } from '../providers/Provider';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) =>
{
	const { rooms } = useContext(NestorContext);

	let nbOccupied = 0;
	rooms.map((room) => { if (room.status === "occupied") { nbOccupied += 1 } })

	return (
		<div>
			<h2>Home</h2>
			<div className="text-secondary">
				filling rate</div>
			<Progress value={nbOccupied} max={rooms.length} color="dark" />
		</div>
	)
}
export default Home;
