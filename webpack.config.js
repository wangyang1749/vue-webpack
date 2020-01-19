const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
module.exports={
    mode:'development',
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename: 'bundle.js',
        path:path.join(__dirname,'dist')
    },module:{
        rules:[
            {
                test:/\.vue/,
                loader:'vue-loader'
            },{
                test:/\.css$/,
                use:[
                    "style-loader",//以js代码出现，写入js文件
                    "css-loader"
                ]
                // use:ExtractPlugin.extract({
                //     fallback:'style-loader',
                //     use:[
                //         'css-loader'
                //     ]
                // })
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
        ]
    }
   ,plugins:[
        new VueLoaderPlugin(),
        new HtmlPlugin(),
        // new ExtractPlugin('style-123.css')
    ]

}