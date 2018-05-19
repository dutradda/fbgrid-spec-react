import React, { Component } from 'react';

const style = {};

export default class Text extends Component {
  render() {
    return (
      <p style={style}>
        {this.props.text}
      </p>
    );
  }
};
