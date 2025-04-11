//every (проверяет, все ли элементы удовлетворяют условию)

export function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
    return true;
  }
  
