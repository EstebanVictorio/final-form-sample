const path = require("path")
const webpack = require("webpack")
const HWP = require("html-webpack-plugin")


const htmlWebpackPlugin = new HWP({
    inject: 'body',
    template: 'index.ejs',
    filename: 'index.html',
    title: 'Final Form sample'
})

const providePlugin = new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
})

const plugins = [
    htmlWebpackPlugin,
    providePlugin
  ]


const moduleConf = {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-flow"]
            }
          }
        }
      ]
}

const config = {
    entry: path.resolve(__dirname,'index.js'),
    plugins,
    module: moduleConf,
    output: {
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = config