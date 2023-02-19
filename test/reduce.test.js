
const reduce = require("../reduce");

test("Testing the reduce function", () => {
    let arr = [1, 2, 3, 4];
    let ans = reduce(arr, (sum, curr) => {
        return sum += curr;
    }, 0);

    expect(ans).toStrictEqual(10);
});
