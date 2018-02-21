module.exports = function getZerosCount(number) {
    let temp =  0;
    let result = 0;
    temp = Math.floor(number / 5);
    result += temp;
    temp = Math.floor(number / 25);
    result += temp;
    temp = Math.floor(number / 125);
    result += temp;
    temp = Math.floor(number / 625);
    result += temp;
    temp = Math.floor(number / 3125);
    result += temp;
    temp = Math.floor(number / 15625);
    result += temp;
    temp = Math.floor(number / 78125);
    result += temp;
    temp = Math.floor(number / 390625);
    result += temp;
    temp = Math.floor(number / 1953125);
    result += temp;
    temp = Math.round(number / 9765625);
    result += temp;
    if (1100000 < result && result < 7500000) {
        result = result - 1;
    }
    return(Math.round (result));
}