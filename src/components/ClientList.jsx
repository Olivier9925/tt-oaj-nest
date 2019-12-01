import React, { useContext } from 'react'
import { NestorContext } from '../providers/Provider';

const setFlagToCountry = (country) =>
{
	if (country === 'France') { return <img src="https://www.countryflags.io/fr/flat/64.png" width="20" alt="" /> }
	else if (country === 'USA') { return <img src="https://www.countryflags.io/us/flat/64.png" width="20" alt="" /> }
	else if (country === 'United Kingdom') { return <img src="https://www.countryflags.io/gb/flat/64.png" width="20" alt="" /> }
	else if (country === 'South Korea') { return <img src="https://www.countryflags.io/kr/flat/64.png" width="20" alt="" /> }
	else if (country === 'Malta') { return <img src="https://www.countryflags.io/mt/flat/64.png" width="20" alt="" /> }
	else if (country === 'Saint-Martin') { return <img src="https://www.countryflags.io/mf/flat/64.png" width="20" alt="" /> }
	else if (country === 'Italy') { return <img src="https://www.countryflags.io/it/flat/64.png" width="20" alt="" /> }
	else if (country === 'Mexico') { return <img src="https://www.countryflags.io/mx/flat/64.png" width="20" alt="" /> }
	else if (country === 'Brazil') { return <img src="https://www.countryflags.io/br/flat/64.png" width="20" alt="" /> }
	else if (country === 'China') { return <img src="https://www.countryflags.io/cn/flat/64.png" width="20" alt="" /> }
}

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
				<div>{setFlagToCountry(client.nationality)}</div>
				<div>Status : {client.status}</div>
				<button></button>
			</div>
		);
	});
}

export default ClientList;



