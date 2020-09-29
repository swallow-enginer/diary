import Router from 'next/router';
import React, { Component } from 'react';

import createLoginUrl from '../lib/url-helper';

export default class RedirectToLogin extends Component {
  componentDidMount() {
    //assign：指定したURLのドキュメントをロード
    //createLoginUrl：ログイン画面にリダイレクト（）
    window.location.assign(createLoginUrl(Router.pathname));
  }

  render() {
    return (
      <>
        <div>Signing you in...</div>
      </>
    );
  }
}
