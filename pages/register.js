import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import CategorySelect  from "../src/comp/CategorySelect.js";
import Memo  from "../src/comp/Memo.js";
import {KeyboardDatePicker} from '@material-ui/pickers';
import  DiaryAppBar  from "../src/comp/DiaryAppBar.js";

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-31'));
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
      <>
      <DiaryAppBar screen="register"/>
      <GridList
        cellHeight="auto">
        <Grid item xs={3} container justify="space-around" alignItems="center">
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="日付"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </Grid>
        <Grid item xs={3} container justify="flex-start" alignItems="center">
            <CategorySelect />
        </Grid>
        <Grid item xs={12} >
            <Memo />
        </Grid>
      </GridList>
      
      </>
  );
}