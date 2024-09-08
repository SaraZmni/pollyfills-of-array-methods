type Callback<TList extends unknown[]> = (
  item: TList[number],
  index: number,
  array: TList
) => boolean;

export const filter = <
  TList extends unknown[],
  TCallback extends Callback<TList>
>(
  list: TList,
  callback: TCallback
) => {
  const result = [];
  for (let index = 0; index < list.length; index++) {
    const hasPassed = callback(list[index], index, list);
    if(hasPassed){
      result.push(list[index])
    }
  }
  return result as TList;
};

const result = filter([1, 2, 3, 4, 5], (item) => item < 3);
console.log('result', result)
