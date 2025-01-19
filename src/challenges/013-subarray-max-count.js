// maximum subarray problem 
// Encontre o array contíguo de maior valor

function maxSumSubArray(x) {
    var maxSum = 0;
    var currentSum = 0;

    for (var i=0; i<x.length; i++) {        
        if (currentSum + x[i] > x[i]) {
            currentSum += x[i];
        } else {
            currentSum = x[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;

}

console.log(maxSumSubArray([5,6,-15,2,4,-1,12,-8]))
console.log(maxSumSubArray([2, -5, 10, -1, 4,-10]))

