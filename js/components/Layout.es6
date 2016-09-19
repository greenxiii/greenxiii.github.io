import React from "react";
import ReactDOM from "react-dom";

import Head from "./Head";
import Work from "./Works";
import Content from './Content';
import Contact from "./Contact";
import Footer from "./Footer";

import "../../styles/global.less";

export default class Layout extends React.Component {
	constructor( props ) {
		super( props );
		this.logoAlt = 'GreenXIII - Web Development';
		this.logoSrc = '/img/logo.png';
	}
	render() {
		return (
			<div>
				<div id='first_screen'>
					<div id='logo'>
						<a href='/'>
						<img src={this.logoSrc} alt={this.logoAlt} />
						</a>
					</div>
					<Content />
				</div>
			</div>
		);
	}
}