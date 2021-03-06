import React, { useContext } from 'react'
import { NestorContext } from '../providers/Provider';
import { Link } from 'react-router-dom'

const displayClients = (clients) =>
{
	return clients.map((client, i) =>
	{

		return (
			<>
				<div key={i} className='boxOrange' style={{ width: '400px' }}>
					<div className="text-secondary">{client.name}</div>
					<div><b>eMail :</b> {client.email}</div>
					<div><b>Phone : </b>{client.phone}</div>
					<div><b>Birth Date :</b> {client.birthDate}</div>
					<div><b>Nationality : </b>{client.nationality} {setFlagToCountry(client.nationality)}</div>
					<div><b>Status : </b>{client.status}</div>
				</div>
			</>
		);
	});

}


const ClientList = () =>
{
	const { clients } = useContext(NestorContext);

	return (
		<>
			<h2 style={{ margin: '20px', color: 'white', position: 'absolute', fontSize: '50px' }}><Link to='/'>{'<< '}</Link>Clients list</h2>
			<div style={{ padding: '150px 0' }}>
				<div className="clientListStyle" >
					{displayClients(clients)}
				</div>
			</div>
		</>
	)
}

export default ClientList;


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
