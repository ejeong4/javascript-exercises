let number = Math.floor(Math.random() * 1000);
const repeatString = function(greeting, n) {

    if (n < 0) {
        return "ERROR";
    } else {
        let multiply = greeting.repeat(n);
        return multiply;
    }

};

// Do not edit below this line
module.exports = repeatString;