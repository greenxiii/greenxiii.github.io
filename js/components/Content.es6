import React from 'react';
import ReactDOM from 'react-dom';


export default class Content extends React.Component {
	constructor ( props ) {
		super( props );
		this.logoAlt = 'GreenXIII - Web Development';
		this.logoSrc = 'img/logo_b.png';
		this.texts = [
			{
				title: 'bio',
				content: `
					Hi there! Thanks for reading this!
					I'm front-end developer based in Ukraine. I'm really passion about FE things and love to spend my free time for improve my skills and learn something newer for being really FE hero in this world. <br /><br />
					PS: Ofcourse, I have side normal life with my lovely girlfriend and pretty doggie :) But if web world is in danger, who else ... you know.
				`
			},
			{
				title: 'development',
				content: `
					As developer I started coding from my school-years. Im really 
					love to create something cool that every user can see via browser.<br /><br />
					For today I'm full-stack developer in ukrainian outsource company. 
					Most of all I'm working with front-end part. My last project was on <i>Laravel</i> and <i>Angular Js</i>. <br /><br />
					Also, I love to use <i>Gulp</i>, <i>Webpack</i>, <i>Less</i>, <i>Sass</i>, <i>CoffeeScript</i>, <i>TypeScript</i> and, ofcourse, I'm really interesting about <i>ES6</i> ;)
					As well I know how to work with <i>React Js</i>, <i>Laravel</i>, <i>Symfony</i> and <i>WordPress</i>(but I don't really like WP, sorry).
					As you can see I love improve myself every free minute, thats cause I love create something awesome. 
					<br />
					<br />
					In addition, you can look how I code in <a href="https://github.com/greenxiii">GITHUB</a> 
					and <a href="http://codepen.io/GreenXIII/">CODEPEN</a>
				`
			},
			{
				title: 'design',
				content: `
					As designer I worked few years in two first years in university and it was something like hobbie, 
					because I was quite loaded via student's works and my head was in exploding state till evening. <br /><br />
					So, for make little rest and have money from this time I was drawing logos and websites. <br /><br />
					After this I direct all my efforts to be cool web developer. 
					But, from time to time, I open Adobe Photoshop or Adobe Illustrator and draw something for my own projects or just for fun.<br /><br />
					You can see my works on <a href="https://dribbble.com/greenxiii">Dribble</a> and <a href="https://www.behance.net/greenxiii">behance</a>.
				`
			},
			{
				title: 'contacts',
				content: `
					skype: greenxiii13 <br /><br />
					e-mail: <a href="mailto:nikolayenko2009@gmail.com">nikolayenko2009@gmail.com</a><br /><br />
					linkedin: <a href="https://www.linkedin.com/in/%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%BD%D0%BA%D0%BE-3165245a?trk=pub-pbmap">[click]</a><br /><br />
					facebook: <a href="https://www.facebook.com/profile.php?id=100001353957458">[click]</a><br /><br />
					twitter: <a href="https://twitter.com/GreenXIII">[click]</a>
				`
			}
		];
	}
	render() {
		return (
			<div class="content">
				<h1>
					<img src={this.logoSrc} alt={this.logoAlt} />
					Web Development for you and your mom
				</h1>
				{this.texts.map( (object, i) => 
					<section key={i}>
						<header>{object.title}</header>
						<article dangerouslySetInnerHTML={{__html: object.content}} />
					</section>
				)}
			</div>
		);
	}
}