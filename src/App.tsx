/*
 * @Author: yanxiaodi 
 * @Date: 2018-02-02 16:56:54 
 * @Last Modified by:   didilinkin@vip.qq.com 
 * @Last Modified time: 2018-02-02 16:56:54 
 */
import * as React from 'react';
// import Button from 'antd/lib/button';
import { Button } from 'antd';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
