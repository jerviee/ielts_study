const fs = require('fs');
const content = fs.readFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', 'utf-8');
const lines = content.split('\n');
let insideArray = false;
let jsonLines = [];
for (let line of lines) {
  if (line.includes('export const mockWords: IELTSWord[] = [')) {
    insideArray = true; jsonLines.push('['); continue;
  }
  if (insideArray) { if (line.trim() === '];') { jsonLines.push(']'); break; } jsonLines.push(line); }
}
const words = JSON.parse(jsonLines.join('\n'));
words.forEach(w => {
  switch(w.word.toLowerCase()) {
    case 'coca': w.example = 'Coca-Cola is one of the most recognizable beverage brands in the world.\n可口可乐是世界上最知名的饮料品牌之一。\nThe coca plant has been used for centuries in traditional medicine practices.\n古柯植物几个世纪以来一直被用于传统医学实践。'; break;
    case 'cock': w.example = 'The rooster cocked its head and let out a loud crow at the break of dawn.\n公鸡在黎明时分昂起头大声啼叫。\nShe carefully cocked the gun before taking aim at the target.\n她在瞄准目标前小心地扳起了枪的扳机。'; break;
    case 'code': w.example = 'Programmers spend countless hours writing and debugging complex code for software applications.\n程序员花费无数小时为软件应用编写和调试复杂代码。\nThe secret code was used to encrypt sensitive information during the war.\n战争期间，密码被用来加密敏感信息。'; break;
    case 'coffee': w.example = 'Many people start their day with a hot cup of coffee to boost their energy levels.\n许多人每天早上喝一杯热咖啡来提高精力。\nThe aroma of freshly brewed coffee filled the entire kitchen with a delightful scent.\n新鲜冲泡的咖啡香气弥漫整个厨房。'; break;
    case 'coffin': w.example = 'The funeral director carefully placed the casket into the wooden coffin.\n葬礼承办人小心地将棺材放入木棺中。\nArchaeologists discovered an ancient coffin containing valuable artifacts in the tomb.\n考古学家在墓中发现了一具装有珍贵文物的古代棺材。'; break;
    case 'coherence': w.example = 'The coherence of his argument made it easy for the audience to understand his point.\n他论点的连贯性使听众很容易理解他的观点。\nThe report lacked coherence, making it difficult for readers to follow the main ideas.\n报告缺乏连贯性，使读者难以理解主要观点。'; break;
    case 'coherent': w.example = 'She gave a coherent presentation that clearly explained the project objectives.\n她做了一个条理清晰的演示，清楚地解释了项目目标。\nThe witness provided a coherent account of what happened during the incident.\n目击者对事件发生过程提供了连贯的描述。'; break;
    case 'coil': w.example = 'The electrician carefully wrapped the wire into a tight coil for storage.\n电工小心地将电线缠绕成紧密的线圈以便储存。\nThe snake coiled itself around the tree branch, ready to strike at any moment.\n蛇盘绕在树枝上，随时准备攻击。'; break;
    case 'coin': w.example = 'She flipped a coin to decide whether to go left or right at the intersection.\n她抛硬币决定在十字路口向左还是向右走。\nThe museum displayed a collection of ancient coins from various civilizations.\n博物馆展示了来自不同文明的古代硬币收藏。'; break;
    case 'coincide': w.example = 'Our schedules happened to coincide, so we decided to meet for lunch.\n我们的日程碰巧重合，所以我们决定一起吃午饭。\nThe festival will coincide with the annual conference, creating a busy week for everyone.\n节日将与年度会议同时举行，为每个人创造一个忙碌的一周。'; break;
    case 'coincidence': w.example = 'It was a remarkable coincidence that we both chose the same restaurant for dinner.\n我们都选择同一家餐厅吃晚饭，真是一个了不起的巧合。\nThe coincidence of finding her lost wallet on the same day was truly amazing.\n在同一天找到她丢失的钱包，这个巧合真是令人惊讶。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for coc, cod, cof, coh, coi groups (11 words)');
