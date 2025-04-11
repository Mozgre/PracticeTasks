//Написать функцию, которая суммирует все простые числа до n (аргумент функции)

export function sumPrimes(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) sum += i;
    }
    return sum;
  }
  
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

