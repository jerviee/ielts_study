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
    case 'brilliant': w.example = 'She is a brilliant scientist who has made many important discoveries.\n她是一位杰出的科学家，有许多重要发现。\nThe fireworks display was absolutely brilliant and colorful.\n烟花表演非常精彩绚丽。'; break;
    case 'brimful': w.example = 'The cup was brimful with hot steaming coffee.\n杯子装满了热气腾腾的咖啡。\nHis heart was brimful of joy when he saw his newborn baby.\n当他看到刚出生的婴儿时，心中充满喜悦。'; break;
    case 'brimstone': w.example = 'The smell of brimstone filled the air near the volcano.\n火山附近弥漫着硫磺的气味。\nIn the Bible, brimstone is often associated with divine punishment.\n在圣经中，硫磺常与神圣惩罚联系在一起。'; break;
    case 'brinded': w.example = 'The brinded cat sat on the windowsill watching the birds.\n那只斑纹猫坐在窗台上看鸟。\nBrinded patterns are common in certain breeds of dogs and cats.\n斑纹图案在某些品种的狗和猫中很常见。'; break;
    case 'brindle': w.example = 'The boxer dog had a beautiful brindle coat.\n那只拳师犬有漂亮的斑纹皮毛。\nBrindle coloring is caused by a specific gene in animals.\n斑纹颜色是由动物体内特定基因引起的。'; break;
    case 'brine': w.example = 'The fisherman preserved the fish in a barrel of brine.\n渔夫将鱼保存在一桶盐水中。\nBrine is commonly used for pickling vegetables and preserving food.\n盐水常用于腌制蔬菜和保存食物。'; break;
    case 'bring': w.example = 'Could you bring me a glass of water from the kitchen?\n你能从厨房给我拿杯水吗？\nPlease bring your umbrella in case it rains later.\n请带上雨伞，以防晚些时候下雨。'; break;
    case 'brink': w.example = 'The hiker stood at the brink of the cliff looking down.\n徒步旅行者站在悬崖边缘往下看。\nThe country was on the brink of economic collapse.\n这个国家处于经济崩溃的边缘。'; break;
    case 'brinkmanship': w.example = 'The political leaders engaged in dangerous brinkmanship during the crisis.\n政治领导人在危机期间从事危险的边缘政策。\nBrinkmanship is a risky strategy in international relations.\n边缘政策是国际关系中的一种冒险策略。'; break;
    case 'briny': w.example = 'The briny seawater stung his eyes as he swam.\n他游泳时，咸涩的海水刺痛了他的眼睛。\nBriny vegetables are popular in many coastal regions.\n咸蔬菜在许多沿海地区很受欢迎。'; break;
    case 'brisk': w.example = 'We took a brisk walk through the park on a cool morning.\n在一个凉爽的早晨，我们在公园里轻快地散步。\nThe brisk wind helped to cool us down on the hot day.\n轻快的风在炎热的日子里帮助我们降温。'; break;
    case 'brisket': w.example = 'The slow-cooked brisket was tender and flavorful.\n慢炖的牛腩鲜嫩多汁。\nBrisket is a popular cut of beef for barbecues.\n牛腩是烧烤的热门牛肉部位。'; break;
    case 'bristle': w.example = 'The brush had stiff bristles that scrubbed the dishes clean.\n刷子有坚硬的刷毛，可以把盘子刷干净。\nThe dog\'s fur began to bristle when it saw the stranger.\n狗看到陌生人时，毛发开始竖立。'; break;
    case 'bristly': w.example = 'The cactus has bristly spines that protect it from animals.\n仙人掌有带刺的尖刺保护自己免受动物侵害。\nHe gave her a bristly kiss on the cheek.\n他在她脸颊上亲了一下，胡子扎人。'; break;
    case 'britain': w.example = 'Many tourists visit Britain to see its historic landmarks.\n许多游客访问英国参观其历史地标。\nBritain consists of England, Scotland, and Wales.\n英国由英格兰、苏格兰和威尔士组成。'; break;
    case 'britannia': w.example = 'Britannia is the national personification of Great Britain.\n不列颠女神是大不列颠的拟人化象征。\nThe statue of Britannia stands proudly in the city center.\n不列颠女神雕像自豪地矗立在市中心。'; break;
    case 'british': w.example = 'She has a strong British accent when she speaks English.\n她说英语时有浓重的英国口音。\nBritish cuisine includes dishes like fish and chips.\n英国菜包括炸鱼薯条等菜肴。'; break;
    case 'brittle': w.example = 'The old book had brittle pages that crumbled when touched.\n那本旧书的书页很脆，一碰就碎。\nBrittle bones are common in older people with osteoporosis.\n骨质疏松的老年人常见骨骼脆弱。'; break;
    case 'broad': w.example = 'The river was too broad to swim across safely.\n这条河太宽了，无法安全游过去。\nShe has broad knowledge of many different subjects.\n她对许多不同学科有广泛的知识。'; break;
    case 'broadbean': w.example = 'We planted broadbeans in the garden this spring.\n今年春天我们在花园里种了蚕豆。\nBroadbeans are a nutritious legume rich in protein.\n蚕豆是富含蛋白质的营养豆类。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for brilliant to broadbean');
