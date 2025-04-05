const barsBtn = document.getElementById("bars");

barsBtn.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  if(menu.style.display === "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
})

const cards = document.querySelectorAll(".pcard");
const searchBtn = document.getElementById("searchbtn")

if(searchBtn){
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

if(productLinks){
  // productLinks[0].classList.add("active");
productLinks.forEach((link) => {
  link.addEventListener("click", function () {
    productLinks.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});
} else{
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





export default catFilter();
