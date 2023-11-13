function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function getRadialGradient() {
  const color1 = getRandomHexColor();
  const color2 = getRandomHexColor();
  const color3 = getRandomHexColor();

  // Ajustează aceste valori după preferința ta
  return `radial-gradient(circle, ${color1}, ${color2}, ${color3})`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

startButton.addEventListener('click', startGradientChange);
stopButton.addEventListener('click', stopGradientChange);

function startGradientChange() {
  startButton.disabled = true;
  stopButton.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.transition = 'background 1s ease-in-out'; // Ajustează aici durata și funcția de tranziție
    document.body.style.background = getRadialGradient();
  }, 2000);
}

function stopGradientChange() {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
  document.body.style.transition = ''; // Elimină tranziția când se oprește schimbarea culorii
}
