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
    case 'cautious': w.example = 'Drivers should be cautious when driving in heavy rain and fog.\n司机在大雨和雾天驾驶时应该谨慎。\nShe was cautious about sharing her personal information with strangers online.\n她对在网上与陌生人分享个人信息很谨慎。'; break;
    case 'cave': w.example = 'Explorers discovered ancient paintings on the walls of the dark cave.\n探险家在黑暗洞穴的墙壁上发现了古老的绘画。\nThe children built a cozy cave using blankets and chairs in the living room.\n孩子们用毯子和椅子在客厅里搭建了一个舒适的洞穴。'; break;
    case 'cease': w.example = 'The two countries agreed to cease all military operations immediately.\n两国同意立即停止所有军事行动。\nPlease cease making noise so that everyone can concentrate on their work.\n请停止制造噪音，以便每个人都能专注于工作。'; break;
    case 'ceiling': w.example = 'The beautiful chandelier hung from the high ceiling of the grand ballroom.\n漂亮的吊灯悬挂在宏伟宴会厅的高高的天花板上。\nWe need to repair the leaky ceiling before the rainy season begins.\n我们需要在雨季开始前修复漏水的天花板。'; break;
    case 'celebrate': w.example = 'The family gathered together to celebrate their grandmother\'s 80th birthday.\n全家人聚在一起庆祝祖母的80岁生日。\nPeople around the world celebrate various festivals throughout the year.\n世界各地的人们全年庆祝各种节日。'; break;
    case 'celebration': w.example = 'The city held a grand celebration to mark its 200th anniversary.\n这座城市举行了盛大的庆祝活动来纪念其200周年。\nThe celebration included fireworks, music, and a parade through the streets.\n庆祝活动包括烟花、音乐和穿过街道的游行。'; break;
    case 'celebrity': w.example = 'The famous celebrity arrived at the event surrounded by bodyguards and fans.\n这位著名名人在保镖和粉丝的簇拥下到达活动现场。\nMany young people dream of becoming a celebrity in the entertainment industry.\n许多年轻人梦想成为娱乐行业的名人。'; break;
    case 'cell': w.example = 'The scientist observed the cell under the powerful microscope in the lab.\n科学家在实验室里用强力显微镜观察细胞。\nPrisoners are often confined to their cells for long periods of time.\n囚犯经常被长时间限制在牢房里。'; break;
    case 'cellar': w.example = 'The wine cellar stored hundreds of bottles of fine wine from around the world.\n酒窖储存了数百瓶来自世界各地的美酒。\nWe found old furniture and boxes in the dark cellar of the old house.\n我们在老房子黑暗的地窖里发现了旧家具和箱子。'; break;
    case 'cement': w.example = 'Workers mixed cement and water to create a strong foundation for the building.\n工人混合水泥和水为建筑创建坚固的地基。\nThe broken sidewalk was repaired with fresh cement by the city workers.\n城市工人用新水泥修复了破损的人行道。'; break;
    case 'cemetery': w.example = 'The old cemetery contains graves of people who lived over a century ago.\n这座古老的墓地包含一个多世纪前人们的坟墓。\nVisitors placed flowers on the graves during the cemetery tour.\n游客在墓地参观时在坟墓上放置了鲜花。'; break;
    case 'census': w.example = 'Every ten years, the government conducts a census to count the population.\n政府每十年进行一次人口普查。\nThe census data provides valuable information for urban planning and resource allocation.\n人口普查数据为城市规划和资源分配提供宝贵信息。'; break;
    case 'center': w.example = 'The shopping center attracts thousands of visitors every weekend.\n购物中心每个周末吸引数千名游客。\nThe city center is the busiest part of town with many shops and restaurants.\n市中心是镇上最繁忙的地方，有许多商店和餐馆。'; break;
    case 'central': w.example = 'The central station serves as the main transportation hub for the entire city.\n中央车站是整个城市的主要交通枢纽。\nThe central government announced new policies to improve economic development.\n中央政府宣布了改善经济发展的新政策。'; break;
    case 'century': w.example = 'Many great inventions were made during the 20th century.\n20世纪有许多伟大的发明。\nThe ancient castle has stood for over a century overlooking the valley.\n这座古老的城堡已经矗立了一个多世纪，俯瞰着山谷。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for cautious to century');
