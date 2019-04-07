import React, { Component }  from 'react';
import { connect }           from 'react-redux';
import MuiThemeProvider      from '@material-ui/core/styles/MuiThemeProvider';
import theme                 from 'configs/theme/config-theme'

// global styles for entire app
import './styles/app.scss';

/* application containers */
import Header     from 'containers/Header';
import LeftNavBar from 'containers/LeftNavBar';
import Home       from 'containers/Home';
import Footer     from 'containers/Footer';


export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />
          <Home />
          <LeftNavBar />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null)(App);
