let each = require("./each.js")

function filter(elements, cb) {
    let ans = [];
    for (index = 0; index < elements.length; index++) {
        if (cb(elements[index]) !== undefined)
            ans.push(cb(elements[index]));
    }
    return ans;
}

let items = [1, 2, 3, 4, 5, 5];

let ans = filter(items, (item) => {
    if (item > 2)
        return item;
});

each(ans, (x) => {
    console.log(x);
});

module.exports = filter;
