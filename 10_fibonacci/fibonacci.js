const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    let y = 0;
    let x = 1;
    for (i = 1; i < n; i++) {
        const temp = x;
        x = y + x;
        y = temp;
    }
    return x;
};

// Do not edit below this line
module.exports = fibonacci;