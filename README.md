[![build](https://travis-ci.org/dutradda/fbgrid-spec-react.svg?branch=master)](https://travis-ci.org/dutradda/fbgrid-spec-react)
[![coverage](https://coveralls.io/repos/github/dutradda/fbgrid-spec-react/badge.svg?branch=master)](https://coveralls.io/github/dutradda/fbgrid-spec-react?branch=master)
[![npm](https://img.shields.io/npm/v/fbgrid-spec-react.svg)](https://www.npmjs.com/package/fbgrid-spec-react)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react.svg)](https://www.npmjs.com/package/fbgrid-spec-react)
[![license](https://img.shields.io/npm/l/fbgrid-spec-react.svg)](https://www.npmjs.com/package/fbgrid-spec-react)

# fbgrid-spec-react

## React component to generate flexbox grid via an Object, JSON or YAML specification

Basic usage:

```jsx
const spec = {
  style: { flexDirection: "column" },
  cells: [
    {
      "component": { "name": "MyComponent1" }
    },{
      "component": { "name": "MyComponent2" }
    }
  ]
};
const componentsMap = { MyComponent1, MyComponent2 };

<FlexGrid
  spec={spec}
  componentsMap={componentsMap}
/>
```
