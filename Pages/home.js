import fetching from "./../data/index.js";

let products = [];

fetching("products")
  .then((data) => {
    for (var i = 0; i < data.products.length; i++) {
      products.push(data.products[i]);
    }
  })
  .catch((err) => alert(err));

export default function HomePage() {
  return `
    <div class="home-page">
        <div id="home-slider" class="home-slider">
            <div id="slider" class="slider">
                <img id="sliderImg" src="./../imgs/slide-01.jpg" alt="img1">
                <div class="sliderBtns">
                    <div class="container">
                        <div id="left">
                            <i class="fa-solid fa-caret-left"></i>
                        </div>
                        <div class="slidertext">
                            <p id="homep">Woman Collection 2025</p>
                            <h2 id="homeh">New Season</h2>
                            <button id="shopBtn">SHOP NOW</button>
                        </div>
                    </div>
                    <div id="right">
                        <i class="fa-solid fa-caret-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <div class="inner">
                    <div class="cardtext">
                        <h2>Women</h2>
                        <p>Spring 2025</p>
                    </div>
                    <div class="shopnow">
                    <p class="cat-btn">SHOP NOW</p>
                    </div>
                    <img src="imgs/banner-01.jpg" alt="banner1">
                </div>
            </div>
        <div class="card">
            <div class="inner">
                <div class="cardtext">
                    <h2>Men</h2>
                    <p>Spring 2025</p>
                </div>
                <div class="shopnow">
                    <p class="cat-btn">SHOP NOW</p>
                </div>
                <img src="imgs/banner-02.jpg" alt="banner1">
            </div>
        </div>
        <div class="card">
            <div class="inner">
                <div class="cardtext">
                    <h2>Accessories</h2>
                    <p>New Trend</p>
                </div>
                <div class="shopnow">
                    <p class="cat-btn">SHOP NOW</p>
                </div>
                <img src="imgs/banner-03.jpg" alt="banner1">
            </div>
        </div>
    </div>
    <div class="home-products">
        <div class="home-products-header">
            <h2>Products Overview</h2>
        </div>
        <div class="productsnav">
            <div class="productslinks">
                <div class="allprouducts">All Prouducts</div>
                <div class="women">Women</div>
                <div class="men">Men</div>
                <div class="bag">Bags</div>
                <div class="shoes">Shoes</div>
                <div class="watches">watches</div>
            </div>
            <div class="filters">
                <button id="filterbtn" class="btn2"><i class="fa-solid fa-filter"></i> Filter</button>
                <button id="searchbtn" class="btn2"><i class="fa-solid fa-magnifying-glass"></i> search</button>
            </div>
        </div>
        <div class="searcharea hidden"  id="searcharea">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input id="psearch" type="search" class="psearch" placeholder="Search">
        </div>
        <div class="productscards" id="productscards">
            ${products.map((product) => {
              return ` <div class="pcard" data-category=${product.category}>
                    <div class="imginner">
                      <img src=${product.image} alt="product">
                      <button class="pbtn">Quick view</button>
                    </div>
                    <div class="pcardh">
                    <p>${product.name}</p>
                    <span id="wishlist">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                    </svg>
                    </span>
                      </div>
                    <span class="price">$ ${product.price}</span>
                  </div>
                `;
            })}
        </div>
    </div>
</div>
    `;
}
