#### 博客地址
https://www.muaua.cn/

1、全局安装vuepress
```
npm install -g vuepress
```
2、mkdir testVuepress(你自己的文件夹)

3、testVuepress下，运行```npm init -y```(-y指命令全部默认yes)，快速初始化package.json

4、新建文件夹docs，配置package.json，添加下述兩行
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

5、在docs创建README.md，然后运行```npm run docs:dev```

此时文件夹结构
```
study
+--docs
+----README.md
+--package.json
```

6、正常情况可运行成功（失败了具体百度，我也不晓得），打开http://localhost:8080/，即vuepress运行成功

7、在testVuepress目录下，运行```npm run docs:build```，可以看到当前目录下面多了一个node_modules，docs中多了个 .vuepress文件夹

8、在.vuepress文件夹中创建config.js 文件，内容同目录config.js

9、关于vuepress的运行、打包如上，下面开始撸猫

10、全局安装```npm i vuepress-plugin-cat -S```

11、在config.js中添加
```
module.exports = {
 plugins: [
   "vuepress-plugin-cat",
 ]
}
```

12、此时运行vuepress时页面报错，添加sass，依次在testVuepress目录下安装
```
npm install node-sass --save-dev
npm install sass-loader --save-dev
npm install style-loader --save-dev
```

13、再次运行```npm run docs:dev```，over

14、build完页面样式没有，在dist/index.html的/assets前面加上.




