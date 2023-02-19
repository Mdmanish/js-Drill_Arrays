function find(elements, cb) {
    for (index = 0; index < elements.length; index++) {
        if (cb(elements[index]) !== undefined)
            return cb(elements[index]);
    }
    return undefined;
}

let items = [1, 2, 3, 4, 5, 5];

let ans = find(items, (item) => {
    if (item > 2)
        return item;
});

console.log(ans);

module.exports = find;
