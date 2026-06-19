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
    case 'but': w.example = 'I wanted to go to the park, but it started to rain heavily.\n我想去公园，但开始下大雨了。\nShe is small but very strong and capable of lifting heavy objects.\n她个子小但很强壮，能举起重物。'; break;
    case 'butane': w.example = 'Butane is commonly used as fuel for portable stoves and lighters.\n丁烷通常用作便携式炉灶和打火机的燃料。\nThe camping stove runs on butane canisters that are easy to replace.\n露营炉使用易于更换的丁烷罐。'; break;
    case 'butch': w.example = 'The butcher cut the meat into smaller pieces for cooking.\n屠夫把肉切成小块准备烹饪。\nHe had a butch haircut that made him look very tough.\n他留着短寸发型，看起来很硬朗。'; break;
    case 'butcher': w.example = 'The butcher carefully selected the best cuts of meat for his customers.\n屠夫为顾客精心挑选最好的肉块。\nShe learned how to butcher a chicken from her grandmother.\n她从祖母那里学会了如何屠宰鸡。'; break;
    case 'butchery': w.example = 'The old butchery on Main Street has been in business for over 50 years.\n大街上的老肉铺已经营业50多年了。\nThe butchery specializes in locally sourced organic meats.\n这家肉铺专门经营本地采购的有机肉类。'; break;
    case 'butler': w.example = 'The butler opened the door and greeted the guests at the mansion.\n管家打开门，在豪宅门口迎接客人。\nThe wealthy family employed a butler to manage their household affairs.\n这个富裕家庭雇了一个管家来管理他们的家务。'; break;
    case 'butt': w.example = 'He accidentally bumped his butt against the edge of the table.\n他不小心把屁股撞到了桌子边缘。\nThe cigarette butt was left on the ground, causing a small fire.\n烟蒂被留在地上，引起了一场小火。'; break;
    case 'butte': w.example = 'The butte rose sharply from the flat desert landscape.\n孤丘从平坦的沙漠景观中急剧升起。\nWe hiked to the top of the butte to enjoy the panoramic view.\n我们徒步登上孤丘顶部欣赏全景。'; break;
    case 'butter': w.example = 'She spread butter on her toast before adding jam.\n她在吐司上抹黄油，然后加果酱。\nButter is made from churning cream until it becomes solid.\n黄油是通过搅拌奶油直到凝固制成的。'; break;
    case 'butterfly': w.example = 'A beautiful butterfly fluttered around the colorful flowers in the garden.\n一只美丽的蝴蝶在花园里五颜六色的花朵周围飞舞。\nThe caterpillar transformed into a butterfly after spending weeks in its cocoon.\n毛毛虫在茧里待了几周后变成了蝴蝶。'; break;
    case 'buttery': w.example = 'The buttery croissant melted in my mouth with every bite.\n黄油羊角面包每一口都在嘴里融化。\nThe sauce had a rich, buttery flavor that complemented the fish perfectly.\n酱汁有一种浓郁的黄油味，与鱼完美搭配。'; break;
    case 'buttocks': w.example = 'She fell and landed hard on her buttocks, causing a bruise.\n她摔倒了，重重地摔在屁股上，造成了瘀伤。\nThe yoga pose helped to strengthen her buttocks muscles.\n瑜伽姿势帮助她增强臀部肌肉。'; break;
    case 'buttress': w.example = 'The ancient stone buttress supported the weight of the cathedral wall.\n古老的石扶壁支撑着大教堂墙壁的重量。\nThe arguments presented buttressed his position on the controversial issue.\n提出的论点支持了他在这个有争议问题上的立场。'; break;
    case 'button': w.example = 'She sewed a missing button back onto her coat.\n她把丢失的纽扣缝回外套上。\nPress the button to turn on the lights in the room.\n按按钮打开房间里的灯。'; break;
    case 'buttonhole': w.example = 'He pinned a flower to his buttonhole for the wedding ceremony.\n他在扣眼上别了一朵花参加婚礼。\nThe tailor carefully stitched the buttonhole on the new suit.\n裁缝仔细缝制了新西装上的扣眼。'; break;
    case 'buttress': w.example = 'The castle wall was reinforced with massive stone buttresses.\n城堡墙壁用巨大的石扶壁加固。\nThe evidence buttressed his claim that he was innocent.\n证据支持了他无罪的主张。'; break;
    case 'buz': w.example = 'The buz sounded loudly, signaling the end of the game.\n蜂鸣声响亮地响起，标志着比赛结束。\nIn some contexts, buz is used as an informal term for a buzzer.\n在某些情况下，buz用作蜂鸣器的非正式术语。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for but to buz');
