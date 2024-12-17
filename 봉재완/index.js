const headerClick = document.querySelector(".header")
const tmiButton = document.querySelector(".tmi");
const hobbySection = document.querySelector(".hobby");


let colors = true;
let isImageVisible = false;



headerClick.onclick = function () {
  if (colors) {
    headerClick.style.backgroundColor = "#db0d36"
  } else {
    headerClick.style.backgroundColor = "#4c53af"
  }
   colors = !colors;
};


tmiButton.onclick = function () {

  let existingImage = document.querySelector(".hobby-image");

  if (!isImageVisible) {

    const img = document.createElement("img");
    img.src = "img/rating.png"; // 여기에 이미지 경로
    img.alt = "취미 관련 이미지";
    img.style.maxWidth = "100%";
    img.style.marginTop = "10px";
    img.classList.add("hobby-image");
    hobbySection.appendChild(img); 

  const message = document.createElement("p");
    message.textContent = "이건 제가 가장 좋아하는 취미입니다!"; // 원하는 메시지
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


/* 배경 임펙트 부분입니다. 맘에 안드시면 삭제 해주세요!*/
const canvas = document.getElementById('fallingStarsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.y += this.speed;
        if (this.y - this.radius > canvas.height) {
            this.y = -this.radius;
            this.x = Math.random() * canvas.width;
        }
    }
}

const stars = [];

function initStars(count) {
    for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2 + 1; 
        const speed = Math.random() * 2 + 1; 
        stars.push(new Star(x, y, radius, speed));
    }
}


function animate() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        star.update();
        star.draw();
    }

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0;
    initStars(100);
});

initStars(100);
animate();