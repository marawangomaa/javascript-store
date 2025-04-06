window.onscroll = function () {
  if (window.scrollY > 50) {
    document.getElementsByTagName("header")[0].classList.add("fixed");
  } else {
    document.getElementsByTagName("header")[0].classList.remove("fixed");
  }
};

export default function Header() {
  return `
    <header>
      <div class="logo">
        <h2><a href="/" class="nav-link">COZA<span>STORE</span></a></h2>
      </div>
      <div id="menu" class="menu">
        <ul>
          <li><a href="/#/home" class="nav-link">Home</a></li>
          <li><a href="/#/shop" class="nav-link">Shop</a></li>
          <li><a href="/#/features" class="nav-link">Features<span class="badge">HOT</span></a></li>
          <li><a href="/#/blog" class="nav-link">Blog</a></li>
          <li><a href="/#/about" class="nav-link">About</a></li>
          <li><a href="/#/contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
      <div class="icons">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            />
          </svg>
        </a>
        
        <button class="cartBTN">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            />
          </svg>
          <span class="cartCountSpan" id="cartCount">0</span>
        </button>

        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path
              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
            />
          </a>
          <a id="bars">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
          </a>
        </span>
      </div>

      <div class="sideBareContainer">
        <div class="sideBare">
          <div class="CartCaption">
            <h2>YOUR CART</h2>
            <button class="cartCloseBtn"><svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg></button>
          </div>
          <div class="listOfItem" id="cartItems"></div>
          <div class="sideBareCheckOut">
            <div class="TotalPrice"></div>
            <button class="checkOutBtn" onclick="redirectToShop()">CHECK OUT</button>
          </div>
        </div>
      </div>

    </header>
  `;
}
