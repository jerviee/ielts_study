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
    case 'brood': w.example = 'The hen sat on her brood of eggs waiting for them to hatch.\n母鸡坐在她的一窝蛋上等待它们孵化。\nHe fell into a brood of melancholy after losing his job.\n失业后他陷入了一阵忧郁。'; break;
    case 'brook': w.example = 'The small brook flowed gently through the green meadow.\n小溪缓缓流过绿色的草地。\nThe children skipped stones across the clear brook.\n孩子们在清澈的小溪上打水漂。'; break;
    case 'broom': w.example = 'She used a broom to sweep the fallen leaves from the porch.\n她用扫帚扫掉门廊上的落叶。\nThe witch flew through the sky on her magical broomstick.\n女巫骑着她的魔法扫帚飞过天空。'; break;
    case 'broomstick': w.example = 'The old broomstick was leaning against the kitchen wall.\n旧扫帚靠在厨房墙上。\nIn fairy tales, witches often ride broomsticks through the air.\n在童话故事中，女巫经常骑着扫帚在空中飞行。'; break;
    case 'bros': w.example = 'The three bros spent the weekend camping in the mountains.\n三个兄弟在山上露营度过了周末。\nHis bros always supported him through difficult times.\n他的兄弟们在困难时期总是支持他。'; break;
    case 'brose': w.example = 'He made a warm bowl of brose using oatmeal and hot water.\n他用燕麦片和热水做了一碗温暖的麦片粥。\nBrose is a traditional Scottish porridge-like dish.\nBrose是一种传统的苏格兰粥类菜肴。'; break;
    case 'broth': w.example = 'She simmered a rich broth with vegetables and herbs.\n她用蔬菜和香草炖了一锅浓郁的肉汤。\nThe chicken broth was perfect for warming up on a cold day.\n鸡汤非常适合在寒冷的日子里取暖。'; break;
    case 'brothel': w.example = 'The police raided the illegal brothel in the downtown area.\n警方突袭了市中心的非法妓院。\nBrothels are illegal in many countries around the world.\n妓院在世界上许多国家都是非法的。'; break;
    case 'brother': w.example = 'My older brother helped me move into my new apartment.\n我哥哥帮我搬进了新公寓。\nHe treated his colleagues like brothers in the workplace.\n他在工作场所像兄弟一样对待同事。'; break;
    case 'brotherly': w.example = 'He showed brotherly kindness to the stranger in need.\n他对需要帮助的陌生人表现出兄弟般的 kindness。\nThe two friends maintained a brotherly relationship for many years.\n这两个朋友保持了多年的兄弟般关系。'; break;
    case 'brougham': w.example = 'The elegant brougham carriage arrived to take them to the ball.\n优雅的四轮马车来接他们去舞会。\nBroughams were popular carriages in the 19th century.\n四轮马车在19世纪很流行。'; break;
    case 'brouhaha': w.example = 'There was a great brouhaha over the controversial new policy.\n关于有争议的新政策引起了很大的骚动。\nThe media created a brouhaha over the celebrity\'s comments.\n媒体对这位名人的评论大肆炒作。'; break;
    case 'browbeat': w.example = 'The manager tried to browbeat his employees into working overtime.\n经理试图威逼他的员工加班。\nShe refused to be browbeaten into accepting the unfair deal.\n她拒绝被威逼接受不公平的交易。'; break;
    case 'brown': w.example = 'The leaves turned beautiful shades of brown in the autumn.\n秋天树叶变成了美丽的棕色。\nShe has long brown hair that shines in the sunlight.\n她有一头在阳光下闪闪发光的棕色长发。'; break;
    case 'brownstone': w.example = 'The historic brownstone building was renovated into luxury apartments.\n这座历史悠久的褐砂石建筑被改造成豪华公寓。\nBrownstones are characteristic of New York City architecture.\n褐砂石建筑是纽约市建筑的特色。'; break;
    case 'brows': w.example = 'She raised her brows in surprise at the unexpected news.\n听到意外消息，她惊讶地扬起眉毛。\nHis thick brows gave him a stern appearance.\n他浓密的眉毛使他看起来很严肃。'; break;
    case 'browse': w.example = 'We like to browse through the bookstore on weekends.\n我们喜欢在周末逛书店。\nYou can browse our website for more product information.\n你可以浏览我们的网站获取更多产品信息。'; break;
    case 'browser': w.example = 'She uses a web browser to surf the internet every day.\n她每天使用网络浏览器上网。\nThe browser crashed when she opened too many tabs.\n当她打开太多标签页时，浏览器崩溃了。'; break;
    case 'brucellosis': w.example = 'The veterinarian tested the cattle for brucellosis.\n兽医对牛进行了布鲁氏菌病检测。\nBrucellosis is a contagious disease that affects both animals and humans.\n布鲁氏菌病是一种影响动物和人类的传染病。'; break;
    case 'bruise': w.example = 'She got a big bruise on her knee from falling off her bike.\n她从自行车上摔下来，膝盖上有一个大瘀伤。\nThe apple had a dark bruise where it had been dropped.\n苹果掉下来的地方有一个深色的瘀伤。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for brood to bruise');
