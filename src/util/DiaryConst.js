class DiaryConst {
  /**
   * ホーム画面
   */

  static get SCREEN() {
    return {
      HOME     : 0,
      REGISTER : 1
    }
  }

  static get URL() {
    return {
      HOME      : "/home",
      REGISTER  : "/register",
      PROFILE   : "/profile",
      CATEGORY  : "/category",
      SEARCH    : "/search",
      SETTING   : "/setting",
    }
  }

  static get REGISTER_DATA() {
    return {
      DATE     : "date",
      MEMO     : "memo",
      CATEGORY : "category"
    }
  }

  static get SEARCH_DATA() {
    return {
      DATE_FROM  : "date_from",
      DATE_TO    : "date_to",
      KEYWORD    : "keyword",
      CATEGORY   : "category"
    }
  }

  static get CATEGORY_DEFAULT() {
    return {
      KEY   : 0,
      VALUE : "メモ"
    }
  }

  static get SCREEN_TITLE() {
    return {
      REGISTER : "メモ登録",
      CALENDAR : "カレンダー"
    }
  }
  static get BUTTON_TITLE() {
    return {
      REGISTER : "登録"
    }
  }
  static get HTTP_METHOD() {
    return {
      GET     : "GET",
      POST    : "POST",
      PUT     : "PUT",
      DELETE  : "DELETE",
    }
  }
}

export default DiaryConst;