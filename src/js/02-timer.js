import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const timerFields = document.querySelectorAll('.value');
let countdownInterval;

flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      startButton.addEventListener('click', () => startCountdown(selectedDate));
    }
  },
});

function startCountdown(endDate) {
  startButton.disabled = true;
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const timeLeft = calculateTimeLeft(endDate);
    updateTimerFields(timeLeft);

    if (timeLeft.total <= 0) {
      clearInterval(countdownInterval);
      Notiflix.Notify.success('Countdown has ended!');
      startButton.disabled = false;
    }
  }, 1000);
}

function calculateTimeLeft(endDate) {
  const now = new Date();
  const difference = endDate - now;

  return {
    total: difference,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

function updateTimerFields(time) {
  timerFields[0].textContent = addLeadingZero(time.days);
  timerFields[1].textContent = addLeadingZero(time.hours);
  timerFields[2].textContent = addLeadingZero(time.minutes);
  timerFields[3].textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
