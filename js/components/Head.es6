import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';


export default class Head extends React.Component {
	constructor ( props ) {
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
					<Nav />
				</div>
				<div>{ this.bio }</div>
				<div id='twenty'></div>
				<div class='soc'>
					<a href='https://www.behance.net/GreenXiii' target='_blank'><img src='img/be.png' alt='GreenXiii designer in behance'/></a>
					<a href='https://dribbble.com/GreenXIII' target='_blank'><img src='img/dr.png' alt='GreenXiii designer in dribbble'/></a>
					<a href='https://www.linkedin.com/profile/view?id=210311874' target='_blank'><img src='img/in.png' alt='GreenXiii designer in linkedin'/></a>
					<a href='https://www.facebook.com/profile.php?id=100001353957458' target='_blank'><img src='img/f.png' alt='GreenXiii designer in facebook'/></a>
					<a href='https://twitter.com/GreenXIII' target='_blank'><img src='img/tw.png'  alt='GreenXiii designer in twitter'/></a>
					<a href='http://www.pinterest.com/GreenXiii/' target='_blank'><img src='img/pn.png' alt='GreenXiii designer in pintirest'/></a>
				</div>
				<div id='twenty'></div>
				<a class='ancLinks' href='#portfolio' id='dawn'><img src='img/dawn.png'/></a>
			</div>
		);
	}
}