const arithmetic = (a, b) => {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        division: a / b,
        remainder: a % b
    };
};

module.exports = arithmetic;