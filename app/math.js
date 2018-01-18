// //ES5 Example
// export function add(x,y){
//     return x+y
// }

//ES6 example
export const add = (x, y) => x + y;
export const subtract = (x, y) => x - y;
export const multiply = (x, y) => x * y;
export const divide = (x, y) => (y === 0 ? "Can't divide 0" : x / y);

export default {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};
