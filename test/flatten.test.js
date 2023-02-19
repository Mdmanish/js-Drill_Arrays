const flatten = require("../flatten");

test("Testing the flatten function", () => {
    const nestedArray = [1, [1, 2], [[3], 5], [[[4]], 10]];
    let ans = [];
    expect(flatten(nestedArray, ans)).toStrictEqual([1, 1, 2, 3, 5, 4, 10]);
});
