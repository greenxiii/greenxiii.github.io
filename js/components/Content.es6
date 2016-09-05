import React from 'react';
import ReactDOM from 'react-dom';


export default class Content extends React.Component {
	constructor ( props ) {
		super( props );
		this.texts = [
			{
				title: 'bio',
				content: `
					Hi there! Thanks for read this!
					I'm front-end developer based in Ukraine. I'm really passion about FE things and love to spend my free time for improve my skills and teach something newer for being really FE hero in this world. <br />
					PS: Ofcourse, I have side normal life with my lovely girlfriend and pretty doggie :) But if web worlf is in danger, who else ... you know.
				`
			},
			{
				title: 'Technologies'
			},
			{
				title: 'contacts'
			}
		];
	}
	render() {
		return (
			<div class="content">
				<h1>Front-End development for you and your mom.</h1>
				{this.texts.map( (object, i) => 
					<section>
						<header>{object.title}</header>
						<article dangerouslySetInnerHTML={{__html: object.content}} />
					</section>
				)}
			</div>
		);
	}
}