import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function MultilineTextFields() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
        <TextField
          id="memo"
          label="メモ"
          fullWidth="true"
          multiline
          rows={20}
        //   rowsMax={20}
          type="input"
          onChange={handleChange}
          value={value}
          variant="outlined"
        />
    </>
  );
}
