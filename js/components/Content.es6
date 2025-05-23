import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

export default class Content extends React.Component {
	constructor ( props ) {
		super( props );
		this.logoAlt = 'GreenXIII - Web Development';
		this.logoSrc = 'img/logo_b.png';
		this.sectionArr = [];
		this.texts = [
			{
				header: 'Web Development for you and your mom',
				title: 'bio',
				content: `
					Hi there! Thanks for reading this! I'm front-end developer based in Ukraine. I'm really passionate about FE things and love to spend my free time improving my skills and learn something newer for being really FE hero in this world. <br /><br />
					<a href="https://www.dropbox.com/s/sj43bw7dfa18pa4/cv.pdf?dl=0">download cv</a><br /><br />
					PS: Of course, I have side normal life with my lovely girlfriend and pretty doggie :) But if web world is in danger, who else ... you know.

				`
			},
			{
				title: 'development',
				content: `
					As a developer, I started coding from my school years. I really 
					love to create something cool that every user can see via a browser. <br /><br />
					For today I'm a full-stack developer in Ukrainian outsource company. 
					Most of all I'm working with front-end part. My last project was on <i>Laravel</i> and <i>Angular Js</i>. <br /><br />
					Also, I love to use <i>Gulp</i>, <i>Webpack</i>, <i>Less</i>, <i>Sass</i>, <i>CoffeeScript</i>, <i>TypeScript</i> and, of course, I'm really interested about <i>ES6</i> ;)
					As well I know how to work with <i>React Js</i>, <i>Laravel</i>, <i>Symfony</i> and <i>WordPress</i>(but I don't really like WP, sorry).
					As you can see I love to improve myself every free minute, because I love to create something awesome.  
					<br /><br />
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
				title: 'achivements',
				content: `
					OnePageLove Award: <a href="https://onepagelove.com/greenxiii">[link]</a><br /><br />
					Mention in "The Essentials of the Split Screen Trend in Web Design" article: <a href="https://visualhierarchy.co/blog/split-screen-trend-in-web-design/">[link]</a><br /><br />
					Mention in "How to design the perfect single page website" article: <a href="http://www.webdesignerdepot.com/2014/12/how-to-design-the-perfect-single-page-website/">[link]</a>
				`
			},
			{
				title: 'contacts',
				content: `
					skype: greenxiii13 <br /><br />
					download cv: <a href="https://www.dropbox.com/scl/fi/r9zqmd86pfb3nmdhsm22b/CV-2025-VIKTOR-NIKOLAIENKO.pdf?rlkey=7y180av21nqo5o1fc3z0gpjcj&st=ulkvj5g3&dl=0">[link]</a><br /><br />
					e-mail: <a href="mailto:nikolayenko2009@gmail.com">nikolayenko2009@gmail.com</a><br /><br />
					medium: <a href="https://medium.com/@GreenXIII">[link]</a><br /><br />
					linkedin: <a href="https://www.linkedin.com/in/%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%BD%D0%BA%D0%BE-3165245a?trk=pub-pbmap">[link]</a><br /><br />
					facebook: <a href="https://www.facebook.com/profile.php?id=100001353957458">[link]</a><br /><br />
					twitter: <a href="https://twitter.com/GreenXIII">[link]</a>
				`
			}
		];
		this.state = { currentSection: 0 };
		this.inProgress = false;
		this.scrollHandler = this.scrollHandler.bind(this);
		this.keyupHandler = this.keyupHandler.bind(this);
		this.changeSection = this.changeSection.bind(this);
	}
	componentDidMount() {
		this.setState({ currentSection: 0 });
		this.texts.map( (object, i) => {
			var el = document.getElementById(object.title);
			this.sectionArr.push( object.title );
		});
		window.addEventListener('wheel', this.scrollHandler);
		window.addEventListener('keydown', this.keyupHandler);
	}
	scrollHandler(e) {
		if (!window.matchMedia('(max-width: 767px)').matches) {
			if (this.inProgress) return;
			this.inProgress = true;
			var itt = this.state.currentSection;
			if ( e.wheelDelta > 0 && itt < this.sectionArr.length - 1 ) {
				itt++;
		    } else if (e.wheelDelta < 0 && itt > 0) {
		    	itt--;
			}
			this.setState({ currentSection: itt });
			setTimeout(() => {
				this.inProgress = false;
			}, 500);
		}
	}
	keyupHandler(e) {
		if (!window.matchMedia('(max-width: 767px)').matches) {
			var itt = this.state.currentSection;
			if ((e.keyCode === 40 || e.keyCode === 39) && itt < this.sectionArr.length - 1) {
				itt++;
		    } else if ((e.keyCode === 38 || e.keyCode === 37) && itt > 0) {
		    	itt--;
			}
			this.setState({ currentSection: itt });
		}
	}
	changeSection(section) {
		this.setState({ currentSection: section });
	}
	render() {
		return (
			<div class="content">
				<Navigation
					position={this.state.currentSection}
					changeSection={this.changeSection}
				/>
				{this.texts.map( (object, i) => 
					<section key={i} id={object.title} class={(i === this.state.currentSection)?'':'hide'}>
						<div>
							{object.header 
								? <h1><img src={this.logoSrc} alt={this.logoAlt} />{object.header}</h1>
								: ''
							}
							<header>{object.title}</header>
							<article dangerouslySetInnerHTML={{__html: object.content}} />
							{object.header 
								? <div class="mouse-wrapper"><div class="mouse"></div></div>
								: ''
							}
						</div>
					</section>
				)}
			</div>
		);
	}
}