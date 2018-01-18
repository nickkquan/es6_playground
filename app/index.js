// console.log('App working: open app/index.js to start exploring ES6');
import { addH1ToDom } from "./helpers";

// // ES6 to import add and subtract functions
// import { add, subtract } from "./math";

//importing everything from math.js
import * as math from "./math";

// // ES6 calls if not importing all functions from ./math
// addH1ToDom(`4 + 5 = ${add(4, 5)}`);
// addH1ToDom(`98 - 56 = ${subtract(98, 56)}`);

// //ES6 calls if importing all functions from ./math
// addH1ToDom(`4 + 5 = ${math.multiply(4, 5)}`);
// addH1ToDom(`98 - 56 = ${math.divide(98, 56)}`);

import Person from "./greetings";
const nick = new Person("Nick");

addH1ToDom(nick.sayHi());
addH1ToDom(nick.sayGoodbye());
addH1ToDom(nick.saySomething());
