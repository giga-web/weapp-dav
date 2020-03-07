import { store, addAsyncModel } from "./libs/dva-giga/store.js";
import { promisifyAll, promisify } from "miniprogram-api-promise";

const wxp = {};
// promisify all wx's api
promisifyAll(wx, wxp);

App({});
