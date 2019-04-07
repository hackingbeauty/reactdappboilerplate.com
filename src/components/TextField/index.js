import React                              from 'react';
import { TextField as MaterialTextField } from '@material-ui/core';
import PropTypes                          from 'prop-types';

/* component styles */
import { styles } from './styles.scss';

export default function TextField(props) {
  return (
    <div className={styles}>
      <MaterialTextField {...props} />
    </div>
  );
}

TextField.propTypes = {
  hintText: PropTypes.string,
  type    : PropTypes.string
};

TextField.defaultProps = {
  type: 'text'
}
