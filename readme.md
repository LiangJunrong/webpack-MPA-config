jsliang的webpack多页面配置
======

## 思路图：
![Image text](https://github.com/LiangJunrong/webpack-MPA-config/blob/master/project.png)

## ☆ 说明：
· 码字不易，配置更难，进来看到希望能点个`star`；如果对你有帮助，请点个`star`；如果有疑问，请提交`Issue`或者加jsliang的`QQ：1741020489`. 谢谢支持~  
· jsliang从webpack的`4.10.0`出发，在<a href="https://github.com/LiangJunrong/webpack-study" >webpack-study</a>项目中编写了webpack的学习文档，如果你还没接触过webpack，希望你看完我的学习Word能有所感悟，然后该webpack-MPA-config（webpack多页面配置）项目发布到GitHub上时webpack版本已到`v4.14.0`。是的，webpack升级之快难以想象。  

## ☆ 使用方法：
· 安装依赖包：     npm i  
· 进入开发模式：   npm run dev  
· 打包成静态文件： npm run build  

## ☆ 配置目的：
· 实现live-server的实时重新加载(live reloading)功能  
· 实现css/js打包压缩  
· 实现共用HTML模板（header.html/footer.html）  
· ……等等  

## ☆ 实现功能：
### - 共有功能 | webpack.common.js
· 按模块划分目录。即在src文件夹下新增index的文件夹就是新增index模块，然后index下按index.html/index.css/index.js设置（index.js需require index.css，html正常使用），即可按模块划分目录使用。  
· 开发或者生产模式打包前自动删除dist文件夹。妈妈再也不用担心我手动删除dist目录删到手软啦~  
· 能处理一下文件：<br>
1、.htm/.html文件、<br>
2、.css/.less文件、<br>
3、.jpg/.jpeg/.png/.gif/.svg文件、<br>
4、.woff/.woff2/.eot/.ttf/.otf文件、<br>
5、.js文件（ES6/7未作处理，使用ES6/7可能有bug）。  

### - 开发模式 | webpack.dev.js
· 拥有共有功能所有功能  
· 使用npm run dev能启动开发模式，能自动检查错误并报错：  
· 默认启动localhost:8080，如果想配置局域网（WIFI），通过其他电脑、手机查看的话，请开启host选项，并设置值为WiFi的IPV4地址，设置后访问： `http://192.168.1.107:8080` 即可（注：如果没正确设置，将无法正常启动）。  

### - 生产模式 | webpack.prod.js
· 拥有共有功能所有功能  
· 打包并压缩JavaScript  
· 打包并压缩CSS  

## ☆ 使用技巧：
### - 模块
· 在src下新建文件夹表示新增一个模块：src/××  
· 在src/××下新增正常配置为××.html、××.css/less、××.js：src/××/××.html（注：如果需要使用less，可以直接用.less文件，已配置）  
· html/css/js的链接是：js文件require('./××.css')或者require('.××.less')；然后html文件正常编写、链接图片即可，没有注意点。  

### - 模板
· HTML能通过 #include("../assets/html/header.html"); 引入其他HTML文件（详情可看index.html）。通过该方法可以复用HTML文件，减少工作量。  
· 模板中js的调用跟模块调用方式一样，但请注意层级。  

## ☆ bug与缺陷
· 无法转编码为gb2312（工作需要，但是配置不成功，暂未实现）。 | webpack.prod.js  
· 图片200K内打包为base64编码，主要是background:url()配置失败，大于200K的background无法正常显示，而&lt;img&gt;标签能正常引用。 | webpack.common.js  
· 字体限制大小100K，太大会出现无法打包的问题 | webpack.common.js  
