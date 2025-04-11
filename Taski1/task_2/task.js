//Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке.

export function longestWordLength(str) {
    const words = str.split(' ');
    let maxLength = 0;
    for (let word of words) {
      word = word.replace(/[^a-zA-Zа-яА-Я]/g, '');
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    }
    return maxLength;
  }