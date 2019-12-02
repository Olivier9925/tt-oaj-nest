import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo_small.jpg'

const Menu = () =>
{
	const styleMenu = {
		height: '300px',
		width: '200px',
		position: 'absolute',
		padding: '10px',
		margin: '0px',
		backgroundColor: 'transparent',
	}

	const styleLogo = {
		padding: '10px',
		position: 'relative',
		top: '-10px',
		left: '-10px',
		height: '70px',
	}

	return (
		<ul style={styleMenu} >
			<NavLink to="/"><img src={logo} alt='logo' style={styleLogo} /></NavLink>
		</ul>
	)
}
export default Menu