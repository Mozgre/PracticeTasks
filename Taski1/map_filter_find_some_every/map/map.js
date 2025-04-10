//map (создаёт новый массив, применяя функцию к каждому элементу)

export function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }