import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Grid from '@material-ui/core/Grid';

import styles from './InputItem.module.css';



class InputItem extends React.Component {
  state = {
    inputValue: '',
    inputLabel: 'Напиши и сделай'
  };
  
  onButtonClick = () => {
    if (this.state.inputValue !== '') {
      this.setState({ inputValue: ''});
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({inputLabel:<span className={styles.error}> Необходимо заполнить поле</span>});
    }
  };


  render() {
    const { onClickAdd } = this.props;

    return (
      <div  className={styles.task}>
        <TextField
          id="standard-dense"
          size="small"
          label={this.state.inputLabel}          
          value={this.state.inputValue}
          onClick={() => this.setState({inputLabel: 'Напиши и сделай'})}
          onChange={(event) => this.setState({
            inputValue: event.target.value.toUpperCase(),
            inputLabel: 'Напиши и сделай'
          })}
          margin="dense"
          color="secondary"
          fullWidth
         /> 
        <AddCircleRoundedIcon
          color="secondary"
          onClick={this.onButtonClick}
          className={styles.button}
         />
      </div>
    );
  }
}

export default InputItem;

