import React, { Component } from 'react';
import proofOfExImg         from 'assets/images/proof-of-ex-iphone-encased.png';
import boxCover             from 'assets/images/react-dapp-boilerplate-box-cover.png';
import boilerplateImg       from 'assets/images/react-dapp-boilerplate-first-view.png';
import { styles }           from './styles.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        <div id="banner">
          <div className="container">
            <h1>An expert foundational UI boilerplate for developing Ethereum DApps using Truffle, React, Redux, and Webpack</h1>
            <img src={boxCover} width="500px"  alt="React DApp boilerplate box cover" />
            <h2 className="description">React DApp Boilerplate gives you a professional front-end architecture for building
            production-ready decentralized applications that use the best libraries the Web has to offer.</h2>
            <br />
            <h2>Hook it up to any Smart Contract on Ethereum!</h2>
          </div>
        </div>
        <div className="container">
          <div id="getting-started" className="section">
            <h2>Installation</h2>
            <ul>
              <li>
                <span className="label">First, clone the boilerplate.</span>
                <span className="command">$ git clone https://github.com/hackingbeauty/react-dapp-boilerplate.git</span>
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

          <div id="what-you-should-see" className="section">
            <h2>This is what you should see when you first boot up...</h2>
            <img src={boilerplateImg} alt="First view when React DApp boilerplate boots up" />
          </div>
          <div id="summary" className="section">
            <h2>Summary</h2>
            <p>You'd never use Create-React-App to lay the foundation of a professional full-stack DApp.</p>
            <p>That's because Create-React-App gives you a very poor organizational structure and setup.  Most teams end up ejecting their React setup when they create their apps using Create-React-App anyway.
            </p>
            <p>So why not just start your DApp the right way?</p>
            <p>React DApp boilerplate gives you an expert foundation to build any kind of full-stack DApp.  It's created by professionals in the industry and it has everything you need.</p>
            <p>And you don't have to be an expert yourself to be able to use it.</p>
          </div>
          <div id="features" className="section">
            <h2>Features</h2>
            <ul>
              <li>
                <h3><a href="http://truffleframework.com">Truffle</a></h3>
                <p>Built for Truffle, the most popular Ethereum dev framework.</p>
              </li>
              <li>
                <div className="react-img"></div>
                <h3><a href="https://facebook.github.io/react/">React</a></h3>
                <p>The best JavaScript UI library for building applications.</p>
              </li>
              <li>
                <h3><a href="http://redux.js.org/">Redux</a></h3>
                <p>The gold standard of managing application state, and the data that flows through your DApp.</p>
              </li>
              <li>
                <h3><a href="https://github.com/css-modules/css-modules">MetaMask Detection Logic</a></h3>
                <p>The first thing your DApp needs to do is detect MetaMask, and set it up as your DApp's provider.</p>
              </li>
              <li>
                <h3><a href="http://www.material-ui.com/">Material-UI</a></h3>
                <p>A set of pre-made React components that that look and feel great.  Put on your designer hat!</p>
              </li>
              <li>
                <h3><a href="https://web3js.readthedocs.io">Web3.js Configuration</a></h3>
                <p>Web3.js needs to be configured correctly, otherwise you can't make Smart Contract calls from the UI.</p>
              </li>
                       <li>
                <h3><a href="https://reacttraining.com/react-router/">React Router 4</a></h3>
                <p>A declarative routing library for React apps.  Design with the URL in mind.</p>
              </li>
              <li>
                <h3><a href="https://github.com/css-modules/css-modules">CSS Modules</a></h3>
                <p>Don't use CSS-In-JavaScript.  Use CSS Modules.  <br />You'll be glad you did.</p>
              </li>
              <li>
                <h3><a href="https://webpack.js.org/">Webpack</a></h3>
                <p>A professional Webpack configuration for both dev & prod mode comes with this boilerplate.</p>
              </li>
              <li>
                <h3><a href="https://eslint.org/">Automated Developer Workflow</a></h3>
                <p>Write your app in ES6, and have your code be automatically linted before you can do a Git commit.</p>
              </li>
              <li>
                <h3><a href="https://fullstackdapps.com">Superior Directory Structure</a></h3>
                <p>The way you organize your directory structure is important.  Don't start out with Create-React-App.</p>
              </li>
              <li>
                <h3><a href="https://en.wikipedia.org/wiki/Responsive_web_design">Responsive</a></h3>
                <p>Build a front-end interface that can run on any device on the planet.</p>
              </li>
              <li>
                <h3><a href="https://fullstackdapps.com">Much, Much More...</a></h3>
                <p>This set up comes with everything you'll need for you or an entire team.</p>
              </li>
            </ul>
          </div>
          <div id="contribute" className="section">
            <h2>Want To Contribute?</h2>
            <p>React DApp Boilerplate is an evolving project and we need your help!  Our mission is to encapsulate the best
            technologies the Web has to offer in a single foundational boilerplate so that you can easily build your DApp.</p>
            <p>If you have any ideas or suggestions, please contribute.</p>
          </div>
          <div id="contribute" className="section">
            <h2>License</h2>
            <p>The code is available under the <a href="https://github.com/hackingbeauty/jimjam/blob/master/LICENSE.md">MIT license</a>.
            That means you can use the code for any project you could possibliy think of (commercial or non-commercial).</p>
          </div>
          <div className="section">
            <h2>Join The Slack Community</h2>
            <p>Join the <a href="https://publicslack.com/slacks/full-stack-dapps/invites/new" target="_blank">Slack community</a> to get help and ask questions.
            </p>
          </div>
          <div id="learn" className="section">
            <h2>Training Program</h2>
            <p>For those ready to accelerate their learning of DApp development fast, register for <a href="https://fullstackdapps.com/" target="_blank">Full Stack DApps</a>.</p>
            <p><a href="https://fullstackdapps.com/" target="_blank">Full Stack DApps</a> is a step-by-step training program that teaches you how to develop and design a real DApp using Truffle, React, Redux, and a Smart Contract written in Solidity.
            </p>
            <p>In the program, you'll create a decentralized digital asset marketplace while hooking up an expert UI to an ERC721 Non-fungible token Smart Contract on Etherem.</p>
            <p>By the end of the training program, you'll be a full-stack DApp developer and one of the world's first blockchain developers.</p>
            <br />
            <a href="https://fullstackdapps.com"><img src={proofOfExImg} alt="Full Stack dapps main page image" /></a>
          </div>
          <div id="contribute" className="section">
            <h2>Consulting</h2>
            <p>Please email Mark Muskardin at <strong>support@fullstackdapps.com</strong> if your company is looking for expertise in building blockchain applications and dApps.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
