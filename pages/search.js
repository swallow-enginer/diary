import 'date-fns';
import Grid from '@material-ui/core/Grid';
import CategorySelect  from "../src/comp/CategorySelect.js";
import Memo  from "../src/comp/Memo.js";
import {DatePicker} from '@material-ui/pickers';
import  DiaryAppBar  from "../src/comp/DiaryAppBar.js";
import { useRouter } from 'next/router';
import React, { useState, createContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DiaryConst from "../src/util/DiaryConst.js";
import Box from '@material-ui/core/Box';

export const RegisterContext = createContext();

const useStyles = makeStyles({
  gridList: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  grid: {
    marginBottom: '10px'
  },
  date: {
    width: '100px'
  }
});


const MaterialUIPickers = () => {
  const router = useRouter();
  const query = router.query;
  const [searchData, setSearchData] = useState({
    [DiaryConst.SEARH_DATA.DATE_FROM]   :  "",
    [DiaryConst.SEARH_DATA.DATE_TO]     :  "",
    [DiaryConst.SEARH_DATA.CATEGORY]     :  "",
    [DiaryConst.SEARH_DATA.KEYWORD]     :  "",
  });

  const classes = useStyles();

  const registerMemo = () => {
    alert(registerData[DiaryConst.REGISTER_DATA.CATEGORY]);
    alert(registerData[DiaryConst.REGISTER_DATA.DATE]);
    alert(registerData[DiaryConst.REGISTER_DATA.MEMO]);
  }

  const onChangeCategory = (category) => {
    registerData.[DiaryConst.REGISTER_DATA.CATEGORY] = category;
    setRegisterData(registerData);
  }

  const onChangeDate = (date) => {
    registerData.[DiaryConst.REGISTER_DATA.DATE] = date;
    setRegisterData({...registerData});
  };

  const onChangeMemo = (e) => {
    registerData.[DiaryConst.REGISTER_DATA.MEMO] = e.target.value;
    setRegisterData(registerData);
  };

  const getDatePicker = (props) => (
      <DatePicker
        {...props}
        className={classes.date}
        clearable
        autoOk
        // variant="inline"
        format="yyyy/MM/dd"
        margin="normal"
        value={registerData.[DiaryConst.REGISTER_DATA.DATE]}
        onChange={onChangeDate}
      />
  )
  
  const DateFromProps =
    {
      label : "登録日(開始)",
      value : searchData.[DiaryConst.SEARH_DATA.DATE_FROM],
      onChange : onChangeDateFrom(DiaryConst.SEARH_DATA.DATE_FROM)
    }

  return (
      <RegisterContext.Provider value={registerData}>
        <DiaryAppBar 
          screen={DiaryConst.SCREEN.REGISTER}
          onRegister={registerMemo}
        />
        <Grid 
          container
          justify="flex-start"
          alignItems="flex-end"
          className={classes.gridList}>
          <Grid
            item
            className={classes.grid}
            >
              {getDatePicker(DateFromProps)}
              <Box component="span" m={1}>
                <span>～</span>
              </Box>
              {getDatePicker(DateToProps)}
          </Grid>
          <Grid
            item
            className={classes.grid}
            >
            <CategorySelect 
                  onChange={onChangeCategory}
                />
          </Grid>

          <Grid item xs={12} className={classes.grid}>
              <Memo 
                onChange={onChangeMemo}
              />
          </Grid>
        </Grid>
      </RegisterContext.Provider>
  );
}
export default MaterialUIPickers;