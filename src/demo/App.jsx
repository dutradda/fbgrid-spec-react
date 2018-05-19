import React, { Component } from 'react';
import FlexBoxGrid from '../lib/FlexBoxGrid';
import Text from './Text';
import gridSpec from './gridSpec';

const componentsMap = {
  Text
};

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FlexBoxGrid spec={gridSpec} componentsMap={componentsMap} />
      </React.Fragment>
    );
  }
};
