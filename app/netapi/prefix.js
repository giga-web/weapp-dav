/*
import CONSTANT from "src/Constant.js";

let prefix = "";

if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
  // H5
  if (process.env.NODE_ENV === "development") {
    prefix = CONSTANT.INTERFACE_PREFIX; // 开发环境添加前缀作为代理的识别标志
  } else {
    prefix = ""; // 生产环境无前缀
  }
} else if (process.env.NODE_ENV === "development") {
  // 小程序|RN 开发环境
  prefix = CONSTANT.INTERFACE_DOMAIN_DEV;
} else {
  // 小程序|RN 生产环境
  prefix = CONSTANT.INTERFACE_DOMAIN_PRD;
}

const defaultPrefix = prefix;

export default defaultPrefix;
*/