import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

const Button = ({ name, color }) => {
  return (
    <button type="submit" className={classNames(styles.button, styles[color])}>
      {name}
    </button>
  );
};

export default Button;
