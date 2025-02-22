let cart = []; // Αποθήκευση αντικειμένων του καλαθιού

function addToCart(id, name, price) {
    cart.push({ id, name, price }); // Προσθήκη αντικειμένου στο καλάθι
    updateCartUI();
}

function updateCartUI() {
    let cartIcon = document.querySelector("nav a[href='#'] img");
    cartIcon.setAttribute("title", `Καλάθι (${cart.length})`); // Ενημέρωση αριθμού αντικειμένων
}

function showCart() {
    let cartContainer = document.querySelector("#cart-container");

    if (!cartContainer) {
        console.error("Το #cart-container δεν υπάρχει στο HTML!");
        return;
    }

    cartContainer.classList.toggle("active"); // Εμφάνιση/απόκρυψη

    let cartItemsHTML = cart.map(item =>
        `<p>${item.name} - ${item.price}€</p>`).join("");

    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    cartContainer.innerHTML = `
        <h2>Καλάθι</h2>
        ${cartItemsHTML}
        <hr>
        <p><strong>Συνολική Τιμή: ${totalPrice}€</strong></p>
        <button onclick="hideCart()">Κλείσιμο</button>
    `;
}

function hideCart() {
    document.querySelector("#cart-container").classList.remove("active");
}
