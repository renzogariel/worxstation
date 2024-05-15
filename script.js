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
    const cartTotalItems = document.getElementById('cart-total-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = `Total Amount: $${total}`;
    cartTotalItems.innerText = `Total Items: ${cart.length}`;
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

document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('product-details');
    if (productDetails) {
        const urlParams = new URLSearchParams(window.location.search);
        const productName = urlParams.get('product');
        const productData = getProductDetails(productName);
        if (productData) {
            productDetails.innerHTML = `
                <img src="${productData.image}" alt="${productData.name}">
                <h3>${productData.name}</h3>
                <p>$${productData.price}</p>
                <button onclick="addToCart('${productData.name}', ${productData.price})">Add to Cart</button>
            `;
        }
    }
});

function getProductDetails(productName) {
    const products = {
        "Fridge": {
            name: 'Fridge',
            price: 500,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\fridge.jpg'
        },
        "Oven": {
            name: 'Oven',
            price: 300,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\oven.jpg'
        },
        "WashingMachine": {
            name: 'Washing Machine',
            price: 700,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\washing machine.jpg'
        },
        "Blender": {
            name: 'Blender',
            price: 200,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\blender.jpg'
        },
        "Air Fryer": {
            name: 'Air Fryer',
            price: 700,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\airfryer.jpg'
        },
        "Television": {
            name: 'Television',
            price: 2500,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\rv.jpg'
        },
        "JBL Bluetooth Speaker": {
            name: 'JBL Bluetooth Speaker',
            price: 350,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\jbl.jpg'
        },
        "LG Split Type Aircon": {
            name: 'LG Split Type Aircon',
            price: 1150,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\LG.jpg'
        },
        "Range": {
            name: 'Range',
            price: 1000,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\Kalan.jpg'
        },
        "Dryer": {
            name: 'Dryer',
            price: 1150,
            image: 'C:\\Users\\Dell\\OneDrive\\Documents\\Website Test\\dryer.jpg'
        }
    };
    return products[productName];
}
