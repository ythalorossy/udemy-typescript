// let variable = "Test";
// console.log(variable);
// variable = "Another Test";
// console.log(variable);
//
// const maxLevels = 100;
// console.log(maxLevels);
//
// function reset() {
//     // console.log(variable);
//     let variable = null;
//     console.log(variable);
// }
//
// reset();
// console.log(variable);
//
// const addNumbers = function (number1: number, number2: number): number {
//     return number1 + number2;
// };
//
// console.log(addNumbers(10, 3));
//
// const multiplyNumber = (number1: number, number2: number):number => number1 * number2;
// console.log(multiplyNumber(10, 5));
//
// const greet = () => {
//     console.log("Hello")
// };
//
// greet();
//
// const greetFried = friend => console.log(friend);
// greetFried('Manu');
//
// const countdown = (start: number = 10): void => {
//     console.log(start);
//     while(start > 0) {
//         start--;
//     }
//     console.log("Done!", start);
// }
//
// countdown();
//
// const numbers = [1, 10, 99, -5];
// console.log(Math.max(...numbers));
//
// function makeArray(...args: number[]) {
//     return args;
// }
//
// console.log(makeArray(1,2,6));
// const myHobbies = ["Cookies", "Sports"];
// const [hobby1, hobby2] = myHobbies;
// console.log(hobby1, hobby2);
//
// const userData = {userName: "Max", age: 27};
// const {userName, age} = userData;
// console.log(userName, age);
"use strict";
// SEÇÃO 6
// import * as Circle from "./math/circle";
// import calc from './math/rectangle';
//
// console.log(Circle.PI);
// console.log(Circle.calculateCircumference(10));
//
// function betterEcho<T>(data: T) {
//     return data;
// }
//
// console.log(betterEcho("Max").length);
// console.log(betterEcho<number>(27));
// console.log(betterEcho<{}>({name:"Max", age: 27}).hasOwnProperty("name"));
//
// function printAll<T>(args: T[]) {
//     args.forEach( (element) => console.log(element) );
// }
//
// printAll<string>(["Apple", "Banana"]);
//
// const echo2 : <T>(data: T) => T = betterEcho;
//
// console.log(echo2<string>("Something"));
//https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/jquery
var greeter = require('./greeter');
var $ = require('jquery');
$(function () {
    $(document.body).html(greeter("World"));
});
