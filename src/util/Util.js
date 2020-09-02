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
}

export default Util;