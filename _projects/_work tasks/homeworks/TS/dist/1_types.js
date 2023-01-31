"use strict";
const isFetching = true;
const isLoading = false;
const int = 42;
const float = 4.2;
const num = 3e10;
const message = 'hello Typescript';
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const words = ['Hello', 'Typescript'];
//Tuple
const contact = ['Alexey', 1234567];
//Any
let variable = 42;
// ...
variable = 'New String';
variable = [];
//====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Гейзенберг');
//Never
function throwError(message) {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            throw new Error(message);
        }
    }
}
