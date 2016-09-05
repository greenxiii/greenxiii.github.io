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
		this.logoAlt = 'GreenXIII design solutions(Logo, Web)';
		this.logoSrc = 'img/logo.png';
		this.bio = `Hi there! My name is Viktor. I’m 21 year old logo and web designer. 
			I’m really passionate about my work. You can find information about
			my creative process in my last interview (<a class='ancLinks' href='#interview'>here</a>).
			If you want, you can download my
			<a href='https://www.dropbox.com/s/0ur1jdnr750ikoo/cv.pdf' target='_blank'>cv</a> 
			or just say “Hi” via <a class='ancLinks' href='#cform'>contact</a> form.`;
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