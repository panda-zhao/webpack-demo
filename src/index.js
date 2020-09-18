import _ from 'lodash';
import './assets/style.css';
import Icon from './assets/icon.png';
import Data from './assets/data.xml';
function component() {
  var element = document.createElement('div');

  // 1 Lodash，目前通过script标签引入
  // 2 lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  return element;
}

document.body.appendChild(component());