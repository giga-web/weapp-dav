import queryString from "query-string";
import { KEY_USER_SETTING, KEY_USER_INFO, SIGNATURE_URL } from "../constants/customer";

// ============================================================
// 基础

/**
 * 测试属性是否匹配
 */
export function testPropTypes(value, type, dev) {
  const sEnums = ["number", "string", "boolean", "undefined", "function"]; // NaN
  const oEnums = ["Null", "Object", "Array", "Date", "RegExp", "Error"];
  const nEnums = ["[object Number]", "[object String]", "[object Boolean]", "[object Undefined]", "[object Function]", "[object Null]", "[object Object]", "[object Array]", "[object Date]", "[object RegExp]", "[object Error]"];
  const reg = new RegExp("\\[object (.*?)\\]");

  // 完全匹配模式，type应该传递类似格式[object Window] [object HTMLDocument] ...
  if (reg.test(type)) {
    // 排除nEnums的12种
    if (~nEnums.indexOf(type)) {
      if (dev === true) {
        console.warn(value, "The parameter type belongs to one of 12 types：number string boolean undefined Null Object Array Date RegExp function Error NaN");
      }
    }

    if (Object.prototype.toString.call(value) === type) {
      return true;
    }

    return false;
  }

  // 检测到的类型
  let t = typeof value;

  // 可以通过 typeof 判断的，检测到的类型存在于枚举
  if (~sEnums.indexOf(t)) {
    // 区分特殊值NaN
    if (t === "number" && isNaN(value)) {
      t = "NaN";
    }
    // 传递的类型和检测到的类型匹配
    if (t === type) {
      return true;
    }
    return false;
  } else {
    // 需要通过 Object.prototype.toString.call() 判断的
    const o = Object.prototype.toString.call(value);
    // 本来o的值格式是[object Object]，通过正则后值的格式是Object
    const r = new RegExp("\\[object (.*?)\\]");
    const so = o.replace(r, "$1");

    // 检测到的类型存在于枚举，传递的类型和检测到的类型匹配
    if (~oEnums.indexOf(so) && so === type) {
      return true;
    }
    return false;
  }
}

/**
 * 参数类型检测
 */
export function checkPropTypes(arr, dev) {
  // 一维数组拆分为二维数组
  const multArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      multArr.push(arr.slice(i, i + 2));
    }
  }

  // 两层循环验证
  for (let n = 0; n < multArr.length; n++) {
    const v = multArr[n][0];
    const vArr = multArr[n][1];

    // 如果vArr中包含v，表示验证通过，否则要验证类型
    if (~vArr.indexOf(v)) {
      continue;
    }

    // 验证类型
    let exist = false;
    for (let m = 0; m < vArr.length; m++) {
      if (testPropTypes(v, vArr[m], dev)) {
        exist = true;
        break;
      }
    }
    // 数组中的类型和值的类型都不匹配，则报错
    if (exist === false) {
      if (dev === true) {
        console.error(v, `Error: index ${n} is of the wrong type`);
      }
    }
  }
}

/**
 * 测试可能值
 */
export function testPossibility(inputList, callback, obj) {
  /** inputList
	  [
		[undefined, true, {}],
		[undefined, true],
		[1, 2, 3]
	  ]
	 */
  // 第一维数组的长度
  const n = inputList.length;

  // 组合
  const combination = [];
  for (let i = 0; i < n; i++) {
    combination.push(0);
  }
  // 此时的组合的格式为：[0,0,0]
  // 对combination的修改，目标是改成类似 [0,0,1] [0,0,2] [0,1,0] [0,1,1] [0,1,2] [1,0,0] [1,0,1] [1,0,2] [1,1,0] ...

  // 用于使组合的最后一个元素的值不为0，使得循环继续
  let i = 0;

  // 标识循环是否继续，默认不继续
  let isContinue = false;

  // 至少执行一次
  do {
    // 每次拿到参数数组都要循环第一维数组的长度
    const paramsArr = [];
    for (let j = 0; j < n; j++) {
      // 拿到第几个第二维数组的第几个元素
      paramsArr.push(inputList[j][combination[j]]);
    }
    // apply反向调用待测试函数
    callback.apply(obj || null, paramsArr);

    // 核心部分，对combination的修改
    i++;

    // 组合的最后一个元素的值
    combination[n - 1] = i;

    for (let j = n - 1; j >= 0; j--) {
      // 如果组合的第几个值已经和第几个第二维数组的长度相等了，表示这个第二维数组的值取完了，要归0
      if (combination[j] >= inputList[j].length) {
        combination[j] = 0;

        i = 0;

        // 如果j!=0，即不是第一个第二维数组，前一位加1
        if (j - 1 >= 0) {
          combination[j - 1] = combination[j - 1] + 1;
        }
      }
    }

    // 结束循环
    isContinue = false;

    // 当组合数组的元素有一个不是0的时候，继续循环
    for (let key in combination) {
      if (combination[key] !== 0) {
        isContinue = true;
      }
    }
  } while (isContinue);
}

