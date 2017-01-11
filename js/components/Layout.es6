import React from "react";
import ReactDOM from "react-dom";

import Content from './Content';

import "../../styles/global.less";

export default class Layout extends React.Component {
	constructor( props ) {
		super( props );
		this.logoAlt = 'GreenXIII - Web Development';
		this.logoSrc = 'img/logo.png';
	}
	componentDidMount() {
		this.drawBackgound();
	}
	drawBackgound() {
		var maxX = 1000,
			maxY = 1000,
			stepX = 80,
			stepY = 100,
			y1 = 35,
		    y2 = 60,
		    y3 = 55,
		    y4 = 90,
			paths = '';
		while( y2 < maxY ) {
			var x1 = 20,
				x2 = 15,
				x3 = 40,
				x4 = 20;
			while(x3 < maxX) {
				paths += '<path d="M '+x1+','+y1+' '+x2+','+y2+' '+x3+','+y3+' '+x4+','+y4+'"></path>';
				x1 += stepX;
				x2 += stepX;
				x3 += stepX;
				x4 += stepX;
			}
			y1 += stepY;
			y2 += stepY;
			y3 += stepY;
			y4 += stepY;
		}
		document.getElementById('main-bg').innerHTML = paths;
	}
	render() {
		return (
			<div>
				<div id='first_screen' >
					<div id='logo'>
						<svg id="main-bg" viewBox="0 0 1000 1000"></svg>
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