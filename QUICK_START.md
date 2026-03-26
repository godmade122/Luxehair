# LuxeHair E-Commerce Website - Quick Start Guide

## 📖 Quick Navigation

### Main Pages
- **index.html** - Homepage with featured products and testimonials
- **shop.html** - Browse and filter all products
- **product-detail.html** - View detailed product information
- **cart.html** - Shopping cart with order summary
- **checkout.html** - Secure checkout with payment options
- **register.html** - User registration and login
- **admin.html** - Admin dashboard for store management
- **order-confirmation.html** - Order confirmation page

## 🚀 How to Use

### For Customers

#### 1. Browse Products
1. Click "Shop" in the navigation menu or click "Shop Now" button
2. Use filters on the left to find products by:
   - Hair texture (Straight, Body Wave, Curly, etc.)
   - Hair length
   - Price range
   - Product type
3. Sort by Featured, Newest, Price, or Popularity
4. Use search bar to find specific products

#### 2. View Product Details
1. Click "View Details" on any product card
2. See multiple product images (click thumbnails to change main image)
3. Read full description and features
4. Check customer reviews and ratings
5. View FAQ and care guide tabs

#### 3. Add to Cart
1. Select desired length from dropdown
2. Select color (optional)
3. Choose quantity using +/- buttons
4. Click "Add to Cart" button
5. See notification confirming item added

#### 4. Shopping Cart
1. Go to Cart from navigation
2. View all items with images and prices
3. Update quantities using +/- buttons
4. Remove items using trash icon
5. Apply coupon codes for discounts
6. View order summary on the right

#### 5. Checkout
1. Click "Proceed to Checkout" button
2. Enter shipping information:
   - Name, email, phone
   - Full address details
3. Select shipping method:
   - Standard (₦2,500) - 5-7 days
   - Express (₦5,000) - 2-3 days
   - Overnight (₦10,000) - Next day
4. Choose payment method:
   - Card (enter card details)
   - Bank Transfer (see account details)
   - Paystack/Stripe
5. Agree to terms
6. Click "Place Order"
7. See confirmation with order number

#### 6. Create Account
1. Click "Account" icon in navigation or go to register.html
2. Fill registration form:
   - Full Name
   - Email
   - Phone Number
   - Password (min 8 chars, 1 uppercase, 1 number, 1 special char)
   - Confirm Password
3. Check Terms & Conditions
4. Optional: Subscribe to newsletter
5. Click "Create Account"

#### 7. Login
1. Click the toggle to switch to "Sign In" form
2. Enter email and password
3. Optional: Check "Remember me"
4. Click "Sign In"
5. Access your account

### For Admin

#### Access Admin Panel
1. Open **admin.html** in browser
2. See dashboard with key metrics:
   - Total Orders
   - Total Revenue
   - Total Products
   - Total Users

#### Manage Products
1. Click "Products" in left sidebar
2. View all products in table
3. Click "Edit" to modify product
4. Click "Delete" to remove product
5. Click "+ Add Product" to add new product:
   - Enter product name
   - Select category
   - Enter price
   - Set stock quantity

#### View Orders
1. Click "Orders" in left sidebar
2. See all customer orders with details:
   - Order ID
   - Customer name
   - Order amount
   - Order status
   - Order date
3. Click "View" to see full order details

#### Manage Users
1. Click "Users" in left sidebar
2. View all registered customers
3. See user details: name, email, phone, join date
4. Click "Block" to deactivate user account

#### Store Settings
1. Click "Settings" in left sidebar
2. Update store information:
   - Store name
   - Email address
   - Phone number
3. Click "Save Settings"

## 💡 Tips & Tricks

### For Best Experience
- Use latest version of web browser
- Enable JavaScript in browser settings
- Clear browser cache if experiencing issues
- Use desktop for checkout (mobile also works!)

### Product Filters
- Combine multiple filters for better results
- Use price range to find products in your budget
- Filter by texture to match hair type
- Clear filters button resets all filters

### Shopping Cart
- Cart items are saved in browser (persistent)
- Use coupon code "WELCOME10" for 10% off
- Use coupon code "SAVE20" for 20% off
- Use coupon code "LUXE15" for 15% off
- Free shipping on orders over ₦50,000

### Checkout
- All fields are required for order
- Email format must be valid
- Phone number minimum 10 digits
- Card number must be 16 digits
- Expiry date format: MM/YY
- CVV must be 3 digits

## 🔧 Technical Features

### Cart Management
- Items saved to `localStorage` as `luxehair_cart`
- Cart persists between page refreshes
- Automatic cart count updates
- Coupon discount calculation

### User Data
- User information saved to `localStorage`
- Format: `user_[email]`
- Remember me option stores email
- Current user tracked as `currentUser`

### Order Processing
- Orders saved as `lastOrder` in localStorage
- Includes all customer and product data
- Timestamp recorded for each order
- Order confirmation shows all details

## ⚠️ Important Notes

- Website uses **client-side storage only** (localStorage)
- No actual payments are processed
- Use Paystack/Stripe integration for real payments
- Bank transfer details are placeholder only
- All product images are placeholders
- For production: integrate with backend server

## 🔗 Navigation Shortcuts

**From Any Page:**
- Logo - Go to homepage
- Home - Homepage
- Shop - Products page
- About - Scroll to about section (homepage)
- Contact - Scroll to footer (contact info)
- Account - Registration/Login page
- Cart - Shopping cart
- WhatsApp - Open WhatsApp chat

**Quick Links Available In:**
- Navigation menu
- Footer
- Product pages
- Cart page

## 📧 Contact Information

- **Phone:** +234 801 234 5678
- **Email:** info@luxehair.com
- **WhatsApp:** Click WhatsApp button (bottom right)
- **Location:** Lagos, Nigeria

## 🎨 Customization Options

### Change Colors
1. Open **css/style.css**
2. Find `:root` section at top
3. Change color values:
```css
--primary-color: #d4a574;      /* Main color */
--secondary-color: #e8d4d0;    /* Secondary */
--accent-color: #f5e6e0;       /* Accent */
```

### Update Products
1. Open **js/products-data.js**
2. Edit `products` array
3. Add/remove/modify products
4. Save and refresh browser

### Update Store Info
1. Search for store details in HTML files
2. Update:
   - Phone numbers
   - Email addresses
   - Store name
   - Location
   - Social media links

## ❓ Common Issues & Solutions

**Problem:** Cart not showing items
- **Solution:** Clear browser cache and localStorage

**Problem:** Prices not showing
- **Solution:** Check if JavaScript is enabled

**Problem:** Images not loading
- **Solution:** Check internet connection or disable ad blocker

**Problem:** Can't submit form
- **Solution:** Fill all required fields (marked with *)

**Problem:** Checkout not working
- **Solution:** Make sure all form fields are valid

## ✅ Tested Features

- ✅ Product browsing and filtering
- ✅ Shopping cart functionality
- ✅ Checkout process
- ✅ User registration and login
- ✅ Order confirmation
- ✅ Mobile responsiveness
- ✅ Form validation
- ✅ Local storage persistence
- ✅ Admin dashboard
- ✅ Coupon code application

## 🚀 Next Steps

1. **Customize:** Update colors, products, and store information
2. **Test:** Browse products and complete checkout flow
3. **Deploy:** Host on web server (Netlify, Vercel, GitHub Pages)
4. **Integrate:** Connect to payment gateway and backend
5. **Launch:** Go live with your e-commerce store!

---

**Happy selling! 🎉**
