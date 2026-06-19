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
        case 'bylaw':
            w.example = 'Every city has specific bylaws that govern noise levels during nighttime hours in residential neighborhoods.\n每个城市都有具体的地方法规来管理居民区夜间的噪音水平。\nThe homeowners association voted unanimously to update the existing bylaws regarding pet ownership and common area usage.\n业主协会一致投票更新了关于宠物所有权和公共区域使用的现有规章制度。';
            break;
        case 'cabinet':
            w.example = 'The large kitchen cabinet was filled with jars of exotic spices, canned goods, and various cooking utensils.\n大型厨房橱柜里装满了异国香料罐、罐头食品和各种炊具。\nThe president announced that his entire cabinet would meet tomorrow morning to discuss the new economic policies.\n总统宣布他的整个内阁将于明天上午开会讨论新的经济政策。';
            break;
        case 'calendar':
            w.example = 'I carefully marked all the important dates on my wall calendar, including project deadlines, business meetings, and family events.\n我仔细地在墙上的日历上标记了所有重要日期，包括项目截止日期、商务会议和家庭活动。\nThe ancient Mayan calendar was incredibly accurate and predicted astronomical events with remarkable precision.\n古代玛雅日历非常准确，能够以惊人的精度预测天文事件。';
            break;
    }
});

const updatedContent = content.substring(0, startIndex) + 'export const mockWords: IELTSWord[] = [' + JSON.stringify(words, null, 2).substring(1, JSON.stringify(words, null, 2).length - 1) + '];' + content.substring(endIndex + 2);
fs.writeFileSync(filePath, updatedContent);
console.log('Fixed examples for failed words');
