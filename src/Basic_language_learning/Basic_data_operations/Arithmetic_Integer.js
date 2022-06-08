const arithmetic = (a, b) => {
    a = parseInt(a);
    b = parseInt(b);

    if (a === NaN) {
        throw 'Failed to parse number a.';
    }

    if (b === NaN) {
        throw 'Failed to parse number b.';
    }

    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        division: a / b,
        remainder: a % b
    };
};

if (require.main == module) {
    const results = arithmetic(process.argv[2], process.argv[3]);

    console.log(`Sum: ${results.sum}`);
    console.log(`Difference: ${results.difference}`);
    console.log(`Product: ${results.product}`);
    console.log(`Division: ${results.division}`);
    console.log(`Remainder: ${results.remainder}`);
}

module.exports = arithmetic;