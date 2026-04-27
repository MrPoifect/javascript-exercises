const fibonacci = function(num) {
    const number = Number(num);

    if (number === 0 || number === 1) {
        return number;
    } else if (number < 0){
        return "OOPS";
    }
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (number === 1) {
        return num1;
    } else if (number === 2){
        return num2;
    } else {
        for(let i = 2; i <= number; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }

};

// Do not edit below this line
module.exports = fibonacci;
