const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 设置模块如何被解析
  // resolve: {
  //   // 自动解析确定的扩展。默认值为extensions: [".js", ".json"], 能够使用户在引入模块时不带扩展：
  //   extensions: ['.js', '.vue', '.json'],
  //   // 创建 import 或 require 的别名，来确保模块引入变得更简单。
  //   alias:{
  //     'static': path.resolve(__dirname, 'src/assets/'),
  //     '@': resolve('src'),
  //   }
  // }, 
  // 管理资源
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      // 加载数据
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};