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
    case 'brace': w.example = 'She wore a gold brace on her wrist to match her elegant dress.\n她手腕上戴着一个金手镯来搭配她优雅的连衣裙。\nThe construction worker used a brace to support the heavy wooden beam.\n建筑工人用支架支撑沉重的木梁。'; break;
    case 'bracelet': w.example = 'The beautiful silver bracelet sparkled in the sunlight as she walked.\n她走路时，漂亮的银手镯在阳光下闪闪发光。\nHe bought a diamond bracelet for his wife on their anniversary.\n他在结婚周年纪念日给妻子买了一个钻石手镯。'; break;
    case 'brachiopod': w.example = 'The ancient brachiopod fossils were discovered in the limestone cliffs.\n在石灰岩悬崖上发现了古老的腕足动物化石。\nScientists study brachiopod shells to understand ancient marine ecosystems.\n科学家研究腕足动物贝壳以了解古代海洋生态系统。'; break;
    case 'bracket': w.example = 'The bookshelf bracket needs to be securely fastened to the wall.\n书架支架需要牢固地固定在墙上。\nUse brackets to organize the wires behind the computer desk.\n用支架整理电脑桌后面的电线。'; break;
    case 'brackish': w.example = 'The brackish water in the estuary supports unique plant and animal life.\n河口的咸水支持独特的植物和动物生命。\nBrackish ponds are often found near coastal areas with mixed freshwater and saltwater.\n咸水池塘通常在沿海地区发现，混合了淡水和盐水。'; break;
    case 'bract': w.example = 'The colorful bract of the poinsettia plant is often mistaken for a flower.\n一品红植物的彩色苞片常被误认为是花朵。\nBotanists study the structure and function of bracts in various plant species.\n植物学家研究各种植物物种中苞片的结构和功能。'; break;
    case 'brad': w.example = 'The carpenter used a small brad to attach the trim to the furniture.\n木匠用一个小钉子把装饰条固定在家具上。\nBrads are commonly used in woodworking for lightweight fastening tasks.\n钉子常用于木工中的轻量固定任务。'; break;
    case 'brae': w.example = 'The sheep grazed peacefully on the green brae overlooking the valley.\n羊在俯瞰山谷的绿色山坡上平静地吃草。\nWalking up the steep brae took more effort than expected.\n爬上陡峭的山坡比预期的要费力。'; break;
    case 'braft': w.example = 'They built a sturdy raft using logs and rope to cross the river.\n他们用原木和绳子建造了一个坚固的木筏过河。\nThe raft drifted downstream with the current of the river.\n木筏随着河流的水流向下游漂去。'; break;
    case 'braid': w.example = 'She spent hours braiding her long hair into an intricate pattern.\n她花了几个小时把长发编成复杂的图案。\nThe little girl loved having her hair braided with colorful ribbons.\n小女孩喜欢用彩色丝带编头发。'; break;
    case 'braille': w.example = 'Blind students learn to read using the braille system of raised dots.\n盲人学生使用盲文点字系统学习阅读。\nThe library provides books printed in braille for visually impaired readers.\n图书馆为视障读者提供盲文印刷书籍。'; break;
    case 'brain': w.example = 'The human brain is a complex organ responsible for thinking and memory.\n人脑是负责思考和记忆的复杂器官。\nScientists are constantly researching how the brain processes information.\n科学家不断研究大脑如何处理信息。'; break;
    case 'brainchild': w.example = 'The new project was the brainchild of the company\'s innovative CEO.\n这个新项目是公司创新CEO的创意。\nHer latest invention was the brainchild of years of research and experimentation.\n她最新的发明是多年研究和实验的成果。'; break;
    case 'brainsick': w.example = 'The old man\'s brainsick behavior worried his family and friends.\n老人的疯狂行为让他的家人和朋友感到担忧。\nDoctors tried to understand the cause of his brainsick condition.\n医生试图了解他精神失常的原因。'; break;
    case 'brainstorm': w.example = 'The team gathered to brainstorm ideas for the upcoming marketing campaign.\n团队聚集在一起为即将到来的营销活动集思广益。\nWe need to brainstorm creative solutions to solve this challenging problem.\n我们需要集思广益寻找创造性的解决方案来解决这个难题。'; break;
    case 'brainwash': w.example = 'The cult tried to brainwash its members into following their extreme beliefs.\n邪教试图对其成员进行洗脑，让他们追随极端信仰。\nParents worry about social media platforms trying to brainwash young people.\n父母担心社交媒体平台试图对年轻人进行洗脑。'; break;
    case 'braise': w.example = 'The chef will braise the beef slowly in red wine for several hours.\n厨师将用红酒慢慢炖牛肉几个小时。\nBraising is a cooking technique that combines searing and slow cooking.\n炖是一种结合煎和慢煮的烹饪技术。'; break;
    case 'brake': w.example = 'The driver slammed on the brakes to avoid hitting the pedestrian.\n司机猛踩刹车以避免撞到行人。\nRegular maintenance of your car\'s brakes is essential for safety.\n定期保养汽车刹车对安全至关重要。'; break;
    case 'bramble': w.example = 'The blackberry bramble grew wild along the edge of the forest.\n黑莓灌木丛沿着森林边缘野生生长。\nChildren love to pick ripe brambles during the summer months.\n孩子们喜欢在夏季采摘成熟的黑莓。'; break;
    case 'bran': w.example = 'Adding bran to your breakfast cereal increases your fiber intake.\n在早餐麦片里加麦麸可以增加纤维摄入量。\nBran is a nutritious byproduct of milling wheat and other grains.\n麦麸是碾磨小麦和其他谷物的营养副产品。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for brace to bran');
