function redirectProduct() {
  window.location.href = "product.html";
}

var cartdiv = document.getElementById("cartdiv");
var costdiv = document.getElementById("costdiv");

function showCartProducts() {
  cartdiv.innerHTML = "";

  var array = JSON.parse(localStorage.getItem("Cart Products"));
  //   console.log("array:", array);
  if (array == null || array.length == 0) {
    var p = document.createElement("p");
    p.innerHTML = "Add products from the product page to view them here.";
    p.style.fontWeight = "bolder";
    p.style.fontSize = "x-large";
    p.style.marginLeft = "0%";
    cartdiv.append(p);
  } else {
    cartdiv.innerHTML = "";
    for (element of array) {
      let pname = element.pname;
      let price = element.price;
      let category = element.category;
      let link = element.link;

      let div = document.createElement("div");
      let p_name = document.createElement("p");
      p_name.innerHTML = pname;
      let p_price = document.createElement("p");
      p_price.innerHTML = `₹${price}`;
      let p_category = document.createElement("p");
      p_category.innerHTML = category;
      let p_image = document.createElement("img");
      p_image.src = link;
      p_image.style.height = "60%";
      p_image.style.width = "100%";

      div.append(p_image, p_name, p_price);

      cartdiv.append(div);
    }
  }
}

function showCost() {
  let count = 0;
  let itemsCost = 0;
  let cartArray = JSON.parse(localStorage.getItem("Cart Products"));
  for (ele of cartArray) {
    count++;
    itemsCost += ele.price;
  }
  let taxcost = Math.round((itemsCost * 8.44) / 100);
  let shippingcost = Math.round((itemsCost * 0.78) / 100);
  //   console.log(count, itemsCost);
  var div = document.createElement("div");
  var p1 = document.createElement("p");
  p1.innerHTML = `Total Number of Items in the Cart: ${count}`;
  var p2 = document.createElement("p");
  p2.innerHTML = `Cost of Items: ₹${itemsCost}`;
  var p3 = document.createElement("p");
  p3.innerHTML = `Tax Charges: ₹${taxcost}`;
  var p4 = document.createElement("p");
  p4.innerHTML = `Shipping Charges: ₹${shippingcost}`;
  var p5 = document.createElement("p");
  p5.innerHTML = `-----------------------------------------------`;
  var p6 = document.createElement("p");
  p6.innerHTML = `Total Cost: ₹${itemsCost + taxcost + shippingcost}`;

  let btn = document.createElement("button");
  btn.textContent = "Proceed to Buy";

  let promoInput = document.createElement("input");
  promoInput.placeholder = "Have a Promo Code?";

  let chkbtn = document.createElement("button");
  chkbtn.textContent = "Check Code";

  btn.addEventListener("click", function () {
    window.location.href = "payments.html";
    let empty = [];
    localStorage.setItem("Cart Products", JSON.stringify(empty));
  });

  var p7 = document.createElement("p");
  let discount = Math.round(((itemsCost + taxcost + shippingcost) * 30) / 100);
  p7.innerHTML = `Discount Applicable: ₹${discount}`;
  p7.style.visibility = "hidden";

  var p8 = document.createElement("p");
  p8.innerHTML = `Discount Cost: ₹${
    itemsCost + taxcost + shippingcost - discount
  }`;
  p8.style.visibility = "hidden";

  chkbtn.addEventListener("click", function () {
    var value = promoInput.value;
    if (value == "masai30") {
      p7.style.visibility = "visible";
      p8.style.visibility = "visible";
    } else {
      alert("Invalid Promo Code");
    }
    promoInput.value = "";
    // console.log(value);
  });

  div.append(p1, p2, p3, p4, p5, p6, p7, p8, promoInput, chkbtn, btn);
  costdiv.append(div);
}

showCartProducts();
showCost();
