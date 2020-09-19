// import React from 'react';
// import classnames from 'classnames';
// import styles from './Item.module.css';

// const Item = ({ value, isDone, onClickDone }) => (<span className={
//   classnames({
//     [styles.item]: true,
//     [styles.done]: isDone
//   })}> 
//   {value}
// </span>);

// export default Item;

import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (<span className = {
  classnames({
    [styles.item]: true,
    [styles.done]: isDone,
  })}>
  <div className = {styles.list}>
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
  </div>
</span>);

export default Item;
