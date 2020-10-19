import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
  <footer className={styles.count}>
    <div className={styles.text}>
      Оставшиеся задачи: {count}
    </div>   
  </footer>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
