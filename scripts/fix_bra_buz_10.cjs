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
    case 'bulbous': w.example = 'The bulbous plant had large round flowers in the garden.\n花园里的球根植物有大而圆的花。\nHis bulbous nose was a distinctive feature of his face.\n他那球状的鼻子是他脸上的一个显著特征。'; break;
    case 'bulge': w.example = 'The backpack had a noticeable bulge where the laptop was stored.\n背包在存放笔记本电脑的地方有一个明显的凸起。\nHer eyes bulged in surprise when she saw the gift.\n看到礼物时，她惊讶得眼睛都突出来了。'; break;
    case 'bulk': w.example = 'We bought the rice in bulk to save money.\n我们批量购买大米以节省钱。\nThe bulk of the work was completed before the deadline.\n大部分工作在截止日期前完成。'; break;
    case 'bulky': w.example = 'The bulky package was difficult to carry up the stairs.\n这个笨重的包裹很难搬上楼。\nBulky items require special handling during shipping.\n bulky物品在运输过程中需要特殊处理。'; break;
    case 'bull': w.example = 'The angry bull charged at the matador in the arena.\n愤怒的公牛向竞技场上的斗牛士冲去。\nHe was caught in a bull market and made a lot of money.\n他赶上了牛市，赚了很多钱。'; break;
    case 'bullace': w.example = 'The bullace tree produced small plum-like fruits in autumn.\n野李树在秋天结出类似李子的小果实。\nBullace is a wild relative of the plum tree.\n野李是李树的野生亲缘种。'; break;
    case 'bulldog': w.example = 'The bulldog had a wrinkled face and stocky build.\n斗牛犬有一张皱巴巴的脸和矮壮的身材。\nBulldogs are known for their tenacity and loyalty.\n斗牛犬以其坚韧和忠诚而闻名。'; break;
    case 'bullet': w.example = 'The bullet missed the target by just a few inches.\n子弹只差几英寸就击中目标了。\nHe dodged the bullet when the project was canceled.\n项目取消时，他躲过了一劫。'; break;
    case 'bulletin': w.example = 'The school bulletin announced the dates for the upcoming exams.\n学校公告公布了即将到来的考试日期。\nI read the latest bulletin from the company this morning.\n我今天早上读了公司的最新公告。'; break;
    case 'bullrush': w.example = 'The bullrushes grew tall along the edge of the pond.\n芦苇沿着池塘边缘长得很高。\nBullrushes provide habitat for various aquatic animals.\n芦苇为各种水生动物提供栖息地。'; break;
    case 'bullseye': w.example = 'He hit the bullseye with his first shot in the archery competition.\n他在射箭比赛中第一箭就命中了靶心。\nThe dart landed directly in the bullseye.\n飞镖直接落在靶心上。'; break;
    case 'bullwhack': w.example = 'The cowboy used a bullwhip to control the cattle.\n牛仔用牛鞭控制牛群。\nThe sound of the bullwhip cracking echoed across the ranch.\n牛鞭的噼啪声在牧场上回荡。'; break;
    case 'bulwark': w.example = 'The castle served as a bulwark against enemy attacks.\n这座城堡作为抵御敌人攻击的堡垒。\nEducation is a bulwark against ignorance and prejudice.\n教育是抵御无知和偏见的堡垒。'; break;
    case 'bumbag': w.example = 'She wore a bumbag around her waist while traveling.\n她旅行时在腰上挂了一个腰包。\nThe bumbag kept her valuables safe during the trip.\n腰包在旅行中保护了她的贵重物品。'; break;
    case 'bump': w.example = 'She felt a bump on her head after hitting it on the low ceiling.\n她头撞到低矮的天花板后感到头上有个肿块。\nThe car went over a bump in the road.\n汽车碾过路上的一个颠簸。'; break;
    case 'bumpkin': w.example = 'The city dwellers teased the country bumpkin about his rural ways.\n城里人取笑这个乡巴佬的乡下作风。\nHe may be a bumpkin, but he has a kind heart.\n他可能是个乡巴佬，但他心地善良。'; break;
    case 'bumpy': w.example = 'The bumpy road made the car ride very uncomfortable.\n颠簸的道路使乘车非常不舒服。\nWe had a bumpy flight due to turbulence.\n由于气流，我们的航班颠簸不平。'; break;
    case 'bunbury': w.example = 'He created a bunbury to avoid attending the boring meeting.\n他编造了一个借口来避免参加无聊的会议。\nBunburying refers to creating a fictional person for convenience.\nBunburying指为了方便而创造一个虚构的人。'; break;
    case 'bunch': w.example = 'She picked a bunch of flowers from her garden.\n她从花园里摘了一束花。\nA bunch of friends gathered at the café for coffee.\n一群朋友聚集在咖啡馆喝咖啡。'; break;
    case 'bunco': w.example = 'The con artist ran a bunco scheme to defraud elderly people.\n骗子进行了一个诈骗计划来欺骗老年人。\nBunco is a form of fraud that preys on trusting individuals.\nBunco是一种利用信任的人的欺诈形式。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for bulbous to bunco');
