import React from "react";
import ReactDOM from "react-dom";
import Content from './Content';
import Unsplash, { toJson } from 'unsplash-js';
const unsplash = new Unsplash({
  accessKey: "sKRU9tRvT9fDsOk6SiHkhk-42s6EOlBRCk1z-hdM6vk",
  secret: "Ptz8mLA8RuH8pYri_dKJov9HBHHKMdVZl9ocGezcxDw"
});
import "../../styles/global.less";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.logoAlt = 'GreenXIII - Web Development';
    this.logoSrc = 'img/logo.png';
    this.state = {
      bgSrc: ''
    };
    unsplash.photos.getRandomPhoto({ collections: [9653460] })
      .then(toJson)
      .then(json => {
        this.setState({ bgSrc: json.urls.regular });
      });
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div id='first-screen'>
          <div
            id='logo'
            style={{backgroundImage: `url(${this.state.bgSrc})`}}
        >
            <a href='/'>
              <img src={this.logoSrc} alt={this.logoAlt} />
            </a>
            <div id="unsplash-creds">
              Photo by <a href="https://unsplash.com/@greenxiii?utm_source=GreenXIII_personal_website&amp;utm_medium=referral">Viktor Nikolaienko</a> on <a href="https://unsplash.com?utm_source=GreenXIII_personal_website&amp;utm_medium=referral">Unsplash</a>
            </div>
          </div>
          <Content />
        </div>
      </div>
    );
  }
}
