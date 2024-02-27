export function delayFn(timeMs = 200) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeMs);
    }, timeMs);
  });
}

export function split(arr: any[], size: number) {
  const res = [];

  while (arr.length) {
    res.push(arr.splice(0, size));
  }

  return res;
}

export async function asyncForEach(
  array: any[],
  callback: (value: any, index: number, array: any[]) => Promise<void>
) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
