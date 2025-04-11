//Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого, пока функция не вернет true, 
//а затем возвращает оставшуюся часть массива. 
//Например: dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) должна вернуть [3, 4].

export function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
