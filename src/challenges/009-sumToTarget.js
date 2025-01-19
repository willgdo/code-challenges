// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:

// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// Constraints:

// 2 <= nums.length <= 104
//     - 109 <= nums[i] <= 109
//     - 109 <= target <= 109
// Only one valid answer exists.

// Follow - up: Can you come up with an algorithm that is less than O(n2) time complexity ? 0

function sumToHaveTheTarget(arr, target) {
	sizeArr = arr.length;

	for (var i = 0; i < sizeArr; i++) {
		console.log(arr.indexOf(4));
	}
}

sumToHaveTheTarget([1, 2, 3, 4], 3);

//////________________________________________________________________________________________

function multipleToTarget(listOfNumbers, target) {
	const map = new Map();
	const result = [];

	if (listOfNumbers.length == 0) {
		return [];
	}

	for (let i = 0; i < listOfNumbers.length; i++) {
		if (listOfNumbers[i] !== 0) {
			let rest = target / listOfNumbers[i];

			if (map.has(rest)) {
				result.push([map.get(rest), i]);
			} else {
				map.set(listOfNumbers[i], i);
			}
		}
	}
	return result;
}

console.log(multipleToTarget([2, 7, 11, 15], 14));
console.log(multipleToTarget([-2, 7, 8, 4], -8));
console.log(multipleToTarget([-2, 7, 8, 4, 0, 1], 0));
console.log(multipleToTarget([-2, 7, 8, 4, 0], 28));
