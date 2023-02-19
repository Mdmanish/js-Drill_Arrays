function flatten(elements, ans) {
    for (let index = 0; index < elements.length; index++) {
        if (Array.isArray(elements[index])) {
            flatten(elements[index], ans);
        }
        else
            ans.push(elements[index]);
    }
    return ans;
}

const nestedArray = [1, [2], [[3]], [[[4]]]];
let ans = [];
ans = flatten(nestedArray, ans);
console.log(ans);

module.exports = flatten;
