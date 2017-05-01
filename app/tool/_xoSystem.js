//系统辅助
// export function isOX() {
//   return /macintosh|mac os x/i.test(navigator.userAgent);
// }
// export function isWindow() {
//   return /windows|win32/i.test(navigator.userAgent);
// }

const __browser = Symbol(`__browser`)

export default class xoSystem {

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

  static [__browser] = null

  static getBrowser() {
    if(!xoSystem[__browser]) {

      let agent = navigator.userAgent.toLowerCase(),
          opera = window.opera;

      xoSystem[__browser] = {
        opera: (!!opera && opera.version),
        ie:  /(msie\s|trident.*rv:)([\w.]+)/.test(agent),
        webkit: (agent.indexOf(' applewebkit/') > -1),
        mac: (agent.indexOf('macintosh') > -1),
        quirks: (document.compatMode == 'BackCompat')
      }

      xoSystem[__browser].gecko = (navigator.product == 'Gecko' && !xoSystem[__browser].webkit && !xoSystem[__browser].opera && !xoSystem[__browser].ie);

      let version = 0;
      // Internet Explorer 6.0+
      if (xoSystem[__browser].ie) {
          let v1 = agent.match(/(?:msie\s([\w.]+))/);
          let v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
          if (v1 && v2 && v1[1] && v2[1]) {
              version = Math.max(v1[1] * 1, v2[1] * 1);
          } else if (v1 && v1[1]) {
              version = v1[1] * 1;
          } else if (v2 && v2[1]) {
              version = v2[1] * 1;
          } else {
              version = 0;
          }
          //检测浏览器模式是否为 IE11 兼容模式
          xoSystem[__browser].ie11Compat = document.documentMode == 11;
          //检测浏览器模式是否为 IE9 兼容模式
          xoSystem[__browser].ie9Compat = document.documentMode == 9;
          //检测浏览器模式是否为 IE10 兼容模式
          xoSystem[__browser].ie10Compat = document.documentMode == 10;
          //检测浏览器是否是IE8浏览器
          xoSystem[__browser].ie8 = !!document.documentMode;
          //检测浏览器模式是否为 IE8 兼容模式
          xoSystem[__browser].ie8Compat = document.documentMode == 8;
          //检测浏览器模式是否为 IE7 兼容模式
          xoSystem[__browser].ie7Compat = ((version == 7 && !document.documentMode) || document.documentMode == 7);
          //检测浏览器模式是否为 IE6 模式 或者怪异模式
          xoSystem[__browser].ie6Compat = (version < 7 || xoSystem[__browser].quirks);
          xoSystem[__browser].ie9above = version > 8;
          xoSystem[__browser].ie9below = version < 9;
      }
      // Gecko.
      if (xoSystem[__browser].gecko) {
          var geckoRelease = agent.match(/rv:([\d\.]+)/);
          if (geckoRelease) {
              geckoRelease = geckoRelease[1].split('.');
              version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
          }
      }
      //检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号
      if (/chrome\/(\d+\.\d)/i.test(agent)) {
          xoSystem[__browser].chrome = +RegExp['\x241'];
      }
      //检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号
      if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
          xoSystem[__browser].safari = +(RegExp['\x241'] || RegExp['\x242']);
      }
      // Opera 9.50+
      if (xoSystem[__browser].opera)
          version = parseFloat(opera.version());
      // WebKit 522+ (Safari 3+)
      if (xoSystem[__browser].webkit)
          version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
      //检测当前浏览器版本号
      xoSystem[__browser].version = version;
    }
    return xoSystem[__browser];
  }

  /**
    @desc 排序
    @param
      array 需要排列的数组
      sortOrder 排列方向, 默认null,即放回当前数组的倒叙
      fieldMap 对比的字段
    @return array
  */
  static sort(array, sortOrder, fields) {
    if(!array || array.length <= 1) return array;
    if(!sortOrder) return array.reverse();
    return _sortObj.sort(array, sortOrder, fields);
  }

  /**
    @desc 为空
    @return bool
  */
  static isEmpty(value = null) {
    if (value == 0) return false;
    else return !value;
  }

  /**
    @desc 为方法
    @return bool
  */
  static isFunc(func) {
    if(!this.isEmpty(func)) return typeof func == 'function';
    else return false;
  }

}

//排序
const _sortObj = (function() {

  function sort(array, sortOrder, fields, left, right) {
    let len = array.length,
        partitionIndex;
        left = typeof left != 'number' && !left ? 0 : left;
        right = typeof right != 'number' && !right ? len - 1 : right;
    if(left < right) {
      partitionIndex = partition(array, sortOrder, fields, left, right);
      sort(array, sortOrder, fields, left, partitionIndex - 1);
      sort(array, sortOrder, fields, partitionIndex + 1, right);
    }
    return array;
  }

  function partition(array, sortOrder, fields, left, right) {
    let pivot = left,
        index = pivot + 1;
    for(let i = index; i <= right; i++) {
      let pass = true;
      if(!fields || Object.keys(fields).length == 0) {
        if(sortOrder == 'asc' && array[i] >= array[pivot]) pass = false;
        else if(sortOrder == 'desc' && array[i] <= array[pivot]) pass = false;
      } else {
        for(let key of fields) {
          if(sortOrder == 'asc' && array[i][key] >= array[pivot][key]) pass = false;
          else if(sortOrder == 'desc' && array[i][key] <= array[pivot][key]) pass = false;
        }
      }

      if(pass) {
        swap(array, i, index);
        index++;
      }
    }
    swap(array, pivot, index - 1);
    return index - 1;
  }

  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return {
    sort: sort
  }
})()
