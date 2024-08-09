const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        description: 'High-quality wireless headphones.',
        imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 699.99,
        description: 'Latest smartphone with a powerful processor.',
        imageUrl: 'https://images.unsplash.com/photo-1495434942214-9b525bba74e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        name: 'Smartwatch',
        price: 199.99,
        description: 'Stylish smartwatch with fitness tracking.',
        imageUrl: 'https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        name: 'Gaming Laptop',
        price: 1299.99,
        description: 'High-performance gaming laptop.',
        imageUrl: 'https://images.unsplash.com/photo-1649269234296-f5130117f4ab?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 5,
        name: 'Bluetooth Speaker',
        price: 49.99,
        description: 'Portable Bluetooth speaker.',
        imageUrl: 'https://images.unsplash.com/photo-1518671678551-911467efe539?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 6,
        name: '4K Monitor',
        price: 349.99,
        description: 'Ultra HD 4K monitor.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 7,
        name: 'Wireless Mouse',
        price: 29.99,
        description: 'Ergonomic wireless mouse.',
        imageUrl: 'https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 8,
        name: 'Mechanical Keyboard',
        price: 89.99,
        description: 'Durable mechanical keyboard.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];


const productGrid = document.getElementById('productGrid');
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.querySelector('.total-price');
const checkoutFormContainer = document.getElementById('checkoutFormContainer');
const checkoutForm = document.getElementById('checkoutForm');
const confirmationMessage = document.getElementById('confirmationMessage');

let cart = [];

// Dynamically generate product grid
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.setAttribute('data-id', product.id);
    productElement.setAttribute('data-name', product.name);
    productElement.setAttribute('data-price', product.price);

    productElement.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;

    productGrid.appendChild(productElement);
});

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('li');
        cartItemElement.innerHTML = `
            ${item.name} - $${item.price} x ${item.quantity}
            <button class="increase-quantity" data-id="${item.id}">+</button>
            <button class="decrease-quantity" data-id="${item.id}">-</button>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = parseInt(this.closest('.product').getAttribute('data-id'));
        addToCart(productId);
    });
});

// Event delegation for cart item buttons
cartItemsContainer.addEventListener('click', function(event) {
    const button = event.target;

    if (button.classList.contains('increase-quantity')) {
        const productId = parseInt(button.getAttribute('data-id'));
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) cartItem.quantity += 1;
        updateCartUI();
    }

    if (button.classList.contains('decrease-quantity')) {
        const productId = parseInt(button.getAttribute('data-id'));
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity -= 1;
            if (cartItem.quantity <= 0) {
                cart = cart.filter(item => item.id !== productId);
            }
            updateCartUI();
        }
    }

    if (button.classList.contains('remove-item')) {
        const productId = parseInt(button.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
    }
});

// Event listener for Checkout button
document.querySelector('.checkout').addEventListener('click', function() {
    checkoutFormContainer.style.display = 'block';
});

// Event listener for Checkout Form submission
checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate form submission
    checkoutFormContainer.style.display = 'none';
    confirmationMessage.style.display = 'block';
});
