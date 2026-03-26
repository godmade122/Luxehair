// Product Detail Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = getProductById(productId);
    
    if (!product) {
        window.location.href = 'shop.html';
        return;
    }
    
    // Display product info
    displayProduct(product);
    displayTabs();
    setupEventListeners(product);
    loadRelatedProducts(product);
});

function displayProduct(product) {
    // Breadcrumb
    document.getElementById('productBreadcrumb').textContent = product.name;
    
    // Main image
    document.getElementById('mainImage').src = product.images[0];
    
    // Thumbnails
    const thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = product.images.map((img, index) => `
        <img src="${img}" alt="Product ${index + 1}" onclick="changeMainImage('${img}')">
    `).join('');
    
    // Product info
    document.getElementById('productBadge').textContent = product.badge || 'Sale';
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = '₦' + product.price.toLocaleString();
    document.getElementById('originalPrice').textContent = '₦' + product.originalPrice.toLocaleString();
    
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    document.getElementById('discount').textContent = `-${discount}%`;
    
    document.getElementById('productDescription').textContent = product.description;
    
    // Product specs
    document.getElementById('hairType').textContent = product.hairType;
    document.getElementById('origin').textContent = product.origin;
    document.getElementById('texture').textContent = product.texture.replace('-', ' ');
    document.getElementById('lengths').textContent = `${product.lengths[0]}"-${product.lengths[product.lengths.length - 1]}"`;
    document.getElementById('weight').textContent = product.weight;
    
    // Rating
    const ratingStars = document.querySelectorAll('.rating i');
    const filledStars = Math.floor(product.rating);
    ratingStars.forEach((star, index) => {
        if (index < filledStars) {
            star.classList.add('fas');
        } else if (index === filledStars && product.rating % 1 > 0) {
            star.classList.add('fas');
            star.classList.add('fa-star-half-alt');
        }
    });
    document.querySelector('.rating span').textContent = `${product.rating} (${product.reviews} reviews)`;
    
    // Length options
    const lengthSelect = document.getElementById('lengthSelect');
    product.lengths.forEach(length => {
        const option = document.createElement('option');
        option.value = length;
        option.textContent = `${length} inches`;
        lengthSelect.appendChild(option);
    });
    
    // Full description
    document.getElementById('fullDescription').textContent = product.fullDescription;
    
    // Features list
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
}

function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
}

function displayTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Load reviews and FAQs
    loadReviews();
    loadFAQs();
}

function loadReviews() {
    const reviews = [
        {
            author: 'Zainab M.',
            rating: 5,
            date: '2 weeks ago',
            text: 'The quality is absolutely incredible! The extensions blend perfectly and are so soft.'
        },
        {
            author: 'Amara O.',
            rating: 5,
            date: '1 month ago',
            text: 'Best purchase ever! Fast delivery and excellent customer service.'
        },
        {
            author: 'Chioma N.',
            rating: 4,
            date: '1 month ago',
            text: 'Great quality hair. Takes a bit of time to style but totally worth it.'
        }
    ];
    
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-author">${review.author}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">
                ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

function loadFAQs() {
    const faqs = [
        {
            question: 'How do I care for my hair extensions?',
            answer: 'Wash gently with sulfate-free shampoo, condition regularly, avoid high heat, and store properly when not in use.'
        },
        {
            question: 'How long do the extensions last?',
            answer: 'With proper care, extensions can last 6-12 months. This depends on how often you wear and maintain them.'
        },
        {
            question: 'Can the hair be dyed?',
            answer: 'Yes, virgin human hair can be dyed. We recommend consulting a professional stylist for best results.'
        },
        {
            question: 'What is the return policy?',
            answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with your purchase.'
        },
        {
            question: 'Is shipping available outside Nigeria?',
            answer: 'We currently ship within Nigeria. International shipping options coming soon!'
        }
    ];
    
    const faqContainer = document.getElementById('faqItems');
    faqContainer.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" id="faq-${index}">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">${faq.answer}</div>
        </div>
    `).join('');
}

window.toggleFAQ = function(index) {
    const item = document.getElementById(`faq-${index}`);
    item.classList.toggle('active');
}

function setupEventListeners(product) {
    // Quantity buttons
    const quantityInput = document.getElementById('quantityInput');
    const increaseBtn = document.getElementById('increaseQty');
    const decreaseBtn = document.getElementById('decreaseQty');
    
    increaseBtn.addEventListener('click', () => {
        quantityInput.value = Math.min(10, parseInt(quantityInput.value) + 1);
    });
    
    decreaseBtn.addEventListener('click', () => {
        quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
    });
    
    // Add to cart button
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        const length = document.getElementById('lengthSelect').value;
        const color = document.getElementById('colorSelect').value;
        const quantity = parseInt(quantityInput.value);
        
        if (!length) {
            showNotification('Please select a length', 'error');
            return;
        }
        
        cart.addItem(product, quantity, length, color);
        showNotification(`${product.name} added to cart!`, 'success');
        quantityInput.value = 1;
    });
    
    // Wishlist button
    document.getElementById('wishlistBtn').addEventListener('click', function() {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';
            showNotification('Added to wishlist!', 'success');
        } else {
            this.innerHTML = '<i class="far fa-heart"></i> Wishlist';
            showNotification('Removed from wishlist', 'success');
        }
    });
}

function loadRelatedProducts(currentProduct) {
    const related = products
        .filter(p => p.texture === currentProduct.texture && p.id !== currentProduct.id)
        .slice(0, 4);
    
    const container = document.getElementById('relatedProducts');
    container.innerHTML = related.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-specs">
                    <span>Lengths: ${product.lengths[0]}"-${product.lengths[product.lengths.length - 1]}"</span>
                </div>
                <div class="product-footer">
                    <span class="price">₦${product.price.toLocaleString()}</span>
                    <a href="product-detail.html?id=${product.id}" class="view-btn">View</a>
                </div>
            </div>
        </div>
    `).join('');
}
