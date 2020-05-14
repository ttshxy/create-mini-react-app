import './style/index.css'; // 引入样式文件
import './style/index.less';
import test from '@/test';
const sum = (a, b) => {
  return a + b;
};
function createElement() {
  let div = document.createElement('div');
  div.innerHTML = _.join(['my', 'name', 'is', 'leo1112223'], '');
  div.className = 'box';
  return div;
}
document.body.appendChild(createElement());
