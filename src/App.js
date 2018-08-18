import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock/Clock';
import Btn from './components/btn/Btn';
import ListTest from './components/list-test/list-test';
import FromTest from './components/from-test/from-test';
// import BoilingVerdict from './components/boiling-verdict/boiling-verdict';
import Calculator from './components/calculator/calculator';
// import TemperatureInput from './components/temperature-input/temperature-input';

import TodoList from './components/todo/todo-list/todo-list';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Clock></Clock>
          <Btn></Btn>
          <ListTest></ListTest>
          <FromTest></FromTest>
          <Calculator></Calculator>
          <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
