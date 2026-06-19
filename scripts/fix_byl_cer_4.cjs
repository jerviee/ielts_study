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
    case 'carrot': w.example = 'The farmer pulled fresh carrots from the rich soil in his vegetable garden.\n农夫从菜园肥沃的土壤里拔出新鲜的胡萝卜。\nCarrot juice is known for its high vitamin content and health benefits.\n胡萝卜汁因其高维生素含量和健康益处而闻名。'; break;
    case 'carry': w.example = 'She asked her brother to carry the heavy suitcase up the stairs.\n她让哥哥把沉重的行李箱搬上楼。\nThe backpack is designed to carry all your essentials during outdoor adventures.\n这个背包设计用于在户外探险时携带所有必需品。'; break;
    case 'cart': w.example = 'The horse pulled a wooden cart filled with hay through the countryside.\n马拉着一辆装满干草的木制马车穿过乡村。\nChildren love to ride in the shopping cart while their parents shop at the supermarket.\n孩子们喜欢在父母超市购物时坐在购物车里。'; break;
    case 'carve': w.example = 'He used a sharp knife to carve intricate patterns into the wooden sculpture.\n他用一把锋利的刀在木雕上雕刻复杂的图案。\nArtists often carve beautiful designs into pumpkins for Halloween decorations.\n艺术家们经常在南瓜上雕刻漂亮的图案作为万圣节装饰。'; break;
    case 'case': w.example = 'The detective carefully examined the evidence in the criminal case.\n侦探仔细检查刑事案件中的证据。\nIn this particular case, the judge decided to dismiss the charges against the defendant.\n在这个特殊案件中，法官决定驳回对被告的指控。'; break;
    case 'cash': w.example = 'Please pay in cash at the register when checking out at the store.\n在商店结账时请在收银台用现金支付。\nThe bank offers various services including cash withdrawals and deposits.\n银行提供包括取款和存款在内的各种服务。'; break;
    case 'cast': w.example = 'The director will cast the lead role in the upcoming movie next week.\n导演将在下周为即将上映的电影选定主角。\nShe was excited to be cast as the main character in the school play.\n她很高兴被选为学校戏剧的主角。'; break;
    case 'castle': w.example = 'The medieval castle stood tall on the hill overlooking the entire valley.\n中世纪城堡高耸在山丘上，俯瞰整个山谷。\nTourists from around the world visit the ancient castle every year.\n每年都有来自世界各地的游客参观这座古老的城堡。'; break;
    case 'casual': w.example = 'He wore casual clothes to the informal gathering with friends.\n他穿着休闲服装参加与朋友的非正式聚会。\nThe company has a casual dress code on Fridays to promote a relaxed atmosphere.\n公司在周五实行休闲着装规定以营造轻松氛围。'; break;
    case 'casualty': w.example = 'The ambulance rushed the casualty to the nearest hospital for emergency treatment.\n救护车将伤员送往最近的医院进行紧急治疗。\nUnfortunately, there were several casualties in the severe traffic accident.\n不幸的是，严重的交通事故中有几名伤亡人员。'; break;
    case 'cat': w.example = 'The fluffy cat curled up comfortably on the soft couch in the living room.\n毛茸茸的猫舒适地蜷缩在客厅柔软的沙发上。\nShe adopted a cute little cat from the animal shelter last month.\n她上个月从动物收容所收养了一只可爱的小猫。'; break;
    case 'catalog': w.example = 'The company sends a catalog of their products to potential customers every season.\n公司每个季节都会向潜在客户发送产品目录。\nYou can browse the online catalog to find the items you want to purchase.\n您可以浏览在线目录找到您想购买的商品。'; break;
    case 'catch': w.example = 'The boy tried to catch the butterfly as it fluttered around the garden.\n男孩试图抓住在花园里飞舞的蝴蝶。\nDon\'t forget to catch the early morning train to avoid being late.\n别忘了赶上早班火车以免迟到。'; break;
    case 'category': w.example = 'Books in the library are organized by category for easy reference.\n图书馆的书籍按类别分类以便于查阅。\nThis product falls into the electronics category on our website.\n这个产品在我们的网站上属于电子产品类别。'; break;
    case 'cater': w.example = 'The restaurant offers catering services for weddings and special events.\n这家餐厅为婚礼和特殊活动提供餐饮服务。\nWe need to cater to the needs of our most valued customers.\n我们需要满足最尊贵客户的需求。'; break;
    case 'cathedral': w.example = 'The magnificent cathedral dominates the skyline of the historic city.\n宏伟的大教堂矗立在历史名城的天际线上。\nTourists admire the stunning architecture of the ancient cathedral.\n游客们欣赏这座古老大教堂令人惊叹的建筑。'; break;
    case 'catholic': w.example = 'The Catholic Church has a long history and many followers around the world.\n天主教会历史悠久，在世界各地有众多信徒。\nShe attended a Catholic school during her childhood and teenage years.\n她在童年和青少年时期就读于一所天主教学校。'; break;
    case 'cattle': w.example = 'The rancher raised cattle on his large farm in the countryside.\n牧场主在他乡下的大农场里养牛。\nCattle are often raised for their meat and dairy products.\n牛通常被饲养用于获取肉类和奶制品。'; break;
    case 'cause': w.example = 'Scientists are investigating the cause of the sudden climate change.\n科学家正在调查突然气候变化的原因。\nShe dedicated her life to fighting for a worthy cause.\n她一生致力于为一项崇高的事业而奋斗。'; break;
    case 'caution': w.example = 'The sign warned drivers to proceed with caution on the icy road.\n标志警告司机在结冰的道路上谨慎行驶。\nUse caution when handling dangerous chemicals in the laboratory.\n在实验室处理危险化学品时要小心。'; break;
  }
});
const output = 'export interface IELTSWord {\n  id: string;\n  word: string;\n  meaning: string;\n  level: string;\n  prefix?: string;\n  prefixMeaning?: string;\n  prefixMeaningEn?: string;\n  root: string;\n  rootMeaning: string;\n  rootMeaningEn: string;\n  rootOrigin: string;\n  rootOriginNote: string;\n  suffix?: string;\n  suffixMeaning?: string;\n  suffixMeaningEn?: string;\n  relatedWords: { word: string; meaning: string; level: string }[];\n  phonetic: string;\n  frequency: string;\n  example: string;\n}\n\nexport const mockWords: IELTSWord[] = ' + JSON.stringify(words, null, 2) + ';';
fs.writeFileSync('/home/fred/workspace/memoryworld-project/src/data/mockWords.ts', output);
console.log('Fixed examples for carrot to caution');
