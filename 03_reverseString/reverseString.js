const reverseString = function(word) {
    let apartString = [];
    let stringLength = word.length;

    for (i = stringLength - 1; i >= 0; i--) {
        apartString.push(word[i]);
    }
    return apartString.join('');

};
reverseString('hello')
    // Do not edit below this line
module.exports = reverseString;