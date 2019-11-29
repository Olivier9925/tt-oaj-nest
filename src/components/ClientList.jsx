	import React, { useContext } from 'react'
	import { NestorContext } from '../providers/Provider';

const ClientList = () =>
{
	const { clients } = useContext(NestorContext);

	return clients.map((client, i) =>
	{
		return (
			<div key={i}>
				<div>{client.name}</div>
				<div>eMail : {client.email}</div>
				<div>Phone : {client.phone}</div>
				<div>Birth Date : {client.birthDate}</div>
				<div>Nationality : {client.nationality}</div>
				<div>Status : {client.status}</div>
				<button></button>
			</div>
		);
	});


}

export default ClientList;