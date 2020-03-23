import { INTERFACE_DOMAIN } from "../constants/backend";

const whiteList = [
  // 登录
  INTERFACE_DOMAIN + 'hos-portal/api/wx/login',
  // 楼盘列表
  INTERFACE_DOMAIN + 'hos-portal/api/project/list',
];

// 检测 url 是否在白名单内
export function checkWhiteList(url) {
  const interfaceUrl = url.replace(/(.*?)\?(.*)/, '$1');
  return whiteList.includes(interfaceUrl);
}

export default {};
