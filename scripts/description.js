// import navbar and footer
import { productPageNavbar, productPageFooter } from "../components/productnav.js";
document.querySelector("header").innerHTML = productPageNavbar();
document.querySelector("footer").innerHTML = productPageFooter();

let disData = JSON.parse(localStorage.getItem("discription"));
let displaydata = [];
displaydata.push(disData[disData.length - 1]);
document.querySelector("#logo_image").addEventListener("click", function () {
  window.location.href = "allproduct.html";
});



displaydata.map(function (element) {
  let container = document.getElementById("container");
  let rightBox = document.getElementById("right");
  let leftBox = document.getElementById("left");

  let image = document.createElement("img");
  image.setAttribute("class", "img");
  image.src = element.image;
  leftBox.append(image);

  let name = document.createElement("h2");
  name.innerText = element.name;

  let currency = document.createElement("h2");
  currency.innerText = element.currency;

  let price = document.createElement("h2");
  price.innerText = element.price;

  let currency_price_box = document.createElement("div");
  currency_price_box.setAttribute("id", "currency_price_box");
  if (price.innerText === "Out of Stock") {
    currency_price_box.append(price);
  } else {
    currency_price_box.append(currency, price);
  }

  let adtc = document.createElement("button");
  adtc.innerText = "Add to Cart";
  adtc.setAttribute("class", "addcart");

  adtc.addEventListener("click", function () {
    addtocart(element);
  });
  let add_cart_box = document.createElement("div");
  add_cart_box.setAttribute("id", "add_to_cart_box");
  add_cart_box.append(adtc);
  rightBox.append(name, currency_price_box, add_cart_box); //qtydiv

  container.append(leftBox, rightBox);
});

function addtocart(element) {
  // console.log(element);
  cartData.push(element);
  document.querySelector(".addcart").innerText = "Added to cart";
  document.querySelector(".addcart").style.color = "green";
  localStorage.setItem("cartDetail", JSON.stringify(cartData));
  window.location.href = "cart.html";
}


//count cart data length
let cartData = JSON.parse(localStorage.getItem("cartDetail")) || [];
let length = cartData.length;
document.querySelector(".cartItems").innerText = `(${length})`;