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
    case 'coach': w.example = 'The experienced coach spent hours training the team for the upcoming championship game.\n经验丰富的教练花了几个小时训练球队为即将到来的锦标赛做准备。\nShe hired a personal coach to help her improve her public speaking skills.\n她聘请了一位私人教练来帮助她提高演讲技巧。'; break;
    case 'coal': w.example = 'Miners work long hours underground to extract coal from deep within the earth.\n矿工们在地下长时间工作，从地球深处开采煤炭。\nBurning coal releases harmful gases that contribute to air pollution and climate change.\n燃烧煤炭会释放有害气体，加剧空气污染和气候变化。'; break;
    case 'coarse': w.example = 'The coarse sandpaper is perfect for smoothing rough surfaces on wooden furniture.\n粗砂纸非常适合打磨木制家具的粗糙表面。\nHis coarse manners and loud voice made him unpopular at the formal dinner party.\n他粗鲁的举止和大声的说话声使他在正式晚宴上不受欢迎。'; break;
    case 'coast': w.example = 'The beautiful coastline stretches for miles along the Mediterranean Sea.\n美丽的海岸线沿着地中海绵延数英里。\nWe decided to drive along the coast to enjoy the stunning ocean views.\n我们决定沿着海岸开车，欣赏令人惊叹的海景。'; break;
    case 'coastal': w.example = 'Many coastal towns rely on fishing and tourism as their main sources of income.\n许多沿海城镇依靠渔业和旅游业作为主要收入来源。\nThe coastal erosion has caused significant damage to homes near the beach.\n海岸侵蚀对海滩附近的房屋造成了重大破坏。'; break;
    case 'coat': w.example = 'She wore a stylish winter coat to protect herself from the freezing temperatures outside.\n她穿着一件时尚的冬大衣来抵御外面的严寒。\nThe lab technician put on a protective coat before entering the sterile environment.\n实验室技术员在进入无菌环境前穿上了防护服。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for coa group (6 words)');
