//написать функцию, которая на вход принимает массив и удаляет в нем все "ложные значения" 

export function removeFalsy(arr) {
    return arr.filter(Boolean);
}
