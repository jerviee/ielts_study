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
    case 'competitor': w.example = 'The young athlete emerged as a strong competitor in the international tournament.\n这位年轻运动员在国际比赛中成为一名强有力的竞争者。\nEach competitor must follow the rules and regulations of the competition.\n每个参赛者必须遵守比赛的规则和规定。'; break;
    case 'compile': w.example = 'The programmer will compile the source code into an executable program.\n程序员将源代码编译成可执行程序。\nShe spent hours trying to compile all the data into a comprehensive report.\n她花了几个小时试图将所有数据汇编成一份综合报告。'; break;
    case 'complain': w.example = 'Many customers began to complain about the poor quality of the product.\n许多客户开始抱怨产品质量差。\nIf you have any issues, please feel free to complain to our customer service.\n如果您有任何问题，请随时向我们的客服投诉。'; break;
    case 'complaint': w.example = 'The company received a formal complaint from the dissatisfied customer.\n公司收到了不满意客户的正式投诉。\nShe filed a complaint with the management about the unfair treatment.\n她就不公平待遇向管理层提出了投诉。'; break;
    case 'complement': w.example = 'The red wine served as a perfect complement to the steak dinner.\n红酒是牛排晚餐的完美搭配。\nHer skills complement those of her team members, making them a strong unit.\n她的技能补充了团队成员的技能，使他们成为一个强大的团队。'; break;
    case 'complete': w.example = 'Please complete the application form before submitting it.\n请在提交前填写完申请表。\nThe construction of the new bridge will be complete by the end of next year.\n新桥的建设将在明年年底完成。'; break;
    case 'completely': w.example = 'The storm completely destroyed the small village near the coast.\n暴风雨彻底摧毁了海岸附近的小村庄。\nShe was completely surprised by the unexpected birthday party.\n她对意外的生日派对完全感到惊讶。'; break;
    case 'complex': w.example = 'The scientist presented a complex theory that few people could understand.\n科学家提出了一个很少有人能理解的复杂理论。\nThe project requires solving several complex problems before it can proceed.\n该项目需要解决几个复杂问题才能继续进行。'; break;
    case 'complexity': w.example = 'The complexity of the issue requires careful analysis and consideration.\n问题的复杂性需要仔细分析和考虑。\nUnderstanding the complexity of human behavior is essential for psychologists.\n理解人类行为的复杂性对心理学家来说至关重要。'; break;
    case 'complicate': w.example = 'Adding more rules will only complicate an already difficult situation.\n添加更多规则只会使已经困难的情况变得更复杂。\nThe unexpected delay complicated our travel plans significantly.\n意外的延误大大复杂化了我们的旅行计划。'; break;
    case 'complicated': w.example = 'The instructions for assembling the furniture were very complicated.\n组装家具的说明非常复杂。\nShe found the legal document to be extremely complicated and confusing.\n她觉得法律文件极其复杂和令人困惑。'; break;
    case 'complication': w.example = 'The surgery went well without any complications.\n手术进行顺利，没有任何并发症。\nA sudden complication arose that delayed the project by several weeks.\n突然出现了一个并发症，使项目推迟了几周。'; break;
    case 'comply': w.example = 'All employees must comply with the company\'s safety regulations.\n所有员工必须遵守公司的安全规定。\nThe restaurant failed to comply with health inspection standards.\n餐厅未能遵守健康检查标准。'; break;
    case 'component': w.example = 'Each component of the machine must be carefully inspected before assembly.\n机器的每个部件在组装前都必须仔细检查。\nThe software consists of several interconnected components working together.\n该软件由几个相互连接的组件协同工作。'; break;
    case 'compose': w.example = 'The famous musician continues to compose beautiful pieces of music.\n这位著名音乐家继续创作优美的音乐作品。\nShe used a variety of colors to compose the stunning painting.\n她用各种颜色创作了这幅令人惊叹的画。'; break;
    case 'composer': w.example = 'Mozart is widely regarded as one of the greatest composers in history.\n莫扎特被广泛认为是历史上最伟大的作曲家之一。\nThe young composer received critical acclaim for her first symphony.\n这位年轻作曲家的第一部交响曲获得了评论界的好评。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for competitor to composer');
