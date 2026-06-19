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
        case 'bylaw':
            w.example = 'Every city has specific bylaws that govern noise levels during nighttime hours in residential areas.\n每个城市都有具体的地方法规来管理居民区夜间的噪音水平。\nThe homeowners association voted to update the bylaws regarding pet ownership and common area usage.\n业主协会投票更新了关于宠物所有权和公共区域使用的规章制度。';
            break;
        case 'byline':
            w.example = 'The journalist\'s byline appeared prominently at the beginning of the investigative report about corporate corruption.\n这位记者的署名出现在关于企业腐败的调查报告开头的显著位置。\nMany readers pay close attention to the byline to determine the credibility of the article they are reading.\n许多读者密切关注署名以确定他们正在阅读的文章的可信度。';
            break;
        case 'bypass':
            w.example = 'The city decided to build a bypass road to reduce traffic congestion in the downtown area during rush hour.\n该市决定修建一条旁路以减少高峰时段市中心的交通拥堵。\nDoctors recommended a heart bypass surgery to improve blood flow to the patient\'s vital organs.\n医生建议进行心脏搭桥手术以改善流向患者重要器官的血液流动。';
            break;
        case 'byproduct':
            w.example = 'The production of paper often creates sawdust as a byproduct that can be used for various purposes.\n造纸过程通常会产生木屑作为副产品，可以用于多种用途。\nMany modern technologies produce unexpected byproducts that require careful disposal to protect the environment.\n许多现代技术会产生意想不到的副产品，需要谨慎处理以保护环境。';
            break;
        case 'byre':
            w.example = 'The old farm had a traditional byre where cows were kept during the cold winter months.\n这个古老的农场有一个传统的牛棚，牛在寒冷的冬季被关在那里。\nFarmers in this region still use byres to shelter their livestock from harsh weather conditions.\n该地区的农民仍然使用牛棚来保护他们的牲畜免受恶劣天气的影响。';
            break;
        case 'byroad':
            w.example = 'We took a scenic byroad through the countryside that offered breathtaking views of rolling hills and wildflowers.\n我们沿着一条风景优美的乡间小路穿过乡村，欣赏到了连绵起伏的山丘和野花的壮丽景色。\nThe byroad was narrow and winding, but it led us to a hidden waterfall that few tourists knew about.\n这条小路狭窄而蜿蜒，但它带我们来到了一个很少有游客知道的隐藏瀑布。';
            break;
        case 'byssinosis':
            w.example = 'Workers in textile factories are at risk of developing byssinosis due to prolonged exposure to cotton dust.\n纺织厂的工人由于长期接触棉尘而有患上棉尘肺的风险。\nThe health department implemented strict safety measures to prevent byssinosis among employees in the garment industry.\n卫生部门实施了严格的安全措施，以防止服装行业的员工患上棉尘肺。';
            break;
        case 'byway':
            w.example = 'The travelers decided to explore the charming byway that wound through ancient forests and past picturesque villages.\n旅行者决定探索这条迷人的小路，它蜿蜒穿过古老的森林和风景如画的村庄。\nLocal historians often recommend taking the byway to discover hidden historical landmarks not found on main roads.\n当地历史学家经常建议走小路去发现主干道上找不到的隐藏历史地标。';
            break;
        case 'byword':
            w.example = 'The company became a byword for innovation after introducing groundbreaking technologies to the market.\n这家公司在向市场推出突破性技术后，成为了创新的代名词。\nIn the world of sports, his name has become a byword for dedication and perseverance in the face of adversity.\n在体育界，他的名字已经成为面对逆境时奉献和毅力的代名词。';
            break;
        case 'cab':
            w.example = 'He hailed a bright yellow taxi cab on the busy downtown street to take him to the airport before his flight departed.\n他在繁忙的市中心街道上叫了一辆明亮的黄色出租车，以便在航班起飞前赶到机场。\nThe friendly cab driver helped him carefully load his heavy luggage into the trunk of the vehicle.\n友好的出租车司机帮他小心地把沉重的行李放进后备箱。';
            break;
        case 'cabbage':
            w.example = 'My grandmother prepares a delicious cabbage soup with fresh vegetables from her garden every winter.\n我的祖母每年冬天都会用她花园里的新鲜蔬菜做美味的卷心菜汤。\nThe chef shredded the cabbage finely and mixed it with carrots and apples for a crisp, refreshing salad.\n厨师把卷心菜切成细条，和胡萝卜、苹果混合在一起做了一份清爽的沙拉。';
            break;
        case 'cabin':
            w.example = 'We spent a cozy weekend in a small wooden cabin nestled among tall pine trees in the mountains.\n我们在山间高大的松树林中一间小巧的木屋里度过了一个舒适的周末。\nThe cabin had a stone fireplace that kept us warm during the cold autumn nights we stayed there.\n小屋有一个石头壁炉，在我们逗留的寒冷秋夜里让我们保持温暖。';
            break;
        case 'cabinet':
            w.example = 'The kitchen cabinet was filled with jars of spices, canned goods, and various cooking utensils.\n厨房橱柜里装满了香料罐、罐头食品和各种炊具。\nThe president announced that his cabinet would meet tomorrow to discuss the new economic policies.\n总统宣布他的内阁将于明天开会讨论新的经济政策。';
            break;
        case 'cable':
            w.example = 'Technicians worked tirelessly to repair the underwater cable that had been damaged by a ship anchor.\n技术人员不知疲倦地修复被船锚损坏的水下电缆。\nThe internet service provider installed a fiber optic cable to deliver faster connection speeds to rural areas.\n互联网服务提供商安装了一条光纤电缆，为农村地区提供更快的连接速度。';
            break;
        case 'cactus':
            w.example = 'The desert landscape was dotted with various species of cactus that had adapted to survive in arid conditions.\n沙漠景观点缀着各种适应干旱条件生存的仙人掌物种。\nShe carefully watered her collection of cactus plants, making sure not to overwater them as they prefer dry soil.\n她小心地给她收集的仙人掌植物浇水，确保不会浇水过多，因为它们更喜欢干燥的土壤。';
            break;
        case 'cake':
            w.example = 'She baked a beautiful chocolate cake with layers of creamy frosting for her daughter\'s birthday party.\n她为女儿的生日派对烤了一个漂亮的巧克力蛋糕，上面有多层奶油糖霜。\nThe bakery displayed an array of delicious cakes, including vanilla, strawberry, and red velvet flavors.\n面包店展示了一系列美味的蛋糕，包括香草、草莓和红丝绒口味。';
            break;
        case 'calcium':
            w.example = 'Doctors recommend that children consume enough calcium through milk, cheese, and leafy greens for strong bones.\n医生建议儿童通过牛奶、奶酪和绿叶蔬菜摄入足够的钙，以增强骨骼。\nThe nutrition label showed that each serving of the supplement contained 1000 milligrams of calcium.\n营养标签显示每份补充剂含有1000毫克钙。';
            break;
        case 'calculate':
            w.example = 'Engineers used complex formulas to calculate the exact dimensions needed for the new bridge construction.\n工程师使用复杂的公式来计算新桥建设所需的确切尺寸。\nShe spent hours trying to calculate the total cost of her upcoming trip, including flights, accommodation, and meals.\n她花了几个小时试图计算她即将到来的旅行的总费用，包括机票、住宿和餐饮。';
            break;
        case 'calendar':
            w.example = 'I marked all the important dates on my calendar, including deadlines, meetings, and family events.\n我在日历上标记了所有重要日期，包括截止日期、会议和家庭活动。\nThe ancient Mayan calendar was incredibly accurate and predicted astronomical events with remarkable precision.\n古代玛雅日历非常准确，能够以惊人的精度预测天文事件。';
            break;
        case 'calf':
            w.example = 'The newborn calf struggled to stand on its wobbly legs for the first time in the green pasture.\n新生的小牛在绿色的牧场上第一次挣扎着用摇摇晃晃的腿站起来。\nShe wrapped a warm blanket around the shivering calf to protect it from the cold winter wind.\n她用一条温暖的毯子裹住发抖的小牛，保护它免受寒冷的冬风侵袭。';
            break;
    }
});

const updatedContent = content.substring(0, startIndex) + 'export const mockWords: IELTSWord[] = [' + JSON.stringify(words, null, 2).substring(1, JSON.stringify(words, null, 2).length - 1) + '];' + content.substring(endIndex + 2);
fs.writeFileSync(filePath, updatedContent);
console.log('Updated examples for first batch of words');
