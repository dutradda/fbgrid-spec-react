const cellStyle = {
  borderStyle: "solid",
  borderWidth: "0.01em",
  marginTop: "0.1em",
  marginBottom: "0.1em",
  marginRight: "0.2em",
  padding: "0.1em",
  textAlign: "center",
  position: "relative"
};

export default {
  style: {
    flexDirection: "column"
  },
  cells: [
    {
      style: cellStyle,
      component: {
        name: "Text",
        options: {
          text: "Box 1"
        }
      }
    },
    {
      subgrid: {
        cells: [
          {
            subgrid: {
              style: {
                flexDirection: "column",
                width: "8em",
              },
              cells: [
                {
                  style: cellStyle,
                  component: {
                    name: "Text",
                    options: {
                      text: "Box 2"
                    }
                  }
                },
                {
                  style: cellStyle,
                  component: {
                    name: "Text",
                    options: {
                      text: "Box 3"
                    }
                  }
                },
                {
                  style: cellStyle,
                  component: {
                    name: "Text",
                    options: {
                      text: "Box 4"
                    }
                  }
                }
              ]
            }
          },
          {
            style: Object.assign({ flexGrow: 1 }, cellStyle),
            component: {
              name: "Text",
              options: {
                text: "Box 5"
              }
            }
          }
        ]
      }
    },
    {
      style: cellStyle,
      component: {
        name: "Text",
        options: {
          text: "Box 6"
        }
      }
    }
  ]
};
