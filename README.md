[![build](https://travis-ci.org/dutradda/fbgrid-spec-react.svg?branch=master)](https://travis-ci.org/dutradda/fbgrid-spec-react)
[![coverage](https://coveralls.io/repos/github/dutradda/fbgrid-spec-react/badge.svg?branch=master)](https://coveralls.io/github/dutradda/fbgrid-spec-react?branch=master)
[![npm](https://img.shields.io/npm/v/fbgrid-spec-react.svg)](https://www.npmjs.com/package/fbgrid-spec-react)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react.svg)](https://www.npmjs.com/package/fbgrid-spec-react)
[![npm downloads](https://img.shields.io/npm/dw/fbgrid-spec-react.svg)](https://www.npmjs.com/package/fbgrid-spec-react)
[![license](https://img.shields.io/npm/l/fbgrid-spec-react.svg)](https://www.npmjs.com/package/fbgrid-spec-react)

# fbgrid-spec-react

## React component to generate flexbox grid via an Object, JSON or YAML specification

A simple grid example:

```jsx
import React from 'react';
import FlexBoxGrid from 'fbgrid-spec-react';

const cellStyle = {
  borderStyle: "solid",
  borderWidth: "0.01em",
  margin: "0.1em",
  textAlign: "center",
  paddingLeft: "0.1em",
  paddingRight: "0.1em"
};
const CellGrowStyle = Object.assign({ flexGrow: 1 }, cellStyle);

const spec = {
  style: { flexDirection: 'column' },
  cells: [
    {
      style: cellStyle,
      component: {
        name: 'MyComponent',
        options: { text: 'MyComponent 1' }
      }
    },{
      style: cellStyle,
      component: {
        name: 'MyComponent',
        options: { text: 'MyComponent 2' }
      }
    }
  ]
};

const MyComponent = props => (
  <p>{props.text}</p>
);

const componentsMap = {
  MyComponent
};

export default () => {
  return (
    <FlexBoxGrid
      spec={spec}
      componentsMap={componentsMap}
    />
  );
};
```

The code above create this grid:

![simple grid](/docs/simple-grid.png)

---

Other example with a complex grid:

```jsx
import React from 'react';
import FlexBoxGrid from 'fbgrid-spec-react';

const cellStyle = {
  borderStyle: "solid",
  borderWidth: "0.01em",
  margin: "0.1em",
  textAlign: "center",
  paddingLeft: "0.1em",
  paddingRight: "0.1em"
};
const CellGrowStyle = Object.assign({ flexGrow: 1 }, cellStyle);

const spec = {
  style: {
    flexDirection: "column"
  },
  cells: [
    {
      subgrid: {
        cells: [
          {
            subgrid: {
              style: {
                flexDirection: "column",
                width: "10em",
              },
              cells: [
                {
                  style: cellStyle,
                  component: {
                    name: "MyComponent",
                    options: {
                      text: "My Component 1"
                    }
                  }
                },
                {
                  style: cellStyle,
                  component: {
                    name: "MyComponent",
                    options: {
                      text: "My Component 2"
                    }
                  }
                },
                {
                  style: cellStyle,
                  component: {
                    name: "MyComponent",
                    options: {
                      text: "My Component 3"
                    }
                  }
                }
              ]
            }
          },
          {
            style: CellGrowStyle,
            component: {
              name: "MyComponent",
              options: {
                text: "My Component 4"
              }
            }
          }
        ]
      }
    }
  ]
};

const MyComponent = props => (
  <p>{props.text}</p>
);

const componentsMap = {
  MyComponent
};

export default () => {
  return (
    <FlexBoxGrid
      spec={spec}
      componentsMap={componentsMap}
    />
  );
};
```

The code above create this grid:

![complex grid](/docs/complex-grid.png)
