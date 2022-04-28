const eventDay = moment('05-24-2022');
const now = moment();
const timeSpan = eventDay.diff(now);

let dayField = document.querySelector('#hc-days');
let hourField = document.querySelector('#hc-hours');
let minuteField = document.querySelector('#hc-minutes');
let secondField = document.querySelector('#hc-seconds');

let interval;

// Convert to milisecond
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDownFn = () => {
	const today = moment();
	const timeSpan = eventDay.diff(today);

	if (timeSpan <= -today) {
		console.log('Unfortunately we have past the event day');
		clearInterval(interval);
		return;
	} else if (timeSpan <= 0) {
		console.log('Today is the event day');
		clearInterval(interval);
		return;
	} else {
		const days = Math.floor(timeSpan / day);
		const hours = Math.floor((timeSpan % day) / hour);
		const minutes = Math.floor((timeSpan % hour) / minute);
		const seconds = Math.floor((timeSpan % minute) / second);
		dayField.innerHTML = days;
		hourField.innerHTML = hours;
		minuteField.innerHTML = minutes;
		secondField.innerHTML = seconds;
	}
};

interval = setInterval(countDownFn, second);
