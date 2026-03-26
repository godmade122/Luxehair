// Product Database
const products = [
    {
        id: 1,
        name: "Body Wave Extensions",
        category: "extensions",
        texture: "body-wave",
        lengths: [12, 14, 16, 18, 20, 22, 24, 26, 28],
        price: 45000,
        originalPrice: 55000,
        image: "img/Body Wave Extensions.jpg",
        images: [
            "img/Body Wave Extensions.jpg",
            "img/Body Wave Extensions.jpg",
            "img/Body Wave Extensions.jpg",
            "img/Body Wave Extensions.jpg"
        ],
        description: "Silky smooth with natural wave pattern",
        fullDescription: "Transform your look with our premium Body Wave Extensions. Made from 100% virgin human hair, these extensions offer a natural, silky appearance that blends seamlessly with your own hair. Perfect for adding length, volume, or creating stunning styles.",
        features: [
            "100% Premium Human Hair",
            "Silky smooth texture",
            "Can be dyed and styled",
            "Long-lasting with proper care",
            "Comfortable and lightweight",
            "Blends naturally with all hair types"
        ],
        badge: "New",
        rating: 4.5,
        reviews: 128,
        hairType: "100% Human Hair",
        origin: "Brazilian",
        weight: "100g"
    },
    {
        id: 2,
        name: "Curly Wig Collection",
        category: "wig",
        texture: "curly",
        lengths: [14, 16, 18, 20, 22, 24],
        price: 58000,
        originalPrice: 70000,
        image: "img/Curly Wig Collection.jpg",
        images: [
            "img/Curly Wig Collection.jpg",
            "img/Curly Wig Collection.jpg",
            "img/Curly Wig Collection.jpg",
            "img/Curly Wig Collection.jpg"
        ],
        description: "Bouncy curls for a glamorous look",
        fullDescription: "Experience luxury with our stunning Curly Wig Collection. Featuring beautiful, bouncy curls that maintain their shape and volume, these wigs are perfect for a complete transformation or protective styling.",
        features: [
            "Gorgeous curly texture",
            "Pre-styled and ready to wear",
            "Heat resistant",
            "Comfortable lace front design",
            "Long-lasting durability",
            "Various curl patterns available"
        ],
        badge: "Hot",
        rating: 4.7,
        reviews: 156,
        hairType: "Brazilian Hair",
        origin: "Brazil",
        weight: "120g"
    },
    {
        id: 3,
        name: "Straight Hair Extensions",
        category: "extensions",
        texture: "straight",
        lengths: [16, 18, 20, 22, 24, 26, 28, 30],
        price: 52000,
        originalPrice: 65000,
        image: "img/Straight Hair Extensions.jpg",
        images: [
            "img/Straight Hair Extensions.jpg",
            "img/Straight Hair Extensions.jpg",
            "img/Straight Hair Extensions.jpg",
            "img/Straight Hair Extensions.jpg"
        ],
        description: "Sleek and versatile for any style",
        fullDescription: "Achieve the perfect sleek look with our premium Straight Hair Extensions. Virgin human hair with a silky finish that can be styled straight or curled for versatility.",
        features: [
            "100% Virgin Human Hair",
            "Silky straight texture",
            "Heat styleable",
            "Can be dyed and permed",
            "Lasts 6-12 months with proper care",
            "Blends seamlessly"
        ],
        badge: "Premium",
        rating: 4.6,
        reviews: 142,
        hairType: "Virgin Hair",
        origin: "Peru",
        weight: "110g"
    },
    {
        id: 4,
        name: "Deep Wave Extensions",
        category: "extensions",
        texture: "deep-wave",
        lengths: [14, 16, 18, 20, 22, 24, 26],
        price: 48000,
        originalPrice: 60000,
        image: "img/Deep Wave Extensions.jpg",
        images: [
            "img/Deep Wave Extensions.jpg",
            "img/Deep Wave Extensions.jpg",
            "img/Deep Wave Extensions.jpg",
            "img/Deep Wave Extensions.jpg"
        ],
        description: "Rich, textured waves with volume",
        fullDescription: "Create stunning wave patterns with our Deep Wave Extensions. The deep texture adds volume and movement while maintaining a natural appearance.",
        features: [
            "Rich deep wave pattern",
            "Adds instant volume",
            "100% human hair",
            "Maintains curl pattern",
            "Perfect for protective styling",
            "Durable and long-lasting"
        ],
        badge: "",
        rating: 4.4,
        reviews: 98,
        hairType: "100% Human Hair",
        origin: "Indian",
        weight: "105g"
    },
    {
        id: 5,
        name: "Loose Wave Wig",
        category: "wig",
        texture: "loose-wave",
        lengths: [12, 14, 16, 18, 20, 22],
        price: 50000,
        originalPrice: 62000,
        image: "https://via.placeholder.com/300x350/e8c8c0/8b6f64?text=Loose+Wave",
        images: [
            "https://via.placeholder.com/500x600/e8c8c0/8b6f64?text=Loose+Wave+1",
            "https://via.placeholder.com/500x600/e8c8c0/8b6f64?text=Loose+Wave+2",
            "https://via.placeholder.com/500x600/e8c8c0/8b6f64?text=Loose+Wave+3",
            "https://via.placeholder.com/500x600/e8c8c0/8b6f64?text=Loose+Wave+4"
        ],
        description: "Elegant waves for a soft, romantic look",
        fullDescription: "Perfect for a romantic and elegant look, our Loose Wave Wig features soft, flowing waves that are ready to wear.",
        features: [
            "Soft loose wave pattern",
            "Pre-styled wig",
            "Adjustable cap size",
            "Heat resistant",
            "Easy to maintain",
            "Comfortable all-day wear"
        ],
        badge: "",
        rating: 4.3,
        reviews: 76,
        hairType: "Synthetic/Human Blend",
        origin: "Multiple",
        weight: "115g"
    },
    {
        id: 6,
        name: "Kinky Curly Extensions",
        category: "extensions",
        texture: "kinky",
        lengths: [10, 12, 14, 16, 18, 20],
        price: 46000,
        originalPrice: 58000,
        image: "https://via.placeholder.com/300x350/d8c8d0/8b6f64?text=Kinky+Curly",
        images: [
            "https://via.placeholder.com/500x600/d8c8d0/8b6f64?text=Kinky+Curly+1",
            "https://via.placeholder.com/500x600/d8c8d0/8b6f64?text=Kinky+Curly+2",
            "https://via.placeholder.com/500x600/d8c8d0/8b6f64?text=Kinky+Curly+3",
            "https://via.placeholder.com/500x600/d8c8d0/8b6f64?text=Kinky+Curly+4"
        ],
        description: "Natural-looking kinky curls",
        fullDescription: "Celebrate your natural texture with our Kinky Curly Extensions. These extensions provide authentic kinky curls that blend beautifully with natural textured hair.",
        features: [
            "Authentic kinky texture",
            "100% human hair",
            "Great for protective styling",
            "Blends with natural hair",
            "Low maintenance",
            "Durable and long-lasting"
        ],
        badge: "",
        rating: 4.5,
        reviews: 89,
        hairType: "100% Human Hair",
        origin: "African",
        weight: "100g"
    },
    {
        id: 7,
        name: "Lace Closure",
        category: "closure",
        texture: "straight",
        lengths: [10, 12, 14],
        price: 35000,
        originalPrice: 45000,
        image: "https://via.placeholder.com/300x350/f0e0d8/8b6f64?text=Lace+Closure",
        images: [
            "https://via.placeholder.com/500x600/f0e0d8/8b6f64?text=Lace+Closure+1",
            "https://via.placeholder.com/500x600/f0e0d8/8b6f64?text=Lace+Closure+2",
            "https://via.placeholder.com/500x600/f0e0d8/8b6f64?text=Lace+Closure+3",
            "https://via.placeholder.com/500x600/f0e0d8/8b6f64?text=Lace+Closure+4"
        ],
        description: "Premium lace closure for seamless blending",
        fullDescription: "Complete your hair installation with our premium Lace Closure. Features a transparent lace design for seamless blending with your natural hairline.",
        features: [
            "Transparent lace",
            "Seamless blending",
            "4x4 size",
            "Pre-plucked hairline",
            "Adjustable straps",
            "Swiss lace quality"
        ],
        badge: "Popular",
        rating: 4.6,
        reviews: 167,
        hairType: "100% Human Hair",
        origin: "Brazilian",
        weight: "30g"
    },
    {
        id: 8,
        name: "Premium Frontal",
        category: "closure",
        texture: "body-wave",
        lengths: [12, 14, 16],
        price: 65000,
        originalPrice: 85000,
        image: "https://via.placeholder.com/300x350/e8d0c8/8b6f64?text=Frontal",
        images: [
            "https://via.placeholder.com/500x600/e8d0c8/8b6f64?text=Frontal+1",
            "https://via.placeholder.com/500x600/e8d0c8/8b6f64?text=Frontal+2",
            "https://via.placeholder.com/500x600/e8d0c8/8b6f64?text=Frontal+3",
            "https://via.placeholder.com/500x600/e8d0c8/8b6f64?text=Frontal+4"
        ],
        description: "13x4 lace frontal for full coverage",
        fullDescription: "Get the ultimate full-coverage solution with our 13x4 Lace Frontal. Perfect for creating realistic hairlines and protective styling.",
        features: [
            "13x4 lace coverage",
            "Transparent Swiss lace",
            "Pre-plucked",
            "Full hairline coverage",
            "Adjustable straps",
            "Durable and reusable"
        ],
        badge: "Premium",
        rating: 4.8,
        reviews: 203,
        hairType: "100% Virgin Hair",
        origin: "Brazilian",
        weight: "50g"
    }
];

