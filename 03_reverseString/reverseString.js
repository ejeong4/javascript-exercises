const reverseString = function(word) {
    let apartString = [];

    for (i = word.length - 1; i >= 0; i--) {
        apartString.push(word[i]);
    }
    return apartString.join('');

};
reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');
// Do not edit below this line
module.exports = reverseString;