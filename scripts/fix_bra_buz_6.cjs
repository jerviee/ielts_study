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
    case 'broadcast': w.example = 'The news broadcast reported on the latest developments in the region.\n新闻广播报道了该地区的最新发展。\nThe radio station will broadcast the concert live this evening.\n广播电台今晚将现场直播音乐会。'; break;
    case 'broaden': w.example = 'Traveling helps to broaden your perspective on the world.\n旅行有助于拓宽你对世界的看法。\nThe company plans to broaden its product line next year.\n公司计划明年扩大产品线。'; break;
    case 'broader': w.example = 'We need to take a broader approach to solving this problem.\n我们需要采取更广泛的方法来解决这个问题。\nThe broader implications of this decision are significant.\n这个决定的更广泛影响是重大的。'; break;
    case 'broadsheet': w.example = 'The national broadsheet newspaper has a large readership.\n这份全国性的大报有大量读者。\nBroadsheets typically cover more serious news than tabloids.\n大报通常比小报报道更严肃的新闻。'; break;
    case 'broadside': w.example = 'The ship fired a broadside at the enemy vessel.\n这艘船向敌舰发射了舷侧炮火。\nThe critic launched a broadside attack on the government\'s policy.\n评论家对政府政策发起了猛烈攻击。'; break;
    case 'brocade': w.example = 'The dress was made of beautiful silk brocade with gold threads.\n这件连衣裙是用带有金线的漂亮丝绸锦缎制成的。\nBrocade fabric is often used for formal and ceremonial clothing.\n锦缎面料常用于正式和礼仪服装。'; break;
    case 'broccoli': w.example = 'She steamed fresh broccoli as a healthy side dish.\n她蒸了新鲜西兰花作为健康的配菜。\nBroccoli is a nutritious vegetable rich in vitamins and fiber.\n西兰花是富含维生素和纤维的营养蔬菜。'; break;
    case 'brochure': w.example = 'The travel agency handed out brochures about their vacation packages.\n旅行社分发了关于他们度假套餐的小册子。\nThe company brochure showcases their latest products and services.\n公司小册子展示了他们最新的产品和服务。'; break;
    case 'broderie': w.example = 'The dress featured intricate broderie anglaise on the sleeves.\n这件连衣裙袖子上有精致的英式刺绣。\nBroderie work requires patience and attention to detail.\n刺绣工作需要耐心和对细节的关注。'; break;
    case 'brogue': w.example = 'He speaks with a thick Irish brogue that is hard to understand.\n他说话带有浓重的爱尔兰口音，很难理解。\nThe traditional brogue shoes are popular in Ireland.\n传统的布洛克鞋在爱尔兰很受欢迎。'; break;
    case 'broil': w.example = 'The chef will broil the steak to perfection on the grill.\n厨师将在烤架上把牛排烤得完美。\nBroiling is a quick cooking method that uses direct heat.\n烤是一种使用直接热量的快速烹饪方法。'; break;
    case 'broken': w.example = 'The broken window needs to be replaced before winter.\n破碎的窗户需要在冬天前更换。\nHis broken leg kept him in the hospital for weeks.\n他骨折的腿让他在医院住了几周。'; break;
    case 'broker': w.example = 'The stock broker helped his clients make profitable investments.\n股票经纪人帮助他的客户进行有利可图的投资。\nA good broker can provide valuable advice on financial matters.\n好的经纪人可以提供有价值的财务建议。'; break;
    case 'brokerage': w.example = 'The brokerage firm handles transactions for hundreds of clients.\n这家经纪公司为数百名客户处理交易。\nBrokerage fees vary depending on the type of service provided.\n经纪费用根据提供的服务类型而有所不同。'; break;
    case 'brolly': w.example = 'She always carries a small brolly in her bag for unexpected rain.\n她总是在包里放一把小雨伞以防突然下雨。\nThe colorful brolly protected him from the summer sun.\n彩色雨伞保护他免受夏日阳光的照射。'; break;
    case 'bromine': w.example = 'Bromine is a chemical element with properties between chlorine and iodine.\n溴是一种化学元素，性质介于氯和碘之间。\nBromine is used in various industrial applications and disinfectants.\n溴用于各种工业应用和消毒剂。'; break;
    case 'bronchus': w.example = 'The doctor examined his bronchus for signs of infection.\n医生检查了他的支气管是否有感染迹象。\nThe bronchus connects the trachea to the lungs.\n支气管连接气管和肺。'; break;
    case 'bronco': w.example = 'The cowboy rode the wild bronco in the rodeo competition.\n牛仔在牛仔竞技比赛中骑乘野马。\nBroncos are known for their strength and agility.\n野马以其力量和敏捷性而闻名。'; break;
    case 'bronze': w.example = 'The statue was cast from solid bronze and stood in the park.\n这座雕像是用实心青铜铸造的，矗立在公园里。\nBronze is an alloy of copper and tin.\n青铜是铜和锡的合金。'; break;
    case 'brooch': w.example = 'She pinned a diamond brooch to her coat lapel.\n她在大衣翻领上别了一枚钻石胸针。\nThe antique brooch was passed down through generations.\n这枚古董胸针代代相传。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for broadcast to brooch');
