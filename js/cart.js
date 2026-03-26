// Cart Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    setupCartEvents();
    loadRecommendedProducts();
});

function displayCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    const emptyCart = document.getElementById('emptyCart');
    const itemCount = document.getElementById('itemCount');
    
    if (cart.isEmpty()) {
        cartItemsList.innerHTML = '';
        emptyCart.style.display = 'block';
        updateOrderSummary();
        return;
    }
    
    emptyCart.style.display = 'none';
    itemCount.textContent = cart.getItemCount();
    
    cartItemsList.innerHTML = cart.items.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-specs">
                    ${item.length ? `Length: ${item.length}"` : ''}
                    ${item.color ? `<br>Color: ${item.color}` : ''}
                </div>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-price">₦${(item.price * item.quantity).toLocaleString()}</div>
                <div class="cart-item-qty">
                    <button class="cart-qty-btn" onclick="updateQty(${index}, ${item.quantity - 1})">−</button>
                    <input type="number" value="${item.quantity}" min="1" max="10" readonly>
                    <button class="cart-qty-btn" onclick="updateQty(${index}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item-btn" onclick="removeItem(${index})" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    updateOrderSummary();
}

window.updateQty = function(index, newQty) {
    if (newQty < 1 || newQty > 10) return;
    const item = cart.items[index];
    cart.updateQuantity(item.id, item.length, item.color, newQty);
    displayCart();
}

window.removeItem = function(index) {
    const item = cart.items[index];
    cart.removeItem(item.id, item.length, item.color);
    showNotification('Item removed from cart', 'success');
    displayCart();
}

function updateOrderSummary() {
    const subtotal = cart.getTotal();
    const shippingCost = subtotal >= 50000 ? 0 : 2500;
    const total = subtotal + shippingCost;
    
    document.getElementById('subtotal').textContent = '₦' + subtotal.toLocaleString();
    document.getElementById('shipping').textContent = shippingCost > 0 ? '₦' + shippingCost.toLocaleString() : 'Free';
    document.getElementById('total').textContent = '₦' + total.toLocaleString();
}

function setupCartEvents() {
    const applyCoupon = document.getElementById('applyCoupon');
    const couponInput = document.getElementById('couponInput');
    
    if (applyCoupon) {
        applyCoupon.addEventListener('click', () => {
            const code = couponInput.value.toUpperCase();
            const discounts = {
                'WELCOME10': 0.10,
                'SAVE20': 0.20,
                'LUXE15': 0.15
            };
            
            if (discounts[code]) {
                const subtotal = cart.getTotal();
                const discountAmount = subtotal * discounts[code];
                
                document.getElementById('discountItem').style.display = 'flex';
                document.getElementById('discountAmount').textContent = '-₦' + Math.round(discountAmount).toLocaleString();
                
                const shippingCost = subtotal >= 50000 ? 0 : 2500;
                const total = subtotal - discountAmount + shippingCost;
                document.getElementById('total').textContent = '₦' + Math.round(total).toLocaleString();
                
                showNotification('Coupon applied successfully!', 'success');
            } else {
                showNotification('Invalid coupon code', 'error');
            }
        });
    }
}

function loadRecommendedProducts() {
    const container = document.getElementById('recommendedProducts');
    if (!container) return;
    
    // Get products not in cart
    const cartIds = cart.items.map(item => item.id);
    const recommended = products.filter(p => !cartIds.includes(p.id)).slice(0, 4);
    
    container.innerHTML = recommended.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="price">₦${product.price.toLocaleString()}</span>
                    <button class="view-btn" onclick="addRecommendedToCart(${product.id})">Add</button>
                </div>
            </div>
        </div>
    `).join('');
}

window.addRecommendedToCart = function(productId) {
    const product = getProductById(productId);
    if (product) {
        cart.addItem(product, 1);
        showNotification(`${product.name} added to cart!`, 'success');
        displayCart();
        loadRecommendedProducts();
    }
}
