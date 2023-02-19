function reduce(elements, cb, startingValue) {
    let ans = startingValue === undefined ? elements[0] : startingValue;
    let startIndex = startingValue === undefined ? 1 : 0;

    for (index = startIndex; index < elements.length; index++) {
        ans = cb(ans, elements[index]);
    }
    return ans;
}

let items = [1, 2, 3, 4, 5, 5];
let ans = reduce(items, (sum, curr) => {
    return sum += curr;
}, 5);

console.log(ans);

module.exports = reduce;
