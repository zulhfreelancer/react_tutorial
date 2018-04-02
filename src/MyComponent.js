import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    var {title, name} = this.props;

    return (
      <div className="component">
        <h1>This is a component</h1>
        <h2>Title: {title}</h2>
        <h2>Name: {name}</h2>
      </div>
    );
  }
}

export default MyComponent;
