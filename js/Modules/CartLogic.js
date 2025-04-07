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
        cart.forEach((item) => {
            total += item.price * item.quantity;

            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cartItem");

            itemDiv.innerHTML += `
                        <div class="cartcontainer">
                        
                            <div class="cartItemDetails">
                                <img src="${item.images}" width="50" height="auto">
                                ${item.title} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div class="ChangingQuantity">
                                <button class="Increase">Increase</button>
                                <span class="CurrentQuantity">${item.quantity}</span>
                                <button class="Decrease">Decrease</button>
                                <button class="removeBtn" data-title="${item.title}">Remove</button>
                            <div>
                        
                        </div>
                      `;

            const quantitySpan = itemDiv.querySelector(".CurrentQuantity");

            itemDiv.querySelector(".Increase").addEventListener("click", () => {
                Increase(item.title, item.image, item.price, item.category, quantitySpan);
            });

            itemDiv.querySelector(".Decrease").addEventListener("click", () => {
                Decrease(item.titel, quantitySpan);
            });

            itemDiv.querySelector(".removeBtn").addEventListener("click", () => {
                removeFromCart(item.title);
            });

            cartDiv.appendChild(itemDiv);
        });
        totalPrice.innerHTML = `<hr><strong>Total: $${total.toFixed(2)}</strong>`;
    }

    function removeFromCart(name) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let filtteredCart = cart.filter(item => item.title !== name);
        console.log(name);
        localStorage.setItem("cart", JSON.stringify(filtteredCart));
        
        renderCart();
        updateCartCount();
    }

    function Increase(name, image, price, category, quantitySpan) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find(item => item.title === name);

        if (existingItem) {
            existingItem.quantity += 1;
            quantitySpan.innerHTML = existingItem.quantity
        } else {
            cart.push({ name, image, price, category, quantity: 1 });
            quantityElement.innerHTML = 1;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        updateCartCount();
    };

    function Decrease(name, quantityElement) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItemIndex = cart.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            if (cart[existingItemIndex].quantity > 1) {
                cart[existingItemIndex].quantity -= 1;
                quantityElement.innerHTML = cart[existingItemIndex].quantity;
            } else {
                cart.splice(existingItemIndex, 1);
                quantityElement.innerHTML = 0;
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
            updateCartCount();
        };
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
            window.location.href = "http://127.0.0.1:5500/#/cart";
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

}
