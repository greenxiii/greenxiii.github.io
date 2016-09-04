import React from 'react';
import ReactDOM from 'react-dom';


export default class Nav extends React.Component {
	constructor ( props ) {
		super( props );
		this.nav = [
			{
				url: '123',
				name: 'About'
			},
			{
				url: '123',
				name: 'Technologies'
			},
			{
				url: '333',
				name: 'contacts'
			}
		];
	}
	render() {
		return (
			<nav>
				{this.nav.map((object, i) => <a key={i} href={object.url}>{object.name}</a>)}
			</nav>
		);
	}
}