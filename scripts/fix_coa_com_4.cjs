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
    case 'committee': w.example = 'The committee meets every month to discuss important issues affecting the organization.\n委员会每月开会讨论影响组织的重要问题。\nShe was elected to serve on the planning committee for the upcoming event.\n她被选为即将举行的活动规划委员会成员。'; break;
    case 'commodity': w.example = 'Oil is one of the most valuable commodities traded on the global market.\n石油是全球市场上交易最有价值的商品之一。\nThe country\'s economy relies heavily on exporting agricultural commodities.\n该国经济严重依赖出口农产品。'; break;
    case 'common': w.example = 'It is common for people to feel nervous before an important presentation.\n人们在重要演讲前感到紧张是很常见的。\nThe two countries share many common interests and goals.\n这两个国家有许多共同的利益和目标。'; break;
    case 'commonly': w.example = 'The disease is commonly found in tropical regions with high humidity.\n这种疾病常见于湿度高的热带地区。\nAspirin is commonly used to relieve pain and reduce fever.\n阿司匹林常用于缓解疼痛和退烧。'; break;
    case 'communicate': w.example = 'Effective leaders must be able to communicate their vision clearly to others.\n有效的领导者必须能够向他人清晰地传达他们的愿景。\nWe use various forms of technology to communicate with people around the world.\n我们使用各种技术与世界各地的人交流。'; break;
    case 'communication': w.example = 'Good communication is essential for building strong relationships with others.\n良好的沟通对于与他人建立牢固的关系至关重要。\nThe company invested in a new communication system to improve efficiency.\n公司投资了一套新的通信系统来提高效率。'; break;
    case 'communist': w.example = 'The communist party played a significant role in the country\'s political history.\n共产党在该国的政治历史中发挥了重要作用。\nCommunist ideology emphasizes the importance of collective ownership.\n共产主义意识形态强调集体所有制的重要性。'; break;
    case 'community': w.example = 'The local community came together to support families affected by the natural disaster.\n当地社区团结起来支持受自然灾害影响的家庭。\nShe is actively involved in community service projects in her neighborhood.\n她积极参与社区服务项目。'; break;
    case 'compact': w.example = 'The compact design of the laptop makes it easy to carry while traveling.\n笔记本电脑的紧凑设计使其在旅行时易于携带。\nThey signed a compact agreement to work together on the joint project.\n他们签署了一份合作协议，共同开展联合项目。'; break;
    case 'companion': w.example = 'Her loyal dog has been her faithful companion for over ten years.\n她忠诚的狗十年来一直是她忠实的伴侣。\nThe travel guide serves as a helpful companion for tourists visiting the city.\n旅游指南是游客游览这座城市的有用伴侣。'; break;
    case 'company': w.example = 'The company announced record profits for the fourth quarter of the year.\n公司宣布了今年第四季度的创纪录利润。\nShe accepted a job offer from a multinational company based in New York.\n她接受了一家总部位于纽约的跨国公司的工作邀请。'; break;
    case 'compare': w.example = 'It is important to compare different products before making a purchase decision.\n在做出购买决定之前比较不同产品很重要。\nThe report compares the performance of several competing technologies.\n该报告比较了几种竞争技术的性能。'; break;
    case 'comparison': w.example = 'The comparison between the two products shows clear differences in quality.\n两种产品之间的比较显示出质量上的明显差异。\nIn comparison to last year, sales have increased by over twenty percent.\n与去年相比，销售额增长了百分之二十以上。'; break;
    case 'compartment': w.example = 'The suitcase has several compartments for organizing different items.\n手提箱有几个隔间，用于整理不同物品。\nThe train has a special compartment reserved for first-class passengers.\n火车有一个为头等舱乘客预留的特殊隔间。'; break;
    case 'compass': w.example = 'The hiker used a compass to navigate through the dense forest.\n徒步旅行者用指南针在茂密的森林中导航。\nA compass needle always points towards the magnetic north pole.\n指南针的指针总是指向磁北极。'; break;
    case 'compassion': w.example = 'Her compassion for others inspired her to work in the healthcare field.\n她对他人的同情激励她从事医疗保健领域的工作。\nShowing compassion to those in need is an important human trait.\n向有需要的人表示同情是一种重要的人类特质。'; break;
    case 'compel': w.example = 'The evidence presented in court was enough to compel the jury to reach a verdict.\n法庭上提供的证据足以迫使陪审团做出裁决。\nCircumstances compelled him to make a difficult decision about his future.\n情况迫使他对自己的未来做出艰难的决定。'; break;
    case 'compelling': w.example = 'The documentary presented compelling evidence about climate change.\n这部纪录片提供了关于气候变化的令人信服的证据。\nShe gave a compelling speech that moved the entire audience.\n她发表了一篇感人的演讲，打动了全体听众。'; break;
    case 'compete': w.example = 'Athletes from around the world will compete in the upcoming Olympic Games.\n来自世界各地的运动员将参加即将举行的奥运会。\nThe two companies continue to compete for market share in the technology industry.\n两家公司继续在科技行业争夺市场份额。'; break;
    case 'competition': w.example = 'The competition for the prestigious award was fierce among the talented applicants.\n才华横溢的申请者之间争夺这个著名奖项的竞争非常激烈。\nHealthy competition can motivate individuals to achieve their best.\n健康的竞争可以激励个人发挥最佳水平。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for committee to competition');
