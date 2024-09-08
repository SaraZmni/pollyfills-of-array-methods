const map = (list, callback) => {
    const result = [];
    for (let index = 0; index < list.length; index++) {
        result.push(callback(list[index], index, list));
    }
    return result;
};
const students = [{ name: "Ali" }, { name: 'Mohammad' }, { name: "Sara" }, { name: "Negar" }];
const studentsWithId = map(students, (student) => {
    return Object.assign(Object.assign({}, student), { id: Math.random() });
});
console.log({ studentsWithId });
//# sourceMappingURL=map.js.map