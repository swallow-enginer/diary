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
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import FolderIcon from '@material-ui/icons/Folder';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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
  const [sideBar, setSideBar] = React.useState(false);

  const sideItems = [
    {
      text : "プロフィール",
      icon : <AccountBoxIcon />,
      url  : DiaryConst.URL.PROFILE,
    },
    {
      text : "カテゴリー",
      icon : <FolderIcon />,
      url  : DiaryConst.URL.CATEGORY,
    },
    {
      text : "検索",
      icon : <SearchIcon />,
      url  : DiaryConst.URL.SEARCH,
    },
    {
      text : "設定",
      icon : <SettingsIcon />,
      url  : DiaryConst.URL.SETTING,
    },
  ];

  const onClickSideBarItem = (url) => {
    router.push(url);
  }

  const onClickRegisterButton = () => {
    props.onRegister();
    router.push({
      pathname: DiaryConst.URL.HOME,
      query: { 
        date: "2020/08/01"
      },
    });
    return;
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSideBar(open);
  }

  const onClickIconButton = () => {
    router.push({
      pathname: DiaryConst.URL.HOME,
      query: { 
        date: "2020/08/01"
      },
    });
    return;
  }



  const getHomeScreenToolBar = () => {
    return (
      <>
      <Toolbar>
        <IconButton 
          edge="start" 
          className={classes.menuButton} 
          color="inherit" 
          aria-label="menu"
          onClick={toggleDrawer(true)}
          >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          カレンダー
        </Typography>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Toolbar>

      <Drawer open={sideBar} onClose={toggleDrawer(false)}>
        <div
        role="presentation"
        // onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}>
          <List>
            {
              sideItems.map((row) => (
                <ListItem 
                  button 
                  key={row.text}
                  onClick={() => onClickSideBarItem(row.url)}
                  >
                  <ListItemIcon>{row.icon}</ListItemIcon>
                  <ListItemText primary={row.text} />
                </ListItem>
              ))
            }
          </List>
        </div>
        </Drawer>
      </>
    );
  }

  const getRegisterScreenToolBar = () => {
    
    return (
      <>
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
            {DiaryConst.SCREEN_TITLE.REGISTER}
          </Typography>
          
          <Button 
            className={classes.reserve}
            variant="text"
            color="primary"
            onClick={onClickRegisterButton}
          >
            {DiaryConst.BUTTON_TITLE.REGISTER}
          </Button>
      </Toolbar>
      </>
    );
  }

  const getToolBar = () => {
    let toolbar = "";
    //ホーム画面
    if (props.screen === DiaryConst.SCREEN.HOME) {
      toolbar = getHomeScreenToolBar();
    
      //登録画面
    } else if (props.screen === DiaryConst.SCREEN.REGISTER) {
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