const fs = require('fs');
const path = require('path');

// Function to update a single HTML file
function updateHtmlFile(filePath) {
    try {
        // Read the file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove existing head content (except charset and viewport)
        content = content.replace(/<head>[\s\S]*?<\/head>/, `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${path.basename(filePath, '.html')} | Legendstarr</title>
    <!-- Header will be loaded here -->
    <script src="js/header.js"></script>
</head>`);
        
        // Remove existing navbar and mobile menu
        content = content.replace(/<nav class="navbar">[\s\S]*?<\/nav>[\s\S]*?<div class="mobile-menu-overlay"[\s\S]*?<\/div>/s, '<!-- Header will be loaded here -->');
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    } catch (error) {
        console.error(`Error updating ${filePath}:`, error);
    }
}

// Function to process all HTML files in a directory
function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.html')) {
            updateHtmlFile(filePath);
        }
    });
}

// Start processing from the current directory
processDirectory('.'); 