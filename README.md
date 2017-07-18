``` 
目录结构说明

|--bin              Express服务器启动文件
|-controller        逻辑处理层文件
|--mod              底层http请求ProxyModel的封装
|--public           脚本、样式及图片资源
  |--components     Vue公用组件
  |--images         图片资源
  |--js             js交互脚本文件
  |--lib            js公用库、框架
  |--page           页面逻辑js文件
  |--style          样式文件
|--routes           路由配置及中间件
  |--api            接口路由及配置文件
  |--middleware     中间件
  |--page           页面访问路由
  |--router         
|--views            页面
  |--layout         公用页面模板
|--logs             日志文件夹
|--app.js           Express配置文件
|--config.js        项目基础配置文件
|--interface.json   接口配置
|--package.json     项目配置信息
|--README.md        说明文件
|--pm2.config.json  pm2启动配置文件

```

```
Node 版本

>= 7.8
```

```
1.安装依赖包

npm install

2.修改interface.json的服务器host和端口

3.config.js文件内项目访问端口及redis相关配置

4.启动服务

npm run start (使用pm2配置启动集群服务)

node ./bin/www (未安装pm2环境下启动服务)

```