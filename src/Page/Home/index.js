import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
export default class Home extends Component {
  render() {
    return <Link to="/admin">to Admin</Link>;
  }
}
