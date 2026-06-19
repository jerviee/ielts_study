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
    case 'brace': w.example = 'She wore a beautiful gold brace on her wrist to match her elegant evening dress.\n她手腕上戴着一个漂亮的金手镯来搭配她优雅的晚礼服。\nThe construction worker used a sturdy metal brace to support the heavy wooden beam.\n建筑工人用坚固的金属支架支撑沉重的木梁。'; break;
    case 'bracelet': w.example = 'The beautiful silver bracelet sparkled brightly in the sunlight as she walked down the street.\n她走在街上时，漂亮的银手镯在阳光下闪闪发光。\nHe bought an expensive diamond bracelet for his wife on their tenth wedding anniversary.\n他在结婚十周年纪念日给妻子买了一个昂贵的钻石手镯。'; break;
    case 'brachiopod': w.example = 'The ancient brachiopod fossils were discovered embedded in the limestone cliffs by paleontologists.\n古生物学家在石灰岩悬崖中发现了嵌入的古老腕足动物化石。\nScientists study brachiopod shells to understand the ancient marine ecosystems of the past.\n科学家研究腕足动物贝壳以了解过去的古代海洋生态系统。'; break;
    case 'bracket': w.example = 'The wooden bookshelf bracket needs to be securely fastened to the wall with screws.\n木制书架支架需要用螺丝牢固地固定在墙上。\nUse metal brackets to organize and support the wires behind the computer desk.\n用金属支架整理和支撑电脑桌后面的电线。'; break;
    case 'brackish': w.example = 'The brackish water in the estuary supports a unique variety of plant and animal life.\n河口的咸水支持独特种类的植物和动物生命。\nBrackish ponds are often found near coastal areas with a mix of freshwater and saltwater.\n咸水池塘通常在沿海地区发现，混合了淡水和盐水。'; break;
    case 'bract': w.example = 'The colorful red bract of the poinsettia plant is often mistaken for a flower by many people.\n一品红植物的彩色红色苞片常被许多人误认为是花朵。\nBotanists carefully study the structure and function of bracts in various plant species.\n植物学家仔细研究各种植物物种中苞片的结构和功能。'; break;
    case 'brad': w.example = 'The skilled carpenter used a small metal brad to attach the decorative trim to the wooden furniture.\n熟练的木匠用一个小金属钉子把装饰条固定在木制家具上。\nBrads are commonly used in woodworking for lightweight and delicate fastening tasks.\n钉子常用于木工中的轻量和精细固定任务。'; break;
    case 'brae': w.example = 'The sheep grazed peacefully on the lush green brae overlooking the beautiful valley below.\n羊在俯瞰下方美丽山谷的郁郁葱葱的绿色山坡上平静地吃草。\nWalking up the steep and winding brae took much more effort than we expected.\n爬上陡峭蜿蜒的山坡比我们预期的要费力得多。'; break;
    case 'braft': w.example = 'They built a sturdy wooden raft using large logs and strong rope to cross the wide river.\n他们用大原木和结实的绳子建造了一个坚固的木筏来过河。\nThe raft slowly drifted downstream with the gentle current of the calm river.\n木筏随着平静河流的缓缓水流慢慢向下游漂去。'; break;
    case 'braid': w.example = 'She spent several hours braiding her long hair into an intricate and beautiful pattern.\n她花了几个小时把长发编成复杂漂亮的图案。\nThe little girl loved having her hair braided with colorful ribbons by her mother.\n小女孩喜欢妈妈用彩色丝带编她的头发。'; break;
    case 'braille': w.example = 'Blind students learn to read and write using the braille system of raised dots on paper.\n盲人学生使用纸上凸起点的盲文系统学习读写。\nThe library provides a wide selection of books printed in braille for visually impaired readers.\n图书馆为视障读者提供大量盲文印刷书籍。'; break;
    case 'brain': w.example = 'The human brain is an incredibly complex organ responsible for thinking, memory, and emotions.\n人脑是一个难以置信的复杂器官，负责思考、记忆和情感。\nScientists are constantly researching how the brain processes and stores information.\n科学家不断研究大脑如何处理和存储信息。'; break;
    case 'brainchild': w.example = 'The new innovative project was the brainchild of the company\'s creative CEO.\n这个新的创新项目是公司创意CEO的创意。\nHer latest groundbreaking invention was the brainchild of years of dedicated research.\n她最新的突破性发明是多年专注研究的成果。'; break;
    case 'brainsick': w.example = 'The old man\'s strange and brainsick behavior worried his family and close friends.\n老人奇怪的疯狂行为让他的家人和亲密朋友感到担忧。\nDoctors tried to understand the underlying cause of his unusual brainsick condition.\n医生试图了解他异常精神状况的根本原因。'; break;
    case 'brainstorm': w.example = 'The marketing team gathered to brainstorm creative ideas for the upcoming advertising campaign.\n营销团队聚集在一起为即将到来的广告活动集思广益。\nWe need to brainstorm innovative solutions to solve this challenging business problem.\n我们需要集思广益寻找创新解决方案来解决这个具有挑战性的商业问题。'; break;
    case 'brainwash': w.example = 'The dangerous cult tried to brainwash its members into following their extreme beliefs.\n危险的邪教试图对其成员进行洗脑，让他们追随极端信仰。\nParents worry about social media platforms trying to brainwash impressionable young people.\n父母担心社交媒体平台试图对易受影响的年轻人进行洗脑。'; break;
    case 'braise': w.example = 'The experienced chef will braise the tender beef slowly in rich red wine for several hours.\n经验丰富的厨师将用浓郁的红酒慢慢炖嫩牛肉几个小时。\nBraising is a classic cooking technique that combines searing and slow simmering.\n炖是一种经典的烹饪技术，结合了煎和慢炖。'; break;
    case 'brake': w.example = 'The quick-thinking driver slammed on the brakes to avoid hitting the pedestrian crossing.\n反应迅速的司机猛踩刹车以避免撞到过马路的行人。\nRegular maintenance of your car\'s brakes is essential for safe driving on the road.\n定期保养汽车刹车对道路安全驾驶至关重要。'; break;
    case 'bramble': w.example = 'The wild blackberry bramble grew abundantly along the edge of the dense forest.\n野生黑莓灌木丛在茂密森林的边缘大量生长。\nChildren love to pick ripe and juicy brambles during the warm summer months.\n孩子们喜欢在温暖的夏季采摘成熟多汁的黑莓。'; break;
    case 'bran': w.example = 'Adding nutritious bran to your morning breakfast cereal increases your daily fiber intake.\n在早晨早餐麦片里加营养麦麸可以增加每日纤维摄入量。\nBran is a healthy byproduct of milling wheat and other cereal grains.\n麦麸是碾磨小麦和其他谷物的健康副产品。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for brace to bran (second attempt)');
