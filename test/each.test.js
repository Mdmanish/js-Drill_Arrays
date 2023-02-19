const each = require("../each");

test("Testing the each function", () => {
    let arr = [1, 2, 3, 4];
    let noOfElement = 0;
    each(arr, (element) => {
        noOfElement++;
    })
    expect(noOfElement).toStrictEqual(4);
});
