type Callback<TList extends unknown[],TReturnValue> = (item:TList[number],index:number,list:TList) => TReturnValue



const map =<TList extends unknown[],TCallback extends Callback<TList,ReturnType<TCallback> >>(list:TList,callback:TCallback) => {
    const result = [];

    for(let index = 0; index < list.length; index++){
        result.push(callback(list[index],index,list))
    }
    return result
}
const students = [{name:"Ali"},{name:'Mohammad'},{name:"Sara"},{name:"Negar"}];
const studentsWithId = map(students,(student) => {
    return {...student,
        id:Math.random()
    }
})
console.log({studentsWithId})