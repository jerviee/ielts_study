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
    case 'buck': w.example = 'The hunter tracked a large buck through the forest.\n猎人在森林里追踪一只大公鹿。\nHe made a quick buck by selling his old car.\n他通过卖掉旧车快速赚了一笔钱。'; break;
    case 'buckbean': w.example = 'The buckbean plant grows in marshy areas near water.\n睡菜植物生长在水边的沼泽地带。\nBuckbean is also known as bogbean in some regions.\n睡菜在一些地区也被称为bogbean。'; break;
    case 'bucket': w.example = 'She carried a bucket of water from the well to the house.\n她从井里提了一桶水到房子里。\nThe child filled the bucket with colorful seashells at the beach.\n孩子在海滩上把桶装满了彩色贝壳。'; break;
    case 'buckle': w.example = 'The belt buckle was made of shiny silver.\n皮带扣是用闪亮的银制成的。\nThe shoe buckle came undone while she was walking.\n她走路时鞋扣松了。'; break;
    case 'bud': w.example = 'The rosebud opened into a beautiful flower.\n玫瑰花苞绽放成一朵美丽的花。\nThe trees began to bud with the arrival of spring.\n春天来临时，树木开始发芽。'; break;
    case 'budge': w.example = 'The heavy rock wouldn\'t budge no matter how hard he pushed.\n无论他怎么用力推，沉重的石头都不动。\nShe refused to budge on her demands during the negotiation.\n谈判中她拒绝在要求上让步。'; break;
    case 'budget': w.example = 'We need to create a budget to manage our monthly expenses.\n我们需要制定预算来管理每月开支。\nThe government announced its annual budget for the upcoming year.\n政府宣布了来年的年度预算。'; break;
    case 'buff': w.example = 'He used a cloth to buff the car until it shone.\n他用布把车擦得闪闪发光。\nThe weightlifter has impressive buff arms from years of training.\n举重运动员经过多年训练，手臂肌肉发达。'; break;
    case 'buffalo': w.example = 'The buffalo grazed peacefully on the grassy plains.\n水牛在草原上平静地吃草。\nBuffalo meat is a popular food in many parts of the world.\n水牛肉是世界许多地方的流行食物。'; break;
    case 'buffer': w.example = 'The buffer protects the computer\'s memory from sudden power loss.\n缓冲器保护计算机内存免受突然断电的影响。\nUse a buffer zone to separate the two conflicting groups.\n使用缓冲区分隔两个冲突的群体。'; break;
    case 'buffet': w.example = 'The restaurant offered a delicious buffet with many dishes.\n这家餐厅提供美味的自助餐，有许多菜肴。\nWe had a buffet dinner at the wedding reception.\n我们在婚宴上吃了自助餐。'; break;
    case 'bug': w.example = 'A small bug crawled across the kitchen counter.\n一只小虫爬过厨房柜台。\nThere\'s a bug in the computer program that causes it to crash.\n计算机程序中有一个导致崩溃的bug。'; break;
    case 'bugbane': w.example = 'The bugbane plant has white flowers that bloom in late summer.\n升麻植物在夏末开白色花。\nBugbane is also known as cohosh in some areas.\n升麻在一些地区也被称为cohosh。'; break;
    case 'buggy': w.example = 'The old horse-drawn buggy creaked as it moved down the road.\n旧马车在路上行驶时吱吱作响。\nThe software has been buggy since the last update.\n自上次更新以来，软件一直有bug。'; break;
    case 'bughouse': w.example = 'The old house was infested with bugs, making it a bughouse.\n老房子里满是虫子，成了一个虫屋。\nIn slang, bughouse means a mental institution.\n在俚语中，bughouse指精神病院。'; break;
    case 'bugle': w.example = 'The soldier played the bugle to signal the start of the day.\n士兵吹响号角标志着一天的开始。\nThe bugle call echoed across the military base.\n号角声在军事基地回荡。'; break;
    case 'build': w.example = 'They plan to build a new school in the neighborhood.\n他们计划在社区建一所新学校。\nBuilding strong relationships takes time and effort.\n建立牢固的关系需要时间和努力。'; break;
    case 'build-up': w.example = 'There has been a build-up of tension between the two countries.\n两国之间的紧张局势一直在加剧。\nThe build-up of traffic caused long delays on the highway.\n交通拥堵导致高速公路上长时间延误。'; break;
    case 'building': w.example = 'The tall building dominated the city skyline.\n高楼大厦主导着城市天际线。\nConstruction workers were busy building the new office building.\n建筑工人正忙着建造新办公楼。'; break;
    case 'bulb': w.example = 'The light bulb burned out and needed to be replaced.\n灯泡烧坏了，需要更换。\nThe tulip bulb sprouted into a beautiful flower in spring.\n郁金香球茎在春天发芽长成美丽的花。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for buck to bulb');
