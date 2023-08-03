// let n = 7
// let m = 10
// console.log(n*m);



// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     let fil = [];
//     for(let i = 0; i < l.length; i++) {
//       if (typeof l[i] === 'number') {
//         fil.push(l[i]);
//       }
//     }
//     return fil;
//   }
//   console.log(filter_list([1,2,'a','b']));

// Question 1 (Difficulty: 5 /10)
// Write a function that takes in an array and returns the sum of all the numbers divisible by 2 and 3 in the array.

// function numbersDivisibleBy2And3 (arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(numbersDivisibleBy2And3([12, 5, 6, 3]))

// Examples
// sum([2, 5, 7, 3]) returns 0 sum([12, 5, 6, 3]) returns 18 sum([6]) returns 6
// sum([2, 12, 18]) returns 30

// Question 2 (Difficulty: 3 /10)
// Write a function that takes in an array and returns all the numbers that are not divisible by 5.

// function numbersNotDivisibleBy5 (arr) {
//     let result = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 !== 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(numbersNotDivisibleBy5([3, 5, 15]));

// Examples
// divisible([3, 5, 15]) returns [3]
// divisible([23, 12]) returns [23, 12 ]
// divisible([3, 25]) returns [3]


// Question 3 (Difficulty: 6 /10)
// Write a function that takes in an array and returns the count of each unique element in the array.

// function countUniqueElement (arr) {
//     let elementCount = [];
//     for(let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         elementCount[element] = (elementCount[element] || 0) + 1;
//     }
//     return elementCount;
// }
// console.log(countUniqueElement(['dog', 'cat', 'sheep', 'cat', 'sheep']));

// Examples
// unique([“java”, “kotlin”, “java”, “java”, “swift“]) returns { “java”: 3, “kotlin”: 1, “swift”: 1 } unique([“developer”, “software”, “engineer”, “software”]) returns { “software”: 2, “engineer”: 1, “developer”: 1 }
// unique([“dog”, “cat”, “sheep”, “cat”, “sheep“]) returns { “dog”: 1, “cat”: 2, “sheep”: 2 }

// Question 4 (Difficulty: 6 /10)
// Write a function that takes in two arrays of numbers and returns the length of the array with the highest sum of its elements.

// steps in solving this problem
// create a function that takes two arguments
// create two variables for arr1 and arr2
// use the reduce method that makes use of two arguments, accumulator and current to iterate through the array
// use if statement to compare arr1 and arr2 and return the highest value.

// function numOfLength (arr1, arr2) {
//    const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
//    const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
//     return sum1 >= sum2 ? arr1.length: arr2.length;
// }
// console.log(numOfLength([13, 11, 3, 1], [4, 9, 1]));

// Examples
// lengthy([3, 5, 1, 7, 9], [11, 31]) returns 2
// lengthy([13, 11, 3, 1], [4, 9, 1]) returns 4
// lengthy([20], [1, 18]) returns 1


// Question 5 (Difficulty: 4 /10)
// Write a function that takes in an array of strings and returns the number of strings whose length is greater than 3 but less than or equal to 7.

// steps for solving this problem
//  write a function that takes in two strings
//  the function to return the number of stringswhose length is greater than 3 but less than or equal to 7
//  use a loop to iterate through the string
//  then use an if statement to 

// function numberOfStrings (arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         const strLength = arr[i].length;
//         if (strLength > 3 && strLength <= 7) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(numberOfStrings(['os', 'jenkins', 'circleci', 'travis', 'git', 'closure']));


// Examples
// range([“java”, “kotlin”, “javascript”, “php”, “spring”, “closure” ]) returns 4
// range([“os”, “jenkins”, “circleci”, “travis”, “git”, “closure” ]) returns 3
// range([“springboot”, “servlets”]) returns 0



// const arr = ['This', 'little', 'piggy'];
// const first = arr.pop();
// console.log(first);

// const arr = ['This', 'little', 'piggy'];
// const first = arr.shift();
// console.log(first);

// const arr = ['This', 'little', 'piggy'];
// const first = arr.slice(0, 1);
// const second = arr.slice(1);
// console.log(first);
// console.log(second);


// Question 6 (Difficulty: 3 /10)
// Write a function takes in an array of numbers and returns the numbers that are multiple of 2 or 5.

// function numbMultipleOf2And5 (arr) {
//     let multiple = [];
//     for(i in arr) {
//         if(arr[i] % 2 === 0 || arr[i] % 5 === 0) {          
//             multiple.push(arr[i]);
            
//         }
//     }
//     return multiple;
// }
// console.log(numbMultipleOf2And5([2, 11, 45]));


// Examples
// multiples([2, 11, 45]) returns [2, 45]
// multiples([3, 155, 5, 18]) returns [155, 5, 18]
// multiples([3, 7]) returns [ ]


// LAB 1
// Find the elements in an array Y, that are equal to a given variable X. v 

// function elementInArray (arr, X) {
//     let equalElement = [];
//     for(i in arr) {
//          if(arr[i] == X){
//             equalElement.push(arr[i]);
//          }
//     }
//     return equalElement;
// }
// console.log(elementInArray(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a') );

// For example...
// elementsEqualToX(Y, X)
// elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a') to return ['a', 'a'] elementsEqualToX(['t' ,'3' ,3 ,3, '5', 'v'], 3) to return [3, 3] elementsEqualToX([4, 6, 2, 6, 7, '7'], '7') to return ['7']

// LAB 2
// Find the length of the numbers in array A that are divisible by both 2 and 3 , and at the same time, greater than 15.

// function numbersDivisibleBy2And3 (arr) {
//     let divisor = 0;
//     for(i in arr) {
//          if(arr[i] % 2 === 0 && arr[i] % 3 === 0 && arr[i] > 15) {
//                 divisor++;
//          }
//     }
//     return divisor;
// }
// console.log(numbersDivisibleBy2And3([100,84,22,37]))

// For example...
// divisible(A)
// divisible([2,3,12,18,42,24]) to return 3 divisible([100,84,22,37]) to return 1 divisible([5,8,6,12]) to return 0


// LAB 3
// Find the total age of the applicants that applied for this interview from the given record below.

const totalAge = (arr) => {
let total = 0;
for(i in arr) {
     const age = arr[i].age;
     total += age;
     
}
return total;
}
console.log(totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 }, { name: "AZX", age: 22 }]));


// For example...
// totalAge([{ name: "XYZ", age: 23 }, { name: "ABC", age: 40 }]) to return 63
// totalAge([{ name: "XYZ", age: 34 }, { name: "XYZ", age: 29 }, { name: "XYZ", age: 33 }]) to return 96
// totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 }, { name: "AZX", age: 22 }]) to return 132
