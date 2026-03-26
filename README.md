# LuxeHair - Premium E-Commerce Website

## 🎀 Overview

LuxeHair is a modern, elegant, and mobile-responsive e-commerce website for a women's hair brand. The website allows customers to browse, filter, and purchase premium hair extensions and wigs with a luxurious shopping experience.

## ✨ Features

### Homepage
- ✅ Luxury and feminine design (soft pink, nude, white, gold accents)
- ✅ Eye-catching hero banner with call-to-action button
- ✅ Featured products section showcasing best sellers
- ✅ "Why Choose Us" section highlighting benefits
- ✅ Customer testimonials carousel
- ✅ Newsletter subscription section
- ✅ Responsive footer with social media links
- ✅ WhatsApp chat button for customer support

### Shop Page
- ✅ Display all products in a responsive grid
- ✅ Advanced filtering by:
  - Hair texture (Straight, Body Wave, Curly, Deep Wave, Loose Wave, Kinky)
  - Hair length (10" to 30")
  - Price range
  - Product type (Extensions, Wigs, Closures)
- ✅ Product search functionality
- ✅ Sorting options (Featured, Newest, Price, Popularity)
- ✅ Pagination for product browsing
- ✅ Product card with quick view option

### Product Details Page
- ✅ Multiple product images with thumbnail carousel
- ✅ Detailed product specifications
- ✅ Customer rating and reviews
- ✅ Length, color, and quantity selection
- ✅ "Add to Cart" button
- ✅ Wishlist functionality
- ✅ Product tabs:
  - Description with detailed features
  - Customer reviews with ratings
  - FAQ section
  - Hair care guide
- ✅ Related products recommendations
- ✅ Trust badges and security information

### Shopping Cart
- ✅ View all cart items with images and details
- ✅ Update quantity for each item
- ✅ Remove items from cart
- ✅ Order summary with pricing breakdown
- ✅ Coupon code application
- ✅ Free shipping threshold indicator
- ✅ Recommended products section
- ✅ Empty cart state with call-to-action

### Checkout Page
- ✅ Multi-step checkout process with progress indicator
- ✅ Shipping information form with validation
- ✅ Shipping method selection:
  - Standard Delivery (₦2,500)
  - Express Delivery (₦5,000)
  - Overnight Delivery (₦10,000)
- ✅ Multiple payment options:
  - Credit/Debit Card
  - Bank Transfer
  - Paystack/Stripe
- ✅ Order summary on the side
- ✅ Form validation and error handling
- ✅ Security badges and trust indicators

### User Authentication
- ✅ User registration with validation:
  - Full name, email, phone
  - Strong password requirements
  - Terms and conditions agreement
  - Newsletter subscription option
- ✅ User login with remember me option
- ✅ Password visibility toggle
- ✅ Social login buttons (placeholder for integration)
- ✅ Form switching between login and register
- ✅ Forgot password link (for future implementation)

### Admin Panel (Optional)
- ✅ Dashboard with key metrics
- ✅ Product management (add, edit, delete)
- ✅ Order management and tracking
- ✅ User management
- ✅ Store settings
- ✅ Responsive admin interface

### Extra Features
- ✅ Smooth animations and transitions
- ✅ Mobile-responsive design (Mobile-first approach)
- ✅ WhatsApp integration for customer support
- ✅ Newsletter subscription
- ✅ Fast loading speed with optimized images
- ✅ Secure checkout process
- ✅ Local storage for cart persistence
- ✅ Modern, elegant, and luxurious design
- ✅ Feminine color palette (soft pink, nude, white, gold)
- ✅ High-quality placeholder images
- ✅ Smooth page transitions
- ✅ Intuitive navigation

## 📁 Project Structure

```
order hair/
├── index.html                    # Homepage
├── shop.html                     # Shop/Products page
├── product-detail.html           # Product details page
├── cart.html                     # Shopping cart page
├── checkout.html                 # Checkout page
├── register.html                 # Login & Registration page
├── admin.html                    # Admin dashboard (optional)
├── css/
│   └── style.css                # Comprehensive stylesheet (2000+ lines)
├── js/
│   ├── main.js                  # Main functionality & navigation
│   ├── products-data.js         # Product database & cart management
│   ├── shop.js                  # Shop page filtering & sorting
│   ├── product-detail.js        # Product details functionality
│   ├── cart.js                  # Cart management
│   ├── checkout.js              # Checkout functionality
│   └── auth.js                  # Authentication functionality
└── README.md                     # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Color:** #d4a574 (Luxe Gold)
- **Secondary Color:** #e8d4d0 (Soft Pink)
- **Accent Color:** #f5e6e0 (Light Nude)
- **Dark Color:** #2c2c2c (Elegant Dark)
- **Text Colors:** Various shades for hierarchy

### Typography
- Clean, modern sans-serif font (Segoe UI)
- Hierarchical text sizes for easy scanning
- Proper line spacing for readability

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: Below 768px
- Small Mobile: Below 480px

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side requirements for basic functionality

### Installation
1. Download the project files
2. Open `index.html` in your web browser
3. Browse and interact with the website

### Usage

#### For Users
1. **Browse Products:**
   - Go to "Shop" page
   - Use filters to find desired hair type, length, and price
   - Search for specific products

2. **View Product Details:**
   - Click "View Details" on any product
   - See multiple images, specifications, and customer reviews
   - Select preferred length, color, and quantity

3. **Shopping:**
   - Click "Add to Cart" to add items
   - View your cart anytime
   - Apply coupon codes for discounts
   - Proceed to checkout

4. **Checkout:**
   - Enter shipping information
   - Select shipping method
   - Choose payment method
   - Review order summary
   - Place order

5. **Account:**
   - Register for an account
   - Login to access order history
   - Save preferences and wishlist

#### For Admin
1. Navigate to `admin.html`
2. Access dashboard with key metrics
3. Manage products, orders, and users
4. Update store settings

## 💾 Local Storage

The website uses browser local storage to persist:
- **Cart data:** `luxehair_cart`
- **User data:** `user_[email]`
- **Current user:** `currentUser`
- **Last order:** `lastOrder`

## 🔐 Security Features

- Form validation on all inputs
- Password strength requirements
- Secure payment indicators
- SSL/HTTPS ready (requires server setup)
- CORS-safe external resources

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 Customization

### Change Brand Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #d4a574;    /* Change to your brand color */
    --secondary-color: #e8d4d0;
    --accent-color: #f5e6e0;
    /* ... other variables ... */
}
```

### Update Product Data
Modify the `products` array in `js/products-data.js` to add/edit products.

### Change Store Information
Update footer and contact information in HTML files.

### Customize Payment Methods
Modify payment method options in `checkout.html` and `js/checkout.js`.

## 📞 Contact Information

- **Phone:** +234 801 234 5678
- **Email:** info@luxehair.com
- **Location:** Lagos, Nigeria
- **WhatsApp:** Available for customer support

## 🔄 Future Enhancements

- Backend integration for persistent data
- Real payment gateway integration (Paystack, Stripe)
- User account dashboard
- Order tracking system
- Email notifications
- SMS alerts
- Inventory management
- Advanced analytics
- Wish list functionality
- Product reviews with images
- Referral program
- VIP customer tiers
- Live chat support

## 📄 License

This project is for commercial use. All rights reserved to LuxeHair.

## 👥 Support

For technical support or inquiries:
- Visit: [luxehair.com](https://luxehair.com)
- Email: support@luxehair.com
- WhatsApp: +234 801 234 5678

---

**Made with ❤️ for beautiful hair lovers everywhere** 💇‍♀️✨
