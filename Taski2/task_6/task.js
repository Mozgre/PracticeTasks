//Написать функцию, которая осуществляет поиск и замену в предложении.
//Первый аргумент - это строка, в которой осуществляется поиск и замена. 
//Второй аргумент - это слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить.
//При замене сохраняйте регистр первого символа в исходном слове.

export function myReplace(str, before, after) {
    const isCapital = before[0] === before[0].toUpperCase();
    const newAfter = isCapital 
      ? after[0].toUpperCase() + after.slice(1) 
      : after.toLowerCase();
    return str.replace(before, newAfter);
  }

