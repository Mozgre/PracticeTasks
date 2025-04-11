//Используя рекурсию (без использования циклов). Написать функцию, которая принимает массив и целое число (n) 
//и заполняет массив числами от n до 1.

export function fillArrayFromN(arr, n) {
    if (n < 1) return arr;
    arr.push(n);
    return fillArrayFromN(arr, n - 1);
}
