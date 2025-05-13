// Function to load the header
async function loadHeader() {
    try {
        const response = await fetch('/header.html');
        const html = await response.text();
        
        // Create a temporary container
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        // Get the header content
        const headerContent = temp.querySelector('nav');
        const mobileMenuContent = temp.querySelector('.mobile-menu-overlay');
        
        // Find the header placeholder
        const headerPlaceholder = document.querySelector('#header-placeholder');
        const mobileMenuPlaceholder = document.querySelector('#mobile-menu-placeholder');
        
        if (headerPlaceholder && headerContent) {
            headerPlaceholder.replaceWith(headerContent);
        }
        
        if (mobileMenuPlaceholder && mobileMenuContent) {
            mobileMenuPlaceholder.replaceWith(mobileMenuContent);
        }
        
        // Reinitialize any necessary event listeners
        initializeMobileMenu();
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Function to initialize mobile menu
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('navbar-mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu-overlay');
    const mobileClose = document.getElementById('mobile-menu-close');
    
    if (mobileToggle && mobileMenu && mobileClose) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
        
        mobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader); 