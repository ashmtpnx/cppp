import fs from 'fs';
import { curriculumData } from './src/data/curriculum.js';
import { module1Data } from './src/data/module_1.js';

// Replace the first module with our massive new Module 1 payload
curriculumData[0] = module1Data;

const fileContent = 'export const curriculumData = ' + JSON.stringify(curriculumData, null, 2) + ';';

fs.writeFileSync('src/data/curriculum.js', fileContent);
console.log("Successfully updated src/data/curriculum.js");
