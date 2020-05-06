import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Game from './Game';
import { connect } from 'react-redux';

class Content extends React.Component {
  constructor (props) {
    super(props);
    this.logoAlt = 'GreenXIII - Web Development';
    this.logoSrc = 'img/logo_b.png';
    this.sectionArr = [];
    this.state = {currentSection: 0};
    this.inProgress = false;
    this.scrollHandler = this.scrollHandler.bind(this);
    this.keyupHandler = this.keyupHandler.bind(this);
    this.changeSection = this.changeSection.bind(this);
  }
  componentDidMount() {
    this.setState({currentSection: 0});
    this.props.texts.map((object, i) => {
      this.sectionArr.push(object.title);
    });

    window.addEventListener('wheel', this.scrollHandler);
    window.addEventListener('keydown', this.keyupHandler);
  }
  scrollHandler(e) {
    if (!window.matchMedia('(max-width: 767px)').matches) {
      if (this.inProgress) return;
      this.inProgress = true;
      var itt = this.state.currentSection;
      if (e.wheelDelta > 0 && itt < this.sectionArr.length - 1) {
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
      if ((e.keyCode === 40) && itt < this.sectionArr.length - 1) {
        itt++;
      } else if ((e.keyCode === 38) && itt > 0) {
        itt--;
      }
      this.setState({ currentSection: itt });
    }
  }
  changeSection(section) {
    if (section !== '6') {
      this.setState({currentSection: section});
    }
  }
  render() {
    return (
      <div id="content">
        <Navigation
          position={this.state.currentSection}
          changeSection={this.changeSection}
        />
        {this.props.texts.map((object, i) =>
          <section key={i} id={object.title} class={(i === this.state.currentSection)?'':'hide'}>
            <div style={{ height: (object.title === 'Game')?'347px':'auto'}}>
              {
                object.header ?
                  <h1><img src={this.logoSrc} alt={this.logoAlt} />{object.header}</h1> :
                  ''
              }
              <header>{object.title}</header>
              <article dangerouslySetInnerHTML={{__html: object.content}} />
              {
                (object.title === 'Game' && this.state.currentSection === (this.sectionArr.length - 1)) ?
                  <div style={{ position: 'absolute', left: '10%' }}>
                    <Game />
                  </div> :
                  ''
              }
              {
                object.header ?
                  <div class="mouse-wrapper"><div class="mouse"></div></div> :
                  ''
              }
            </div>
          </section>
        )}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    ...state.global,
  };
}

export default connect(mapStateToProps)(Content);