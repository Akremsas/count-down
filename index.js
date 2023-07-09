const countDown = () => {
  const countDate = new Date("july9, 2023 22:30:00").getTime();
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
  /* Change the page*/
  if (gap <= 0) {
    document.querySelector(".day").innerText = 0;
    document.querySelector(".hour").innerText = 0;
    document.querySelector(".minute").innerText = 0;
    document.querySelector(".second").innerText = 0;
    const container = document.getElementById("container");
    container.style.opacity = "0";
    const newContainer = document.getElementById("newContainer");
    newContainer.style.opacity = "1";
  }
};

setInterval(countDown, 1000);

/*
const element = document.getElementById("btn-gift");
console.log(element);
const element1 = document.getElementById("btn-no-gift");
console.log(element1);
element.addEventListener("click",show);
element1.addEventListener("click",hide);
*/
const showImage = document.getElementById("cake");
const error = document.querySelector("#error");
const hideAll = document.querySelector(".new-container");
console.log(hideAll);
function show() {
  showImage.style.opacity = "1";
  document.getElementById("btn-no-gift").style.cursor = "pointer";
  error.style.visibility = "hidden";
}
function hide() {
  showImage.style.opacity = "0";
  error.style.visibility = "visible";
}
let changeText = document.querySelector("#heroHeading");
changeText.addEventListener("mouseenter", function (event) {
  event.target.innerText = "Get Well Soon My beautiful Baby";
})
changeText.addEventListener("mouseout", function (event) {
  event.target.innerText = "Get Well Soon My beautiful wife";
})


