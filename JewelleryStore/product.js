function redirectCart() {
  window.location.href = "cart.html";
}
var productdiv = document.getElementById("productsdiv");

productsList = [
  {
    name: "Ear-rings",
    price: 99654,
    category: "Earrings",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71MKCikiIoL._UX500_.jpg",
  },
  {
    name: "Ear-rings",
    price: 34562,
    category: "Earrings",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71et4jX2bJL._UY500_.jpg",
  },
  {
    name: "Ear-rings",
    price: 23343,
    category: "Earrings",
    image:
      "https://assets0.mirraw.com/images/8860400/IMG_4177_small.jpg?1617206581",
  },
  {
    name: "Ear-rings",
    price: 987867,
    category: "Earrings",
    image:
      "https://staticimg.titan.co.in/Tanishq/Catalog/502997SUPABA32_1.jpg?impolicy=pqmed&imwidth=640",
  },
  {
    name: "Chains",
    price: 11212,
    category: "Chains",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81xXTN6CONL._UY500_.jpg",
  },
  {
    name: "Chains",
    price: 322323,
    category: "Chains",
    image:
      "https://5.imimg.com/data5/TestImages/PL/AC/FY/SELLER-45281882/gold-rope-chain-500x500.jpg",
  },
  {
    name: "Chains",
    price: 445345,
    category: "Chains",
    image: "https://santayana.com/wp-content/uploads/2020/02/Gold-Necklace.jpg",
  },
  {
    name: "Chains",
    price: 878687,
    category: "Chains",
    image:
      "https://i.pinimg.com/originals/bd/b9/45/bdb945bc27c409509d670b991a428ee6.jpg",
  },
  {
    name: "Bracelets",
    price: 12312,
    category: "Bracelets",
    image:
      "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//U/T/UT00929-1Y0000_11_listfront.jpg",
  },
  {
    name: "Bracelets",
    price: 988989,
    category: "Bracelets",
    image:
      "https://images.melorra.com/image/upload/fl_progressive,f_auto,q_auto/v1595527038/live-melorra/dev/catalogue/images/DI/OPT/580/S21PDI01B_T_580.jpg",
  },
  {
    name: "Bracelets",
    price: 67576,
    category: "Bracelets",
    image:
      "https://st3.depositphotos.com/1875497/12660/i/600/depositphotos_126602692-stock-photo-gold-bracelet-and-diamond-jewelry.jpg",
  },
  {
    name: "Bracelets",
    price: 54564,
    category: "Bracelets",
    image:
      "https://st.depositphotos.com/1041120/1926/i/950/depositphotos_19260887-stock-photo-gold-bracelet.jpg",
  },
  {
    name: "Rings",
    price: 9897,
    category: "Rings",
    image:
      "https://www.candere.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/r/gr00103_1.jpg",
  },
  {
    name: "Rings",
    price: 2113,
    category: "Rings",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/611%2B4SglJFL._UL1100_.jpg",
  },
  {
    name: "Anklets",
    price: 12123,
    category: "Anklets",
    image:
      "https://3.imimg.com/data3/ET/RF/MY-1757304/gold-anklets-500x500.jpg",
  },
  {
    name: "Anklets",
    price: 23123,
    category: "Anklets",
    image:
      "https://assets0.mirraw.com/images/6867820/image_zoom.jpeg?1552995116",
  },
];

function showProducts(array) {
  if (localStorage.getItem("Jewels") == null) {
    localStorage.setItem("Jewels", JSON.stringify(productsList));
  }

  productdiv.innerHTML = "";

  for (element of array) {
    let pname = element.name;
    let price = element.price;
    let category = element.category;
    let link = element.image;

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
    p_image.addEventListener("mouseover", function () {
      p_image.src =
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
    });
    p_image.addEventListener("mouseout", function () {
      p_image.src = link;
    });

    let cartbtn = document.createElement("button");
    cartbtn.textContent = "Add to Cart";

    cartbtn.addEventListener("click", function () {
      var cartArray = JSON.parse(localStorage.getItem("Cart Products"));
      cartbtn.textContent = "Added to Cart";
      cartbtn.style.color = "green";
      let obj = {
        pname: pname,
        price: price,
        category: category,
        link: link,
      };
      if (cartArray == null) {
        cartArray = [obj];
      } else {
        cartArray.push(obj);
      }
      localStorage.setItem("Cart Products", JSON.stringify(cartArray));
    });
    cartbtn.addEventListener("mouseout", function () {
      cartbtn.textContent = "Add to Cart";
      cartbtn.style.color = "black";
    });

    div.append(p_image, p_name, p_price, cartbtn);

    productdiv.append(div);
  }
}

function sortltoh() {
  let list = JSON.parse(localStorage.getItem("Jewels"));
  var newArray = list.sort(function (a, b) {
    return a.price - b.price;
  });
  showProducts(newArray);
}

function sorthtol() {
  let list = JSON.parse(localStorage.getItem("Jewels"));
  var sorted = list.sort(function (a, b) {
    return b.price - a.price;
  });
  showProducts(sorted);
}

var _0to5kdd = document.getElementById("0to5000");
_0to5kdd.addEventListener("select", function () {
  console.log("True");
});

showProducts(productsList);
