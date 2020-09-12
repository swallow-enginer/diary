import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function MultilineTextFields(props) {
  const [value] = React.useState();

  return (
    <>
        <TextField
          id="memo"
          label="メモ"
          fullWidth
          multiline
          rows={20}
        //   rowsMax={20}
          type="input"
          onChange={props.onChange}
          value={value}
          variant="outlined"
        />
    </>
  );
}
