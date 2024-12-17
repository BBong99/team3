const Questions = [
    {
        title: 'Q1.Array', 
        name:'이동혁', 
        question: `주어진 조건을 완성하세요.
배열 arr 안에 있는 요소들을 역순으로 배열한
새로운 배열 arr2 를 만들고
배열 arr2의 각 요소가 6보다 작으면 10배, 
배열 arr2의 각 요소가 6보다 크거나 같으면 3배를 해준 뒤
배열 arr2안의 각 요소들을 역순으로 배열한 arr3를 출력하세요.`, 
        code: `const arr = [1,8,3,9,5,2,7,8,4,10];`,
    },
    {
        title: 'Q2.Nested Loop', 
        name:'이동혁', 
        question: `문제의 의도: 2중 for문 이해, 조건문 이해

7층 높이의 피라미드를 출력해 보세요.

조건) 2중 for문을 사용하세요.
if문을 사용하세요.
한줄씩 7줄 console.log 하는 거 안됩니다.`, 
        code: `/* 직접 작성 */`,
    },
    {
        title: 'Q3.Map & Date', 
        name:'이동혁', 
        question: `우리가 호스팅 회사를 운영하고 있습니다.

매년 물가 상승으로 인해
모든 제품의 가격을 조금씩 올리고 있습니다.

근데 매년 가격을 바꾸려고 하니
귀찮기도 하고 까먹기도 합니다.

price 배열에 현재 날짜 기준으로 가격이 매겨져있습니다.
매년 자동으로 가격이 오르도록 설정해보세요!

조건)
매년 5%인상`, 
        code: `const price = [
    {
        name: 'Web hosting',
        value: 10000
    },
    {
        name: 'Vps hosting',
        value: 30000
    },
    {
        name: 'Cloud hosting',
        value: 200000
    }
];`,
    },

    {
        title: 'Q4.Object', 
        name:'이동혁', 
        question: `team 배열에 팀원의 이름과 mbti를 속성으로 가지는
객체를 담아주세요.`, 
        code: `const team = [];`,
    },

    {
        title: 'Q4.Object', 
        name:'이동혁', 
        question: `team 배열에 팀원의 이름과 mbti를 속성으로 가지는
객체를 담아주세요.`, 
        code: `const team = [];`,
    },

    {
        title: 'Q5.Function', 
        name:'이동혁', 
        question: `은행 업무 시스템을 만드려고 합니다.
기능에는 입금, 출금, 입출금내역 기록이 있습니다.

각 기능을 함수로 만들어서 입금, 출금을 한 번씩 하고
입출금내역을 출력해주세요.

조건: deposit(), withdrawal() 의 파라미터에
details() 를 콜백함수로 받아주세요.`, 
        code: `let money = 10000000;
const detailsLog = [];

function deposit () {

}

function withdrawal () {

}

function details () {

}

console.log(detailsLog);
console.log();
console.log('잔액: ' + money + '원');`,
    },
    {
        title: 'Q6.Result', 
        name:'김승우', 
        question: `다음 코드의 결과는 무엇일까요?`, 
        code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());`,
    },
    {
        title: 'Q7. Result2', 
        name:'김승우', 
        question: `다음 코드의 결과는 무엇일까요?`, 
        code: `foo();

function foo() {
  console.log("Function Declaration");
}

bar();

var bar = function () {
  console.log("Function Expression");
};`,
    },
    {
        title: 'Q8. Array', 
        name:'김승우', 
        question: `문자열 배열이 주어졌을 때, 각 문자열을 뒤집어서
        새로운 배열을 반환하세요.`, 
        code: `function reverseStrings(array) {
  // 여기에 구현
}

const words = ["hello", "world", "javascript"];
console.log(reverseStrings(words));
// ["olleh", "dlrow", "tpircsavaj"]`,
    },
    {
        title: 'Q9. Parameter', 
        name:'김승우', 
        question: `배열을 파라미터로 받아서 중복된 요소가
        존재하면 true, 아니면 false를 반환하세요.`, 
        code: `function hasDuplicates(array) {
  // 여기에 구현
}

console.log(hasDuplicates([1, 2, 3, 4]));    // 출력: false
console.log(hasDuplicates([1, 2, 2, 4]));    // 출력: true`,
    },
    {
        title: 'Q10. Login', 
        name:'김승우', 
        question: `사용자 이름과 비밀번호를 입력해서
로그인을 할 수 있는 함수를 만들어주세요.

아이디와 비번은 개인이 희망하는 것으로 합니다.

아이디와 비번이 맞으면 성공, 틀리면 실패에 대한 메시지를 출력해주세요.`, 
        code: `function login(userName, password) {

};`,
    },
    {
        title: 'Q11. Return', 
        name:'봉재완', 
        question: `
목표: 주어진 배열의 각 숫자를 제곱으로 변환하는 함수를 작성하세요.
`, 
        code: `function squareArray(array) {
  // 여기에 함수를 작성하세요.
}

const numbers = [1, 2, 3, 4];
const squared = squareArray(numbers);
console.log(squared); // [1, 4, 9, 16]`,
    },
    {
        title: 'Q12. Filtering', 
        name:'봉재완', 
        question: `
목표: 주어진 배열에서 특정 조건을 만족하는 숫자만
반환하는 함수를 작성하세요.
조건: 숫자가 짝수일 경우만 반환합니다.
힌트: filter() 메서드는 주어진 배열에서 제공된
함수에 의해 구현된 테스트를 통과한 요소만 필터링합니다.
`, 
        code: `function filterEvenNumbers(array) {
  // 여기에 함수를 작성하세요.
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = filterEvenNumbers(numbers);
console.log(evens); // [2, 4, 6]`,
    },
    {
        title: 'Q13. Filtering 2', 
        name:'봉재완', 
        question: `
짝수만 필터링후 제곱으로 반환
`, 
        code: `function filterEvenNumbers(array) {
  // 여기에 함수를 작성하세요.
};


const numbers = [1, 2, 3, 4, 5, 6];
const evens = filterEvenNumbers(numbers);
console.log(evens); // [4, 16, 36]`,
    },
    {
        title: 'Q14. Array', 
        name:'봉재완', 
        question: `
주어진 배열의 모든 숫자를 더하는 함수를 작성하세요.
힌트: reduce()를 사용하면 배열을 순회하며 누적 합을 구할 수 있습니다.
`, 
        code: `function sumArray(array) {

  // 여기에 함수를 작성하세요.

}




const numbers = [1, 2, 3, 4];

const total = sumArray(numbers);

console.log(total); // 10`,
    },

    {
        title: 'Q15. Array 2', 
        name:'봉재완', 
        question: `
주어진 배열에서 가장 큰 숫자를 찾아 반환하는 함수를 작성하세요.
힌트: Math.max()와 스프레드 연산자(...)를 사용할 수 있습니다.
`, 
        code: `function findMax(array) {
  // 여기에 함수를 작성하세요.
}

const numbers = [10, 20, 5, 8, 30];
const maxNumber = findMax(numbers);
console.log(maxNumber); // 30`,
    },

    {
        title: 'Q16. Function', 
        name:'김민희', 
        question: `
&&와 ||를 사용하여, 학생의 퀴즈1, 퀴즈2, 퀴즈3의 점수를 넣으면
재응시 대상인지 알려주는 함수 isPass를 만들어주세요.
함수 isPass는 하나라도 0점이 있으면 '재응시 대상자입니다.'를 출력하고,
그렇지 않으면 '통과입니다'를 출력합니다.
`, 
        code: `// 함수 사용 예시
isPass(3, 2, 0); // 재응시 대상자입니다.
isPass(1, 2, 3); // 통과입니다.`,
    },

    {
        title: 'Q17. Parameter', 
        name:'김민희', 
        question: `
학생의 이름, 학년, 수료한 강의명들을 파라미터로 받아서
"_학년 _이(가) 수료한 강의는 총 _개 입니다."를
출력하는 함수 printCoursesRecord를 만들어주세요.
(수강생마다 수료한 강의 개수는 다릅니다.)
`, 
        code: `// 함수 사용 예시
printCoursesRecord('유재석', 3, 'HTML의 이해', 'CSS 레이아웃',
'인터랙티브 JavaScript');
// 3학년 유재석이(가) 수료한 강의는 총 3개입니다.
printCoursesRecord('박명수', 4, 'CSS 레이아웃', '유닉스 시스템');
// 4학년 박명수이(가) 수료한 강의는 총 2개입니다.`,
    },

    {
        title: 'Q18. Callback', 
        name:'김민희', 
        question: `
주어진 배열 요소들의 평균이 예측 평균과 같은지 확인하는
함수 isAverage와 콜백함수를 만들어주세요.
- 맞으면 True, 틀리면 False를 리턴합니다.
- 결과를 문장으로 출력해주는 콜백함수를 사용하여
맞으면 "정답입니다!", 틀리면 "틀렸습니다!"가 출력되어야 합니다.
- 첫 번째 파라미터: 숫자가 들어간 배열,
두 번째 파라미터: 예측 평균값, 세 번째 파라미터: 콜백함수
`, 
        code: `// 함수 사용 예시
isAverage([1, 2, 3], 2, basicPrinter); // 정답입니다!
isAverage([4, 5, 6], 3, basicPrinter); // 틀렸습니다!`,
    },

    {
        title: 'Q19. Callback 2', 
        name:'김민희', 
        question: `
3번 문제의 isAverage에서 콜백함수의 필요성이 줄어들었습니다.
사용할 때만 콜백함수를 입력받게 isAverage를 수정해주세요.
`, 
        code: `// 함수 사용 예시
const result1 = isAverage([1, 2, 3], 2);
console.log(result1); // true;
isAverage([4, 5, 6], 5, basicPrinter); // 정답입니다!`,
    },

    {
        title: 'Q20. Callback 2', 
        name:'김민희', 
        question: `
아래의 함수 사용 예시와 출력 내용대로
작동할 수 있도록 함수들을 만들어주세요.

- prosessString 함수: 시작 문구를 출력하고
프로세스를 수행하는 함수입니다.

  상황에 따라 시작 문구와 프로세스를 바꿀 수 있도록,
  첫 번째 파라미터는 문구를 출력하는 함수를,
  두 번째 파라미터는 프로세스를 수행하는 함수를 받습니다.

- toUpperCaseString 함수: 파라미터로 들어온
문자열 2개를 먼저 출력(입력 string: message1, message2)한 후,
  들어온 문자열들을 대문자로 변환하여 하나의 문장으로 리턴합니다.
`, 
        code: `// 함수 사용 예시
const message1 = "hype";
const message2 = "boy";

const stringProcessor = processStrings(startMessage,
toUpperCaseString);
const finalResult = stringProcessor(message1, message2);
console.log("최종 결과:", finalResult);

/* 출력 내용
process를 시작합니다.
입력 string: hype boy
최종 결과: HYPE BOY
*/`,
    },
    {
        title: 'Q21 피보나치 수열', 
        name:'가승연', 
        question: `다음과 같이 코드와 출력값이 나오도록 피보나치 수열 코드를 작성하세요.
         피보나치수열 : 처음 두항을 1과1로 한 후
         그 다음 항 부터는 바로 앞 2개의 항을 더해 만든다.`, 
        code: `console.log(fibonacci(8)); //출력 21
        console.log(fibonacci(9)); // 출력 34`,
    },
    {
        title: 'Q22 팩토리얼 함수',
        name: '가승연',
        question: `주어진 숫자의 팩토리얼을 반환하는 함수를 작성하세요.
팩토리얼: n! = n × (n-1) × (n-2) ... × 1이며, 0!은 1입니다.`,
        code: `console.log(factorial(5)); // 출력 120
console.log(factorial(0)); // 출력 1`,
    },
    {
        title: 'Q23 시간 단위 변환',
        name: '가승연',
        question: `현재 시간을 입력받아 시간을 "12시간 단위로 변환"하고
        AM/PM을 붙여 반환하는 함수를 작성하세요.`,
        code: `console.log(convertTo12Hour("15:30")); // 출력 "3:30 PM"
console.log(convertTo12Hour("09:15")); // 출력 "9:15 AM"`,
    },
    {
        title: 'Q24 문장 마디 세기',
        name: '가승연',
        question: `문장을 입력받아 각 단어의 길이를
        배열로 반환하는 함수를 작성하세요.`,
        code: `console.log(wordLengths("I love coding"));
// 출력 [1, 4, 6]
console.log(wordLengths("JavaScript is fun"));
// 출력 [10, 2, 3]`,
    },
    {
        title: 'Q25 2차원 배열의 최대 합',
        name: '가승연',
        question: `2차원 배열(행렬)에서 각 행의 합 중 가장 큰 값을 반환하는 함수를 작성하세요.`,
        code: `console.log(maxRowSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 출력 24
console.log(maxRowSum([[10, 20], [30, 5], [15, 15]])); // 출력 35`,
    },

];

