// class DiaryConst {
//   static get SCREEN() {
//     return {
//       HOME     : 0,
//       REGISTER : 1
//     }
//   }

//   static get URL() {
//     return {
//       HOME         : process.env.DIARY_DOMAIN + "/home",
//       REGISTER     : process.env.DIARY_DOMAIN + "/register",
//       PROFILE      : process.env.DIARY_DOMAIN + "/profile",
//       CATEGORY     : process.env.DIARY_DOMAIN + "/category",
//       SEARCH       : process.env.DIARY_DOMAIN + "/search",
//       SETTING      : process.env.DIARY_DOMAIN + "/setting",
//       API_LOGIN    : process.env.DIARY_DOMAIN + "/api/login/login",
//       API_LOGOUT   : process.env.DIARY_DOMAIN + "/api/login/logout",
//       API_CALLBACK : process.env.DIARY_DOMAIN + "/api/login/callback",
//       API_MEMO     : process.env.DIARY_DOMAIN + "/api/memo",
//       API_ME       : process.env.DIARY_DOMAIN + "/api/login/me",
//     }
//   }

//   static get REGISTER_DATA() {
//     return {
//       DATE     : "date",
//       MEMO     : "memo",
//       CATEGORY : "category"
//     }
//   }

//   static get SEARCH_DATA() {
//     return {
//       DATE_FROM  : "date_from",
//       DATE_TO    : "date_to",
//       KEYWORD    : "keyword",
//       CATEGORY   : "category"
//     }
//   }

//   static get CATEGORY_DEFAULT() {
//     return {
//       KEY   : 0,
//       VALUE : "メモ"
//     }
//   }

//   static get SCREEN_TITLE() {
//     return {
//       REGISTER : "メモ登録",
//       CALENDAR : "カレンダー"
//     }
//   }
//   static get BUTTON_TITLE() {
//     return {
//       REGISTER : "登録"
//     }
//   }
//   static get HTTP_METHOD() {
//     return {
//       GET     : "GET",
//       POST    : "POST",
//       PUT     : "PUT",
//       DELETE  : "DELETE",
//     }
//   }

//   static get ACTION_TYPE() {
//     return {
//       SET_USER : "SET_USER",
//     }
//   }
// }

// export default DiaryConst;


export default Object.freeze({
  SCREEN: {
    HOME     : 0,
    REGISTER : 1
  },

  URL: {
    HOME         : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/home",
    REGISTER     : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/register",
    PROFILE      : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/profile",
    CATEGORY     : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/category",
    SEARCH       : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/search",
    SETTING      : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/setting",
    API_LOGIN    : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/login/login",
    API_LOGOUT   : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/login/logout",
    API_CALLBACK : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/login/callback",
    API_MEMO     : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/memo",
    API_ME       : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/login/me",
  },

  REGISTER_DATA: {
    DATE     : "date",
    MEMO     : "memo",
    CATEGORY : "category"
  },

  SEARCH_DATA: {
    DATE_FROM  : "date_from",
    DATE_TO    : "date_to",
    KEYWORD    : "keyword",
    CATEGORY   : "category"
  },

  CATEGORY_DEFAULT: {
    KEY   : 0,
    VALUE : "メモ"
  },

  SCREEN_TITLE: {
    REGISTER : "メモ登録",
    CALENDAR : "カレンダー"
  },

  BUTTON_TITLE: {
    REGISTER : "登録"
  },
  
  HTTP_METHOD: {
    GET     : "GET",
    POST    : "POST",
    PUT     : "PUT",
    DELETE  : "DELETE",
  },

  ACTION_TYPE: {
    SET_USER : "SET_USER",
  }
});