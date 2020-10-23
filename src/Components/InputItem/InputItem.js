import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import styles from './InputItem.module.css';

const InputItem = (props) => {
  const { onClickAdd } = props;

  const inputState = {
    inputValue: '',
    inputLabel: 'Напиши и сделай'
  };

  const [inputValue, setInputValue] = useState(inputState.inputValue);
  const [inputLabel, setInputLabel] = useState(inputState.inputLabel);

  const onButtonClick = () => {

    if (inputValue !== '') {
      setInputValue('');
      props.onClickAdd(inputValue);
    } else {
      setInputLabel(<span className={styles.error}> Необходимо заполнить поле</span>);
    }
  };

  return (
    <div className={styles.task}>
      <TextField
        id="standard-dense"
        size="small"
        label={inputLabel}
        value={inputValue}
        onClick={() => setInputLabel('Напиши и сделай')}
        onChange={(event) => {
          setInputValue(event.target.value.toUpperCase())
          setInputLabel('Напиши и сделай')
        }}
        margin="dense"
        color="secondary"
        fullWidth
      />
      <AddCircleRoundedIcon
        color="secondary"
        onClick={onButtonClick}
        className={styles.button}
      />
    </div>
  );
}

export default InputItem;
