import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';

const App = () => {
  const items = [
    {
      value: 'Сдать домашку с Props-ами'
    },
    {
      value: 'Погулять с собакой'
    },
    {
      value: 'Приготовить ужин'
    }
  ];

  return(
  <div> <h1 style={{
    color: 'crimson'
    }}>План покорения мира
  </h1>
  	<InputItem/>
  	<ItemList items={items} />
  	<Footer count={3} />
  </div>
  )
};

export default App;
