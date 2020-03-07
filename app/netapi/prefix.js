import CONSTANT from "../Constant.js";

let prefix = "";

if ("development" === "development") {
  prefix = CONSTANT.INTERFACE_DOMAIN_DEV;
} else {
  prefix = CONSTANT.INTERFACE_DOMAIN_PRD;
}

const defaultPrefix = prefix;

export default defaultPrefix;
