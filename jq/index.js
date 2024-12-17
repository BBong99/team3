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
