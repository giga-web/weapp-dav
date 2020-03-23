import rpcService from "../rpcServiceV";
import { checkParams } from "../../utilities/util";

/* 接口地址 */
import { URL_RECOMMEND_LIST, URL_GET_PROJECT_LIST, URL_PAYORDER_LIST } from "../RestApiUrls";

// 楼盘列表
export async function rGetProjectList(params) {
  // console.log('rGetProjectList');
  const res = await rpcService.rGet(`${URL_GET_PROJECT_LIST}${checkParams(params, {}, true)}`);
  // debugger;
  return res;
}

// banner列表
export async function rGetRecommendList(params) {
  // console.log('rGetRecommendList');
  const res = await rpcService.rGet(`${URL_RECOMMEND_LIST}${checkParams(params, {}, true)}`);
  // debugger;
  return res;
}

// 订单列表
export async function rGetPayOrderList(params) {
  // console.log('rGetPayOrderList');
  const res = await rpcService.rGet(`${URL_PAYORDER_LIST}${checkParams(params, {}, true)}`);
  // debugger;
  return res;
}
