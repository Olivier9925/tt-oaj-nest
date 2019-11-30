import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'



const Menu = () =>
{
	const styleMenu = {
		height: '80px',
		width: '100vw',
		position: 'relative',
		padding: '10px',
		margin: '0px',
		backgroundColor: '#1c2a4a',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignContent: 'stretch',
	}
	const styleLink = {
		padding: '0',
		margin: '0 50px 0 3px',
		listStyle: 'none',
	}
	const styleLogo = {
		position: 'absolute',
		top: '20px',
		left: '0px',
		height: '50px',
	}

	return (
		<ul style={styleMenu} >
			<NavLink to="/"><img src={logo} alt='logo' style={styleLogo} /></NavLink>
			<li style={styleLink}><NavLink to="/rooms" ><b>Rooms</b></NavLink></li>
			<li style={styleLink}><NavLink to="/clients" ><b>Clients</b></NavLink></li>
		</ul>
	)
}
export default Menu