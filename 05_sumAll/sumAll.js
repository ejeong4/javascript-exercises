const sumAll = function(a, b) {
    let array = [];
    if (b < 0 || a < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    else if (a < b) {
        for (i = a; i <= b; i++) {
            a = i + 1;
            array.push(i);
        }
    } else if (b < a) {
        for (i = b; i <= a; i++) {
            b = i + 1;
            array.push(i);
        }
    } else {
        return "ERROR";
    }
    let c = 0;
    for (i = 0; i < array.length; i++) {
        c += array[i];
    }
    return c;
};

// Do not edit below this line
module.exports = sumAll;