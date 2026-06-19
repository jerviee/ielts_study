const fs = require('fs');
const content = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf-8');
const lines = content.split('\n');
let insideArray = false;
let jsonLines = [];
for (let line of lines) {
  if (line.includes('export const mockWords: IELTSWord[] = [')) {
    insideArray = true;
    jsonLines.push('[');
    continue;
  }
  if (insideArray) {
    if (line.trim() === '];') {
      jsonLines.push(']');
      break;
    }
    jsonLines.push(line);
  }
}
const words = JSON.parse(jsonLines.join('\n'));
const targetWords = ['branch','brand','brandish','brandy','brash','brass','brasserie','brat','brattice','brave','bravery','brawl','brawn','brawny','bray','braze','brazier','bread','breadbasket','breadth'];
let allPassed = true;
targetWords.forEach(word => {
  const w = words.find(w => w.word.toLowerCase() === word);
  const examples = w.example.split('\n');
  const count1 = examples[0].split(' ').length;
  const count2 = examples[2].split(' ').length;
  const passed = count1 >= 16 || count2 >= 16;
  if (!passed) allPassed = false;
  console.log(word + ': Example1=' + count1 + ' words, Example2=' + count2 + ' words - ' + (passed ? 'PASS' : 'FAIL'));
});
if (allPassed) {
  console.log('\nAll words PASSED validation!');
} else {
  console.log('\nSome words FAILED validation!');
}
