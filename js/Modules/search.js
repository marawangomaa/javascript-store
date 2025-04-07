const barsBtn = document.getElementById("bars");

barsBtn.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

const cards = document.querySelectorAll(".pcard");
const searchBtn = document.getElementById("searchbtn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    document.getElementById("searcharea").classList.toggle("hidden");
  });
  document.getElementById("psearch").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    cards.forEach((card) => {
      const titleElem = card.querySelector(".pcardh p");
      if (!titleElem) return;
      const titleText = titleElem.textContent.toLowerCase();

      if (titleText.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

const productLinks = document.querySelectorAll(".productslinks div");

if (productLinks) {
  // productLinks[0].classList.add("active");
  productLinks.forEach((link) => {
    link.addEventListener("click", function () {
      productLinks.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
    });
  });
} else {
  console.log("none");
}

for (let i = 0; i < productLinks.length; i++) {
  productLinks[i].addEventListener("click", function () {
    const category = this.classList[0];
    catFilter(category);
  });
}

function catFilter(cat) {
  if (cat.toLowerCase() === "all") {
    cards.forEach((card) => {
      card.style.display = "block";
    });
  } else {
    const catValue = cat.toLowerCase();
    console.log(cards);
    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (cardCategory && cardCategory.toLowerCase() === catValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
      console.log(cardCategory);
    });
  }
}

cards.forEach((card) => {
  const cardCategory = card.getAttribute("data-category");
  const cardTitle = card.getAttribute("data-title");
  const cardImages = card.getAttribute("data-images");
  const cardPrice = card.getAttribute("data-price");

  card.querySelector(".addToCart").addEventListener("click", () => {
    addToCart(cardTitle, cardImages, cardPrice, cardCategory);
  });
});
cards.forEach((card) => {
  const cardCategory = card.getAttribute("data-category");
  const cardTitle = card.getAttribute("data-title");
  const cardImages = card.getAttribute("data-images");
  const cardPrice = card.getAttribute("data-price");
  const cardId = card.getAttribute("data-id");
  console.log(card.querySelector("#addToQuickView"));
  console.log(cardCategory);
  console.log(cardPrice);
  console.log(cardImages);
  console.log(cardTitle);

  card.querySelector("#addToQuickView").addEventListener("click", () => {
    OpenQuickView();
    addToQuickView(cardTitle, cardImages, cardPrice, cardCategory, cardId);
  });
});

function addToQuickView(name, image, price, description , id) {
  const details = document.querySelector(".productDetailsCaption");
  const display = document.querySelector(".itemImageDisplay");
  const selection = document.querySelector(".productSelectionInPop");

  if (!details || !display || !selection) {
    console.error("Quick view DOM elements are missing.");
    return;
  }

  details.innerHTML = "";
  display.innerHTML = "";
  selection.innerHTML = "";

  let imageDisplay = document.createElement("div");
  imageDisplay.innerHTML = `
<img src="${image}"/>
`;
  let productDetails = document.createElement("div");
  productDetails.innerHTML = `
<h2>${name}</h2>
<p>${price}</p>
<p>${description}</p>
`;
  let productSelection = document.createElement("div");
  productSelection.innerHTML = `
<div>
  <h4>
    Size
  </h4>
  <select name="size" id="sizeSelection">
    <option value="" disabled selected>Choose an option</option>
    <option value="sizeS">Size s</option>
    <option value="SizeM">Size M</option>
    <option value="SizeL">Size L</option>
    <option value="SizeXL">Size XL</option>
  </select>
</div>
<div>
  <h4>
    Color
  </h4>
  <select name="color" id="colorSelection">
    <option value="" disabled selected>Choose an option</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="white">White</option>
    <option value="grey">Grey</option>
  </select>
</div>
<button class="addToCartPopUp checkOutBtn">ADD TO CART</button>
`;
  let addToCartBTN = productSelection.querySelector(".addToCartPopUp");
  if (addToCartBTN) {
    addToCartBTN.addEventListener("click", () => {
      addToCart(name, image, price, "unknown");
    });
  }

  selection.appendChild(productSelection);
  details.appendChild(productDetails);
  display.appendChild(imageDisplay);
}
function OpenQuickView() {
  document.getElementsByClassName("quickViewPopUp")[0].classList.add("popUp");
  document.getElementsByClassName("quickViewContent")[0].classList.add("popUp");
}

const clearCard = document.getElementById("clearcard");
console.log(clearCard);
if (clearCard) {
  clearCard.addEventListener("click", () => {
    clearCart();
  });
}

function clearCart() {
  localStorage.removeItem("cart");
  console.log("hi");
  window.location.href = "/#/features";
}

const qAdd = document.getElementById("qadd");
const qMinus = document.getElementById("qminus");

const qAdds = document.querySelectorAll("#qadd")

// for(let i = 0; i < qAdds.length; i++) {
//   qAdds[i].addEventListener("click", () => {
//     const itemId = qAdds[0].getAttribute("data-price");
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     console.log(itemId);
//     console.log(cart);
//     console.log(qAdds[i]);
    
//     cart = cart.map(item => {
//       if (item.price == itemId) {
//         item.quantity += 1;
//       }
//       return item;
//     });

//     localStorage.setItem("cart", JSON.stringify(cart));
//     // location.reload();
//   })
// }
if(qAdd){
  qAdd.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((item) => {
      item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });
}

// document.querySelectorAll("#qadd").forEach(button => {
//   button.addEventListener("click", () => {
//     const itemId = button.getAttribute("data-id");
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     console.log(itemId);
//     console.log(cart);
//     console.log(button);
    
//     cart = cart.map(item => {
//       if (item.id == itemId) {
//         item.quantity += 1;
//       }
//       return item;
//     });

//     localStorage.setItem("cart", JSON.stringify(cart));
//     // location.reload();
//   });
// });

if(qMinus){
  qMinus.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((item) => {
      item.quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });
}

document.querySelector("#closeQuickViewBTN").addEventListener("click", () => {
  closeQuickView();
});
function closeQuickView() {
  document
    .getElementsByClassName("quickViewPopUp")[0]
    .classList.remove("popUp");
  document
    .getElementsByClassName("quickViewContent")[0]
    .classList.remove("popUp");
}

function addToCart(title, images, price, category , id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existingItem = cart.find((item) => item.title === title);

  console.log(title, images, price, category , id);

  let users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);
  console.log(users[0].isLoggedIn);

  for (let i = 0; i < users.length; i++) {
    if (users[i].isLoggedIn) {
      console.log(users[i].username);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ title, images, price, category, quantity: 1 , id});
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      break;
    } else {
      window.location.href = "/#/login";
    }
  }
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  let cartCount = document.querySelector("#cartCount");

  if (totalItems > 0 && cartCount) {
    cartCount.innerHTML = totalItems;
    cartCount.style.display = "inline-block";
  } else {
    cartCount.style.display = "none";
  }
}
updateCartCount();

export default catFilter();
