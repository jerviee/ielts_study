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
    case 'branch': w.example = 'The tree branch broke during the strong storm that hit the area.\n树枝在袭击该地区的强风暴中折断了。\nThe company decided to open a new branch office in the downtown area.\n公司决定在市中心开设一个新的分公司。'; break;
    case 'brand': w.example = 'The popular brand of coffee is known for its rich and smooth flavor.\n这个受欢迎的咖啡品牌以其浓郁顺滑的口感而闻名。\nShe always buys clothes from her favorite brand when shopping.\n她购物时总是买她最喜欢品牌的衣服。'; break;
    case 'brandish': w.example = 'The angry man began to brandish a knife at the crowd.\n愤怒的人开始向人群挥舞刀子。\nThe knight would brandish his sword before entering the battle.\n骑士在进入战斗前会挥舞他的剑。'; break;
    case 'brandy': w.example = 'He enjoyed a glass of fine brandy after dinner each evening.\n他每天晚饭后喜欢喝一杯优质白兰地。\nBrandy is often made from distilled wine and aged in wooden barrels.\n白兰地通常由蒸馏葡萄酒制成，并在木桶中陈酿。'; break;
    case 'brash': w.example = 'His brash behavior often caused conflicts with his coworkers.\n他鲁莽的行为经常与同事发生冲突。\nThe brash young man spoke without thinking about the consequences.\n这个鲁莽的年轻人说话不考虑后果。'; break;
    case 'brass': w.example = 'The musician polished the brass instrument until it shone brightly.\n音乐家把铜管乐器擦得闪闪发光。\nBrass is an alloy made primarily of copper and zinc.\n黄铜是主要由铜和锌制成的合金。'; break;
    case 'brasserie': w.example = 'We had dinner at a cozy brasserie in the heart of the city.\n我们在市中心一家舒适的小餐馆吃了晚饭。\nThe French brasserie served delicious traditional dishes.\n这家法国小餐馆供应美味的传统菜肴。'; break;
    case 'brat': w.example = 'The spoiled brat threw a tantrum when he didn\'t get what he wanted.\n那个被宠坏的孩子没得到想要的东西就发脾气。\nShe was tired of dealing with her neighbor\'s bratty son.\n她厌倦了处理邻居家那个调皮的儿子。'; break;
    case 'brattice': w.example = 'The miners used a brattice to control the airflow in the tunnel.\n矿工们用隔板来控制隧道内的气流。\nBuilding a brattice requires careful planning and construction.\n建造隔板需要仔细规划和施工。'; break;
    case 'brave': w.example = 'The brave firefighter rushed into the burning building to save lives.\n勇敢的消防员冲进燃烧的建筑物去救人。\nShe showed brave determination in the face of difficult challenges.\n面对困难挑战，她表现出勇敢的决心。'; break;
    case 'bravery': w.example = 'The soldier was awarded a medal for his bravery in battle.\n这位士兵因在战斗中的英勇表现而被授予奖章。\nHer bravery inspired others to stand up for what they believed in.\n她的勇敢激励他人坚持自己的信念。'; break;
    case 'brawl': w.example = 'A violent brawl broke out between the two groups at the bar.\n酒吧里两群人之间爆发了激烈的斗殴。\nThe police arrived quickly to break up the drunken brawl.\n警察迅速赶到制止了醉酒斗殴。'; break;
    case 'brawn': w.example = 'The wrestler relied on his brawn to defeat his opponents.\n摔跤手依靠他的蛮力击败对手。\nPhysical brawn alone is not enough to succeed in today\'s world.\n仅凭体力在当今世界是不够成功的。'; break;
    case 'brawny': w.example = 'The brawny construction worker lifted the heavy steel beam easily.\n强壮的建筑工人轻松地举起沉重的钢梁。\nHis brawny arms showed years of hard physical labor.\n他强壮的手臂显示出多年的体力劳动。'; break;
    case 'bray': w.example = 'The donkey let out a loud bray that echoed through the valley.\n驴子发出一声响亮的叫声，回荡在山谷中。\nThe sound of the donkey\'s bray could be heard from far away.\n驴子的叫声从远处就能听到。'; break;
    case 'braze': w.example = 'The metalworker used heat to braze the pieces of metal together.\n金属工人用热量将金属件钎焊在一起。\nBrazing creates a strong bond between different metal components.\n钎焊在不同金属部件之间形成牢固的结合。'; break;
    case 'brazier': w.example = 'The campers gathered around the brazier to keep warm.\n露营者聚集在火盆周围取暖。\nThe restaurant used a brazier to cook the meat over an open flame.\n餐厅用火盆在明火上烤肉。'; break;
    case 'bread': w.example = 'She baked a fresh loaf of bread for breakfast this morning.\n她今天早上烤了一条新鲜的面包当早餐。\nBread is a staple food in many cultures around the world.\n面包是世界上许多文化的主食。'; break;
    case 'breadbasket': w.example = 'The fertile region is known as the breadbasket of the country.\n这片肥沃的地区被称为国家的粮仓。\nThe farmers in the breadbasket region grow abundant crops each year.\n粮仓地区的农民每年种植大量农作物。'; break;
    case 'breadth': w.example = 'The breadth of his knowledge impressed everyone at the meeting.\n他知识的广度给会议上的每个人留下了深刻印象。\nThe bridge spans the full breadth of the wide river.\n这座桥横跨整条宽阔的河流。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for branch to breadth');
