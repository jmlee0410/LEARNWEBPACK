// ES6 모듈 문법
import _ from 'lodash';

// ES5
/*
    var _ = require('lodash');
*/

function component() {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');  // lodash를 들고와서 사용했다. (lodash join api 를 사용했다.)
    //element.innerHTML = 'Hello webpack';

    return element;
}

document.body.appendChild(component());