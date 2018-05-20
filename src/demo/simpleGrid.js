import { cellStyle } from './cellStyles';

export default {
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
