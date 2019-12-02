// store/UserProvider.js
import React, { createContext, Component } from "react"; // on importe createContext qui servira à la création d'un ou plusieurs contextes
import axios from 'axios'

export const NestorContext = createContext();

class Provider extends Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			rooms: [{}],
			clients: [{}],
		};
	}

	componentDidMount()
	{
		axios.get("https://technical-test-api.herokuapp.com/rooms")
			.then((response) => this.setState({ rooms: response.data }));

		axios.get("https://technical-test-api.herokuapp.com/clients")
			.then((response) => this.setState({ clients: response.data }));
	}

	render()
	{
		return (
			<NestorContext.Provider value={this.state}>
				{this.props.children}
			</NestorContext.Provider>
		);
	}
}

export default Provider;