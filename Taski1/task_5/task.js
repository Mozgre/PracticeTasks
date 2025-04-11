//Написать функцию, которая на вход принимает строку 
//и возвращает эту строку в формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.

export function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
