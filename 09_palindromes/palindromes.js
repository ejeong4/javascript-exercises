const palindromes = function(input) {
    const word = input.toLowerCase().replace(/[^a-z]/g, '');
    let newWord = "";
    for (i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }
    return newWord === word ? true : false;
};

// Do not edit below this line
module.exports = palindromes;