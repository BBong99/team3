const Questions = [
    {
        title: 'Q1 피보나치 수열', 
        name:'가승연', 
        question: `다음과 같이 코드와 출력값이 나오도록 피보나치 수열 코드를 작성하세요.
         피보나치수열 : 처음 두항을 1과1로 한 후 그 다음 항 부터는 바로 앞 2개의 항을 더해 만든다.`, 
        code: `console.log(fibonacci(8)); //출력 21
        console.log(fibonacci(9)); // 출력 34`,
    },
    {
        title: 'Q2 팩토리얼 함수',
        name: '가승연',
        question: `주어진 숫자의 팩토리얼을 반환하는 함수를 작성하세요.
팩토리얼: n! = n × (n-1) × (n-2) ... × 1이며, 0!은 1입니다.`,
        code: `console.log(factorial(5)); // 출력 120
console.log(factorial(0)); // 출력 1`,
    },
    {
        title: 'Q3 시간 단위 변환',
        name: '가승연',
        question: `현재 시간을 입력받아 시간을 "12시간 단위로 변환"하고 AM/PM을 붙여 반환하는 함수를 작성하세요.`,
        code: `console.log(convertTo12Hour("15:30")); // 출력 "3:30 PM"
console.log(convertTo12Hour("09:15")); // 출력 "9:15 AM"`,
    },
    {
        title: 'Q4 문장 마디 세기',
        name: '가승연',
        question: `문장을 입력받아 각 단어의 길이를 배열로 반환하는 함수를 작성하세요.`,
        code: `console.log(wordLengths("I love coding")); // 출력 [1, 4, 6]
console.log(wordLengths("JavaScript is fun")); // 출력 [10, 2, 3]`,
    },
    {
        title: 'Q5 2차원 배열의 최대 합',
        name: '가승연',
        question: `2차원 배열(행렬)에서 각 행의 합 중 가장 큰 값을 반환하는 함수를 작성하세요.`,
        code: `console.log(maxRowSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 출력 24
console.log(maxRowSum([[10, 20], [30, 5], [15, 15]])); // 출력 35`,
    },
];