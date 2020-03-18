import React, { Component }  from 'react';
import privateMembersAreaImg from 'assets/images/full-stack-dapps-signin-with-laptop-2.png';
import boxCover             from 'assets/images/react-dapp-boilerplate-box-cover.png';
import boilerplateImg       from 'assets/images/react-dapp-boilerplate-first-view.png';
import youtubeVideoSnapshot from 'assets/images/react-dapp-boilerplate-youtube-video-snapshot.png';
import drizzleImg           from 'assets/images/drizzle.png';
import { styles }           from './styles.scss'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        <div id="banner">
          <div className="container">
            <h1>An expert foundational UI boilerplate for developing Ethereum dApps using Truffle, React, Redux, and Webpack</h1>
            <img src={boxCover} width="500px" alt="React DApp boilerplate box cover" />
            <h2 className="description">React DApp Boilerplate gives you an expert front-end architecture for building decentralized applications that use the best libraries the Web has to offer.</h2>
            <br />
            <h2>Hook it up to any Smart Contract on Ethereum!</h2>
          </div>
        </div>
        <div className="container">
          <div className="section installation">
            <h2>Installation</h2>
            <ul>
              <li>
                <span className="label">First, clone the boilerplate.</span>
                <span className="command">$ git clone https://github.com/hackingbeauty/react-dapp-boilerplate.git</span>
              </li>
              <li>
                <span className="label">Second, install all dependencies.</span>
                <span className="command">$ npm install</span>
              </li>
              <li>
                <span className="label">Third, start your local development server.</span>
                <span className="command">$ npm start</span>
              </li>
              <li>
                <span className="label">Fourth, create a production build.</span>
                <span className="command">$ npm run build</span>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <div id="what-you-should-see" className="section">
            <h2>This is what you should see when you first boot up...</h2>
            <img className="box-shadow" src={boilerplateImg} alt="First view when React DApp boilerplate boots up" />
          </div>
          <br />
          <br />
          <div id="drizzle-integration" className="section">
            <h2>Do you need Drizzle?</h2>
            <p>You can install React DApp Boilerplate with two options: with Drizzle or without.  Drizzle is a front-end library that helps
            you synchronize the state of your Smart Contract and transaction data with your UI.  It can help you write your dApp front-end more easily and more predictably.
            </p>
            <p>However, the current version of Drizzle has flaws and we anxiously await the relase of Drizzle 2.0.</p>
            <p>In the meantime, you can install a version of React DApp Boilerplate with Drizzle integrated.</p>
            <p>If you need expert guidance on how to integrate Drizzle into your dApp, and if you want to master it quickly, then check out the <a href="https://fullstackdapps.com">Full Stack DApps training program</a> and get production ready in less than 1 week.  Save a ton of time, and your sanity, by joining the exclusive training program for dApp developers.</p>
            <br />
            <br />
            <br />
            <div className="section installation">
              <h2>Install React Dapp Boilerplate With Drizzle Integration</h2>
              <ul>
                <li>
                  <span className="command">$ git clone https://github.com/hackingbeauty/react-dapp-boilerplate-with-drizzle.git</span>
                </li>
              </ul>
            </div>
            <img src={drizzleImg} alt="" />
          </div>
          <div id="summary" className="section">
            <h2>Summary</h2>
            <p>React Dapp Boilerplate is a Truffle Box that helps you develop user-facing DApps connected to Smart Contracts written in Solidity.</p>
            <p>The boilerplate gives you an expert foundation to build any kind of full-stack user-facing DApp.  It's created by professionals in the industry and it has everything you and your team will need.</p>
            <p>We're at the dawn of mainstream blockchain adoption, and now is your chance to build the next disruptive applications of the future.</p>
            <p>Hopefully, we will all work together to guide this technology in a positive way that benefits all...</p>
          </div>
          <br />
          <br />
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
                <p>The first thing your dApp needs to do is detect MetaMask, and set it up as your dApp's provider.</p>
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
          <br />
          <br />
          <div id="youtube-video" className="section">
            <h2>Watch The Training Video</h2>
            <p>Get a personal walkthrough on how React DApp Boilerplate is set up.</p>
            <br />
            <a href="https://www.youtube.com/watch?v=0guqPdxM2GE&t=56s">
              <img className="box-shadow" src={youtubeVideoSnapshot} alt="training video" />
            </a>
            <br />
            <br />
            <br />
            <a href="https://www.youtube.com/watch?v=0guqPdxM2GE&t=56s">Watch the training video on Youtube now.</a>
          </div>
          <br />
          <br />
          <div id="contribute" className="section">
            <h2>Want To Contribute?</h2>
            <p>React DApp Boilerplate is an evolving project and we need your help!  Our mission is to encapsulate the best
            technologies the Web has to offer in a single foundational boilerplate so that you can easily build your dApp.</p>
            <p>If you have any ideas or suggestions, please contribute.</p>
          </div>
          <br />
          <br />
          <div className="section">
            <h2>License</h2>
            <p>The code is available under the <a href="https://github.com/hackingbeauty/react-dapp-boilerplate/blob/master/LICENSE.md">MIT license</a>.
            That means you can use the code for any project you could possibliy think of (commercial or non-commercial).</p>
          </div>
          <br />
          <br />
          <div className="section">
            <h2>Join The Slack Community</h2>
            <p>Send an email to Mark and request access to the <a href="mailto:support@fullstackdapps.com" target="_blank">Slack community</a> to get help and ask questions.
            </p>
          </div>
          <br />
          <br />
          <div id="learn" className="section">
            <h2>Training Program</h2>
            <p>For those ready to accelerate their mastery of dApp development, register for the <a href="https://fullstackdapps.com/amazing-value-offer">Full Stack DApps Training Program</a>.</p>
            <p>The program quickly and easily teaches you how to develop and design a real dApp using Truffle, React, Redux, and  Smart Contracts for Ethereum.
            </p>
            <p>
              It's the best and fastest way to master front-end engineering skills for blockchain development.  Once you do, you'll be able to turn any Smart Contract into a dApp.
            </p>
            <p>Everything we build in the training program is fully responsive, runs on any device (mobile + desktop), or the latest dApp browser.</p>
            <p>Click <a href="https://fullstackdapps.com/amazing-value-offer">here</a> to get instant access to the private member's area:</p>
            <br />
            <br />
            <a href="https://fullstackdapps.com/amazing-value-offer"><img src={privateMembersAreaImg} alt="Full Stack dApps main page image" /></a>
          </div>
          <br />
          <br />
          <div className="section">
            <h2>Consulting</h2>
            <p>Please email Mark Muskardin at <strong>support@fullstackdapps.com</strong> if your company is looking for expertise in building blockchain applications on Ethereum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
