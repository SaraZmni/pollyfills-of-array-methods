type ReduceCallback <TList extends unknown[],TPreviousValue> =(prevValue:TPreviousValue,item:TList[number],index:number,list:TList) => TPreviousValue;
const reduce =<TList extends unknown[],TInitialValue> (list:TList,callback:ReduceCallback<TList,TInitialValue>,initialValue:TInitialValue) => {
 let result  = initialValue
 for ( let index = 0; index < list.length; index++){
    result = callback(result,list[index],index,list)
 }
 return result
}

const numbers = [1,2,3,4,5];

const sumOfNumbers = reduce(numbers,(sum,number) => {
  return sum + number
},0)


console.log({sumOfNumbers})