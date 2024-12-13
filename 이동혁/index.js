const content = document.querySelector("#content");
const input = document.querySelector("#input");
const command = document.querySelector("#command");

input.focus();

function commandFunc (event) {
    if(event.key === 'Enter') {
        const log = input.value;
        input.value = '';
        const logs = command.cloneNode(true);
        
        if(log === 'git help'){
            logs.innerHTML += '<br />============== 명령어 모음 ==============<br /><br />git name : 이름 정보를 출력합니다.<br />git mbti : MBTI 정보를 출력합니다.<br />git fav -song : 가장 좋아하는 노래를 출력합니다.<br />git fav -food : 가장 좋아하는 음식을 출력합니다.<br />git hat -food : 가장 싫어하는 음식을 출력합니다.<br />git personal -info : TMI를 출력합니다.<br />git fav -hobbies : 가장 좋아하는 취미를 출력합니다.<br />clear : 로그를 초기화합니다.<br /><del>cd [폴더명] : 폴더로 들어갑니다.<br />mkdir [폴더명] : 폴더를 생성합니다.<br />cd .. : 상위 폴더로 이동합니다.<br />ls : 현재 폴더의 파일과 폴더 리스트를 출력합니다.</del><br /><br/>=====================================';
        }
        else if(log === 'git name') logs.innerHTML += '이동혁';
        else if(log === 'git mbti') logs.innerHTML += 'INTP';
        else if(log === 'git fav -song') logs.innerHTML += 'Sondia의 어른';
        else if(log === 'git fav -food') logs.innerHTML += '가장 좋아하는 음식은 커피입니다.';
        else if(log === 'git hat -food') logs.innerHTML += '가장 싫어하는 음식은 토마토입니다.';
        else if(log === 'git personal -info') logs.innerHTML += '여러사람과 대화하는 것보다 한 사람과 대화하는 걸 좋아합니다.';
        else if(log === 'git fav -hobbies') logs.innerHTML += '가장 좋아하는 취미는 게임을 하는 것과 여행을 가는 것입니다.';
        else if(log === 'ls') logs.innerHTML += '';
        else if(log === 'clear') location.reload();
        else{
            logs.innerHTML += '<br />이해할 수 없는 명령어입니다.'
        }

        command.before(logs);
        windows.scrollTo(0, document.body.scrollHeight);
        
    }
}
input.addEventListener("keydown", commandFunc);
document.addEventListener("click", function(){
    input.focus();
});

