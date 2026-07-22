const fs = require('fs');
const content = fs.readFileSync('src/data/curriculum.js', 'utf8');

// We can just use basic regex to find the subtopics of mod-1
const matches = [...content.matchAll(/id:\s*["'](mod-1-\d+)["'],\s*title:\s*["']([^"']+)["']/g)];

console.log(`Found ${matches.length} subtopics in Module 1:`);
matches.forEach(m => console.log(`- ${m[1]}: ${m[2]}`));
