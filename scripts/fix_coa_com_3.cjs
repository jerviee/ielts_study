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
    case 'coma': w.example = 'The patient remained in a coma for several weeks after the accident.\n病人在事故后昏迷了几周。\nDoctors used various treatments to try to bring him out of the coma.\n医生使用各种治疗方法试图让他从昏迷中苏醒。'; break;
    case 'comb': w.example = 'She used a wooden comb to style her long hair before going to the party.\n她在去派对前用木梳梳理长发。\nThe detective found a comb with DNA evidence at the crime scene.\n侦探在犯罪现场发现了一把带有DNA证据的梳子。'; break;
    case 'combat': w.example = 'Soldiers trained extensively to prepare for combat in the war zone.\n士兵们进行了广泛训练，为战区作战做准备。\nThe government launched a campaign to combat poverty in rural areas.\n政府发起了一场消除农村贫困的运动。'; break;
    case 'combination': w.example = 'The combination of salt and pepper enhances the flavor of the dish.\n盐和胡椒的组合增强了菜肴的风味。\nShe tried every possible combination of numbers to unlock the safe.\n她尝试了所有可能的数字组合来打开保险箱。'; break;
    case 'combine': w.example = 'We decided to combine our resources to start a new business together.\n我们决定整合资源一起创办新企业。\nThe recipe says to combine the dry ingredients before adding the wet ones.\n食谱说在加入湿配料之前先混合干配料。'; break;
    case 'come': w.example = 'Please come to my office at three o\'clock for our meeting.\n请在三点钟到我的办公室参加我们的会议。\nShe will come to the party if she finishes her work on time.\n如果她按时完成工作，她会来参加派对。'; break;
    case 'comedy': w.example = 'The comedy show had the audience laughing throughout the entire performance.\n喜剧表演让观众整场都在笑。\nShe enjoys watching romantic comedies on lazy Sunday afternoons.\n她喜欢在慵懒的周日下午看浪漫喜剧。'; break;
    case 'comfort': w.example = 'The soft blanket provided warmth and comfort during the cold night.\n柔软的毯子在寒冷的夜晚提供温暖和舒适。\nShe found comfort in her family\'s support during difficult times.\n在困难时期，她在家人的支持中找到了安慰。'; break;
    case 'comfortable': w.example = 'The comfortable armchair was perfect for reading a good book.\n舒适的扶手椅非常适合阅读好书。\nShe felt comfortable sharing her thoughts with her best friend.\n她觉得和最好的朋友分享想法很自在。'; break;
    case 'command': w.example = 'The general gave the command to attack at dawn.\n将军下令在黎明时分进攻。\nShe has a commanding presence that makes people listen when she speaks.\n她有一种威严的气质，说话时让人倾听。'; break;
    case 'commander': w.example = 'The commander led his troops to victory in the decisive battle.\n指挥官带领他的部队在决定性战役中取得胜利。\nShe was promoted to commander after years of dedicated service.\n经过多年的奉献服务，她被晋升为指挥官。'; break;
    case 'commemorate': w.example = 'The city built a monument to commemorate the soldiers who died in the war.\n这座城市建了一座纪念碑来纪念在战争中牺牲的士兵。\nWe gather every year to commemorate the founding of our organization.\n我们每年聚在一起纪念我们组织的成立。'; break;
    case 'commence': w.example = 'The ceremony will commence at exactly nine o\'clock in the morning.\n仪式将在上午九点整开始。\nConstruction of the new building will commence next month.\n新建筑的建设将于下个月开始。'; break;
    case 'comment': w.example = 'He made a helpful comment about improving the project proposal.\n他对改进项目提案发表了有益的评论。\nPlease feel free to leave a comment if you have any suggestions.\n如果您有任何建议，请随时发表评论。'; break;
    case 'commerce': w.example = 'The city has been a center of commerce for over a hundred years.\n这座城市一百多年来一直是商业中心。\nE-commerce has transformed the way people shop and do business.\n电子商务改变了人们购物和做生意的方式。'; break;
    case 'commercial': w.example = 'The commercial for the new product aired during the evening news.\n新产品的广告在晚间新闻期间播出。\nThe company focused on expanding its commercial operations overseas.\n该公司专注于扩大其海外商业业务。'; break;
    case 'commission': w.example = 'The artist received a commission to paint a portrait of the mayor.\n艺术家收到了为市长画肖像的委托。\nThe salesperson earned a commission for each product they sold.\n销售人员每售出一件产品就获得佣金。'; break;
    case 'commissioner': w.example = 'The commissioner announced new policies to improve public safety.\n专员宣布了改善公共安全的新政策。\nShe served as the commissioner of the environmental protection agency.\n她担任环境保护局局长。'; break;
    case 'commit': w.example = 'He promised to commit himself to the project until it was completed.\n他承诺全身心投入到项目中直到完成。\nThe company decided to commit more resources to research and development.\n公司决定投入更多资源用于研发。'; break;
    case 'commitment': w.example = 'Her commitment to her family made her put their needs before her own.\n她对家庭的承诺使她把家人的需求放在自己之前。\nThe team showed great commitment to winning the championship.\n球队表现出赢得冠军的坚定决心。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for coma to commitment');
