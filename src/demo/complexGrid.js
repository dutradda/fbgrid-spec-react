import {
  cellStyle,
  CellGrowStyle
} from './cellStyles';

export default {
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
