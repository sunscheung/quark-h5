/*
 * @Author: 张旭
 * @Date: 2020-12-14 17:30:59
 * @LastEditTime: 2021-02-02 15:51:30
 */
// const currentConfigKey = process.env.NODE_ENV === "development";
module.exports = {
  port: 40877,
  mongodb: {
    // url: currentConfigKey ? "mongodb://localhost:27017/quark" : "mongodb://10.172.48.104:40855/quark",
    url: "mongodb://10.172.48.104:40855/quark",
    options: {},
  },
  middleware: ["handlerError"],
  jwt: { secret: "huangwei9527" },
  crypto: { secret: "#*#*huangwei9527*#*#" },
  baseUrl: "",
};
