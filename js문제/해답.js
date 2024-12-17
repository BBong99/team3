// Q1
// function fibonacci(n) {
//     if (n <= 2) return 1; // 처음 두 항은 1
//     let a = 1, b = 1, result;
//     for (let i = 3; i <= n; i++) {
//         result = a + b;
//         a = b;
//         b = result;
//     }
//     return result;
// }

// console.log(fibonacci(8)); // 출력: 21
// console.log(fibonacci(9)); // 출력: 34


// // Q2
// // function factorial(n) {
// //     if (n === 0) return 1; // 0!은 1
// //     let result = 1;
// //     for (let i = 1; i <= n; i++) {
// //         result *= i;
// //     }
// //     return result;
// // }

// // console.log(factorial(5)); // 출력: 120
// // console.log(factorial(0)); // 출력: 1



// // Q3
// // function convertTo12Hour(time) {
// //     let [hour, minute] = time.split(":").map(Number);
// //     const period = hour >= 12 ? "PM" : "AM"; // 시간에 따라 AM/PM 설정
// //     hour = hour % 12 || 12; // 0시는 12로 변환
// //     return `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
// // }

// // console.log(convertTo12Hour("15:30")); // 출력: "3:30 PM"
// // console.log(convertTo12Hour("09:15")); // 출력: "9:15 AM"



// // Q4
// // function wordLengths(sentence) {
// //     return sentence.split(" ").map(word => word.length);
// // }

// // console.log(wordLengths("I love coding")); // 출력: [1, 4, 6]
// // console.log(wordLengths("JavaScript is fun")); // 출력: [10, 2, 3]





// // Q5
// // function maxRowSum(matrix) {
// //     return Math.max(...matrix.map(row => row.reduce((sum, num) => sum + num, 0)));
// // }

// // console.log(maxRowSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 24
// // console.log(maxRowSum([[10, 20], [30, 5], [15, 15]])); // 35
