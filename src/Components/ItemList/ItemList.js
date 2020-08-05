import React from 'react';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (
  <ul className={styles.list}> {
    items.map(item => 
      <li key={item.value}>
        <Checkbox 
          color="secondary"
         />
        <Item 
          value={item.value}
          isDone={item.isDone}
         />
        <DeleteOutlinedIcon
          className={styles.delete}
          color="secondary"
         />
      </li>)}
  </ul>);

export default ItemList;
