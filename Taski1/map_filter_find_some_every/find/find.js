//find (возвращает первый элемент, удовлетворяющий условию)

export function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  }