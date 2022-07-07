const sumAll = function(a, b) {
    let array = [];
    for (i = a; i <= b; i++) {
        a = i + 1;
        array.push(i);
    }
    let c = 0;
    for (i = 0; i < array.length; i++) {
        c += array[i];
    }
    return c;
};

// Do not edit below this line
module.exports = sumAll;