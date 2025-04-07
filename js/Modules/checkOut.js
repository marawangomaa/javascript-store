export default function renderCartShopPage() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    

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
        cart.forEach((item,key) => {
            total += item.price * item.quantity;
            if (tableBody) {
                tableBody.innerHTML += `
          <div class="inTableTitle" data-key="${key}"${console.log(key)}>
          <img src="${item.images}" width="50" height="auto">
          ${item.title}
          </div>
          <div>$ ${item.price}</div>
          <div class="quantity">
          <span id="qminus"><i class="fa-solid fa-minus"></i></span>
          ${item.quantity}
          <span id="qadd"><i class="fa-solid fa-plus"></i></span>
          </div>
          <div>$ ${item.price * item.quantity}</div>
      `;
            }
        });
        if (totalPrice) {
            totalPrice.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
        }
    }
}