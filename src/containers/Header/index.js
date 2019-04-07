import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import AppBar                 from 'components/AppBar'
import Typography             from '@material-ui/core/Typography';
import Toolbar                from '@material-ui/core/Toolbar';
import Button                 from 'components/Button'
import { appConfig }          from 'configs/config-main'

/* actions */
import * as uiActionCreators from 'core/actions/actions-ui';

/* component styles */
import { styles } from './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleToggle=() => {
    this.props.actions.ui.openNav();
  }

  render() {
    return (
      <div className={styles}>
        <header>
          <AppBar>
            <Toolbar>
              <Typography variant="title" color="inherit">
                {appConfig.name}
              </Typography>
              <div id="header-btn1">
                <Button variant="text">
                  <a href="https://github.com/hackingbeauty/react-dapp-boilerplate">SOURCE CODE</a>
                </Button>
              </div>
              <div id="header-btn2" >
                <Button variant="text">
                  <a href="https://github.com/hackingbeauty/react-dapp-boilerplate/blob/master/README.md">
                    DOCS
                  </a>
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
