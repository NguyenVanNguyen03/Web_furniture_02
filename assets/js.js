const buy = document.querySelector(".buy");
const modal__buy = document.querySelector(".modal__buy");
const modal__container = document.querySelector(".container__buy");
const close__buy = document.querySelector(".close__buy");
const bts__buy = document.querySelectorAll("#arrow__right");

function showBuy() {
  modal__buy.classList.toggle("open");
}

function hideBuy() {
  modal__buy.classList.remove("open");
}

for (const bt__buy of bts__buy) {
  bt__buy.addEventListener("click", showBuy);
}

// co danh sach moi lap
buy.addEventListener("click", showBuy);

close__buy.addEventListener("click", hideBuy);

modal__buy.addEventListener("click", hideBuy);

modal__container.addEventListener("click", function (event) {
  event.stopPropagation();
});
