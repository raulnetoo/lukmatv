const aniversariantes = document.querySelectorAll('.aniversariante');
let currentAniversariante = 0;

function showAniversariante(index) {
  aniversariantes.forEach((aniversariante, idx) => {
    aniversariante.style.display = idx === index ? 'flex' : 'none';
  });
}

function nextAniversariante() {
  currentAniversariante = (currentAniversariante + 1) % aniversariantes.length;
  showAniversariante(currentAniversariante);
}

setInterval(nextAniversariante, 20000);
showAniversariante(currentAniversariante);
