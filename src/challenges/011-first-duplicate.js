/*
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for
which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, 
return the number for which the second occurrence has a smaller index than the second occurrence of the other number does.…
*/

function firstDuplicate(a) {
    var sizeOfList = a.length;
    var set = new Set();

    for (var i = 0; i < sizeOfList; i++) {
        if (set.has(a[i])) {
            return a[i]
        }
        set.add(a[i]);
    }

    return -1
}

console.log(firstDuplicate([1, 2, 3, 4, 3, 4,1,1, 2, 1, 5]))