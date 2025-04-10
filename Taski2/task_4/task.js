//Создайте функцию, которая просматривает массив объектов (первый аргумент) 
//и возвращает массив всех объектов, имеющих совпадающие пары имя и значение (второй аргумент). 
//Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) 
//должен вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

export function whatIsInAName(collection, source) {
    const srcKeys = Object.keys(source);
    return collection.filter(obj =>
      srcKeys.every(key => obj[key] === source[key])
    );
  }