function redirectProduct() {
  window.location.href = "product.html";
}
function redirectCart() {
  window.location.href = "cart.html";
}

var paymentdiv = document.getElementById("paymentdiv");

function netbank() {
  window.location.href = "https://retail.onlinesbi.com/retail/login.htm";
}

function redirectSuccess() {
  setTimeout(function () {
    window.location.href = "success.html";
  }, 3000);
}
