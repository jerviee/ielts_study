import fs from 'fs';
const content = fs.readFileSync('src/data/mockWords.ts', 'utf-8');
const match = content.match(/mockWords: IELTSWord\[\] = (\[.+\]);/s);
const words = JSON.parse(match[1]);
const aWords = words.filter(w => w.word.toLowerCase() >= 'aba' && w.word.toLowerCase() <= 'azu');
console.log('Total words from aba to azu:', aWords.length);
console.log('\nFirst 5 updated words:');
aWords.slice(0, 5).forEach(w => {
  const example = w.example.split('\n')[0];
  console.log(w.word + ': ' + example);
});
console.log('\nLast 5 updated words:');
aWords.slice(-5).forEach(w => {
  const example = w.example.split('\n')[0];
  console.log(w.word + ': ' + example);
});
