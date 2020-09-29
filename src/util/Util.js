class Util {
  static formatDate = (date, format) => {
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, (date.getMonth() + 1));
    format = format.replace(/DD/g, (date.getDate()));
    format = format.replace(/hh/g, (date.getHours()));
    format = format.replace(/mm/g, (date.getMinutes()));
    format = format.replace(/ss/g, (date.getSeconds()));
    format = format.replace(/SS/g, (date.getMilliseconds()));
    return format;
  };

  static getToday = (format) => {
    return this.formatDate(new Date(), format);
  }

  /**
   * マップからリストにあるキーを取り出しマップを返す
   */
  static getMapByList = (map, list) => {
    let result = new Map();
    for (var key of list) {
      if (map[key]) {
        result[key] = map[key];
      }
    }
    return result;
  }
  
  /**
   * ユーザー情報をセットする
   * @param {object} user ユーザー情報
   */
  static setUser = (user) => {

  }
}

export default Util;