import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <ul>
    {items.map((item) => (
      <Item
        key = {item.id} 
        value = {item.value}
        isDone = {item.isDone}
        id = {item.id}
        onClickDone = {onClickDone}
        onClickDelete = {onClickDelete}
       />))}
  </ul>);

ItemList.defaultProps = {
  items: [
      {
        value: 'ToDo',
        isDone: false,
        id: 1
      }
  ]
}

export default ItemList;
