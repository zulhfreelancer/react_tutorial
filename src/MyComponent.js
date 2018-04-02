import React, { Component } from 'react';

class MyComponent extends Component {

  render() {
    return (
      <div className="component">
        <h1>This is a component</h1>
        <h2>Title: {this.props.title}</h2>
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }

}

export default MyComponent;
