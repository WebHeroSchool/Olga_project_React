import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
  <div className={styles.text}>
    Оставшиеся задачи на день: {count}
  </div>
);

export default Footer;
