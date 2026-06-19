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
    case 'coach': w.example = 'The professional coach helped the team improve their performance throughout the season.\n专业教练帮助球队在整个赛季中提高表现。\nShe hired a personal coach to help her prepare for the marathon.\n她聘请了一位私人教练来帮助她准备马拉松。'; break;
    case 'coal': w.example = 'Miners worked deep underground to extract coal from the mine.\n矿工在地下深处工作，从矿井中开采煤炭。\nBurning coal releases harmful emissions that contribute to air pollution.\n燃烧煤炭会释放有害排放物，造成空气污染。'; break;
    case 'coarse': w.example = 'The coarse sandpaper was used to smooth the rough surface of the wood.\n粗砂纸用于打磨木材粗糙的表面。\nHis coarse manners made him unpopular among the refined guests at the party.\n他粗鲁的举止使他在派对上不受高雅客人的欢迎。'; break;
    case 'coast': w.example = 'We spent our summer vacation walking along the beautiful coast of the Mediterranean.\n我们暑假沿着美丽的地中海海岸散步。\nThe ship sailed along the coast, enjoying the scenic views of the ocean.\n船沿着海岸航行，欣赏海洋的风景。'; break;
    case 'coastal': w.example = 'The coastal town attracts thousands of tourists every year with its stunning beaches.\n这个沿海城镇每年以其美丽的海滩吸引着成千上万的游客。\nCoastal communities face unique challenges from rising sea levels and storm surges.\n沿海社区面临海平面上升和风暴潮带来的独特挑战。'; break;
    case 'coat': w.example = 'She wore a stylish coat that kept her warm during the cold winter months.\n她穿了一件时髦的外套，在寒冷的冬季保持温暖。\nThe dog shed its thick winter coat as the weather warmed up in spring.\n随着春天天气变暖，狗脱掉了厚厚的冬毛。'; break;
    case 'coca': w.example = 'Coca leaves have been used for centuries by indigenous people in the Andes.\n古柯叶在安第斯山脉被土著人民使用了几个世纪。\nThe coca plant is the source of cocaine, a powerful stimulant drug.\n古柯植物是可卡因的来源，可卡因是一种强效兴奋剂。'; break;
    case 'cock': w.example = 'The rooster crowed loudly at dawn, signaling the start of a new day.\n公鸡在黎明时分大声啼叫，标志着新一天的开始。\nHe turned the cock of the gun to prepare it for firing.\n他转动枪的击锤准备开火。'; break;
    case 'code': w.example = 'The programmer spent hours writing code to solve the complex software problem.\n程序员花了几个小时编写代码来解决复杂的软件问题。\nUsing a secret code, they were able to communicate without being understood.\n使用密码，他们能够在不被理解的情况下进行沟通。'; break;
    case 'coffee': w.example = 'She brewed a fresh pot of coffee to start her busy morning at the office.\n她煮了一壶新鲜咖啡，开始在办公室忙碌的早晨。\nThe aroma of freshly ground coffee filled the kitchen with a warm, inviting scent.\n新鲜研磨咖啡的香气充满了厨房，散发出温暖诱人的气味。'; break;
    case 'coffin': w.example = 'The funeral procession carried the coffin through the streets to the cemetery.\n葬礼队伍抬着棺材穿过街道前往墓地。\nAncient Egyptians buried their pharaohs in elaborate coffins made of gold and precious stones.\n古埃及人将法老埋葬在用黄金和宝石制成的精美棺材中。'; break;
    case 'coherence': w.example = 'The coherence of his argument made it easy for the audience to follow his reasoning.\n他论点的连贯性使听众很容易理解他的推理。\nThe lack of coherence in the report made it difficult to understand the main points.\n报告缺乏连贯性，很难理解要点。'; break;
    case 'coherent': w.example = 'She gave a clear and coherent explanation of the project goals and timeline.\n她清晰连贯地解释了项目目标和时间表。\nThe witness provided a coherent account of what happened during the incident.\n目击者对事件发生过程提供了连贯的描述。'; break;
    case 'coil': w.example = 'She used a coil of rope to secure the packages in the back of the truck.\n她用一卷绳子把包裹固定在卡车后面。\nThe snake coiled itself around the tree branch, ready to strike at any moment.\n蛇盘绕在树枝上，随时准备攻击。'; break;
    case 'coin': w.example = 'He flipped a coin to decide which team would kick off the game.\n他抛硬币决定哪个队开球。\nThe ancient coin found in the archaeological dig was over two thousand years old.\n在考古挖掘中发现的古钱币已有两千多年的历史。'; break;
    case 'coincide': w.example = 'Our vacation plans happened to coincide with a major music festival in the city.\n我们的度假计划恰好与城市里的一个大型音乐节重合。\nThe meeting will coincide with the annual conference, making travel arrangements complicated.\n会议将与年度大会重合，使旅行安排变得复杂。'; break;
    case 'coincidence': w.example = 'It was a remarkable coincidence that we both chose the same restaurant for dinner.\n我们都选择同一家餐厅吃晚餐，真是一个了不起的巧合。\nThe coincidence of finding her lost necklace on the same day her grandmother passed away was eerie.\n在她祖母去世的同一天找到丢失的项链，这种巧合令人毛骨悚然。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for coach to coincidence');
