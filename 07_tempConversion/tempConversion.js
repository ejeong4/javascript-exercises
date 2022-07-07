const ftoc = function(temp) {
    let newTemp = ((temp - 32) * (5 / 9));
    let cTemp = Number(newTemp.toFixed(1));
    return cTemp;
};

const ctof = function(temp) {
    let newTemp = ((temp * (9 / 5)) + 32);
    let fTemp = Number(newTemp.toFixed(1));
    return fTemp;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};