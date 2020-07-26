import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'Пройти модуль React'
    },
    {
      value: 'Погулять с собакой'
    },
    {
      value: 'Приготовить ужин'
    }
  ];

  return(
    <div className={styles.wrap}> 
      <h1 className={styles.title}>
        План покорения мира
      </h1>
  	  <InputItem/>
  	  <ItemList items={items} />
  	  <Footer count={3} />
    </div>
  )
};

export default App;
