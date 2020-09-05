import 'date-fns';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import CategorySelect  from "../src/comp/CategorySelect.js";
import Memo  from "../src/comp/Memo.js";
import {KeyboardDatePicker} from '@material-ui/pickers';
import  DiaryAppBar  from "../src/comp/DiaryAppBar.js";
import { useRouter } from 'next/router';
import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import DiaryConst from "../src/util/DiaryConst.js";


// export const RegisterContext = createContext();
// const registerData = new Map();
// registerData.set(DiaryConst.REGISTER_DATA_DATE, "");
// registerData.set(DiaryConst.REGISTER_DATA_MEMO, "");
// registerData.set(DiaryConst.REGISTER_DATA_CATEGORY, "");


const useStyles = makeStyles({
  gridList: {
    marginLeft: '10px',
    marginRight: '10px'
  },
  grid: {
    marginBottom: '10px'
  },
  cell: {
    marginRight: '10px'
  }
});


export default function MaterialUIPickers() {
  const router = useRouter();
  const query = router.query;
  const [selectedDate, setSelectedDate] = useState(
                                              query.date == null
                                              ? "2020/09/10"
                                              :new Date(query.date));

  const classes = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
      <>
        <DiaryAppBar screen={DiaryConst.REGISTER_SCREEN}/>
        <Grid 
          container
          justify="flex-start"
          alignItems="flex-end"
          className={classes.gridList}>
          <Grid
            item
            className={classes.grid}
            >
              <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  margin="normal"
                  id="date-picker-inline"
                  label="日付"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className={classes.cell}
                  KeyboardButtonProps={{
                      'aria-label': 'change date',
                  }}
              />
              <CategorySelect />
          </Grid>
          {/* <Grid item xs={12} className={classes.grid}>
              
          </Grid> */}

          <Grid item xs={12} className={classes.grid}>
              <Memo />
          </Grid>
        </Grid>
      </>
  );
}