#  Vercel部署和手机App配置完整指南

##  目标
将雅思学习工具部署到Vercel，并配置成可在手机上安装和使用的PWA应用。

##  已完成
-  代码已推送到GitHub
-  项目已有Vercel配置文件

---

##  第一步：在Vercel上部署项目

### 1.1 访问Vercel
1. 打开浏览器，访问 https://vercel.com
2. 点击 Sign Up 或 Log In
3. 推荐使用GitHub账号登录

### 1.2 导入项目
1. 点击 Add New Project
2. 选择 jerviee/ielts_study 仓库
3. 使用默认配置
4. 点击 Deploy

---

##  第二步：配置PWA

### 2.1 manifest.json已创建
文件路径：public/manifest.json

### 2.2 sw.js已创建
文件路径：public/sw.js

### 2.3 创建应用图标
需要创建两个PNG图标：
- icon-192.png (192x192像素)
- icon-512.png (512x512像素)

使用 icon-generator.html 工具生成图标。

---

##  第三步：推送更新

git add .
git commit -m Add PWA support
git push origin master

---

##  第四步：在手机上安装

### iOS
Safari打开  分享  添加到主屏幕

### Android
Chrome打开  自动弹出安装提示

---

##  功能特性

 离线访问
 添加到主屏幕
 全屏运行
 自动更新

---

##  完成！

完成后，你将拥有一个可以像原生App一样安装和使用的PWA应用。