// Helper function to get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Helper function to filter products
function filterProducts(criteria) {
    return products.filter(product => {
        let match = true;
        
        if (criteria.texture && !criteria.texture.includes(product.texture)) {
            match = false;
        }
        
        if (criteria.type && product.category !== criteria.type) {
            match = false;
        }
        
        if (criteria.minPrice && product.price < criteria.minPrice) {
            match = false;
        }
        
        if (criteria.maxPrice && product.price > criteria.maxPrice) {
            match = false;
        }
        
        if (criteria.length) {
            const hasLength = product.lengths.some(length => criteria.length.includes(length));
            if (!hasLength) match = false;
        }
        
        if (criteria.searchTerm) {
            const search = criteria.searchTerm.toLowerCase();
            const matchesName = product.name.toLowerCase().includes(search);
            const matchesDesc = product.description.toLowerCase().includes(search);
            if (!matchesName && !matchesDesc) match = false;
        }
        
        return match;
    });
}

// Cart management
class Cart {
    constructor() {
        this.items = this.loadCart();
    }
    
    loadCart() {
        const saved = localStorage.getItem('luxehair_cart');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveCart() {
        localStorage.setItem('luxehair_cart', JSON.stringify(this.items));
        this.updateCartCount();
    }
    
    addItem(product, quantity = 1, length = null, color = null) {
        const existingItem = this.items.find(item => 
            item.id === product.id && item.length === length && item.color === color
        );
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: quantity,
                length: length,
                color: color
            });
        }
        
        this.saveCart();
    }
    
    removeItem(productId, length, color) {
        this.items = this.items.filter(item => 
            !(item.id === productId && item.length === length && item.color === color)
        );
        this.saveCart();
    }
    
    updateQuantity(productId, length, color, quantity) {
        const item = this.items.find(item => 
            item.id === productId && item.length === length && item.color === color
        );
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
        }
    }
    
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    clear() {
        this.items = [];
        this.saveCart();
    }
    
    updateCartCount() {
        const counts = document.querySelectorAll('.cart-count');
        counts.forEach(el => {
            el.textContent = this.getItemCount();
        });
    }
}

// Create global cart instance
const cart = new Cart();
cart.updateCartCount();
