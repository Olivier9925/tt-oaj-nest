import React, { Component } from 'react';
import axios from 'axios';




class Room extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			room: 'loading...',
		}
	}

	componentDidMount()
	{
		axios.get("https://technical-test-api.herokuapp.com/rooms/" + this.props.selectedRoomId)
			.then((response) => response.data)
			.then((data) =>
			{
				this.setState({
					room: data
				});
			});
	}
	render()
	{
		const { room } = this.state;
		return (
			<div>
				<h2>Room</h2>
				<div>
					<div className="text-secondary"><div className={room.status} />{room.name}</div>
					<div>{room.address}</div>
					<div>{room.zip}</div>
					<div>{room.city}</div>

				</div>
			</div>
		)
	}
}
export default Room;
