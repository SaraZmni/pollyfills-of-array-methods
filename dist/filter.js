"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.filter = void 0;
const filter = (list, callback) => {
    const result = [];
    for (let index = 0; index < list.length; index++) {
        const hasPassed = callback(list[index], index, list);
        if (hasPassed) {
            result.push(list[index]);
        }
    }
    return result;
};
exports.filter = filter;
exports.result = (0, exports.filter)([1, 2, 3, 4, 5], (item) => item < 3);
console.log('result', exports.result);
//# sourceMappingURL=filter.js.map