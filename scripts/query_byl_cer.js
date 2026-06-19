const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const match = content.match(/mockWords:\s*IELTSWord\s*\[\s*([\s\S]*?)\s*\]/);
if (!match) {
    console.log('Cannot find mockWords array');
    process.exit(1);
}

const jsonContent = '[' + match[1].replace(/,\s*$/, '') + ']';
const words = JSON.parse(jsonContent);

const prefixes = ['byl', 'bym', 'byn', 'byo', 'byp', 'byq', 'byr', 'bys', 'byt', 'byu', 'byv', 'byw', 'byx', 'byy', 'byz',
                  'caa', 'cab', 'cac', 'cad', 'cae', 'caf', 'cag', 'cah', 'cai', 'caj', 'cak', 'cal', 'cam', 'can', 'cao', 'cap', 'caq', 'car', 'cas', 'cat', 'cau', 'cav', 'caw', 'cax', 'cay', 'caz',
                  'cba', 'cbb', 'cbc', 'cbd', 'cbe', 'cbf', 'cbg', 'cbh', 'cbi', 'cbj', 'cbk', 'cbl', 'cbm', 'cbn', 'cbo', 'cbp', 'cbq', 'cbr', 'cbs', 'cbt', 'cbu', 'cbv', 'cbw', 'cbx', 'cby', 'cbz',
                  'cca', 'ccb', 'ccc', 'ccd', 'cce', 'ccf', 'ccg', 'cch', 'cci', 'ccj', 'cck', 'ccl', 'ccm', 'ccn', 'cco', 'ccp', 'ccq', 'ccr', 'ccs', 'cct', 'ccu', 'ccv', 'ccw', 'ccx', 'ccy', 'ccz',
                  'cda', 'cdb', 'cdc', 'cdd', 'cde', 'cdf', 'cdg', 'cdh', 'cdi', 'cdj', 'cdk', 'cdl', 'cdm', 'cdn', 'cdo', 'cdp', 'cdq', 'cdr', 'cds', 'cdt', 'cdu', 'cdv', 'cdw', 'cdx', 'cdy', 'cdz',
                  'cea', 'ceb', 'cec', 'ced', 'cee', 'cef', 'ceg', 'ceh', 'cei', 'cej', 'cek', 'cel', 'cem', 'cen', 'ceo', 'cep', 'ceq', 'cer'];

const targetWords = words.filter(w => prefixes.some(p => w.word.toLowerCase().startsWith(p)));

console.log('Total words found:', targetWords.length);
console.log('\nWords list:');
targetWords.sort((a, b) => a.word.localeCompare(b.word)).forEach(w => {
    console.log(w.word + ' - ' + w.meaning);
});

fs.writeFileSync('/tmp/byl_cer_words.json', JSON.stringify(targetWords.sort((a, b) => a.word.localeCompare(b.word)), null, 2));
console.log('\nWords saved to /tmp/byl_cer_words.json');
