// descreva dois vetores A e B e um valor inteiro V
// Escreva uma funcao que determine se é possível encontrar um valor de A e um valor de B que a soma seja V, retorna um boolean

function sumOfTwo(A, B, V) {
    var targets = new Set();

    for (var i = 0; i < A.length; i++) {
        targets.add(V - A[i]);
    } 

    for (var i = 0; i < B.length; i++) {
       if (targets.has(B[i])) {
        return true;
       } 
    }

    return false;
}

console