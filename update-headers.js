const fs = require('fs');
const path = require('path');

// Read the header template
const headerTemplate = fs.readFileSync('header.html', 'utf8');

// Function to update a single HTML file
function updateHtmlFile(filePath) {
    try {
        // Read the file content
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Extract the page-specific content (everything after the opening body tag)
        const bodyMatch = content.match(/<body[^>]*>([\s\S]*)$/);
        if (!bodyMatch) {
            console.error(`Could not find body content in ${filePath}`);
            return;
        }
        
        // Get the page title from the filename
        const pageTitle = path.basename(filePath, '.html')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        
        // Create the new content
        const newContent = `<!DOCTYPE html>
<html lang="en">
${headerTemplate.replace('Legendstarr | AI & Web Development Expert', `${pageTitle} | Legendstarr`)}
${bodyMatch[1]}`;
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, newContent, 'utf8');
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
        } else if (file.endsWith('.html') && file !== 'header.html') {
            updateHtmlFile(filePath);
        }
    });
}

// Start processing from the current directory
processDirectory('.'); 