import React from "react";
import ReactDOM from "react-dom";

import Head from "./Head";
import Work from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Head/>
				<Work/>
				<Contact/>
				<Footer/>
			</div>
		);
	}
}