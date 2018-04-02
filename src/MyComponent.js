import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  title: PropTypes.string.isRequired
};

class MyComponent extends Component {
  render() {
    var {title, name, onClick} = this.props;

    return (
      <div className="component">
        <h1>This is a component</h1>
        <h2>Title: {title}</h2>
        <h2>Name: {name}</h2>
        <div onClick={onClick}>Click here</div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;

export default MyComponent;
