let user = JSON.parse(localStorage.getItem("userData"))
let login=localStorage.getItem("login_status")
console.log(login);
let name;
if(login=="true"){
  name=user[0].name
}else{
  name="Login"
}
console.log(name)


function productPageNavbar() {
    return `<nav>
    <div id="navbar">
      <div id="logo_image">
        <a href="index.html"
          ><img
            src="https://images.brilliantmade.com/uploads/store/logo/200/Greenhouse-logo.svg"
            alt=""
        /></a>
      </div>
      <div id="cart_login">
        <a href="cart.html">Cart<span class="cartItems">()</span></a>
        <a href="login.html">${name}</a>
      </div>
    </div>
  </nav>`
}


function productPageFooter() {
    return `<div id="footerDiv">
    <div class="footerItems">
        <h2>SUPPORT</h2>
        <h2>//</h2>
        <h2>PRIVACY</h2>
        <h2>//</h2>
        <h2>TERMS</h2>
    </div>

    <p>© 2022 BRILLIANT</p>
</div>`
}

export {productPageNavbar, productPageFooter};