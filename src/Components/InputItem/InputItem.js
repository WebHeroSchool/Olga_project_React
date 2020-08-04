import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = ()=> (
  <div>
    <TextField
      id="standard-full-width"
      label="Напиши и сделай"
      placeholder="Новая задача"
      color="secondary"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
     />
  </div>);
export default InputItem;
