import React, { Component } from 'react';


class RoomList extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {}
	}




	render()
	{


		const { rooms } = this.props;

		return rooms.map((room, i) =>
		{
			return (
				<div key={i}>
					<div>{room.name}</div>
					<div>Address : {room.address}</div>
					<div>city : {room.city}</div>
				</div>
			);
		});

	}
}

export default RoomList;