const fs = require('fs');

try {
  let content = fs.readFileSync('src/data/curriculum.js', 'utf-8');
  content = content.replace('export const curriculumData = ', '').trim();
  if (content.endsWith(';')) content = content.slice(0, -1);
  
  // Use Function to evaluate it (safer than eval for object literals)
  const data = new Function('return ' + content)();
  console.log(`Parsed ${data.length} modules successfully!`);
  console.log(`Module 24 is: ${data.find(m => m.id === 'mod-24')?.title}`);
} catch (e) {
  console.error("Failed to parse:", e.message);
}
