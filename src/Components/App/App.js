import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';

const toDoItem = 'Сдать домашку с Props-ами';

const App = () => (
  <div> <h1 style={{
    color: 'crimson'
    }}>План покорения мира
  </h1>
  	<InputItem/>
  	<ItemList toDoItem={toDoItem} />
  	<Footer count={3} />
  </div>
);

export default App;
