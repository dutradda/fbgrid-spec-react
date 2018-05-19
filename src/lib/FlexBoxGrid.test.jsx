import React from 'react';
import renderer from 'react-test-renderer';
import FlexBoxGrid from './FlexBoxGrid';

const UserTag = props => <p>{props.text}</p>;
const componentsMap = { UserTag };

test('FlexBoxGrid renders built-in tags', () => {
  const spec = {
    style: { flexDirection: 'column' },
    cells: [
      {
        component: { name: 'div' }
      },{
        component: { name: 'div' }
      }
    ]
  };
  const flexGrid = renderer.create(
    <FlexBoxGrid spec={spec} />,
  ).toJSON();

  expect(flexGrid).toMatchSnapshot();
});

test('FlexBoxGrid renders user tags', () => {
  const spec = {
    style: { flexDirection: 'column' },
    cells: [
      {
        component: {
          name: 'UserTag',
          options: { text: 'User Tag 1' }
        }
      },{
        component: {
          name: 'UserTag',
          options: { text: 'User Tag 2' }
        }
      }
    ]
  };
  const flexGrid = renderer.create(
    <FlexBoxGrid
      spec={spec}
      componentsMap={componentsMap}
    />,
  ).toJSON();

  expect(flexGrid).toMatchSnapshot();
});

test('FlexBoxGrid renders subgrid', () => {
  const spec = {
    style: { flexDirection: 'column' },
    cells: [
      {
        component: {
          name: 'UserTag',
          options: {
            text: 'User Tag 1'
          }
        }
      },{
        style: { flexGrow: 1 },
        subgrid: {
          cells: [
            {
              component: {
                name: 'UserTag',
                options: {
                  text: 'User Tag 2'
                }
              }
            },
            {
              component: {
                name: 'UserTag',
                options: {
                  text: 'User Tag 3'
                }
              }
            }
          ]
        }
      }
    ]
  };
  const flexGrid = renderer.create(
    <FlexBoxGrid
      spec={spec}
      componentsMap={componentsMap}
    />,
  ).toJSON();

  expect(flexGrid).toMatchSnapshot();
});

test('FlexBoxGrid renders without cells', () => {
  const spec = {
    style: { flexDirection: 'column' }
  };
  const spy = spyOn(console, 'error');
  const flexGrid = renderer.create(
    <FlexBoxGrid spec={spec} />,
  ).toJSON();

  expect(flexGrid).toMatchSnapshot();
  expect(spy.calls.all()[0].args[0]).toEqual(
    'Warning: Failed prop type: The prop `spec.cells` ' +
    'is marked as required in `FlexBoxGrid`, ' +
    'but its value is `undefined`.\n' +
    '    in FlexBoxGrid (at FlexBoxGrid.test.jsx:105)'
  );
});

test('FlexBoxGrid renders cell without elements', () => {
  const spec = {
    style: { flexDirection: 'column' },
    cells: [ { } ]
  };
  const spy = spyOn(console, 'error');
  const flexGrid = renderer.create(
    <FlexBoxGrid spec={spec} />,
  ).toJSON();

  expect(flexGrid).toMatchSnapshot();
  expect(spy.calls.all()[0].args[0]).toEqual(
    'Warning: Failed prop type: Invalid prop ' +
    '`spec.cells[0]` supplied to `FlexBoxGrid`.\n' +
    '    in FlexBoxGrid (at FlexBoxGrid.test.jsx:124)'
  );
});
