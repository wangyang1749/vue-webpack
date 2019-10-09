const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === 'development'
console.log(process.env.NODE_ENV)
const config={
    target:'web',
    mode:process.env.NODE_ENV,
    entry:{
        index:path.join(__dirname,"src/index.js"),
        markdown:path.join(__dirname,"src/markdown.js")
    },
    output:{
        filename:'js/[name].js',
        path:path.join(__dirname,"dist")
    },plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev ? '"development"':'"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin({
            template:"./src/index.html",
            filename:"index.html",
            chunks:['index'],
            minify:{
            }
        }),new HTMLPlugin({
            template:"./src/index.html",
            filename:"markdown.html",
            chunks:['markdown'],
            minify:{
            }
        })
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }, {
                test:/\.jsx$/,
                loader:'babel-loader'
            },{
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
               
            },{
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:1024,
                            name:'[name]-aaa.[.ext]'
                        }
                    }
                ]
            },{
                test: /\.(woff2|woff|eot|ttf)(\?\S*)?$/,
                loader: 'file-loader'
            },{ test: /\.styl/, 
              
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true,
                        }
                    },
                    "stylus-loader"
                ]
            },{test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader', // creates style nodes from JS strings
                  },
                  {
                    loader: 'css-loader', // translates CSS into CommonJS
                  },
                  {
                    loader: 'less-loader', // compiles Less to CSS
                  },
                ],
              }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
           
        ]
    } 

}


if(isDev){
    config.devtool='#cheap-module-eval-source-map'
    config.devServer={
        port:8080,
        host:'0.0.0.0',
        overlay:{
            errors:true
        },
        hot:true,
       
    } 
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )

}

module.exports =config