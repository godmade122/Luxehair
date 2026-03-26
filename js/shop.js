// Shop Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const itemsPerPage = 12;
    let filteredProducts = [...products];
    
    // Initialize products grid
    displayProducts();
    
    // Filter event listeners
    document.querySelectorAll('.texture-filter, .length-filter, .type-filter').forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
    
    // Price range filter
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            document.getElementById('priceValue').textContent = e.target.value;
            applyFilters();
        });
    }
    
    // Sort dropdown
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        sortBy.addEventListener('change', (e) => {
            sortProducts(e.target.value);
            currentPage = 1;
            displayProducts();
        });
    }
    
    // Clear filters button
    const clearFilters = document.getElementById('clearFilters');
    if (clearFilters) {
        clearFilters.addEventListener('click', () => {
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            priceRange.value = 150000;
            document.getElementById('priceValue').textContent = '150000';
            filteredProducts = [...products];
            currentPage = 1;
            displayProducts();
        });
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            filteredProducts = filterProducts({ searchTerm });
            currentPage = 1;
            displayProducts();
        });
    }
    
    function applyFilters() {
        const textures = Array.from(document.querySelectorAll('.texture-filter:checked')).map(el => el.value);
        const lengths = Array.from(document.querySelectorAll('.length-filter:checked')).map(el => parseInt(el.value));
        const types = Array.from(document.querySelectorAll('.type-filter:checked')).map(el => el.value);
        const maxPrice = parseInt(priceRange.value);
        
        const criteria = {};
        if (textures.length > 0) criteria.texture = textures;
        if (lengths.length > 0) criteria.length = lengths;
        if (types.length > 0) criteria.type = types[0];
        if (maxPrice < 150000) criteria.maxPrice = maxPrice;
        
        if (Object.keys(criteria).length === 0) {
            filteredProducts = [...products];
        } else {
            filteredProducts = filterProducts(criteria);
        }
        
        currentPage = 1;
        displayProducts();
    }
    
    function sortProducts(sortType) {
        switch(sortType) {
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                filteredProducts.sort((a, b) => b.reviews - a.reviews);
                break;
            default:
                filteredProducts.sort((a, b) => a.badge ? -1 : 1);
        }
    }
    
    function displayProducts() {
        const grid = document.getElementById('productsGrid');
        const noProducts = document.getElementById('noProducts');
        const pagination = document.getElementById('pagination');
        
        if (filteredProducts.length === 0) {
            grid.innerHTML = '';
            noProducts.style.display = 'block';
            pagination.innerHTML = '';
            document.getElementById('productCount').textContent = '0';
            return;
        }
        
        noProducts.style.display = 'none';
        
        // Calculate pagination
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageProducts = filteredProducts.slice(start, end);
        
        // Display products
        grid.innerHTML = pageProducts.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.badge ? `<span class="badge${product.badge === 'Hot' ? ' hot' : ''}">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-specs">
                        <span>Lengths: ${product.lengths[0]}"-${product.lengths[product.lengths.length - 1]}"</span>
                        <span>${product.hairType}</span>
                    </div>
                    <div class="product-footer">
                        <span class="price">₦${product.price.toLocaleString()}</span>
                        <a href="product-detail.html?id=${product.id}" class="view-btn">View Details</a>
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('productCount').textContent = filteredProducts.length;
        
        // Display pagination
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `pagination-btn${i === currentPage ? ' active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                displayProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pagination.appendChild(btn);
        }
    }
    
    // Reset filters button (if showing no products)
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            priceRange.value = 150000;
            document.getElementById('priceValue').textContent = '150000';
            filteredProducts = [...products];
            currentPage = 1;
            displayProducts();
        });
    }
});
