const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const startIndex = content.indexOf('export const mockWords: IELTSWord[] = [');
const endIndex = content.lastIndexOf('];');

if (startIndex === -1 || endIndex === -1) {
    console.log('Cannot find mockWords array');
    process.exit(1);
}

const jsonContent = content.substring(startIndex + 'export const mockWords: IELTSWord[] = ['.length, endIndex);
const words = JSON.parse('[' + jsonContent + ']');

const targetWords = ['call', 'calm', 'came', 'camera', 'camp', 'campaign', 'campus', 'can', 'canadian', 'canal', 'cancel', 'cancer', 'candidate', 'candle', 'candy', 'cannon', 'canon', 'canvas', 'canyon', 'cap'];

let allPassed = true;

targetWords.forEach(word => {
    const w = words.find(w => w.word.toLowerCase() === word);
    if (!w) {
        console.log(word + ': NOT FOUND');
        allPassed = false;
        return;
    }
    
    const examples = w.example.split('\n');
    const engExample1 = examples[0] || '';
    const engExample2 = examples[2] || '';
    
    const count1 = engExample1.split(' ').length;
    const count2 = engExample2.split(' ').length;
    const passed = count1 >= 16 || count2 >= 16;
    
    console.log(word + ': Example1=' + count1 + ' words, Example2=' + count2 + ' words - ' + (passed ? 'PASS' : 'FAIL'));
    
    if (!passed) {
        allPassed = false;
    }
});

console.log('\n' + (allPassed ? 'All words PASSED validation!' : 'Some words FAILED validation!'));
