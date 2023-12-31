/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2023-09-20 17:50:26
 * @LastEditors: ydfk
 * @LastEditTime: 2023-09-21 16:11:23
 */
const { app, BrowserWindow, nativeTheme } = require("electron");
const { url, proxy, width, height, theme } = require("./config.js");

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

  if (theme) {
    nativeTheme.themeSource = theme;
  }

  mainWindow.loadURL(url);
});
