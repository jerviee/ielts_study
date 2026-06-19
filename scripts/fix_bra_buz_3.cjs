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
    case 'breadwinner': w.example = 'As the sole breadwinner, he worked long hours to support his family.\n作为唯一的养家糊口者，他长时间工作来养活家人。\nShe became the breadwinner after her husband lost his job.\n丈夫失业后，她成为了养家糊口的人。'; break;
    case 'break': w.example = 'The children were excited to break open the piñata at the party.\n孩子们兴奋地在派对上打破皮纳塔。\nWe need to take a break and rest for a few minutes.\n我们需要休息几分钟。'; break;
    case 'breakage': w.example = 'The company reported a high rate of breakage in their glass products.\n该公司报告其玻璃产品破损率很高。\nCareless handling can lead to breakage of fragile items.\n粗心处理会导致易碎物品破损。'; break;
    case 'breakaway': w.example = 'The breakaway region declared its independence from the country.\n分离地区宣布脱离该国独立。\nA breakaway group formed after disagreements with the main organization.\n与主要组织发生分歧后，一个分离团体成立了。'; break;
    case 'breakfast': w.example = 'We enjoyed a delicious breakfast of pancakes and fresh fruit.\n我们享用了美味的煎饼和新鲜水果早餐。\nEating a healthy breakfast is important for starting the day.\n吃健康的早餐对开始一天很重要。'; break;
    case 'breakneck': w.example = 'He drove at breakneck speed to get to the hospital on time.\n他以极快的速度开车准时赶到医院。\nThe roller coaster reached breakneck speeds on the steep descent.\n过山车在陡峭下降时达到了极快的速度。'; break;
    case 'breakout': w.example = 'The breakout from the prison was carefully planned by the inmates.\n囚犯们精心策划了越狱。\nA breakout of the virus occurred in the crowded city.\n病毒在拥挤的城市爆发。'; break;
    case 'breakthrough': w.example = 'Scientists announced a major breakthrough in cancer research.\n科学家宣布了癌症研究的重大突破。\nThe negotiations led to a breakthrough in the peace talks.\n谈判导致和平谈判取得突破。'; break;
    case 'breakup': w.example = 'The breakup of their relationship was painful for both of them.\n他们关系的破裂对双方都很痛苦。\nThe breakup of the company was due to financial difficulties.\n公司的解体是由于财务困难。'; break;
    case 'breast': w.example = 'She held the baby close to her breast to comfort him.\n她把婴儿抱在怀里安慰他。\nBreast cancer awareness has increased in recent years.\n近年来乳腺癌意识有所提高。'; break;
    case 'breastplate': w.example = 'The knight wore a shiny breastplate for protection in battle.\n骑士穿着闪亮的胸甲在战斗中保护自己。\nThe armor included a sturdy breastplate made of steel.\n盔甲包括一块坚固的钢制胸甲。'; break;
    case 'breath': w.example = 'She took a deep breath before diving into the pool.\n她深呼吸后跳入泳池。\nThe cold air made her breath visible in the morning.\n冷空气使她的呼吸在早晨可见。'; break;
    case 'breathable': w.example = 'These shoes have breathable material to keep feet cool.\n这些鞋子有透气材料保持脚部凉爽。\nBreathable fabrics are essential for summer clothing.\n透气面料对夏季服装至关重要。'; break;
    case 'breathe': w.example = 'It is important to breathe deeply during yoga practice.\n瑜伽练习时深呼吸很重要。\nThe polluted air made it difficult to breathe.\n污染的空气让人呼吸困难。'; break;
    case 'breech': w.example = 'The baby was in breech position during childbirth.\n分娩时婴儿处于臀位。\nThe gunner loaded the breech of the cannon with gunpowder.\n炮手将火药装入大炮的后膛。'; break;
    case 'breeches': w.example = 'The historical reenactor wore knee-length breeches.\n历史重演者穿着齐膝马裤。\nBreeches were commonly worn by men in the 18th century.\n马裤在18世纪是男性常见的穿着。'; break;
    case 'breed': w.example = 'Farmers breed cattle for both meat and milk production.\n农民饲养牛用于肉和奶生产。\nThis dog breed is known for its loyalty and intelligence.\n这个犬种以其忠诚和智慧而闻名。'; break;
    case 'breeze': w.example = 'A gentle breeze rustled the leaves on the trees.\n微风吹动树上的叶子沙沙作响。\nWe enjoyed a pleasant breeze during our walk along the beach.\n我们在海滩散步时享受着宜人的微风。'; break;
    case 'breve': w.example = 'In music, a breve is a note with four beats.\n在音乐中，全音符是一个四拍的音符。\nThe Latin word 
