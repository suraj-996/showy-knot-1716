// import navbar and footer
import { productPageNavbar, productPageFooter } from "../components/productnav.js";
document.querySelector("header").innerHTML = productPageNavbar();
document.querySelector("footer").innerHTML = productPageFooter();

let data = JSON.parse(localStorage.getItem("cartDetail"));
console.log(data);
document.querySelector("#logo_image").addEventListener("click", function () {
  window.location.href = "allproduct.html";
});

let total_price = data.reduce(function (sum, el, index, arr) {
  sum += Number(el.price);
  return sum;
}, 0);

// console.log(total_price)
let length = data.length;

document.querySelector(".total").innerText = `(${length})`;
document.querySelector(".totl").innerText = `(${length})`;
document.querySelector(".price").innerText = total_price;
document.querySelector(".pric").innerText = total_price;

data.map(function (el, index) {
  let cartProduct = document.querySelector(".mypro");

  let box = document.createElement("div");
  box.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";
  // box.style.border = "1px solid black";
  box.style.marginBottom = "20px";

  let imageBox = document.createElement("div");
  let image = document.createElement("img");
  image.src = el.image;
  imageBox.append(image);

  let namePriceBox = document.createElement("div");
  namePriceBox.setAttribute("class", "nap");

  let name = document.createElement("p");
  name.innerText = el.name;
  let price = document.createElement("h3");
  price.innerText = `${el.price}`;
  namePriceBox.append(name, `$${price.innerText}`);

  let buttons = document.createElement("div");
  buttons.setAttribute("class", "omodi");
  let btnbox = document.createElement("div");
  let decreaseBtn = document.createElement("button");
  decreaseBtn.innerText = "-";
  decreaseBtn.style.border = "none";
  decreaseBtn.style.backgroundColor = "white";
  decreaseBtn.addEventListener("click", function () {
    decrement(quantity, el.price);
  });

  let quantity = document.createElement("span");
  quantity.setAttribute("class", "count");
  quantity.innerText = 1;

  let increaseBtn = document.createElement("button");
  increaseBtn.innerText = "+";
  increaseBtn.style.border = "none";
  increaseBtn.style.backgroundColor = "white";
  increaseBtn.addEventListener("click", function () {
    increment(quantity, el.price);
  });

  btnbox.append(decreaseBtn, quantity, increaseBtn);
  let remove = document.createElement("button");
  remove.innerText = "Remove";
  remove.addEventListener("click", function () {
    removeItem(el, index);
  });

  buttons.append(btnbox, remove);

  box.append(imageBox, namePriceBox, buttons);

  cartProduct.append(box);
});
function removeItem(el, i) {
  // console.log(el,i);
  data.splice(i, 1);
  localStorage.setItem("cartDetail", JSON.stringify(data));
  window.location.reload();
}
function increment(quantity, price) {
  let a = quantity.innerText;
  a++;
  total_price += Number(price);
  console.log(total_price);

  document.querySelector(".price").innerText = total_price;
  document.querySelector(".pric").innerText = total_price;
  quantity.innerText = a;
}
function decrement(quantity, price) {
  let b = quantity.innerText;
  if (b > 0) {
    b--;
    total_price -= Number(price);
    document.querySelector(".price").innerText = total_price;
    document.querySelector(".pric").innerText = total_price;
    quantity.innerText = b;
  }
  quantity.innerText = b;
}
document
  .querySelector("#container>div:nth-child(3)>button")
  .addEventListener("click", Paymentfun);

function Paymentfun() {
  if (total_price == 0) {
    alert("No item in Cart");
  } else {
    window.location.href = "checkout.html";
  }
}

// count cart data length
let cartData = JSON.parse(localStorage.getItem("cartDetail")) || [];
let cart_length = cartData.length;
document.querySelector(".cartItems").innerText = `(${cart_length})`;

