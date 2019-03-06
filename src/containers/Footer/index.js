import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import fullStackDappsLogo     from 'assets/images/fullstack-dapps-logo.png';


/* component styles */
import { styles } from './styles.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        <img src={fullStackDappsLogo} alt="Full Stack DApps logo" />
        <p>This project is maintained by <a href="https://github.com/hackingbeauty">Hacking Beauty</a></p>
        <br />
      </div>
    );
  }
}

export default connect(null, null)(Footer);
