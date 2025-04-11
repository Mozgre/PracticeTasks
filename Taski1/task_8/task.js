//Написать функцию, которая на вход принимает массив, состоящий из двух строк.
//Функция должна вернуть true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива
//(регистр игнорируется).

export function containsAllLetters([str1, str2]) {
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
    return [...lowerStr2].every(char => lowerStr1.includes(char));
}
