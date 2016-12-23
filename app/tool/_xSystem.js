//系统辅助
// export function isOX() {
//   return /macintosh|mac os x/i.test(navigator.userAgent);
// }
// export function isWindow() {
//   return /windows|win32/i.test(navigator.userAgent);
// }
export default class XSystem {

  //是否是OX系统即苹果系统
  static isOX() {
    return /macintosh|mac os x/i.test(navigator.userAgent);
  }

  //是否是window系统
  static isWindow() {
    return /windows|win32/i.test(navigator.userAgent);
  }

  //是否是chrome内核
  static isWebkit() {
    return navigator.userAgent.toLowerCase().indexOf(' applewebkit/') > -1;
  }

}