console.log(Questions[1].title);


const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const title = document.getElementById('titleId');
const question = document.getElementById('questionContent');
const code = document.getElementById('codeContent');
const nameWho = document.getElementById('name');

title.textContent = Questions[0].title;
nameWho.textContent = Questions[0].name;
question.textContent = Questions[0].question;
code.textContent = Questions[0].code;

let nowQuestionIndex = 0;
previousButton.disabled = true;




function nextFunc(event){
    nowQuestionIndex += 1;
    if(nowQuestionIndex > 0){
        previousButton.disabled = false;
        
    }
    else{
        previousButton.disabled = true;
        
    }
    if(nowQuestionIndex === Questions.length-1){
        nextButton.disabled = true;
    }
    else{
        nextButton.disabled = false;
    }
    title.textContent = Questions[nowQuestionIndex].title;
    nameWho.textContent = Questions[nowQuestionIndex].name;
    question.textContent = Questions[nowQuestionIndex].question;
    code.textContent = Questions[nowQuestionIndex].code;
}

function prevFunc(event){
    nowQuestionIndex -= 1;
    if(nowQuestionIndex === 0){
        previousButton.disabled = true;
    }
    if(nowQuestionIndex > 0){
        previousButton.disabled = false;
    }
    else{
        previousButton.disabled = true;
    }
    if(nowQuestionIndex === Questions.length-1){
        nextButton.disabled = true;
    }
    else{
        nextButton.disabled = false;
    }
    title.textContent = Questions[nowQuestionIndex].title;
    nameWho.textContent = Questions[nowQuestionIndex].name;
    question.textContent = Questions[nowQuestionIndex].question;
    code.textContent = Questions[nowQuestionIndex].code;
}

nextButton.addEventListener("click", nextFunc);
previousButton.addEventListener("click", prevFunc);


const userCodeInput = document.getElementById("userCode");
const confirmButton = document.getElementById("executeCode");
const output = document.getElementById("output");

confirmButton.addEventListener("click", () => {
    const userCode = userCodeInput.value;
    

    const consoleLog = console.log; 
    let consoleOutput = [];
    console.log = (...args) => {
        consoleOutput.push(args.join(" "));
    };

    try {
        const result = new Function(userCode)(); 
        if (consoleOutput.length > 0) {
            output.textContent = `출력:\n${consoleOutput.join("\n")}`;
        }
    } catch (error) {
        output.textContent = "오류 발생: " + error.message;
    } 
});
