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
let words = JSON.parse('[' + jsonContent + ']');

words.forEach(w => {
    switch(w.word.toLowerCase()) {
        case 'canadian':
            w.example = 'The Canadian government recently announced new policies to support renewable energy development across the country.\n加拿大政府最近宣布了支持全国可再生能源发展的新政策。\nMany Canadian cities are known for their clean air, friendly people, and stunning natural landscapes.\n许多加拿大城市以其清新的空气、友好的人民和壮丽的自然风光而闻名。';
            break;
        case 'canon':
            w.example = 'Literary scholars often debate which classic books should be included in the canon of English literature.\n文学学者经常争论哪些经典书籍应该被列入英国文学经典。\nThe artist carefully followed the established canon of classical painting techniques learned from his master.\n这位艺术家仔细遵循了从他的老师那里学到的既定古典绘画技法准则。';
            break;
    }
});

const updatedContent = content.substring(0, startIndex) + 'export const mockWords: IELTSWord[] = [' + JSON.stringify(words, null, 2).substring(1, JSON.stringify(words, null, 2).length - 1) + '];' + content.substring(endIndex + 2);
fs.writeFileSync(filePath, updatedContent);
console.log('Fixed examples for remaining failed words');
