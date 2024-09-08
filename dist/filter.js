"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (list, callback) => {
    const result = [];
    for (let index = 0; index < list.length; index++) {
        const hasPassed = callback(list[index], index, list);
        console.log(hasPassed);
    }
};
exports.filter = filter;
(0, exports.filter)([1, 2, 3, 4, 5], (item) => item < 3);
//# sourceMappingURL=filter.js.map