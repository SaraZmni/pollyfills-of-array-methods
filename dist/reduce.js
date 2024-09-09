const reduce = (list, callback, initialValue) => {
    let result = initialValue;
    for (let index = 0; index < list.length; index++) {
        result = callback(result, list[index], index, list);
    }
    return result;
};
const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = reduce(numbers, (sum, number) => {
    return sum + number;
}, 0);
console.log('Hi');
console.log({ sumOfNumbers });
//# sourceMappingURL=reduce.js.map