import rpcService from "../rpcServiceV";
import { checkParams } from "../../utilities/util";

/* 接口地址 */
import { URL_GET_PROJECT_LIST } from "../RestApiUrls";

/**创建诚意登记 */
export async function rGetProjectList(params) {
  return await rpcService.rGet(`${URL_GET_PROJECT_LIST}${checkParams(params, {}, true)}`);
}
