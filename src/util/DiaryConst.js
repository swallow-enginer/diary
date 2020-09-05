class DiaryConst {
  /**
   * ホーム画面
   */
  static get HOME_SCREEN() {
      return 0;
  }

  /**
   * 登録画面
   */
  static get REGISTER_SCREEN() {
    return 1;
  }

  static get HOME_URL() {
    return "/";
  }

  static get REGISTER_URL() {
    return "/register";
  }

  static REGISTER_DATA_DATA = "aa";

  static get REGISTER_DATA_DATE() {
    return "date";
  }

  static get REGISTER_DATA_MEMO() {
    return "memo";
  }

  static get REGISTER_DATA_CATEGORY() {
    return "category";
  }
}

export default DiaryConst;