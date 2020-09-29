import Grid from '@material-ui/core/Grid';
import CategorySelect  from "../src/comp/CategorySelect.js";
import Memo  from "../src/comp/Memo.js";
import {DatePicker} from '@material-ui/pickers';
import  DiaryAppBar  from "../src/comp/DiaryAppBar.js";
import { useRouter } from 'next/router';
import React, { useState, createContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DiaryConst from "../src/util/DiaryConst.js";
import Util from "../src/util/Util.js";
import withAuth from '../src/comp/with-auth';

export const RegisterContext = createContext();

const useStyles = makeStyles({
  gridList: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  grid: {
    marginBottom: '10px'
  },
  cell: {
    marginRight: '10px'
  }
});


const register = () => {
  const router = useRouter();
  const query = router.query;
  const getDate = () => {return query.date === null ? Util.getToday("YYYY/MM/DD") : query.date}
  const [registerData, setRegisterData] = useState({
    [DiaryConst.REGISTER_DATA.DATE]     :  getDate(),
    [DiaryConst.REGISTER_DATA.MEMO]     :  "",
    [DiaryConst.REGISTER_DATA.CATEGORY] :  ""
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
              <DatePicker
                  disableToolbar
                  autoOk
                  variant="inline"
                  format="yyyy/MM/dd"
                  margin="normal"
                  label="日付"
                  value={registerData.[DiaryConst.REGISTER_DATA.DATE]}
                  onChange={onChangeDate}
                  className={classes.cell}
              />
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
export default withAuth(register);