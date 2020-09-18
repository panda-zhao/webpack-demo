import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // 1 Lodash，目前通过script标签引入
  // 2 Lodash, 目前通过import  引入 script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());