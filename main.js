/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2023-09-20 17:50:26
 * @LastEditors: ydfk
 * @LastEditTime: 2023-09-21 14:40:29
 */
const { app, BrowserWindow } = require("electron");
const { url, proxy, width, height } = require("./config.js");

console.log("url: ", url);

if (proxy) {
  app.commandLine.appendSwitch("proxy-server", proxy);
}

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    autoHideMenuBar: true,
    icon: "./icon.png",
  });

  mainWindow.loadURL(url);
});
