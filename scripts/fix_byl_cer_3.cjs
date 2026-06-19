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
        case 'capable':
            w.example = 'She proved herself capable of handling complex projects with tight deadlines.\n她证明自己有能力处理期限紧迫的复杂项目。\nThe new software is capable of analyzing large datasets in a fraction of the time.\n新软件能够在很短的时间内分析大型数据集。';
            break;
        case 'capacity':
            w.example = 'The stadium has a seating capacity of over 50,000 spectators for major events.\n这个体育场的座位容量超过50,000名观众，可举办大型活动。\nWe need to expand our storage capacity to accommodate the growing inventory.\n我们需要扩大存储容量以容纳不断增长的库存。';
            break;
        case 'cape':
            w.example = 'The ship sailed around the dangerous cape during the stormy weather.\n这艘船在暴风雨天气中绕过了危险的海角。\nShe wore a stylish cape over her dress for the evening gala event.\n她在晚礼服外面穿了一件时尚的披风参加晚宴。';
            break;
        case 'capital':
            w.example = 'The capital city is home to government buildings, museums, and cultural institutions.\n首都拥有政府大楼、博物馆和文化机构。\nInvestors are looking for opportunities to invest their capital in promising startups.\n投资者正在寻找机会将资本投资于有前途的初创企业。';
            break;
        case 'captain':
            w.example = 'The captain skillfully navigated the ship through the narrow channel.\n船长熟练地驾驶船只穿过狭窄的航道。\nThe team captain motivated his players to give their best performance in the championship.\n队长激励队员在锦标赛中发挥最佳水平。';
            break;
        case 'capture':
            w.example = 'The photographer tried to capture the perfect moment as the sun set over the ocean.\n摄影师试图捕捉太阳在海洋上落下的完美时刻。\nThe police worked together to capture the suspect after a long investigation.\n经过长时间调查，警方共同努力抓获了嫌疑人。';
            break;
        case 'car':
            w.example = 'He bought a new electric car to reduce his carbon footprint and save money on fuel.\n他买了一辆新电动汽车，以减少碳足迹并节省燃油费用。\nThe vintage car collection included rare models from the 1950s and 1960s.\n老爷车收藏包括20世纪50年代和60年代的稀有车型。';
            break;
        case 'carbon':
            w.example = 'Scientists are studying ways to reduce carbon emissions to combat climate change.\n科学家正在研究减少碳排放的方法以应对气候变化。\nCarbon dating is used to determine the age of ancient artifacts and fossils.\n碳测年法用于确定古代文物和化石的年代。';
            break;
        case 'card':
            w.example = 'She sent a beautiful greeting card to her friend to celebrate her birthday.\n她给朋友寄了一张漂亮的贺卡来庆祝她的生日。\nThe credit card company offers various rewards programs for frequent users.\n信用卡公司为频繁使用者提供各种奖励计划。';
            break;
        case 'cardboard':
            w.example = 'We used cardboard boxes to pack our belongings when moving to the new house.\n我们搬家时用纸箱打包物品。\nThe children made a fort using old cardboard boxes in the backyard.\n孩子们在后院用旧纸箱做了一个堡垒。';
            break;
        case 'care':
            w.example = 'Parents should provide proper care and attention to their children\'s emotional needs.\n父母应该适当关心和关注孩子的情感需求。\nThe healthcare workers showed great care and compassion towards their patients.\n医护人员对病人表现出极大的关心和同情。';
            break;
        case 'career':
            w.example = 'She worked hard to build a successful career in the competitive field of technology.\n她努力在竞争激烈的科技领域建立成功的职业生涯。\nMany young professionals are seeking career opportunities in emerging industries.\n许多年轻专业人士正在新兴行业寻找职业机会。';
            break;
        case 'careful':
            w.example = 'Be careful when handling fragile items to avoid breaking them.\n处理易碎物品时要小心，以免打破它们。\nThe scientist was careful to document every step of the experiment.\n科学家小心地记录实验的每一步。';
            break;
        case 'carefully':
            w.example = 'He carefully examined the document before signing his name.\n他在签名前仔细检查了文件。\nThe chef carefully measured each ingredient for the perfect recipe.\n厨师仔细测量每种食材以制作完美的食谱。';
            break;
        case 'careless':
            w.example = 'A careless mistake led to the loss of important data from the computer.\n一个粗心的错误导致计算机中的重要数据丢失。\nDrivers should never be careless when operating a vehicle on the road.\n司机在路上驾驶车辆时绝不能粗心大意。';
            break;
        case 'cargo':
            w.example = 'The ship carried a large cargo of goods from Asia to Europe across the ocean.\n这艘船从亚洲向欧洲运送了大量货物。\nWorkers carefully loaded the cargo onto the truck for delivery to the warehouse.\n工人们小心地将货物装上卡车运往仓库。';
            break;
        case 'carpenter':
            w.example = 'The skilled carpenter built a beautiful wooden table for the dining room.\n熟练的木匠为餐厅制作了一张漂亮的木桌。\nMy grandfather was a carpenter who could fix almost anything made of wood.\n我的祖父是一名木匠，几乎可以修理任何木制品。';
            break;
        case 'carpet':
            w.example = 'We bought a new carpet to cover the cold floor in the living room.\n我们买了一块新地毯来覆盖客厅冰冷的地板。\nThe hotel lobby featured an elegant carpet with intricate patterns.\n酒店大堂铺有带有复杂图案的优雅地毯。';
            break;
        case 'carriage':
            w.example = 'The royal carriage was pulled by four white horses through the city streets.\n皇家马车由四匹白马牵引穿过城市街道。\nThe old train carriage had wooden seats and large windows.\n旧火车车厢有木制座椅和大窗户。';
            break;
        case 'carrier':
            w.example = 'The airline carrier announced new routes to popular vacation destinations.\n航空公司宣布了前往热门度假目的地的新航线。\nThe package was delivered by a local carrier to the customer\'s doorstep.\n包裹由当地快递公司送到客户家门口。';
            break;
    }
});

const updatedContent = content.substring(0, startIndex) + 'export const mockWords: IELTSWord[] = [' + JSON.stringify(words, null, 2).substring(1, JSON.stringify(words, null, 2).length - 1) + '];' + content.substring(endIndex + 2);
fs.writeFileSync(filePath, updatedContent);
console.log('Updated examples for third batch of words');
