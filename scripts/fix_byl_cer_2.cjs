const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/mockWords.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const startIndex = content.indexOf('export const mockWords: IELTSWord[] = [');
const endIndex = content.lastIndexOf('];');

if (startIndex === -1 || endIndex === -1) {
    console.log('Cannot find mockWords array');
    process.exit(1);
}

const jsonContent = content.substring(startIndex + 'export const mockWords: IELTSWord[] = ['.length, endIndex);
let words = JSON.parse('[' + jsonContent + ']');

words.forEach(w => {
    switch(w.word.toLowerCase()) {
        case 'call':
            w.example = 'I will call you tomorrow morning to discuss the details of our upcoming meeting.\n我明天早上会打电话给你讨论我们即将举行的会议的细节。\nThe teacher asked the students to call out their names one by one during attendance.\n老师让学生们在点名时一个接一个地喊出他们的名字。';
            break;
        case 'calm':
            w.example = 'She took a few deep breaths to stay calm before giving her presentation to the large audience.\n在向众多观众发表演讲之前，她做了几次深呼吸来保持冷静。\nThe ocean waves gradually became calm as the storm moved away from the coastline.\n随着风暴远离海岸线，海浪逐渐变得平静。';
            break;
        case 'came':
            w.example = 'After waiting for over an hour, the bus finally came to pick up the passengers at the station.\n等了一个多小时后，公交车终于来车站接乘客了。\nShe came to realize that her initial assumptions about the situation were completely wrong.\n她逐渐意识到自己对情况的最初假设完全错误。';
            break;
        case 'camera':
            w.example = 'Professional photographers often carry multiple camera lenses to capture different types of shots.\n专业摄影师通常携带多个相机镜头来捕捉不同类型的镜头。\nThe security camera installed at the entrance recorded every person who entered the building.\n安装在入口处的安全摄像头记录了每个进入大楼的人。';
            break;
        case 'camp':
            w.example = 'We set up our tents and prepared to spend the weekend camping in the beautiful national park.\n我们搭起帐篷，准备在美丽的国家公园里露营度过周末。\nThe summer camp offered a variety of activities, including hiking, swimming, and arts and crafts.\n夏令营提供了各种各样的活动，包括徒步旅行、游泳和手工艺。';
            break;
        case 'campaign':
            w.example = 'The political party launched a nationwide campaign to promote their candidate for president.\n该政党发起了一项全国性的运动来宣传他们的总统候选人。\nEnvironmental activists organized a campaign to raise awareness about climate change.\n环保活动家组织了一场运动来提高人们对气候变化的认识。';
            break;
        case 'campus':
            w.example = 'The university campus was filled with students rushing to their classes between buildings.\n大学校园里挤满了在教学楼之间匆匆赶去上课的学生。\nMany students choose to live on campus during their first year of college for convenience.\n许多学生在大学第一年选择住在校园里，图个方便。';
            break;
        case 'can':
            w.example = 'With practice and determination, anyone can learn to play a musical instrument proficiently.\n通过练习和决心，任何人都可以学会熟练地演奏乐器。\nThe chef showed us how to can fresh fruits and vegetables to preserve them for the winter.\n厨师向我们展示了如何将新鲜水果和蔬菜装罐保存以备过冬。';
            break;
        case 'canadian':
            w.example = 'The Canadian government announced new policies to support renewable energy development.\n加拿大政府宣布了支持可再生能源发展的新政策。\nMany Canadian cities are known for their clean air, friendly people, and beautiful landscapes.\n许多加拿大城市以其清新的空气、友好的人民和美丽的风景而闻名。';
            break;
        case 'canal':
            w.example = 'The Panama Canal connects the Atlantic Ocean to the Pacific Ocean, saving ships thousands of miles.\n巴拿马运河连接大西洋和太平洋，为船只节省数千英里的航程。\nBoats slowly made their way through the narrow canal, guided by experienced pilots.\n船只在经验丰富的引航员的引导下缓慢地穿过狭窄的运河。';
            break;
        case 'cancel':
            w.example = 'Due to the unexpected storm, we had to cancel our outdoor picnic plans for the weekend.\n由于突如其来的暴风雨，我们不得不取消周末的户外野餐计划。\nThe airline decided to cancel several flights because of the severe weather conditions.\n航空公司因恶劣天气条件决定取消几个航班。';
            break;
        case 'cancer':
            w.example = 'Doctors are constantly researching new treatments to improve survival rates for cancer patients.\n医生们不断研究新的治疗方法来提高癌症患者的生存率。\nEarly detection is crucial in successfully treating many types of cancer.\n早期发现对于成功治疗许多类型的癌症至关重要。';
            break;
        case 'candidate':
            w.example = 'The company interviewed several promising candidates for the senior management position.\n公司面试了几位有前途的候选人来担任高级管理职位。\nEach candidate was asked to give a presentation about their vision for the company\'s future.\n每位候选人都被要求就他们对公司未来的愿景做一个演讲。';
            break;
        case 'candle':
            w.example = 'She lit a scented candle to create a warm and relaxing atmosphere in her living room.\n她点燃了一支香薰蜡烛，在客厅营造温暖放松的氛围。\nThe birthday cake was decorated with colorful candles that flickered in the dim light.\n生日蛋糕上装饰着在昏暗灯光下闪烁的彩色蜡烛。';
            break;
        case 'candy':
            w.example = 'Children eagerly reached for the colorful candy displayed in the store window during Halloween.\n万圣节期间，孩子们急切地伸手去拿商店橱窗里展示的彩色糖果。\nShe made homemade candy for her friends using fresh fruit and natural sweeteners.\n她用新鲜水果和天然甜味剂为朋友制作自制糖果。';
            break;
        case 'cannon':
            w.example = 'The museum displayed an antique cannon that was used during the historic battle.\n博物馆展示了一门在历史战役中使用过的古董大炮。\nThe sound of the cannon firing echoed across the battlefield, signaling the start of the attack.\n大炮发射的声音在战场上回荡，标志着进攻的开始。';
            break;
        case 'canon':
            w.example = 'Literary scholars often debate which books should be included in the canon of English literature.\n文学学者经常争论哪些书应该被列入英国文学经典。\nThe artist followed the canon of classical painting techniques learned from his master.\n这位艺术家遵循了从他的老师那里学到的古典绘画技法准则。';
            break;
        case 'canvas':
            w.example = 'The painter stretched a large canvas across the wooden frame before starting his masterpiece.\n画家在开始创作他的杰作之前，将一块大画布绷在木框上。\nShe used a variety of colors and textures to create a stunning landscape on the canvas.\n她使用各种颜色和纹理在画布上创作了一幅令人惊叹的风景画。';
            break;
        case 'canyon':
            w.example = 'Tourists from around the world come to see the breathtaking Grand Canyon in Arizona.\n来自世界各地的游客前来参观亚利桑那州令人惊叹的大峡谷。\nThe narrow canyon provided shelter from the scorching sun during our hiking trip.\n在我们徒步旅行期间，狭窄的峡谷为我们提供了躲避烈日的地方。';
            break;
        case 'cap':
            w.example = 'He adjusted his baseball cap to shield his eyes from the bright afternoon sun.\n他调整了棒球帽，以遮挡午后刺眼的阳光。\nThe bottle cap was tightly sealed, making it difficult to open without a bottle opener.\n瓶盖密封得很紧，没有开瓶器很难打开。';
            break;
    }
});

const updatedContent = content.substring(0, startIndex) + 'export const mockWords: IELTSWord[] = [' + JSON.stringify(words, null, 2).substring(1, JSON.stringify(words, null, 2).length - 1) + '];' + content.substring(endIndex + 2);
fs.writeFileSync(filePath, updatedContent);
console.log('Updated examples for second batch of words');
