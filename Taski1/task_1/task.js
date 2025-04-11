//Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа.

export function factorial(num){
  if (num < 0) return -1;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}