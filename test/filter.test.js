const filter = require("../filter");

test("Testing the filter function", () => {
    let items = [1, 2, 3, 4, 6, 9];

    let ans = filter(items, (item) => {
        if (item > 5)
            return item;
    });

    expect(ans).toStrictEqual([6, 9]);
});
