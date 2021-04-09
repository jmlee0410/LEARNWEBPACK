var path = require('path'); //node.js path 라이브러리를 들고 와서 path 변수에 담는다.

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist') // node path 라이브러리의 api (resolve), __dirname : 현재 디렉토리
    }
};