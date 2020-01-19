import Vue from 'vue'
import App from './app.vue'

/**
 * css和图片的loader
 * {
        test:/\.css$/,
        use:[
            "style-loader",//以js代码出现，写入js文件
            "css-loader"
        ]
    },{
        test:/\.(gif|jpg|jpeg|png|svg)$/,
        use:[
            {
                loader:"url-loader",
                options:{
                    limit:1024,
                    name:'[name]-aaa.[ext]'
                }
            }
        ]
    }
 */
import './assets/style/test.css'
import './assets/image/disktop.jpeg'

/**
 * 导入js文件
 */
import './util/test.js'

const root = document.createElement('div')
document.appendChild(root)
new Vue({
    render:(h)=>h(App)
}).$mount(root)