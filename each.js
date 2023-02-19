function each(elements, cb) {
    for (let index = 0; index < elements.length; index++) {
        cb(elements[index], index);
    }
}

let items = [1, 2, 3, 4, 5, 5];

each(items, (item, index) => {
    console.log(item, index);
});

module.exports = each;
