const c = document.getElementById("matrix");
const ctx = c.getContext("2d");

let fontSize = 18;
let columns = Math.floor(c.width / fontSize);
let drops = [];

// Função para inicializar ou reajustar os drops ao redimensionar
function initializeDrops() {
  columns = Math.floor(c.width / fontSize);
  drops = new Array(columns).fill(1);
}

function resizeCanvas() {
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  initializeDrops(); // Recalcular a posição inicial das colunas
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const letters = "wolfbyteWOLFBYTE01".split("");

function draw() {
  ctx.fillStyle = "rgba(6, 6, 27, 0.1)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "rgb(0, 255, 255)";
  ctx.font = `${fontSize}px arial`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > c.height && Math.random() > 0.992) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  window.requestAnimationFrame(draw);
}

draw();

document.addEventListener("scroll", function () {
  const minhaDiv = document.getElementById("nossos_servicos");
  minhaDiv.classList.add("scrolled");
});
