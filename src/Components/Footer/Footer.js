
import React, { useContext, useState } from 'react';
import { TaskContext } from '../Context/TaskContextProvider';
import styles from './Footer.module.css';
import classnames from 'classnames';

const Footer = () => {
  const [todos, setTodos] = useContext(TaskContext);
  const [sortItem, setSortItem] = useState('all');

  const allItems = todos;
  const activeItems = todos.filter((todo) => !todo.complete);
  const complitedItems = todos.filter((todo) => todo.complete);

  const onClickSorting = (sorting) => setSortItem(sorting);

  let sortingItems;
  switch (sortItem) {
    case 'all':
      sortingItems = todos;
      break;
    case 'Active':
      sortingItems = todos.filter((todo) => !todo.complete);
      break;
    case 'Complited':
      sortingItems = todos.filter((todo) => todo.complete);
      break;
    default:
      sortingItems = todos;
  }

  return (
    <div className={styles.wrap}>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_all]: sortItem === 'all',
        })}
        onClick={() => onClickSorting('all')}
      >
        Все<p className={styles.count}>{allItems.length}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sortItem === 'Active',
        })}
        onClick={() => onClickSorting('Active')}
      >
        Незавершенные<p className={styles.count}>{activeItems.length}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sortItem === 'Complited',
        })}
        onClick={() => onClickSorting('Complited')}
      >
        Выполненные<p className={styles.count}>{complitedItems.length}</p>
      </button>
    </div>
  )
};

export default Footer;
