import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
  <li className = {styles.list}>
    <span className = {
      classnames({
        [styles.item]: true,
        [styles.done]: isDone,
      })}>
      <Checkbox
        color="secondary"
        checked={isDone}
        onClick={() => onClickDone(id)} 
       />  
      {value}
      <DeleteOutlinedIcon
        onClick={() => onClickDelete(id)}
        color="secondary"
        className={styles.delete}
       />  
    </span>
  </li>
);

export default Item;
