//some (проверяет, есть ли хотя бы один элемент, удовлетворяющий условию)

export function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }