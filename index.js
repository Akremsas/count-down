const countDown = () => {
  const countDate = new Date("june 8, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  /** how the time work*/
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  //calculate remain time
  const timeDay = Math.floor(gap / day);
  const timeHour = Math.floor((gap % day) / hour);
  const timeMinute = Math.floor((gap % hour) / minute);
  const timeSecond = Math.floor((gap % minute) / second);
  // append to dom
  document.querySelector(".day").innerText = timeDay;
  document.querySelector(".hour").innerText = timeHour;
  document.querySelector(".minute").innerText = timeMinute;
  document.querySelector(".second").innerText = timeSecond;
};
setInterval(countDown, 1000);
