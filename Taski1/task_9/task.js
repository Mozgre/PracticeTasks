//Написать функцию, которая на вход принимает масссив и целое число. 
//Функция должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) 
//вернуть их в виде двумерного массива.

export function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
