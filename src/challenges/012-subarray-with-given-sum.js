// Given an unsorted array A of size N of non-negative integers, find a continuous sub-array which adds to a given number S.
// Return the indices (init / final) that cover the sum

function findSubArray(v, S) {
    var somaAtual = 0;
    var inicio = 0;

    for (var fim=0; fim < v.length; fim++) {
        somaAtual += v[fim];

        while (somaAtual > S && inicio < fim) {
            somaAtual -= v[inicio]
            inicio++;
        }

        if (somaAtual == S) {
            return (inicio + 1) + " " + (fim + 1);
        }
    }
    return - 1;
    
}

console.log(findSubArray([4,2,3,7,2,4,2], 9))