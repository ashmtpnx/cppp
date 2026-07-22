const fs = require('fs');

try {
  let content = fs.readFileSync('src/data/curriculum.js', 'utf-8');
  let jsonStr = content.replace('export const curriculumData = ', '').trim();
  if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);
  
  const data = new Function('return ' + jsonStr)();
  let updatedCount = 0;

  for (let mod of data) {
    for (let sub of mod.subtopics) {
      if (!sub.diagram) {
        let nodes = [];
        let edges = [];
        let html = sub.content || '';
        
        // Strategy 1: Ordered lists (sequential flow)
        let olMatch = html.match(/<ol>([\s\S]*?)<\/ol>/);
        if (olMatch) {
          let liRegex = /<li>(.*?)<\/li>/g;
          let match;
          let count = 1;
          while ((match = liRegex.exec(olMatch[1])) !== null && count <= 5) {
            let label = match[1].replace(/<[^>]*>?/gm, '').split(':')[0].trim();
            if (label.length > 25) label = label.substring(0, 25) + '..';
            nodes.push({ id: 'n' + count, label: label });
            count++;
          }
          
          if (nodes.length > 1) {
            let startX = 100;
            let spacing = 600 / (nodes.length - 1);
            nodes.forEach((n, i) => {
              n.x = startX + (i * spacing);
              n.y = 200;
              if (i < nodes.length - 1) {
                edges.push({ id: 'e' + (i+1), from: n.id, to: 'n' + (i + 2) });
              }
            });
          } else {
            nodes = []; // reset if failed
          }
        }
        
        // Strategy 2: Headings (Tree structure)
        if (nodes.length === 0) {
          let h3Regex = /<h3>(.*?)<\/h3>/g;
          let match;
          let count = 1;
          while ((match = h3Regex.exec(html)) !== null && count <= 5) {
            let label = match[1].replace(/<[^>]*>?/gm, '').trim();
            if (label.length > 25) label = label.substring(0, 25) + '..';
            nodes.push({ id: 'n' + count, label: label });
            count++;
          }
          
          if (nodes.length > 0) {
            let mainNode = { id: 'main', label: sub.title.substring(0, 25), x: 400, y: 100 };
            let finalNodes = [mainNode];
            
            let startX = 100;
            let spacing = nodes.length > 1 ? 600 / (nodes.length - 1) : 0;
            
            nodes.forEach((n, i) => {
              n.x = nodes.length === 1 ? 400 : startX + (i * spacing);
              n.y = 300;
              finalNodes.push(n);
              edges.push({ id: 'e' + (i+1), from: 'main', to: n.id });
            });
            nodes = finalNodes;
          }
        }
        
        // Strategy 3: Unordered lists
        if (nodes.length === 0) {
          let ulMatch = html.match(/<ul>([\s\S]*?)<\/ul>/);
          if (ulMatch) {
            let liRegex = /<li>(.*?)<\/li>/g;
            let match;
            let count = 1;
            while ((match = liRegex.exec(ulMatch[1])) !== null && count <= 4) {
              let label = match[1].replace(/<[^>]*>?/gm, '').split(':')[0].trim();
              if (label.length > 25) label = label.substring(0, 25) + '..';
              nodes.push({ id: 'n' + count, label: label });
              count++;
            }
            
            if (nodes.length > 0) {
              let mainNode = { id: 'main', label: sub.title.substring(0, 25), x: 400, y: 100 };
              let finalNodes = [mainNode];
              
              let startX = 100;
              let spacing = nodes.length > 1 ? 600 / (nodes.length - 1) : 0;
              
              nodes.forEach((n, i) => {
                n.x = nodes.length === 1 ? 400 : startX + (i * spacing);
                n.y = 300;
                finalNodes.push(n);
                edges.push({ id: 'e' + (i+1), from: 'main', to: n.id });
              });
              nodes = finalNodes;
            }
          }
        }
        
        // Fallback
        if (nodes.length === 0) {
           nodes = [
              { id: 'main', label: sub.title.substring(0, 20), x: 400, y: 100 },
              { id: 'c1', label: 'Theory & Rules', x: 250, y: 300 },
              { id: 'c2', label: 'Implementation', x: 550, y: 300 }
           ];
           edges = [
              { id: 'e1', from: 'main', to: 'c1' },
              { id: 'e2', from: 'main', to: 'c2' }
           ];
        }
        
        // Create controls
        let controls = [
          {
            id: 'all',
            label: 'Overview',
            highlightNodes: nodes.map(n => n.id),
            highlightEdges: edges.map(e => e.id)
          }
        ];
        
        sub.diagram = { controls, nodes, edges };
        updatedCount++;
      }
    }
  }

  // Write back to file
  const newContent = 'export const curriculumData = ' + JSON.stringify(data, null, 2) + ';\n';
  fs.writeFileSync('src/data/curriculum.js', newContent, 'utf-8');
  
  console.log(`Successfully added dynamic diagrams to ${updatedCount} subtopics!`);
} catch (e) {
  console.error("Script failed:", e.message);
}
