import React from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends React.Component {
	constructor ( props ) {
		super( props );
	}
	render() {
		return (
			<div class='block' id='white'>
				<a id='cform'><div id='sixty'></div></a>
				<h2>Contacts</h2>
				<div id='sixty'></div>
				<div class='contact'>
					<span>The easiest way to contact me:</span>
					<form method='post' id='mail_form'>
						<input class='Input' type='text' name='name' id='name' placeholder='Name' />
						<input class='Input' type='email' type='mail' name='mail' id='mail' placeholder='Email' />
						<h4> Message:</h4><textarea name='mess' id='mess' placeholder='Something good' rows='4' ></textarea>
						<div id='twenty'></div>
						<input type='button' id='send'  value='Send it' />
					</form>
				</div>
				<div id='sixty'></div>
			</div>
		);
	}
}