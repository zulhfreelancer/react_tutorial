import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';
// import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'App title'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      title: "New app title"
    })
  }

  render() {
    var title = "This is Zulh's app"

    /* ----------------------------------------------------
    * to iterate items list (must be in render() function)
    * ------------------------------------------------------
    * var items = ["Item 1", "Item 2", "Item 3"]
    *  {
    *    items.map(item => {
    *      return (
    *        <p key={item} onClick={this.onClick}>{item}</p>
    *      )
    *    })
    *  }
    */

    return (
      <div className="App">
        <h1>{title}</h1>
        <h2>{this.state.title}</h2>
        <div onClick={this.onClick}>Click here</div>
        <MyComponent
          title = "This is the component title"
          name = "Zulh"
          onClick = {this.onClick}
        />
      </div>
    );
  }
}

export default App;
