const sumAll = function(num1, num2) {
    if ((num1 < 0) || (num2 < 0)) {
        return "ERROR";
    }
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        let nums = [num1, num2];
        nums.sort((a, b) => a - b);
        let highNum = Math.max(...nums);
        let lowNum = Math.min(...nums);
        let allNums = [];

        for (let i = lowNum; i <= highNum; i++) {
            allNums.push(i)
        }
        const sum = allNums.reduce((acc, num) => acc + num, 0);
        return sum
    } else return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
