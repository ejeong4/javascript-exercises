const add = (arg1, arg2) => arg1 + arg2;

const subtract = (arg1, arg2) => arg1 - arg2;

const sum = array => array.reduce((prev, next) => prev + next, 0);


const multiply = array => array.reduce((prev, next) => prev * next);

const power = (prev, next) => prev ** next;

const factorial = function(num) {
    let newNum = 1;
    if (num === 0) return 1;

    for (i = num; i > 0; i--) {
        newNum *= i;
    };
    return newNum;
}

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};