import $ from "jquery";

// // ES5 Example
// export function addH1ToDom(text){
//     var $h1 = $("<h1>", {text: text})
//     $("#root").append($h1)
// }

// ES6 Example
export const addH1ToDom = text => {
  const $h1 = $("<h1>", { text });
  $("#root").append($h1);
};
