import React, { Component } from 'react';
import FlexBoxGrid from '../lib';
import MyComponent from './MyComponent';
import simpleGrid from './simpleGrid';
import complexGrid from './complexGrid';
import moreComplexGrid from './moreComplexGrid';

const componentsMap = {
  MyComponent
};

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: 'center' }}>Simple Grid</h1>
        <FlexBoxGrid spec={simpleGrid} componentsMap={componentsMap} />
        <br /><br /><br />

        <h1 style={{ textAlign: 'center' }}>Complex Grid</h1>
        <FlexBoxGrid spec={complexGrid} componentsMap={componentsMap} />
        <br /><br /><br />

        <h1 style={{ textAlign: 'center' }}>More Complex Grid</h1>
        <FlexBoxGrid spec={moreComplexGrid} componentsMap={componentsMap} />
        <br /><br />
      </React.Fragment>
    );
  }
};
