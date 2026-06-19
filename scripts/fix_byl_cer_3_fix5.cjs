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
        case 'captain':
            w.example = 'The experienced captain skillfully navigated the large ship through the narrow channel.\n经验丰富的船长熟练地驾驶大型船只穿过狭窄的航道。\nThe team captain motivated his players to give their best performance in the important championship game.\n队长激励队员在重要的锦标赛中发挥最佳水平。';
            break;
        case 'card':
            w.example = 'She sent a beautiful handmade greeting card to her best friend to celebrate her special birthday.\n她给最好的朋友寄了一张漂亮的手工贺卡来庆祝她特别的生日。\nThe credit card company offers various attractive rewards programs for frequent users every month.\n信用卡公司每月为频繁使用者提供各种有吸引力的奖励计划。';
            break;
        case 'cardboard':
            w.example = 'We used sturdy cardboard boxes to pack our belongings when moving to the new house.\n我们搬家时用坚固的纸箱打包物品。\nThe children made a large and creative fort using old cardboard boxes in their backyard.\n孩子们在后院用旧纸箱做了一个大型创意堡垒。';
            break;
        case 'care':
            w.example = 'Parents should provide proper care and attention to their children\'s emotional needs.\n父母应该适当关心和关注孩子的情感需求。\nThe dedicated healthcare workers showed great care and compassion towards their patients during the difficult pandemic.\n困难的疫情期间，敬业的医护人员对病人表现出极大的关心和同情。';
            break;
        case 'career':
            w.example = 'She worked extremely hard to build a successful career in the highly competitive field of technology.\n她极其努力地在竞争激烈的科技领域建立成功的职业生涯。\nMany young professionals are actively seeking career opportunities in emerging tech industries these days.\n现在许多年轻专业人士正在积极寻找新兴科技行业的职业机会。';
            break;
        case 'careful':
            w.example = 'Be very careful when handling fragile glass items to avoid breaking them accidentally.\n处理易碎玻璃物品时要非常小心，以免意外打破它们。\nThe meticulous scientist was careful to document every single step of the complex scientific experiment.\n一丝不苟的科学家小心地记录复杂科学实验的每一个步骤。';
            break;
        case 'carefully':
            w.example = 'He carefully examined the important legal document before signing his name.\n他在签名前仔细检查了重要的法律文件。\nThe experienced chef carefully measured each ingredient for the perfect recipe in the kitchen.\n经验丰富的厨师在厨房里仔细测量每种食材以制作完美的食谱。';
            break;
        case 'carpenter':
            w.example = 'The skilled carpenter built a beautiful wooden dining table for the large family.\n熟练的木匠为这个大家庭制作了一张漂亮的木制餐桌。\nMy grandfather was a talented carpenter who could fix almost anything made of wood.\n我的祖父是一名有才华的木匠，几乎可以修理任何木制品。';
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
