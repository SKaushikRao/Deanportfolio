const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('page.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Replace generic py-12 with split padding targeting mobile tops heavily
            let newContent = content.replace(/py-12/g, "pt-24 pb-12").replace(/lg:py-16/g, "lg:pt-20 lg:pb-16");
            
            // Special cases like Hero page
            newContent = newContent.replace(/pt-12 sm:pt-16/g, "pt-24 sm:pt-28");
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated mobile padding in ${fullPath}`);
            }
        }
    });
}

processDir(path.join(__dirname, 'app'));
