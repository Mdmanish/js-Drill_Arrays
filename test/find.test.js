const find = require("../find");

test("Testing the find function", () => {
    let items = [1, 2, 3, 14, 6, 9];

    let ans = find(items, (item) => {
        if (item > 3)
            return item;
    });

    expect(ans).toStrictEqual(14);
});
