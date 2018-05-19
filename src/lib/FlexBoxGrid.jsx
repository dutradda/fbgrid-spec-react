import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FlexBoxGrid extends Component {
  render() {
    const gridCells = this.props.spec.cells || [];
    const gridStyle = Object.assign(this.props.spec.style || {}, {display: "flex"});
    const gridCellsElements = [];
    let cellElem;

    for (let i = 0; i < gridCells.length; i++) {
      cellElem = this._renderCell(gridCells, i);
      gridCellsElements.push(cellElem);
    }

    return (
      <div style={gridStyle}>
        {gridCellsElements}
      </div>
    );
  }

  _renderCell(gridCells, i) {
    const cell = gridCells[i];
    let componentElem;

    if (cell.component) {
      componentElem = this._renderCellComponent(cell.component)
    }
    else if (cell.subgrid) {
      componentElem = this._renderCellSubgrid(cell.subgrid)
    }
    else {
      componentElem = null;
    }

    return (
      <div style={cell.style} key={i}>
        {componentElem}
      </div>
    );
  }

  _renderCellComponent(component) {
    let componentCls = this.props.componentsMap[component.name];

    if (componentCls === undefined) {
      componentCls = component.name;
    }

    return React.createElement(
      componentCls,
      component.options
    );
  }

  _renderCellSubgrid(subgrid) {
    return (
      <FlexBoxGrid
        spec={subgrid}
        componentsMap={this.props.componentsMap}
      />
    );
  }

  static propTypes = {
    spec: PropTypes.shape({
      style: PropTypes.object,
      cells: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape({
            style: PropTypes.object,
            component: PropTypes.object.isRequired
          }),
          PropTypes.shape({
            style: PropTypes.object,
            subgrid: PropTypes.object.isRequired
          })
        ])
      ).isRequired,
      componentsMap: PropTypes.object
    }).isRequired
  };

  static defaultProps = {
    spec: {
      style: {},
      cells: []
    },
    componentsMap: {}
  };
};
