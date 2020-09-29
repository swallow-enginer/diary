import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from "date-fns/locale/ja";
import format from "date-fns/format";
import { useRadioGroup } from '@material-ui/core';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "../src/redux/reducer.js";



class ExtendedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, "yyyy MMM", { locale: this.locale });
  }
  getDatePickerHeaderText(date) {
    return format(date, "MMdd日", { locale: this.locale });
  }
}

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const store = createStore(reducer);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  // storeが管理するstateを props として受け取るための変換函数
  // function mapStateToProps(state, props) {
  //   return state
  // }

  // // 各コンポーネントのイベントハンドラを一括で作成するものと思えば良い
  // // これも props に割り当てられる
  // function mapDispatchToProps(dispatch, props) {
  //   return {
  //       setUser: function(n) {
  //           dispatch(addCounter(n));
  //       },
  //   }

  // }

  // Component = connect(mapStateToProps,mapDispatchToProps)(Component);
  

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MuiPickersUtilsProvider utils={ExtendedUtils} locale={jaLocale}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};