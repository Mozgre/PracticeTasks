//Написать функцию, которая принимает массив различной вложенности и возвращает одномерный массив. 
//Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].

export function steamrollArray(arr) {
    return arr.reduce((flat, toFlatten) => 
      flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten), 
      []
    );
  }

  