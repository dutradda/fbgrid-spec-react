import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FlexBoxGrid extends Component {
  render() {
    const gridCells = this.props.spec.cells || [];
    const specStyle = this.props.spec.style || this.props.spec.overallStyle || {};
    const gridStyle = Object.assign({}, specStyle, {display: 'flex'});
    const gridStyleNames =  this.props.gridStyleNames || this.props.spec.overallStyleNames || [];
    const gridCellsElements = [];
    let cellElem;

    for (let i = 0; i < gridCells.length; i++) {
      cellElem = this._renderCell(gridCells, i);
      gridCellsElements.push(cellElem);
    }

    return (
      <div style={gridStyle} className={gridStyleNames.join(' ')}>
        {gridCellsElements}
      </div>
    );
  }

  _renderCell(gridCells, i) {
    const cell = gridCells[i];
    const className = cell.gridStyleNames || this.props.spec.overallStyleNames || [];
    const style = cell.style || this.props.spec.overallStyle;
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
      <div style={style} className={className.join(' ')} key={i}>
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
      styleNames: PropTypes.arrayOf(PropTypes.string),
      cells: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape({
            style: PropTypes.object,
            styleNames: PropTypes.arrayOf(PropTypes.string),
            component: PropTypes.object.isRequired
          }),
          PropTypes.shape({
            style: PropTypes.object,
            styleNames: PropTypes.arrayOf(PropTypes.string),
            subgrid: PropTypes.object.isRequired
          })
        ])
      ).isRequired,
      overallStyle: PropTypes.object,
      overallStyleNames: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    componentsMap: PropTypes.object.isRequired
  };

  static defaultProps = {
    spec: {
      style: {},
      styleNames: [],
      cells: [],
      overallStyle: {},
      overallStyleNames: [],
    },
    componentsMap: {}
  };
};
