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
    temp = Math.floor(number / 9765625);
    result += temp;
    if (number >= 48828125) {
        temp = Math.floor(number / 48828125);
        result += temp;
    }
    return(result);
}