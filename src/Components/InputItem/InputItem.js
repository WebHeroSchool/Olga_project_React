import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = ()=> (
  <div>
    <TextField
      id="standard-full-width"
      label="напиши и сделай"
      placeholder="Новая задача"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
     />
  </div>);
export default InputItem;
