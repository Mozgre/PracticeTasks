//Написать функцию, которая суммирует два аргумента вместе. 
//Если указан только один аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает сумму.

export function addTogether(...args) {
    if (args.length === 2) {
      return args[0] + args[1];
    }
    if (typeof args[0] !== 'number') return undefined;
    return b => typeof b === 'number' ? args[0] + b : undefined;
  }
