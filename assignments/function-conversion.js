// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {
    console.log("function w")
};
myFunction();

let anotherFunction = (param) => {
    return param;
};
anotherFunction("Example");

//add
let add = function (param1, param2) {
    return param1 + param2;
};
add(1,2);
console.log(add(1,2));

//subtract
let subtract = function (param1, param2) {
    return param1 - param2;
};
subtract(1,2);
console.log(subtract(1,2))
// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);