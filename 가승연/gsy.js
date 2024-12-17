document.addEventListener("DOMContentLoaded", () => {
  // JS 변수 표기명으로 수정
  const profileImg = document.querySelector(".profile-image");
  const profileInfo = document.querySelector(".profile-info");
  const bestPlaylist = document.querySelector(".best-playlist");
  const playList = document.querySelector(".playlist");
  const bestMovie = document.querySelector(".best-movie");
  const movie = document.querySelector(".movie");
  const bestMenu = document.querySelector(".best-menu");
  const menu = document.querySelector(".menu");
  const bestHobby = document.querySelector(".best-hobby");
  const hobby = document.querySelector(".hobby");
  const myTmi = document.querySelector(".my-tmi");
  const tmi = document.querySelector(".tmi");

  // visible 토글 함수 추가
  const setVisibleToggle = (element) => {
    element.classList.toggle("visible");
  };

  // [이벤트 대상 객체, 이벤트 작동시 visible 될 객체]
  const hoverElements = [[profileImg, profileInfo]]; // 미우스 hover 이벤트 객체 배열
  // 마우스 click 이벤트 객체 배열
  const clickElements = [
    [bestPlaylist, playList],
    [bestMovie, movie],
    [bestMenu, menu],
    [bestHobby, hobby],
    [myTmi, tmi],
  ];

  // hover 이벤트 함수
  hoverElements.forEach((element) => {
    const [hoverEl, infoEl] = element;
    hoverEl.addEventListener("mouseover", () => setVisibleToggle(infoEl));
    hoverEl.addEventListener("mouseout", () => setVisibleToggle(infoEl));
  });

  // click 이벤트 함수
  clickElements.forEach((element) => {
    const [clickEl, infoEl] = element;
    clickEl.addEventListener("click", () => setVisibleToggle(infoEl));
  });
});
