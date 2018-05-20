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
      style: cellStyle,
      component: {
        name: "MyComponent",
        options: {
          text: "My Component 1"
        }
      }
    },
    {
      subgrid: {
        cells: [
          {
            style: CellGrowStyle,
            component: {
              name: "MyComponent",
              options: {
                text: "My Component 2"
              }
            }
          },{
            style: CellGrowStyle,
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
                      text: "My Component 4"
                    }
                  }
                },
                {
                  style: cellStyle,
                  component: {
                    name: "MyComponent",
                    options: {
                      text: "My Component 5"
                    }
                  }
                },
                {
                  style: cellStyle,
                  component: {
                    name: "MyComponent",
                    options: {
                      text: "My Component 6"
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
                text: "My Component 7"
              }
            }
          }
        ]
      }
    },
    {
      style: cellStyle,
      component: {
        name: "MyComponent",
        options: {
          text: "My Component 8"
        }
      }
    }
  ]
};
