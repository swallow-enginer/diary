import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon  from '@material-ui/icons/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';
import DiaryConst from "../util/DiaryConst.js";
import { useRouter } from 'next/router';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  arrowBack: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:"center"
  },
  reserve: {
    backgroundColor: '#FFFFFF' ,
    fontWeight: 'bold',
    "&:hover": {
      // opacity: '0.1'
      backgroundColor: 'rgb(235,235,235)'
    }
  }
}));

export default function DiaryAppBar(props) {
  const classes = useStyles();
  const router = useRouter();

  const onClickRegisterButton = () => {
    router.push({
      pathname: DiaryConst.HOME_URL,
      query: { 
        date: "2020/08/01"
      },
    });
    return;
  }
  
  const onClickIconButton = () => {
    router.push({
      pathname: DiaryConst.HOME_URL,
      query: { 
        date: "2020/08/01"
      },
    });
    return;
  }



  const getHomeScreenToolBar = () => {
    return (
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          カレンダー
        </Typography>
        <Button color="inherit">ログイン</Button>
      </Toolbar>
    );
  }

  const getRegisterScreenToolBar = () => {
    
    return (
      <Toolbar>
          <IconButton
            edge="start"
            className={classes.arrowBack}
            color="inherit"
            onClick={onClickIconButton}
            >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}>
            登録画面
          </Typography>
          
          <Button 
            className={classes.reserve}
            variant="text"
            color="primary"
            onClick={onClickRegisterButton}
          >保存</Button>

      </Toolbar>
    );
  }

  const getToolBar = () => {
    let toolbar = "";
    //ホーム画面
    if (props.screen === DiaryConst.HOME_SCREEN) {
      toolbar = getHomeScreenToolBar();
    
      //登録画面
    } else if (props.screen === DiaryConst.REGISTER_SCREEN) {
      toolbar = getRegisterScreenToolBar();
    }
    return toolbar;
  } 

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {getToolBar()}
      </AppBar>
    </div>
  );
}