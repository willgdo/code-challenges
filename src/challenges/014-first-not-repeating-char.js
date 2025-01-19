// Dada uma string s, encontre o primeiro caracter que não se repete. Se não houver tal char, retorne '_'.

function firstNotRepeatChar(s) {
    var map = new Map();

    for (var i=0; i<s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }       
    }

    for (var [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }

    return '_';

}

console.log(firstNotRepeatChar("aebacabd"))