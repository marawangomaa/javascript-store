export default function CartLogic() {
    let total = 0;

    function renderCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        const cartDiv = document.getElementById("cartItems");
        const totalPrice = document.querySelector(".TotalPrice");

        cartDiv.innerHTML = "";
        total = 0;

        if (cart.length === 0) {
            cartDiv.innerHTML = "<p>No items in cart</p>";
            totalPrice.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
            return;
        }
        else {
            cart.forEach((item) => {
                total += item.price * item.quantity;
                cartDiv.innerHTML += `
                      <div class="cartItem">
                         <img src="${item.images}" width="50" height="auto">
                          ${item.title} (x${item.quantity}) - $${item.price * item.quantity}
                          <button class="removeBtn" data-title="${item.title}">Remove</button>
                      </div>
                      `;
            });
            totalPrice.innerHTML = `<hr><strong>Total: $${total.toFixed(2)}</strong>`;
        }
    }

    document.getElementById("cartItems").addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("removeBtn")) {
            const title = e.target.getAttribute("data-title");
            removeFromCart(title);
        }
    });

    function removeFromCart(title) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let filtteredCart = cart.filter(item => item.title !== title);
        localStorage.setItem("cart", JSON.stringify(filtteredCart));
        renderCart();
        updateCartCount();
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

    document.querySelector(".cartBTN").addEventListener("click", () => {
        SideBareOpen();
    });
    document.querySelector(".cartCloseBtn").addEventListener("click", () => {
        SideBareClose()
    });

    function SideBareOpen() {
        document.getElementsByClassName("sideBareContainer")[0].classList.add("open");
        document.getElementsByClassName("sideBare")[0].classList.add("open");
        renderCart();
    }

    function SideBareClose() {
        document.getElementsByClassName("sideBareContainer")[0].classList.remove("open");
        document.getElementsByClassName("sideBare")[0].classList.remove("open");
    }

    document.querySelector(".checkOutBtn").addEventListener("click", () => {
        redirectToShop()
    });
    function redirectToShop() {
        if (total > 0) {
            window.location.href = "http://127.0.0.1:5501/#/features";
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

}
