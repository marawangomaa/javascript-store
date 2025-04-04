export default function Footer() {
  return `
    <footer>
      <div class="container">
        <div class="categories">
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Woman</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>
        <div class="help">
          <h2>Help</h2>
          <ul>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div class="contact">
          <h2>Get in Touch</h2>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div class="icons">
            <span>
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i class="fa-brands fa-facebook-messenger"></i>
            </span>
            <span>
              <i class="fa-brands fa-pinterest"></i>
            </span>
          </div>
        </div>
        <div class="newsLetter">
          <h2>NewsLetter</h2>
          <input type="email" placeholder="email@email.com" />
          <button>Subscribe</button>
        </div>
      </div>
      <div class="svgs">
        <span>
        <i class="fa-brands fa-cc-visa"></i>
        </span>
        <span>
        <i class="fa-solid fa-money-check"></i>
        </span>
        <span>
        <i class="fa-solid fa-money-check-dollar"></i>
        </span>
        <span>
        <i class="fa-brands fa-cc-mastercard"></i>
        </span>
      </div>
      <div class="copyright">
        <p>Copyright &copy; 2025 All rights reserved | ITI</p>
      </div>
    </footer>
  `;
}
