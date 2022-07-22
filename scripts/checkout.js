// import navbar and footer
import { productPageNavbar, productPageFooter } from "../components/productnav.js";
document.querySelector("header").innerHTML = productPageNavbar();
document.querySelector("footer").innerHTML = productPageFooter();

document.querySelector(".formm").addEventListener("submit", checkfun);
// document.querySelector(".logo").addEventListener("click",function(){
//     window.location.href="index.html"
// })

function checkfun() {
  event.preventDefault();
  console.log("in function");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("value").value;
  let zipcode = document.getElementById("zipcode").value;

  var card = document.querySelector(".cardno").value;
  var date = document.querySelector(".doc").value;
  var cvv = document.querySelector(".cvv").value;
  if (
    name === "" ||
    email === "" ||
    address === "" ||
    city === "" ||
    state.value === "" ||
    zipcode === ""
  ) {
    alert("Please fill all data of address");
  } else if (
    name === "" ||
    email === "" ||
    address === "" ||
    city === "" ||
    state.value === "" ||
    zipcode === "" ||
    card == "" ||
    cvv == "" ||
    date == ""
  ) {
    alert("Invalid Input");
  } else {
    if (card.length == 19 && cvv.length == 3) {
      alert("Payment Successful");

      window.location.href = "index.html";
    } else {
      alert("Unable to Process");
    }
  }
}
