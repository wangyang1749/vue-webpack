# 项目初始化
    npm init
    npm i webpack vue vue-loader
    npm i css-loader vue-template-compiler
    create app.vue
    create webpack.config.js
    npm i style-loader
    npm i file-loader
    npm i postcss-loader autoprefixer babel-loader babel-core
    npm i babel-preset-env babel-plugin-transform-vue-jsx
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