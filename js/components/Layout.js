import React from "react";
import ReactDOM from "react-dom";
import Content from './Content';
import "../../styles/global.less";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.logoAlt = 'GreenXIII - Web Development';
    this.logoSrc = 'img/logo.png';
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div id='first-screen'>
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
