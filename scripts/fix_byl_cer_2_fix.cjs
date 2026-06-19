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
            w.example = 'I will call you tomorrow morning to discuss the important details of our upcoming business meeting.\n我明天早上会打电话给你讨论我们即将举行的商务会议的重要细节。\nThe teacher asked the students to call out their full names one by one during morning attendance.\n老师让学生们在早上点名时一个接一个地喊出他们的全名。';
            break;
        case 'camera':
            w.example = 'Professional photographers often carry multiple camera lenses to capture different types of shots in various lighting conditions.\n专业摄影师通常携带多个相机镜头来在各种光照条件下捕捉不同类型的镜头。\nThe high-resolution security camera installed at the main entrance recorded every person who entered the building.\n安装在主入口处的高分辨率安全摄像头记录了每个进入大楼的人。';
            break;
        case 'campaign':
            w.example = 'The political party launched a nationwide campaign to promote their candidate for the upcoming presidential election.\n该政党发起了一项全国性的运动来宣传他们即将举行的总统选举的候选人。\nEnvironmental activists organized a comprehensive campaign to raise public awareness about climate change.\n环保活动家组织了一场全面的运动来提高公众对气候变化的认识。';
            break;
        case 'campus':
            w.example = 'The large university campus was filled with students rushing to their classes between the historic buildings.\n大型大学校园里挤满了在历史建筑之间匆匆赶去上课的学生。\nMany first-year students choose to live on campus for the convenience and sense of community.\n许多一年级学生选择住在校园里，因为方便且有社区感。';
            break;
        case 'canadian':
            w.example = 'The Canadian government announced new policies to support renewable energy development across the country.\n加拿大政府宣布了支持全国可再生能源发展的新政策。\nMany Canadian cities are known for their clean air, friendly people, and stunning natural landscapes.\n许多加拿大城市以其清新的空气、友好的人民和壮丽的自然风光而闻名。';
            break;
        case 'cancer':
            w.example = 'Doctors and researchers are constantly working to develop new treatments to improve survival rates for cancer patients.\n医生和研究人员不断努力开发新的治疗方法来提高癌症患者的生存率。\nEarly detection through regular screenings is crucial in successfully treating many types of cancer.\n通过定期筛查进行早期发现对于成功治疗许多类型的癌症至关重要。';
            break;
        case 'candidate':
            w.example = 'The company interviewed several highly promising candidates for the senior management position last week.\n公司上周面试了几位非常有前途的候选人来担任高级管理职位。\nEach candidate was asked to give a detailed presentation about their vision for the company\'s future growth.\n每位候选人都被要求就他们对公司未来发展的愿景做一个详细的演讲。';
            break;
        case 'candy':
            w.example = 'Children eagerly reached for the colorful candy displayed in the store window during the Halloween season.\n万圣节期间，孩子们急切地伸手去拿商店橱窗里展示的彩色糖果。\nShe made delicious homemade candy for her friends using fresh fruit and natural sweeteners.\n她用新鲜水果和天然甜味剂为朋友制作美味的自制糖果。';
            break;
        case 'canon':
            w.example = 'Literary scholars often debate which books should be included in the canon of English literature.\n文学学者经常争论哪些书应该被列入英国文学经典。\nThe artist carefully followed the canon of classical painting techniques learned from his master.\n这位艺术家仔细遵循了从他的老师那里学到的古典绘画技法准则。';
            break;
        case 'canyon':
            w.example = 'Tourists from around the world come to see the breathtaking Grand Canyon in Arizona every year.\n每年都有来自世界各地的游客前来参观亚利桑那州令人惊叹的大峡谷。\nThe narrow canyon provided much-needed shelter from the scorching sun during our hiking trip.\n在我们徒步旅行期间，狭窄的峡谷为我们提供了急需的躲避烈日的地方。';
            break;
        case 'cap':
            w.example = 'He adjusted his baseball cap to shield his eyes from the bright afternoon sun during the game.\n比赛期间，他调整了棒球帽，以遮挡午后刺眼的阳光。\nThe metal bottle cap was tightly sealed, making it difficult to open without a bottle opener.\n金属瓶盖密封得很紧，没有开瓶器很难打开。';
            break;
    }
});

const updatedContent = content.substring(0, startIndex) + 'export const mockWords: IELTSWord[] = [' + JSON.stringify(words, null, 2).substring(1, JSON.stringify(words, null, 2).length - 1) + '];' + content.substring(endIndex + 2);
fs.writeFileSync(filePath, updatedContent);
console.log('Fixed examples for second batch failed words');
