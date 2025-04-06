export default function renderCartShopPage() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let tableBody = document.querySelector("#productsDetails");
    if (tableBody) {
        tableBody.innerHTML = "";
    }

    let totalPrice = document.querySelector(".shopTotal");
    let total = 0;

    if (cart.length === 0 && tableBody) {
        tableBody.innerHTML = "<p>No items in cart</p>";
        totalPrice.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
        return;
    } else {
        cart.forEach((item) => {
            total += item.price * item.quantity;
            if (tableBody) {
                tableBody.innerHTML += `
          <div class="inTableTitle">
          <img src="${item.images}" width="50" height="auto">
          ${item.title}
          </div>
          <div>$ ${item.price}</div>
          <div>${item.quantity}</div>
          <div>$ ${item.price * item.quantity}</div>
      `;
            }
        });
        if (totalPrice) {
            totalPrice.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
        }
    }
}