/**
 * 对象检测
 */
export const checkObject = {
  isEmpty: obj => {
    try {
      const json = JSON.stringify(obj);
      if (json === "{}") {
        return true;
      }

      return false;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  },
  isOneLevel: (obj, dev) => {
    // 特殊值
    const sv = [null, undefined];
    // 正常值
    const vv = ["number", "string", "boolean"];

    let result = false;

    for (let key in obj) {
      const value = obj[key];

      // 可以是特殊值
      if (~sv.indexOf(value)) {
        continue;
      }

      const type = typeof value;

      // 可以是正常值，以及NaN
      if (~vv.indexOf(type)) {
        if (type === "number" && isNaN(value)) {
          continue;
        }

        continue;
      }

      // 不能是 {}, [], function () {}, new Date(), new RegExp(), new Error()，以及其它类型
      result = key;
      break;
    }

    if (result !== false) {
      if (dev === true) {
        console.error(`Error: ${result} must be [ null, undefined, true, number, string, NaN ]`);
      }
      return false;
    }

    return true;
  }
};
// ============================================================

// ============================================================
// 业务强相关

/**
 * 请求参数检测
 * defaultParams 默认参数
 * params 当前参数
 * query 是否是查询条件
 */
export function checkParams(defaultParams, params, query) {
  // 只取默认参数中有的参数，多余的忽略，值的类型不匹配则使用默认值
  const resultParams = Object.keys(defaultParams).reduce((result, key) => {
    if (testPropTypes(defaultParams[key], "Array") && testPropTypes(defaultParams[key][0], "Object")) {
      result[key] = params[key].map((item, index) => {
        const oitem = {};

        Object.keys(item).forEach(ikey => {
          if (defaultParams[key][0][ikey] !== undefined) {
            oitem[ikey] = item[ikey];
          }
        });

        return oitem;
      });
    } else {
      result[key] = (params && params[key]) || defaultParams[key];
    }

    return result;
  }, {});

  // 指定返回查询条件
  if (query === true) {
    return checkObject.isEmpty(defaultParams) ? "" : "?" + queryString.stringify(resultParams); //.toLowerCase();
  }

  return resultParams;
}

/**
 * 获取城市名称
 */
export function getCityName() {
  const defaultCityName = "深圳市";
  try {
    const value = wx.getStorageSync("cityName");
    return value || defaultCityName;
  } catch (e) {
    return defaultCityName;
  }
}

/**
 * 获取存储的用户信息
 */
export function getStorageUserInfo() {
  try {
    const value = wx.getStorageSync(KEY_USER_INFO);
    return value || {};
  } catch (e) {
    return {};
  }
}

/**
 * 判断是否是管理层
 */
export function authManagement() {
  const { user } = getStorageUserInfo();

  // 是否可以进入围观列表，也是通过是否显示报表来控制
  const showReport = user ? user.showReport : undefined;

  if (showReport === 1) {
    return true;
  }

  return false;
}

/**
 * 判断是否置业顾问
 */
export function authConsultant() {
  const { identity } = getStorageUserInfo();

  if (identity === 1) {
    return true;
  }

  return false;
}

// ============================================================

// ============================================================
// 设计模式
// ============================================================
/**
 * 同步变量迭代器
 *
 */
export const syncVarIterator = {
  getter: function(obj, key, defaultValue) {
    // 结果变量
    const defaultResult = defaultValue === undefined ? undefined : defaultValue;

    if (testPropTypes(obj, "Object") === false && testPropTypes(obj, "Array") === false) {
      return defaultResult;
    }

    // 结果变量，暂时指向obj持有的引用，后续将可能被不断的修改
    let result = obj;

    // 得到知道值
    try {
      // 解析属性层次序列
      const keyArr = key.split(".");

      // 迭代obj对象属性
      for (let i = 0; i < keyArr.length; i++) {
        // 如果第 i 层属性存在对应的值则迭代该属性值
        if (result[keyArr[i]] !== undefined) {
          result = result[keyArr[i]];

          // 如果不存在则返回未定义
        } else {
          return defaultResult;
        }
      }
    } catch (e) {
      return defaultResult;
    }

    // 返回获取的结果
    return result;
  },
  setter: function(obj, key, val) {
    // 如果不存在obj则返回未定义
    if (testPropTypes(obj, "Object") === false) {
      return false;
    }

    // 结果变量，暂时指向obj持有的引用，后续将可能被不断的修改
    let result = obj;

    try {
      // 解析属性层次序列
      const keyArr = key.split(".");

      let i = 0;

      // 迭代obj对象属性
      for (; i < keyArr.length - 1; i++) {
        // 如果第 i 层属性对应的值不存在，则定义为对象
        if (result[keyArr[i]] === undefined) {
          result[keyArr[i]] = {};
        }

        // 如果第 i 层属性对应的值不是对象（Object）的一个实例，则抛出错误
        if (!(result[keyArr[i]] instanceof Object)) {
          throw new Error("obj." + keyArr.splice(0, i + 1).join(".") + "is not Object");
        }

        // 迭代该层属性值
        result = result[keyArr[i]];
      }

      // 设置属性值
      result[keyArr[i]] = val;

      return true;
    } catch (e) {
      return false;
    }
  }
};

/**
 * 更新本地存储
 *
 */
export function updateStorage(key, value) {
  const storage = wx.getStorageSync(KEY_USER_SETTING);
  const result = syncVarIterator.setter(storage, key, value);

  if (result) {
    wx.setStorageSync(KEY_USER_SETTING, storage);
    return storage;
  }

  return false;
}

/**
 * 获取状态
 *
 */
export function getPageStatus(defaultValue, currentValue, allowValue, type) {
  let usableValue;

  try {
    let transformValue = currentValue;

    if (type === "number") {
      transformValue = Number(currentValue);
    }

    if (allowValue.includes(transformValue)) {
      usableValue = transformValue;
    }
  } catch (e) {
    console.log(e);
  }

  return usableValue || defaultValue;
}

export function validateIdCard(idCard) {
  //15位和18位身份证号码的正则表达式
  let regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  //如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (regIdCard.test(idCard)) {
    if (idCard.length == 18) {
      let idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
      let idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
      let idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
      for (let i = 0; i < 17; i++) {
        idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
      }
      let idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
      let idCardLast = idCard.substring(17); //得到最后一位身份证号码
      //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod == 2) {
        if (idCardLast == "X" || idCardLast == "x") {
          return {
            success: true,
            message: "恭喜通过验证啦！"
          };
        } else {
          return {
            success: false,
            message: "身份证号码错误！"
          };
        }
      } else {
        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if (idCardLast == idCardY[idCardMod]) {
          return {
            success: true,
            message: "恭喜通过验证啦！"
          };
        } else {
          return {
            success: false,
            message: "身份证号码错误！"
          };
        }
      }
    }
  } else {
    return {
      success: false,
      message: "身份证格式不正确！"
    };
  }
}

