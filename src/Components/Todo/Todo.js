import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import CardContent from '@material-ui/core/CardContent';

import styles from './Todo.module.css';

const Todo = () => {

  const initialState = {
    items: [
      {
        value: 'Пройти модуль React',
        isDone: false,
        id: 1
      },
      {
        value: 'Погулять с собакой',
        isDone: true,
        id: 2
      },
      {
        value: 'Приготовить ужин',
        isDone: true,
        id: 3
      }
    ],

    count: 3
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  const onClickDone = (id) => {
    const newItemList = items.map((item) => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    setItems(newItemList);
  };

  const onClickDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setCount((count) => count - 1);
  };


  const onClickAdd = (value) => {
    setItems([
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ]);
    setCount((count) => count + 1);
  };


  return (
    <CardContent>
      <h2 className={styles.title}>
        Важные дела:
            </h2>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList
        items={items}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <Footer count={count} />
    </CardContent>
  );

};

export default Todo;
