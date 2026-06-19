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
    case 'bundle': w.example = 'She tied a bundle of sticks together with twine.\n她用绳子把一捆树枝绑在一起。\nThe baby was wrapped in a warm bundle of blankets.\n婴儿被包裹在一捆温暖的毯子里。'; break;
    case 'bungalow': w.example = 'They built a small bungalow by the beach for their vacation home.\n他们在海滩边建了一个小平房作为度假屋。\nThe bungalow had a large porch overlooking the ocean.\n平房有一个俯瞰大海的大门廊。'; break;
    case 'bungle': w.example = 'He managed to bungle the simple task despite clear instructions.\n尽管有明确指示，他还是把简单的任务搞砸了。\nDon\'t bungle this opportunity - it may never come again.\n别搞砸这个机会可能再也不会有了。'; break;
    case 'bunion': w.example = 'She suffered from a painful bunion on her big toe.\n她大脚趾上有一个疼痛的拇囊炎。\nWearing tight shoes can cause bunions to develop over time.\n穿紧鞋会导致拇囊炎随着时间发展。'; break;
    case 'bunk': w.example = 'The camper climbed into his bunk bed after a long day of hiking.\n露营者在长途徒步后爬上了他的双层床。\nWe had to bunk together in the small cabin during the storm.\n暴风雨期间，我们不得不在小屋里挤在一起睡觉。'; break;
    case 'bunker': w.example = 'The soldiers took shelter in the underground bunker during the attack.\n士兵们在袭击期间躲在地下掩体里。\nThe golf ball landed in the sand bunker near the green.\n高尔夫球落在果岭附近的沙坑里。'; break;
    case 'bunkhouse': w.example = 'The ranch hands slept in a bunkhouse on the cattle ranch.\n牧场工人睡在养牛场的宿舍里。\nThe old bunkhouse had simple wooden beds and shared facilities.\n旧宿舍有简单的木床和共用设施。'; break;
    case 'bunkum': w.example = 'The politician\'s speech was full of bunkum and empty promises.\n这位政治家的演讲充满了空话和空洞的承诺。\nDon\'t listen to his bunkum - he doesn\'t know what he\'s talking about.\n别听他的空话他不知道自己在说什么。'; break;
    case 'buoy': w.example = 'The red buoy marked the entrance to the harbor.\n红色浮标标志着港口的入口。\nLife jackets help to keep you buoyant in the water.\n救生衣帮助你在水中保持浮力。'; break;
    case 'buoyancy': w.example = 'The buoyancy of the raft kept it afloat on the water.\n木筏的浮力使它漂浮在水面上。\nUnderstanding buoyancy is important for learning to swim.\n理解浮力对学习游泳很重要。'; break;
    case 'burble': w.example = 'The stream burbled gently as it flowed over the smooth stones.\n小溪流过光滑的石头时轻轻潺潺作响。\nShe burbled on about her new job without taking a breath.\n她滔滔不绝地谈论她的新工作，没有停下来。'; break;
    case 'burbled': w.example = 'The little girl burbled happily as she played in the park.\n小女孩在公园里玩耍时开心地咿咿呀呀。\nThe fountain burbled continuously in the center of the courtyard.\n喷泉在庭院中央不断潺潺作响。'; break;
    case 'burden': w.example = 'Carrying the heavy backpack was a burden on his shoulders.\n背着沉重的背包是他肩上的负担。\nThe financial burden of medical bills weighed heavily on the family.\n医疗费用的经济负担沉重地压在这个家庭身上。'; break;
    case 'burdock': w.example = 'The burdock plant has large leaves and purple flowers.\n牛蒡植物有大叶子和紫色花朵。\nBurdock root is used in traditional medicine and cooking.\n牛蒡根用于传统医学和烹饪。'; break;
    case 'bureau': w.example = 'The travel bureau helped us plan our trip to Europe.\n旅行社帮我们计划了欧洲之旅。\nShe kept her documents in the top drawer of the bureau.\n她把文件放在办公桌的最上面抽屉里。'; break;
    case 'bureaucracy': w.example = 'Dealing with government bureaucracy can be very frustrating.\n与政府官僚机构打交道可能会非常令人沮丧。\nThe company was slowed down by unnecessary bureaucracy.\n不必要的官僚作风使公司进展缓慢。'; break;
    case 'burette': w.example = 'The chemist used a burette to measure the liquid precisely.\n化学家使用滴定管精确测量液体。\nBurettes are essential tools in chemistry laboratories.\n滴定管是化学实验室的基本工具。'; break;
    case 'burgage': w.example = 'The medieval town had a system of burgage tenure for its citizens.\n中世纪城镇对其公民实行一种土地保有权制度。\nBurgage was a common form of land ownership in the Middle Ages.\n土地保有权是中世纪常见的土地所有权形式。'; break;
    case 'burgee': w.example = 'The yacht flew a colorful burgee from its mast.\n游艇从桅杆上飘扬着一面彩色的三角旗。\nThe club\'s burgee was proudly displayed at the regatta.\n俱乐部的三角旗在帆船赛上自豪地展示。'; break;
    case 'burgeon': w.example = 'The city continued to burgeon with new businesses and residents.\n这座城市随着新企业和居民的涌入而继续发展。\nHer talent began to burgeon after years of practice and dedication.\n经过多年的练习和奉献，她的才华开始蓬勃发展。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for bundle to burgeon');
