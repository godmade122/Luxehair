// Authentication Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    setupAuthToggle();
    setupPasswordToggle();
    setupFormSubmission();
});

function setupAuthToggle() {
    const toggleLoginBtn = document.getElementById('toggleLogin');
    const toggleRegisterBtn = document.getElementById('toggleRegister');
    const registerBox = document.getElementById('registerBox');
    const loginBox = document.getElementById('loginBox');
    
    if (toggleLoginBtn) {
        toggleLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            registerBox.classList.remove('active');
            loginBox.classList.add('active');
        });
    }
    
    if (toggleRegisterBtn) {
        toggleRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginBox.classList.remove('active');
            registerBox.classList.add('active');
        });
    }
}

function setupPasswordToggle() {
    document.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const isPassword = input.type === 'password';
            
            input.type = isPassword ? 'text' : 'password';
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });
}

function setupFormSubmission() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullName = document.getElementById('regFullName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const phone = document.getElementById('regPhone').value.trim();
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Validation
            if (!fullName || !email || !phone || !password || !confirmPassword) {
                showNotification('All fields are required', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            if (password.length < 8) {
                showNotification('Password must be at least 8 characters', 'error');
                return;
            }
            
            if (!/(?=.*[A-Z])/.test(password)) {
                showNotification('Password must contain at least one uppercase letter', 'error');
                return;
            }
            
            if (!/(?=.*\d)/.test(password)) {
                showNotification('Password must contain at least one number', 'error');
                return;
            }
            
            if (!/(?=.*[!@#$%^&*])/.test(password)) {
                showNotification('Password must contain at least one special character (!@#$%^&*)', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showNotification('Passwords do not match', 'error');
                return;
            }
            
            if (!agreeTerms) {
                showNotification('Please agree to the terms and conditions', 'error');
                return;
            }
            
            // Save user data
            const userData = {
                fullName,
                email,
                phone,
                createdAt: new Date().toISOString()
            };
            
            localStorage.setItem(`user_${email}`, JSON.stringify(userData));
            localStorage.setItem('currentUser', email);
            
            showNotification('Account created successfully! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'shop.html';
            }, 1500);
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Simple validation (in real app, would verify against backend)
            if (!email || !password) {
                showNotification('Please enter email and password', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate login (would verify against backend in real app)
            const userData = localStorage.getItem(`user_${email}`);
            
            if (userData) {
                localStorage.setItem('currentUser', email);
                if (rememberMe) {
                    localStorage.setItem('rememberMe', email);
                }
                showNotification('Login successful! Redirecting...', 'success');
                setTimeout(() => {
                    window.location.href = 'shop.html';
                }, 1500);
            } else {
                // For demo purposes, allow any login
                localStorage.setItem('currentUser', email);
                if (rememberMe) {
                    localStorage.setItem('rememberMe', email);
                }
                showNotification('Login successful! Redirecting...', 'success');
                setTimeout(() => {
                    window.location.href = 'shop.html';
                }, 1500);
            }
        });
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Social login buttons (placeholder)
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = btn.classList.contains('facebook') ? 'Facebook' : 'Google';
        showNotification(`${platform} login not configured yet`, 'error');
    });
});

// Check if user was remembered
window.addEventListener('load', () => {
    const remembered = localStorage.getItem('rememberMe');
    if (remembered) {
        const registerBox = document.getElementById('registerBox');
        const loginBox = document.getElementById('loginBox');
        if (registerBox && loginBox) {
            registerBox.classList.remove('active');
            loginBox.classList.add('active');
            document.getElementById('loginEmail').value = remembered;
        }
    }
});
