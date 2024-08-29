const wrapper = document.querySelector(".sliderWrapper");
const items = document.querySelectorAll(".menuItem");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
