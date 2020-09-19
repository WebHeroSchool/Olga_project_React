// import React from 'react';
// import Item from '../Item/Item';
// import Checkbox from '@material-ui/core/Checkbox';
// import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// import styles from './ItemList.module.css';

// const ItemList = ({ items, isDone, onClickDone, id, onClickDelete}) => (
//   <ul className={styles.list}> {
//     items.map(item => 
//       <li key={item.value}>
//         <Checkbox
//           checked={item.isDone}
//           onClick={() => onClickDone(item.id)} 
//           color="secondary"
//          />
//         <Item 
//           value={item.value}
//           isDone={item.isDone}
//           id = {item.id}
//          />
//         <DeleteOutlinedIcon
//           onClick={() => onClickDelete(item.id)}
//           className={styles.delete}
//           color="secondary"
//          />
//       </li>)}
//   </ul>);

// export default ItemList;

import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul>
  {items.map(item => (<li key = {item.value} className = {styles.list}>
    <Item
      value = {item.value}
      isDone = {item.isDone}
      id = {item.id}
      onClickDone = {onClickDone}
      onClickDelete = {onClickDelete}
    />
  </li>))}
</ul>);

export default ItemList;