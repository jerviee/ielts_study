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
    case 'branch': w.example = 'The large tree branch broke during the strong storm that hit the entire area.\n大树枝在袭击整个地区的强风暴中折断了。\nThe international company decided to open a new branch office in the downtown business area.\n这家国际公司决定在市中心商业区开设一个新的分公司。'; break;
    case 'brand': w.example = 'The popular brand of premium coffee is known for its rich and smooth flavor.\n这个受欢迎的优质咖啡品牌以其浓郁顺滑的口感而闻名。\nShe always buys stylish clothes from her favorite designer brand when shopping.\n她购物时总是买她最喜欢的设计师品牌的时尚服装。'; break;
    case 'brandish': w.example = 'The angry man began to brandish a sharp knife at the frightened crowd.\n愤怒的人开始向受惊的人群挥舞一把锋利的刀子。\nThe medieval knight would brandish his shiny sword before entering the battle.\n中世纪骑士在进入战斗前会挥舞他闪亮的剑。'; break;
    case 'brandy': w.example = 'He enjoyed a glass of fine French brandy after dinner each evening.\n他每天晚饭后喜欢喝一杯优质法国白兰地。\nBrandy is often made from distilled wine and aged in oak wooden barrels.\n白兰地通常由蒸馏葡萄酒制成，并在橡木桶中陈酿。'; break;
    case 'brash': w.example = 'His impulsive and brash behavior often caused conflicts with his coworkers.\n他冲动和鲁莽的行为经常与同事发生冲突。\nThe brash young man spoke without thinking about the possible consequences.\n这个鲁莽的年轻人说话不考虑可能的后果。'; break;
    case 'brass': w.example = 'The talented musician polished the brass instrument until it shone brightly.\n有才华的音乐家把铜管乐器擦得闪闪发光。\nBrass is an alloy made primarily of copper and zinc metals.\n黄铜是主要由铜和锌金属制成的合金。'; break;
    case 'brasserie': w.example = 'We had a delicious dinner at a cozy French brasserie in the heart of the city.\n我们在市中心一家舒适的法国小餐馆吃了一顿美味的晚餐。\nThe traditional French brasserie served delicious classic dishes.\n这家传统法国小餐馆供应美味的经典菜肴。'; break;
    case 'brat': w.example = 'The spoiled little brat threw a terrible tantrum when he didn\'t get what he wanted.\n那个被宠坏的小捣蛋鬼没得到想要的东西就大发脾气。\nShe was tired of dealing with her annoying neighbor\'s bratty son.\n她厌倦了处理她烦人的邻居家那个调皮的儿子。'; break;
    case 'brattice': w.example = 'The experienced miners used a wooden brattice to control the airflow in the tunnel.\n经验丰富的矿工们用木制隔板来控制隧道内的气流。\nBuilding a proper brattice requires careful planning and skilled construction.\n建造合适的隔板需要仔细规划和熟练施工。'; break;
    case 'brave': w.example = 'The brave firefighter rushed into the burning building to save trapped lives.\n勇敢的消防员冲进燃烧的建筑物去救被困的人。\nShe showed brave determination in the face of extremely difficult challenges.\n面对极其困难的挑战，她表现出勇敢的决心。'; break;
    case 'bravery': w.example = 'The heroic soldier was awarded a medal for his bravery in battle.\n这位英勇的士兵因在战斗中的英勇表现而被授予奖章。\nHer extraordinary bravery inspired others to stand up for their beliefs.\n她非凡的勇敢激励他人坚持自己的信念。'; break;
    case 'brawl': w.example = 'A violent and chaotic brawl broke out between the two groups at the bar.\n酒吧里两群人之间爆发了一场暴力混乱的斗殴。\nThe police arrived quickly to break up the drunken street brawl.\n警察迅速赶到制止了醉酒街头斗殴。'; break;
    case 'brawn': w.example = 'The professional wrestler relied on his impressive brawn to defeat opponents.\n职业摔跤手依靠他令人印象深刻的蛮力击败对手。\nPhysical brawn alone is not enough to succeed in today\'s competitive world.\n仅凭体力在当今竞争激烈的世界是不够成功的。'; break;
    case 'brawny': w.example = 'The brawny construction worker lifted the heavy steel beam with ease.\n强壮的建筑工人轻松地举起沉重的钢梁。\nHis muscular and brawny arms showed years of hard physical labor.\n他肌肉发达的强壮手臂显示出多年的体力劳动。'; break;
    case 'bray': w.example = 'The stubborn donkey let out a loud bray that echoed through the valley.\n固执的驴子发出一声响亮的叫声，回荡在山谷中。\nThe distinctive sound of the donkey\'s bray could be heard from far away.\n驴子独特的叫声从远处就能听到。'; break;
    case 'braze': w.example = 'The skilled metalworker used heat to braze the pieces of metal together.\n熟练的金属工人用热量将金属件钎焊在一起。\nBrazing creates a strong and durable bond between different metal components.\n钎焊在不同金属部件之间形成牢固耐用的结合。'; break;
    case 'brazier': w.example = 'The cold campers gathered around the warm brazier to keep themselves warm.\n寒冷的露营者聚集在温暖的火盆周围取暖。\nThe outdoor restaurant used a traditional brazier to cook the meat over an open flame.\n户外餐厅用传统火盆在明火上烤肉。'; break;
    case 'bread': w.example = 'She baked a fresh loaf of homemade bread for breakfast this morning.\n她今天早上烤了一条新鲜的自制面包当早餐。\nBread is a basic staple food in many different cultures around the world.\n面包是世界上许多不同文化的基本主食。'; break;
    case 'breadbasket': w.example = 'The fertile agricultural region is known as the breadbasket of the country.\n这片肥沃的农业地区被称为国家的粮仓。\nThe hardworking farmers in the breadbasket region grow abundant crops each year.\n粮仓地区勤劳的农民每年种植大量农作物。'; break;
    case 'breadth': w.example = 'The remarkable breadth of his knowledge impressed everyone at the meeting.\n他知识的非凡广度给会议上的每个人留下了深刻印象。\nThe impressive bridge spans the full breadth of the wide and deep river.\n这座令人印象深刻的桥横跨整条宽阔深邃的河流。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for branch to breadth (second attempt)');
