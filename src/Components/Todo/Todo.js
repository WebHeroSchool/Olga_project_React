import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

import InputItem from '../InputItem/InputItem';
import CardContent from '@material-ui/core/CardContent';

import styles from './Todo.module.css';
import classnames from 'classnames';

const Todo = () => {

  const initialState = {
    items: [],

    count: 0,
    activeLink: 'all',
    fixitem: false
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);
  const [activeLink, setActiveLink] = useState(initialState.activeLink);

  useEffect(() => {
    const raw = localStorage.getItem('items') || []
    setItems(JSON.parse(raw))
  }, []);


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

  const onClickSetActive = item => setActiveLink(item.id);
  const filters = [
    {
      id: 'incompleted',
      name: 'Незавершенные',
      count: items.filter(item => !item.isDone).length
    },
    {
      id: 'completed',
      name: 'Завершенные',
      count: items.filter(item => item.isDone).length
    },
    {
      id: 'all',
      name: 'Все',
      count: count
    }
  ];

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
      <ul className={styles['filters-list']}>
        {filters
          .filter(item => item)
          .map(item => (
            <li key={item.id}>
              <button
                className={classnames({
                  [styles.button]: true,
                  [styles.active]: (item.id === activeLink)
                })}
                onClick={() => onClickSetActive(item)}
              >
                {item.name + ' '}
                <span className={styles.number}>{item.count}</span>
              </button>
            </li>
          ))}
      </ul>
    </CardContent>
  );

};

export default Todo;
