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
    case 'burglar': w.example = 'The burglar broke into the house through the kitchen window.\n窃贼通过厨房窗户闯入了房子。\nThe alarm system scared off the burglar before he could steal anything.\n警报系统在窃贼偷东西之前把他吓跑了。'; break;
    case 'burglary': w.example = 'The police investigated the burglary that occurred last night.\n警方调查了昨晚发生的入室盗窃案。\nBurglary rates have decreased since the neighborhood installed security cameras.\n自从社区安装了安全摄像头后，入室盗窃率下降了。'; break;
    case 'burial': w.example = 'The burial took place in the small village cemetery.\n葬礼在小村庄的墓地举行。\nAncient burial sites often contain valuable artifacts and treasures.\n古代墓地通常包含珍贵的文物和宝藏。'; break;
    case 'burlesque': w.example = 'The burlesque show combined comedy, music, and dance.\n滑稽表演结合了喜剧、音乐和舞蹈。\nBurlesque was popular in the early 20th century variety shows.\n滑稽表演在20世纪早期的综艺节目中很受欢迎。'; break;
    case 'burn': w.example = 'The fire burned brightly in the fireplace on a cold winter night.\n在寒冷的冬夜，壁炉里的火烧得很旺。\nShe accidentally burned her hand while cooking dinner.\n她做饭时不小心烫伤了手。'; break;
    case 'burner': w.example = 'The stove burner was lit to boil water for tea.\n点燃了炉灶的燃烧器来烧水沏茶。\nThe airplane\'s burner malfunctioned during takeoff.\n飞机的燃烧器在起飞时出现故障。'; break;
    case 'burnish': w.example = 'He used a cloth to burnish the silver until it gleamed.\n他用布把银器擦得闪闪发光。\nThe antique dealer carefully burnished the old brass lamp.\n古董商仔细擦亮了那盏旧铜灯。'; break;
    case 'burnt': w.example = 'The toast was slightly burnt around the edges.\n吐司边缘有点烧焦了。\nThe forest fire left behind a landscape of burnt trees.\n森林大火留下了一片烧焦的树木景观。'; break;
    case 'burp': w.example = 'The baby let out a loud burp after feeding.\n婴儿喂食后打了一个响亮的嗝。\nHe tried to burp quietly during the meeting.\n他在会议期间试图安静地打嗝。'; break;
    case 'burr': w.example = 'The seed had sharp burrs that stuck to his clothing.\n种子有锋利的刺，粘在他的衣服上。\nThe burr on the metal needed to be smoothed with a file.\n金属上的毛刺需要用锉刀打磨光滑。'; break;
    case 'burrow': w.example = 'The rabbit dug a burrow in the soft earth.\n兔子在软土里挖了一个洞穴。\nThe mole burrowed underground in search of insects.\n鼹鼠在地下挖洞寻找昆虫。'; break;
    case 'burro': w.example = 'The burro carried supplies up the steep mountain trail.\n驴子驮着物资爬上陡峭的山路。\nBurros are known for their sure-footedness in rough terrain.\n驴子以其在崎岖地形中的稳健性而闻名。'; break;
    case 'bursa': w.example = 'The doctor examined the inflamed bursa in his shoulder.\n医生检查了他肩膀发炎的滑囊。\nBursa are fluid-filled sacs that reduce friction in joints.\n滑囊是减少关节摩擦的充满液体的囊。'; break;
    case 'burst': w.example = 'The balloon burst with a loud pop when it hit the sharp branch.\n气球碰到锋利的树枝时砰的一声爆了。\nShe burst into tears when she heard the sad news.\n听到这个不幸的消息，她突然哭了起来。'; break;
    case 'bury': w.example = 'They decided to bury their beloved pet in the backyard.\n他们决定把心爱的宠物埋在后院。\nThe treasure was buried deep underground for centuries.\n宝藏被深埋在地下几个世纪。'; break;
    case 'bus': w.example = 'The bus arrived at the station five minutes late.\n公共汽车晚了五分钟到达车站。\nShe takes the bus to work every morning.\n她每天早上乘公共汽车上班。'; break;
    case 'bush': w.example = 'The bird built its nest in a dense bush near the garden.\n鸟在花园附近的茂密灌木丛中筑巢。\nThey had to bushwhack through the thick underbrush to reach the campsite.\n他们不得不穿过茂密的灌木丛才能到达营地。'; break;
    case 'bushel': w.example = 'The farmer harvested a bushel of apples from his orchard.\n农夫从果园收获了一蒲式耳苹果。\nA bushel is a unit of measurement for dry goods.\n蒲式耳是干货的计量单位。'; break;
    case 'bushy': w.example = 'The dog had a bushy tail that wagged happily.\n狗有一条毛茸茸的尾巴，高兴地摇着。\nShe trimmed the bushy hedge in the front yard.\n她修剪了前院茂密的树篱。'; break;
    case 'bust': w.example = 'The police conducted a bust of the illegal gambling ring.\n警方突袭了非法赌博团伙。\nHe went bust after his business failed.\n他的生意失败后破产了。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for burglar to bust');
