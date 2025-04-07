export default function FeaturesPage(){
    return `
    <div class="checkOutSession">
        <div class="cartTable">
            <!-- Table Header -->
            <div class="cartHeader">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
            </div>

            <!-- Table Body -->
            <div class="cartBody" id="productsDetails">

            </div>

            <!-- Table Footer -->
            <div class="cartFooter">
                <div class="coupon">
                    <input placeholder="Enter coupon code" type="text">
                    <button class="checkOutBtn">APPLY COUPON</button>
                </div>
                <button id="clearcard" class="checkOutBtn">Clear CART</button>
            </div>
        </div>

        <div class="cartTotalPrices">
            <h3>CART TOTALS</h3>
            <hr>
            <div class="shippingDetails">
                <h4>
                    Shipping:
                </h4>
                <div class="inputDetails">
                    <p>There are no shipping methods available. Please double check your address, or contact us if you
                        need
                        any help.
                    </p>
                    <label for="">Calculate Shipping</label>
                    <select name="" id="">
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="EG">EG</option>
                    </select>
                    <input type="text" name="" id="" placeholder="State / country">
                    <input type="text" name="" id="" placeholder="Postcode / Zip">
                </div>
            </div>
            <hr>
            <div class="finalPrice">
                <div class="shopTotal"></div>
                <button onclick="clearCart()" class="checkOutBtn">CHECK OUT</button>
            </div>
        </div>
    </div>
    `;
}