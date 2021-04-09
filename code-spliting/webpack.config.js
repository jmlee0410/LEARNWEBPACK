var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'none',   // production. development, none
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {   // loader
        rules: [    // rules 배열 및에 들어 가는게 하나의 loader 규칙
            {
                test: /\.css$/, // 모든 .css 파일에
                //use: ['style-loader', 'css-loader', 'sass-loader'] // style-loader, css-loader를 적용 하겠다. (순서에도 영향이 있다. npm run build), 항상 오른쪽에서 왼쪽으로 영향을 준다.
                // sass를 css로 변환하고 변환된 css를 style로 head tag에 추가 한다.
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
}