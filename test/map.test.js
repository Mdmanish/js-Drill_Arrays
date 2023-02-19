const map = require("../map");

test("Testing the map function", () => {
    let arr = [1, 2, 3, 4];

    let ans = map(arr, (ele) => {
        return ele * ele;
    });

    expect(ans).toStrictEqual([1, 4, 9, 16]);
});
