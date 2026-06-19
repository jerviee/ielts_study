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
        case 'carefully':
            w.example = 'He carefully examined the important legal document before signing his name.\n他在签名前仔细检查了重要的法律文件。\nThe experienced chef carefully measured each ingredient for the perfect recipe in the kitchen.\n经验丰富的厨师在厨房里仔细测量每种食材以制作完美的食谱。';
            break;
        case 'carriage':
            w.example = 'The royal carriage was pulled by four beautiful white horses through the city streets.\n皇家马车由四匹漂亮的白马牵引穿过城市街道。\nThe old vintage train carriage had comfortable wooden seats and large windows with beautiful curtains.\n旧老式火车车厢有舒适的木制座椅和带漂亮窗帘的大窗户。';
            break;
        case 'carrier':
            w.example = 'The major airline carrier announced new routes to popular vacation destinations.\n主要航空公司宣布了前往热门度假目的地的新航线。\nThe package was safely delivered by a reliable local carrier to the customer\'s doorstep.\n包裹由可靠的当地快递公司安全送到客户家门口。';
            break;
    }
});

const updatedContent = content.substring(0, startIndex) + 'export const mockWords: IELTSWord[] = [' + JSON.stringify(words, null, 2).substring(1, JSON.stringify(words, null, 2).length - 1) + '];' + content.substring(endIndex + 2);
fs.writeFileSync(filePath, updatedContent);
console.log('Fixed examples for third batch remaining failed words');
