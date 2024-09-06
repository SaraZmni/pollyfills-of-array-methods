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
    console.log(hasPassed);
  }
};

filter([1, 2, 3, 4, 5], (item) => item < 3);
