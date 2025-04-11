//Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки), и ‘(апостроф)
//в строке их соответствующим HTML - кодом.

export function convertHTML(str) {
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    };
    return str.replace(/[&<>"']/g, match => htmlEntities[match]);
  }

