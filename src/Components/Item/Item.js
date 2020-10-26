import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = (props) => {
  const { value, isDone, onClickDone, id, onClickDelete } = props;

  return (
    <li className={styles.list}>
      <span className={
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
    </li>);
}

// class Item extends React.Component {

//   render() {

//     const { value, isDone, onClickDone, id, onClickDelete } = this.props;

//     return (
//       <li className = {styles.list}>
//         <span className = {
//           classnames({
//             [styles.item]: true,
//             [styles.done]: isDone,
//         })}>
//           <Checkbox
//             color="secondary"
//             checked={isDone}
//             onClick={() => onClickDone(id)} 
//            />  
//           {value}
//           <DeleteOutlinedIcon
//           onClick={() => onClickDelete(id)}
//           color="secondary"
//           className={styles.delete}
//            />  
//         </span>
//       </li>);
//   }
// }

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default Item;
