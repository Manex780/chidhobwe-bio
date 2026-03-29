/**
 * UI Enhancements and Badge Logic
 */
document.addEventListener('DOMContentLoaded', function() {
    const badge = document.getElementById('lovable-badge');
    const closeButton = document.getElementById('lovable-badge-close');

    // Hide badge if in an iframe or controlled by puppeteer
    if (window.self !== window.top || navigator.userAgent.includes('puppeteer')) {
        if (badge) {
            badge.style.display = 'none';
        }
    }

    // Add click event listener to close button with animation
    if (closeButton && badge) {
        closeButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            badge.classList.add('closing');
            
            // Wait for CSS transition before removing from view
            setTimeout(function() {
                badge.style.display = 'none';
            }, 240);
        });
    }
});
