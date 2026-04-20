const repeatString = function(string, num) {
    let mergedString = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            mergedString += string;
        }
        
    }else {mergedString += "ERROR";}
    return mergedString;

};

// Do not edit below this line
module.exports = repeatString;
