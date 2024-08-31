const wrapper = document.querySelector(".sliderWrapper");
const items = document.querySelectorAll(".menuItem");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

let move = 0;
setInterval(() => {
  if (move == (items.length - 1) * 100) {
    move = 0;
    wrapper.style.transform = `translateX(${-1 * move}vw)`;
  } else {
    move += 100;
    wrapper.style.transform = `translateX(${-1 * move}vw)`;
  }
}, 3000);
