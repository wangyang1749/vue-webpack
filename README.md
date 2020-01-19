# 项目初始化
+ `npm init` 生成package.json
+ `npm i webpack vue vue-loader` 生成 `node_modules` 和 `package-lock.json`
> `npm WARN vue-loader@15.8.3 requires a peer of css-loader@* but none is installed. You must install peer dependencies yourself.`
+ `npm i css-loader`
```
"css-loader": "^3.4.2",
"vue": "^2.6.11",
"vue-loader": "^15.8.3",
"webpack": "^4.41.5"
```
+ `create app.vue` 创建测试文件
+ `create index.js` 创建入口文件
+ `create webpack.config.js` 创建weboack的配置
> (webpack不能识别vue文件，需要在配置文件添加loader)You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
```
 module:{
        rules:[
            {
                test:/.vue/,
                loader:'vue-loader'
            }
        ]
    }
```
>[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
+  `npm i vue-template-compiler`
> webpack默认加载js文件，除了可以加载vue文件，也可以加载css、图片
+ `npm i style-loader url-loader file-loader`
+ `npm i webpack-dev-server`
> 添加Html包含该js
+ `npm i html-webpack-plugin`
```
添加配置
const HtmlPlugin = require('html-webpack-plugin')
plugins:[
    new HtmlPlugin()
]
```
+ `npm i extract-text-webpack-plugin` css单独打包
```

```
+ `npm i postcss-loader autoprefixer babel-loader babel-core`
+ `npm i babel-preset-env babel-plugin-transform-vue-jsx`
# vue的使用说明
- render方法
- 生命周期方法
- computed

# webpack的使用说明
loader 
# 打包文件（bundle.js）的说明
```
(function(modules){
    //定义和缓存
    var installedModules = {};
    
})
(
    {
        key:value
    }
)
```
- 一个函数的自执行，参数是一个对象
- key:模块的名称
- value:函数