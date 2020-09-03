import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    const items = [
      {
        value: 'Пройти модуль React',
        isDone: false
      },
      {
        value: 'Погулять с собакой',
        isDone: true
      },
      {
        value: 'Приготовить ужин',
        isDone: true
      }
    ];

    return (
      <div className={styles.wrap}> 
        <h1 className={styles.title}>
          Важные дела:
        </h1>
  	    <InputItem/>
  	    <ItemList items={items} />
  	    <Footer count={3} />
      </div>
    );
  }
};

export default App;
