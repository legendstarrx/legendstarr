// Function to load the header
async function loadHeader() {
    try {
        const response = await fetch('/header.html');
        const html = await response.text();
        
        // Extract head content
        const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
        if (headMatch) {
            const headContent = headMatch[1];
            // Replace the current head content
            document.head.innerHTML = headContent;
        }
        
        // Extract body content (navbar)
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
        if (bodyMatch) {
            const bodyContent = bodyMatch[1];
            // Insert the navbar at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', bodyContent);
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader); 