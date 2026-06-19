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
    case 'breviary': w.example = 'The priest recited the breviary during morning prayer.\n牧师在晨祷时背诵日课经。\nThe ancient breviary contains prayers for each day of the year.\n古老的日课经包含一年中每一天的祈祷文。'; break;
    case 'brick': w.example = 'He used a trowel to lay each brick carefully.\n他用泥刀小心地铺设每一块砖。\nThe old building was constructed entirely of red bricks.\n这座老建筑完全由红砖建造。'; break;
    case 'brickbat': w.example = 'The angry crowd threw brickbats at the politician during the speech.\n愤怒的人群在演讲期间向政客扔掷砖块。\nCritics hurled brickbats at the controversial new policy.\n批评者猛烈抨击有争议的新政策。'; break;
    case 'brickyard': w.example = 'The brickyard produced thousands of bricks every day.\n砖厂每天生产数千块砖。\nWorkers at the brickyard load bricks onto trucks for delivery.\n砖厂工人将砖块装上卡车运输。'; break;
    case 'bridal': w.example = 'She wore a beautiful bridal gown on her wedding day.\n她在婚礼当天穿着漂亮的婚纱。\nThe bridal party gathered for photos before the ceremony.\n伴娘伴郎团在仪式前聚集拍照。'; break;
    case 'bride': w.example = 'The bride walked down the aisle arm in arm with her father.\n新娘挽着父亲的手臂走下过道。\nThe bride and groom exchanged vows in front of their loved ones.\n新娘和新郎在亲人面前交换誓言。'; break;
    case 'bridegroom': w.example = 'The nervous bridegroom waited at the altar for his bride.\n紧张的新郎在祭坛前等待他的新娘。\nThe bridegroom gave a heartfelt speech at the wedding reception.\n新郎在婚宴上发表了衷心的演讲。'; break;
    case 'bridge': w.example = 'The bridge spans the river connecting the two towns.\n这座桥横跨河流连接两个城镇。\nWe crossed the old stone bridge on our hike through the countryside.\n我们徒步穿越乡村时走过了那座古老的石桥。'; break;
    case 'bridgehead': w.example = 'The army established a bridgehead on the enemy side of the river.\n军队在河的敌方一侧建立了桥头堡。\nThe bridgehead provided a secure base for further operations.\n桥头堡为进一步行动提供了安全基地。'; break;
    case 'bridgework': w.example = 'The dentist recommended bridgework to replace the missing teeth.\n牙医建议用牙桥修复缺失的牙齿。\nThe bridgework was carefully crafted to match her natural teeth.\n牙桥经过精心制作以匹配她的天然牙齿。'; break;
    case 'brief': w.example = 'Could you give me a brief summary of the meeting?\n你能给我一个会议的简短总结吗？\nThe judge gave the jury brief instructions before deliberations.\n法官在审议前向陪审团作了简短指示。'; break;
    case 'briefcase': w.example = 'He carried his important documents in a leather briefcase.\n他用皮公文包携带重要文件。\nThe executive arrived at the meeting with a sleek briefcase.\n高管带着一个时尚的公文包到达会议。'; break;
    case 'briefly': w.example = 'Let me briefly explain the main points of the proposal.\n让我简要解释提案的要点。\nWe stopped briefly to admire the beautiful view from the hill.\n我们短暂停留欣赏山上的美景。'; break;
    case 'brier': w.example = 'The hiker got caught in a patch of thorny briers.\n徒步旅行者被一片荆棘缠住了。\nBriers are common in the wild areas surrounding the forest.\n荆棘在森林周围的野生地区很常见。'; break;
    case 'brigade': w.example = 'The fire brigade responded quickly to the emergency call.\n消防队迅速响应紧急呼叫。\nA brigade of soldiers marched through the city streets.\n一队士兵列队穿过城市街道。'; break;
    case 'brigadier': w.example = 'The brigadier led his troops into battle with courage.\n准将勇敢地带领部队投入战斗。\nThe brigadier was promoted to general after many years of service.\n准将在服役多年后晋升为将军。'; break;
    case 'brigand': w.example = 'The brigand robbed travelers on the remote mountain road.\n强盗在偏远的山路上抢劫旅行者。\nLegend tells of a fearsome brigand who haunted the old forest.\n传说中有一个可怕的强盗出没在古老的森林里。'; break;
    case 'bright': w.example = 'The sun shone bright in the clear blue sky.\n太阳在清澈的蓝天上明亮地照耀着。\nShe has a bright future ahead of her with her talents.\n凭借她的才华，她有着光明的未来。'; break;
    case 'brighten': w.example = 'The flowers brighten up the room with their vibrant colors.\n鲜花用鲜艳的色彩照亮了房间。\nHer smile helped to brighten my day when I was feeling down.\n当我情绪低落时，她的微笑照亮了我的一天。'; break;
    case 'brightly': w.example = 'The stars shone brightly in the night sky.\n星星在夜空中明亮地闪烁。\nShe smiled brightly when she saw her old friend.\n她看到老朋友时灿烂地笑了。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for breviary to brightly');
