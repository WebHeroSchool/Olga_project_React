import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ toDoItem }) => (
  <ul>
    <li> <Item toDoItem={toDoItem} /></li>
    <li> <Item toDoItem={'Погулять с собакой'} /></li>
    <li> <Item toDoItem={'Приготовить ужин'} /></li>
  </ul> 
);

export default ItemList;
