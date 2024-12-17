const headerClick = document.querySelector(".header")
const tmiButton = document.querySelector(".tmi");
const hobbySection = document.querySelector(".hobby");


let colors = true;
let isImageVisible = true;



headerClick.onclick = function () {
  if (colors) {
    headerClick.style.backgroundColor = "#db0d36"
  } else {
    headerClick.style.backgroundColor = "#4c53af"
  }
   colors = !colors;
};



tmiButton.onclick = function () {
  const existingImage = document.querySelector(".hobby-image");
  const existingMessage = document.querySelector(".hobby-message");

  if (isImageVisible) {

    const img = document.createElement("img");
    img.src = "img/poe2.jpg"; // 이미지 경로
    img.alt = "취미 관련 이미지";
    img.style.maxWidth = "60%";
    img.style.marginTop = "10px";
    img.classList.add("hobby-image");
    hobbySection.appendChild(img); 

  const message = document.createElement("p");
    message.textContent = "요즘 POE2 재밋게 하고 있습니다!"; // 원하는 메시지
    message.style.marginTop = "10px";
    message.style.fontSize = "16px";
    message.classList.add("hobby-message");

    hobbySection.appendChild(img);
    hobbySection.appendChild(message);
  } else {
    if (existingImage) hobbySection.removeChild(existingImage);
    if (existingMessage) hobbySection.removeChild(existingMessage);
  }
  isImageVisible = !isImageVisible;
};