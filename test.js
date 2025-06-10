module.exports = { sum, fromEuroToDollar }

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
})

test("One dollar should be approximately 146.26 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBe(expected);
})

test("156.5 yen should be approximately 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(156.5);
    const expected = (156.5 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
})