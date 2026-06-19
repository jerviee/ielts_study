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
            w.example = 'She carefully read through the entire contract before signing her name on the dotted line.\n她在签署合同前仔细阅读了整个合同内容。\nThe experienced chef carefully measured each ingredient for the perfect recipe in the kitchen.\n经验丰富的厨师在厨房里仔细测量每种食材以制作完美的食谱。';
            break;
        case 'carriage':
            w.example = 'The royal carriage was pulled by four beautiful white horses through the busy city streets.\n皇家马车由四匹漂亮的白马牵引穿过繁忙的城市街道。\nThe old vintage train carriage had comfortable wooden seats and large windows with beautiful curtains.\n旧老式火车车厢有舒适的木制座椅和带漂亮窗帘的大窗户。';
            break;
        case 'carrier':
            w.example = 'The major airline carrier announced new routes to popular vacation destinations around the world.\n主要航空公司宣布了前往世界各地热门度假目的地的新航线。\nThe package was safely delivered by a reliable local carrier to the customer\'s doorstep.\n包裹由可靠的当地快递公司安全送到客户家门口。';
            break;
    }
});

const updatedContent = content.substring(0, startIndex) + 'export const mockWords: IELTSWord[] = [' + JSON.stringify(words, null, 2).substring(1, JSON.stringify(words, null, 2).length - 1) + '];' + content.substring(endIndex + 2);
fs.writeFileSync(filePath, updatedContent);
console.log('Fixed examples for third batch remaining failed words');
