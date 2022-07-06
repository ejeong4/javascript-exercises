let number = Math.floor(Math.random() * 1000);
const repeatString = function(greeting, n) {

    if (n < 0) {
        return "ERROR";
    } else {
        let multiply = greeting.repeat(n);
        return multiply;
    }

};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', number).match(/((hey))/g).length;
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;