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