export function validatePhone(phone) {
  let regPhone = /^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/;
  return regPhone.test(phone);
}

// 售楼跳转
export function jumpLogicSell(params) {
  const { status, id, audit, projectid } = params;
  const query = checkParams({ id, status, audit, projectid }, {}, true);

  switch (status) {
    // 已登记待审核
    case 101:
    // 审核未通过
    case 103:
      wx.navigateTo({
        url: "/areas/mobile/PackageThird/AuthStep1Status/Index" + query
      });
      break;
    // 已审核待认筹
    case 102:
    // 已认筹待支付
    case 201:
    // 退筹中
    case 203:
    // 已退筹
    case 204:
      wx.navigateTo({
        url: "/areas/mobile/PackageThird/AuthStep2/Index" + query
      });
      break;
    // 已认筹待选房
    case 202:
      wx.navigateTo({
        url: "/areas/mobile/PackageThird/AuthStep2next/Index" + query
      });
      break;
    // 待选房
    case 301:
    // 已取消
    case 408:
      wx.navigateTo({
        url: "/areas/mobile/PackageThird/AuthStep3/Index" + query
      });
      break;
    // 已选房待支付
    case 401:
      wx.navigateTo({
        url: "/areas/mobile/PackageThird/AuthStep5/Index" + query
      });
      break;
    // 已选房已认购
    case 402:
    // 已选房退订中
    case 403:
    // 已选房已退订
    case 404:
    // 已选房挞定中
    case 405:
    // 已选房已挞定
    case 406:
    // 已选房已签约
    case 407:
      wx.navigateTo({
        url: "/areas/mobile/PackageThird/AuthStep6/Index" + query
      });
      break;
  }
}

