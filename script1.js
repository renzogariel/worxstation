let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCartCount();
    alert(`${product} has been added to your cart.`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function showCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    alert('Thank you for your purchase!');
    cart = [];
    updateCartCount();
    showCart();
}
