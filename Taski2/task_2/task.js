//Написать функцию, которая на вход принимает два массива и возвращает новый массив
//с элементами найденными только в одном массиве, но не в обоих.

export function diffArrays(arr1, arr2) {
    return arr1
      .filter(x => !arr2.includes(x))
      .concat(arr2.filter(x => !arr1.includes(x)));
  }