// 订单详情
export function jumpLogicOrder(params) {
  const { status, id, audit, projectid, orderid } = params;
  const query = checkParams({ id, status, audit, projectid, orderid }, {}, true);

  switch (status) {
    // 已登记待审核
    case 101:
    // 审核未通过
    case 103:
    // 已审核待认筹
    case 102:
    // 已认筹待支付
    case 201:
    // 退筹中
    case 203:
    // 已退筹
    case 204:
    // 已认筹待选房
    case 202:
    // 待选房
    case 301:
    // 已取消
    case 408:
    // 已选房待支付
    case 401:
    // 已选房已认购
    case 402:
    // 已选房退订中
    case 403:
    // 已选房已退订
    case 404:
    // 已选房挞定中
    case 405:
    // 已选房已挞定
    case 406:
    // 已选房已签约
    case 407:
      wx.navigateTo({
        url: "/areas/mobile/PackageThird/MyOrder/Detail" + query
      });
      break;
  }
}

/**
 * ios时间转换
 */
export function iosTime(time) {
  return time.replace(/-/g, "/");
}

/**
 * 图片压缩替换地址
 *
 *
 */
export function picgz(url) {
  return url.replace(/file\.myqcloud\.com/, "picgz.myqcloud.com") + "?imageView2/2/w/500/h/500/q/60/rq/60/lq/60";
}

/**
 * 秒转换为可读
 */
export function secondsToReadable(seconds) {
  const minuteSeconds = 60;
  const hourSeconds = minuteSeconds * 60;
  const daySeconds = hourSeconds * 24;

  let remain = seconds;

  const day = parseInt(remain / daySeconds);

  remain = remain % daySeconds;

  const hour = parseInt(remain / hourSeconds);

  remain = remain % hourSeconds;

  const minute = parseInt(remain / minuteSeconds);

  remain = remain % minuteSeconds;

  if (day) {
    return day + "天" + hour + "小时" + minute + "分钟" + remain + "秒";
  } else if (hour) {
    return hour + "小时" + minute + "分钟" + remain + "秒";
  } else if (minute) {
    return minute + "分钟" + remain + "秒";
  } else if (remain) {
    return remain + "秒";
  }

  return false;
}

/**
 * 跳转到Webview
 *
 */
export function jumpLogicWebview(url) {
  if (url === undefined) {
    wx.showToast({ title: "暂未开放", icon: "none" });
    return;
  }

  wx.navigateTo({
    url: `/areas/mobile/Webview/Index?jumpUrl=${encodeURIComponent(url)}`
  });
}

/**
 * 跳转到签章
 *
 */
export function jumpLogicSignature(params) {
  if (params === undefined) {
    wx.showToast({ title: "暂未开放", icon: "none" });
    return;
  }

  const result = checkParams({ contractId: params.contractId, mobile: params.userPhone }, {}, true);

  const url = SIGNATURE_URL + result;

  wx.navigateTo({
    url: `/areas/mobile/Webview/Index?jumpUrl=${encodeURIComponent(url)}`
  });
}
