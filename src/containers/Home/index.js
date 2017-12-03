import React, { Component } from 'react';
import Button               from 'components/Button';
import img                  from  'assets/images/voice-record-image.png';


/* component styles */
import { styles } from './styles.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        <div id="banner">
          <div className="container">
            <h1>A Single Page Application foundation for apps developed with React & Redux & Material-UI</h1>
            <p className="description">JimJam gives you a scalable architecture for building
            production-ready Web apps that use the latest features of the Web.</p>
            <div className="logo"></div>
            <div id="install">
              <span id="msg">Install</span>
              <span className="command">git clone git@github.com:hackingbeauty/jimjam.git</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="getting-started" className="section">
            <h2>Getting Started</h2>
            <ul>
              <li>
                <span className="label">First, clone the boilerplate.</span>
                <span className="command">$ git clone git@github.com:hackingbeauty/jimjam.git</span>
              </li>
              <li>
                <span className="label">Second, install all dependencies.</span>
                <span className="command">$ npm run install</span>
              </li>
              <li>
                <span className="label">Third, start your local development server.</span>
                <span className="command">$ npm run start</span>
              </li>
              <li>
                <span className="label">Fourth, create a production build.</span>
                <span className="command">$ npm run build</span>
              </li>
            </ul>
          </div>
          <div id="features" className="section">
            <h2>Features</h2>
            <ul>
              <li>
                <div className="react-img"></div>
                <h3><a href="https://facebook.github.io/react/">React</a></h3>
                <p>One of the best libraries for creating UI components</p>
              </li>
              <li>
                <h3><a href="http://redux.js.org/">Redux</a></h3>
                <p>The gold standard of managing application state</p>
              </li>
              <li>
                <h3><a href="https://reacttraining.com/react-router/">React Router 4</a></h3>
                <p>A declarative routing library for React apps</p>
              </li>
              <li>
                <h3><a href="http://www.material-ui.com/">Material-UI</a></h3>
                <p>A set of React components that implement Material Design from Google</p>
              </li>
              <li>
                <h3><a href="https://github.com/css-modules/css-modules">CSS Modules</a></h3>
                <p>Encapsulate your styles for each component</p>
              </li>
              <li>
                <h3><a href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers">Service Worker</a></h3>
                <p>HTML5 Service Worker ready</p>
              </li>
              <li>
                <h3><a href="https://webpack.js.org/">Webpack 2</a></h3>
                <p>Superior module & asset bundler</p>
              </li>
              <li>
                <h3><a href="https://babeljs.io/">ES6 Ready with Babel</a></h3>
                <p>Write your app in ES6, the future of the JavaScript language</p>
              </li>
              <li>
                <h3><a href="https://developers.google.com/web/progressive-web-apps/">Progressive Mobile Web App ready (PWA)</a></h3>
                <p>Make your app work offline, and make it look more like a Native app</p>
              </li>
              <li>
                <h3><a href="https://en.wikipedia.org/wiki/Responsive_web_design">Responsive</a></h3>
                <p>Build for any device on the planet</p>
              </li>
            </ul>
          </div>
          <div id="contribute" className="section">
            <h2>Want to Contribute?</h2>
            <p>JimJam is an evolving project and we need your help!  Our mission is to encapsulate the best
            technologies the Web has to offer in a single foundational boilerplate for anyone to use.</p>
            <p>If you have any ideas or suggestions, please contribute.</p>
            <br />
            <div className="center">
              <a href="https://github.com/hackingbeauty/jimjam/blob/master/.github/CONTRIBUTING.md"><Button label="Start Contributing" raised={true} /></a>
            </div>
          </div>
          <div id="contribute" className="section">
            <h2>License</h2>
            <p>The code is available under the <a href="https://github.com/hackingbeauty/jimjam/blob/master/LICENSE.md">MIT license</a>.</p>
          </div>
          <div className="section">
            <h2>Join the Slack Community</h2>
            <p>Join our <a href="https://singlepageapp.slack.com">Slack community</a> to get help and ask questions.
            </p>
          </div>
          <div id="learn" className="section">
            <h2>Learn</h2>
            <p>The video course <a href="http://singlepageapplication.com/">How to Write a Single Page Application</a> is a step-by-step guide on developing a professional app for the Web using React, Redux, React Router 4 
              and Material-UI.
            </p>
            <p>The course guides you in developing a real app for the Web using the JimJam Boilerplate.</p>
            <br />
            <a href="http://singlepageapplication.com/"><img src={img} alt="Voice Record Pro image" /></a>
          </div>
          <div id="contribute" className="section">
            <h2>Consulting/Help</h2>
            <p>Please email Mark at <strong>mark.muskardin@gmail.com</strong> if you need help
              building the next generation of apps for the Web.
            </p>
          </div>
          <div className="section">
            <h2>Thank You</h2>
            <p>This boilerplate was developed with the assistance of expert engineers at <a href="https://www.qbisins.com/">QBIS</a>, a leader in insurance technology.</p>
          </div>
        </div>
      </div>
    );
  }
}
