import React, { Component } from 'react';
import Button from 'antd/lib/button';
import RouterWrap from './router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<RouterWrap/>
        {/***<Button type="primary">Button</Button>***/}
      </div>
    );
  }
}

export default App;
