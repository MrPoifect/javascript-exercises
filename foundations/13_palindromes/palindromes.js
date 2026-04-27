const palindromes = function (string) {
    const lowstr = string.toLowerCase();
    const noPunctuation = lowstr.match(/\w/g).join("");
    return noPunctuation == noPunctuation.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
