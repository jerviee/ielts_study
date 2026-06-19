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
    case 'bruiser': w.example = 'The professional wrestler was known as a tough bruiser in the ring.\n这位职业摔跤手在擂台上以强悍著称。\nHe got into a fight with a bruiser at the bar last night.\n他昨晚在酒吧和一个壮汉打架。'; break;
    case 'brumble': w.example = 'The old car continued to brumble down the bumpy road.\n那辆旧车在颠簸的路上继续隆隆作响。\nThe thunder began to brumble in the distance.\n雷声开始在远处隆隆作响。'; break;
    case 'brume': w.example = 'A thick brume covered the valley at dawn.\n黎明时分，浓雾覆盖了山谷。\nThe morning brume made it difficult to see the road ahead.\n晨雾使前方道路难以看清。'; break;
    case 'brunch': w.example = 'We enjoyed a leisurely brunch at the café on Sunday.\n我们周日在咖啡馆享用了悠闲的早午餐。\nBrunch combines breakfast and lunch into one meal.\n早午餐将早餐和午餐合并成一餐。'; break;
    case 'brunet': w.example = 'The brunet actress starred in the popular television series.\n这位黑发女演员主演了热门电视剧。\nHe is a tall brunet with green eyes.\n他是一个高个子黑发男子，有着绿色的眼睛。'; break;
    case 'brunt': w.example = 'The soldier bore the brunt of the enemy attack.\n士兵承受了敌人攻击的主要冲击。\nShe felt the brunt of her boss\'s anger over the mistake.\n她因这个错误受到了老板的严厉指责。'; break;
    case 'brush': w.example = 'She used a soft brush to paint the delicate details.\n她用软刷绘制精细的细节。\nThe artist cleaned his paintbrushes after finishing the painting.\n艺术家完成画作后清洗了画笔。'; break;
    case 'brushwood': w.example = 'They built a shelter using brushwood and leaves.\n他们用灌木和树叶搭建了一个庇护所。\nThe path was overgrown with brushwood and thorns.\n小路上长满了灌木和荆棘。'; break;
    case 'brusk': w.example = 'His brusk manner made him unpopular with his colleagues.\n他粗鲁的举止使他不受同事欢迎。\nShe gave a brusk reply and walked away quickly.\n她粗鲁地回答了一声，然后迅速走开。'; break;
    case 'brutal': w.example = 'The brutal attack left the victim with serious injuries.\n残忍的袭击使受害者受了重伤。\nThe dictator ruled the country with brutal force.\n独裁者用残酷的力量统治这个国家。'; break;
    case 'brutalism': w.example = 'The concrete building was an example of architectural brutalism.\n这座混凝土建筑是建筑粗野主义的一个例子。\nBrutalism was popular in the mid-20th century.\n粗野主义在20世纪中期很流行。'; break;
    case 'brutality': w.example = 'The police were accused of brutality during the arrest.\n警方在逮捕过程中被指控使用暴力。\nThe documentary exposed the brutality of the war.\n这部纪录片揭露了战争的残酷。'; break;
    case 'bub': w.example = 'The little boy was called Bub by his grandfather.\n这个小男孩被他的祖父叫做Bub。\nBub is a colloquial term meaning brother or buddy.\nBub是兄弟或伙伴的口语称呼。'; break;
    case 'bubble': w.example = 'The children blew soap bubbles in the park.\n孩子们在公园里吹肥皂泡。\nThe housing market experienced a bubble that eventually burst.\n房地产市场经历了一个最终破裂的泡沫。'; break;
    case 'buccaneer': w.example = 'The buccaneer sailed the Caribbean in search of treasure.\n海盗在加勒比海航行寻找宝藏。\nBuccaneers were pirates who operated in the Caribbean during the 17th century.\n海盗是17世纪在加勒比海活动的海盗。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for bruiser to buccaneer');
