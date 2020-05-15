import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
import './style/index.css'; // 引入样式文件
import './style/index.less';

function App() {
  return <Button type="primary">Primary</Button>;
}
ReactDom.render(<App />, document.getElementById('root'));
//document.body.appendChild(createElement());
