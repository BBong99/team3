/*
[4번 문제] (난이도 - 쉬움)
3번 문제의 isAverage에서 콜백함수의 필요성이 줄어들었습니다. 사용할 때만 콜백함수를 입력받게 isAverage를 수정해주세요.
*/

// 함수 사용 예시
const result1 = isAverage([1, 2, 3], 2);
console.log(result1); // true;
isAverage([4, 5, 6], 5, basicPrinter); // 정답입니다!