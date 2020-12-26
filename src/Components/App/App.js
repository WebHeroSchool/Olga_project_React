import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.wrap}>
        <div className={styles.sidebar}>
          <header className={styles.menu}>
            <NavLink exact to='/' className={styles.link} activeClassName={styles.active}>Обо мне</NavLink>
            <NavLink to='/todo' className={styles.link} activeClassName={styles.active}>Дела</NavLink>
          </header>
        </div>
        <div className={styles.content}>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </div>
      </div>
    </Router>);
};

export default App;
