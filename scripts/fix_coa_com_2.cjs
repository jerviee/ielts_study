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
    case 'cold': w.example = 'The cold winter wind made it difficult to walk outside without warm clothing.\n寒冷的冬季风使没有暖和衣服很难在外面行走。\nShe caught a bad cold after being caught in the rain without an umbrella.\n她没带伞被雨淋后得了重感冒。'; break;
    case 'collapse': w.example = 'The old building began to collapse after the earthquake shook the city.\n地震震动城市后，这座老建筑开始倒塌。\nThe bridge collapsed under the weight of the heavy truck crossing it.\n桥梁在重型卡车通过时因重量而坍塌。'; break;
    case 'collar': w.example = 'He adjusted the collar of his shirt before entering the important meeting.\n他在进入重要会议前调整了衬衫的领子。\nThe dog wore a red collar with a small bell around its neck.\n狗脖子上戴着一个带小铃铛的红色项圈。'; break;
    case 'colleague': w.example = 'My colleague helped me finish the project when I fell ill last week.\n上周我生病时，我的同事帮我完成了项目。\nShe has worked with the same colleagues for over ten years at the company.\n她在公司与同样的同事共事了十多年。'; break;
    case 'collect': w.example = 'Children love to collect stamps, coins, and other small treasures.\n孩子们喜欢收集邮票、硬币和其他小宝贝。\nThe charity organization asked people to collect donations for the homeless.\n慈善组织呼吁人们为无家可归者收集捐款。'; break;
    case 'collection': w.example = 'The museum displayed its collection of ancient artifacts from around the world.\n博物馆展示了其来自世界各地的古代文物收藏。\nHer collection of vintage dresses filled the entire closet in her bedroom.\n她的复古连衣裙收藏填满了卧室里的整个衣柜。'; break;
    case 'collective': w.example = 'The team made a collective decision to postpone the event until next month.\n团队共同决定将活动推迟到下个月。\nThe collective effort of all employees helped the company achieve its annual goals.\n所有员工的共同努力帮助公司实现了年度目标。'; break;
    case 'collector': w.example = 'The art collector spent millions of dollars acquiring rare paintings by famous artists.\n这位艺术收藏家花了数百万美元收购著名艺术家的稀有画作。\nShe became a passionate collector of antique furniture after inheriting her grandmother\'s pieces.\n继承祖母的家具后，她成为了一名热情的古董家具收藏家。'; break;
    case 'college': w.example = 'She studied psychology at a small liberal arts college in New England.\n她在新英格兰的一所小型文理学院学习心理学。\nThe college offers a wide range of courses in science, arts, and humanities.\n学院提供广泛的科学、艺术和人文课程。'; break;
    case 'collide': w.example = 'Two cars collided at the intersection when one driver ran a red light.\n一辆车闯红灯时，两辆车在十字路口相撞。\nThe meteor is expected to collide with the planet in approximately five days.\n这颗流星预计将在大约五天后与行星相撞。'; break;
    case 'colonial': w.example = 'The colonial architecture of the city reflects its history as a former British territory.\n这座城市的殖民建筑反映了其作为前英国领土的历史。\nColonial powers exploited the natural resources of the countries they ruled.\n殖民列强剥削了他们统治国家的自然资源。'; break;
    case 'colony': w.example = 'The ants built a large colony underground with intricate tunnels and chambers.\n蚂蚁在地下建造了一个庞大的蚁群，有复杂的隧道和巢穴。\nThe British established a colony in North America that later became the United States.\n英国人在北美建立了一个殖民地，后来成为美国。'; break;
    case 'color': w.example = 'She used a variety of bright colors to paint the landscape on the canvas.\n她用各种鲜艳的颜色在画布上画风景。\nThe artist mixed different shades of blue to create depth in the painting.\n艺术家混合了不同深浅的蓝色，在画作中创造深度。'; break;
    case 'colorful': w.example = 'The market was filled with colorful fruits, vegetables, and handmade crafts.\n市场上摆满了五颜六色的水果、蔬菜和手工艺品。\nShe wore a colorful dress that matched the vibrant flowers in the garden.\n她穿了一件五颜六色的连衣裙，与花园里鲜艳的花朵相匹配。'; break;
    case 'colour': w.example = 'The British spelling of the word is 
