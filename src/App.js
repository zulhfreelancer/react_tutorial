import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';
// import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Initial title',
      name: 'Initial name',
      nameInput: 'Initial input value',
      shouldRenderTitle: true
    };

    this.onClick = this.onClick.bind(this);
    this.updateNameInput = this.updateNameInput.bind(this);
  }

  renderTitle() {
    if (!this.state.shouldRenderTitle) { return null; } // render nothing
    return <h3>Hello world!</h3>;
  }

  onClick() {
    this.setState({
      title: "New app title",
      name: "New app name"
    })
  }

  updateNameInput(event) {
    this.setState({
      nameInput: event.target.value
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
        {this.renderTitle()}
        <h1>{title}</h1>
        <h2>{this.state.title}</h2>
        <div onClick={this.onClick}>Click here</div><br/>

        <label>Test input</label><br/>
        <input
          type="text"
          onChange={this.updateNameInput}
          value={this.state.nameInput}
        />

        <MyComponent
          title   = {this.state.title}
          name    = {this.state.name}
          onClick = {this.onClick}
        />
      </div>
    );
  }
}

export default App;
