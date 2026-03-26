// Checkout Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    displayCheckoutSummary();
    setupPaymentMethods();
    setupShippingOptions();
    setupFormValidation();
});

function displayCheckoutSummary() {
    const itemsContainer = document.getElementById('checkoutItems');
    
    itemsContainer.innerHTML = cart.items.map(item => `
        <div class="summary-item-mini">
            <span class="summary-item-mini-name">
                ${item.name} ${item.length ? `(${item.length}")` : ''}
            </span>
            <span class="summary-item-mini-qty">x${item.quantity}</span>
            <span class="summary-item-mini-price">₦${(item.price * item.quantity).toLocaleString()}</span>
        </div>
    `).join('');
    
    updateCheckoutTotals();
}

function updateCheckoutTotals() {
    const subtotal = cart.getTotal();
    const shippingCost = getSelectedShipping();
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + shippingCost + tax;
    
    document.getElementById('checkoutSubtotal').textContent = '₦' + subtotal.toLocaleString();
    document.getElementById('checkoutShipping').textContent = '₦' + shippingCost.toLocaleString();
    document.getElementById('checkoutTax').textContent = '₦' + tax.toLocaleString();
    document.getElementById('checkoutTotal').textContent = '₦' + total.toLocaleString();
}

function getSelectedShipping() {
    const selected = document.querySelector('input[name="shipping"]:checked');
    if (!selected) return 2500;
    
    const shippingCosts = {
        'standard': 2500,
        'express': 5000,
        'overnight': 10000
    };
    
    return shippingCosts[selected.value] || 2500;
}

function setupShippingOptions() {
    document.querySelectorAll('input[name="shipping"]').forEach(radio => {
        radio.addEventListener('change', updateCheckoutTotals);
    });
}

function setupPaymentMethods() {
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', (e) => {
            // Hide all payment details
            document.getElementById('cardPayment').style.display = 'none';
            document.getElementById('bankPayment').style.display = 'none';
            document.getElementById('paystackPayment').style.display = 'none';
            
            // Show selected payment method
            if (e.target.value === 'card') {
                document.getElementById('cardPayment').style.display = 'block';
            } else if (e.target.value === 'bank') {
                document.getElementById('bankPayment').style.display = 'block';
            } else if (e.target.value === 'paystack') {
                document.getElementById('paystackPayment').style.display = 'block';
            }
        });
    });
    
    // Show card payment by default
    document.getElementById('cardPayment').style.display = 'block';
}

function setupFormValidation() {
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    
    placeOrderBtn.addEventListener('click', () => {
        if (validateForm()) {
            processOrder();
        }
    });
    
    // Billing address same as shipping
    const billingSame = document.getElementById('billingSame');
    if (billingSame) {
        billingSame.addEventListener('change', (e) => {
            // This would be used to auto-fill billing address
            console.log('Billing same as shipping:', e.target.checked);
        });
    }
}

function validateForm() {
    // Check required fields
    const requiredFields = [
        'firstName', 'lastName', 'email', 'phone', 'address',
        'city', 'state', 'country'
    ];
    
    for (let field of requiredFields) {
        const element = document.getElementById(field);
        if (!element || !element.value.trim()) {
            showNotification(`Please fill in ${field.replace(/([A-Z])/g, ' $1')}`, 'error');
            return false;
        }
    }
    
    // Validate email
    const email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    // Validate phone
    const phone = document.getElementById('phone').value;
    if (phone.length < 10) {
        showNotification('Please enter a valid phone number', 'error');
        return false;
    }
    
    // Check payment method
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    if (paymentMethod === 'card') {
        if (!validateCard()) return false;
    }
    
    // Check terms agreement
    if (!document.getElementById('agreeTerms').checked) {
        showNotification('Please agree to the terms and conditions', 'error');
        return false;
    }
    
    return true;
}

function validateCard() {
    const cardName = document.getElementById('cardName').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    
    if (!cardName) {
        showNotification('Please enter cardholder name', 'error');
        return false;
    }
    
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        showNotification('Please enter a valid card number', 'error');
        return false;
    }
    
    if (!expiry.match(/^\d{2}\/\d{2}$/)) {
        showNotification('Please enter expiry in MM/YY format', 'error');
        return false;
    }
    
    if (cvv.length !== 3 || isNaN(cvv)) {
        showNotification('Please enter a valid CVV', 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function processOrder() {
    // Collect order data
    const orderData = {
        id: 'ORD-' + Date.now(),
        customer: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            country: document.getElementById('country').value
        },
        items: cart.items,
        shipping: document.querySelector('input[name="shipping"]:checked').value,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        total: cart.getTotal(),
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    
    // Show success message
    showNotification('Order placed successfully! Redirecting...', 'success');
    
    // Clear cart
    cart.clear();
    
    // Redirect to confirmation page
    setTimeout(() => {
        window.location.href = 'order-confirmation.html?id=' + orderData.id;
    }, 2000);
}

// Format card input
document.addEventListener('DOMContentLoaded', () => {
    const cardInput = document.getElementById('cardNumber');
    if (cardInput) {
        cardInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
            e.target.value = formattedValue;
        });
    }
    
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
});
