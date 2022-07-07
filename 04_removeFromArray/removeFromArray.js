const removeFromArray = function(...Args) {
    let array = Args[0];
    let newArray = [];

    for (const arrayItem of array) {
        if (!Args.includes(arrayItem)) {
            newArray.push(arrayItem);
        }
    }
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;