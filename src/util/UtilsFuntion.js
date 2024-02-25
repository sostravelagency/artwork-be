function addLeadingZeros(number) {
    // cong dung truyem so vao no se ra 1 dang chuoi 0000
    var numberString = number.toString();
    var result = '0'.repeat(4 - numberString.length) + numberString;
    return result;
}
module.exports = {
    addLeadingZeros,
};