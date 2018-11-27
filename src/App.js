import React, { Component } from 'react';
import './App.css';
import Heading from './Heading.js'
import SubMenu from './SubMenu.js'
import Watchkit from './Watchkit.js'


class App extends Component {
  render() {
    return (
      <div>
        <Heading/>
        <SubMenu/>
        <Watchkit/>
      </div>
    );
  }
}

export default App;



