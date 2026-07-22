const fs = require('fs');

function processFile(path) {
    let content = fs.readFileSync(path, 'utf8');
    // Remove the window assignment
    content = content.replace(/.*window\.CURRICULUM_DATA\s*=\s*window\.CURRICULUM_DATA\s*\|\|\s*\[\];\s*/, '');
    // Replace the push call with an array bracket
    content = content.replace(/window\.CURRICULUM_DATA\.push\(/, '[');
    // Replace the final ); with ]
    content = content.replace(/\);\s*$/, ']');
    return content;
}

try {
    const p1 = processFile('_legacy_vanilla/data/modules_1_to_8.js');
    const p2 = processFile('_legacy_vanilla/data/modules_9_to_14.js');
    const p3 = processFile('_legacy_vanilla/data/modules_15_to_24.js');

    const combined = `export const curriculumData = [\n  ...${p1},\n  ...${p2},\n  ...${p3}\n];\n`;
    fs.mkdirSync('src/data', { recursive: true });
    fs.writeFileSync('src/data/curriculum.js', combined);
    console.log('Successfully created src/data/curriculum.js');
} catch (e) {
    console.error(e);
}
