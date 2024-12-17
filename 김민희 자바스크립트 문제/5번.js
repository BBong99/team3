/*
[문제5] (난이도 - )
아래의 함수 사용 예시와 출력 내용대로 작동할 수 있도록 함수들을 만들어주세요.
- prosessString 함수: 시작 문구를 출력하고 프로세스를 수행하는 함수입니다.
  상황에 따라 시작 문구와 프로세스를 바꿀 수 있도록, 첫 번째 파라미터는 문구를 출력하는 함수를, 두 번째 파라미터는 프로세스를 수행하는 함수를 받습니다.
- toUpperCaseString 함수: 파라미터로 들어온 문자열 2개를 먼저 출력(입력 string: message1, message2)한 후,
  들어온 문자열들을 대문자로 변환하여 하나의 문장으로 리턴합니다.
*/


// 함수 사용 예시
const message1 = "hype";
const message2 = "boy";

const stringProcessor = processStrings(startMessage, toUpperCaseString);
const finalResult = stringProcessor(message1, message2);
console.log("최종 결과:", finalResult);

/* 출력 내용
process를 시작합니다.
입력 string: hype boy
최종 결과: HYPE BOY
*/
