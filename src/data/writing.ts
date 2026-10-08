export interface SentencePattern {
  id: number;
  pattern: string;
  explanation: string;
  example: string;
  type: "argument" | 'cause' | 'effect' | 'comparison' | 'example' | 'conclusion';
}

export interface SynonymGroup {
  id: number;
  word: string;
  synonyms: { word: string; level: string }[];
}

export interface EssayTemplate {
  id: number;
  title: string;
  type: "agree/disagree" | 'discuss both views' | 'advantages/disadvantages' | 'problem/solution';
  topic: string;
  speaker?: string;
  speakerTitle?: string;
  style?: string;
  styleNote?: string;
  structure: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  structureCN?: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  fullParagraphs: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  fullParagraphsCN?: {
    introduction: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  vocabulary: string[];
}

export const sentencePatterns: SentencePattern[] = [
  {
    id: 1,
    pattern: "It is widely believed that...",
    explanation: "引出普遍观点",
    example: "It is widely believed that education is the key to success.",
    type: "argument"
  },
  {
    id: 2,
    pattern: "There is no doubt that...",
    explanation: "强调某事实的确定性",
    example: "There is no doubt that technology has transformed our lives.",
    type: "argument"
  },
  {
    id: 3,
    pattern: "One of the main reasons for... is that...",
    explanation: "说明主要原因",
    example: "One of the main reasons for climate change is that we burn too many fossil fuels.",
    type: "cause"
  },
  {
    id: 4,
    pattern: "As a result, ... / Consequently, ...",
    explanation: "引出结果",
    example: "Many forests were cut down. As a result, the ecosystem was damaged.",
    type: "effect"
  },
  {
    id: 5,
    pattern: "Compared with ..., ...",
    explanation: "进行比较",
    example: "Compared with traditional methods, online learning is more flexible.",
    type: "comparison"
  },
  {
    id: 6,
    pattern: "For instance, ... / For example, ...",
    explanation: "举例说明",
    example: "Some countries have successfully reduced pollution. For instance, Denmark uses wind energy extensively.",
    type: "example"
  },
  {
    id: 7,
    pattern: "In conclusion, ... / To sum up, ...",
    explanation: "总结观点",
    example: "In conclusion, both approaches have their merits and should be considered.",
    type: "conclusion"
  },
  {
    id: 8,
    pattern: "On the one hand, ... On the other hand, ...",
    explanation: "对比两种观点",
    example: "On the one hand, technology improves efficiency. On the other hand, it may reduce human interaction.",
    type: "comparison"
  },
  {
    id: 9,
    pattern: "Despite the fact that ..., ...",
    explanation: "表达让步关系",
    example: "Despite the fact that it is expensive, many people still buy organic food.",
    type: "argument"
  },
  {
    id: 10,
    pattern: "This can be attributed to ...",
    explanation: "归因于",
    example: "The increase in obesity can be attributed to unhealthy eating habits.",
    type: "cause"
  }
];

export const synonymGroups: SynonymGroup[] = [
  {
    id: 1,
    word: "important",
    synonyms: [
      { word: "crucial", level: "IELTS6" },
      { word: "vital", level: "IELTS6" },
      { word: "significant", level: "IELTS6" },
      { word: "essential", level: "IELTS5" },
      { word: "fundamental", level: "IELTS6" }
    ]
  },
  {
    id: 2,
    word: "show",
    synonyms: [
      { word: "demonstrate", level: "IELTS6" },
      { word: "illustrate", level: "IELTS6" },
      { word: "indicate", level: "IELTS6" },
      { word: "reveal", level: "IELTS6" },
      { word: "exhibit", level: "IELTS7" }
    ]
  },
  {
    id: 3,
    word: "think",
    synonyms: [
      { word: "believe", level: "IELTS5" },
      { word: "argue", level: "IELTS6" },
      { word: "maintain", level: "IELTS7" },
      { word: "contend", level: "IELTS7" },
      { word: "assert", level: "IELTS7" }
    ]
  },
  {
    id: 4,
    word: "use",
    synonyms: [
      { word: "utilize", level: "IELTS6" },
      { word: "employ", level: "IELTS6" },
      { word: "apply", level: "IELTS5" },
      { word: "exploit", level: "IELTS7" },
      { word: "leverage", level: "IELTS8" }
    ]
  },
  {
    id: 5,
    word: "help",
    synonyms: [
      { word: "assist", level: "IELTS5" },
      { word: "aid", level: "IELTS6" },
      { word: "facilitate", level: "IELTS7" },
      { word: "support", level: "IELTS5" },
      { word: "enable", level: "IELTS6" }
    ]
  },
  {
    id: 6,
    word: "change",
    synonyms: [
      { word: "alter", level: "IELTS6" },
      { word: "modify", level: "IELTS6" },
      { word: "transform", level: "IELTS6" },
      { word: "adjust", level: "IELTS5" },
      { word: "revise", level: "IELTS6" }
    ]
  },
  {
    id: 7,
    word: "give",
    synonyms: [
      { word: "provide", level: "IELTS5" },
      { word: "offer", level: "IELTS5" },
      { word: "supply", level: "IELTS6" },
      { word: "grant", level: "IELTS7" },
      { word: "furnish", level: "IELTS7" }
    ]
  },
  {
    id: 8,
    word: "get",
    synonyms: [
      { word: "obtain", level: "IELTS6" },
      { word: "acquire", level: "IELTS6" },
      { word: "attain", level: "IELTS7" },
      { word: "secure", level: "IELTS7" },
      { word: "gain", level: "IELTS5" }
    ]
  }
];

export const essayTemplates: EssayTemplate[] = [

  {
    id: 1,
    title: "同意/不同意类 - 科技与人际关系",
    type: "agree/disagree",
    topic: "Technology has made our lives more isolated. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is sometimes claimed that [现象]. However, I strongly disagree with this view, since [理由概述].",
      body1: "The most obvious benefit is that [好处1]. A clear example is [具体例子], where [对比过去]. This would have been impossible before [技术].",
      body2: "Furthermore, online platforms allow [好处2], particularly for [人群]. Admittedly, [让步反例], but this is a matter of [使用方式], not an inherent effect.",
      conclusion: "In conclusion, far from isolating people, technology [重申作用]. What matters is how wisely [结论建议]."
    },
    structureCN: {
      introduction: "有时有人声称[现象]。然而，我强烈反对这一观点，因为[理由概述]。",
      body1: "最明显的好处是[好处1]。一个明显的例子是[具体例子]，其中[对比过去]。这在[技术]出现之前是不可能的。",
      body2: "此外，网络平台使[好处2]成为可能，特别是对[人群]。诚然，[让步反例]，但这是[使用方式]的问题，而非技术本身的必然影响。",
      conclusion: "总之，技术远没有使人孤立，反而[重申作用]。关键在于[结论建议]有多明智。"
    },
    fullParagraphs: {
      introduction: "It is sometimes claimed that modern technology, from smartphones to social networking sites, has pushed people into greater social isolation. However, I strongly disagree with this view. Rather than weakening human bonds, digital tools have in fact made it easier for individuals to stay connected across distances and to find communities that share their interests.",
      body1: "The most obvious benefit is that communication no longer depends on physical proximity. A clear example is the experience of international students and migrant workers, who can now video-call their families every evening for almost no cost. Forty years ago, such people relied on expensive phone calls or airmail letters that took weeks to arrive, meaning that contact was rare and brief. Grandparents today can watch their grandchildren grow up in real time, which suggests that technology strengthens, rather than erodes, family ties.",
      body2: "Furthermore, online platforms allow people who are geographically isolated to form meaningful relationships. Teenagers in remote villages, people with disabilities and individuals from sexual minorities, for instance, frequently find peer support online that simply does not exist in their immediate neighbourhoods. Admittedly, passive scrolling through social media can occasionally replace face-to-face gatherings, and heavy users may feel lonely. Yet this is a matter of how the tools are used, not an inherent effect of the technology itself.",
      conclusion: "In conclusion, far from isolating people, technology has removed many of the barriers that once limited human connection. It preserves long-distance family relationships and gives vulnerable groups a sense of belonging. What ultimately matters is not the device itself, but how wisely individuals balance screen interaction with time spent in each other's company."
    },
        fullParagraphsCN: {
      introduction: "有人有时声称，从智能手机到社交网站，现代科技把人们推向了更深的社交孤立。然而，我强烈反对这一观点。数字工具非但没有削弱人与人之间的纽带，反而使个人更容易跨越距离保持联系，并找到与自己志趣相投的社群。",
      body1: "最明显的好处是，交流不再依赖地理上的接近。一个清晰的例子是留学生和务工人员的经历，他们如今几乎可以免费每晚与家人视频通话。四十年前，这些人只能依赖昂贵的电话或需要数周才能送达的航空信件，联系稀少而短暂。如今祖父母能够实时看着孙辈长大，这说明技术加强而非削弱了家庭纽带。",
      body2: "此外，网络平台让地理上孤立的人能够建立有意义的关系。例如，偏远村庄的青少年、残障人士和性少数群体，常常能在网上找到在身边社区根本不存在的同伴支持。诚然，被动刷社交媒体偶尔会取代面对面聚会，重度使用者可能会感到孤独。但这是工具如何使用的问题，而非技术本身固有的影响。",
      conclusion: "总之，技术非但没有孤立人们，反而消除了许多曾经限制人际联系的障碍。它维系了远距离的家庭关系，并给弱势群体带来归属感。真正重要的不是设备本身，而是个人如何明智地平衡屏幕互动与面对面相处的时间。"
    },
    vocabulary: [
      "proximity",
      "erode",
      "diaspora",
      "peer support",
      "belonging",
      "passive scrolling",
      "inherent",
      "vulnerable groups",
      "barrier",
      "real time"
    ]
  },
  {
    id: 2,
    title: "同意/不同意类 - 电视暴力影响",
    type: "agree/disagree",
    topic: "Watching violence on television encourages aggressive behavior in children. To what extent do you agree or disagree?",
    structure: {
      introduction: "Concern is often expressed that [现象]. I agree with this view to a large extent, because [机制概述].",
      body1: "Firstly, children learn behaviour partly through [机制]. When they repeatedly see [屏幕内容], they gradually come to interpret [现实情境].",
      body2: "Secondly, prolonged exposure leads to [后果2], meaning that children become [状态]. Of course, [让步因素] matters, but it can reduce rather than eliminate the risk.",
      conclusion: "In conclusion, the evidence suggests that [重申观点]. Parents and broadcasters therefore share responsibility for [建议]."
    },
    structureCN: {
      introduction: "人们常担忧[现象]。我在很大程度上同意这一观点，因为[机制概述]。",
      body1: "首先，儿童部分地通过[机制]学习行为。当他们反复看到[屏幕内容]，会逐渐以这种方式解读[现实情境]。",
      body2: "其次，长期接触会导致[后果2]，意味着儿童变得[状态]。当然，[让步因素]很重要，但它只能降低而非消除风险。",
      conclusion: "总之，证据表明[重申观点]。因此，家长和电视播出方对[建议]负有共同责任。"
    },
    fullParagraphs: {
      introduction: "Concern is often expressed that scenes of violence on television, particularly in action films and crime dramas, encourage aggression in young viewers. I agree with this view to a large extent. Although most children do not become violent offenders, repeated exposure to graphic aggression affects both their behaviour and their emotional responses in ways that parents and regulators should take seriously.",
      body1: "Firstly, children learn social behaviour partly through imitation, and they are less able than adults to distinguish fiction from reality. When heroes repeatedly resolve conflicts with weapons or punches, young viewers may absorb the message that aggression is an effective and even admirable way to assert themselves. A child who watches a character being rewarded for violent behaviour in a film may later push a classmate in the playground, especially when no adult immediately corrects the conduct. In this way, screen violence supplies scripts that children draw upon in real situations.",
      body2: "Secondly, prolonged exposure leads to desensitisation, meaning that children gradually react less strongly to pain and suffering. Studies of developmental psychology have found that heavy viewers of violent programmes tend to show greater physiological arousal during confrontations and less empathy for victims afterwards. Of course, parental guidance and stable family environments matter, and children raised in supportive homes are better protected. However, good parenting can reduce the risk; it cannot entirely remove the effect of thousands of violent images accumulated over childhood.",
      conclusion: "In conclusion, the weight of psychological evidence suggests that televised violence does encourage aggressive tendencies in children, through imitation and gradual desensitisation. While family supervision offers some protection, the simplest remedy is to limit children's access to graphic content. Broadcasters and parents therefore share responsibility for shielding young viewers from material they are not yet equipped to process."
    },
        fullParagraphsCN: {
      introduction: "人们常担心电视上的暴力场景，尤其是动作片和犯罪剧中的暴力，会助长年轻观众的攻击性。我在很大程度上同意这一观点。虽然大多数儿童不会成为暴力罪犯，但反复接触血腥的攻击行为会影响他们的行为和情绪反应，这一点家长和监管者应当认真对待。",
      body1: "首先，儿童部分通过模仿学习社会行为，而且他们比成人更难区分虚构与现实。当英雄反复用武器或拳头解决冲突时，年幼的观众可能会接受这样的信息：攻击是一种有效甚至值得钦佩的自我主张方式。一个在电影中看到角色因暴力行为而受到奖励的孩子，日后可能在操场上推搡同学，尤其是在没有成人立即纠正其行为时。这样一来，屏幕暴力为儿童提供了可在现实情境中套用的脚本。",
      body2: "其次，长时间接触会导致脱敏，即儿童对痛苦和苦难的反应逐渐减弱。发展心理学研究发现，暴力节目的重度观众在面对冲突时往往表现出更强的生理唤醒，事后对受害者的同情心却更少。当然，家长的引导和稳定的家庭环境很重要，在充满支持的家庭中长大的孩子能得到更好的保护。然而，良好的教养只能降低风险，无法完全消除童年时期积累的数千幅暴力画面所产生的影响。",
      conclusion: "总之，心理学证据的分量表明，电视暴力确实会通过模仿和逐渐脱敏助长儿童的攻击倾向。虽然家庭监督能提供一定保护，但最简单的补救办法是限制儿童接触血腥内容。因此，电视台和家长都有责任保护年幼的观众，让他们远离尚不具备处理能力的材料。"
    },
    vocabulary: [
      "graphic",
      "imitation",
      "desensitisation",
      "empathy",
      "assert oneself",
      "confrontation",
      "physiological arousal",
      "supervision",
      "shield",
      "offender"
    ]
  },
  {
    id: 3,
    title: "同意/不同意类 - 广告的影响",
    type: "agree/disagree",
    topic: "Advertising has a negative impact on society. To what extent do you agree or disagree?",
    structure: {
      introduction: "Advertising is often criticised for [批评点]. In my view, this criticism is largely unjustified: advertising provides [好处概述], although certain forms require [监管].",
      body1: "The first point to note is that advertising [作用1]. Without it, consumers [假设后果], while the media [媒体影响].",
      body2: "That said, it would be wrong to deny that [问题所在], especially when aimed at [对象]. The solution, however, lies in [对策] rather than condemning the industry as a whole.",
      conclusion: "In conclusion, advertising is on balance [结论]. Its abuses should be controlled through [方式], rather than treated as evidence of [笼统否定]."
    },
    structureCN: {
      introduction: "广告常因[批评点]而受指责。在我看来，这种批评很大程度上并不公允：广告提供了[好处概述]，尽管某些形式需要[监管]。",
      body1: "首先要注意的是，广告[作用1]。没有它，消费者[假设后果]，而媒体[媒体影响]。",
      body2: "话虽如此，否认[问题所在]也是错误的，尤其是当广告面向[对象]时。然而解决之道在于[对策]，而非谴责整个行业。",
      conclusion: "总之，权衡之下广告[结论]。其弊端应通过[方式]加以约束，而不应被视为[笼统否定]的证据。"
    },
    fullParagraphs: {
      introduction: "Advertising is often criticised for encouraging materialism and manipulating consumers into buying products they do not need. In my view, this criticism is largely unjustified. Advertising provides information that helps markets function and funds much of the media people consume, although certain forms, particularly those aimed at children, clearly require tighter regulation.",
      body1: "The first point to note is that advertising informs. When a company launches a safer medicine, a cheaper smartphone or an electric vehicle with a longer range, the public can only benefit from these innovations if it knows they exist. Without advertising, comparison between rival products would become far more difficult, and new competitors would struggle to challenge established brands. Moreover, the revenue from advertisements funds newspapers, websites, search engines and broadcast television, allowing services to be offered free or at prices far below their true cost.",
      body2: "That said, it would be wrong to deny that some advertising causes genuine harm, especially when it targets audiences unable to evaluate it critically. Television commercials for sugary cereals during children's programmes, and influencer endorsements that are not clearly labelled, exploit naivety rather than inform choice. The solution, however, lies in enforcing rules such as watershed restrictions, plain labelling and bans on misleading health claims, rather than condemning the entire industry. Responsible advertising is perfectly compatible with consumer protection.",
      conclusion: "In conclusion, advertising is on balance a positive force in society, since it spreads information, stimulates competition and finances a wide range of media. Its genuine abuses, particularly the exploitation of children, should be controlled through clear regulation rather than treated as evidence that all advertising is harmful."
    },
        fullParagraphsCN: {
      introduction: "广告常被批评为鼓励物质主义，并操纵消费者购买他们不需要的产品。在我看来，这种批评在很大程度上是不公正的。广告提供了帮助市场运转的信息，并资助了人们消费的大部分媒体，尽管某些形式的广告，尤其是针对儿童的广告，显然需要更严格的监管。",
      body1: "首先要注意的一点是，广告具有告知功能。当一家公司推出更安全的药品、更便宜的智能手机或续航更长的电动汽车时，公众只有知道它们的存在，才能从这些创新中受益。没有广告，竞品之间的比较会变得困难得多，新竞争者也难以挑战既有品牌。此外，广告收入资助了报纸、网站、搜索引擎和广播电视，使服务能以免费或远低于真实成本的价格提供。",
      body2: "话虽如此，否认某些广告造成真实危害是错误的，尤其是当它瞄准无法批判性评估它的受众时。儿童节目期间播放的含糖麦片电视广告，以及没有明确标注的网红代言，利用的是天真而非告知选择。然而，解决方案在于执行诸如时段限制、清晰标注和禁止误导性健康声明等规则，而非谴责整个行业。负责任的广告与消费者保护完全可以并存。",
      conclusion: "总之，广告总体上是社会中的一股积极力量，因为它传播信息、刺激竞争并资助广泛的媒体。它真正的滥用行为，尤其是对儿童的剥削，应当通过明确的法规加以管控，而非被当作所有广告都有害的证据。"
    },
    vocabulary: [
      "materialism",
      "manipulate",
      "revenue",
      "endorsement",
      "misleading",
      "naivety",
      "watershed",
      "compatible",
      "established brands",
      "condemn"
    ]
  },
  {
    id: 4,
    title: "同意/不同意类 - 名人崇拜",
    type: "agree/disagree",
    topic: "Celebrity culture has a negative effect on young people. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is often argued that [现象]. I largely agree, because its influence on young people's values and self-image is, on balance, [总体判断].",
      body1: "For one thing, celebrity culture promotes [价值观]. Young followers see fame as [认知], while ordinary achievements such as [踏实努力] receive little attention.",
      body2: "For another, constant exposure to [形象] creates [心理后果]. Although some celebrities set positive examples, the industry as a whole rewards [行业逻辑].",
      conclusion: "In conclusion, while individual role models can inspire, the overall culture [重申立场]. A healthier emphasis should be placed on [建议]."
    },
    structureCN: {
      introduction: "常有人认为[现象]。我基本同意，因为它对年轻人价值观和自我形象的影响，权衡之下是[总体判断]的。",
      body1: "一方面，名人文化宣扬[价值观]。年轻的追随者把成名视为[认知]，而像[踏实努力]这样的平凡成就却很少受到关注。",
      body2: "另一方面，持续接触[形象]会造成[心理后果]。尽管有些名人树立了正面榜样，但整个行业奖励的是[行业逻辑]。",
      conclusion: "总之，虽然个别榜样能够激励人，但整体文化[重申立场]。应当更健康地强调[建议]。"
    },
    fullParagraphs: {
      introduction: "It is often argued that the modern obsession with film stars, musicians and online influencers shapes the attitudes of teenagers in harmful ways. I largely agree with this view. While individual celebrities can undoubtedly inspire young people, celebrity culture as an industry tends to distort values, damage self-image and reward fame over genuine achievement.",
      body1: "For one thing, celebrity culture promotes a particular idea of success. Social media feeds are saturated with images of luxury cars, designer clothes and exotic holidays, presented as the normal reward for simply being famous. Teenagers who grow up watching such content may conclude that wealth and recognition matter more than diligence, skill or kindness. Surveys in several countries have found that a growing number of schoolchildren now list 'being famous' as their main ambition, while careers in engineering, nursing or skilled trades rarely appear in celebrity-driven media at all.",
      body2: "For another, constant exposure to carefully filtered images damages young people's self-image. Adolescents comparing their everyday appearance with professionally edited photographs often develop anxiety about body shape and skin, and clinics in Asia and the West report rising demand for cosmetic surgery among patients in their teens. Although some celebrities genuinely support charity campaigns and set admirable examples, the industry as a whole rewards controversy and self-promotion, meaning that responsible voices struggle to attract attention.",
      conclusion: "In conclusion, while individual role models can undoubtedly inspire, the overall culture surrounding fame encourages materialism, insecurity and unrealistic ambition. A healthier society would place less emphasis on glamorous celebrities and more attention on the quiet achievements of ordinary professionals."
    },
        fullParagraphsCN: {
      introduction: "人们常说，现代人对影星、音乐家和网络红人的痴迷以有害的方式塑造了青少年的态度。我大体上同意这一观点。虽然个别名人无疑能激励年轻人，但名人文化作为一个产业，往往扭曲价值观、损害自我形象，并把名望看得比真正的成就更重。",
      body1: "一方面，名人文化宣扬一种特定的成功观。社交媒体信息流充斥着豪车、名牌服装和异国度假的照片，被呈现为仅仅因为出名就能获得的正常回报。在这种内容陪伴下长大的青少年可能会得出结论：财富和认可比勤奋、技能或善良更重要。多个国家的调查发现，越来越多的中小学生如今把「出名」列为自己的主要志向，而工程、护理或技工等职业在名人驱动的媒体中几乎从不出现。",
      body2: "另一方面，不断接触经过精心筛选的图像损害了年轻人的自我形象。青少年把自己的日常外表与专业编辑过的照片相比，常常对体型和皮肤产生焦虑，亚洲和西方的诊所都报告称十几岁患者的整容需求在上升。虽然有些名人确实支持慈善活动并树立了令人钦佩的榜样，但这个行业整体上奖励争议和自我推销，这意味着负责任的声音很难吸引关注。",
      conclusion: "总之，虽然个别的榜样人物无疑能带来启发，但围绕名望的整体文化助长了物质主义、不安全感和不切实际的野心。一个更健康的社会应当少强调光鲜的名人，多关注普通专业人士默默取得的成就。"
    },
    vocabulary: [
      "obsession",
      "influencer",
      "distort",
      "saturated",
      "self-image",
      "cosmetic surgery",
      "controversy",
      "materialism",
      "recognition",
      "diligence"
    ]
  },
  {
    id: 5,
    title: "同意/不同意类 - 动物权利",
    type: "agree/disagree",
    topic: "Animals should have the same rights as humans. To what extent do you agree or disagree?",
    structure: {
      introduction: "Animal rights campaigners demand that [主张]. While I support [保护立场], I disagree that animals should hold exactly the same rights, because [理由概述].",
      body1: "Rights are normally connected with [前提]. Granting animals rights such as [例子] would produce logical and practical contradictions.",
      body2: "This does not mean animals deserve no protection. They should be granted [应有的保护], particularly [物种情形]. The goal should be welfare rather than identical legal status.",
      conclusion: "In conclusion, equal rights are both unworkable and unnecessary. What is needed instead is [结论]."
    },
    structureCN: {
      introduction: "动物权利活动人士要求[主张]。虽然我支持[保护立场]，但我不同意动物应享有与人类完全相同的权利，因为[理由概述]。",
      body1: "权利通常与[前提]相联系。赋予动物诸如[例子]之类的权利会产生逻辑与现实上的矛盾。",
      body2: "这并不意味着动物不应受到保护。它们应被赋予[应有的保护]，尤其是[物种情形]。目标应是福利，而非相同的法律地位。",
      conclusion: "总之，相同权利既不可行也无必要。真正需要的是[结论]。"
    },
    fullParagraphs: {
      introduction: "Animal rights campaigners demand that non-human creatures be granted legal rights identical to those of human beings, including the right to life and freedom from ownership. While I strongly support the protection of animals from cruelty, I disagree that they should hold exactly the same rights as people, because rights are closely linked to moral agency and social responsibility.",
      body1: "Rights are normally connected with the capacity to understand rules and to accept corresponding duties. Human beings can be held responsible for their actions in courts, vote in elections and enter contracts, and the rights they enjoy exist alongside these obligations. Granting identical rights to animals would immediately produce contradictions: a dog cannot be prosecuted for biting someone, a tiger cannot be expected to respect a stranger's right to life, and livestock cannot enter legal agreements. Treating all species identically would therefore undermine, rather than strengthen, the very idea of rights.",
      body2: "This does not mean animals deserve no protection. On the contrary, they should be granted the right to live without unnecessary suffering, supported by strict laws on farming conditions, laboratory testing and endangered species. In the case of highly intelligent creatures such as chimpanzees and elephants, a limited form of legal personhood may even be justified. The goal, however, should be welfare appropriate to each species, not an identical legal status borrowed from human society.",
      conclusion: "In conclusion, equal rights for animals and humans are both unworkable and unnecessary, since rights presuppose responsibilities that animals cannot carry. What is genuinely needed is stronger welfare protection, which prevents cruelty without imposing an artificial legal framework that no animal could meaningfully exercise."
    },
        fullParagraphsCN: {
      introduction: "动物权利倡导者要求赋予非人类生物与人类完全相同的法律权利，包括生命权和免于被拥有的自由。虽然我强烈支持保护动物免受虐待，但我不同意它们应当拥有与人完全相同的权利，因为权利与道德主体能力和社会责任密切相关。",
      body1: "权利通常与理解规则并承担相应义务的能力相关联。人类可以在法庭上为自己的行为负责、在选举中投票并签订合同，他们享有的权利与这些义务并存。赋予动物完全相同的权利会立即产生矛盾：狗不能因咬人而被起诉，老虎不能被期望尊重陌生人的生命权，牲畜也不能签订法律协议。因此，同等对待所有物种非但不会强化权利的概念，反而会削弱它。",
      body2: "这并不意味着动物不应得到任何保护。恰恰相反，应当赋予它们免于不必要痛苦的生活权利，并以关于养殖条件、实验室试验和濒危物种的严格法律作为支撑。对于黑猩猩和大象等高智商生物，甚至可以考虑赋予有限形式的法律人格。然而，目标应当是适合每个物种的福利，而非从人类社会借用的、完全相同的法律地位。",
      conclusion: "总之，我反对给予动物与人类完全相同的法律权利，但这绝不是默许虐待。一个公正的制度应当为动物提供强有力的福利保护，同时承认权利与义务之间的联系。人类对其他物种的责任是真实的，但把动物当作法律意义上的人来对待既不现实，也无益处。"
    },
    vocabulary: [
      "campaigner",
      "moral agency",
      "prosecute",
      "obligation",
      "livestock",
      "personhood",
      "welfare",
      "cruelty",
      "endangered species",
      "unworkable"
    ]
  },

  {
    id: 6,
    title: "同意/不同意类 - 网络隐私",
    type: "agree/disagree",
    topic: "Individuals have no right to privacy in the digital age. To what extent do you agree or disagree?",
    structure: {
      introduction: "Some people conclude that [主张], now that so much personal data is collected online. I disagree completely: the right to privacy remains [立场], provided that [条件].",
      body1: "The first reason is that [理由1]. Laws such as [法规] already require companies to [要求], while technology allows users to [技术手段].",
      body2: "It is true that [让步事实], and surveillance-based business models create genuine risks. These problems, however, call for [对策], not the abandonment of the right itself.",
      conclusion: "In conclusion, privacy is neither obsolete nor impossible. It should be actively defended through [结论建议]."
    },
    structureCN: {
      introduction: "既然有如此多的个人数据在网上被收集，有些人得出结论[主张]。我完全不同意：只要[条件]，隐私权仍然[立场]。",
      body1: "第一个理由是[理由1]。诸如[法规]之类的法律已经要求公司[要求]，同时技术也允许用户[技术手段]。",
      body2: "诚然，[让步事实]，以监控为基础的商业模式确实带来风险。但这些问题需要的是[对策]，而不是放弃权利本身。",
      conclusion: "总之，隐私既没有过时，也并非不可能。应当通过[结论建议]积极捍卫它。"
    },
    fullParagraphs: {
      introduction: "Some people conclude that individuals can no longer expect privacy in the digital age, now that emails, location data and browsing habits are routinely recorded by technology companies. I disagree completely with this view. The right to control one's personal information remains as important as ever, and the spread of data collection makes legal protection more necessary, rather than less.",
      body1: "The first reason is that privacy can still be protected in both law and technology. Regulations such as the European Union's General Data Protection Regulation require companies to explain what data they collect, to delete it on request and to obtain clear consent before processing it. At the same time, encrypted messaging, two-factor authentication and privacy-focused browsers allow ordinary users to keep a substantial part of their digital lives confidential. When these tools fail, independent regulators can impose fines large enough to change corporate behaviour.",
      body2: "It is true that users often trade personal information for free services, and business models built on targeted advertising create genuine risks of surveillance and data breaches. The history of major leaks has shown how carelessly some firms treat even sensitive data such as health records and financial details. These problems, however, call for stricter enforcement, transparent alternatives and digital education in schools, not for accepting the fatalistic claim that privacy no longer exists.",
      conclusion: "In conclusion, privacy is neither obsolete nor technically impossible in the digital age. It should be actively defended through stronger regulation, better security tools and informed public choices, rather than surrendered simply because collecting data has become convenient."
    },
        fullParagraphsCN: {
      introduction: "如今，许多大学让学生选择是否到课。有人认为这是对学生自主能力的信任，也有人担心这会削弱学习效果。我倾向于认为出勤应当保持义务性，因为结构化的课堂环境能提供自学难以替代的益处，尽管在线资源使远程学习在某些情况下更为灵活。",
      body1: "强制出勤的主要理由是，面对面的课堂促进了主动学习。研讨课上的讨论、即时提问以及与同学和讲师的思想碰撞，能加深对材料的理解，而独自看屏幕时很容易走神。许多学生，尤其是刚入学的新生，缺乏足够的自律来维持稳定的自学节奏；规定的课表给了他们必须遵守的结构。研究还显示，出勤率与考试成绩之间存在正相关，这表明课堂参与本身就有价值。",
      body2: "另一方面，反对者指出，优质的录播课和在线资料让学生可以按自己的节奏学习，而且通勤、兼职或健康问题可能使到校变得困难。这些观点有其道理，对于那些已证明能独立工作的成熟学生尤其如此。然而，这些优势可以通过混合模式来兼顾：把部分课程录播供复习，同时保留核心课程的面授出勤要求。完全取消出勤义务往往导致参与度骤降，尤其是在低年级。",
      conclusion: "总之，我认为大学课程应当保留出勤要求，至少在必修和研讨课中如此。课堂提供的互动和结构是高质量教育的关键组成部分。技术可以作为补充，但不应取代学生定期到课、与师生直接交流的机会。"
    },
    vocabulary: [
      "routinely",
      "consent",
      "encryption",
      "authentication",
      "confidential",
      "surveillance",
      "data breach",
      "fatalistic",
      "enforcement",
      "regulator"
    ]
  },
  {
    id: 7,
    title: "同意/不同意类 - 家庭教育",
    type: "agree/disagree",
    topic: "Parents should be held responsible for their children's behavior. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is sometimes suggested that [主张]. I agree with this only partly: parents should be accountable for [范围], but full responsibility becomes unfair as children grow older.",
      body1: "In early childhood, parents clearly [作用1]. They teach [内容], and holding them responsible for, for example, [例子] creates reasonable incentives.",
      body2: "After adolescence, however, the argument weakens. Teenagers are increasingly influenced by [因素], and blaming every offence on parents can be [后果]. Responsibility should be shared among [各方].",
      conclusion: "In conclusion, parental responsibility is real but age-limited. Legal and school systems should reflect [结论]."
    },
    structureCN: {
      introduction: "有时有人建议[主张]。我只是部分同意：父母应对[范围]负责，但随着孩子长大，让父母承担全部责任便有失公平。",
      body1: "在幼儿期，父母显然[作用1]。他们教导[内容]，让他们为例如[例子]之类的事情负责，能够形成合理的约束与激励。",
      body2: "然而进入青春期后，这一观点便难以成立。青少年越来越受[因素]影响，把每一次过错都归咎于父母可能[后果]。责任应由[各方]共同承担。",
      conclusion: "总之，父母的责任真实存在但受年龄限制。法律与学校制度应体现[结论]。"
    },
    fullParagraphs: {
      introduction: "It is sometimes suggested that parents should be punished or fined whenever their children misbehave, whether at school, in shops or online. I agree with this view only partly. Parents should indeed be accountable for the conduct of young children, but holding them fully responsible becomes increasingly unfair as children approach adolescence and are shaped by forces beyond the family.",
      body1: "In early childhood, parents are by far the strongest influence on behaviour. They teach basic self-control, respect for others and the distinction between right and wrong, and most misconduct in the first years of school reflects habits formed at home. Holding parents responsible when, for example, a young child repeatedly damages school property creates reasonable incentives for them to address the problem early. Many legal systems already require parents to pay compensation in such cases, which seems both fair and practical.",
      body2: "After adolescence, however, the argument weakens considerably. Teenagers spend much of their day under the influence of classmates, social media and online communities whose values may conflict with those taught at home, and they are developing the capacity to make independent choices. Blaming parents automatically for bullying, theft or internet offences can be unjust, especially when parents have actively sought help. Responsibility should therefore be shared among families, schools and, where appropriate, the young offenders themselves.",
      conclusion: "In conclusion, parental responsibility is real but should be age-limited. For young children it provides a necessary incentive, while for teenagers automatic blame is often unfair. Legal and school systems should reflect this gradual shift from parental control towards individual accountability."
    },
        fullParagraphsCN: {
      introduction: "随着远程办公的普及，有人预测传统的办公空间将变得多余。我不同意这一看法。虽然远程工作在灵活性方面有明显优势，但办公室仍提供着难以在家中复制的协作、文化和培训功能，因此短期内不会消失。",
      body1: "办公室之所以仍然重要，首先在于它能促进协作和团队凝聚力。自发的走廊交谈、白板头脑风暴以及共同完成项目时的即时反馈，往往催生远程交流难以产生的创意。许多公司，包括谷歌和苹果，都在设计时有意创造促进偶遇的空间，正是因为他们认识到非正式互动对创新的价值。新员工也从面对面的指导中获益匪浅，因为企业文化和隐性知识很难通过视频会议传授。",
      body2: "当然，远程办公确实有其优势。它省去了通勤时间，让员工能更好地平衡工作与生活，还能让公司招聘到地理上分散的人才。对于需要专注的任务，在家工作可能比开放办公区更高效。然而，这些好处可以通过混合模式获得，而不必完全放弃办公室。完全远程的团队常报告孤独感、沟通不畅和归属感薄弱，这正是办公室能够解决的问题。",
      conclusion: "总之，办公室不会因为远程办公的兴起而消失。它的角色可能会改变——从日常工作场所转变为协作、培训和团队建设的中心——但面对面交流的价值依然存在。最有效的模式很可能是两者的结合，而非非此即彼。"
    },
    vocabulary: [
      "accountable",
      "misconduct",
      "incentive",
      "compensation",
      "adolescence",
      "bullying",
      "offender",
      "accountability",
      "self-control",
      "capacity"
    ]
  },
  {
    id: 8,
    title: "同意/不同意类 - 艺术价值",
    type: "agree/disagree",
    topic: "Art is not essential in modern society. To what extent do you agree or disagree?",
    structure: {
      introduction: "Some regard art as a luxury that [观点]. I strongly disagree: art is essential both for [个人层面] and for [社会层面].",
      body1: "At the individual level, art [作用1]. Painting, music and literature allow people to [功能], which is why art therapy is now used for [应用场景].",
      body2: "At the societal level, the arts [作用2]. They employ millions in [行业], preserve cultural memory and drive tourism in cities such as [例子].",
      conclusion: "In conclusion, art is not decoration but [重申]. Cutting cultural funding would damage both wellbeing and prosperity."
    },
    structureCN: {
      introduction: "有些人把艺术视为[观点]的奢侈品。我强烈反对：无论对[个人层面]还是对[社会层面]，艺术都不可或缺。",
      body1: "在个人层面，艺术[作用1]。绘画、音乐和文学使人们能够[功能]，正因如此，艺术治疗如今被用于[应用场景]。",
      body2: "在社会层面，艺术[作用2]。它们在[行业]中雇用数百万人，保存文化记忆，并推动[例子]等城市的旅游业。",
      conclusion: "总之，艺术不是装饰，而是[重申]。削减文化经费既损害福祉，也损害繁荣。"
    },
    fullParagraphs: {
      introduction: "Some people regard art as an unaffordable luxury in modern society, arguing that public money should be spent on hospitals, roads and scientific research rather than galleries or concert halls. I strongly disagree with this view. Art is essential to human life, both for the emotional wellbeing of individuals and for the economic and cultural health of society.",
      body1: "At the individual level, art provides ways of expressing and understanding feelings that ordinary language cannot capture. Painting, music, dance and literature allow people to process grief, celebrate identity and make sense of uncertainty, which is why art therapy is now used to treat trauma, depression and loneliness in hospitals. For children, drawing and singing are among the earliest tools through which they develop imagination and coordination. A society that treated these activities as unnecessary would neglect an important dimension of mental health.",
      body2: "At the societal level, the arts are also a major industry rather than a financial burden. Design, film, publishing, music and advertising employ millions of people worldwide and generate substantial export earnings, while museums and theatres drive tourism in cities such as London, Seoul and Florence. Beyond money, artworks preserve the memory of civilisations and allow each generation to question its values. Scientific progress and artistic culture therefore complement rather than compete with one another.",
      conclusion: "In conclusion, art is not decoration but a source of psychological wellbeing, employment and collective memory. Reducing cultural funding on the grounds that art is non-essential would damage both the quality of life and the long-term prosperity of society."
    },
        fullParagraphsCN: {
      introduction: "人工智能正在迅速进入工作场所，引发了人们对大规模失业的担忧。我认为，人工智能更可能改变而非摧毁就业，虽然它无疑会淘汰某些岗位，但也会创造新的机会，并提高许多人的生产力。",
      body1: "人工智能最直接的影响是自动化日常和重复性任务。数据录入、基本客户服务、常规会计和初级法律研究等工作，正越来越多地由算法处理，这确实会减少对这些岗位的需求。然而，历史表明，技术革命同时会创造新的就业：汽车取代了马车夫，却催生了汽车制造、道路建设和物流等整个产业。人工智能很可能带来类似的转变，产生训练、维护和监督这些系统的新岗位。",
      body2: "更重要的是，人工智能可以增强而非取代人类劳动者。医生可以借助人工智能更快地诊断疾病，但对患者的关怀和复杂判断仍需人类来做；律师可以利用人工智能检索先例，但法庭辩论和策略制定依然依赖人的智慧。许多岗位会被重新定义而非消除，劳动者将与机器协作，把精力集中在更需要创造力和判断力的方面。挑战在于教育和再培训体系能否跟上变化的步伐。",
      conclusion: "总之，人工智能不太可能造成大规模失业，而是会重组就业市场。某些岗位会消失，新的岗位会出现，许多现有的工作方式会被改变。关键不在于阻止自动化，而在于确保劳动者具备适应新技术的技能，让社会的整体收益得到公平分享。"
    },
    vocabulary: [
      "luxury",
      "wellbeing",
      "trauma",
      "therapy",
      "collective memory",
      "export earnings",
      "complement",
      "civilisation",
      "dimension",
      "prosperity"
    ]
  },
  {
    id: 9,
    title: "同意/不同意类 - 纸质书籍",
    type: "agree/disagree",
    topic: "Printed books will soon be replaced by e-books. To what extent do you agree or disagree?",
    structure: {
      introduction: "With the rise of e-readers, some predict that [预言]. I disagree: although electronic texts will keep growing, printed books will survive because [理由概述].",
      body1: "Paper books offer advantages that screens cannot match: [优点]. Several studies even suggest that readers of print [阅读效果].",
      body2: "There is also little evidence that readers treat the two formats as rivals. People use e-books for [场景], while choosing print for [场景]. The market shows [市场证据].",
      conclusion: "In conclusion, the likely future is coexistence, not replacement. Each format serves different needs."
    },
    structureCN: {
      introduction: "随着电子阅读器的兴起，有人预言[预言]。我不同意：尽管电子文本会继续增长，但纸质书会存续下去，因为[理由概述]。",
      body1: "纸质书具有屏幕无法比拟的优势：[优点]。若干研究甚至表明，纸质书读者[阅读效果]。",
      body2: "也几乎没有证据表明读者把两种形式视为对手。人们在[场景]使用电子书，而在[场景]选择纸质书。市场显示[市场证据]。",
      conclusion: "总之，未来更可能是共存而非替代。每种形式满足不同需求。"
    },
    fullParagraphs: {
      introduction: "With the rapid spread of e-readers, tablets and smartphones, some people predict that printed books will soon disappear altogether. I disagree with this prediction. Although electronic texts will undoubtedly keep growing in popularity, paper books offer practical and emotional advantages that digital devices cannot fully replace.",
      body1: "Paper books offer benefits that screens cannot match. They never run out of battery, work in bright sunlight, cause less eye strain and allow readers to annotate pages and feel how far they have progressed. Several educational studies even suggest that readers of print absorb and recall information better than those reading long texts on screens, possibly because the physical layout of a page provides spatial memory cues. For young children in particular, printed picture books support shared reading without the distractions of notifications.",
      body2: "There is also little evidence that ordinary readers treat the two formats as rivals. Commuters and travellers choose e-books because an entire library weighs little more than a single novel, while the same readers often buy printed copies of favourite works, cookbooks and illustrated volumes. Rather than collapsing, the market for printed books has stabilised in many countries after an initial decline, and independent bookshops have even begun to recover. Second-hand book markets and library borrowing, which operate almost entirely with physical copies, continue to circulate millions of volumes every year.",
      conclusion: "In conclusion, the likely future is coexistence rather than replacement. E-books provide unmatched convenience, whereas printed books offer tactile pleasure, better concentration and durable ownership, and readers will continue to value both."
    },
        fullParagraphsCN: {
      introduction: "在许多国家，人们担心以标准化考试为核心的教育体系会扼杀创造力。我大体上同意这一担忧。虽然考试在评估基础技能方面有其作用，但过度依赖它们确实会鼓励死记硬背而非独立思考，损害学生的创新能力。",
      body1: "标准化考试之所以抑制创造力，是因为它们通常奖励唯一正确的答案。为了备考，学生被训练去记忆事实和套用固定公式，而不是探索多种解题思路。当成绩取决于在限时内选对选项时，冒险、实验或提出非正统问题就变得没有意义。久而久之，学生习惯于寻找「正确答案」而非「最佳方案」，这种思维模式会延续到成年，抑制他们在工作和生活中的创新。",
      body2: "当然，考试也有其价值。它们提供了相对客观的评估方式，帮助识别学习差距，并确保学生掌握基本的读写算能力。完全废除考试可能导致评估标准不透明，尤其不利于弱势学生。然而，这并不意味着考试应成为唯一的评估手段。将项目作业、作品集、口头展示和持续评估纳入考核，可以在保持问责的同时鼓励创造力。",
      conclusion: "总之，虽然考试在教育中有其地位，但过度依赖它们确实会损害创造力。一个更好的体系应当把标准化考试作为多种评估手段之一，与注重过程和应用的任务相结合。只有当学生被鼓励探索、实验和犯错时，他们的创造力才能真正发展。"
    },
    vocabulary: [
      "e-reader",
      "annotate",
      "eye strain",
      "spatial memory cues",
      "tactile",
      "stabilise",
      "coexistence",
      "layout",
      "notification",
      "illustrated"
    ]
  },
  {
    id: 10,
    title: "同意/不同意类 - 传统节日",
    type: "agree/disagree",
    topic: "Traditional festivals are losing their significance. To what extent do you agree or disagree?",
    structure: {
      introduction: "It is often claimed that [现象], as festivals become increasingly commercialised. I disagree: their form is changing, but the core meaning remains.",
      body1: "Commercialisation is only one layer of these events. Even when shops run sales, families still [核心行为], which shows that [实质保留].",
      body2: "Moreover, urbanisation and migration have spread rather than weakened traditions. Festivals are now celebrated [范围], while younger people [新的参与方式].",
      conclusion: "In conclusion, traditions rarely remain unchanged, and adaptation is evidence of vitality rather than decline."
    },
    structureCN: {
      introduction: "常有人声称[现象]，因为节日变得越来越商业化。我不同意：形式在变，但核心意义仍在。",
      body1: "商业化只是这些活动的一个层面。即使商店促销，家庭仍然[核心行为]，这表明[实质保留]。",
      body2: "此外，城市化和移民传播而非削弱了传统。节日如今在[范围]被庆祝，而年轻人[新的参与方式]。",
      conclusion: "总之，传统很少一成不变，适应与变化是活力而非衰落的证明。"
    },
    fullParagraphs: {
      introduction: "It is often claimed that traditional festivals such as the Lunar New Year, Christmas and Diwali are losing their real significance and have become little more than shopping seasons. I disagree with this view. Their outward form is undoubtedly changing, but the core meanings of family reunion, gratitude and cultural renewal remain strong.",
      body1: "Commercialisation is only one layer of these events. It is true that department stores run promotions and online platforms launch festival sales weeks in advance. Nevertheless, even the most urbanised families still gather for reunion dinners, prepare special dishes, visit relatives and give red envelopes or gifts to children. The enormous travel rush before the Lunar New Year, in which hundreds of millions of people cross China within days, demonstrates that the desire to return home remains the emotional centre of the occasion rather than consumption.",
      body2: "Moreover, urbanisation and migration have spread rather than weakened traditions. Diaspora communities now celebrate Lunar New Year parades in London, Diwali lights in Leicester and Mid-Autumn gatherings across Southeast Asia, introducing local neighbours to the customs. Younger people, meanwhile, share festive greetings, costume photographs and recipes online, giving ancient rituals new forms of participation rather than abandoning them. Even critics who lament commercialisation rarely refuse the holiday itself, which suggests that the instinct behind these occasions remains intact.",
      conclusion: "In conclusion, living traditions rarely remain unchanged, and adaptation is evidence of vitality rather than decline. As long as festivals continue to bring families together and transmit shared values, their significance survives beneath the commercial surface."
    },
        fullParagraphsCN: {
      introduction: "气候变化被广泛视为当今世界面临的最紧迫挑战。我完全同意这一观点。气温上升、极端天气和海平面上升对人类安全、粮食供应和经济稳定构成威胁，其影响已经在全球范围内显现，紧迫性远超其他长期问题。",
      body1: "气候变化之所以如此紧迫，是因为它的影响是全球性的、系统性的，而且一旦越过临界点就可能不可逆转。北极冰盖融化、海洋酸化和生物多样性丧失，威胁着支撑人类文明的生态系统。仅2023年，野火就摧毁了加拿大和夏威夷的大片地区，欧洲经历了致命热浪，巴基斯坦的洪水使数百万人流离失所。这些事件不再是预测，而是正在发生的现实，每一年的拖延都使应对成本更高。",
      body2: "有人可能会说，贫困、疾病或战争等问题同样紧迫。的确，这些问题需要立即关注，但它们与气候变化相互交织：气候灾害加剧了粮食短缺和贫困，而干旱和资源竞争可能引发冲突。与许多其他挑战不同，气候变化有一个明确的时间窗口——如果本世纪中叶前不能大幅减排，最严重的影响将变得难以避免。这就是为什么它应当被置于全球议程的首位。",
      conclusion: "总之，气候变化确实是我们这个时代最紧迫的挑战。它的全球性、不可逆性和时间紧迫性，使它区别于其他虽然严重但更具局部性或可逆转的问题。国际社会必须立即采取行动，转向可再生能源、提高能效并建设适应能力，否则将付出远超今天行动成本的代价。"
    },
    vocabulary: [
      "reunion",
      "gratitude",
      "renewal",
      "commercialisation",
      "diaspora",
      "ritual",
      "vitality",
      "transmit",
      "custom",
      "consumption"
    ]
  },

  {
    id: 11,
    title: "同意/不同意类 - 工作与生活平衡",
    type: "agree/disagree",
    topic: "It is impossible to achieve a good work-life balance in modern society. To what extent do you agree or disagree?",
    structure: {
      introduction: "Long working hours and constant connectivity lead some to conclude that [主张]. I disagree: balance remains achievable, though it requires [条件概述].",
      body1: "Evidence from workplaces shows that organisations can redesign work. Examples such as [案例] demonstrate that [措施] can improve both productivity and wellbeing.",
      body2: "Individuals also retain agency over [个人选择], although certain professions remain demanding. Claiming that balance is impossible risks [后果], treating a solvable problem as fate.",
      conclusion: "In conclusion, a good balance is difficult but far from impossible. It depends on sensible employers, supportive policy and personal discipline."
    },
    structureCN: {
      introduction: "漫长的工时和随时在线使一些人得出结论[主张]。我不同意：平衡仍然可以实现，尽管需要[条件概述]。",
      body1: "来自职场的证据表明，组织可以重新设计工作方式。诸如[案例]之类的例子证明，[措施]能够同时提高生产率和幸福感。",
      body2: "个人在[个人选择]上也仍有主动权，尽管某些职业依然辛苦。声称平衡不可能实现，有[后果]的风险，把可解决的问题当作宿命。",
      conclusion: "总之，良好的平衡虽难但远非不可能。它取决于明智的雇主、支持性的政策和个人自律。"
    },
    fullParagraphs: {
      introduction: "Long working hours, commuting time and the expectation of answering emails at night lead some people to conclude that a healthy work-life balance is no longer achievable. I disagree with this view. Balance is certainly difficult in competitive modern economies, but it remains possible when employers, governments and individuals make deliberate choices.",
      body1: "Evidence from workplaces shows that organisations can redesign work without sacrificing performance. Four-day-week trials in countries such as Iceland and Britain, along with flexible hours and remote-working policies in parts of Scandinavia, have reported equal or higher productivity, lower staff turnover and fewer sick days. Such results suggest that exhaustion is not an unavoidable price of prosperity; it often reflects outdated management habits that treat visible hours as a substitute for measured results.",
      body2: "Individuals also retain genuine agency. People can limit work notifications outside office hours, protect time for exercise and family, and choose employers whose practices match their priorities, although it would be unfair to ignore that low-paid workers and professions such as medicine face much harder constraints. Claiming that balance is impossible risks producing a self-fulfilling defeatism, treating a problem that legislation and negotiation can address as an unchangeable feature of modern life. Legal limits on excessive overtime, common in parts of Europe, show that such boundaries are already enforceable at scale.",
      conclusion: "In conclusion, a good work-life balance is difficult but far from impossible. Shorter-hour trials and flexible policies prove that sensible reform works, while personal discipline and supportive public policy can extend these benefits more widely."
    },
        fullParagraphsCN: {
      introduction: "长时间工作、通勤时间以及夜间回复邮件的期望，让一些人得出结论：健康的工作与生活平衡已不再可能实现。我不同意这一观点。在竞争激烈的现代经济中，平衡确实很难，但只要雇主、政府和个人做出有意识的选择，它仍然是可能的。",
      body1: "来自工作场所的证据表明，组织可以在不牺牲绩效的情况下重新设计工作。冰岛、英国等国的四天工作制试验，以及斯堪的纳维亚部分地区的弹性工时和远程办公政策，都报告了持平或更高的生产率、更低的员工流失率和更少的病假。这些结果表明，疲惫并非繁荣不可避免的代价；它往往反映了过时的管理习惯——把看得见的工时当作可衡量成果的替代品。",
      body2: "个人也仍然拥有真正的自主权。人们可以限制工作时间之外的工作通知、保护锻炼和陪伴家人的时间、选择做法与自己优先事项相符的雇主，尽管忽视低薪劳动者和医疗等行业面临的更大约束是不公平的。声称平衡不可能实现，有可能产生一种自我实现的失败主义，把一个可以通过立法和谈判解决的问题当作现代生活不可改变的特征。欧洲部分地区常见的对过度加班的法律限制，表明这种界限已经可以大规模执行。",
      conclusion: "总之，良好的工作与生活平衡很难，但绝非不可能。短工时试验和灵活政策证明，合理的改革是有效的，而个人自律和支持性的公共政策可以把这些好处扩展到更广泛的人群。"
    },
    vocabulary: [
      "connectivity",
      "productivity",
      "staff turnover",
      "flexible",
      "defeatism",
      "self-fulfilling",
      "constraint",
      "exhaustion",
      "deliberate",
      "legislation"
    ]
  },
  {
    id: 12,
    title: "同意/不同意类 - 全球化文化",
    type: "agree/disagree",
    topic: "Globalization is destroying local cultures. To what extent do you agree or disagree?",
    structure: {
      introduction: "Global brands and media are often blamed for [观点]. I disagree with this claim to a large extent, since exchange tends to produce [结果概述], though some risks deserve attention.",
      body1: "Rather than erasing traditions, contact with the outside world often [作用1]. Examples such as [例子] show local culture gaining global audiences and evolving in creative ways.",
      body2: "There is, admittedly, a genuine risk of [让步风险], particularly for minority languages. This, however, can be addressed through [对策], rather than rejecting openness itself.",
      conclusion: "In conclusion, globalization is a challenge but not a destroyer. Cultures that engage confidently with the world tend to thrive."
    },
    structureCN: {
      introduction: "全球品牌和媒体常因[观点]受指责。我在很大程度上不同意，因为交流往往产生[结果概述]，尽管某些风险值得关注。",
      body1: "与外部世界的接触非但没有抹去传统，反而常常[作用1]。诸如[例子]表明，本土文化赢得了全球受众，并以富有创意的方式演变。",
      body2: "诚然，[让步风险]确实存在，对小语种而言尤其如此。但这可以通过[对策]解决，而不必拒绝开放本身。",
      conclusion: "总之，全球化是挑战而非毁灭者。自信地与世界互动的文化往往更加繁荣。"
    },
    fullParagraphs: {
      introduction: "Global brands, blockbuster films and the English language are often blamed for sweeping away local traditions and producing a uniform world culture. I disagree with this claim to a large extent. While globalisation certainly creates pressures on small languages and traditional crafts, contact between cultures more often produces adaptation and hybrid creativity rather than destruction.",
      body1: "Rather than erasing traditions, contact with the outside world often revitalises them. Korean popular music, for example, combines Western production techniques with Korean performance conventions and now earns audiences on every continent; similarly, cuisines from Thailand, Mexico and Ethiopia have become better known and more respected as people travel and migrate. Artisans who once served only local markets can sell textiles, pottery and jewellery worldwide through the internet, giving endangered crafts an economic reason to survive.",
      body2: "There is, admittedly, a genuine risk of homogenisation, particularly when international chain stores replace distinctive local businesses and when children grow up seeing minority languages as economically useless. These dangers, however, can be addressed through bilingual education, support for cultural industries and planning rules that protect independent shops, rather than by rejecting openness itself. Isolation historically preserved traditions only by also preserving poverty. Many governments now support minority-language broadcasting precisely so that openness and cultural continuity reinforce one another.",
      conclusion: "In conclusion, globalisation is a genuine challenge to local cultures but not an inevitable destroyer. Cultures that engage confidently with the world, while receiving sensible protection for their most vulnerable elements, tend to adapt and thrive rather than disappear. Local traditions and global exchange can flourish together rather than at each other's expense."
    },
        fullParagraphsCN: {
      introduction: "全球品牌、大片电影和英语常被指责为扫荡本土传统、制造单一的世界文化。我在很大程度上不同意这一说法。虽然全球化确实给小语种和传统工艺带来了压力，但不同文化之间的接触更常产生的是适应和混合创造，而非毁灭。",
      body1: "与外界的接触非但不会抹除传统，反而常常使其焕发活力。例如，韩国流行音乐把西方的制作技术与韩国的表演惯例相结合，如今在每个大洲都赢得了观众；同样，随着人们旅行和迁移，泰国、墨西哥和埃塞俄比亚的菜肴变得更广为人知、更受尊重。曾经只服务于本地市场的工匠，如今可以通过互联网在全球销售纺织品、陶器和珠宝，为濒危工艺提供了生存的经济理由。",
      body2: "诚然，存在同质化的真实风险，尤其是当国际连锁店取代了独具特色的本地商户，以及孩子们在成长过程中认为少数民族语言在经济上毫无用处时。然而，这些危险可以通过双语教育、对文化产业的支持以及保护独立商铺的规划规则来应对，而不是通过拒绝开放本身。历史上，孤立在保存传统的同时也保存了贫困。许多政府如今支持少数民族语言广播，正是为了让开放与文化延续相互强化。",
      conclusion: "总之，全球化对本土文化是一个真正的挑战，但并非不可避免的毁灭者。那些自信地与世界接触、同时对最脆弱的元素给予合理保护的文化，往往会适应并繁荣，而非消失。本土传统与全球交流可以共同繁荣，而非以彼此为代价。"
    },
    vocabulary: [
      "homogenisation",
      "revitalise",
      "hybrid",
      "artisan",
      "endangered",
      "bilingual",
      "uniform",
      "distinctive",
      "convention",
      "thrive"
    ]
  },
  {
    id: 13,
    title: "同意/不同意类 - 社交媒体与友谊",
    type: "agree/disagree",
    topic: "Social media has weakened real friendships. To what extent do you agree or disagree?",
    structure: {
      introduction: "Although social networks connect billions of people, I believe they have weakened the depth of many friendships, mainly because [理由概述].",
      body1: "Firstly, online interaction favours [特征]. Likes and brief comments can maintain contact, yet they rarely replace [真正的交流].",
      body2: "Secondly, curated profiles and constant comparison create [心理影响]. It is true that platforms help maintain long-distance ties, but sustaining them still requires [条件].",
      conclusion: "In conclusion, social media is a useful tool for keeping in touch, but genuine friendship depends on attention and vulnerability that screens cannot easily supply."
    },
    structureCN: {
      introduction: "尽管社交网络连接了数十亿人，但我认为它削弱了许多友谊的深度，主要是因为[理由概述]。",
      body1: "首先，网络互动偏好[特征]。点赞和简短评论能够维持联系，却很少能取代[真正的交流]。",
      body2: "其次，精心经营的个人主页和不断比较会造成[心理影响]。平台确实有助于维系远距离关系，但维系它们仍需要[条件]。",
      conclusion: "总之，社交媒体是保持联系的有用工具，但真正的友谊依赖专注与坦诚相待，这是屏幕难以提供的。"
    },
    fullParagraphs: {
      introduction: "Social networking platforms allow people to accumulate hundreds or even thousands of contacts, and photographs of gatherings suggest a rich social life. Nevertheless, I agree to a large extent that these platforms have weakened the quality of many real friendships. The ease of lightweight online contact has gradually reduced the depth and honesty that close relationships require.",
      body1: "Firstly, online interaction favours brevity and visibility over presence. Liking a photograph or sending a birthday sticker requires only seconds, so users can feel connected without ever learning what a friend is genuinely experiencing. Several surveys of heavy users report large numbers of online friends alongside feelings of loneliness, suggesting that frequent contact is not the same as genuine closeness. The unhurried activities in which friendship deepens—shared meals, long conversations, helping during hardship—cannot be performed through reactions. Time-use studies consistently show that hours spent on applications tend to displace the unstructured meetings in which friendship is actually built.",
      body2: "Secondly, curated profiles and constant comparison subtly introduce distrust. Friends display holidays, achievements and appearances while concealing failures, which can turn observers into audiences and nourish envy rather than sympathy. It is true that platforms help migrants and separated families maintain long-distance ties that would otherwise fade; nevertheless, those relationships survive when calls and occasional visits accompany the messages, not when timelines replace them.",
      conclusion: "In conclusion, social media is a genuinely useful tool for maintaining contact and discovering distant communities, but it has weakened friendship when treated as a substitute for personal presence. Deep relationships still require time, attention and the willingness to be vulnerable face to face."
    },
        fullParagraphsCN: {
      introduction: "社交网络平台让人们能够积累数百甚至数千个联系人，聚会的照片暗示着丰富的社交生活。然而，我在很大程度上同意这些平台削弱了许多真实友谊的质量。轻量级在线联系的便捷性，逐渐降低了亲密关系所需要的深度和诚实。",
      body1: "首先，在线互动青睐简洁和可见性，而非真实在场。给一张照片点赞或发送一个生日贴纸只需要几秒钟，因此用户可以感到彼此联系，却从不了解朋友真正正在经历什么。几项针对重度使用者的调查报告显示，他们拥有大量在线好友的同时却感到孤独，这表明频繁的联系并不等同于真正的亲密。友谊得以深化的那些从容不迫的活动——共享的餐食、长谈、困难时的帮助——无法通过点赞表情来完成。时间使用研究一致表明，花在应用上的时间往往会挤占那些真正建立友谊的无拘无束的会面。",
      body2: "其次，精心策划的个人主页和持续的比较会微妙地引入不信任。朋友们展示假期、成就和外表，却隐藏失败，这可能把旁观者变成观众，滋生嫉妒而非同情。诚然，平台帮助移民和分居家庭维持了原本会消退的远距离联系；然而，这些关系之所以得以延续，是因为消息之外还有通话和偶尔的探望，而非时间线取代了它们。",
      conclusion: "总之，社交媒体是保持联系和发现远方社群的真正有用的工具，但当它被当作个人在场的替代品时，就削弱了友谊。深厚的关系仍然需要时间、关注，以及面对面袒露脆弱的意愿。"
    },
    vocabulary: [
      "brevity",
      "curated",
      "nourish",
      "envy",
      "sympathy",
      "vulnerability",
      "presence",
      "lightweight",
      "closeness",
      "subtly"
    ]
  },
  {
    id: 14,
    title: "同意/不同意类 - 金钱与幸福",
    type: "agree/disagree",
    topic: "Money is the most important factor for happiness. To what extent do you agree or disagree?",
    structure: {
      introduction: "Wealth is often treated as the key to a good life. I disagree that it is the most important factor: it removes certain miseries, but happiness depends more on [因素概述].",
      body1: "The first point is that the effect of income on happiness diminishes after [界限]. Once basic needs are met, additional wealth yields [边际效果].",
      body2: "Moreover, studies of wellbeing repeatedly identify [因素] as stronger predictors. Wealth can even damage happiness when it costs [代价].",
      conclusion: "In conclusion, money matters as an instrument of security, but treating it as the foundation of happiness is a mistake."
    },
    structureCN: {
      introduction: "财富常被当作美好生活的关键。我不同意它是幸福最重要的因素：金钱能消除某些痛苦，但幸福更依赖[因素概述]。",
      body1: "第一点是，收入对幸福的影响在越过[界限]后会递减。基本需要一旦满足，额外财富带来[边际效果]。",
      body2: "此外，对幸福感的研究反复发现，[因素]是更强的预测指标。当财富以[代价]为代价时，甚至可能损害幸福。",
      conclusion: "总之，金钱作为保障工具很重要，但把它当成幸福的根基则是错误。"
    },
    fullParagraphs: {
      introduction: "In materialistic societies, wealth is frequently presented as the surest path to happiness, and people sacrifice leisure, health and relationships in pursuit of higher incomes. I disagree that money is the most important factor in happiness. It is undoubtedly useful in removing hardship, but once basic security is achieved, other elements of life matter considerably more.",
      body1: "The first point is that the effect of income on happiness diminishes sharply after basic needs are satisfied. For people facing hunger, homelessness or untreated illness, additional money genuinely transforms life, which explains why the poorest groups benefit most from rising income. Beyond adequate food, shelter and healthcare, however, surveys across many countries find that further increases in earnings produce only small gains in life satisfaction, because desires expand alongside income and comparisons shift toward wealthier reference groups, and comparisons with wealthier peers can leave even high earners feeling deprived.",
      body2: "Moreover, studies of wellbeing repeatedly identify physical health, stable relationships and a sense of purpose as stronger predictors of happiness than earnings. A long-term study from Harvard, among others, found that the quality of close relationships was the clearest indicator of later wellbeing. Wealth can even undermine happiness when it requires exhausting work, erodes trust through disputes over inheritance, or isolates the rich behind walls and anxiety about status.",
      conclusion: "In conclusion, money is a valuable instrument for security and freedom, but it is not the foundation of happiness. Health, relationships and meaning produce more lasting satisfaction, which is why the wisest use of money is often to protect the very things it cannot itself buy."
    },
        fullParagraphsCN: {
      introduction: "在物质主义社会中，财富常被描绘为通往幸福的最可靠途径，人们为了追求更高收入而牺牲休闲、健康和人际关系。我不同意金钱是幸福最重要的因素这一观点。它在消除苦难方面无疑有用，但一旦基本安全得到保障，生活中的其他要素就重要得多。",
      body1: "第一点是，在基本需求得到满足后，收入对幸福的影响会急剧减弱。对于面临饥饿、无家可归或未治愈疾病的人来说，额外的金钱确实能改变生活，这就解释了为什么最贫困的群体从收入增长中获益最多。然而，在获得充足的食物、住所和医疗保健之后，多个国家的调查发现，收入的进一步增加只会带来生活满意度的小幅提升，因为欲望会随收入一同膨胀，比较对象会转向更富裕的参照群体，而与更富有的同龄人相比，即使高收入者也可能感到匮乏。",
      body2: "此外，关于福祉的研究反复表明，身体健康、稳定的人际关系和目标感是比收入更强的幸福预测因素。哈佛大学的一项长期研究等发现，亲密关系的质量是日后福祉最清晰的指标。财富甚至可能损害幸福——当它需要令人精疲力竭的工作、因遗产纠纷侵蚀信任，或把富人隔绝在高墙和对身份的焦虑之后时。",
      conclusion: "总之，金钱是保障安全和自由的有价值工具，但并非幸福的根基。健康、关系和意义能带来更持久的满足感，这就是为什么最明智地使用金钱的方式，往往是去保护那些金钱本身买不到的东西。"
    },
    vocabulary: [
      "materialistic",
      "diminish",
      "basic needs",
      "shelter",
      "life satisfaction",
      "predictor",
      "sense of purpose",
      "inheritance",
      "reference group",
      "security"
    ]
  },
  {
    id: 15,
    title: "同意/不同意类 - 标准化教育",
    type: "agree/disagree",
    topic: "Standardized testing is the best way to assess student ability. To what extent do you agree or disagree?",
    structure: {
      introduction: "Standardised examinations are used worldwide to measure achievement, but I disagree that they are the best method. They test a narrow range of skills and are best understood as one tool among several.",
      body1: "The main weakness is that such tests mainly measure [范围]. Students trained to memorise answers may score highly while lacking [实际能力].",
      body2: "In addition, performance is distorted by [因素], and cultural bias can make results unfair. A fairer system combines tests with [多元方式].",
      conclusion: "In conclusion, standardised testing offers useful comparability, but claiming it is the best assessment ignores both human ability and classroom reality."
    },
    structureCN: {
      introduction: "标准化考试在世界范围内被用来衡量学业成绩，但我不认为它是最好的方法。它考查的能力范围有限，最好被理解为多种工具之一。",
      body1: "主要弱点是，这类考试主要测量[范围]。受过背诵答题训练的学生可能得高分，却缺乏[实际能力]。",
      body2: "此外，表现还会被[因素]扭曲，文化偏见也可能使结果不公。更公平的制度应把考试与[多元方式]结合。",
      conclusion: "总之，标准化测试提供了有用的可比性，但声称它是最佳评价方式，既忽视了人的能力，也忽视了课堂现实。"
    },
    fullParagraphs: {
      introduction: "Standardised examinations are used around the world to rank students, select university applicants and compare schools. Despite their convenience, I disagree that they represent the best way to assess ability. They measure a narrow set of skills under artificial conditions and should be treated as merely one component of evaluation.",
      body1: "The main weakness is that such tests mainly reward memory, speed and exam technique rather than broad competence. Students drilled in past papers can reproduce formulaic answers to familiar questions yet struggle with open-ended problems that require analysis or creativity. Collaboration, oral communication, leadership and practical experimentation—abilities widely valued by employers—are almost invisible in standardised formats, so a high score can coexist with weak judgement and poor problem solving outside the examination hall.",
      body2: "In addition, performance is distorted by test anxiety, illness on a single day and expensive private coaching, which favours affluent families and turns supposed measurement into training in privilege. Cultural assumptions embedded in questions may further disadvantage students from minority backgrounds. A fairer system combines standardised tests with coursework, portfolios, teacher assessment and project work, providing several windows onto ability rather than one high-pressure event. Finland and other high-performing systems rely heavily on teacher evaluation and sampled monitoring rather than constant standardised examinations, demonstrating that alternatives already work well.",
      conclusion: "In conclusion, standardised testing offers useful comparability and administrative efficiency, but calling it the best way to assess students ignores the full range of human ability and the social biases that results often reflect. The fairest assessment is therefore a diverse and continuous one."
    },
        fullParagraphsCN: {
      introduction: "标准化考试在世界各地被用来给学生排名、选拔大学申请者和比较学校。尽管它们很方便，但我不同意它们代表了评估能力的最佳方式。它们在人为条件下衡量的是一套狭窄的技能，应当只被视为评估的一个组成部分。",
      body1: "主要弱点在于，这类考试主要奖励记忆、速度和应试技巧，而非广泛的能力。被反复训练做历年真题的学生，能够对熟悉的问题给出公式化的答案，却在需要分析或创造力的开放式问题上举步维艰。协作、口头沟通、领导力和实践实验——这些雇主普遍看重的能力——在标准化形式中几乎不可见，因此高分可能与考场之外薄弱的判断力和糟糕的问题解决能力并存。",
      body2: "此外，考试成绩会被考试焦虑、某一天的生病和昂贵的私人辅导所扭曲，这有利于富裕家庭，把本应是测量的东西变成了特权的训练。题目中嵌入的文化假设可能进一步使少数族裔背景的学生处于不利地位。一个更公平的制度应当把标准化考试与课程作业、作品集、教师评估和项目工作相结合，提供多个观察能力的窗口，而非一次高压事件。芬兰等表现优异的教育体系大量依赖教师评估和抽样监测，而非持续的标准化考试，证明了替代方案已经行之有效。",
      conclusion: "总之，标准化考试提供了有用的可比性和行政效率，但称其为评估学生的最佳方式，忽视了人类能力的全部范围以及成绩往往反映的社会偏见。因此，最公平的评估是多样化且持续进行的评估。"
    },
    vocabulary: [
      "standardised",
      "formulaic",
      "open-ended",
      "collaboration",
      "test anxiety",
      "affluent",
      "portfolio",
      "coursework",
      "comparability",
      "bias"
    ]
  },

  {
    id: 16,
    title: "同意/不同意类 - 移民影响",
    type: "agree/disagree",
    topic: "Immigration has a negative impact on the host country. To what extent do you agree or disagree?",
    structure: {
      introduction: "Immigration is sometimes blamed for [问题]. I disagree with this claim: on balance, migrants bring substantial economic and cultural benefits, although integration must be managed.",
      body1: "Economically, migrants [作用1]. They fill vacancies in [行业], pay taxes and start businesses, which is especially valuable in societies with ageing populations.",
      body2: "Culturally and socially, migration [作用2]. Rapid change can create strains such as [问题], but these respond to [对策] rather than to closing borders.",
      conclusion: "In conclusion, immigration is not a net burden but an asset when supported by fair integration policies."
    },
    structureCN: {
      introduction: "移民有时被指责造成[问题]。我不同意：总体而言，移民带来可观的经济和文化益处，尽管必须做好融入管理。",
      body1: "经济上，移民[作用1]。他们填补[行业]空缺、纳税、创办企业，这在人口老龄化社会中尤为宝贵。",
      body2: "文化和社会层面，移民[作用2]。快速变化可能造成[问题]等压力，但这些应靠[对策]化解，而不是关闭边境。",
      conclusion: "总之，在公平的融入政策支持下，移民不是净负担而是财富。"
    },
    fullParagraphs: {
      introduction: "Immigration is sometimes blamed for unemployment, pressure on housing and the erosion of national identity in host countries. I disagree with this claim. While rapid migration can create genuine strains when poorly managed, the overall evidence shows that migrants make host societies economically stronger and culturally richer.",
      body1: "Economically, migrants supply labour that ageing populations cannot provide. They fill vacancies in hospitals, care homes, construction, agriculture and hospitality, work in essential research laboratories, and typically contribute more in taxes over their careers than they receive in benefits. Many also become entrepreneurs: in the United States, for example, immigrants founded a striking share of major technology companies, creating jobs for native-born workers. Rather than draining public finances, migration tends to support pension and healthcare systems whose funding would otherwise shrink.",
      body2: "Culturally, migration renews language, music and cuisine, and students in diverse classrooms learn to cooperate across difference. It is fair to acknowledge that sudden arrivals can pressure local housing, schools and low-wage labour markets, and that communities ignored by government may feel anxious. These strains, however, respond to integration programmes, language training and regional investment, rather than to border closures that create labour shortages and family separation. Cities with long migration histories, from Toronto to Singapore, demonstrate that diverse societies can be both stable and prosperous when newcomers are welcomed into shared institutions.",
      conclusion: "In conclusion, immigration is not a net burden but an asset when supported by fair integration policies and honest public planning. The problems associated with it arise largely from mismanagement, not from migration itself."
    },
        fullParagraphsCN: {
      introduction: "移民有时被指责为接受国的失业、住房压力和国家认同侵蚀的根源。我不同意这一说法。虽然管理不善时，快速移民确实会造成真实的压力，但总体证据表明，移民使接受社会在经济上更强、在文化上更丰富。",
      body1: "在经济上，移民提供了老龄化人口无法提供的劳动力。他们填补了医院、养老院、建筑、农业和酒店业的空缺，在重要的研究实验室工作，而且在整个职业生涯中缴纳的税款通常多于领取的福利。许多人还成为企业家：例如在美国，移民创办了相当大比例的大型科技公司，为本国出生的工人创造了就业机会。移民非但没有耗尽公共财政，反而往往支撑着否则会萎缩的养老金和医疗体系。",
      body2: "在文化上，移民更新了语言、音乐和美食，而多元化教室里的学生学会了跨越差异进行合作。公平地说，突如其来的移民涌入可能给当地住房、学校和低薪劳动力市场带来压力，被政府忽视的社区可能会感到焦虑。然而，这些压力可以通过融合项目、语言培训和区域投资来缓解，而边境关闭只会造成劳动力短缺和家庭分离。从多伦多到新加坡，有着悠久移民历史的城市证明，当新移民被欢迎进入共享机构时，多元社会既稳定又繁荣。",
      conclusion: "总之，当得到公平的融合政策和诚实的公共规划的支持时，移民不是净负担，而是资产。与之相关的问题主要源于管理不善，而非移民本身。"
    },
    vocabulary: [
      "vacancy",
      "ageing population",
      "entrepreneur",
      "public finances",
      "integration",
      "diverse",
      "low-wage",
      "strain",
      "pension",
      "asset"
    ]
  },
  {
    id: 17,
    title: "同意/不同意类 - 科技依赖",
    type: "agree/disagree",
    topic: "Modern society is too dependent on technology. To what extent do you agree or disagree?",
    structure: {
      introduction: "From banking to navigation, daily life now rests on digital systems, and I agree that this dependence has become excessive in important respects.",
      body1: "The first concern is vulnerability. When power grids, payment networks or GPS fail, communities discover how few [备用能力] remain.",
      body2: "The second concern is cognitive. Outsourcing memory, navigation and calculation has weakened [能力], especially among younger users.",
      conclusion: "In conclusion, technology's benefits are real, but a resilient society should preserve basic skills and critical infrastructure."
    },
    structureCN: {
      introduction: "从银行到导航，日常生活如今都依托数字系统，我同意这种依赖在一些重要方面已经过度。",
      body1: "第一个担忧是脆弱性。当电网、支付网络或卫星导航失灵时，社会才发现所剩的[备用能力]寥寥无几。",
      body2: "第二个担忧是认知层面。把记忆、导航和计算外包出去，削弱了[能力]，年轻用户尤其如此。",
      conclusion: "总之，技术的好处真实存在，但有韧性的社会应保留基本技能和关键基础设施。"
    },
    fullParagraphs: {
      introduction: "From banking and medical records to navigation and social contact, modern life rests on interconnected digital systems. I agree that society has become too dependent on this technology. Its benefits are undeniable, yet the scale of dependence creates vulnerabilities and quietly erodes capacities that previous generations took for granted.",
      body1: "The first concern is systemic vulnerability. Payment networks, power grids, hospitals and logistics chains all depend on software and satellite links, so a serious cyberattack or natural disaster can paralyse services within hours. During regional internet failures, shops unable to process cashless payments have turned away customers even for essential goods, and drivers guided exclusively by GPS have followed routes into closed roads. A resilient society needs backup procedures and workers who can operate manually when systems fail. Military and emergency planners already treat such failures as serious threats and increasingly drill personnel in manual, low-technology procedures.",
      body2: "The second concern is cognitive and social. Outsourcing mental arithmetic to calculators, directions to navigation apps and memory to search engines weakens skills through simple disuse, while constant notifications shorten attention spans and discourage unhurried reflection. Children who grow up unable to read paper maps or memorise phone numbers are not necessarily less intelligent, but they lose independence when devices are lost, damaged or out of power.",
      conclusion: "In conclusion, technology's benefits are genuine, but uncritical dependence has made key services fragile and basic human skills less common. A wiser society would protect critical infrastructure and deliberately preserve the abilities that sustain life without a screen."
    },
        fullParagraphsCN: {
      introduction: "从银行和医疗记录到导航和社交联系，现代生活建立在相互连接的数字系统之上。我同意社会已经过度依赖这项技术。它的好处不可否认，但依赖的规模造成了脆弱性，并悄然侵蚀了前几代人视为理所当然的能力。",
      body1: "第一个担忧是系统性脆弱性。支付网络、电网、医院和物流链都依赖软件和卫星链路，因此一次严重的网络攻击或自然灾害可能在数小时内使服务瘫痪。在区域性互联网故障期间，无法处理无现金支付的商店甚至拒绝了购买基本商品的顾客，而完全依赖GPS导航的司机把车开进了封闭的道路。一个有韧性的社会需要后备程序，以及在系统失灵时能够手动操作的工作人员。军事和应急规划者已经把这类故障视为严重威胁，并越来越多地对人员进行手动、低技术程序的演练。",
      body2: "第二个担忧是认知和社会性的。把心算外包给计算器、把方向外包给导航应用、把记忆外包给搜索引擎，会因为简单的弃用而削弱技能，而持续不断的通知会缩短注意力时长，阻碍从容的思考。在成长过程中不会看纸质地图或记电话号码的孩子，未必智力更低，但当设备丢失、损坏或没电时，他们就失去了独立性。",
      conclusion: "总之，技术的好处是真实的，但不加批判的依赖使关键服务变得脆弱，使人类的基本技能变得不那么常见。一个更明智的社会会保护关键基础设施，并有意识地保留那些没有屏幕也能维持生活的能力。"
    },
    vocabulary: [
      "vulnerability",
      "cyberattack",
      "resilient",
      "backup",
      "cognitive",
      "outsource",
      "disuse",
      "attention span",
      "infrastructure",
      "logistics"
    ]
  },
  {
    id: 18,
    title: "同意/不同意类 - 快餐文化",
    type: "agree/disagree",
    topic: "Fast food should be banned in schools. To what extent do you agree or disagree?",
    structure: {
      introduction: "As childhood obesity rises, some argue that schools should stop serving fast food, and I agree with this measure.",
      body1: "The main reason is health. Regular fast food is high in [成分] and linked to [疾病], while eating patterns formed in school tend to persist.",
      body2: "Critics invoke choice and cost, yet schools are responsible for [责任], and nutritious meals can be affordable. Education alone is insufficient.",
      conclusion: "In conclusion, banning fast food in schools protects health and supports concentration without denying families choices outside school."
    },
    structureCN: {
      introduction: "随着儿童肥胖率上升，有人主张学校应停止供应快餐，我同意这一措施。",
      body1: "主要理由是健康。快餐通常富含[成分]，与[疾病]相关，而在校养成的饮食习惯往往会持续下去。",
      body2: "批评者援引选择权和成本，但学校负有[责任]，营养餐也可以价格实惠，仅靠教育并不够。",
      conclusion: "总之，在校禁止快餐既保护健康又有助于专注，并不限制家庭在校外的选择。"
    },
    fullParagraphs: {
      introduction: "As childhood obesity and type 2 diabetes rise sharply in many countries, some argue that schools should stop serving burgers, fried chicken and sugary drinks on their premises. I agree with this measure. Schools shape both the physical health and the habits of children, and allowing fast food within them undermines the very development that education is meant to support.",
      body1: "The main reason is health. Fast food is typically high in saturated fat, salt and refined sugar, and frequent school consumption is associated with weight gain, fatigue and increased risk of diabetes later in life. Nutrition also affects learning: heavy meals and sugary drinks are followed by energy peaks and slumps that reduce concentration in afternoon classes. Because habits repeated during childhood often persist into adulthood, schools are an ideal setting in which to make balanced meals normal rather than exceptional. Even one balanced school meal a day meaningfully improves the diets of children whose families lack time or knowledge to cook.",
      body2: "Critics argue that parents should choose what children eat and that fast-food options are cheaper for tight budgets. Yet children are a captive audience with limited judgement, and schools already accept responsibility for safety in sport and transport; protecting their diet is consistent with this duty. Moreover, meals based on vegetables, grains and legumes can be inexpensive, while nutrition education shapes choices outside school as well.",
      conclusion: "In conclusion, banning fast food in schools protects long-term health, improves classroom concentration and establishes habits that serve children for life. It removes nothing from families, who remain free to make their own choices at weekends and during holidays."
    },
        fullParagraphsCN: {
      introduction: "随着儿童肥胖症和2型糖尿病在许多国家急剧上升，有人主张学校应当停止在校内供应汉堡、炸鸡和含糖饮料。我同意这一措施。学校塑造着儿童的身体健康和习惯，而在校内容许快餐，恰恰破坏了教育本应支持的发展。",
      body1: "主要原因是健康。快餐通常富含饱和脂肪、盐和精制糖，在校内频繁食用与体重增加、疲劳以及日后患糖尿病的风险增加相关。营养也影响学习：油腻的食物和含糖饮料之后会出现能量的高峰和低谷，降低下午课程的专注力。由于童年时期反复形成的习惯往往会延续到成年，学校是让均衡饮食成为常态而非例外的理想场所。即使每天只提供一顿均衡的校餐，也能切实改善那些家庭缺乏时间或烹饪知识的孩子的饮食。",
      body2: "批评者认为，父母应当选择孩子吃什么，而且快餐选项对预算紧张的家庭来说更便宜。然而，儿童是判断力有限的被动受众，而学校已经承担了体育和交通方面的安全责任；保护他们的饮食与这一职责是一致的。此外，以蔬菜、谷物和豆类为主的餐食可以很便宜，而营养教育也能影响校外的选择。",
      conclusion: "总之，在学校禁止快餐能保护长期健康、提高课堂专注力，并建立使儿童终身受益的习惯。它没有剥夺家庭的任何东西——家庭在周末和假期仍然可以自由做出自己的选择。"
    },
    vocabulary: [
      "obesity",
      "saturated fat",
      "refined sugar",
      "diabetes",
      "concentration",
      "legumes",
      "captive audience",
      "nutrition",
      "persist",
      "fatigue"
    ]
  },
  {
    id: 19,
    title: "同意/不同意类 - 远程学习",
    type: "agree/disagree",
    topic: "Online learning is as effective as traditional classroom learning. To what extent do you agree or disagree?",
    structure: {
      introduction: "Remote education expanded rapidly after recent global events, but I disagree that it is generally as effective as classroom learning, because it suits some learners far better than others.",
      body1: "The classroom provides [作用1]. Spontaneous questions, peer pressure to participate and immediate feedback are difficult to reproduce through screens.",
      body2: "Online learning also depends on [条件]. Unequal access to devices and quiet study space widens existing disadvantages.",
      conclusion: "In conclusion, distance learning is valuable and flexible, but blended instruction offers more than replacing schools altogether."
    },
    structureCN: {
      introduction: "远程教育在近年的全球性事件后迅速扩展，但我不同意它总体上与课堂学习同样有效，因为它对不同学习者的适合程度差异很大。",
      body1: "课堂提供[作用1]。即兴提问、参与所带来的同伴动力以及即时反馈，都难以通过屏幕复制。",
      body2: "在线学习还依赖[条件]。设备和安静学习空间的获取不均，放大了原有劣势。",
      conclusion: "总之，远程学习宝贵而灵活，但混合教学比完全取代学校更可取。"
    },
    fullParagraphs: {
      introduction: "Online education expanded dramatically when schools closed during the global pandemic, and recorded lectures, live tutorials and digital assignments have since become common. I disagree that remote learning is generally as effective as traditional classroom instruction. It offers remarkable flexibility, but its success depends heavily on self-discipline, technology and subjects that often benefit from direct human interaction.",
      body1: "The classroom provides structure and interaction that screens struggle to reproduce. Teachers notice confused expressions, pause to re-explain, and draw quiet students into discussion, while spontaneous arguments among classmates often generate the deepest understanding. In practical subjects such as chemistry, music and engineering, laboratory work and supervised practice cannot be replaced by videos, and younger children in particular need the routine and social environment that school provides.",
      body2: "Online learning also depends on resources distributed very unequally. A student with a fast connection, private room and supportive family can thrive, whereas children sharing one phone, living in crowded housing or receiving little adult supervision easily fall behind. During school closures, attendance and attainment dropped most sharply among disadvantaged groups, widening gaps that classroom schools partly compress. Broadcasters and governments responded during closures precisely because they recognised that remote provision alone was leaving too many children behind.",
      conclusion: "In conclusion, distance learning is a valuable option for disciplined adults and a useful supplement in emergencies, but it is not equally effective for everyone. Blended models that combine digital convenience with classroom interaction offer the most promising path, keeping teachers rather than screens at the centre of learning."
    },
        fullParagraphsCN: {
      introduction: "全球疫情期间学校停课时，在线教育急剧扩张，录播课、实时辅导和数字作业自此变得普遍。我不同意远程学习通常与传统课堂教学一样有效的观点。它提供了显著的灵活性，但其成功在很大程度上取决于自律、技术以及那些往往受益于直接人际互动的学科。",
      body1: "课堂提供了屏幕难以复制的结构和互动。教师能注意到困惑的表情、停下来重新解释，并把安静的学生拉入讨论，而同学之间自发的争论往往产生最深刻的理解。在化学、音乐和工程等实践学科中，实验室工作和受监督的练习无法被视频取代，尤其是年幼的儿童需要学校提供的日常规律和社交环境。",
      body2: "在线学习还依赖分配极不均衡的资源。拥有快速网络、独立房间和家庭支持的学生可以茁壮成长，而共用一部手机、居住拥挤或缺少成人监督的孩子很容易掉队。停课期间，弱势群体的出勤率和成绩下降最为明显，扩大了课堂学校本可部分弥合的差距。广播机构和政府在停课期间做出了回应，恰恰是因为他们认识到，仅靠远程教学把太多孩子落在了后面。",
      conclusion: "总之，远程学习对自律的成年人来说是一个有价值的选择，在紧急情况下也是有用的补充，但它并非对每个人都同样有效。把数字便利与课堂互动相结合的混合模式提供了最有前景的路径，让教师而非屏幕处于学习的中心。"
    },
    vocabulary: [
      "self-discipline",
      "spontaneous",
      "feedback",
      "supervised",
      "attainment",
      "disadvantaged",
      "blended",
      "supplement",
      "routine",
      "supervision"
    ]
  },
  {
    id: 20,
    title: "同意/不同意类 - 汽车使用",
    type: "agree/disagree",
    topic: "Private cars should be banned in city centers. To what extent do you agree or disagree?",
    structure: {
      introduction: "Congestion and pollution lead some to propose banning private cars from city centres, and on the whole I agree, provided alternatives are in place.",
      body1: "The main benefit is environmental and public health. Removing cars would cut [污染], noise and collisions while encouraging walking and cycling.",
      body2: "Cars also use space inefficiently. Roads and parking occupy land that could serve [用途]. Exceptions for residents and disabled drivers remain necessary.",
      conclusion: "In conclusion, car-free centres are realistic when public transport is reliable, making cities healthier and more pleasant."
    },
    structureCN: {
      introduction: "拥堵和污染使一些人提议禁止私家车进入市中心，总体上我同意，前提是替代措施到位。",
      body1: "主要好处在环境与公共健康。移除私家车将减少[污染]、噪音和交通事故，并鼓励步行与骑行。",
      body2: "汽车对空间的利用也很低效。道路和停车占用的土地本可服务于[用途]。对居民和残障驾驶者的例外仍有必要。",
      conclusion: "总之，当公共交通可靠时，无车中心是现实可行的，城市会更健康宜人。"
    },
    fullParagraphs: {
      introduction: "Traffic congestion, exhaust fumes and parking shortages make city centres in much of the world stressful and polluted, leading some people to propose banning private cars from central districts. On the whole, I agree with this policy, provided that reliable alternatives and reasonable exceptions are established before it is introduced.",
      body1: "The main benefit is environmental and concerns public health. Removing through-traffic would sharply reduce local emissions of nitrogen oxides and fine particles, which are linked to asthma and cardiovascular disease, as well as cutting the engine noise that stresses residents. Quieter streets encourage walking and cycling, while cities that have pedestrianised central avenues, such as Copenhagen and parts of Madrid, have recorded fewer accidents and more people lingering in public spaces, which benefits shops and cafes. Retailers in pedestrianised zones often report rising turnover once visitors no longer compete with traffic for space and attention.",
      body2: "Cars also use urban space with striking inefficiency. Private vehicles spend most of their time parked, yet roads and parking lots occupy a large share of central land that could provide housing, gardens or cycle lanes. Bans should certainly include exceptions for emergency vehicles, disabled drivers, deliveries at fixed hours and residents with no alternatives, so the policy targets unnecessary commuting rather than mobility itself.",
      conclusion: "In conclusion, car-free city centres are realistic and desirable when reliable public transport and fair exceptions are in place. They reduce pollution, reclaim valuable land and make urban life healthier and more pleasant, producing cities designed for people rather than for vehicles."
    },
        fullParagraphsCN: {
      introduction: "交通拥堵、尾气排放和停车位短缺使世界许多地方的市中心变得紧张而污染严重，这导致一些人提议禁止私家车进入中心区域。总体而言，我同意这一政策，前提是在实施前建立起可靠的替代方案和合理的例外规定。",
      body1: "主要好处在于环境和公共健康。禁止过境车辆将大幅减少当地的氮氧化物和细颗粒物排放——这些与哮喘和心血管疾病相关——同时也会降低令居民紧张的发动机噪音。更安静的街道鼓励步行和骑行，而哥本哈根和马德里部分地区等已将中央大道步行化的城市，记录到了更少的交通事故和更多在公共空间逗留的人，这对商店和咖啡馆有利。步行化区域的零售商常常报告，一旦游客不再与车辆争夺空间和注意力，营业额就会上升。",
      body2: "汽车使用城市空间的效率也低得惊人。私家车大部分时间都停着，而道路和停车场却占据了市中心大量土地，这些土地本可用于住房、花园或自行车道。禁令当然应当包括例外：紧急车辆、残障驾驶者、固定时段的送货以及别无选择的居民，这样政策针对的是不必要的通勤，而非出行本身。",
      conclusion: "总之，当可靠的公共交通和公平的例外规定到位时，无车市中心是现实且可取的。它们减少了污染、回收了宝贵的土地，使城市生活更健康、更宜人，打造出为人而非为车辆设计的城市。"
    },
    vocabulary: [
      "congestion",
      "emissions",
      "nitrogen oxides",
      "fine particles",
      "pedestrianise",
      "through-traffic",
      "mobility",
      "exhaust fumes",
      "cardiovascular",
      "reclaim"
    ]
  },

  {
    id: 21,
    title: "同意/不同意类 - 人工智能威胁",
    type: "agree/disagree",
    topic: "Artificial intelligence will eventually replace human workers. To what extent do you agree or disagree?",
    structure: {
      introduction: "Rapid progress in automation has revived fears of mass unemployment, but I disagree that artificial intelligence will eventually replace human workers outright.",
      body1: "History suggests that machines substitute for tasks rather than whole occupations. The spread of ATMs, for example, [历史例子].",
      body2: "AI also lacks qualities such as [人类特质], and it creates demand for new roles. Transition support, however, is essential.",
      conclusion: "In conclusion, intelligent systems will transform work and displace some roles, but human workers will remain indispensable."
    },
    structureCN: {
      introduction: "自动化的快速进展重新引发了大规模失业的担忧，但我不同意人工智能最终会完全取代人类劳动者。",
      body1: "历史表明，机器替代的是具体任务，而非整个职业。例如自动取款机的普及，[历史例子]。",
      body2: "人工智能也缺乏[人类特质]等品质，并会产生对新岗位的需求。但过渡期的支持必不可少。",
      conclusion: "总之，智能系统会改变工作、取代部分角色，但人类劳动者仍将不可或缺。"
    },
    fullParagraphs: {
      introduction: "Rapid progress in machine learning and robotics has revived fears that intelligent systems will eventually replace human workers on a massive scale. I disagree with this prediction. Artificial intelligence will undoubtedly eliminate particular tasks and reshape industries, but the history of automation suggests that it transforms occupations more often than it erases them.",
      body1: "History suggests that machines substitute for tasks rather than whole professions. When ATMs spread from the 1960s, the number of bank branch employees did not collapse; machines reduced routine cash handling while cheaper branches multiplied and staff shifted toward customer advice. Similarly, word processors did not eliminate secretaries, nor did accounting software end the accountancy profession. AI is likely to absorb repetitive drafting, basic translation and routine analysis, freeing workers for the judgement-heavy parts of the same jobs.",
      body2: "Artificial intelligence also lacks qualities that remain essential: empathy in nursing, accountability in courts, creative risk in research and the trust on which negotiation depends. Moreover, each major technology creates demand for new roles, from data specialists to AI trainers, although the transition can be painful for workers whose skills suddenly lose value, making retraining and social protection indispensable. Historical periods of intense technological change, from electrification to computing, ultimately expanded employment even while destroying particular jobs.",
      conclusion: "In conclusion, intelligent systems will transform employment and displace certain roles, but replacing tasks is not the same as replacing people. With serious investment in education and retraining, human workers are more likely to supervise and collaborate with machines than to be made obsolete by them."
    },
        fullParagraphsCN: {
      introduction: "机器学习和机器人技术的快速进步，重新唤起了人们对智能系统终将大规模取代人类劳动者的担忧。我不同意这一预测。人工智能无疑会消灭某些特定任务并重塑产业，但自动化的历史表明，它更多地是改变职业，而非抹去职业。",
      body1: "历史表明，机器替代的是具体任务，而非整个职业。自动取款机从20世纪60年代开始普及时，银行网点员工的数量并没有崩溃；机器减少了例行的现金处理，而成本降低后网点反而增多，员工转向为客户提供咨询。同样，文字处理软件没有消灭秘书，会计软件也没有终结会计行业。人工智能很可能接手重复性的起草、基础翻译和常规分析，让劳动者腾出精力处理同类工作中更需要判断力的部分。",
      body2: "人工智能还缺乏一些仍然必不可少的品质：护理中的同理心、法庭上的问责、研究中的创造性冒险，以及谈判所依赖的信任。此外，每一项重大技术都会创造对新角色的需求，从数据专家到人工智能培训师，尽管对于技能突然失去价值的劳动者来说，转型可能是痛苦的，这使得再培训和社会保护不可或缺。从电气化到计算，历史上每一次激烈的技术变革时期，最终都在消灭特定岗位的同时扩大了就业。",
      conclusion: "总之，智能系统将改变就业并取代某些角色，但替代任务并不等同于替代人。通过对教育和再培训的认真投资，人类劳动者更有可能监督机器并与之协作，而非被它们淘汰。"
    },
    vocabulary: [
      "automation",
      "task",
      "displace",
      "retraining",
      "empathy",
      "accountability",
      "collaborate",
      "obsolete",
      "routine",
      "transition"
    ]
  },
  {
    id: 22,
    title: "同意/不同意类 - 线上购物",
    type: "agree/disagree",
    topic: "Online shopping will completely replace traditional retail stores. To what extent do you agree or disagree?",
    structure: {
      introduction: "E-commerce has grown at remarkable speed, yet I disagree that it will completely replace physical shops, because retail meets needs beyond the transaction itself.",
      body1: "Many purchases require direct experience: [场景]. Customers value trying products, taking them home immediately and socialising while shopping.",
      body2: "Online retail also faces structural limits, including [物流限制]. The likely model is omnichannel retail, in which shops and websites support each other.",
      conclusion: "In conclusion, e-commerce will keep expanding, but the complete disappearance of physical stores is unlikely and even undesirable."
    },
    structureCN: {
      introduction: "电子商务以惊人速度增长，但我不同意它会完全取代实体商店，因为零售满足的不只是交易本身。",
      body1: "许多购买需要直接体验：[场景]。顾客看重试用试穿、立即带走商品，以及购物时的社交乐趣。",
      body2: "线上零售还面临[物流限制]等结构性局限。未来更可能是线上线下融合的全渠道零售，门店与网站相互支持。",
      conclusion: "总之，电子商务会继续扩张，但实体店完全消失既不可能，也并不可取。"
    },
    fullParagraphs: {
      introduction: "Online shopping has expanded at remarkable speed, with marketplaces delivering everything from groceries to furniture within hours. Nevertheless, I disagree that electronic commerce will completely replace traditional shops. Physical retail satisfies social and sensory needs that digital transactions cannot, and the two channels increasingly operate as complements rather than rivals.",
      body1: "Many purchases genuinely require direct experience. Customers trying on clothes, testing the weight of a camera or smelling perfume need physical products, because photographs and descriptions cannot convey fit, texture or fragrance. People also value taking an item home immediately, asking a knowledgeable shopkeeper for advice and turning a weekend purchase into a social outing with family. Bookshops, hardware stores and fashion retailers have survived partly by offering the experience of browsing itself, which algorithms do not reproduce.",
      body2: "Online retail also faces structural limits. Delivering thousands of individual parcels creates traffic and packaging waste, returning unsuitable goods is inconvenient, and consumers in smaller towns may wait days for delivery. Rather than disappearing, many chains now use shops as showrooms and collection points while their websites handle comparison and ordering, an omnichannel model that combines the strengths of both. Pop-up markets, craft fairs and shopping streets continue to attract large crowds, confirming that physical retail also answers a demand for experience.",
      conclusion: "In conclusion, e-commerce will continue growing and reshaping retail, but the complete disappearance of physical stores is unlikely. Human shopping involves experience, immediacy and sociability, which gives well-designed shops a durable place in the market. The future of retail therefore belongs to both channels working in harmony."
    },
        fullParagraphsCN: {
      introduction: "网上购物以惊人的速度扩张，市场平台能在几小时内送达从食品杂货到家具的一切商品。然而，我不同意电子商务将完全取代传统商店的观点。实体零售满足了数字交易无法满足的社交和感官需求，两种渠道越来越多地作为互补而非竞争对手运作。",
      body1: "许多购买确实需要直接体验。试穿衣服、测试相机的重量或闻香水的顾客需要实物，因为照片和描述无法传达合身度、质地或香味。人们还看重立即把商品带回家、向知识渊博的店主寻求建议，以及把周末购物变成与家人的社交出游。书店、五金店和时尚零售商之所以能生存下来，部分原因在于它们提供了浏览本身的体验，而这是算法无法复制的。",
      body2: "网络零售也面临结构性限制。递送数千个单独包裹会造成交通和包装浪费，退回不合适的商品很不方便，而小城镇的消费者可能要等上几天才能收到货。许多连锁店非但没有消失，反而把商店用作展示厅和自提点，而由网站处理比较和订购，这种全渠道模式结合了两者的优势。快闪市场、手工艺品集市和商业街继续吸引着大量人群，证实了实体零售也回应了人们对体验的需求。",
      conclusion: "总之，电子商务将继续增长并重塑零售，但实体店完全消失是不太可能的。人类的购物涉及体验、即时性和社交性，这使设计良好的商店在市场中拥有持久的位置。因此，零售业的未来属于两种渠道的和谐共存。"
    },
    vocabulary: [
      "e-commerce",
      "sensory",
      "browsing",
      "algorithm",
      "parcel",
      "packaging waste",
      "omnichannel",
      "showroom",
      "immediacy",
      "complement"
    ]
  },
  {
    id: 23,
    title: "同意/不同意类 - 气候变化",
    type: "agree/disagree",
    topic: "Individuals can do little to address climate change. To what extent do you agree or disagree?",
    structure: {
      introduction: "Because emissions come mainly from large industries, some conclude that individual action is futile. I disagree: citizens remain central to both market and political change.",
      body1: "When enough individuals alter consumption, markets respond. The growth of [例子] shows how everyday choices reshape entire industries.",
      body2: "Individuals also act politically as voters, protesters and community organisers. Systemic change rarely begins without such pressure, although governments must ultimately legislate.",
      conclusion: "In conclusion, personal action alone is insufficient, but it is the foundation on which policy and market transformation are built."
    },
    structureCN: {
      introduction: "由于排放主要来自大型工业，一些人断定个人行动无济于事。我不同意：公民始终是市场变化和政治变化的核心。",
      body1: "当足够多的个人改变消费，市场就会回应。[例子]的增长说明日常选择如何重塑整个行业。",
      body2: "个人还以选民、抗议者和社区组织者的身份进行政治参与。系统性变革很少不源于这种压力，尽管最终立法仍须依靠政府。",
      conclusion: "总之，仅靠个人行动并不足够，但它是政策与市场转型得以建立的基础。"
    },
    fullParagraphs: {
      introduction: "Because greenhouse gas emissions arise largely from power stations, factories and transport networks, some people conclude that ordinary individuals can do little to address climate change. I disagree with this view. While isolated personal gestures are plainly insufficient, citizens acting together drive both consumer markets and the political decisions without which systemic change will never occur.",
      body1: "When enough individuals alter their consumption, markets respond on a large scale. The rapid growth of plant-based products, electric vehicles and rooftop solar panels followed early adopters whose purchases signalled demand, prompting manufacturers and investors to move capital away from older technologies. Household choices over insulation, meat consumption and frequent flying, multiplied across millions of homes, materially affect emissions curves, and reputational pressure has pushed companies to publish climate targets they would otherwise have ignored. Insurance and finance industries have likewise begun withdrawing capital from high-emission projects as public expectations shift.",
      body2: "Individuals also act politically. Vectors of change such as elections, school climate strikes and shareholder campaigns depend on citizens willing to organise, and the strongest emissions policies in Europe emerged only after sustained public pressure. Governments must ultimately legislate carbon pricing, subsidies and infrastructure, but politicians rarely impose costs on voters who see no value in the action demanded.",
      conclusion: "In conclusion, personal action alone cannot stabilise the climate, but describing it as futile misunderstands how markets and democracies move. Individual choices are the foundation on which collective pressure, and eventually policy, are built. Every serious climate strategy must therefore begin with citizens themselves."
    },
        fullParagraphsCN: {
      introduction: "由于温室气体排放主要来自发电厂、工厂和交通网络，一些人得出结论：普通个人对应对气候变化几乎无能为力。我不同意这一观点。虽然孤立的个人姿态显然是不够的，但公民的集体行动既能推动消费市场，也能推动没有它就永远不会发生的系统性变革所依赖的政治决策。",
      body1: "当足够多的个体改变消费方式时，市场会大规模响应。植物基产品、电动汽车和屋顶太阳能板的快速增长，正是早期采用者的购买发出了需求信号，促使制造商和投资者把资本从旧技术中转移出来。家庭在隔热、肉类消费和频繁乘飞机方面的选择，乘以数百万个家庭，会切实影响排放曲线，而声誉压力已迫使企业公布它们原本会忽视的气候目标。随着公众期望的转变，保险和金融业也开始从高排放项目中撤出资本。",
      body2: "个人还会采取政治行动。选举、学校气候罢课和股东运动等变革渠道，依赖于愿意组织起来的公民，而欧洲最有力的排放政策都是在持续的公众压力之后才出台的。政府最终必须通过立法来制定碳定价、补贴和基础设施，但政客很少会对那些看不出所要求行动价值的选民施加成本。",
      conclusion: "总之，仅凭个人行动无法稳定气候，但把它说成徒劳无益，是误解了市场和民主运作的方式。个人选择是集体压力、乃至最终政策得以建立的基础。因此，每一项严肃的气候战略都必须从公民自身开始。"
    },
    vocabulary: [
      "emissions",
      "futile",
      "early adopters",
      "insulation",
      "carbon pricing",
      "sustained",
      "shareholder",
      "systemic",
      "collective",
      "transform"
    ]
  },
  {
    id: 24,
    title: "同意/不同意类 - 外语学习",
    type: "agree/disagree",
    topic: "Learning a second language is essential in today's world. To what extent do you agree or disagree?",
    structure: {
      introduction: "Translation software is increasingly capable, yet I still believe that learning a second language is essential in today's interconnected world.",
      body1: "Economically, multilingualism opens opportunities in [领域]. Even when translation tools exist, clients and employers value direct communication.",
      body2: "Language learning also produces cognitive and cultural benefits: [好处]. It grants access to how other peoples think, rather than merely what they say.",
      conclusion: "In conclusion, while machines assist communication, the personal and professional advantages of mastering another language remain indispensable."
    },
    structureCN: {
      introduction: "翻译软件日益强大，但我仍然认为，在当今相互联结的世界里学习第二语言必不可少。",
      body1: "经济上，掌握多种语言为[领域]打开机会。即使翻译工具存在，客户和雇主仍看重直接沟通。",
      body2: "语言学习还带来认知和文化上的益处：[好处]。它让人理解其他民族如何思考，而不仅仅是他们在说什么。",
      conclusion: "总之，尽管机器辅助交流，掌握另一门语言在个人与职业上的优势仍不可替代。"
    },
    fullParagraphs: {
      introduction: "Translation applications and real-time interpreting devices are increasingly capable, leading some people to question whether learning a foreign language is still necessary. I strongly believe that it remains essential in today's interconnected world. Machines can render words, but mastering another language offers economic advantages, cognitive benefits and cultural understanding that software cannot replace.",
      body1: "Economically, multilingualism opens doors that monolingual workers find closed. International trade, tourism, diplomacy, aviation and academic research all reward employees who can negotiate directly, read documents without mediation and build trust across cultures. Translation tools help with routine inquiries, yet employers continue to value language graduates for nuanced communication, and small-business owners who speak a customer's language gain a tangible commercial advantage that machines cannot fully deliver.",
      body2: "Language learning also produces well-documented cognitive and cultural benefits. Studies associate bilingualism with stronger executive control, better multitasking and a delayed onset of dementia in older age. More importantly, a language is a window onto another way of life: learners discover untranslatable concepts, humour and historical references that reveal how other peoples reason, fostering the empathy on which international cooperation depends. Negotiators routinely observe that parties who understand each other's language build trust more quickly and reach agreements that interpreters alone rarely facilitate.",
      conclusion: "In conclusion, while technology assists cross-language communication, the professional opportunities, cognitive resilience and cultural insight gained from mastering another language remain indispensable. Language learning is therefore not a relic of the pre-digital era but an essential modern competence; few modern skills open as many doors or reward learners for as long as another language can."
    },
        fullParagraphsCN: {
      introduction: "翻译应用和实时口译设备的能力越来越强，这导致一些人质疑学习外语是否仍然有必要。我坚信，在当今互联互通的世界中，它仍然必不可少。机器可以转换词语，但掌握另一门语言能带来软件无法替代的经济优势、认知益处和文化理解。",
      body1: "在经济上，会多种语言打开了只会一种语言的劳动者无法企及的大门。国际贸易、旅游、外交、航空和学术研究，都奖励那些能够直接谈判、无需中介即可阅读文件并跨文化建立信任的员工。翻译工具有助于处理日常询问，但雇主仍然看重语言专业毕业生的细致沟通，而会说客户语言的小企业主能获得机器无法完全提供的切实商业优势。",
      body2: "语言学习还带来了有据可查的认知和文化益处。研究表明，双语能力与更强的执行控制、更好的多任务处理能力以及老年痴呆症发病延迟相关。更重要的是，语言是通往另一种生活方式的窗口：学习者会发现无法翻译的概念、幽默和历史典故，这些揭示了其他民族的思维方式，培养了国际合作所依赖的同理心。谈判者经常观察到，理解彼此语言的各方能更快地建立信任，并达成仅凭口译员很少能促成的协议。",
      conclusion: "总之，虽然技术辅助跨语言交流，但掌握另一门语言所获得的职业机会、认知韧性和文化洞察力仍然不可或缺。因此，语言学习不是前数字时代的遗物，而是一项必不可少的现代能力；很少有现代技能能像另一门语言那样打开如此多的大门，或给予学习者如此长久的回报。"
    },
    vocabulary: [
      "multilingualism",
      "monolingual",
      "render",
      "nuanced",
      "bilingualism",
      "executive control",
      "onset",
      "dementia",
      "empathy",
      "competence"
    ]
  },
  {
    id: 25,
    title: "同意/不同意类 - 游戏影响",
    type: "agree/disagree",
    topic: "Video games have a negative impact on children's development. To what extent do you agree or disagree?",
    structure: {
      introduction: "Video games are frequently blamed for harming children, but I disagree that they have an inherently negative impact. Problems arise mainly from content, excess and lack of guidance.",
      body1: "Well-designed games can support development by [益处1]. Players practise planning, resource management and rapid decision making, often in cooperation with others.",
      body2: "It is true that excessive play and certain violent titles cause [问题], yet these are risks of misuse. Parental limits and age ratings address them more effectively than condemnation.",
      conclusion: "In conclusion, games are a medium like books or films. With moderation and guidance, children can benefit considerably rather than suffer harm."
    },
    structureCN: {
      introduction: "电子游戏常被指责对儿童有害，但我不同意它本身具有负面影响。问题主要源于内容、过度游玩和缺乏引导。",
      body1: "设计良好的游戏能够通过[益处1]支持发展。玩家练习规划、资源管理和快速决策，而且常常需要与他人合作。",
      body2: "诚然，过度游玩和某些暴力作品会造成[问题]，但这些属于滥用风险。父母设定界限和执行年龄分级，比一味谴责更能有效应对。",
      conclusion: "总之，游戏与书籍、电影一样是一种媒介。适度并有引导，孩子便能受益匪浅，而非受害。"
    },
    fullParagraphs: {
      introduction: "Video games are frequently blamed for poor school results, aggression and sedentary lifestyles among children. I disagree that games have an inherently negative impact on development. Like films or books, games vary enormously in quality, and when chosen carefully and played in moderation they can support cognitive, social and emotional growth.",
      body1: "Well-designed games can support development in measurable ways. Strategy and simulation titles require players to plan, allocate limited resources, test hypotheses and adjust quickly when plans fail, exercising the same problem-solving muscles that mathematics does. Cooperative online games demand teamwork, communication and leadership, while educational titles can teach languages, history and programming through immediate feedback that classrooms struggle to match. Research reviews have found modest but genuine benefits for attention, spatial reasoning and reaction time.",
      body2: "It is true that excessive play causes sleep loss, neglected homework and reduced physical activity, and that a small number of titles combine realistic violence with reward systems that desensitise players. These, however, are risks of misuse rather than features of the medium itself, just as addiction to junk food does not make eating inherently harmful. Parental time limits, age ratings and shared discussion of game content address the dangers without depriving children of genuine benefits. The most successful families treat games as a shared activity, which naturally limits excess and turns play into conversation.",
      conclusion: "In conclusion, video games are neither poison nor universal educator. Their impact depends overwhelmingly on content, duration and adult guidance, and children who play thoughtfully designed games in balance with study, exercise and social life can gain rather than lose."
    },
        fullParagraphsCN: {
      introduction: "电子游戏常被指责为导致儿童学习成绩差、攻击性强和久坐生活方式的原因。我不同意游戏对发展有内在负面影响的观点。与电影或书籍一样，游戏的质量千差万别，只要精心选择并适度游玩，它们就能支持认知、社交和情感成长。",
      body1: "设计良好的游戏能以可衡量的方式支持发展。策略和模拟类游戏要求玩家规划、分配有限资源、检验假设并在计划失败时迅速调整，锻炼了与数学相同的解决问题的能力。合作类网络游戏需要团队合作、沟通和领导力，而教育类游戏可以通过即时反馈教授语言、历史和编程，这是课堂难以匹敌的。研究综述发现，游戏对注意力、空间推理和反应时间有适度但真实的益处。",
      body2: "诚然，过度游戏会导致睡眠不足、作业被忽视和体力活动减少，少数游戏还把逼真的暴力与奖励系统结合在一起，使玩家脱敏。然而，这些是滥用的风险，而非媒介本身的特征，正如对垃圾食品上瘾并不意味着吃东西本身有害。家长的时间限制、年龄分级和对游戏内容的共同讨论，能在不剥夺儿童真正益处的情况下应对这些危险。最成功的家庭把游戏当作一种共享活动，这自然限制了过度，并把玩耍变成了对话。",
      conclusion: "总之，电子游戏既不是毒药，也不是万能的教育者。它们的影响在极大程度上取决于内容、时长和成人指导，而在学习、运动和社交生活之间平衡地游玩精心设计的游戏的儿童，会有所收获而非损失。"
    },
    vocabulary: [
      "sedentary",
      "moderation",
      "allocate",
      "hypotheses",
      "spatial reasoning",
      "desensitise",
      "age ratings",
      "cognitive",
      "medium",
      "teamwork"
    ]
  },
  {
    id: 26,
    title: "双边讨论类 - 传统与现代教育",
    type: "discuss both views",
    topic: "Some people prefer traditional education, while others prefer modern methods such as online learning. Discuss both views and give your opinion.",
    structure: {
      introduction: "Opinions are divided over [topic]. While some people favour [view1], others believe that [view2]. This essay will discuss both standpoints and explain why I support [my position].",
      body1: "On the one hand, proponents of [view1] point to [main reason]. For example, [specific example]. This demonstrates that [implication].",
      body2: "On the other hand, supporters of [view2] argue that [main reason]. A good illustration is [specific example], which shows [implication].",
      conclusion: "In my view, [my opinion]. Although [concession], I believe that [justification]. Overall, [closing thought]."
    },
    structureCN: {
      introduction: "关于[话题]人们意见不一。一些人支持[观点1]，另一些人认为[观点2]。本文将讨论两种立场，并说明我为什么支持[我的立场]。",
      body1: "一方面，[观点1]的支持者指出[主要原因]。例如，[具体例子]。这表明[推论]。",
      body2: "另一方面，[观点2]的支持者认为[主要原因]。一个很好的例证是[具体例子]，这说明[推论]。",
      conclusion: "在我看来，[我的观点]。尽管[让步]，但我认为[理由]。总的来说，[收尾思考]。"
    },
    fullParagraphs: {
      introduction: "The rapid expansion of digital technology has divided opinion on how education should be delivered. While some people remain loyal to traditional classroom teaching, others argue that online learning represents the future. This essay will examine both sides of the argument before explaining why I believe a blended model is the most effective.",
      body1: "On the one hand, supporters of traditional education highlight the irreplaceable value of face-to-face interaction. In a physical classroom, teachers can read students' expressions, adjust their pace instantly and provide immediate feedback, which is difficult to replicate through a screen. Moreover, schools cultivate discipline and social skills, because children learn to cooperate, resolve conflicts and follow routines. A 2022 OECD study on collaborative problem-solving, for example, found that students who regularly took part in in-person group work outperformed their peers in teamwork assessments. For young learners especially, the structured environment of a real classroom provides a stability that self-directed online study often lacks.",
      body2: "On the other hand, advocates of modern methods emphasise flexibility and access. Online platforms allow learners to study at their own pace, revisit recorded lectures and choose courses offered by top universities at a fraction of the traditional cost. This is particularly transformative for people in remote regions: a student in rural Yunnan, for instance, can now attend live classes from Tsinghua University without leaving home. During the COVID-19 pandemic, platforms such as Zoom and DingTalk enabled hundreds of millions of students worldwide to continue their education uninterrupted, proving that digital delivery can be scaled rapidly when needed.",
      conclusion: "In my opinion, neither extreme is ideal; a blended approach that combines classroom interaction with digital resources offers the best of both worlds. Traditional schooling remains essential for developing social and emotional skills, while online tools personalise revision and widen access to knowledge. Overall, the future of education lies not in choosing one method over the other, but in integrating them intelligently."
    },
        fullParagraphsCN: {
      introduction: "数字技术的迅速扩张，使人们对教育应如何实施产生了分歧。一些人仍然忠于传统的课堂教学，另一些人则主张在线学习代表着未来。本文将探讨双方观点，然后说明为什么我认为混合模式是最有效的。",
      body1: "一方面，传统教育的支持者强调面对面互动不可替代的价值。在实体课堂中，教师能读懂学生的表情、即时调整节奏并提供即时反馈，这是通过屏幕难以复制的。此外，学校培养纪律和社交技能，因为孩子们学会合作、解决冲突和遵守日常规范。例如，经合组织2022年一项关于协作解决问题的研究发现，经常参与面对面小组活动的学生在团队合作评估中表现优于同龄人。尤其对年幼的学习者来说，真实课堂的结构化环境提供了自主在线学习往往缺乏的稳定性。",
      body2: "另一方面，现代方法的倡导者强调灵活性和可及性。在线平台让学习者可以按自己的节奏学习、重看录播课，并以传统成本的零头选择顶尖大学开设的课程。这对偏远地区的人尤其具有变革意义：例如，云南农村的学生如今可以足不出户参加清华大学的直播课。新冠疫情期间，Zoom和钉钉等平台使全球数亿学生能够不间断地继续学业，证明了数字教学在需要时可以迅速规模化。",
      conclusion: "在我看来，两个极端都不理想；将课堂互动与数字资源相结合的混合方法，能兼得两者之所长。传统学校对于培养社交和情感技能仍然至关重要，而在线工具能个性化复习并拓宽知识获取渠道。总之，教育的未来不在于在两种方法中选一，而在于明智地将它们整合起来。"
    },
    vocabulary: [
      "blended learning",
      "face-to-face interaction",
      "immediate feedback",
      "self-paced",
      "accessibility",
      "digital platform",
      "structured environment",
      "collaborative skills",
      "recorded lectures",
      "personalise"
    ]
  },
  {
    id: 27,
    title: "双边讨论类 - 城市与乡村生活",
    type: "discuss both views",
    topic: "Some people prefer to live in cities, while others prefer rural areas. Discuss both views and give your opinion.",
    structure: {
      introduction: "Few decisions shape daily life as much as [topic]. Some people thrive in [view1 setting], whereas others feel at home in [view2 setting]. This essay will explore both preferences and argue that [my opinion].",
      body1: "Supporters of [view1] typically cite [reason]. Take [example] as an example: [detail]. Clearly, [implication].",
      body2: "Those who prefer [view2], however, value [reason]. For instance, [example]. This suggests that [implication].",
      conclusion: "Personally, I believe [my opinion], because [reason]. Ultimately, [summary]."
    },
    structureCN: {
      introduction: "很少有决定像[话题]那样深刻地影响日常生活。一些人在[观点1的环境]中如鱼得水，而另一些人则在[观点2的环境]中感到自在。本文将探讨两种偏好，并论证[我的观点]。",
      body1: "[观点1]的支持者通常提到[原因]。以[例子]为例：[细节]。显然，[推论]。",
      body2: "然而，偏爱[观点2]的人看重[原因]。例如，[例子]。这表明[推论]。",
      conclusion: "我个人认为[我的观点]，因为[原因]。归根结底，[总结]。"
    },
    fullParagraphs: {
      introduction: "Where people choose to live has a profound impact on their quality of life. Some are drawn to the excitement and opportunity of big cities, whereas others prefer the tranquillity of the countryside. This essay will consider the appeal of each lifestyle and argue that the best choice depends largely on one's stage of life.",
      body1: "Those who favour urban living usually point to career prospects and public services. Large cities concentrate jobs in finance, technology and the creative industries, offering salaries and promotion paths that small towns simply cannot match. In addition, residents enjoy first-class hospitals, universities and cultural venues within a short commute. Shanghai illustrates this well: its metro system, international schools and specialist hospitals attract ambitious professionals from across China, and surveys repeatedly show that young graduates rate big cities higher for personal development and networking.",
      body2: "Those who prefer rural areas, however, value benefits that money cannot easily buy. Housing is far cheaper, the air is cleaner, and tight-knit communities provide a strong sense of belonging that anonymous city blocks rarely offer. The slower pace of life reduces stress and leaves more time for family. Since the pandemic, remote working has made this option realistic for many: in the United Kingdom, for instance, thousands of employees relocated to villages in Wales and Scotland, reporting higher life satisfaction despite lower pay. Such moves also help revive local economies that had been declining for decades.",
      conclusion: "In my opinion, city life suits people in the early and middle stages of their careers, while the countryside is ideal for raising children or enjoying retirement. The two environments serve different needs rather than competing absolutely. Ultimately, modern technology increasingly allows individuals to combine urban opportunity with rural peace, and that flexibility should be welcomed."
    },
        fullParagraphsCN: {
      introduction: "人们选择住在哪里，对其生活质量有着深远影响。一些人被大城市的刺激和机会吸引，另一些人则偏爱乡村的宁静。本文将考虑每种生活方式的吸引力，并论证最佳选择在很大程度上取决于一个人所处的人生阶段。",
      body1: "支持城市生活的人通常指向职业前景和公共服务。大城市集中了金融、科技和创意产业的工作，提供小城镇根本无法比拟的薪资和晋升路径。此外，居民在短途通勤范围内就能享受一流的医院、大学和文化场所。上海就是很好的例证：其地铁系统、国际学校和专科医院吸引了来自全中国的雄心勃勃的专业人士，调查反复显示，年轻毕业生在个人发展和人脉方面给大城市打了更高的分。",
      body2: "然而，偏爱乡村的人看重的是金钱难以买到的好处。住房便宜得多，空气更清洁，紧密的社区提供了匿名城市街区很少能给予的强烈归属感。较慢的生活节奏减轻了压力，留出了更多陪伴家人的时间。疫情以来，远程办公使这一选择对许多人变得现实：例如在英国，数千名员工搬到了威尔士和苏格兰的村庄，尽管收入较低，却报告了更高的生活满意度。这类迁移也有助于振兴那些已经衰退了几十年的地方经济。",
      conclusion: "在我看来，城市生活适合职业生涯早期和中期的人，而乡村则是抚养孩子或享受退休生活的理想之地。两种环境服务于不同的需求，而非绝对竞争。归根结底，现代技术越来越允许个人把城市的机会与乡村的宁静结合起来，这种灵活性应当受到欢迎。"
    },
    vocabulary: [
      "career prospects",
      "public services",
      "tranquillity",
      "tight-knit community",
      "pace of life",
      "remote working",
      "life satisfaction",
      "quality of life",
      "commute",
      "networking"
    ]
  },
  {
    id: 28,
    title: "双边讨论类 - 面对面与线上沟通",
    type: "discuss both views",
    topic: "Some people think face-to-face communication is better than online communication, while others disagree. Discuss both views and give your opinion.",
    structure: {
      introduction: "The rise of [technology/topic] has sparked debate about [issue]. Some claim that [view1], while others maintain that [view2]. This essay will assess both claims before presenting my own view.",
      body1: "On the one hand, it is argued that [view1] because [reason]. Evidence for this can be seen in [example], where [detail].",
      body2: "On the other hand, there are strong grounds for [view2]. In particular, [reason], as illustrated by [example].",
      conclusion: "Having considered both sides, I would argue that [my opinion]. This is because [reason]. In conclusion, [summary]."
    },
    structureCN: {
      introduction: "[技术/话题]的兴起引发了关于[问题]的争论。一些人声称[观点1]，而另一些人坚持认为[观点2]。本文将评估两种说法，然后提出我自己的观点。",
      body1: "一方面，有人认为[观点1]，因为[原因]。[例子]可以证明这一点，其中[细节]。",
      body2: "另一方面，[观点2]也有充分依据。特别是[原因]，正如[例子]所示。",
      conclusion: "权衡双方之后，我认为[我的观点]。这是因为[原因]。总之，[总结]。"
    },
    fullParagraphs: {
      introduction: "Communication technology has transformed the way people interact, prompting debate about whether meeting in person still matters. Some claim that face-to-face contact is inherently superior, while others maintain that online communication is the more practical choice. This essay will assess both claims before presenting my own view.",
      body1: "On the one hand, it is argued that face-to-face communication is better because non-verbal signals carry a large share of meaning. Facial expressions, gestures and tone of voice reveal emotions that are easily lost or distorted on a screen, and meeting in the flesh builds trust far more quickly. Evidence for this can be seen in high-stakes negotiations and medical consultations, which still tend to happen in person: research frequently cited from UCLA psychology suggests that body language accounts for a substantial portion of how a message is received, so physical presence clearly deepens mutual understanding.",
      body2: "On the other hand, there are strong grounds for preferring online channels in many situations. Video calls connect colleagues across continents in seconds, eliminating travel costs and saving enormous amounts of time. During the pandemic, platforms such as Zoom and Tencent Meeting allowed businesses, schools and even court hearings to function despite lockdowns, proving the resilience of digital interaction. Moreover, online messages create automatic written records, which improves accountability in workplaces. For routine updates and long-distance relationships, logging on is simply more efficient than travelling.",
      conclusion: "Having considered both sides, I would argue that the context should determine the channel: sensitive conversations, first meetings and conflict resolution deserve face-to-face contact, whereas routine coordination is best handled online. This is because each medium compensates for the other's weaknesses. In conclusion, technology should complement rather than replace genuine human presence, and using each tool wisely produces the strongest relationships."
    },
        fullParagraphsCN: {
      introduction: "通信技术改变了人们互动的方式，引发了关于面对面见面是否仍然重要的争论。一些人声称面对面交流本质上更优越，另一些人则坚持认为在线沟通是更实际的选择。本文将评估这两种说法，然后提出我自己的观点。",
      body1: "一方面，有人认为面对面交流更好，因为非语言信号承载了很大一部分意义。面部表情、手势和语调能揭示情绪，而这些在屏幕上很容易丢失或被扭曲，亲自见面也能更快地建立信任。这方面的证据可见于高风险谈判和医疗咨询——它们仍然倾向于当面进行：加州大学洛杉矶分校心理学常被引用的研究表明，肢体语言在信息接收方式中占相当大的比例，因此身体在场显然能加深相互理解。",
      body2: "另一方面，在许多情况下，有充分理由偏爱在线渠道。视频通话能在几秒钟内连接各大洲的同事，消除了差旅成本并节省了大量时间。疫情期间，Zoom和腾讯会议等平台使企业、学校甚至法庭听证会在封锁期间仍能运转，证明了数字互动的韧性。此外，在线消息会自动生成书面记录，提高了工作场所的问责性。对于日常更新和远距离关系来说，登录比出行更高效。",
      conclusion: "在考虑了双方观点后，我认为渠道应由情境决定：敏感的对话、初次见面和解决冲突值得面对面接触，而日常协调最好在线上处理。这是因为每种媒介都弥补了对方的弱点。总之，技术应当补充而非取代真实的人类在场，明智地使用每种工具才能建立最牢固的关系。"
    },
    vocabulary: [
      "non-verbal cues",
      "build trust",
      "video conferencing",
      "accountability",
      "physical presence",
      "conflict resolution",
      "travel costs",
      "digital channel",
      "mutual understanding"
    ]
  },
  {
    id: 29,
    title: "双边讨论类 - 自学与课堂学习",
    type: "discuss both views",
    topic: "Some people believe self-study is more effective, while others think classroom learning is better. Discuss both views and give your opinion.",
    structure: {
      introduction: "[Topic] divides learners into two camps: those who champion [view1] and those who defend [view2]. This essay will look at both sides and explain why I believe [my opinion].",
      body1: "On the one hand, [view1] offers clear advantages, chiefly [reason]. A striking example is [example], which proves that [implication].",
      body2: "On the other hand, [view2] provides benefits that [view1] cannot match, above all [reason]. For example, [example] demonstrates [implication].",
      conclusion: "In my view, [my opinion]. While [concession], the evidence suggests [justification]. Overall, [closing]."
    },
    structureCN: {
      introduction: "[话题]将学习者分为两大阵营：拥护[观点1]的人和捍卫[观点2]的人。本文将审视双方，并解释为什么我认为[我的观点]。",
      body1: "一方面，[观点1]有明显优势，主要是[原因]。一个突出的例子是[例子]，它证明[推论]。",
      body2: "另一方面，[观点2]提供了[观点1]无法比拟的好处，最重要的是[原因]。例如，[例子]表明[推论]。",
      conclusion: "在我看来，[我的观点]。虽然[让步]，但证据表明[理由]。总的来说，[收尾]。"
    },
    fullParagraphs: {
      introduction: "Education is no longer confined to the classroom, and learners increasingly ask whether studying alone is as effective as formal lessons. Some champion the freedom of self-study, while others defend the structure of classroom teaching. This essay will look at both sides and explain why I believe the two methods work best in sequence.",
      body1: "On the one hand, self-study offers clear advantages, chiefly complete control over pace and content. Motivated individuals can skip material they already know, linger on difficult concepts and choose resources that suit their learning style. A striking example is the software industry, where countless developers have built successful careers by teaching themselves through online documentation and open-source projects, without any formal computer science training. Free platforms such as Khan Academy and Coursera have made high-quality material available to anyone with an internet connection, dramatically lowering the barrier to independent learning.",
      body2: "On the other hand, classroom learning provides benefits that self-study cannot match, above all expert feedback and social motivation. A skilled teacher identifies misconceptions immediately and adjusts explanations accordingly, while classmates create healthy competition and emotional support. Language learning demonstrates this clearly: students who attend regular speaking classes typically achieve fluency faster than those studying alone, because teachers correct pronunciation errors that learners cannot hear themselves. Moreover, fixed schedules and deadlines combat procrastination, which defeats many independent learners before they reach their goals.",
      conclusion: "In my view, the two approaches are complementary rather than rivals. Classroom instruction is indispensable for building solid foundations, particularly in the early stages, while self-study becomes increasingly valuable as learners mature and specialise. While freedom motivates some students, the evidence suggests that most people need guidance first. Overall, the most successful learners combine structured lessons with disciplined independent practice, drawing strength from both traditions."
    },
        fullParagraphsCN: {
      introduction: "教育不再局限于课堂，学习者越来越多地问：自学是否与正式课程一样有效。一些人推崇自学的自由，另一些人则捍卫课堂教学的结构性。本文将考察双方观点，并解释为什么我认为这两种方法最好按顺序使用。",
      body1: "一方面，自学有明显的优势，主要是对节奏和内容的完全控制。有动力的人可以跳过已掌握的内容、在困难概念上多花时间，并选择适合自己学习风格的资源。一个突出的例子是软件行业，无数开发者通过在线文档和开源项目自学成才，建立了成功的职业生涯，而没有接受过正式的计算机科学培训。可汗学院和Coursera等免费平台让任何有互联网连接的人都能获得高质量的学习材料，极大地降低了独立学习的门槛。",
      body2: "另一方面，课堂学习提供了自学无法比拟的好处，最重要的是专家反馈和社交动力。熟练的教师能立即识别误解并相应调整解释，而同学则创造了良性竞争和情感支持。语言学习清楚地证明了这一点：定期参加口语课的学生通常比独自学习的人更快达到流利，因为教师能纠正学习者自己听不出的发音错误。此外，固定的日程和截止日期能对抗拖延，而拖延在许多独立学习者达到目标之前就击败了他们。",
      conclusion: "在我看来，这两种方法是互补的，而非竞争对手。课堂教学对于打下坚实基础不可或缺，尤其是在早期阶段，而随着学习者成熟和专业化，自学变得越来越有价值。虽然自由能激励一些学生，但证据表明大多数人首先需要指导。总之，最成功的学习者把结构化课程与有纪律的独立实践结合起来，从两种传统中汲取力量。"
    },
    vocabulary: [
      "self-directed",
      "autonomy",
      "structured curriculum",
      "expert feedback",
      "procrastination",
      "open-source",
      "fluency",
      "misconception",
      "complementary",
      "learning style"
    ]
  },
  {
    id: 30,
    title: "双边讨论类 - 储蓄与消费",
    type: "discuss both views",
    topic: "Some people prefer to save money, while others enjoy spending it. Discuss both views and give your opinion.",
    structure: {
      introduction: "People differ sharply over [topic]. For some, [view1] is the only sensible course, whereas others insist that [view2]. This essay will discuss both philosophies before concluding that [my opinion].",
      body1: "Those who advocate [view1] do so mainly because [reason]. The experience of [example] shows that [implication].",
      body2: "Conversely, supporters of [view2] contend that [reason]. Consider [example]: [detail]. This highlights [implication].",
      conclusion: "On balance, I side with the view that [my opinion], since [reason]. Ultimately, [summary]."
    },
    structureCN: {
      introduction: "人们在[话题]上分歧很大。对一些人来说，[观点1]是唯一明智的做法，而另一些人坚持认为[观点2]。本文将讨论两种观念，最后得出[我的观点]的结论。",
      body1: "倡导[观点1]的人主要因为[原因]。[例子]的经历表明[推论]。",
      body2: "相反，[观点2]的支持者主张[原因]。以[例子]为例：[细节]。这凸显了[推论]。",
      conclusion: "权衡之下，我支持[我的观点]，因为[原因]。归根结底，[总结]。"
    },
    fullParagraphs: {
      introduction: "Money management divides people into savers and spenders, each convinced their philosophy is wiser. For some, saving every spare penny is the only sensible course, whereas others insist that money is meant to be enjoyed in the present. This essay will discuss both philosophies before concluding that a deliberate balance is the soundest approach.",
      body1: "Those who advocate saving do so mainly because it guarantees security and long-term freedom. An emergency fund cushions families against job losses, medical bills and other shocks, while steady saving enables major goals such as buying a home or funding a child's education. The experience of the COVID-19 pandemic shows that households with savings weathered lockdowns far better than those living from pay cheque to pay cheque, and countries with high household savings rates, such as Singapore, recovered with less social pain. Saving also buys independence, allowing people to change careers or retire earlier without fear.",
      body2: "Conversely, supporters of spending contend that money is a tool for living well now, not a trophy to be hoarded. Travel, hobbies and shared experiences create memories and personal growth that no bank balance can provide, and pleasures postponed indefinitely may never return. Consider the wider economy as well: household consumption accounts for the majority of GDP in most developed nations, so excessive caution during downturns can actually deepen recessions. This highlights the fact that someone who saves obsessively but never invests in health, education or relationships may end up wealthy in money yet poor in life.",
      conclusion: "On balance, I side with the view that extreme positions in either direction are unwise. A sensible rule is to save a fixed proportion of income first, then spend the remainder without guilt on things that genuinely improve life. Ultimately, financial wellbeing comes from balancing future security against present happiness rather than sacrificing one for the other."
    },
        fullParagraphsCN: {
      introduction: "理财把人们分为储蓄者和消费者，每一方都坚信自己的哲学更明智。对一些人来说，省下每一分多余的钱是唯一明智的做法，而另一些人则坚持认为钱就是用来当下享受的。本文将讨论这两种哲学，然后得出结论：有意的平衡才是最稳妥的做法。",
      body1: "倡导储蓄的人主要是因为储蓄能保障安全和长期自由。应急基金能缓冲家庭因失业、医疗账单和其他冲击造成的影响，而持续储蓄能实现购房或资助子女教育等重大目标。新冠疫情的经历表明，有储蓄的家庭比月光族更能安然度过封锁期，而像新加坡这样家庭储蓄率高的国家，经济复苏时社会阵痛也更小。储蓄还能换来独立自主，让人无惧地转换职业或提前退休。",
      body2: "相反，支持消费的人认为，金钱是当下好好生活的工具，而非囤积的战利品。旅行、爱好和共享经历能创造银行存款无法提供的回忆和个人成长，而无限期推迟的快乐可能永远不会再回来。也从更广泛的经济来看：家庭消费占大多数发达国家国内生产总值的大部分，因此经济低迷期间的过度谨慎实际上可能加深衰退。这凸显了一个事实：一个痴迷于储蓄却从不投资健康、教育或人际关系的人，最终可能在金钱上富有，在生活上却贫乏。",
      conclusion: "总的来说，我倾向于认为任何方向上的极端立场都是不明智的。一个合理的规则是，先把收入的固定比例存起来，然后问心无愧地把剩余的钱花在真正能改善生活的事情上。归根结底，财务福祉来自于在未来安全与当下幸福之间取得平衡，而非为了一方牺牲另一方。"
    },
    vocabulary: [
      "emergency fund",
      "household savings rate",
      "consumption",
      "financial security",
      "pay cheque to pay cheque",
      "long-term goals",
      "recession",
      "mindful spending",
      "independence"
    ]
  },
  {
    id: 31,
    title: "双边讨论类 - 公共与私人医疗",
    type: "discuss both views",
    topic: "Some people prefer public healthcare, while others choose private healthcare. Discuss both views and give your opinion.",
    structure: {
      introduction: "Healthcare systems around the world reflect a fundamental disagreement: [view1] versus [view2]. This essay will examine both models and argue that [my opinion].",
      body1: "Advocates of [view1] emphasise [reason]. For example, [example], where [detail]. This proves that [implication].",
      body2: "Supporters of [view2], by contrast, stress [reason]. In [example], [detail], which demonstrates [implication].",
      conclusion: "In my opinion, [my opinion]. The ideal system would [suggestion]. Overall, [summary]."
    },
    structureCN: {
      introduction: "世界各国的医疗体系反映了一个根本分歧：[观点1]与[观点2]之争。本文将审视两种模式，并论证[我的观点]。",
      body1: "[观点1]的倡导者强调[原因]。例如，在[例子]，[细节]。这证明[推论]。",
      body2: "相比之下，[观点2]的支持者强调[原因]。在[例子]，[细节]，这表明[推论]。",
      conclusion: "在我看来，[我的观点]。理想的体系应当[建议]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "Healthcare systems around the world reflect a fundamental disagreement: should medical care be a universal public service or a privately purchased product? Supporters of each model defend it passionately. This essay will examine both approaches and argue that a strong public foundation, supplemented by private options, serves society best.",
      body1: "Advocates of public healthcare emphasise equality and social solidarity. When treatment is funded through taxation, nobody is denied care because of poverty, and preventive services keep the whole population healthier. For example, in the United Kingdom's National Health Service, patients receive treatment free at the point of use, which means a cleaner and a company director are treated according to medical need rather than wealth. This proves that public systems protect the vulnerable and reduce the fear of medical bankruptcy that haunts millions in countries without universal coverage.",
      body2: "Supporters of private healthcare, by contrast, stress efficiency and choice. Competition between providers drives shorter waiting times, newer equipment and more personalised service. In Singapore's hybrid system, for instance, citizens can top up public provision with private insurance, and the country consistently achieves world-leading health outcomes while spending a smaller share of GDP than most Western nations. This demonstrates that market incentives, when regulated properly, can raise standards without abandoning universal protection.",
      conclusion: "In my opinion, healthcare is too important to be left entirely to the market, yet pure state monopoly often breeds inefficiency. The ideal system would guarantee comprehensive public coverage for essential treatment while allowing private providers to offer faster or more comfortable alternatives. Overall, the goal should be a safety net that no one falls through, combined with the innovation that healthy competition encourages."
    },
        fullParagraphsCN: {
      introduction: "世界各地的医疗体系反映了一个根本性分歧：医疗应当是普遍的公共服务，还是私人购买的产品？每种模式的支持者都为之激烈辩护。本文将考察两种做法，并论证以强大的公共基础为主体、辅以私人选择，最能服务社会。",
      body1: "公共医疗的倡导者强调平等和社会团结。当治疗通过税收资助时，没有人会因为贫困而被拒绝治疗，预防性服务也让全体人口更健康。例如，在英国国家医疗服务体系中，患者在使用时免费接受治疗，这意味着清洁工和公司董事是根据医疗需要而非财富来接受治疗的。这证明公共体系能保护弱势群体，并减少了困扰着没有全民覆盖的国家中数百万人的医疗破产恐惧。",
      body2: "相反，私人医疗的支持者强调效率和选择。服务提供者之间的竞争会缩短等待时间、更新设备并提供更个性化的服务。例如在新加坡的混合体系中，公民可以用私人保险补充公共保障，该国在取得世界领先的健康成果的同时，国内生产总值中医疗支出的占比却低于大多数西方国家。这表明，市场激励在受到适当监管时，能够在不放弃全民保护的前提下提高标准。",
      conclusion: "在我看来，医疗太重要了，不能完全交给市场，但纯粹的国家垄断往往滋生低效。理想的体系应当保证基本治疗的全面公共覆盖，同时允许私人提供者提供更快或更舒适的替代方案。总之，目标应当是一张没有人会漏网的安全网，加上良性竞争所鼓励的创新。"
    },
    vocabulary: [
      "universal coverage",
      "medical bankruptcy",
      "preventive care",
      "waiting times",
      "hybrid system",
      "market incentives",
      "safety net",
      "social solidarity",
      "taxation-funded"
    ]
  },
  {
    id: 32,
    title: "双边讨论类 - 团队与个人工作",
    type: "discuss both views",
    topic: "Some people prefer working in teams, while others prefer working alone. Discuss both views and give your opinion.",
    structure: {
      introduction: "Whether it is better to [view1] or [view2] is a question that divides opinion in workplaces and classrooms alike. This essay will consider both sides and argue that [my opinion].",
      body1: "On the one hand, [view1] offers [advantage]. For instance, [example]. Therefore, [implication].",
      body2: "On the other hand, [view2] brings [advantage]. A clear example is [example], where [detail]. Hence, [implication].",
      conclusion: "In my view, [my opinion] because [reason]. Overall, [summary]."
    },
    structureCN: {
      introduction: "[观点1]好还是[观点2]好，这一问题在职场和课堂中都引发分歧。本文将考量双方，并论证[我的观点]。",
      body1: "一方面，[观点1]带来[优势]。例如，[例子]。因此，[推论]。",
      body2: "另一方面，[观点2]带来[优势]。一个明显的例子是[例子]，其中[细节]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]，因为[原因]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "Whether it is better to work in a team or to work alone is a question that divides opinion in workplaces and classrooms alike. Each style has devoted followers. This essay will consider both sides and argue that the nature of the task should determine the approach.",
      body1: "On the one hand, teamwork offers the power of combined expertise. Complex projects such as designing an aircraft or developing a smartphone application require engineers, designers, marketers and testers to coordinate, because no individual possesses all the necessary skills. For instance, the success of the Apollo space programme depended on the collaboration of around 400,000 people, and modern research shows that diverse groups consistently outperform lone individuals on complex problem-solving tasks. Therefore, for ambitious multi-disciplinary goals, working together is not optional but essential.",
      body2: "On the other hand, working alone brings focus and personal accountability. A clear example is writing: novelists, researchers and programmers frequently produce their best work in solitude, free from meetings and interruptions. Deep, concentrated effort allows ideas to mature without compromise, and individuals receive full credit or blame for the results, which sharpens responsibility. Studies on productivity also find that open-plan offices, designed for collaboration, often reduce output because of constant distraction. Hence, for tasks demanding sustained concentration, solitude remains superior.",
      conclusion: "In my view, neither mode is universally better because different tasks reward different structures: brainstorming and execution benefit from teamwork, while analysis and creative drafting flourish in solitude. Overall, the most effective professionals move fluidly between the two, collaborating to set direction and then withdrawing to do deep work. Employers should design environments that allow both."
    },
        fullParagraphsCN: {
      introduction: "团队合作好还是独自工作好，这个问题在工作场所和课堂上都存在分歧。每种方式都有忠实的追随者。本文将考虑双方观点，并论证任务的性质应当决定方法。",
      body1: "一方面，团队合作提供了综合专业知识的力量。设计飞机或开发智能手机应用等复杂项目，需要工程师、设计师、营销人员和测试人员协作，因为没有任何个人掌握全部必要技能。例如，阿波罗太空计划的成功依靠了约40万人的协作，现代研究也表明，多元化团队在处理复杂的解决问题任务时始终优于单打独斗的个人。因此，对于雄心勃勃的多学科目标，合作不是可选项，而是必需品。",
      body2: "另一方面，独自工作带来专注和个人责任感。一个明显的例子是写作：小说家、研究人员和程序员往往在独处时产出最好的作品，免受会议和干扰。深入、集中的努力能让想法不受妥协地成熟，个人则为结果获得全部的赞誉或指责，这强化了责任感。关于生产力的研究还发现，为协作设计的开放式办公室，往往因为持续的干扰而降低产出。因此，对于需要持续专注的任务，独处仍然更优越。",
      conclusion: "在我看来，两种模式都不普遍更优，因为不同的任务需要不同的结构：头脑风暴和执行受益于团队合作，而分析和创造性起草则在独处中蓬勃发展。总之，最有效的专业人士能在两者之间流畅切换——协作以确定方向，然后抽身进行深度工作。雇主应当设计出允许两者并存的环境。"
    },
    vocabulary: [
      "collaboration",
      "combined expertise",
      "deep work",
      "accountability",
      "brainstorming",
      "open-plan office",
      "productivity",
      "multi-disciplinary",
      "solitude"
    ]
  },
  {
    id: 33,
    title: "双边讨论类 - 阅读与看电视",
    type: "discuss both views",
    topic: "Some people think reading is more beneficial than watching television, while others disagree. Discuss both views and give your opinion.",
    structure: {
      introduction: "In an age of screens, the old-fashioned habit of [view1 activity] competes with [view2 activity] for our attention. Some insist [view1], whereas others argue [view2]. This essay will weigh both sides and give my opinion.",
      body1: "Proponents of [view1] argue that [reason]. Research shows that [evidence]. Moreover, [additional point].",
      body2: "However, defenders of [view2] counter that [reason]. For example, [example]. This means [implication].",
      conclusion: "In my opinion, [my opinion]. [Justification]. Overall, [summary]."
    },
    structureCN: {
      introduction: "在屏幕时代，[观点1的活动]这一老派习惯与[观点2的活动]争夺着我们的注意力。一些人坚持[观点1]，另一些人则认为[观点2]。本文将权衡双方并给出我的看法。",
      body1: "[观点1]的支持者认为[原因]。研究表明[证据]。此外，[补充论点]。",
      body2: "然而，[观点2]的捍卫者反驳说[原因]。例如，[例子]。这意味着[推论]。",
      conclusion: "在我看来，[我的观点]。[理由]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "In an age of screens, the old-fashioned habit of reading competes with television for our attention. Some insist that books develop the mind in ways screens never can, whereas others argue that television is an equally valuable window on the world. This essay will weigh both sides and give my opinion.",
      body1: "Proponents of reading argue that it actively engages the brain rather than merely entertaining it. Decoding text forces readers to imagine characters, follow complex arguments and build vocabulary, which strengthens concentration and critical thinking. Research shows that children who read for pleasure score significantly higher not only in literacy but also in mathematics, according to long-term studies by the Institute of Education in London. Moreover, deep reading has been linked to greater empathy, because inhabiting a fictional character's mind trains us to understand real people.",
      body2: "However, defenders of television counter that visual media can educate powerfully and accessibly. For example, documentaries such as the BBC's Planet Earth series bring science and nature to millions who would never open a textbook, combining expert narration with footage that took years to capture. Television also unites societies around shared events, from moon landings to World Cup finals, creating common cultural reference points. This means the medium's value depends on content quality rather than the technology itself, and dismissing all television ignores its genuine educational reach.",
      conclusion: "In my opinion, reading remains the superior habit for developing imagination, language and sustained attention, though high-quality documentaries deserve a place in a balanced media diet. The passive nature of most television makes it easy to consume without thinking, whereas books demand active participation. Overall, choosing to read daily while watching selectively offers the richest intellectual life."
    },
        fullParagraphsCN: {
      introduction: "在屏幕时代，阅读这一古老习惯与电视争夺着我们的注意力。一些人坚称书籍能以屏幕永远无法做到的方式塑造心智，另一些人则认为电视是一扇同样有价值的了解世界的窗口。本文将权衡双方并给出我的观点。",
      body1: "阅读的支持者认为，它积极调动大脑，而非仅仅娱乐。解码文字迫使读者想象人物、跟随复杂论证并积累词汇，这能加强专注力和批判性思维。研究表明，根据伦敦教育学院的长期研究，为乐趣而阅读的儿童不仅在读写能力上得分显著更高，在数学上也是如此。此外，深度阅读与更强的同理心相关，因为进入虚构人物的内心能训练我们理解真实的人。",
      body2: "然而，电视的捍卫者反驳说，视觉媒体能强有力且可及地进行教育。例如，BBC《行星地球》系列等纪录片把科学和自然带给了数百万永远不会翻开教科书的人，把专家解说与花了数年才拍摄到的画面结合在一起。电视还能让社会围绕共同事件团结起来——从登月到世界杯决赛——创造共同的文化参照点。这意味着这种媒介的价值取决于内容质量而非技术本身，而否定所有电视就忽视了它真正的教育覆盖面。",
      conclusion: "在我看来，阅读仍然是培养想象力、语言和持续注意力的更优越习惯，尽管高质量的纪录片在平衡的媒体饮食中应有一席之地。大多数电视的被动性使人们容易不加思考地消费，而书籍则要求主动参与。总之，每天选择阅读、同时有选择地观看，能提供最丰富的精神生活。"
    },
    vocabulary: [
      "critical thinking",
      "empathy",
      "documentary",
      "passive consumption",
      "literacy",
      "sustained attention",
      "imagination",
      "educational content",
      "media diet"
    ]
  },
  {
    id: 34,
    title: "双边讨论类 - 旅行方式",
    type: "discuss both views",
    topic: "Some people prefer package tours, while others prefer independent travel. Discuss both views and give your opinion.",
    structure: {
      introduction: "When planning a trip, travellers face a basic choice: [view1] or [view2]. This essay will discuss the appeal of each option before arguing that [my opinion].",
      body1: "Fans of [view1] point to [reason]. Take [example]: [detail]. As a result, [implication].",
      body2: "Independent-minded travellers, by contrast, argue that [reason]. For instance, [example]. Consequently, [implication].",
      conclusion: "In my view, [my opinion]. [Reason]. Ultimately, [summary]."
    },
    structureCN: {
      introduction: "规划旅行时，旅行者面临一个基本选择：[观点1]还是[观点2]。本文将讨论两种选择各自的吸引力，然后论证[我的观点]。",
      body1: "[观点1]的爱好者指出[原因]。以[例子]为例：[细节]。因此，[推论]。",
      body2: "相比之下，崇尚独立的旅行者认为[原因]。例如，[例子]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。[原因]。归根结底，[总结]。"
    },
    fullParagraphs: {
      introduction: "When planning a trip, travellers face a basic choice: join a package tour or travel independently. Both styles attract millions of loyal followers every year. This essay will discuss the appeal of each option before arguing that the right choice depends on the traveller's experience and destination.",
      body1: "Fans of package tours point to convenience and security. Everything from flights and hotels to museum tickets is arranged in advance, which removes the stress of planning and the risk of costly mistakes in unfamiliar countries. Take elderly Chinese tourists visiting Europe: language barriers and complex rail systems make independent travel daunting, so organised groups with Mandarin-speaking guides allow them to see the Louvre and the Swiss Alps comfortably and safely. As a result, package tours open the world to people who would otherwise never leave home, and bulk booking keeps prices surprisingly low.",
      body2: "Independent travellers, by contrast, argue that freedom is the essence of travel. Without a fixed itinerary, they can linger in a Lisbon café, accept a local's dinner invitation or change plans when they discover a hidden village. For instance, backpackers through Southeast Asia routinely report that their most memorable experiences — a festival stumbled upon in Chiang Mai, a family homestay in Vietnam — happened precisely because no schedule forced them onward. Consequently, independent travel fosters genuine cultural exchange and personal growth that a forty-minute coach stop cannot replicate.",
      conclusion: "In my view, both styles have their place: first-time visitors to challenging destinations gain confidence from organised tours, while experienced travellers thrive on spontaneity. Many people now blend the two, booking transport and hotels but exploring freely each day. Ultimately, the goal of travel is meaningful experience, and whichever style delivers it for a given person is the right one."
    },
        fullParagraphsCN: {
      introduction: "计划旅行时，旅行者面临一个基本选择：参加旅行团还是独立旅行。两种方式每年都吸引数百万忠实追随者。本文将讨论每种选择的吸引力，然后论证正确的选择取决于旅行者的经验和目的地。",
      body1: "旅行团的爱好者指向便利性和安全感。从机票、酒店到博物馆门票，一切都提前安排好了，这消除了规划的压力和在陌生国家犯代价高昂错误的风险。以游览欧洲的中国老年游客为例：语言障碍和复杂的铁路系统让独立旅行令人却步，因此有普通话导游的有组织团队让他们能舒适安全地参观卢浮宫和瑞士阿尔卑斯山。因此，旅行团向原本不会走出家门的人打开了世界的大门，而批量预订也使价格低得惊人。",
      body2: "相反，独立旅行者认为自由是旅行的本质。没有固定的行程，他们可以在里斯本的咖啡馆流连、接受当地人的晚餐邀请，或在发现一个隐秘村庄时改变计划。例如，穿越东南亚的背包客常报告说，他们最难忘的经历——在清迈偶然遇到的一个节日、在越南的一个家庭寄宿——恰恰是因为没有日程逼迫他们前行才发生的。因此，独立旅行能促进真正的文化交流和个人成长，这是四十分钟的大巴停留无法复制的。",
      conclusion: "在我看来，两种方式各有其位置：初次前往具有挑战性目的地的游客能从有组织的旅行中获得信心，而经验丰富的旅行者则在随性中茁壮成长。许多人现在把两者结合起来——预订交通和酒店，但每天自由探索。归根结底，旅行的目标是有意义的体验，而对某个人而言能实现这一点的方式就是正确的方式。"
    },
    vocabulary: [
      "itinerary",
      "package tour",
      "backpacker",
      "cultural exchange",
      "spontaneity",
      "language barrier",
      "hidden gem",
      "bulk booking",
      "homestay"
    ]
  },
  {
    id: 35,
    title: "双边讨论类 - 传统文化与现代文化",
    type: "discuss both views",
    topic: "Some people think we should preserve traditional culture, while others think we should embrace modern culture. Discuss both views and give your opinion.",
    structure: {
      introduction: "Globalisation has sharpened an old dilemma: [view1] or [view2]? This essay will examine both positions and explain why I believe [my opinion].",
      body1: "Those who defend [view1] warn that [reason]. When [example], [detail]. Therefore, [implication].",
      body2: "Those who welcome [view2] reply that [reason]. In [example], for instance, [detail]. Hence, [implication].",
      conclusion: "In my opinion, [my opinion]. [Explanation]. Overall, [summary]."
    },
    structureCN: {
      introduction: "全球化使一个古老的困境更加尖锐：[观点1]还是[观点2]？本文将审视两种立场，并解释为什么我认为[我的观点]。",
      body1: "捍卫[观点1]的人警告说[原因]。当[例子]时，[细节]。因此，[推论]。",
      body2: "欢迎[观点2]的人回应说[原因]。例如，在[例子]，[细节]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。[解释]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "Globalisation has sharpened an old dilemma: should societies preserve their traditional culture or embrace modern culture? The debate touches everything from language and food to architecture and values. This essay will examine both positions and explain why I believe preservation and renewal must go hand in hand.",
      body1: "Those who defend tradition warn that losing cultural heritage means losing identity itself. Languages, festivals and crafts carry the accumulated wisdom of generations, and once extinct they cannot be recreated. When the last fluent speaker of an indigenous language dies, as happens roughly every two weeks somewhere in the world, an entire way of understanding nature and community vanishes with them. Japan offers a positive counter-example: its careful preservation of tea ceremonies, temples and kimono-making alongside hypermodern cities gives citizens a rootedness that purely futuristic societies lack. Therefore, safeguarding tradition anchors people in a disorienting age.",
      body2: "Those who welcome modern culture reply that traditions are living things that must evolve or become museum pieces. Clinging to the past can entrench harmful customs, from gender inequality to resistance to scientific progress. In South Korea, for instance, the deliberate fusion of traditional music with pop production created K-pop, a global industry worth billions that spreads Korean culture further than preservation alone ever could. Hence, embracing modernity does not erase identity but translates it into forms new generations actually want to inherit.",
      conclusion: "In my opinion, the choice is falsely framed. Cultures thrive when they preserve their core values while adapting their expression to contemporary life, as both Japan and Korea demonstrate. Societies should fund museums, language programmes and traditional crafts while also encouraging creative reinterpretation. Overall, a culture that only looks backwards becomes a relic, while one that only looks forwards becomes rootless; the healthiest societies manage to do both."
    },
        fullParagraphsCN: {
      introduction: "全球化加剧了一个古老的困境：社会应当保护传统文化还是拥抱现代文化？这场辩论触及从语言、饮食到建筑和价值观的方方面面。本文将考察两种立场，并解释为什么我认为保护与更新必须携手并进。",
      body1: "捍卫传统的人警告说，失去文化遗产意味着失去身份本身。语言、节日和工艺承载着几代人积累的智慧，一旦灭绝就无法重建。当一种原住民语言的最后一位流利使用者去世时——世界上大约每两周就会发生一次——一整套理解自然和社群的方式也随之消失。日本提供了一个积极的反例：它在超现代城市之外，精心保护茶道、寺庙和服制作，这让公民拥有了纯粹未来主义社会所缺乏的根基感。因此，在一个令人迷失方向的时代，守护传统能让人们扎根。",
      body2: "欢迎现代文化的人回应说，传统是活的东西，必须进化，否则就会变成博物馆里的展品。固守过去可能固化有害的习俗，从性别不平等到抵制科学进步。例如在韩国，有意地把传统音乐与流行制作相融合，创造了K-pop——一个价值数十亿美元的全球产业，比单纯的保护更广泛地传播了韩国文化。因此，拥抱现代性并不会抹去身份，而是把它转化为新一代真正愿意继承的形式。",
      conclusion: "在我看来，这个选择的提出方式本身就是错误的。文化在保护核心价值观的同时，把表达方式适应当代生活时才会蓬勃发展，日本和韩国都证明了这一点。社会应当资助博物馆、语言项目和传统工艺，同时也鼓励创造性的重新诠释。总之，只向后看的文化会变成遗物，只向前看的文化会失去根基；最健康的社会能两者兼顾。"
    },
    vocabulary: [
      "cultural heritage",
      "identity",
      "indigenous language",
      "fusion",
      "reinterpretation",
      "rootedness",
      "globalisation",
      "living tradition",
      "museum piece"
    ]
  },
  {
    id: 36,
    title: "双边讨论类 - 政府投资方向",
    type: "discuss both views",
    topic: "Some people think governments should invest in arts, while others think they should invest in infrastructure. Discuss both views and give your opinion.",
    structure: {
      introduction: "Government budgets face a constant tug-of-war between [view1] and [view2]. This essay will examine both priorities and explain why I believe [my opinion].",
      body1: "Advocates of [view1] argue that [reason]. Consider [example], where [detail]. This demonstrates [implication].",
      body2: "Conversely, champions of [view2] point out that [reason]. In [example], for instance, [detail]. As a result, [implication].",
      conclusion: "In my view, [my opinion]. [Justification]. Ultimately, [summary]."
    },
    structureCN: {
      introduction: "政府预算在[观点1]和[观点2]之间不断拉锯。本文将审视两种优先事项，并解释为什么我认为[我的观点]。",
      body1: "[观点1]的倡导者认为[原因]。以[例子]为例，其中[细节]。这表明[推论]。",
      body2: "相反，[观点2]的拥护者指出[原因]。例如，在[例子]，[细节]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。[理由]。归根结底，[总结]。"
    },
    fullParagraphs: {
      introduction: "Government budgets face a constant tug-of-war between investment in the arts and investment in infrastructure such as roads, hospitals and schools. Each side claims its priority delivers greater public benefit. This essay will examine both positions and explain why I believe infrastructure must come first.",
      body1: "Advocates of arts funding argue that culture enriches society beyond simple economic returns. Museums, theatres and music festivals enhance citizens' quality of life, attract tourism and preserve national identity. Consider the Bilbao Guggenheim Museum in Spain: when it opened in 1997, the building's daring architecture by Frank Gehry transformed a declining industrial city into a major cultural destination, increasing hotel bookings and local employment. This demonstrates that strategic arts investment can regenerate entire regions and give communities pride.",
      body2: "Conversely, champions of infrastructure point out that basic services are prerequisites for any civilised life. Roads and public transport determine whether people can reach work, hospitals save lives, and clean water prevents disease. In many developing countries, for instance, millions of schoolchildren still walk for hours each day on unsafe paths, limiting attendance and academic progress; building even modest rural roads would transform educational and economic outcomes. As a result, infrastructure spending benefits the greatest number of people in the most direct way, and its absence traps communities in poverty.",
      conclusion: "In my view, a government with limited funds should prioritise essential infrastructure, because health, safety and education are the foundations upon which cultural life later thrives. Arts funding is desirable once those foundations are secure, but not before. Ultimately, the most responsible policy is to ensure that every citizen has reliable roads and clean water, then to enrich life with the arts that those improvements make possible."
    },
        fullParagraphsCN: {
      introduction: "政府预算在艺术投资与道路、医院、学校等基础设施投资之间始终面临拉锯。每一方都声称自己的优先事项能带来更大的公共利益。本文将考察两种立场，并解释为什么我认为基础设施必须放在首位。",
      body1: "艺术资助的倡导者认为，文化丰富社会的方式超越了简单的经济回报。博物馆、剧院和音乐节能提升公民的生活质量、吸引旅游业并保存国家认同。以西班牙毕尔巴鄂古根海姆博物馆为例：1997年开放时，弗兰克·盖里大胆的建筑设计把一座衰落的工业城市变成了重要的文化目的地，增加了酒店预订和当地就业。这表明，战略性的艺术投资能振兴整个地区，并给予社区自豪感。",
      body2: "相反，基础设施的拥护者指出，基本服务是任何文明生活的前提。道路和公共交通决定人们能否上班，医院拯救生命，清洁用水预防疾病。例如在许多发展中国家，数百万学童每天仍要在不安全的道路上步行数小时，这限制了出勤率和学业进步；哪怕修建最简陋的农村公路也能改变教育和经济成果。因此，基础设施支出以最直接的方式惠及最多的人，而它的缺失会让社区困在贫困之中。",
      conclusion: "在我看来，资金有限的政府应当优先考虑基本基础设施，因为健康、安全和教育是文化生活日后得以繁荣的基础。一旦这些基础稳固，艺术资助就是可取的，但不能在此之前。归根结底，最负责任的政策是确保每个公民都有可靠的道路和清洁用水，然后用这些改善所促成的艺术来丰富生活。"
    },
    vocabulary: [
      "regenerate",
      "prerequisite",
      "tourism revenue",
      "national identity",
      "infrastructure",
      "public benefit",
      "transform",
      "declining",
      "foundation"
    ]
  },
  {
    id: 37,
    title: "双边讨论类 - 家庭教育与学校教育",
    type: "discuss both views",
    topic: "Some people think family education is more important, while others think school education is more important. Discuss both views and give your opinion.",
    structure: {
      introduction: "The question of whether [view1] or [view2] is more important has occupied thinkers for centuries. This essay will explore both perspectives before explaining why I believe [my opinion].",
      body1: "On the one hand, those who emphasise [view1] note that [reason]. A clear example is [example], where [detail]. This suggests [implication].",
      body2: "On the other hand, defenders of [view2] argue that [reason]. Take [example], for instance: [detail]. Hence, [implication].",
      conclusion: "In my opinion, [my opinion]. While [concession], [justification]. Overall, [summary]."
    },
    structureCN: {
      introduction: "[观点1]和[观点2]哪个更重要的问题已困扰思想家数百年。本文将探讨两种视角，然后解释为什么我认为[我的观点]。",
      body1: "一方面，强调[观点1]的人指出[原因]。一个明显的例子是[例子]，其中[细节]。这表明[推论]。",
      body2: "另一方面，捍卫[观点2]的人认为[原因]。例如，以[例子]为例：[细节]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。虽然[让步]，但[理由]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "The question of whether family education or school education is more important has occupied thinkers for centuries. Each environment shapes young minds differently. This essay will explore both perspectives before explaining why I believe the family lays the foundation, while the school builds the structure.",
      body1: "On the one hand, those who emphasise family education note that values, habits and emotional security take root long before a child enters a classroom. A clear example is early language acquisition: children learn vocabulary, pronunciation and social rules mainly from parents and siblings during their first three years. Moreover, families transmit cultural identity and moral standards, from respect for elders to attitudes toward honesty. This suggests that without a supportive home environment, even the best school can achieve little, because children who arrive hungry, anxious or neglected cannot concentrate on lessons.",
      body2: "On the other hand, defenders of school education argue that formal institutions introduce children to specialised knowledge, diverse perspectives and democratic interaction. Take Finland's education system, for instance: teachers there are highly trained, curricula emphasise critical thinking over rote memorisation, and students consistently rank among the world's top performers in mathematics and reading. Hence, schools offer resources, expert guidance and peer networks that most families cannot replicate at home, and they expose children to worldviews wider than their own neighbourhood.",
      conclusion: "In my opinion, neither sphere can replace the other. Family education instils the love of learning, character and self-esteem that make formal schooling possible, while schools then teach the academic skills and social maturity needed for adult life. While some parents are exceptionally gifted educators, most children benefit enormously from professional teachers and diverse classmates. Overall, the greatest educational success comes when families and schools work in partnership, each reinforcing what the other provides."
    },
        fullParagraphsCN: {
      introduction: "家庭教育和学校教育哪个更重要的问题，困扰了思想家几个世纪。每个环境都以不同的方式塑造着年轻的心灵。本文将探讨两种观点，然后解释为什么我认为家庭奠定基础，而学校搭建结构。",
      body1: "一方面，强调家庭教育的人指出，价值观、习惯和情感安全感早在孩子进入课堂之前就已扎根。一个明显的例子是早期语言习得：儿童在头三年主要从父母和兄弟姐妹那里学习词汇、发音和社会规则。此外，家庭传递文化认同和道德标准，从对长辈的尊敬到对诚实的态度。这表明，没有支持性的家庭环境，即使是最好的学校也收效甚微，因为饥饿、焦虑或被忽视的孩子无法专注于课程。",
      body2: "另一方面，学校教育的捍卫者认为，正规机构让孩子接触到专业知识、多元视角和民主互动。以芬兰的教育体系为例：那里的教师受过高等培训，课程强调批判性思维而非死记硬背，学生在数学和阅读方面始终名列世界前茅。因此，学校提供了大多数家庭无法在家复制的资源、专家指导和同伴网络，并让孩子接触到比自己社区更广阔的世界观。",
      conclusion: "在我看来，两个领域都无法替代对方。家庭教育灌输对学习的热爱、品格和自尊，这使正规教育成为可能，而学校随后教授成人生活所需的学术技能和社交成熟度。虽然有些家长是天赋异禀的教育者，但大多数孩子都能从专业教师和多元同学中获益良多。总之，当家庭和学校伙伴合作、各自强化对方所提供的内容时，教育才能取得最大成功。"
    },
    vocabulary: [
      "acquisition",
      "transmit",
      "rote memorisation",
      "critical thinking",
      "curriculum",
      "self-esteem",
      "values",
      "moral standards",
      "partnership"
    ]
  },
  {
    id: 38,
    title: "双边讨论类 - 稳定工作与创业",
    type: "discuss both views",
    topic: "Some people prefer stable jobs, while others prefer starting their own business. Discuss both views and give your opinion.",
    structure: {
      introduction: "At some point in life, almost everyone must choose between [view1] and [view2]. This essay will evaluate both paths before concluding that [my opinion].",
      body1: "The appeal of [view1] is obvious: [reason]. In [example], [detail], which illustrates [implication].",
      body2: "Nevertheless, those who take [view2] argue that [reason]. Consider [example]: [detail]. This means [implication].",
      conclusion: "In my view, [my opinion]. [Reason]. Ultimately, [summary]."
    },
    structureCN: {
      introduction: "几乎每个人在人生的某个时刻都必须在[观点1]和[观点2]之间做出选择。本文将评估两条路，然后得出[我的观点]的结论。",
      body1: "[观点1]的吸引力显而易见：[原因]。在[例子]中，[细节]，这说明了[推论]。",
      body2: "然而，选择[观点2]的人认为[原因]。以[例子]为例：[细节]。这意味着[推论]。",
      conclusion: "在我看来，[我的观点]。[原因]。归根结底，[总结]。"
    },
    fullParagraphs: {
      introduction: "At some point in life, almost everyone must choose between the security of a stable job and the risks and rewards of starting their own business. Each path attracts different temperaments and circumstances. This essay will evaluate both paths before concluding that the right choice depends on personal circumstances and goals.",
      body1: "The appeal of stable employment is obvious: a predictable salary, paid leave, pension contributions and legal protections. In countries such as Japan and Germany, large corporations have offered lifetime employment and generous benefits for decades, which gave workers the confidence to buy homes, raise families and plan long-term. During economic downturns, as seen in the 2008 financial crisis, employees of established firms were far less likely to lose everything than small business owners whose shops and restaurants folded overnight. This illustrates that stable jobs provide a social safety net that entrepreneurship simply cannot match.",
      body2: "Nevertheless, those who choose entrepreneurship argue that independence, unlimited earning potential and the chance to build something meaningful outweigh the risks. Consider the story of the Chinese technology company ByteDance: founded by Zhang Yiming in 2012 with a small team, it grew into a global giant valued at hundreds of billions of dollars, creating tens of thousands of jobs worldwide. Moreover, even failed ventures teach resilience, adaptability and market insight that employees in rigid hierarchies rarely develop. This means that while most start-ups do not succeed, the experience itself is valuable, and the few that do transform industries.",
      conclusion: "In my view, stable jobs suit people with family responsibilities, health concerns or limited savings, while entrepreneurship fits those with passion, resources and tolerance for failure. The question is not which path is superior in general, but which matches the individual's situation and ambitions. Ultimately, both employment and enterprise are vital to a thriving economy, and a healthy society supports both choices."
    },
        fullParagraphsCN: {
      introduction: "在人生的某个阶段，几乎每个人都必须在稳定工作的安全感与创业的风险和回报之间做出选择。每条路径吸引着不同的性情和境遇。本文将评估两条路径，然后得出结论：正确的选择取决于个人情况和目标。",
      body1: "稳定就业的吸引力显而易见：可预测的薪水、带薪休假、养老金缴款和法律保护。在日本和德国等国，大公司几十年来提供终身雇佣和优厚福利，这让工人有信心买房、养家并做长期规划。在经济低迷时期——正如2008年金融危机所显示的那样——老牌公司的员工远比那些店铺和餐馆一夜倒闭的小企业主更不可能失去一切。这说明稳定工作提供了创业根本无法比拟的社会安全网。",
      body2: "然而，选择创业的人认为，独立性、无限的收入潜力和创造有意义事物的机会，超过了风险。以中国科技公司字节跳动的故事为例：张一鸣于2012年带着一个小团队创立了它，后来成长为估值数千亿美元的全球巨头，在全球创造了数万个就业岗位。此外，即使是失败的创业也能教会韧性、适应能力和市场洞察力，这些是僵化等级制度中的员工很少能培养的。这意味着，虽然大多数初创企业不会成功，但经历本身是有价值的，而少数成功的企业会改变整个行业。",
      conclusion: "在我看来，稳定工作适合有家庭责任、健康顾虑或储蓄有限的人，而创业适合有热情、有资源且能容忍失败的人。问题不在于哪条路径总体上更优越，而在于哪条匹配个人的处境和抱负。归根结底，就业和创业对繁荣的经济都至关重要，健康的社会会支持这两种选择。"
    },
    vocabulary: [
      "predictable income",
      "pension",
      "entrepreneurship",
      "resilience",
      "adaptability",
      "start-up",
      "market insight",
      "risk tolerance",
      "economic downturn"
    ]
  },
  {
    id: 39,
    title: "双边讨论类 - 传统购物与网购",
    type: "discuss both views",
    topic: "Some people prefer traditional shopping, while others prefer online shopping. Discuss both views and give your opinion.",
    structure: {
      introduction: "The way people buy goods has changed dramatically, splitting consumers into [view1] and [view2]. This essay will compare the two approaches and argue that [my opinion].",
      body1: "Supporters of [view1] highlight [reason]. For example, [example]. Consequently, [implication].",
      body2: "Conversely, advocates of [view2] claim [reason]. Take [example]: [detail]. Thus, [implication].",
      conclusion: "In my opinion, [my opinion]. [Reason]. Overall, [summary]."
    },
    structureCN: {
      introduction: "人们的购物方式发生了巨大变化，消费者分成了[观点1]派和[观点2]派。本文将比较两种方式，并论证[我的观点]。",
      body1: "[观点1]的支持者强调[原因]。例如，[例子]。因此，[推论]。",
      body2: "相反，[观点2]的倡导者声称[原因]。以[例子]为例：[细节]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。[原因]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "The way people buy goods has changed dramatically, splitting consumers into those who prefer traditional shopping and those who shop online. Each method has clear advantages. This essay will compare the two approaches and argue that the best strategy depends on the product and the shopper's priorities.",
      body1: "Supporters of traditional shopping highlight the sensory experience and immediacy that online stores cannot replicate. Shoppers can touch fabrics, test electronics and judge freshness with their own eyes before paying, which eliminates the disappointment of receiving something that looks different on a screen. For example, the luxury department store Harrods in London has thrived for over a century partly because it offers personal styling consultations and the chance to examine goods in person. Consequently, for items where quality, fit or taste matter, many consumers still trust their own judgement far more than website descriptions and reviews.",
      body2: "Conversely, advocates of online shopping claim that convenience, selection and price transparency give it the edge. Take the annual Singles' Day sale on Chinese e-commerce platforms: in 2023, consumers bought over one trillion yuan of goods in a single twenty-four-hour period, thanks to deep discounts and one-click ordering that no physical mall could match. Moreover, user reviews and comparison tools help buyers make informed decisions without travelling between shops, and home delivery saves hours of commuting and queuing. Thus, for standardised products such as books, electronics and household staples, buying online is faster, cheaper and often more reliable.",
      conclusion: "In my opinion, neither method will disappear, because they serve different needs. For everyday essentials and repeat purchases, online shopping is clearly superior, but for major decisions such as buying a sofa or a winter coat, physical inspection still matters. Overall, the smartest consumers use both: researching online, then visiting a store if the item demands careful evaluation."
    },
        fullParagraphsCN: {
      introduction: "人们购买商品的方式发生了巨大变化，消费者分为偏爱传统购物的人和网上购物的人。每种方式都有明显的优势。本文将比较两种方法，并论证最佳策略取决于产品和购物者的优先事项。",
      body1: "传统购物的支持者强调网上商店无法复制的感官体验和即时性。购物者可以触摸面料、测试电子产品、用眼睛判断新鲜度，然后再付款，这消除了收到与屏幕上看起来不同的商品的失望。例如，伦敦的奢侈品百货公司哈罗德一个多世纪以来长盛不衰，部分原因在于它提供个人造型咨询和亲自审视商品的机会。因此，对于质量、合身度或口味很重要的商品，许多消费者仍然比网站描述和评价更信任自己的判断。",
      body2: "相反，网上购物的倡导者声称，便利性、选择范围和价格透明度使它更具优势。以中国电商平台每年的双十一特卖为例：2023年，消费者在24小时内购买了超过一万亿元的商品，这得益于没有任何实体商场能匹敌的大幅折扣和一键下单。此外，用户评价和比较工具帮助买家无需穿梭于商店之间就能做出知情决定，送货上门还节省了数小时的通勤和排队时间。因此，对于书籍、电子产品和家庭日用品等标准化产品，网上购物更快、更便宜，往往也更可靠。",
      conclusion: "在我看来，两种方式都不会消失，因为它们服务于不同的需求。对于日常必需品和重复购买，网上购物明显更优越，但对于购买沙发或冬装等重大决定，亲自检查仍然很重要。总之，最聪明的消费者两者并用：先在网上研究，如果商品需要仔细评估，再去商店。"
    },
    vocabulary: [
      "sensory experience",
      "price transparency",
      "immediacy",
      "one-click ordering",
      "informed decision",
      "standardised product",
      "personal styling",
      "comparison tools",
      "home delivery"
    ]
  },
  {
    id: 40,
    title: "双边讨论类 - 保护动物与利用动物",
    type: "discuss both views",
    topic: "Some people think we should protect all animals, while others think we can use animals for human benefit. Discuss both views and give your opinion.",
    structure: {
      introduction: "The relationship between humans and animals is one of the most contentious ethical questions today: [view1] or [view2]? This essay will discuss both positions and explain why I believe [my opinion].",
      body1: "Those who advocate [view1] argue that [reason]. In [example], [detail]. This implies that [implication].",
      body2: "On the other hand, supporters of [view2] maintain that [reason]. For instance, [example]. Therefore, [implication].",
      conclusion: "In my opinion, [my opinion]. [Explanation]. Overall, [summary]."
    },
    structureCN: {
      introduction: "人与动物的关系是当今最具争议的伦理问题之一：[观点1]还是[观点2]？本文将讨论两种立场，并解释为什么我认为[我的观点]。",
      body1: "倡导[观点1]的人认为[原因]。在[例子]中，[细节]。这意味着[推论]。",
      body2: "另一方面，[观点2]的支持者坚持认为[原因]。例如，[例子]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。[解释]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "The relationship between humans and animals is one of the most contentious ethical questions today: should all animals be protected from human use, or can they legitimately serve our needs? The debate affects diet, medicine and industry. This essay will discuss both positions and explain why I believe that protection and responsible use are compatible.",
      body1: "Those who advocate complete protection argue that sentient beings deserve moral consideration regardless of species. They point to the suffering inflicted in factory farms, where animals are crowded in unsanitary conditions and slaughtered on an industrial scale. In 2019, for example, undercover investigations in several countries revealed that pigs and chickens were kept in spaces too small to turn around, with injuries untreated. This implies that if we recognise cruelty to dogs and cats as wrong, we should extend that principle to farm animals and laboratory subjects rather than drawing arbitrary lines based on human convenience.",
      body2: "On the other hand, supporters of responsible use maintain that humans have always depended on animals for food, clothing and medical research, and that complete abolition is neither practical nor morally necessary. For instance, insulin for diabetes was first extracted from pigs, and even today many life-saving vaccines are tested on animals before human trials. Therefore, they argue, the ethical standard should be minimising suffering through strict welfare regulations rather than ending all use. Many indigenous communities also rely on hunting for both nutrition and cultural identity, and banning these practices would destroy livelihoods and traditions.",
      conclusion: "In my opinion, the two extremes are unnecessary. We should protect animals from cruelty and habitat destruction while recognising that some human uses, such as necessary medical research and sustainable harvesting, can be justified when welfare standards are rigorous. Exploitation without compassion is indefensible, but so is a moral absolutism that ignores human needs. Overall, the goal should be a world in which animals live free from unnecessary suffering, and humans meet their needs responsibly."
    },
        fullParagraphsCN: {
      introduction: "人与动物的关系是当今最具争议的伦理问题之一：应当保护所有动物免受人类利用，还是它们可以合理地服务于我们的需求？这场辩论影响着饮食、医药和工业。本文将讨论两种立场，并解释为什么我认为保护和负责任的使用是可以兼容的。",
      body1: "主张完全保护的人认为，有感知能力的生物应当得到道德考量，无论其物种如何。他们指出工厂化农场造成的痛苦——动物被挤在不卫生的环境中，并被工业化规模屠宰。例如2019年，多国的秘密调查揭示，猪和鸡被关在连转身都不够大的空间里，伤口得不到治疗。这意味着，如果我们认为虐待猫狗是错误的，就应当把这一原则延伸到农场动物和实验对象身上，而非基于人类便利画任意的界限。",
      body2: "另一方面，负责任使用的支持者认为，人类一直依赖动物获取食物、衣物和医学研究，完全废除既不实际也无道德必要。例如，治疗糖尿病的胰岛素最初是从猪身上提取的，即使在今天，许多救命疫苗在人体试验之前也要先在动物身上测试。因此，他们主张，伦理标准应当是通过严格的福利法规尽量减少痛苦，而非终止一切使用。许多原住民社区也依赖狩猎获取营养和文化认同，禁止这些做法会摧毁生计和传统。",
      conclusion: "在我看来，两个极端都是不必要的。我们应当保护动物免受残忍和栖息地破坏，同时承认某些人类用途——如必要的医学研究和可持续的采集——在福利标准严格时是可以合理化的。没有同情心的剥削是不可辩护的，但忽视人类需求的道德绝对主义同样不可取。总之，目标应当是一个动物免于不必要痛苦、人类负责任地满足自身需求的世界。"
    },
    vocabulary: [
      "sentient",
      "factory farming",
      "moral consideration",
      "animal welfare",
      "undercover investigation",
      "habitat destruction",
      "indigenous community",
      "insulin",
      "vaccine"
    ]
  },
  {
    id: 41,
    title: "双边讨论类 - 公立与私立学校",
    type: "discuss both views",
    topic: "Some people think public schools are better, while others prefer private schools. Discuss both views and give your opinion.",
    structure: {
      introduction: "Choosing between [view1] and [view2] is a dilemma many parents face. This essay will examine both sides and explain why I believe [my opinion].",
      body1: "Those who favour [view1] argue that [reason]. For example, [example]. This shows that [implication].",
      body2: "Meanwhile, supporters of [view2] claim that [reason]. In [example], [detail], proving that [implication].",
      conclusion: "In my opinion, [my opinion]. [Justification]. Ultimately, [summary]."
    },
    structureCN: {
      introduction: "在[观点1]和[观点2]之间做选择是许多家长面临的难题。本文将审视双方，并解释为什么我认为[我的观点]。",
      body1: "支持[观点1]的人认为[原因]。例如，[例子]。这表明[推论]。",
      body2: "与此同时，[观点2]的支持者声称[原因]。在[例子]中，[细节]，证明[推论]。",
      conclusion: "在我看来，[我的观点]。[理由]。归根结底，[总结]。"
    },
    fullParagraphs: {
      introduction: "Choosing between public and private schooling is a dilemma many parents face. Some believe state-funded schools are fairer and more socially cohesive, while others argue that fee-paying institutions deliver superior results. This essay will examine both sides and explain why I believe well-funded public schools should remain the backbone of education.",
      body1: "Those who favour public schools argue that they promote equality and social integration. Children from different economic backgrounds study side by side, which reduces class segregation and builds empathy across society. For example, in Finland, where private schools are extremely rare, the public system consistently ranks among the world's best in international assessments such as PISA, proving that state education can be both excellent and inclusive. This shows that when governments invest properly in teacher training and facilities, public schools can rival or exceed private ones without creating an elite class.",
      body2: "Meanwhile, supporters of private schools claim that smaller classes, better facilities and greater autonomy produce stronger academic outcomes. In the United Kingdom, institutions such as Eton College offer teacher-to-student ratios that state schools cannot match, along with extensive music, sport and leadership programmes. Parents paying fees also gain influence over school policy, which encourages responsiveness. However, this advantage often reflects wealth rather than pedagogy: private schools select motivated students whose parents can afford tutors and enrichment, so their higher grades may simply mirror the advantages their pupils already enjoy at home.",
      conclusion: "In my opinion, the success of private schools owes more to selective intake and parental wealth than to superior teaching, whereas strong public systems benefit entire societies. Rather than funding two parallel tracks, governments should raise the quality of state schools so that no parent feels forced to pay for a decent education. Ultimately, education should be a ladder for every child, not a privilege reserved for those who can afford it."
    },
        fullParagraphsCN: {
      introduction: "在公立学校和私立学校之间做出选择，是许多家长面临的困境。一些人认为公立资助的学校更公平、更具社会凝聚力，另一些人则认为付费机构能提供更优异的成绩。本文将考察双方，并解释为什么我认为资金充足的公立学校应当仍然是教育的支柱。",
      body1: "支持公立学校的人认为，它们促进了平等和社会融合。来自不同经济背景的孩子并肩学习，这减少了阶级隔离并在全社会建立同理心。例如在私立学校极为罕见的芬兰，公立体系在PISA等国际评估中始终名列世界前茅，证明公立教育既可以卓越，也可以包容。这表明，当政府在教师培训和设施上适当投资时，公立学校可以匹敌甚至超越私立学校，而不必制造精英阶层。",
      body2: "与此同时，私立学校的支持者声称，更小的班级、更好的设施和更大的自治权能带来更强的学业成果。在英国，伊顿公学等机构提供了公立学校无法比拟的师生比，以及广泛的音乐、体育和领导力项目。付费的家长也能对学校政策施加影响，这鼓励了响应性。然而，这种优势往往反映的是财富而非教学法：私立学校挑选的是那些家长能负担得起家教和丰富活动的有动力的学生，所以他们较高的成绩可能只是映射了学生在家中早已享有的优势。",
      conclusion: "在我看来，私立学校的成功更多归功于择优录取和家长的财富，而非更优越的教学，而强大的公立体系惠及整个社会。政府不应资助两条平行轨道，而应提高公立学校的质量，使任何家长都不必为良好的教育被迫付费。归根结底，教育应当是每个孩子的阶梯，而非保留给负担得起的人的特权。"
    },
    vocabulary: [
      "social cohesion",
      "segregation",
      "teacher-to-student ratio",
      "autonomy",
      "selective intake",
      "pedagogy",
      "inclusive",
      "elite",
      "state-funded"
    ]
  },
  {
    id: 42,
    title: "双边讨论类 - 短期与长期目标",
    type: "discuss both views",
    topic: "Some people focus on short-term goals, while others prioritize long-term goals. Discuss both views and give your opinion.",
    structure: {
      introduction: "When planning for the future, people fall into two camps: those who chase [view1] and those who invest in [view2]. This essay will discuss both approaches and argue that [my opinion].",
      body1: "Advocates of [view1] note that [reason]. Take [example]: [detail]. This means that [implication].",
      body2: "Conversely, defenders of [view2] believe that [reason]. For example, [example]. Consequently, [implication].",
      conclusion: "In my view, [my opinion]. [Reason]. Overall, [summary]."
    },
    structureCN: {
      introduction: "规划未来时，人们分为两大阵营：追逐[观点1]的人和投资[观点2]的人。本文将讨论两种方式，并论证[我的观点]。",
      body1: "[观点1]的倡导者指出[原因]。以[例子]为例：[细节]。这意味着[推论]。",
      body2: "相反，[观点2]的捍卫者相信[原因]。例如，[例子]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。[原因]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "When planning for the future, people fall into two camps: those who chase short-term goals and those who invest in long-term ambitions. Each strategy has passionate defenders. This essay will discuss both approaches and argue that long-term vision, broken into short-term steps, delivers the greatest success.",
      body1: "Advocates of short-term goals note that immediate results build motivation and momentum. Completing small, achievable tasks releases a sense of progress that sustains effort, and quick wins provide valuable feedback about what works. Take a young entrepreneur who sets a goal of acquiring ten customers this month: reaching it generates cash flow, confidence and practical lessons, whereas a vague dream of becoming an industry leader offers no clear first step. This means that short-term targets are essential for turning abstract ambition into daily action, especially when circumstances change rapidly.",
      body2: "Conversely, defenders of long-term goals believe that only a distant vision gives life direction. For example, the Japanese concept of ikigai encourages people to identify their deepest purpose and organise decades of work around it; similarly, Amazon's founder Jeff Bezos famously ran the company with a seven-year horizon, investing in projects like cloud computing that lost money for years before dominating their markets. Consequently, without long-term thinking, people and organisations drift from one urgent task to another, never building anything lasting. Short-termism in business, such as cutting research budgets to boost quarterly profits, often destroys companies within a decade.",
      conclusion: "In my view, the debate presents a false choice. Long-term goals provide the compass, but short-term goals are the steps on the path; neither functions without the other. The wisest approach is to define a clear destination, then break it into monthly and yearly milestones that keep motivation alive. Overall, those who combine a bold vision with disciplined short-term execution achieve far more than devotees of either extreme."
    },
        fullParagraphsCN: {
      introduction: "规划未来时，人们分为两派：追求短期目标的人和投资于长期抱负的人。每种策略都有热情的捍卫者。本文将讨论两种方法，并论证把长期愿景分解为短期步骤，能带来最大的成功。",
      body1: "短期目标的倡导者指出，立竿见影的结果能建立动力和势头。完成小而可实现的任务会释放一种进步感，维持努力，而快速的胜利能提供关于什么有效的宝贵反馈。以一个设定本月获得十个客户目标的年轻创业者为例：达成目标能带来现金流、信心和实践经验，而一个模糊的成为行业领袖的梦想则没有明确的第一步。这意味着，短期目标对于把抽象的抱负转化为日常行动是必不可少的，尤其是在环境迅速变化的时候。",
      body2: "相反，长期目标的捍卫者认为，只有远大的愿景才能给人生方向。例如，日本的「生き甲斐」（ikigai）概念鼓励人们识别自己最深层的目标，并围绕它组织数十年的工作；同样，亚马逊创始人杰夫·贝索斯以七年的视野经营公司，投资于云计算等在主导市场之前亏损多年的项目。因此，没有长期思维，人和组织会从一个紧急任务漂向下一个，永远无法建立持久的东西。商业中的短期主义，如削减研究预算以提振季度利润，往往会在十年内毁掉公司。",
      conclusion: "在我看来，这场辩论提出了一个虚假的选择。长期目标提供了指南针，而短期目标是道路上的台阶；缺一不可。最明智的做法是定义一个清晰的目的地，然后把它分解为每月和每年的里程碑，以保持动力。总之，那些把大胆的愿景与有纪律的短期执行相结合的人，比任何一个极端的拥护者都能取得多得多的成就。"
    },
    vocabulary: [
      "momentum",
      "quick win",
      "long-term vision",
      "short-termism",
      "milestone",
      "ambition",
      "feedback loop",
      "quarterly profit",
      "execution"
    ]
  },
  {
    id: 43,
    title: "双边讨论类 - 经验与学历",
    type: "discuss both views",
    topic: "Some people think work experience is more important, while others believe academic qualifications matter more. Discuss both views and give your opinion.",
    structure: {
      introduction: "Employers and students endlessly debate whether [view1] or [view2] matters more. This essay will consider both sides before arguing that [my opinion].",
      body1: "Those who value [view1] argue that [reason]. For instance, [example]. This suggests [implication].",
      body2: "Those who prize [view2] counter that [reason]. In [example], [detail]. Hence, [implication].",
      conclusion: "In my opinion, [my opinion]. [Explanation]. Overall, [summary]."
    },
    structureCN: {
      introduction: "雇主和学生无休止地争论[观点1]和[观点2]哪个更重要。本文将考量双方，然后论证[我的观点]。",
      body1: "看重[观点1]的人认为[原因]。例如，[例子]。这表明[推论]。",
      body2: "珍视[观点2]的人反驳说[原因]。在[例子]中，[细节]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。[解释]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "Employers and students endlessly debate whether work experience or academic qualifications matter more in building a career. This essay will consider both sides before arguing that their relative importance depends on the profession.",
      body1: "Those who value work experience argue that practical skills can only be learned on the job. Classrooms teach theory, but workplaces demand judgement, communication and problem-solving under real pressure. For instance, in the technology industry, companies such as Google and Apple dropped degree requirements years ago, hiring coders based on portfolios and interviews instead; many of their best engineers are self-taught. This suggests that for fast-moving practical fields, a track record of real projects says more about a candidate than any certificate.",
      body2: "Those who prize academic qualifications counter that formal education provides foundations that experience cannot easily replace. In medicine, for example, no country allows doctors to practise without years of accredited training, because mistakes cost lives; similarly, engineers who design bridges must master mathematics that few learn outside university. Hence, in professions where errors are catastrophic or knowledge is highly theoretical, degrees act as essential quality control. Qualifications also signal discipline and learning ability to employers screening thousands of applicants.",
      conclusion: "In my opinion, the answer varies by field. For trades, sales, design and much of technology, demonstrable experience should outweigh paper credentials, while for medicine, law, academia and engineering, rigorous qualifications remain indispensable. The wisest students combine both: earning a solid degree while seeking internships that prove they can apply their knowledge. Overall, rather than asking which matters more, we should ask which matters more for a particular career, and plan accordingly."
    },
        fullParagraphsCN: {
      introduction: "雇主和学生无休止地争论，在建立职业生涯时，工作经验和学历哪个更重要。本文将考虑双方观点，然后论证它们的相对重要性取决于职业。",
      body1: "重视工作经验的人认为，实践技能只能在工作中学到。课堂教授理论，但工作场所要求在真实压力下做出判断、沟通和解决问题。例如，在科技行业，谷歌和苹果等公司多年前就取消了学位要求，转而根据作品集和面试招聘程序员；他们许多最优秀的工程师都是自学成才的。这表明，对于快速变化的实践领域，真实项目的记录比任何证书都更能说明候选人的能力。",
      body2: "看重学历的人反驳说，正规教育提供了经验难以替代的基础。例如在医学领域，没有哪个国家允许医生在没有多年认证培训的情况下执业，因为错误会付出生命代价；同样，设计桥梁的工程师必须掌握很少有人能在大学之外学到的数学。因此，在错误代价惨重或知识高度理论化的行业，学位是必不可少的质量控制。学历也向筛选数千名申请者的雇主传递了纪律和学习能力的信号。",
      conclusion: "在我看来，答案因领域而异。对于技工、销售、设计和大部分科技领域，可证明的经验应当重于纸面凭证，而对于医学、法律、学术和工程，严格的学历仍然不可或缺。最明智的学生两者兼备：在获得扎实学位的同时，寻找能证明自己能应用知识的实习机会。总之，与其问哪个更重要，不如问对某个特定职业而言哪个更重要，并据此规划。"
    },
    vocabulary: [
      "track record",
      "portfolio",
      "accredited training",
      "quality control",
      "internship",
      "self-taught",
      "screening",
      "credentials",
      "practical skills"
    ]
  },
  {
    id: 44,
    title: "双边讨论类 - 个人与集体",
    type: "discuss both views",
    topic: "Some people value individualism, while others emphasize collectivism. Discuss both views and give your opinion.",
    structure: {
      introduction: "Societies differ profoundly in whether they prize [view1] or [view2]. This essay will explore both value systems and argue that [my opinion].",
      body1: "Champions of [view1] claim that [reason]. For example, [example]. This illustrates that [implication].",
      body2: "Proponents of [view2] respond that [reason]. In [example], [detail], which shows that [implication].",
      conclusion: "In my view, [my opinion]. [Reason]. Ultimately, [summary]."
    },
    structureCN: {
      introduction: "不同社会在崇尚[观点1]还是[观点2]上存在深刻差异。本文将探讨两种价值体系，并论证[我的观点]。",
      body1: "[观点1]的拥护者声称[原因]。例如，[例子]。这说明[推论]。",
      body2: "[观点2]的支持者回应说[原因]。在[例子]中，[细节]，这表明[推论]。",
      conclusion: "在我看来，[我的观点]。[原因]。归根结底，[总结]。"
    },
    fullParagraphs: {
      introduction: "Societies differ profoundly in whether they prize individualism or collectivism. This essay will explore both value systems and argue that a healthy community needs a balance of the two.",
      body1: "Champions of individualism claim that personal freedom drives creativity and progress. When people are encouraged to think independently, question authority and pursue their own dreams, societies produce innovators and entrepreneurs. For example, the culture of Silicon Valley celebrates mavericks who defy convention, and this attitude has produced companies from Apple to Tesla that reshaped entire industries. Psychological research also links individual autonomy to motivation and life satisfaction, illustrating that people flourish when they control their own choices rather than conforming to group expectations.",
      body2: "Proponents of collectivism respond that humans are social creatures whose wellbeing depends on strong communities. In Japan, the emphasis on group harmony and shared responsibility contributed to the country's remarkably orderly response to the 2011 earthquake and tsunami, when citizens queued calmly for supplies and voluntarily conserved electricity for months. This shows that collective discipline achieves what isolated individuals cannot: disaster recovery, public health and social trust. Moreover, collectivist cultures report lower loneliness among the elderly, because family and community obligations ensure that no one is abandoned.",
      conclusion: "In my view, both extremes carry risks. Pure individualism can produce loneliness and inequality, while unchecked collectivism can suppress dissent and personal fulfilment. The most successful societies protect individual rights and reward initiative while fostering solidarity through shared institutions and mutual obligation. Ultimately, individuals and communities are interdependent: people thrive as unique persons precisely when they belong to groups that support them."
    },
        fullParagraphsCN: {
      introduction: "社会在重视个人主义还是集体主义方面存在深刻分歧。本文将探讨两种价值体系，并论证健康的社区需要两者的平衡。",
      body1: "个人主义的拥护者声称，个人自由驱动创造力和进步。当人们被鼓励独立思考、质疑权威并追求自己的梦想时，社会就会产生创新者和企业家。例如，硅谷的文化颂扬那些蔑视常规的特立独行者，这种态度造就了从苹果到特斯拉等重塑了整个行业的公司。心理学研究也把个人自主与动力和生活满意度联系起来，说明当人们控制自己的选择而非遵从群体期望时，他们会蓬勃发展。",
      body2: "集体主义的支持者回应说，人类是社会性生物，其福祉依赖于强大的社区。在日本，对群体和谐和共同责任的强调，促成了该国在2011年地震和海啸中秩序井然的应对——公民平静地排队领取物资，并自愿节电数月。这表明，集体纪律能实现孤立个人无法实现的东西：灾难恢复、公共卫生和社会信任。此外，集体主义文化中老年人的孤独感更低，因为家庭和社区的义务确保了没有人被抛弃。",
      conclusion: "在我看来，两个极端都有风险。纯粹的个人主义会产生孤独和不平等，而不受约束的集体主义会压制异议和个人成就。最成功的社会保护个人权利并奖励主动性，同时通过共享机构和相互义务培养团结。归根结底，个人和社区是相互依存的：人们正是在属于支持他们的群体时，才作为独特的个体蓬勃发展。"
    },
    vocabulary: [
      "individualism",
      "collectivism",
      "autonomy",
      "conform",
      "group harmony",
      "social trust",
      "solidarity",
      "dissent",
      "interdependent"
    ]
  },
  {
    id: 45,
    title: "双边讨论类 - 竞争与合作",
    type: "discuss both views",
    topic: "Some people think competition is essential, while others believe cooperation is more important. Discuss both views and give your opinion.",
    structure: {
      introduction: "Few debates are as old as whether [view1] or [view2] matters more. This essay will examine both claims and explain why I believe [my opinion].",
      body1: "Defenders of [view1] argue that [reason]. The example of [example] proves this: [detail]. Therefore, [implication].",
      body2: "Advocates of [view2] insist that [reason]. Consider [example], where [detail]. Hence, [implication].",
      conclusion: "In my opinion, [my opinion]. [Justification]. Overall, [summary]."
    },
    structureCN: {
      introduction: "很少有辩论像[观点1]和[观点2]哪个更重要这样古老。本文将审视两种主张，并解释为什么我认为[我的观点]。",
      body1: "[观点1]的捍卫者认为[原因]。[例子]证明了这一点：[细节]。因此，[推论]。",
      body2: "[观点2]的倡导者坚持认为[原因]。以[例子]为例，其中[细节]。因此，[推论]。",
      conclusion: "在我看来，[我的观点]。[理由]。总的来说，[总结]。"
    },
    fullParagraphs: {
      introduction: "Few debates are as old as whether competition or cooperation matters more for human progress. This essay will examine both claims and explain why I believe the two forces are most powerful in combination.",
      body1: "Defenders of competition argue that rivalry pushes individuals and organisations beyond their limits. Athletes train harder when a rival is closing in, and businesses innovate when market share is at stake. The example of the 1960s space race proves this: the intense contest between the United States and the Soviet Union produced, within a single decade, the first satellite, the first human in orbit and the Moon landing — achievements that peacetime budgets alone would have taken generations to fund. Therefore, competition concentrates effort, accelerates innovation and rewards excellence.",
      body2: "Advocates of cooperation insist that humanity's greatest achievements are collective. Consider the Human Genome Project, where scientists from twenty countries shared data openly to map human DNA by 2003, years ahead of schedule and at a fraction of the projected cost; the same spirit enabled dozens of nations to build the International Space Station, something no single country could afford alone. Hence, when problems are vast — climate change, pandemics, poverty — cooperation multiplies resources and expertise in ways rivalry cannot. Excessive competition, by contrast, encourages secrecy, duplication and even sabotage.",
      conclusion: "In my opinion, neither force should dominate. Competition without cooperation becomes destructive, while cooperation without competition can become stagnant; the healthiest systems harness both. Companies compete in the market yet cooperate on shared standards, and scientists publish openly while racing to be first. Overall, progress happens fastest when we compete to contribute the most, turning rivalry into a form of collaboration that benefits everyone."
    },
        fullParagraphsCN: {
      introduction: "很少有辩论像竞争还是合作对人类进步更重要一样古老。本文将考察两种说法，并解释为什么我认为这两种力量结合起来最强大。",
      body1: "竞争的捍卫者认为，竞争驱使个人和组织超越极限。当对手逼近时，运动员训练更刻苦；当市场份额受到威胁时，企业进行创新。20世纪60年代太空竞赛的例子证明了这一点：美国和苏联之间的激烈竞争，在短短十年内催生了第一颗卫星、第一个进入轨道的人类和登月——这些成就是和平时期的预算 alone 需要几代人才能资助的。因此，竞争集中了精力、加速了创新并奖励了卓越。",
      body2: "合作的倡导者坚持认为，人类最伟大的成就是集体性的。以人类基因组计划为例，来自20个国家的科学家公开共享数据，到2003年绘制出了人类DNA图谱，比计划提前了数年，成本也只是预测的一小部分；同样的精神使数十个国家得以建造国际空间站，这是任何一个国家都独自负担不起的。因此，当问题巨大时——气候变化、疫情、贫困——合作能以竞争无法做到的方式倍增资源和专长。相反，过度的竞争会鼓励保密、重复甚至破坏。",
      conclusion: "在我看来，两种力量都不应占据主导。没有合作的竞争会变得具有破坏性，而没有竞争的合作可能变得停滞；最健康的体系会驾驭两者。公司在市场上竞争，却在共享标准上合作；科学家公开发表成果，同时竞相成为第一。总之，当我们竞争着做出最大贡献，把竞争转化为一种惠及所有人的合作形式时，进步最快。"
    },
    vocabulary: [
      "rivalry",
      "innovation",
      "space race",
      "collective achievement",
      "open data",
      "sabotage",
      "stagnant",
      "harness",
      "accelerate"
    ]
  },
  {
    id: 46,
    title: "优缺点类 - 远程办公",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of working from home.",
    structure: {
      introduction: "[Topic] has become increasingly common in recent years. While it offers clear benefits such as [advantage], it also brings drawbacks like [disadvantage]. This essay will examine both sides.",
      body1: "The main advantage is [advantage]. For example, [example]. As a result, [benefit].",
      body2: "However, there are significant disadvantages, chiefly [disadvantage]. For instance, [example]. This can lead to [negative outcome].",
      conclusion: "In conclusion, while [restate advantage], the drawback of [restate disadvantage] should not be ignored. On balance, [overall judgement]."
    },
    structureCN: {
      introduction: "[话题]近年来越来越普遍。虽然它带来了[优点]等明显好处，但也存在[缺点]等弊端。本文将审视正反两面。",
      body1: "主要的优点是[优点]。例如，[例子]。因此，[好处]。",
      body2: "然而，也存在显著缺点，主要是[缺点]。例如，[例子]。这可能导致[负面结果]。",
      conclusion: "总之，虽然[重述优点]，但[重述缺点]这一弊端不容忽视。总体而言，[总体判断]。"
    },
    fullParagraphs: {
      introduction: "Working from home has shifted from a rare perk to a mainstream arrangement, especially since the COVID-19 pandemic forced millions of employees online. While remote work offers clear benefits such as flexibility and time savings, it also brings drawbacks like isolation and blurred boundaries. This essay will examine both sides.",
      body1: "The main advantage is the elimination of commuting and the flexibility it creates. For example, a 2023 survey by Stanford economist Nicholas Bloom found that remote workers saved an average of 72 minutes per day previously spent travelling, time they redirected into work, family and sleep. Employees can also structure their day around peak concentration hours, caring for children or attending appointments without requesting leave. As a result, many report higher job satisfaction and lower stress, and companies such as GitLab and Automattic have operated fully remotely for years while remaining highly productive.",
      body2: "However, there are significant disadvantages, chiefly social isolation and the erosion of work-life boundaries. For instance, a Buffer survey of remote workers consistently identifies loneliness and difficulty unplugging as the top two struggles: when the bedroom becomes the office, many people work longer hours than before and find it harder to relax. New employees especially suffer, because casual mentoring and team culture are difficult to replicate over video calls. This can lead to weaker professional networks, slower career progression and, in some cases, burnout that goes unnoticed by distant managers.",
      conclusion: "In conclusion, while working from home delivers valuable flexibility and time savings, the drawbacks of isolation and overwork should not be ignored. On balance, a hybrid model — two or three days in the office combined with remote days — appears to capture most of the benefits while limiting the costs, which explains why so many large employers have settled on it."
    },
        fullParagraphsCN: {
      introduction: "远程办公已从罕见的福利转变为主流的工作方式，尤其自新冠疫情迫使数百万员工转为线上办公以来。虽然远程工作提供了灵活性和节省时间等明显好处，但也带来了孤独感和界限模糊等弊端。本文将审视正反两面。",
      body1: "主要的优点是免除了通勤以及由此创造的灵活性。例如，斯坦福大学经济学家尼古拉斯·布鲁姆2023年的一项调查发现，远程工作者平均每天节省72分钟原本用于通勤的时间，并将这些时间重新投入工作、家庭和睡眠。员工还可以围绕自己注意力最集中的时段安排日程，照顾孩子或赴约而无需请假。因此，许多人报告工作满意度更高、压力更低；GitLab和Automattic等公司多年来完全远程运营，同时保持着极高的生产力。",
      body2: "然而，也存在显著缺点，主要是社交孤立和工作与生活界限的侵蚀。例如，Buffer对远程工作者的调查一直将孤独感和难以「下线」列为前两大困扰：当卧室变成办公室，许多人的工作时间反而比以前更长，也更难放松。新员工尤其受影响，因为非正式的指导和团队文化很难通过视频通话复制。这可能导致职业人脉变弱、晋升变慢，在某些情况下还会出现被远程管理者忽视的职业倦怠。",
      conclusion: "总之，虽然远程办公带来了宝贵的灵活性和时间节省，但孤立和过度工作的弊端不容忽视。总体而言，混合模式——每周两三天到办公室、其余时间远程——似乎能在限制成本的同时获得大部分好处，这也解释了为何如此多的大型企业最终选择了它。"
    },
    vocabulary: [
      "remote work",
      "hybrid model",
      "commute",
      "flexibility",
      "isolation",
      "work-life balance",
      "burnout",
      "productivity",
      "job satisfaction",
      "perk"
    ]
  },
  {
    id: 47,
    title: "优缺点类 - 出国留学",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of studying abroad.",
    structure: {
      introduction: "Every year, millions of students choose to [topic action]. Although this experience offers [advantage], it also involves [disadvantage]. This essay will discuss both aspects.",
      body1: "On the positive side, [advantage explained]. A good example is [example]. Consequently, [benefit].",
      body2: "On the negative side, [disadvantage explained]. For instance, [example]. This may result in [negative outcome].",
      conclusion: "In summary, [topic] brings both [advantage] and [disadvantage]. For most students, [overall judgement]."
    },
    structureCN: {
      introduction: "每年，数百万学生选择[话题行为]。尽管这一经历带来[优点]，但也伴随着[缺点]。本文将讨论两个方面。",
      body1: "积极的一面是[优点阐述]。一个很好的例子是[例子]。因此，[好处]。",
      body2: "消极的一面是[缺点阐述]。例如，[例子]。这可能导致[负面结果]。",
      conclusion: "综上所述，[话题]既带来[优点]也带来[缺点]。对大多数学生而言，[总体判断]。"
    },
    fullParagraphs: {
      introduction: "Every year, millions of students choose to pursue their education in a foreign country. Although this experience offers academic prestige and personal growth, it also involves high costs and cultural challenges. This essay will discuss both aspects.",
      body1: "On the positive side, studying abroad exposes students to world-class teaching, new perspectives and a second language. A good example is the experience of Chinese postgraduates at British universities: beyond earning internationally recognised degrees, they learn to debate in seminars, manage independent research and build friendships across cultures. Employers notice this too — multinational companies frequently pay a premium for graduates who have proven they can adapt to unfamiliar environments. Consequently, overseas study often accelerates both career prospects and personal maturity in ways that staying at home rarely matches.",
      body2: "On the negative side, the financial and emotional burdens are substantial. Tuition and living costs at popular destinations routinely exceed 300,000 yuan per year, forcing many families into debt, and scholarships cover only a small minority. For instance, surveys of international students in Australia have found high rates of loneliness, with some reporting they barely interact with locals outside class because of language anxiety. Homesickness, discrimination and difficulty with foreign academic conventions can push vulnerable students toward depression. This may result in underperformance or even dropping out, wasting both money and years.",
      conclusion: "In summary, studying abroad brings both transformative opportunities and serious costs. For most students, the experience is worthwhile when the family can afford it comfortably and the student prepares linguistically and psychologically; those who stretch finances to breaking point or go merely to escape domestic competition may find the disadvantages outweigh the gains."
    },
        fullParagraphsCN: {
      introduction: "每年，数百万学生选择去外国求学。尽管这一经历带来学术声望和个人成长，但也伴随着高昂费用和文化挑战。本文将讨论两个方面。",
      body1: "积极的一面是，出国留学让学生接触世界一流的教学、全新的视角和第二语言。一个很好的例子是中国学生在英国大学读研的经历：除了获得国际认可的学位，他们还学会在研讨课上辩论、独立开展研究并建立跨文化的友谊。雇主也注意到了这一点——跨国公司经常为证明自己能适应陌生环境的毕业生支付溢价。因此，海外求学往往以留在国内难以匹敌的方式加速职业前景和个人成熟。",
      body2: "消极的一面是，经济和情感负担相当沉重。热门留学目的地的学费和生活费通常每年超过30万元人民币，迫使许多家庭负债，而奖学金只覆盖极少数人。例如，对在澳大利亚的国际学生的调查发现孤独感比例很高，一些学生表示由于语言焦虑，课外几乎不与当地人交流。思乡、歧视以及对国外学术规范的不适应可能把脆弱的学生推向抑郁。这可能导致学业表现不佳甚至辍学，既浪费金钱又浪费年华。",
      conclusion: "综上所述，出国留学既带来改变人生的机遇，也带来沉重的代价。对大多数学生而言，当家庭能够轻松负担、且学生在语言和心理上做好准备时，这段经历是值得的；而那些把家庭财务逼到极限、或仅为逃避国内竞争而出国的人，可能会发现弊大于利。"
    },
    vocabulary: [
      "academic prestige",
      "cultural adaptation",
      "tuition fees",
      "homesickness",
      "international recognition",
      "language anxiety",
      "career prospects",
      "maturity",
      "scholarship",
      "discrimination"
    ]
  },
  {
    id: 48,
    title: "优缺点类 - 智能手机",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of smartphones.",
    structure: {
      introduction: "Few inventions have changed daily life as much as [topic]. Despite their obvious benefits, notably [advantage], they also create problems such as [disadvantage]. This essay will assess both.",
      body1: "The greatest advantage of [topic] is [advantage]. For instance, [example]. This means that [benefit].",
      body2: "Nevertheless, [topic] has serious drawbacks. The most worrying is [disadvantage]. For example, [example]. Consequently, [negative outcome].",
      conclusion: "In conclusion, [topic] is a powerful tool that offers [advantage] but also carries [disadvantage]. The key is [recommendation]."
    },
    structureCN: {
      introduction: "很少有发明像[话题]那样深刻地改变了日常生活。尽管它有明显的好处，尤其是[优点]，但也带来了[缺点]等问题。本文将评估两者。",
      body1: "[话题]最大的优点是[优点]。例如，[例子]。这意味着[好处]。",
      body2: "然而，[话题]也有严重的缺点。最令人担忧的是[缺点]。例如，[例子]。因此，[负面结果]。",
      conclusion: "总之，[话题]是一个强大的工具，既提供[优点]，也伴随[缺点]。关键在于[建议]。"
    },
    fullParagraphs: {
      introduction: "Few inventions have changed daily life as much as the smartphone. Despite their obvious benefits, notably instant access to information and services, they also create problems such as addiction and shortened attention spans. This essay will assess both.",
      body1: "The greatest advantage of smartphones is that they put an entire world of tools into one pocket-sized device. For instance, a farmer in rural Kenya can check crop prices, receive mobile payments through M-Pesa and access weather forecasts without owning a computer, while urban users navigate cities, translate foreign signs and consult doctors remotely. During emergencies, smartphones save lives: earthquake alerts in Japan give residents precious seconds to take cover. This means that the device functions as a bank, library, office and lifeline simultaneously, narrowing the gap between rich and poor regions in access to services.",
      body2: "Nevertheless, smartphones have serious drawbacks. The most worrying is compulsive use, particularly among teenagers. For example, research published by psychologist Jean Twenge linked the rise of smartphones after 2012 to sharp increases in adolescent depression and sleep deprivation, and average users now check their phones over 100 times a day. The constant stream of notifications fragments attention, making deep reading and sustained conversation harder. Consequently, many families report that meals pass in silence while everyone stares at separate screens, and pedestrians absorbed in phones have created a new category of traffic accidents.",
      conclusion: "In conclusion, the smartphone is a powerful tool that offers unprecedented convenience but also carries risks of addiction and social disconnection. The key is deliberate use: disabling unnecessary notifications, keeping phones away from meals and bedrooms, and treating the device as a servant rather than a master. Used with discipline, its advantages comfortably outweigh its drawbacks."
    },
        fullParagraphsCN: {
      introduction: "很少有发明像智能手机那样深刻地改变了日常生活。尽管它有明显的好处，尤其是即时获取信息和服务，但也带来了成瘾和注意力缩短等问题。本文将评估两者。",
      body1: "智能手机最大的优点是，它把一整个世界的工具塞进了一个口袋大小的设备里。例如，肯尼亚农村的农民无需拥有电脑，就能查看农作物价格、通过M-Pesa接收移动支付并获取天气预报；而城市用户可以导航城市、翻译外国标牌并远程咨询医生。在紧急情况下，智能手机能拯救生命：日本的地震预警给居民宝贵的几秒钟来寻找掩护。这意味着，这个设备同时充当着银行、图书馆、办公室和生命线，缩小了贫富地区在获取服务方面的差距。",
      body2: "然而，智能手机也有严重的缺点。最令人担忧的是强迫性使用，尤其是在青少年中。例如，心理学家珍·特温格发表的研究把2012年后智能手机的普及与青少年抑郁和睡眠剥夺的急剧增加联系起来，而普通用户现在每天查看手机超过100次。源源不断的通知分散了注意力，使深度阅读和持续对话变得更难。因此，许多家庭报告说，用餐时每个人都盯着各自的屏幕，饭就在沉默中度过，而专注于手机的行人引发了一种新的交通事故。",
      conclusion: "总之，智能手机是一个强大的工具，提供了前所未有的便利，但也带来成瘾和社交脱节的风险。关键在于有意识地使用：关闭不必要的通知、让手机远离餐桌和卧室，并把设备当作仆人而非主人。有纪律地使用，它的优点完全超过缺点。"
    },
    vocabulary: [
      "addiction",
      "attention span",
      "notification",
      "sleep deprivation",
      "mobile payment",
      "compulsive use",
      "convenience",
      "digital divide",
      "emergency alert",
      "discipline"
    ]
  },
  {
    id: 49,
    title: "优缺点类 - 公共交通",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of public transportation.",
    structure: {
      introduction: "As cities grow, [topic] becomes an increasingly important issue. It offers advantages such as [advantage], yet suffers from disadvantages like [disadvantage]. This essay will explore both.",
      body1: "The principal benefit is [advantage]. For example, [example]. As a consequence, [benefit].",
      body2: "The main drawback, however, is [disadvantage]. In [example], [detail]. This leads to [negative outcome].",
      conclusion: "To conclude, while [topic] clearly provides [advantage], its weakness of [disadvantage] remains. Overall, [overall judgement]."
    },
    structureCN: {
      introduction: "随着城市发展，[话题]成为日益重要的议题。它提供了[优点]等好处，但也存在[缺点]等弊端。本文将探讨两者。",
      body1: "主要的好处是[优点]。例如，[例子]。因此，[好处]。",
      body2: "然而，主要的缺点是[缺点]。在[例子]中，[细节]。这导致[负面结果]。",
      conclusion: "总而言之，虽然[话题]显然提供了[优点]，但其[缺点]的弱点依然存在。总体而言，[总体判断]。"
    },
    fullParagraphs: {
      introduction: "As cities grow, public transportation becomes an increasingly important issue. It offers advantages such as reduced congestion and lower emissions, yet suffers from disadvantages like crowding and inflexibility. This essay will explore both.",
      body1: "The principal benefit is efficiency at scale: a single metro train can carry over a thousand passengers, replacing hundreds of private cars. For example, Tokyo's rail network moves roughly 40 million passenger journeys daily, allowing the world's largest metropolis to function with far less traffic and pollution than car-dependent cities like Los Angeles. Public transport is also equitable, giving students, the elderly and low-income workers affordable access to jobs and services. As a consequence, cities with strong transit systems enjoy cleaner air, lower transport costs for households and more compact, walkable urban forms.",
      body2: "The main drawback, however, is the loss of comfort and flexibility. Commuters must follow fixed routes and timetables, often endure rush-hour crowding, and may face delays beyond their control. In many cities, such as parts of the United States where buses run infrequently, travelling without a car can turn a fifteen-minute drive into an hour-long journey with transfers. Late-night service gaps and safety concerns on empty trains add to the inconvenience. This leads many middle-class families to abandon public transport as soon as they can afford a car, draining the passenger base that funds service improvements.",
      conclusion: "To conclude, while public transportation clearly provides environmental and economic benefits at scale, its weaknesses of inflexibility and crowding remain real deterrents. Overall, the solution is not to abandon transit but to invest in frequency, cleanliness and safety so that choosing the train over the car becomes the convenient option rather than a sacrifice."
    },
        fullParagraphsCN: {
      introduction: "随着城市的发展，公共交通变得越来越重要。它有减少拥堵和降低排放等优点，但也有拥挤和缺乏灵活性等缺点。本文将探讨两者。",
      body1: "主要的好处是规模效率：一列地铁可以搭载一千多名乘客，取代数百辆私家车。例如，东京的铁路网络每天运送约4000万人次的出行，使这个世界最大的都市圈在交通和污染方面远少于洛杉矶等依赖汽车的城市。公共交通也是公平的，让学生、老年人和低收入劳动者能负担得起地获得工作和服务。因此，拥有强大交通系统的城市享有更清洁的空气、更低的家庭交通成本，以及更紧凑、更适合步行的城市形态。",
      body2: "然而，主要缺点是舒适度和灵活性的丧失。通勤者必须遵循固定的路线和时刻表，常常忍受高峰期的拥挤，还可能面临无法控制的延误。在许多城市，例如美国部分地区公交车班次稀少，没有车的话，15分钟的车程可能变成需要换乘的一小时旅程。深夜服务的空白和空车厢上的安全顾虑，增加了不便。这导致许多中产阶级家庭一旦买得起车就放弃公共交通，流失了为服务改善提供资金的乘客基础。",
      conclusion: "总之，虽然公共交通在规模上明显提供了环境和经济效益，但其不灵活和拥挤的弱点仍是真正的阻碍。总体而言，解决方案不是放弃公共交通，而是投资于班次频率、清洁度和安全性，使选择火车而非汽车成为便利之举，而非一种牺牲。"
    },
    vocabulary: [
      "congestion",
      "emissions",
      "rush hour",
      "timetable",
      "equitable",
      "commuter",
      "car-dependent",
      "passenger base",
      "walkable",
      "transit system"
    ]
  },
  {
    id: 50,
    title: "优缺点类 - 社交媒体",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of social media.",
    structure: {
      introduction: "[Topic] has rewired how billions of people communicate. Its supporters celebrate [advantage], while critics warn of [disadvantage]. This essay will consider both sides.",
      body1: "The strongest argument in favour is [advantage]. A striking example is [example]. As a result, [benefit].",
      body2: "The strongest argument against is [disadvantage]. For instance, [example]. This can cause [negative outcome].",
      conclusion: "In conclusion, [topic] delivers [advantage] but at the cost of [disadvantage]. Whether it is a net positive depends on [factor]."
    },
    structureCN: {
      introduction: "[话题]重塑了数十亿人的交流方式。支持者赞美[优点]，批评者则警告[缺点]。本文将考量双方。",
      body1: "最有力的支持论据是[优点]。一个突出的例子是[例子]。因此，[好处]。",
      body2: "最有力的反对论据是[缺点]。例如，[例子]。这可能导致[负面结果]。",
      conclusion: "总之，[话题]带来了[优点]，但代价是[缺点]。它是否利大于弊取决于[因素]。"
    },
    fullParagraphs: {
      introduction: "Social media has rewired how billions of people communicate. Its supporters celebrate unprecedented connection and free expression, while critics warn of misinformation and declining mental health. This essay will consider both sides.",
      body1: "The strongest argument in favour is that social platforms democratise voice and community. A striking example is how movements such as #MeToo spread globally within days, giving survivors of harassment a collective voice that traditional media had ignored for decades; similarly, diaspora families maintain daily contact across continents through WeChat and WhatsApp at zero cost. Small businesses benefit enormously too: an artisan in Yunnan can sell crafts to customers in Europe through a single viral video. As a result, social media has lowered the barriers to publishing, organising and entrepreneurship to levels unimaginable twenty years ago.",
      body2: "The strongest argument against is the damage to attention and truth. Platforms are engineered to maximise engagement, which rewards outrage and sensationalism over accuracy. For instance, MIT researchers found that false news stories on Twitter spread six times faster than true ones, and during elections and pandemics such misinformation has had deadly real-world consequences. Heavy use also correlates with anxiety and body-image problems among teenagers, as endless comparison with curated highlight reels erodes self-esteem. This can cause a distracted, polarised public that struggles to agree on basic facts.",
      conclusion: "In conclusion, social media delivers connection and opportunity but at the cost of attention, truth and mental wellbeing. Whether it is a net positive depends largely on how consciously it is used: curated feeds, time limits and source-checking allow users to harvest the benefits, while passive, endless scrolling invites the harms. Regulation of algorithms, alongside better digital literacy education, would tilt the balance further toward good."
    },
        fullParagraphsCN: {
      introduction: "社交媒体重新连接了数十亿人的沟通方式。它的支持者赞颂前所未有的连接和言论自由，而批评者则警告错误信息和心理健康下降。本文将考虑正反两面。",
      body1: "最有力的支持理由是，社交平台使发声和社群民主化。一个突出的例子是「#我也是」（#MeToo）等运动如何在几天内传遍全球，让性骚扰幸存者获得了传统媒体忽视了数十年的集体声音；同样，散居海外的家庭通过微信和WhatsApp以零成本在各大洲保持日常联系。小企业也受益匪浅：云南的手工艺人可以通过一段爆红的视频把工艺品卖给欧洲的顾客。因此，社交媒体把出版、组织和创业的门槛降低到了二十年前难以想象的水平。",
      body2: "最有力的反对理由是对注意力和真相的损害。平台的设计目的是最大化参与度，这奖励的是愤怒和煽情而非准确性。例如，麻省理工学院的研究人员发现，Twitter上的假新闻比真新闻传播快六倍，而在选举和疫情期间，这类错误信息已产生了致命的现实后果。重度使用还与青少年的焦虑和身体形象问题相关，因为与精心策划的精彩片段无休止的比较侵蚀了自尊。这可能导致一个分心、两极分化的公众，连基本事实都难以达成一致。",
      conclusion: "总之，社交媒体带来了连接和机会，但代价是注意力、真相和心理健康。它是否是净收益，在很大程度上取决于使用的自觉程度：策划信息流、设置时间限制和核查来源能让用户收获好处，而被动、无休止地刷手机则会招来危害。对算法的监管，加上更好的数字素养教育，将使平衡进一步向好的方向倾斜。"
    },
    vocabulary: [
      "misinformation",
      "engagement",
      "viral",
      "polarisation",
      "self-esteem",
      "digital literacy",
      "democratise",
      "algorithm",
      "highlight reel",
      "curated feed"
    ]
  },
  {
    id: 51,
    title: "优缺点类 - 全球化",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of globalization.",
    structure: {
      introduction: "[Topic] has reshaped the world economy over the past half-century. Its defenders point to [advantage], while its critics highlight [disadvantage]. This essay will weigh both.",
      body1: "The clearest advantage is [advantage]. For example, [example]. This has led to [benefit].",
      body2: "The most serious disadvantage is [disadvantage]. For instance, [example]. As a result, [negative outcome].",
      conclusion: "In conclusion, [topic] brings [advantage] alongside [disadvantage]. The challenge for policymakers is [recommendation]."
    },
    structureCN: {
      introduction: "[话题]在过去半个世纪重塑了世界经济。捍卫者指出[优点]，批评者则强调[缺点]。本文将权衡两者。",
      body1: "最明显的优点是[优点]。例如，[例子]。这带来了[好处]。",
      body2: "最严重的缺点是[缺点]。例如，[例子]。因此，[负面结果]。",
      conclusion: "总之，[话题]在带来[优点]的同时也伴随着[缺点]。政策制定者面临的挑战是[建议]。"
    },
    fullParagraphs: {
      introduction: "Globalization has reshaped the world economy over the past half-century. Its defenders point to falling poverty and cheaper goods, while its critics highlight job losses and cultural homogenisation. This essay will weigh both.",
      body1: "The clearest advantage is unprecedented economic growth, especially in developing nations. For example, after China joined the World Trade Organization in 2001, hundreds of millions of its citizens were lifted out of extreme poverty as the country became the world's manufacturing hub; consumers worldwide simultaneously enjoyed cheaper electronics, clothing and furniture. Global supply chains also spread technology and management expertise to regions that previously lacked both. This has led to the fastest reduction in global poverty in human history and a convergence of living standards between rich and poor countries.",
      body2: "The most serious disadvantage is the destruction of industries and identities at home. For instance, manufacturing towns in the American Rust Belt and northern England lost hundreds of thousands of stable jobs when factories moved offshore, fuelling political anger that reshaped elections in both countries. Meanwhile, global brands displace local businesses: identical Starbucks outlets and fast-fashion stores now dominate high streets from Bangkok to Berlin. As a result, many communities feel that globalization delivered cheaper goods at the price of stable livelihoods and distinctive local culture.",
      conclusion: "In conclusion, globalization brings prosperity and efficiency alongside dislocation and cultural flattening. The challenge for policymakers is to keep trade open while protecting the losers — through retraining programmes, regional investment and support for local culture — so that the enormous gains are shared rather than concentrated. Managed wisely, its benefits can outweigh its costs; unmanaged, the backlash can reverse them entirely."
    },
        fullParagraphsCN: {
      introduction: "全球化在过去半个世纪重塑了世界经济。捍卫者指出贫困减少和商品降价，批评者则强调就业岗位流失和文化同质化。本文将权衡两者。",
      body1: "最明显的优点是前所未有的经济增长，尤其在发展中国家。例如，中国2001年加入世界贸易组织后，随着国家成为世界制造业中心，数以亿计的公民摆脱了极端贫困；与此同时，全球消费者享受到了更便宜的电子产品、服装和家具。全球供应链还把技术和管理经验传播到了此前两者皆缺的地区。这带来了人类历史上最快的全球减贫速度，以及贫富国家之间生活水平的趋同。",
      body2: "最严重的缺点是本土产业与身份的瓦解。例如，当工厂迁往海外，美国铁锈带和英格兰北部的制造业城镇失去了数十万个稳定岗位，由此激发的政治愤怒重塑了两国的选举格局。与此同时，全球品牌挤压本地商户：从曼谷到柏林，千篇一律的星巴克门店和快时尚商店如今主宰着商业大街。因此，许多社区感到，全球化以更便宜的商品为代价，换走了稳定的生计和独特的地方文化。",
      conclusion: "总之，全球化在带来繁荣与效率的同时，也伴随着动荡与文化扁平化。政策制定者面临的挑战是保持贸易开放，同时通过再培训计划、区域投资和对本土文化的扶持来保护受损者，让巨大的收益得到分享而非集中。管理得当，其利大于弊；放任不管，反弹可能让成果全部逆转。"
    },
    vocabulary: [
      "supply chain",
      "poverty reduction",
      "homogenisation",
      "manufacturing hub",
      "job displacement",
      "trade liberalisation",
      "living standards",
      "backlash",
      "retraining"
    ]
  },
  {
    id: 52,
    title: "优缺点类 - 城市化",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of urbanization.",
    structure: {
      introduction: "More than half of humanity now lives in cities, and the trend of [topic] continues to accelerate. It delivers [advantage], but also creates [disadvantage]. This essay will examine both effects.",
      body1: "The major advantage is [advantage]. For instance, [example]. Consequently, [benefit].",
      body2: "The major disadvantage is [disadvantage]. In [example], [detail]. This results in [negative outcome].",
      conclusion: "To sum up, [topic] offers [advantage] while producing [disadvantage]. Whether it improves lives depends on [factor]."
    },
    structureCN: {
      introduction: "如今超过半数的人类居住在城市，[话题]的趋势还在加速。它带来了[优点]，但也产生了[缺点]。本文将审视两种影响。",
      body1: "主要的优点是[优点]。例如，[例子]。因此，[好处]。",
      body2: "主要的缺点是[缺点]。在[例子]中，[细节]。这导致[负面结果]。",
      conclusion: "综上所述，[话题]在提供[优点]的同时也产生了[缺点]。它能否改善生活取决于[因素]。"
    },
    fullParagraphs: {
      introduction: "More than half of humanity now lives in cities, and urbanization continues to accelerate. It delivers economic opportunity and better services, but also creates overcrowding and inequality. This essay will examine both effects.",
      body1: "The major advantage is that cities concentrate opportunity. For instance, a migrant arriving in Shenzhen from rural Hunan can find factory or service work paying several times the agricultural wage, while gaining access to hospitals, schools and cultural facilities that villages cannot support. Dense cities are also efficient: public transport, district heating and shared infrastructure lower the cost per person of essential services, and the clustering of firms and talent drives innovation. Consequently, urbanization has historically been the single most powerful engine of income growth, and countries with higher urbanisation rates are almost invariably richer.",
      body2: "The major disadvantage is that unplanned growth produces slums, congestion and social strain. In megacities such as Mumbai and Lagos, millions live in informal settlements without clean water or sanitation, and commuters lose hours daily in gridlock. Housing costs spiral beyond ordinary salaries — young professionals in Beijing and London commonly spend half their income on rent — while the elderly and poor are pushed to the margins. This results in cities that are engines of wealth for some and daily hardship for others, with air pollution and mental stress affecting nearly everyone.",
      conclusion: "To sum up, urbanization offers prosperity and services while producing inequality and congestion. Whether it improves lives depends on governance: cities that invest early in affordable housing, transit and sanitation, like Singapore and Vienna, turn density into livability, whereas those that let markets run unchecked turn it into misery. The trend itself is irreversible, so planning is everything."
    },
        fullParagraphsCN: {
      introduction: "如今超过一半的人类居住在城市，城市化仍在加速。它带来了经济机会和更好的服务，但也造成了过度拥挤和不平等。本文将考察两种影响。",
      body1: "主要的优点是城市集中了机会。例如，一个从湖南农村来到深圳的移民，可以找到工资是农业数倍的工厂或服务行业工作，同时获得村庄无法支持的医院、学校和文化设施。高密度的城市也更高效：公共交通、集中供暖和共享基础设施降低了每人基本服务的成本，而企业和人才的聚集推动了创新。因此，城市化历史上一直是收入增长最强大的单一引擎，城市化率较高的国家几乎无一例外地更富裕。",
      body2: "主要的缺点是，无计划的增长会产生贫民窟、拥堵和社会压力。在孟买和拉各斯等特大城市，数百万人居住在没有清洁用水或卫生设施的非正式定居点，通勤者每天在交通堵塞中损失数小时。住房成本飙升到超出普通薪水——北京和伦敦的年轻专业人士通常把一半收入花在房租上——而老人和穷人被推到边缘。这导致城市对一些人来说是财富的引擎，对另一些人来说是日常的苦难，空气污染和精神压力则几乎影响到每个人。",
      conclusion: "总之，城市化带来了繁荣和服务，同时也产生了不平等和拥堵。它能否改善生活取决于治理：像新加坡和维也纳那样及早投资于保障性住房、交通和卫生设施的城市，把密度转化为宜居性；而任由市场失控的城市则把它变成了苦难。这一趋势本身不可逆转，因此规划至关重要。"
    },
    vocabulary: [
      "urbanization",
      "megacity",
      "slum",
      "congestion",
      "infrastructure",
      "affordable housing",
      "inequality",
      "migrant worker",
      "livability",
      "gridlock"
    ]
  },
  {
    id: 53,
    title: "优缺点类 - 人工智能",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of artificial intelligence.",
    structure: {
      introduction: "[Topic] is advancing faster than almost any technology in history. It promises [advantage], yet it also threatens [disadvantage]. This essay will evaluate both sides.",
      body1: "The chief advantage lies in [advantage]. For example, [example]. This enables [benefit].",
      body2: "The chief danger lies in [disadvantage]. For instance, [example]. If unchecked, this could lead to [negative outcome].",
      conclusion: "In conclusion, [topic] offers [advantage] but risks [disadvantage]. The priority now is [recommendation]."
    },
    structureCN: {
      introduction: "[话题]的发展速度超过历史上几乎任何技术。它有望带来[优点]，但也威胁着[缺点]。本文将评估双方。",
      body1: "主要的优点在于[优点]。例如，[例子]。这使得[好处]。",
      body2: "主要的危险在于[缺点]。例如，[例子]。如果任其发展，可能导致[负面结果]。",
      conclusion: "总之，[话题]提供了[优点]，但也有[缺点]的风险。眼下的当务之急是[建议]。"
    },
    fullParagraphs: {
      introduction: "Artificial intelligence is advancing faster than almost any technology in history. It promises breakthroughs in medicine and productivity, yet it also threatens jobs and human control. This essay will evaluate both sides.",
      body1: "The chief advantage lies in AI's ability to solve problems at superhuman speed and scale. For example, DeepMind's AlphaFold predicted the structures of over 200 million proteins — work that would have taken biologists centuries — accelerating drug discovery for diseases from malaria to cancer. In everyday life, AI already translates languages instantly, detects tumours in scans earlier than radiologists, and optimises power grids to cut energy waste. This enables humanity to attack challenges that were previously beyond computational reach, potentially adding trillions of dollars to the global economy while extending healthy lifespans.",
      body2: "The chief danger lies in displacement and loss of control. For instance, the World Economic Forum estimates that automation could displace tens of millions of jobs this decade — not only factory workers but paralegals, translators and junior programmers — while new roles emerge more slowly than old ones vanish. Deepfake technology already undermines trust in evidence and elections, and autonomous weapons raise the prospect of machines making life-and-death decisions. If unchecked, this could lead to mass unemployment, manipulation at scale and power concentrated in the hands of a few companies that own the most capable systems.",
      conclusion: "In conclusion, artificial intelligence offers extraordinary benefits but risks serious social disruption. The priority now is governance that keeps pace with capability: retraining displaced workers, labelling synthetic media, and requiring human oversight of high-stakes decisions. With deliberate stewardship, AI can amplify human potential; without it, the same power could erode employment, truth and ultimately human agency."
    },
        fullParagraphsCN: {
      introduction: "人工智能的发展速度几乎超过了历史上任何技术。它有望在医学和生产力方面取得突破，但也威胁到就业和人类的控制。本文将评估正反两面。",
      body1: "主要的优点在于人工智能以超越人类的速度和规模解决问题的能力。例如，DeepMind的AlphaFold预测了超过2亿个蛋白质的结构——这项工作原本需要生物学家数个世纪——加速了从疟疾到癌症等疾病的药物研发。在日常生活中，人工智能已经可以即时翻译语言、比放射科医生更早地在扫描影像中发现肿瘤，还能优化电网以减少能源浪费。这使人类得以攻克此前算力无法企及的挑战，可能为全球经济增加数万亿美元产值，同时延长健康寿命。",
      body2: "主要的危险在于岗位替代和控制的丧失。例如，世界经济论坛估计，自动化可能在本十年内取代数千万个工作岗位——不仅是工厂工人，还包括律师助理、翻译和初级程序员——而新岗位的出现速度慢于旧岗位的消失。深度伪造技术已经削弱了对证据和选举的信任，自主武器则带来了机器做出生死决定的前景。如果不加约束，这可能导致大规模失业、规模化操纵，以及权力集中在少数拥有最强大系统的公司手中。",
      conclusion: "总之，人工智能带来了非凡的好处，但也存在严重的社会动荡风险。当前的优先事项是与能力同步的治理：再培训被替代的工人、标记合成媒体，并要求对高风险决策进行人工监督。通过有意的管理，人工智能可以放大人类的潜力；没有它，同样的力量可能侵蚀就业、真相，最终侵蚀人类的能动性。"
    },
    vocabulary: [
      "artificial intelligence",
      "automation",
      "job displacement",
      "deepfake",
      "drug discovery",
      "algorithm",
      "human oversight",
      "breakthrough",
      "superhuman",
      "governance"
    ]
  },
  {
    id: 54,
    title: "优缺点类 - 旅游业",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of tourism.",
    structure: {
      introduction: "[Topic] is one of the world's largest industries. It generates [advantage], but it can also cause [disadvantage]. This essay will discuss both impacts.",
      body1: "The principal advantage is [advantage]. For example, [example]. This means that [benefit].",
      body2: "The principal disadvantage is [disadvantage]. In [example], [detail]. Consequently, [negative outcome].",
      conclusion: "In conclusion, while [topic] brings [advantage], it risks [disadvantage]. The answer lies in [recommendation]."
    },
    structureCN: {
      introduction: "[话题]是全球最大的产业之一。它能带来[优点]，但也可能造成[缺点]。本文将讨论两方面影响。",
      body1: "主要的优点是[优点]。例如，[例子]。这意味着[好处]。",
      body2: "主要的缺点是[缺点]。在[例子]中，[细节]。因此，[负面结果]。",
      conclusion: "总之，虽然[话题]带来[优点]，但也有[缺点]的风险。答案在于[建议]。"
    },
    fullParagraphs: {
      introduction: "Tourism is one of the world's largest industries, accounting for roughly one in ten jobs globally before the pandemic. It generates income and cultural exchange, but it can also cause environmental damage and cultural erosion. This essay will discuss both impacts.",
      body1: "The principal advantage is economic: tourism channels money directly into local communities. For example, in Thailand the industry supported around a fifth of GDP, funding hotels, restaurants, guides and craft producers, while in Rwanda, permits to visit mountain gorillas finance both conservation and village schools. Beyond money, travel broadens minds: visitors return home with first-hand understanding of other cultures, and host communities gain pride and incentives to preserve traditions that tourists come to see. This means that tourism can simultaneously raise incomes, protect heritage and build international goodwill.",
      body2: "The principal disadvantage is that mass tourism often destroys what it celebrates. In Venice, thirty million annual visitors have driven out residents, turning a living city into a theme park where locals can no longer afford to live; in Maya Bay in Thailand, the beach from the film The Beach had to be closed for years to let its ecosystem recover from thousands of daily visitors. Aviation emissions accelerate climate change, cruise ships pollute harbours, and souvenir economies can reduce sacred ceremonies to staged performances. Consequently, destinations risk exchanging their authentic character and environment for short-term cash.",
      conclusion: "In conclusion, while tourism brings vital income and intercultural understanding, it risks degrading the very places and cultures it depends on. The answer lies in sustainable management: visitor caps, environmental taxes, and promotion of lesser-known destinations. Handled responsibly, tourism remains one of the few industries that can enrich both the visitor and the visited."
    },
        fullParagraphsCN: {
      introduction: "旅游业是世界上最大的产业之一，疫情前约占全球就业岗位的十分之一。它创造收入和文化交流，但也可能造成环境破坏和文化侵蚀。本文将讨论两种影响。",
      body1: "主要的优点是经济上的：旅游业把资金直接引入当地社区。例如在泰国，该产业支撑了约五分之一的国内生产总值，为酒店、餐馆、导游和手工艺生产者提供资金；而在卢旺达，参观山地大猩猩的许可费既资助了保护工作，也资助了乡村学校。除了金钱，旅行还开阔了视野：游客带着对其他文化的第一手了解回家，而接待社区获得了自豪感和保护游客慕名而来的传统的动力。这意味着旅游业可以同时提高收入、保护遗产并建立国际善意。",
      body2: "主要的缺点是，大众旅游往往摧毁了它所赞颂的东西。在威尼斯，每年三千万的游客把居民赶了出去，把一座有生命的城市变成了主题公园，当地人再也住不起；在泰国的玛雅湾，电影《海滩》的拍摄地因每天数千名游客而不得不关闭数年，让生态系统得以恢复。航空排放加速了气候变化，游轮污染了港口，而纪念品经济可能把神圣的仪式降格为表演。因此，目的地冒着用真实的特色和环境换取短期现金的风险。",
      conclusion: "总之，虽然旅游业带来了至关重要的收入和跨文化理解，但它也有可能损害它所依赖的地方和文化。答案在于可持续管理：游客上限、环境税，以及推广知名度较低的目的地。负责任地经营，旅游业仍然是少数能同时丰富游客和被访者的产业之一。"
    },
    vocabulary: [
      "mass tourism",
      "sustainable tourism",
      "cultural exchange",
      "conservation",
      "heritage",
      "ecosystem",
      "visitor cap",
      "authentic",
      "aviation emissions",
      "local community"
    ]
  },
  {
    id: 55,
    title: "优缺点类 - 汽车",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of owning a car.",
    structure: {
      introduction: "For many families, [topic] is both a dream purchase and a major expense. It offers [advantage], yet it burdens owners with [disadvantage]. This essay will look at both sides.",
      body1: "The clearest advantage is [advantage]. For instance, [example]. This gives owners [benefit].",
      body2: "The clearest disadvantage is [disadvantage]. For example, [example]. As a result, [negative outcome].",
      conclusion: "In summary, [topic] provides [advantage] at the cost of [disadvantage]. Whether it is worthwhile depends on [factor]."
    },
    structureCN: {
      introduction: "对许多家庭来说，[话题]既是梦想中的大件消费，也是一笔重大开支。它提供了[优点]，但也让车主背负[缺点]。本文将审视双方。",
      body1: "最明显的优点是[优点]。例如，[例子]。这让车主获得[好处]。",
      body2: "最明显的缺点是[缺点]。例如，[例子]。因此，[负面结果]。",
      conclusion: "综上所述，[话题]以[缺点]为代价提供了[优点]。是否值得取决于[因素]。"
    },
    fullParagraphs: {
      introduction: "For many families, owning a car is both a dream purchase and a major expense. It offers freedom and convenience, yet it burdens owners with high costs and environmental guilt. This essay will look at both sides.",
      body1: "The clearest advantage is personal freedom. For instance, a family with a car can visit elderly relatives in the countryside on a whim, transport groceries and children without juggling bus timetables, and reach workplaces badly served by transit. In emergencies the difference can be critical: driving a sick child to hospital at midnight takes minutes rather than waiting for an ambulance or night bus. Cars also expand employment options, since many jobs — from sales to trades — effectively require one. This gives owners control over their schedules and access to opportunities that non-drivers simply cannot reach.",
      body2: "The clearest disadvantage is the cumulative cost, financial and environmental. For example, analyses by the American Automobile Association put the true annual cost of owning a new car — including depreciation, insurance, fuel, parking and repairs — at over ten thousand dollars, often the second-largest household expense after housing. Cars sit unused roughly 95 percent of the time while occupying valuable urban space, and transport remains one of the largest sources of urban air pollution and carbon emissions. As a result, the convenience of driving is subsidised by traffic jams, climate damage and household debt that owners rarely calculate in full.",
      conclusion: "In summary, car ownership provides unmatched flexibility at the cost of heavy ongoing expense and environmental harm. Whether it is worthwhile depends chiefly on location: in rural areas and sprawling cities it remains close to a necessity, while in dense cities with good transit, ride-hailing and car-sharing, many households find that occasional rental beats permanent ownership."
    },
        fullParagraphsCN: {
      introduction: "对许多家庭来说，拥有一辆车既是梦想中的购买，也是一笔大开销。它提供了自由和便利，但也让车主背负高昂成本和环境负罪感。本文将审视正反两面。",
      body1: "最明显的优点是个人自由。例如，有车的家庭可以一时兴起去乡下探望年迈的亲戚，无需费力安排公交时刻表就能运送食品杂货和孩子，还能到达公共交通服务不佳的工作地点。在紧急情况下，差别可能至关重要：午夜开车送生病的孩子去医院只需几分钟，而不必等救护车或夜班车。汽车还扩大了就业选择，因为许多工作——从销售到技工——实际上都要求有车。这让车主能掌控自己的日程，并获得无车者根本无法触及的机会。",
      body2: "最明显的缺点是累积的成本，包括经济和环境两方面。例如，美国汽车协会的分析把拥有一辆新车的真实年成本——包括折旧、保险、燃油、停车和维修——定在一万多美元，往往是仅次于住房的第二大家庭开支。汽车大约95%的时间停着不用，却占据着宝贵的城市空间，而交通仍然是城市空气污染和碳排放的最大来源之一。因此，驾车的便利是由交通堵塞、气候损害和车主很少完整计算的家庭债务来补贴的。",
      conclusion: "总之，拥有汽车以高昂的持续开支和环境危害为代价，提供了无可比拟的灵活性。它是否值得主要取决于地点：在农村地区和布局分散的城市，它几乎仍然是必需品；而在拥有良好公共交通、网约车和共享汽车的密集城市，许多家庭发现偶尔租车胜过永久拥有。"
    },
    vocabulary: [
      "depreciation",
      "carbon emissions",
      "household expense",
      "flexibility",
      "ride-hailing",
      "car-sharing",
      "air pollution",
      "insurance",
      "urban space",
      "necessity"
    ]
  },
  {
    id: 56,
    title: "优缺点类 - 互联网",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of the internet.",
    structure: {
      introduction: "The internet has transformed almost every aspect of modern life. While it delivers [advantage], it also creates [disadvantage]. This essay will explore both dimensions.",
      body1: "The most valuable advantage of the internet is [advantage]. A clear example is [example]. Consequently, [benefit].",
      body2: "On the other hand, the internet poses serious risks, particularly [disadvantage]. For instance, [example]. This can result in [negative outcome].",
      conclusion: "In conclusion, the internet is both [positive summary] and [negative summary]. Ultimately, its value depends on [recommendation]."
    },
    structureCN: {
      introduction: "互联网改变了现代生活的几乎每一个方面。它既带来[优点]，也产生了[缺点]。本文将探讨两个维度。",
      body1: "互联网最宝贵的优点是[优点]。一个明显的例子是[例子]。因此，[好处]。",
      body2: "另一方面，互联网带来严重风险，尤其是[缺点]。例如，[例子]。这可能导致[负面结果]。",
      conclusion: "总之，互联网既是[正面总结]，也是[负面总结]。归根结底，其价值取决于[建议]。"
    },
    fullParagraphs: {
      introduction: "The internet has transformed almost every aspect of modern life. While it delivers instant access to knowledge and unprecedented connectivity, it also creates information chaos and privacy risks. This essay will explore both dimensions.",
      body1: "The most valuable advantage of the internet is the democratisation of information and opportunity. A clear example is online education: platforms such as Coursera and Khan Academy allow a student in rural India to take computer science courses from Stanford professors at no cost, something unimaginable thirty years ago. Small businesses benefit equally — a craftsman in Morocco can sell directly to customers in Europe through Etsy or Alibaba without intermediaries. Telemedicine, remote legal advice and free access to scientific papers have similarly levelled fields that were once restricted by geography and wealth. Consequently, the internet has narrowed opportunity gaps and empowered individuals who were previously excluded from knowledge and markets.",
      body2: "On the other hand, the internet poses serious risks, particularly misinformation and the erosion of privacy. For instance, during the COVID-19 pandemic, false cures and vaccine conspiracy theories spread faster on social media than corrections from health authorities, and the World Health Organization coined the term infodemic to describe the damage. Meanwhile, platforms harvest users' behaviour to sell advertising: the 2018 Cambridge Analytica scandal revealed that data from 87 million Facebook profiles had been exploited for political targeting without meaningful consent. This can result in manipulated elections, polarised societies and citizens who no longer know which sources to trust, while children face additional dangers from cyberbullying and online predators.",
      conclusion: "In conclusion, the internet is both the greatest library and marketplace ever built and a channel for manipulation and surveillance. Ultimately, its value depends on how wisely societies govern it — through media literacy education, enforceable privacy laws and responsible platform design — and on whether users approach it critically rather than passively."
    },
        fullParagraphsCN: {
      introduction: "互联网改变了现代生活的几乎每一个方面。它提供了对知识的即时获取和前所未有的连接，但也造成了信息混乱和隐私风险。本文将探讨两个维度。",
      body1: "互联网最宝贵的优点是信息和机会的民主化。一个明显的例子是在线教育：Coursera和可汗学院等平台让印度农村的学生可以免费选修斯坦福大学教授的计算机科学课程，这在三十年前是不可想象的。小企业同样受益——摩洛哥的手工艺人可以通过Etsy或阿里巴巴直接向欧洲的顾客销售，无需中介。远程医疗、远程法律咨询和免费获取科学论文，同样拉平了曾经受地理和财富限制的领域。因此，互联网缩小了机会差距，赋予了此前被排除在知识和市场之外的个人权力。",
      body2: "另一方面，互联网带来了严重的风险，尤其是错误信息和隐私的侵蚀。例如，在新冠疫情期间，虚假的治疗方法和疫苗阴谋论在社交媒体上的传播速度快于卫生当局的纠正，世界卫生组织因此创造了「信息疫情」（infodemic）一词来描述这种损害。与此同时，平台收集用户行为数据来出售广告：2018年的剑桥分析丑闻揭示，8700万个Facebook个人资料的数据被用于政治定向，而没有获得有意义的同意。这可能导致选举被操纵、社会两极分化，以及公民不再知道该信任哪些来源；而儿童还面临网络欺凌和在线掠食者的额外危险。",
      conclusion: "总之，互联网既是有史以来最伟大的图书馆和市场，也是操纵和监视的渠道。归根结底，它的价值取决于社会治理它的智慧——通过媒体素养教育、可执行的隐私法和负责任的平台设计——也取决于用户是否以批判性而非被动的态度对待它。"
    },
    vocabulary: [
      "democratisation",
      "misinformation",
      "privacy",
      "connectivity",
      "infodemic",
      "surveillance",
      "cyberbullying",
      "media literacy",
      "data harvesting",
      "opportunity gap"
    ]
  },
  {
    id: 57,
    title: "优缺点类 - 电视",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of television.",
    structure: {
      introduction: "Since its invention, television has dominated home entertainment. Supporters value it for [advantage], while critics blame it for [disadvantage]. This essay will consider both views.",
      body1: "Television's main strength is [advantage]. For example, [example]. This enables [benefit].",
      body2: "However, television also causes harm, most notably [disadvantage]. Studies show that [evidence]. This leads to [negative outcome].",
      conclusion: "In conclusion, television offers [positive summary] but risks [negative summary]. The answer lies in [recommendation]."
    },
    structureCN: {
      introduction: "自发明以来，电视一直主导着家庭娱乐。支持者看重它[优点]，批评者则指责它[缺点]。本文将考虑两种观点。",
      body1: "电视的主要优点在于[优点]。例如，[例子]。这使得[好处]。",
      body2: "然而，电视也带来危害，最明显的是[缺点]。研究表明，[证据]。这导致[负面结果]。",
      conclusion: "总之，电视提供[正面总结]，但有[负面总结]的风险。答案在于[建议]。"
    },
    fullParagraphs: {
      introduction: "Since its invention, television has dominated home entertainment. Supporters value it for education and shared cultural experience, while critics blame it for passive consumption and health damage. This essay will consider both views.",
      body1: "Television's main strength is its unmatched ability to inform and unite large audiences. For example, nature documentaries such as the BBC's Planet Earth series have brought remote ecosystems into living rooms worldwide, inspiring a generation of conservation awareness that contributed to real policy changes, including plastic bag bans after footage of polluted oceans shocked viewers. Major broadcasts also create shared national moments — an estimated 600 million people watched the 1969 Moon landing together, and events like the Olympics or royal weddings still bind societies in collective experience. Educational channels and news programmes, moreover, remain the most accessible source of information for elderly people and those with limited literacy. This enables television to function as a genuine public service rather than mere amusement.",
      body2: "However, television also causes harm, most notably through sedentary habits and distorted worldviews. Studies show that children who watch more than three hours daily are significantly more likely to be obese and to perform worse academically; the American Academy of Pediatrics links excessive screen time to sleep problems and attention difficulties. Advertising compounds the problem by promoting junk food directly to young audiences. For adults, constant exposure to crime coverage cultivates what researchers call mean world syndrome — a belief that society is far more dangerous than statistics justify. This leads to declining physical health, reduced family conversation and, in heavy viewers, anxiety and misperception of social reality.",
      conclusion: "In conclusion, television offers education and cultural cohesion but risks passivity, obesity and distorted perception. The answer lies in selective, limited viewing: households that treat it as an occasional shared activity rather than a constant background presence can keep its benefits while avoiding most of its documented harms."
    },
        fullParagraphsCN: {
      introduction: "自发明以来，电视一直主导着家庭娱乐。支持者重视它的教育和共享文化体验，批评者则指责它导致被动消费和健康损害。本文将考虑两种观点。",
      body1: "电视的主要优势在于它无与伦比的告知和团结大量观众的能力。例如，BBC《地球脉动》系列等自然纪录片把偏远的生态系统带进了全球千家万户的客厅，唤醒了一代人的环保意识，并推动了真实的政策变革——海洋污染的画面震撼观众后，多国出台了塑料袋禁令。重大直播还创造了全民共同时刻——估计有6亿人共同观看了1969年登月，奥运会、王室婚礼等活动至今仍在凝聚社会的集体体验。此外，教育频道和新闻节目仍然是老年人和识字有限者最容易获得的信息来源。这使得电视能够发挥真正的公共服务功能，而不仅仅是娱乐。",
      body2: "然而，电视也造成伤害，最显著的是久坐习惯和扭曲的世界观。研究表明，每天看电视超过三小时的儿童明显更可能肥胖，学业表现也更差；美国儿科学会把过度屏幕时间与睡眠问题和注意力困难联系起来。广告通过直接向年轻观众推销垃圾食品加剧了这一问题。对成年人来说，不断接触犯罪报道培养了研究人员所说的「Mean World Syndrome」（邪恶世界综合症）——一种认为社会比数据所证明的更危险的信念。这导致身体健康下降、家庭对话减少，以及在重度观众中出现焦虑和对社会现实的误解。",
      conclusion: "总之，电视提供了教育和文化凝聚力，但也带来了被动、肥胖和扭曲认知的风险。答案在于有选择、有限度地观看：把电视当作偶尔的共享活动而非持续的背景存在的家庭，能在避免大多数有记录的危害的同时，保留它的好处。"
    },
    vocabulary: [
      "sedentary",
      "passive consumption",
      "documentary",
      "shared experience",
      "obesity",
      "mean world syndrome",
      "public service broadcasting",
      "screen time",
      "worldview",
      "advertising"
    ]
  },
  {
    id: 58,
    title: "优缺点类 - 快餐",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of fast food.",
    structure: {
      introduction: "Fast food has become a global phenomenon, valued for [advantage] but criticised for [disadvantage]. This essay will examine both sides of the issue.",
      body1: "The primary advantage of fast food is [advantage]. For instance, [example]. Therefore, [benefit].",
      body2: "The most serious disadvantage is [disadvantage]. Research indicates that [evidence]. As a consequence, [negative outcome].",
      conclusion: "In conclusion, fast food provides [positive summary] at the cost of [negative summary]. A sensible approach is [recommendation]."
    },
    structureCN: {
      introduction: "快餐已成为全球现象，因[优点]而受到欢迎，也因[缺点]而受到批评。本文将审视这一问题的两面。",
      body1: "快餐的主要优点是[优点]。例如，[例子]。因此，[好处]。",
      body2: "最严重的缺点是[缺点]。研究表明，[证据]。因此，[负面结果]。",
      conclusion: "总之，快餐以[负面总结]为代价提供了[正面总结]。明智的做法是[建议]。"
    },
    fullParagraphs: {
      introduction: "Fast food has become a global phenomenon, valued for convenience and affordability but criticised for its health consequences. This essay will examine both sides of the issue.",
      body1: "The primary advantage of fast food is that it delivers cheap, predictable meals almost instantly. For instance, a single parent working two jobs can feed children a hot meal for a few dollars without an hour of cooking and washing up, which explains why drive-through windows cluster in low-income and time-poor neighbourhoods. The industry also provides mass employment: McDonald's alone employs roughly two million people worldwide, often giving teenagers their first work experience and flexible hours that fit around study. Standardised kitchens, moreover, guarantee hygiene and consistent quality in countries where street food safety is unreliable. Therefore, fast food fills a genuine economic and logistical niche that traditional restaurants cannot always serve.",
      body2: "The most serious disadvantage is the damage fast food inflicts on public health. Research indicates that a typical burger meal contains more than half of an adult's recommended daily calories, saturated fat and salt; the Global Burden of Disease study attributes millions of premature deaths annually to diets heavy in processed food. Countries that adopt Western fast food see obesity rates climb accordingly — Mexico's adult obesity rate approached 40 percent within a generation of the industry's rapid expansion there. Marketing targets children with toys and cartoon mascots, building habits that persist into adulthood. As a consequence, societies face epidemics of diabetes and heart disease, and healthcare systems bear costs that far exceed the savings at the till.",
      conclusion: "In conclusion, fast food provides unmatched convenience and affordability at the cost of long-term health damage. A sensible approach is moderation combined with smarter policy: occasional consumption harms nobody, while clearer calorie labelling, restrictions on child-targeted advertising and reformulated recipes can keep the industry's genuine benefits without letting it quietly tax public health."
    },
        fullParagraphsCN: {
      introduction: "快餐已成为一种全球现象，因其便利和价格实惠而受重视，又因其健康后果而受批评。本文将考察这一问题的正反两面。",
      body1: "快餐的主要优点是它几乎能立即提供便宜、可预测的餐食。例如，一个打两份工的单亲家长可以用几美元给孩子提供一顿热饭，而无需花一小时做饭和洗碗，这就解释了为什么免下车窗口聚集在低收入和时间匮乏的社区。该产业还提供大规模就业：仅麦当劳就在全球雇用了约200万人，常常给青少年提供第一份工作经验和适合学习的灵活工时。此外，标准化厨房在街头食品安全不可靠的国家保证了卫生和一致的质量。因此，快餐填补了传统餐馆无法始终服务的真正的经济和后勤缺口。",
      body2: "最严重的缺点是快餐对公共健康造成的损害。研究表明，一份典型的汉堡套餐含有成年人每日推荐摄入的一半以上的卡路里、饱和脂肪和盐；全球疾病负担研究把每年数百万过早死亡归因于重度加工食品的饮食。采用西方快餐的国家，肥胖率也相应攀升——墨西哥的成人肥胖率在该产业快速扩张后不到一代人就接近40%。营销用玩具和卡通吉祥物针对儿童，建立了延续到成年的习惯。因此，社会面临糖尿病和心脏病的流行，而医疗系统承担的成本远远超过了在收银台省下的钱。",
      conclusion: "总之，快餐以长期健康损害为代价，提供了无可比拟的便利和价格实惠。合理的做法是适度结合更明智的政策：偶尔食用对谁都无害，而更清晰的卡路里标签、限制针对儿童的广告以及改良配方，可以保留该产业真正的好处，同时不让它悄然加重公共健康负担。"
    },
    vocabulary: [
      "affordability",
      "obesity",
      "saturated fat",
      "processed food",
      "drive-through",
      "calorie labelling",
      "public health",
      "epidemic",
      "standardisation",
      "moderation"
    ]
  },
  {
    id: 59,
    title: "优缺点类 - 广告",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of advertising.",
    structure: {
      introduction: "Advertising surrounds us on every screen and street. Its advocates argue that it [advantage], whereas its opponents complain that it [disadvantage]. This essay will evaluate both claims.",
      body1: "The strongest argument in favour of advertising is [advantage]. A good example is [example]. This means [benefit].",
      body2: "The most common criticism is that advertising [disadvantage]. For example, [example]. Consequently, [negative outcome].",
      conclusion: "In conclusion, advertising plays a useful role in [positive summary] but also [negative summary]. The balance depends on [recommendation]."
    },
    structureCN: {
      introduction: "广告围绕着我们生活的每一块屏幕和每一条街道。支持者认为它[优点]，反对者则抱怨它[缺点]。本文将评估两种主张。",
      body1: "支持广告最有力的理由是[优点]。一个很好的例子是[例子]。这意味着[好处]。",
      body2: "最常见的批评是广告[缺点]。例如，[例子]。因此，[负面结果]。",
      conclusion: "总之，广告在[正面总结]方面发挥着有益作用，但也[负面总结]。平衡取决于[建议]。"
    },
    fullParagraphs: {
      introduction: "Advertising surrounds us on every screen and street. Its advocates argue that it informs consumers and funds free services, whereas its opponents complain that it manufactures artificial desires. This essay will evaluate both claims.",
      body1: "The strongest argument in favour of advertising is that it transmits useful information and finances much of the modern media. A good example is public awareness: campaigns about drink-driving, smoking and vaccination have measurably changed behaviour, and commercial advertising performs a similar service by telling consumers that cheaper or better products exist, forcing companies to compete on quality and price. Equally important, advertising pays for the services people enjoy free of charge — Google, YouTube, independent news sites and radio stations would all require subscriptions without it. Small businesses especially depend on targeted ads to find customers they could never reach otherwise. This means advertising lubricates the economy and sustains a diverse, accessible media landscape.",
      body2: "The most common criticism is that advertising manipulates emotions and creates unnecessary wants. For example, luxury brands sell watches and handbags not on function but on manufactured status anxiety, while beauty advertising profits from insecurity by presenting digitally altered bodies as normal. Children are especially vulnerable: research shows most cannot distinguish adverts from content until around age eight, yet they are exposed to thousands of marketing messages yearly, fuelling pester power and materialism. Online, behavioural targeting follows users across websites in ways few understand or consent to. Consequently, advertising contributes to overconsumption, debt, body image disorders and a culture that equates happiness with purchasing.",
      conclusion: "In conclusion, advertising plays a useful role in informing consumers and funding free media, but it also manipulates insecurities and drives overconsumption. The balance depends on regulation and literacy: banning advertising to young children, requiring honest labelling of edited images and teaching critical media skills would preserve its economic benefits while curbing its psychological harms."
    },
        fullParagraphsCN: {
      introduction: "广告在每一个屏幕和街道上包围着我们。它的倡导者认为它告知消费者并资助免费服务，而反对者则抱怨它制造了人为的欲望。本文将评估两种说法。",
      body1: "支持广告的最有力理由是，它传递有用的信息并资助了大部分现代媒体。一个很好的例子是公众意识宣传：关于酒驾、吸烟和疫苗接种的运动已显著改变了行为，而商业广告通过告诉消费者存在更便宜或更好的产品，迫使公司在质量和价格上竞争，也起到了类似的作用。同样重要的是，广告为人们免费享受的服务买单——没有它，谷歌、YouTube、独立新闻网站和电台都需要订阅。小企业尤其依赖定向广告来找到它们原本无法触及的顾客。这意味着广告润滑了经济，并维持了一个多元化、可及的媒体格局。",
      body2: "最常见的批评是，广告操纵情感并制造不必要的欲望。例如，奢侈品牌销售手表和手袋时，靠的不是功能，而是人为制造的身份焦虑；而美容广告通过把数字修改过的身体呈现为常态来从不安全感中获利。儿童尤其脆弱：研究显示，大多数孩子在八岁左右之前无法区分广告和内容，却每年接触到数千条营销信息，助长了「纠缠力」和物质主义。在网上，行为定向在用户几乎不理解或不同意的情况下跨网站追踪他们。因此，广告助长了过度消费、债务、身体形象障碍，以及一种把幸福等同于购买的文化。",
      conclusion: "总之，广告在告知消费者和资助免费媒体方面发挥了有益作用，但它也操纵不安全感并驱动过度消费。平衡取决于监管和素养：禁止向幼儿做广告、要求对编辑过的图像如实标注，以及教授批判性媒体技能，可以在遏制其心理危害的同时，保留其经济效益。"
    },
    vocabulary: [
      "consumerism",
      "targeted advertising",
      "status anxiety",
      "manipulation",
      "public awareness campaign",
      "materialism",
      "overconsumption",
      "behavioural targeting",
      "media literacy",
      "pester power"
    ]
  },
  {
    id: 60,
    title: "优缺点类 - 移民",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of immigration for both the host country and the immigrants' home countries.",
    structure: {
      introduction: "Immigration is one of the defining phenomena of our era. It brings [advantage], yet it also raises concerns about [disadvantage]. This essay will discuss both aspects.",
      body1: "For host countries, the clearest benefit is [advantage]. For example, [example]. This results in [benefit].",
      body2: "However, immigration also creates difficulties, including [disadvantage]. For instance, [example]. This may lead to [negative outcome].",
      conclusion: "In conclusion, immigration offers [positive summary] but poses [negative summary]. Successful outcomes require [recommendation]."
    },
    structureCN: {
      introduction: "移民是我们这个时代最具定义性的现象之一。它带来[优点]，但也引发对[缺点]的担忧。本文将讨论两个方面。",
      body1: "对接收国而言，最明显的好处是[优点]。例如，[例子]。这带来[好处]。",
      body2: "然而，移民也造成困难，包括[缺点]。例如，[例子]。这可能导致[负面结果]。",
      conclusion: "总之，移民提供[正面总结]，但带来[负面总结]。成功的结果需要[建议]。"
    },
    fullParagraphs: {
      introduction: "Immigration is one of the defining phenomena of our era. It brings economic dynamism and cultural enrichment, yet it also raises concerns about integration and brain drain. This essay will discuss both aspects.",
      body1: "For host countries, the clearest benefit is that immigrants fill labour shortages and drive innovation. For example, the United States' technology sector was built substantially by immigrants — Sergey Brin co-founded Google after emigrating from Russia, and studies show immigrants or their children founded more than 40 percent of Fortune 500 companies. Ageing societies gain even more: Germany and Canada actively recruit foreign nurses and care workers because domestic workforces cannot support growing elderly populations. Immigrants also pay taxes, start businesses at higher rates than natives and revitalise declining neighbourhoods. For migrants' home countries, remittances matter enormously — the World Bank estimates they exceeded 600 billion dollars in 2022, dwarfing foreign aid and directly funding education and housing in countries like Nepal and the Philippines.",
      body2: "However, immigration also creates difficulties, including pressure on public services and integration challenges. For instance, rapid arrivals can strain housing, schools and hospitals faster than governments expand them, as Sweden discovered after accepting large numbers of refugees in 2015, when waiting lists lengthened and public support for immigration fell sharply. Language barriers and discrimination can confine newcomers to low-paid work despite their qualifications, breeding frustration on both sides. Meanwhile, home countries suffer brain drain: sub-Saharan Africa loses thousands of desperately needed doctors and nurses to wealthy health systems each year. This may lead to social tension in destination countries and hollowed-out public services in origin countries.",
      conclusion: "In conclusion, immigration offers economic vitality and cross-cultural exchange but poses integration pressures and brain drain. Successful outcomes require active policy: language training, credential recognition, housing investment and circular migration programmes that let skills flow back home. Managed well, it enriches both societies; managed passively, it strains both."
    },
        fullParagraphsCN: {
      introduction: "移民是我们这个时代的决定性现象之一。它带来了经济活力和文化丰富，但也引发了关于融合和人才流失的担忧。本文将讨论两个方面。",
      body1: "对接收国来说，最明显的好处是移民填补了劳动力短缺并推动创新。例如，美国的科技部门很大程度上是由移民建立的——谢尔盖·布林从俄罗斯移民后共同创立了谷歌，研究表明，财富500强公司中超过40%由移民或其子女创立。老龄化社会获益更多：德国和加拿大积极招募外国护士和护理人员，因为国内劳动力无法支撑日益增长的老年人口。移民还纳税、创业率高于本地人，并振兴衰落的社区。对移民的母国来说，汇款至关重要——世界银行估计2022年汇款超过6000亿美元，远超外国援助，直接资助了尼泊尔和菲律宾等国的教育和住房。",
      body2: "然而，移民也造成了困难，包括对公共服务的压力和融合挑战。例如，快速到来的移民可能比政府扩大服务的速度更快地给住房、学校和医院带来压力，正如瑞典在2015年接收大量难民后发现的那样——当时等待名单变长，公众对移民的支持急剧下降。语言障碍和歧视可能把新来者限制在低薪工作中，尽管他们有资历，这在双方都滋生了挫败感。与此同时，母国遭受人才流失：撒哈拉以南非洲每年有数千名急需的医生和护士流向富裕国家的医疗体系。这可能导致目的地国的社会紧张，以及来源国公共服务的空心化。",
      conclusion: "总之，移民带来了经济活力和跨文化交流，但也带来了融合压力和人才流失。成功的结果需要积极的政策：语言培训、学历认证、住房投资，以及让技能回流祖国的循环移民计划。管理得当，它能让两个社会都受益；被动管理，它会让两个社会都紧张。"
    },
    vocabulary: [
      "brain drain",
      "remittance",
      "integration",
      "labour shortage",
      "cultural enrichment",
      "credential recognition",
      "Fortune 500",
      "circular migration",
      "public services",
      "diaspora"
    ]
  },
  {
    id: 61,
    title: "优缺点类 - 教育科技",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of using technology in education.",
    structure: {
      introduction: "Technology has entered classrooms at every level, bringing [advantage] but also raising concerns about [disadvantage]. This essay will examine both effects.",
      body1: "The greatest educational benefit of technology is [advantage]. For example, [example]. As a result, [benefit].",
      body2: "Nevertheless, technology in education has drawbacks, above all [disadvantage]. For instance, [example]. This can cause [negative outcome].",
      conclusion: "In conclusion, educational technology offers [positive summary] but threatens [negative summary]. The best approach is [recommendation]."
    },
    structureCN: {
      introduction: "科技已进入各级课堂，带来[优点]，但也引发对[缺点]的担忧。本文将审视两种影响。",
      body1: "科技在教育中最大的好处是[优点]。例如，[例子]。因此，[好处]。",
      body2: "然而，教育科技也有缺点，最重要的是[缺点]。例如，[例子]。这可能导致[负面结果]。",
      conclusion: "总之，教育科技提供[正面总结]，但威胁[负面总结]。最佳做法是[建议]。"
    },
    fullParagraphs: {
      introduction: "Technology has entered classrooms at every level, bringing personalised learning and global access but also raising concerns about distraction and inequality. This essay will examine both effects.",
      body1: "The greatest educational benefit of technology is that it adapts teaching to each student and demolishes geographical barriers. For example, adaptive platforms such as Khan Academy analyse which exercises a pupil gets wrong and automatically adjust difficulty, so a struggling learner receives extra practice while an advanced one races ahead — something no teacher facing forty students can replicate. During the COVID-19 lockdowns, video conferencing kept schooling alive for over a billion children, and recorded lectures let students in remote villages access the same instruction as those in capital cities. As a result, well-designed educational technology can narrow learning gaps, support disabled students with text-to-speech tools and free teachers to focus on mentoring rather than lecturing.",
      body2: "Nevertheless, technology in education has drawbacks, above all distraction and the digital divide. For instance, studies by the OECD found that students who used computers intensively at school performed worse in reading than moderate users, partly because devices invite multitasking — a pupil ostensibly taking notes may actually be messaging friends. Screen-based learning also weakens handwriting and deep reading habits that underpin sustained concentration. Most seriously, expensive devices and fast connections are not universal: during the pandemic, pupils without laptops or stable internet simply disappeared from virtual classrooms, and UNESCO estimates hundreds of millions lacked any access to remote learning. This can cause existing achievement gaps between rich and poor students to widen dramatically.",
      conclusion: "In conclusion, educational technology offers personalisation and access but threatens concentration and equality. The best approach is purposeful integration: devices should serve clear pedagogical goals, screen time should be balanced with books and discussion, and governments must guarantee baseline connectivity for all families. Used as a disciplined tool rather than a substitute teacher, technology amplifies good education; used carelessly, it undermines it."
    },
        fullParagraphsCN: {
      introduction: "科技已进入各个层级的课堂，带来了个性化学习和全球访问，但也引发了关于分心和不平等的担忧。本文将考察两种影响。",
      body1: "科技在教育中最大的好处是它能让教学适应每个学生，并拆除地理壁垒。例如，可汗学院等自适应平台会分析学生做错的题目并自动调整难度，让跟不上的学生获得额外练习，让学得快的学生加速前进——这是面对四十名学生的老师无法复制的。新冠封控期间，视频会议让超过十亿儿童的学业得以延续，录播课程让偏远村庄的学生获得与首都学生相同的教学内容。因此，设计良好的教育科技可以缩小学习差距，用语音转文字工具支持残障学生，并把教师从照本宣科中解放出来专注于辅导。",
      body2: "然而，教育中的科技也有缺点，最重要的是分心和数字鸿沟。例如，经合组织的研究发现，在学校密集使用电脑的学生在阅读方面的表现不如适度使用者，部分原因是设备会让人分心——一个表面上在记笔记的学生可能实际上在给朋友发消息。基于屏幕的学习还削弱了支撑持续专注的手写和深度阅读习惯。最严重的是，昂贵的设备和快速的网络并非人人都有：疫情期间，没有笔记本电脑或稳定互联网的学生干脆从虚拟课堂中消失了，联合国教科文组织估计有数亿人完全无法获得远程学习。这可能导致贫富学生之间现有的成绩差距急剧扩大。",
      conclusion: "总之，教育科技提供了个性化和可及性，但也威胁到专注力和平等。最佳方法是有目的的整合：设备应服务于明确的教学目标，屏幕时间应与书籍和讨论相平衡，政府必须保证所有家庭的基本网络连接。作为有纪律的工具而非代课老师来使用，科技能放大良好的教育；轻率地使用，则会削弱教育。"
    },
    vocabulary: [
      "adaptive learning",
      "digital divide",
      "personalised learning",
      "multitasking",
      "educational equity",
      "remote learning",
      "pedagogical",
      "text-to-speech",
      "achievement gap",
      "screen-based learning"
    ]
  },
  {
    id: 62,
    title: "优缺点类 - 可再生能源",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of renewable energy sources such as solar and wind power.",
    structure: {
      introduction: "As climate concerns intensify, renewable energy is replacing fossil fuels worldwide. While renewables offer [advantage], they also present [disadvantage]. This essay will assess both.",
      body1: "The principal advantage of renewable energy is [advantage]. For example, [example]. This leads to [benefit].",
      body2: "The main disadvantage is [disadvantage]. For instance, [example]. Consequently, [negative outcome].",
      conclusion: "In conclusion, renewables deliver [positive summary] despite [negative summary]. The sensible path is [recommendation]."
    },
    structureCN: {
      introduction: "随着气候担忧加剧，可再生能源正在全球范围内取代化石燃料。尽管可再生能源提供[优点]，但也存在[缺点]。本文将评估两者。",
      body1: "可再生能源的主要优点是[优点]。例如，[例子]。这带来[好处]。",
      body2: "主要缺点是[缺点]。例如，[例子]。因此，[负面结果]。",
      conclusion: "总之，尽管有[负面总结]，可再生能源仍带来[正面总结]。明智的路径是[建议]。"
    },
    fullParagraphs: {
      introduction: "As climate concerns intensify, renewable energy is replacing fossil fuels worldwide. While renewables offer clean power and falling costs, they also present intermittency and land-use challenges. This essay will assess both.",
      body1: "The principal advantage of renewable energy is that it generates electricity without fuel costs or carbon emissions, and its price keeps falling. For example, the cost of solar power dropped by roughly 90 percent between 2010 and 2023, making it the cheapest source of new electricity in most of the world according to the International Energy Agency. Denmark already generates more than half of its electricity from wind, and Uruguay shifted nearly its entire grid to renewables within a decade, cutting both emissions and import bills. Renewable installations also create manufacturing and maintenance jobs that cannot be outsourced, and rooftop solar gives households independence from volatile energy markets. This leads to cleaner air, greater energy security and protection from the geopolitical shocks that fossil fuel dependence invites.",
      body2: "The main disadvantage is intermittency: the sun does not always shine and the wind does not always blow. For instance, during calm winter evenings, Germany's massive wind fleet sometimes produces almost nothing, forcing the country to restart coal plants or import nuclear power from France, while South Australia suffered blackouts in 2016 when storms damaged transmission infrastructure. Storing energy at scale remains expensive — batteries cover hours, not weeks — and vast solar farms and wind turbines consume land and can harm bird populations and landscapes. Mining lithium, cobalt and rare earths for batteries and turbines also creates pollution and human rights concerns in producer countries. Consequently, a renewables-only grid still requires backup capacity and storage that add hidden costs.",
      conclusion: "In conclusion, renewables deliver clean, increasingly cheap energy despite intermittency and material demands. The sensible path is a managed transition: invest in grid-scale storage and interconnectors, keep diverse backup sources available, and recycle battery materials, so that the clear environmental benefits are captured without gambling on reliability."
    },
        fullParagraphsCN: {
      introduction: "随着气候问题加剧，可再生能源正在全球范围内取代化石燃料。虽然可再生能源提供了清洁电力和不断下降的成本，但它也带来了间歇性和土地使用的挑战。本文将评估两者。",
      body1: "可再生能源的主要优点是它在没有燃料成本或碳排放的情况下发电，而且价格持续下降。例如，太阳能的成本在2010年至2023年间下降了约90%，据国际能源署称，这使它成为世界大部分地区最便宜的新增电力来源。丹麦已经有一半以上的电力来自风能，乌拉圭在十年内几乎把整个电网转向了可再生能源，同时削减了排放和进口账单。可再生能源装置还创造了无法外包的制造和维护岗位，而屋顶太阳能让家庭摆脱了波动的能源市场。这带来了更清洁的空气、更强的能源安全，以及免于化石燃料依赖所招致的地缘政治冲击。",
      body2: "主要的缺点是间歇性：太阳并不总是照耀，风也不总是吹。例如，在平静的冬夜，德国庞大的风电车队有时几乎不发电，迫使该国重启燃煤电厂或从法国进口核电；而南澳大利亚在2016年暴风雨损坏输电基础设施时遭遇了停电。大规模储能仍然昂贵——电池只能覆盖数小时而非数周——而庞大的太阳能农场和风力涡轮机消耗土地，并可能伤害鸟类种群和景观。为电池和涡轮机开采锂、钴和稀土，也在生产国造成了污染和人权问题。因此，纯可再生能源电网仍需要备用容量和储能，这增加了隐性成本。",
      conclusion: "总之，尽管存在间歇性和材料需求，可再生能源提供了清洁且日益廉价的能源。明智的道路是有管理的转型：投资于电网级储能和互联器、保持多元化的备用来源、回收电池材料，这样既能获取明确的环境效益，又不会在可靠性上冒险。"
    },
    vocabulary: [
      "intermittency",
      "grid-scale storage",
      "carbon emissions",
      "energy security",
      "rare earths",
      "fossil fuel dependence",
      "transmission infrastructure",
      "rooftop solar",
      "backup capacity",
      "energy transition"
    ]
  },
  {
    id: 63,
    title: "优缺点类 - 全球食品贸易",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of the global food trade, where food is transported thousands of miles before it is eaten.",
    structure: {
      introduction: "Modern supermarkets stock food from every corner of the planet. This global food trade provides [advantage], yet it also creates [disadvantage]. This essay will discuss both.",
      body1: "The chief benefit of the global food trade is [advantage]. A clear example is [example]. This allows [benefit].",
      body2: "Its most serious drawback is [disadvantage]. For instance, [example]. This results in [negative outcome].",
      conclusion: "In conclusion, global food trade gives [positive summary] but costs [negative summary]. A balanced policy would [recommendation]."
    },
    structureCN: {
      introduction: "现代超市的货架上摆满来自地球每个角落的食品。这种全球食品贸易提供了[优点]，但也产生了[缺点]。本文将讨论两者。",
      body1: "全球食品贸易的主要好处是[优点]。一个明显的例子是[例子]。这使得[好处]。",
      body2: "它最严重的缺点是[缺点]。例如，[例子]。这导致[负面结果]。",
      conclusion: "总之，全球食品贸易带来[正面总结]，但付出了[负面总结]的代价。平衡的政策应当[建议]。"
    },
    fullParagraphs: {
      introduction: "Modern supermarkets stock food from every corner of the planet. This global food trade provides variety, low prices and food security, yet it also creates emissions and fragile supply chains. This essay will discuss both.",
      body1: "The chief benefit of the global food trade is that it feeds people regardless of season or local conditions. A clear example is Northern Europe, where fresh vegetables would vanish for half the year without imports: British consumers eat Spanish tomatoes in January, while Middle Eastern countries with almost no farmland, such as the United Arab Emirates, feed entire populations through trade. Specialisation also lowers prices — regions grow what suits their climate best, from New Zealand lamb to Thai rice, and global competition keeps costs down. Crucially, trade provides insurance: when drought or flood destroys a national harvest, imports prevent famine. This allows diets to be more varied, nutritious and affordable than any single country could manage alone.",
      body2: "Its most serious drawback is environmental cost and systemic fragility. For instance, air-freighted asparagus and perishable berries generate dozens of times more emissions per kilogram than local seasonal produce, and the food system as a whole accounts for roughly a third of global greenhouse gases. Long supply chains also break: when Russia invaded Ukraine in 2022, wheat exports collapsed and bread prices spiked from Egypt to Bangladesh, showing how dependent nations are on a few exporters. Small farmers in developing countries, meanwhile, compete against subsidised industrial agriculture and volatile world prices, and many abandon their land. This results in unnecessary emissions, vulnerability to distant shocks and the hollowing out of local food cultures.",
      conclusion: "In conclusion, global food trade gives us variety, affordability and famine insurance but costs the climate and creates dependency. A balanced policy would favour regional supply for staples and seasonal produce, reserve long-distance trade for genuinely scarce goods, and invest in storage and diverse sourcing, so that efficiency never overrides resilience."
    },
        fullParagraphsCN: {
      introduction: "现代超市库存着来自地球每个角落的食品。这种全球食品贸易提供了多样性、低价格和粮食安全，但也造成了排放和脆弱的供应链。本文将讨论两者。",
      body1: "全球食品贸易的主要好处是，无论季节或当地条件如何，它都能养活人们。一个明显的例子是北欧：如果没有进口，新鲜蔬菜在半年内都会消失；英国消费者在一月吃西班牙的西红柿，而阿联酋等几乎没有农田的中东国家通过贸易养活了全部人口。专业化也降低了价格——各地区种植最适合其气候的作物，从新西兰的羊肉到泰国的大米，全球竞争使成本保持低位。至关重要的是，贸易提供了保险：当干旱或洪水摧毁一国的收成时，进口能防止饥荒。这使饮食比任何单个国家独自管理时更多样、更有营养、更实惠。",
      body2: "它最严重的缺点是环境成本和系统性脆弱性。例如，空运的芦笋和易腐烂的浆果每公斤产生的排放是当地当季产品的几十倍，而食品系统整体约占全球温室气体的三分之一。长供应链也会断裂：2022年俄罗斯入侵乌克兰时，小麦出口崩溃，从埃及到孟加拉国的面包价格飙升，显示各国对少数出口国的依赖程度。与此同时，发展中国家的小农户与补贴的工业化农业和波动的世界价格竞争，许多人放弃了土地。这导致不必要的排放、对远方冲击的脆弱性，以及本土饮食文化的空心化。",
      conclusion: "总之，全球食品贸易给我们带来了多样性、可负担性和饥荒保险，但代价是气候和依赖性。平衡的政策应当倾向于主食和季节性产品的区域供应，把长距离贸易留给真正稀缺的商品，并投资于仓储和多元化采购，使效率永远不会凌驾于韧性之上。"
    },
    vocabulary: [
      "food miles",
      "supply chain fragility",
      "seasonal produce",
      "food security",
      "air-freighted",
      "specialisation",
      "greenhouse gas emissions",
      "staples",
      "food sovereignty",
      "resilience"
    ]
  },
  {
    id: 64,
    title: "优缺点类 - 外包",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of companies outsourcing work to other countries.",
    structure: {
      introduction: "Outsourcing has become a standard business strategy. Companies pursue it for [advantage], but it is criticised for [disadvantage]. This essay will examine both sides.",
      body1: "The primary advantage of outsourcing is [advantage]. For example, [example]. This enables [benefit].",
      body2: "The most significant disadvantage is [disadvantage]. For instance, [example]. This can lead to [negative outcome].",
      conclusion: "In conclusion, outsourcing offers [positive summary] at the risk of [negative summary]. Companies should [recommendation]."
    },
    structureCN: {
      introduction: "外包已成为标准的商业战略。企业追求它以获得[优点]，但它也因[缺点]而受到批评。本文将审视两面。",
      body1: "外包的主要优点是[优点]。例如，[例子]。这使得[好处]。",
      body2: "最显著的缺点是[缺点]。例如，[例子]。这可能导致[负面结果]。",
      conclusion: "总之，外包提供[正面总结]，但有[负面总结]的风险。企业应当[建议]。"
    },
    fullParagraphs: {
      introduction: "Outsourcing has become a standard business strategy. Companies pursue it for cost savings and global talent, but it is criticised for domestic job losses and quality risks. This essay will examine both sides.",
      body1: "The primary advantage of outsourcing is dramatic cost reduction combined with access to scarce skills. For example, when a British bank moves its customer service centre to the Philippines or its software development to Poland, labour costs can fall by half or more, savings that fund lower prices, higher profits or further investment. India's technology sector illustrates the upside for receiving countries: firms like Infosys and TCS employ hundreds of thousands of well-paid engineers serving clients worldwide, and the industry transformed cities such as Bangalore into global hubs. Time zones can even become an asset — a project handed from London to Sydney at day's end keeps moving overnight. This enables companies to compete internationally while channelling income into developing economies.",
      body2: "The most significant disadvantage is the destruction of domestic jobs and the loss of control over quality. For instance, when American manufacturers shifted production to Mexico and China, entire towns in states like Ohio and Michigan lost their economic foundations; research by economist David Autor links this China shock to lasting unemployment and social decline in affected regions. Service outsourcing carries its own risks: customers struggle with call centres staffed by agents reading scripts, and several airlines and banks have brought operations back home after quality complaints damaged their brands. Data security is another concern, since sensitive information crosses borders into jurisdictions with different privacy rules. This can lead to hollowed-out communities at home, frustrated customers abroad and political backlash against trade itself.",
      conclusion: "In conclusion, outsourcing offers efficiency and shared prosperity at the risk of domestic dislocation and quality erosion. Companies should outsource selectively — keeping core expertise and customer-critical functions in-house — while governments invest in retraining so that displaced workers move into the higher-value jobs a globalised economy still creates."
    },
        fullParagraphsCN: {
      introduction: "外包已成为一种标准的商业策略。公司追求它是为了节省成本和获取全球人才，但它也因国内就业流失和质量风险而受到批评。本文将考察正反两面。",
      body1: "外包的主要优点是大幅降低成本，同时获得稀缺技能。例如，当一家英国银行把客户服务中心迁往菲律宾或把软件开发迁往波兰时，劳动力成本可能下降一半或更多，节省下来的资金可用于降低价格、提高利润或进一步投资。印度的科技部门说明了接收国的好处：Infosys和TCS等公司雇用了数十万高薪工程师，为全球客户服务，该行业把班加罗尔等城市变成了全球中心。时区甚至可以成为资产——一个在一天结束时从伦敦交给悉尼的项目可以在夜间继续推进。这使公司能够在国际上竞争，同时把收入引入发展中经济体。",
      body2: "最显著的缺点是国内就业的摧毁和对质量控制的丧失。例如，当美国制造商把生产转移到墨西哥和中国时，俄亥俄州和密歇根州等州的整个城镇失去了经济基础；经济学家大卫·奥托的研究把这种「中国冲击」与受影响地区的持久失业和社会衰退联系起来。服务外包也有其自身的风险：客户与照着脚本念的客服人员打交道感到困难，几家航空公司和银行在质量投诉损害品牌后把业务迁回了国内。数据安全是另一个问题，因为敏感信息跨越国界进入隐私规则不同的司法管辖区。这可能导致国内社区空心化、海外客户不满，以及对贸易本身的政治反弹。",
      conclusion: "总之，外包以国内动荡和质量侵蚀为风险，提供了效率和共享繁荣。公司应当有选择地外包——把核心专长和对客户至关重要的职能留在内部——而政府应投资于再培训，使被替代的工人进入全球化经济仍然创造的高价值岗位。"
    },
    vocabulary: [
      "cost reduction",
      "job displacement",
      "call centre",
      "offshoring",
      "China shock",
      "retraining",
      "data security",
      "labour costs",
      "core expertise",
      "political backlash"
    ]
  },
  {
    id: 65,
    title: "优缺点类 - 社交媒体营销",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of using social media for marketing.",
    structure: {
      introduction: "Social media has become an essential marketing channel. It promises [advantage], but it also entails [disadvantage]. This essay will evaluate both.",
      body1: "The greatest marketing advantage of social media is [advantage]. A good example is [example]. This means [benefit].",
      body2: "Its most dangerous disadvantage is [disadvantage]. For example, [example]. This can result in [negative outcome].",
      conclusion: "In conclusion, social media marketing delivers [positive summary] but demands [negative summary]. Success requires [recommendation]."
    },
    structureCN: {
      introduction: "社交媒体已成为必不可少的营销渠道。它承诺[优点]，但也伴随着[缺点]。本文将评估两者。",
      body1: "社交媒体营销最大的优点是[优点]。一个很好的例子是[例子]。这意味着[好处]。",
      body2: "它最危险的缺点是[缺点]。例如，[例子]。这可能导致[负面结果]。",
      conclusion: "总之，社交媒体营销带来[正面总结]，但需要面对[负面总结]。成功需要[建议]。"
    },
    fullParagraphs: {
      introduction: "Social media has become an essential marketing channel. It promises precise targeting and direct customer relationships, but it also entails reputational volatility and dependence on algorithms. This essay will evaluate both.",
      body1: "The greatest marketing advantage of social media is that it lets even tiny businesses reach exactly the right customers at minimal cost. A good example is the rise of direct-to-consumer brands: companies like Gymshark grew from a garage operation to a billion-pound business almost entirely through Instagram influencers and community content, without ever buying a television advertisement. Platforms' targeting tools allow a neighbourhood bakery to advertise only to users within five kilometres who follow baking accounts, something no billboard or newspaper could offer. Social channels also create two-way relationships — customers comment, share and defend brands they love, generating authentic word-of-mouth at scale. This means marketing budgets stretch further and customer loyalty deepens when the conversation feels genuine.",
      body2: "Its most dangerous disadvantage is that brands lose control of their own narrative and become hostages to platform rules. For example, a single critical video can go viral and erase years of brand building overnight, as United Airlines discovered in 2017 when footage of a passenger being dragged from a flight was viewed hundreds of millions of times and its market value briefly fell by nearly a billion dollars. Meanwhile, organic reach has steadily collapsed — Facebook pages that once reached most followers now reach a few percent unless the company pays — so supposed free marketing becomes an escalating advertising bill. Algorithm changes can destroy a business model overnight, and influencer partnerships risk association with personal scandals. This can result in fragile visibility, unpredictable costs and reputational crises beyond any marketing team's control.",
      conclusion: "In conclusion, social media marketing delivers unmatched targeting and engagement but demands constant vigilance against volatility. Success requires treating it as one channel among several: brands should build owned audiences through email lists and websites, monitor sentiment continuously, and never let a rented platform become their only home."
    },
        fullParagraphsCN: {
      introduction: "社交媒体已成为必不可少的营销渠道。它有望实现精准定位和直接的客户关系，但也伴随着声誉波动和对算法的依赖。本文将评估两者。",
      body1: "社交媒体最大的营销优势是，它让哪怕是微小的企业也能以最低成本找到恰恰合适的顾客。一个很好的例子是直销品牌的崛起：Gymshark等公司几乎完全通过Instagram网红和社区内容，从车库运营成长为价值十亿英镑的企业，从未购买过电视广告。平台的定位工具让一家邻里面包店能只向五公里内关注烘焙账号的用户做广告，这是任何广告牌或报纸都无法提供的。社交渠道还创造了双向关系——客户评论、分享并捍卫他们喜爱的品牌，规模化地产生真实的口碑。这意味着营销预算能延伸得更远，而当对话感觉真诚时，客户忠诚度也会加深。",
      body2: "它最危险的缺点是，品牌失去了对自身叙事的控制，成为平台规则的人质。例如，一条批判性视频可能病毒式传播，一夜之间抹去多年的品牌建设，正如联合航空在2017年发现的那样——一名乘客被拖下飞机的视频被观看了数亿次，其市值一度下跌了近十亿美元。与此同时，自然覆盖率稳步下降——曾经能触达大多数粉丝的Facebook主页，现在除非公司付费，否则只能触达几个百分点——所以所谓的免费营销变成了不断攀升的广告账单。算法变化可能一夜之间摧毁一种商业模式，而网红合作则可能因个人丑闻而受到牵连。这可能导致脆弱的可见性、不可预测的成本，以及任何营销团队都无法控制的声誉危机。",
      conclusion: "总之，社交媒体营销提供了无与伦比的定位和参与度，但需要对波动保持持续警惕。成功要求把它当作众多渠道之一：品牌应通过邮件列表和网站建立自有受众，持续监控情绪，并永远不要让一个租来的平台成为自己唯一的家园。"
    },
    vocabulary: [
      "targeting",
      "influencer",
      "organic reach",
      "brand loyalty",
      "viral",
      "reputational crisis",
      "word-of-mouth",
      "algorithm",
      "direct-to-consumer",
      "engagement"
    ]
  },
  {
    id: 66,
    title: "问题解决类 - 空气污染",
    type: "problem/solution",
    topic: "Air pollution is a serious problem in many cities. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Air pollution has become one of the most urgent urban challenges. This essay will examine its main causes, namely [cause1] and [cause2], and propose solutions including [solution1] and [solution2].",
      body1: "The problem stems primarily from [cause1]. For example, [example]. In addition, [cause2] also contributes significantly, as [explanation].",
      body2: "To tackle this issue, governments should [solution1]. This would [effect]. Moreover, [solution2] can also help by [mechanism].",
      conclusion: "In conclusion, although air pollution results from [causes summary], a combination of [solutions summary] can substantially improve urban air quality."
    },
    structureCN: {
      introduction: "空气污染已成为最紧迫的城市挑战之一。本文将审视其主要原因，即[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的对策。",
      body1: "该问题主要源于[原因1]。例如，[例子]。此外，[原因2]也有重要贡献，因为[解释]。",
      body2: "为解决这一问题，政府应当[解决方案1]。这将[效果]。此外，[解决方案2]也能通过[机制]发挥作用。",
      conclusion: "总之，尽管空气污染源于[原因总结]，但通过[解决方案总结]的组合可以显著改善城市空气质量。"
    },
    fullParagraphs: {
      introduction: "Air pollution has become one of the most urgent urban challenges. The World Health Organization estimates that outdoor air pollution causes over four million premature deaths annually, and in cities like Delhi winter smog regularly pushes particulate levels to twenty times the safe limit. This essay will examine its main causes, namely vehicle emissions and coal-based industry, and propose solutions including clean public transport and stricter industrial regulation.",
      body1: "The problem stems primarily from the explosive growth of private vehicles powered by fossil fuels. For example, Beijing's car fleet grew from under two million in 2000 to over six million today, and traffic exhaust accounts for roughly a third of the city's PM2.5 on windless days. In addition, coal-fired power plants and heavy industry contribute significantly: in northern China and in India's industrial belt, winter heating and factory output release sulphur dioxide and fine particles that drift across entire regions, meaning even cities with clean local policies suffer imported smog.",
      body2: "To tackle this issue, governments should invest massively in clean public transport while restricting private car use. London's Ultra Low Emission Zone, which charges the dirtiest vehicles, cut roadside nitrogen dioxide by almost half within four years, and Shenzhen has electrified its entire fleet of 16,000 buses. Moreover, stricter industrial regulation can help by forcing factories to install scrubbers and by accelerating the shift from coal to renewables, as China's cap-and-trade programme and plant closures demonstrate. Congestion pricing, cycling infrastructure and green building standards reinforce these gains.",
      conclusion: "In conclusion, although air pollution results from vehicle emissions and coal-based industry, a combination of clean public transport and enforced industrial standards can substantially improve urban air quality. The experience of London, Shenzhen and Beijing shows that determined policy produces measurable results within years rather than decades."
    },
        fullParagraphsCN: {
      introduction: "空气污染已成为最紧迫的城市挑战之一。世界卫生组织估计，室外空气污染每年导致超过400万人过早死亡，而在德里等城市，冬季雾霾经常使颗粒物水平达到安全限值的二十倍。本文将考察其主要原因，即机动车排放和以煤炭为基础的工业，并提出包括清洁公共交通和更严格工业监管在内的解决方案。",
      body1: "这一问题主要源于以化石燃料为动力的私家车的爆炸式增长。例如，北京的汽车保有量从2000年的不到200万辆增长到如今的600多万辆，在无风天，交通尾气约占该市PM2.5的三分之一。此外，燃煤电厂和重工业贡献显著：在中国北方和印度的工业带，冬季取暖和工厂排放释放出二氧化硫和细颗粒物，飘散到整个地区，这意味着即使是当地政策清洁的城市也遭受输入性雾霾。",
      body2: "为解决这一问题，政府应当大力投资清洁公共交通，同时限制私家车使用。伦敦的超低排放区对污染最严重的车辆收费，四年内使路边二氧化氮减少了近一半；深圳已将其全部1.6万辆公交车电动化。此外，更严格的工业监管也能发挥作用，例如强制工厂安装脱硫设备，并加速从煤炭向可再生能源转型，中国的碳交易试点和关停高污染工厂就是证明。拥堵收费、自行车基础设施和绿色建筑标准则能巩固这些成效。",
      conclusion: "总之，虽然空气污染源于机动车排放和以煤炭为基础的工业，但清洁公共交通与强制执行的工业标准相结合，可以大幅改善城市空气质量。伦敦、深圳和北京的经验表明，坚定的政策能在数年内而非数十年内产生可衡量的成果。"
    },
    vocabulary: [
      "particulate matter",
      "vehicle emissions",
      "coal-fired power",
      "congestion pricing",
      "ultra low emission zone",
      "scrubber",
      "premature deaths",
      "smog",
      "electrify",
      "cap-and-trade"
    ]
  },
  {
    id: 67,
    title: "问题解决类 - 交通拥堵",
    type: "problem/solution",
    topic: "Traffic congestion is a major problem in many urban areas. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Traffic congestion wastes billions of hours in cities worldwide. This essay will identify its root causes, including [cause1] and [cause2], and suggest remedies such as [solution1] and [solution2].",
      body1: "The first major cause is [cause1]. For instance, [example]. Secondly, [cause2] worsens the situation because [explanation].",
      body2: "Several measures can alleviate congestion. The most effective is [solution1], which [effect]. Another useful approach is [solution2], which works by [mechanism].",
      conclusion: "In conclusion, congestion arises from [causes summary], but cities that adopt [solutions summary] have shown that gridlock is not inevitable."
    },
    structureCN: {
      introduction: "交通拥堵在全球城市浪费了数十亿小时。本文将找出其根本原因，包括[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等补救措施。",
      body1: "第一个主要原因是[原因1]。例如，[例子]。其次，[原因2]使情况恶化，因为[解释]。",
      body2: "一些措施可以缓解拥堵。最有效的是[解决方案1]，它[效果]。另一个有用的方法是[解决方案2]，它通过[机制]发挥作用。",
      conclusion: "总之，拥堵源于[原因总结]，但采取[解决方案总结]的城市已经证明，交通瘫痪并非不可避免。"
    },
    fullParagraphs: {
      introduction: "Traffic congestion wastes billions of hours in cities worldwide. Drivers in Istanbul and Mexico City lose over 100 hours per year in traffic according to the INRIX Global Traffic Scorecard, time that could be spent working or with family. This essay will identify its root causes, including car-dependent urban design and underpriced road use, and suggest remedies such as congestion charging and investment in public transport.",
      body1: "The first major cause is urban planning that forces people to drive. For instance, many Chinese and American cities were built or rebuilt around wide arterial roads and single-use zoning, so homes, offices and shops sit far apart and every journey requires a car; as incomes rise, car ownership explodes to fill that design. Secondly, roads are effectively free at the point of use, which encourages overuse. Each driver considers only their own time, ignoring the delay they impose on everyone else — economists call this an unpriced externality, and it explains why new lanes fill up within months, a phenomenon known as induced demand.",
      body2: "Several measures can alleviate congestion. The most effective is charging drivers for scarce road space: Singapore's Electronic Road Pricing has kept traffic flowing since 1975, and London's congestion charge reduced vehicles entering the centre by around a third. Another useful approach is investing in attractive alternatives — metros, bus rapid transit and protected cycle lanes — which works by giving commuters a genuinely faster option; Bogotá's TransMilenio buses move more passengers per hour than a twelve-lane motorway. Flexible working hours and remote work policies also spread peak demand.",
      conclusion: "In conclusion, congestion arises from car-dependent design and free road access, but cities that adopt pricing and serious public transport investment have shown that gridlock is not inevitable. The lesson from Singapore, London and Bogotá is that managing demand works better than endlessly building supply."
    },
        fullParagraphsCN: {
      introduction: "交通拥堵浪费了全球城市数十亿小时。根据INRIX全球交通记分卡，伊斯坦布尔和墨西哥城的司机每年在交通中损失超过100小时，这些时间本可用于工作或陪伴家人。本文将确定其根本原因，包括依赖汽车的城市设计和道路使用定价过低，并提出拥堵收费和公共交通投资等补救措施。",
      body1: "第一个主要原因是迫使人们开车的城市规划。例如，许多中国和美国城市围绕宽阔的主干道和单一用途分区建设或重建，因此住宅、办公和商业场所相距甚远，每一次出行都需要汽车；随着收入增长，汽车保有量激增以填补这一设计。其次，道路在使用时实际上是免费的，这鼓励了过度使用。每个司机只考虑自己的时间，忽略了他们给其他人造成的延误——经济学家称之为未定价的外部性，这解释了为什么新车道在几个月内就会挤满，这种现象被称为「诱导需求」。",
      body2: "几项措施可以缓解拥堵。最有效的是向司机收取稀缺的道路空间费用：新加坡的电子道路收费自1975年以来一直保持交通畅通，伦敦的拥堵收费使进入市中心的车辆减少了约三分之一。另一个有用的方法是投资有吸引力的替代方案——地铁、快速公交和受保护的自行车道——通过为通勤者提供真正更快的选择来发挥作用；波哥大的TransMilenio公交车每小时运送的乘客比十二车道高速公路还多。弹性工作时间和远程办公政策也能分散高峰需求。",
      conclusion: "总之，拥堵源于依赖汽车的设计和免费的道路使用，但采用定价和认真的公共交通投资的城市已经证明，交通瘫痪并非不可避免。新加坡、伦敦和波哥大的教训是，管理需求比无休止地建设供给更有效。"
    },
    vocabulary: [
      "gridlock",
      "induced demand",
      "congestion charge",
      "road pricing",
      "bus rapid transit",
      "single-use zoning",
      "externality",
      "car ownership",
      "peak demand",
      "cycle lane"
    ]
  },
  {
    id: 68,
    title: "问题解决类 - 青少年压力",
    type: "problem/solution",
    topic: "Many young people are experiencing high levels of stress. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Stress among young people has reached alarming levels. This essay will explore the key drivers, namely [cause1] and [cause2], and propose solutions such as [solution1] and [solution2].",
      body1: "One major cause is [cause1]. For example, [example]. Another significant factor is [cause2], since [explanation].",
      body2: "Schools and families can address this by [solution1]. This helps because [effect]. In addition, [solution2] would reduce pressure by [mechanism].",
      conclusion: "In conclusion, youth stress is driven by [causes summary], but through [solutions summary] we can protect the mental health of the next generation."
    },
    structureCN: {
      introduction: "年轻人的压力已达到令人担忧的水平。本文将探讨其关键驱动因素，即[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等对策。",
      body1: "一个主要原因是[原因1]。例如，[例子]。另一个重要因素是[原因2]，因为[解释]。",
      body2: "学校和家庭可以通过[解决方案1]来应对。之所以有帮助，是因为[效果]。此外，[解决方案2]能通过[机制]减轻压力。",
      conclusion: "总之，青少年压力由[原因总结]驱动，但通过[解决方案总结]，我们可以保护下一代的心理健康。"
    },
    fullParagraphs: {
      introduction: "Stress among young people has reached alarming levels. Surveys by the American Psychological Association consistently show teenagers reporting stress levels higher than adults, and hospital admissions for self-harm among adolescents have risen sharply across developed countries. This essay will explore the key drivers, namely academic competition and social media comparison, and propose solutions such as school counselling reform and limits on digital exposure.",
      body1: "One major cause is relentless academic competition. For example, in South Korea students commonly study past midnight in private academies called hagwons, and the national suicide rate among teenagers spikes around the university entrance exam; even in less extreme systems, pupils internalise the message that one test determines their entire future. Another significant factor is social media, since platforms like Instagram present a constant stream of edited perfection against which teenagers measure their ordinary lives. Research published in The Lancet links heavy social media use in early adolescence to later depression, especially among girls, and cyberbullying means there is no longer any escape from peer judgement, even at home at midnight.",
      body2: "Schools and families can address this by embedding mental health support into daily school life. Finland trains teachers to spot distress early and provides free access to school psychologists, which helps because problems are treated before they become crises; mindfulness programmes and reasonable homework limits show similar benefits. In addition, governments should regulate the digital environment — age verification, restrictions on addictive design features and phone-free school hours, as France has implemented for pupils under fifteen — would reduce pressure by cutting exposure to comparison and harassment. Parents modelling healthy device habits matters just as much.",
      conclusion: "In conclusion, youth stress is driven by academic pressure and the comparison economy of social media, but through school-based mental health care and sensible digital regulation we can protect the mental health of the next generation. Treating stress as a systemic issue rather than individual weakness is the essential first step."
    },
        fullParagraphsCN: {
      introduction: "年轻人的压力已达到令人警惕的程度。美国心理学会的调查持续显示，青少年报告的压力水平高于成年人，而在发达国家，青少年因自残入院的人数急剧上升。本文将探讨主要驱动因素，即学业竞争和社交媒体比较，并提出学校心理咨询改革和限制数字接触等解决方案。",
      body1: "一个主要原因是无情的学业竞争。例如，在韩国，学生通常在名为「学院」（hagwon）的私立学校学习到午夜以后，而青少年自杀率在大学入学考试前后飙升；即使在不那么极端的体系中，学生也内化了这样的信息：一场考试决定了他们的整个未来。另一个重要因素是社交媒体，因为Instagram等平台不断展示经过编辑的完美，青少年以此衡量自己平凡的生活。《柳叶刀》上发表的研究把青春期早期重度使用社交媒体与日后的抑郁症联系起来，尤其是在女孩中；而网络欺凌意味着，即使在午夜的家里，也无法逃离同龄人的评判。",
      body2: "学校和家庭可以通过把心理健康支持嵌入日常校园生活来应对。芬兰培训教师及早发现心理困扰，并提供免费的学校心理学家服务，之所以有帮助是因为问题在演变成危机之前就得到处理；正念课程和合理的作业量上限也显示出类似的益处。此外，政府应当监管数字环境——年龄验证、对成瘾性设计功能的限制，以及法国已对15岁以下学生实施的校内无手机时间——将通过减少接触比较和骚扰来降低压力。家长以身作则，养成健康的设备使用习惯同样重要。",
      conclusion: "总之，青少年压力由学业压力和社交媒体的比较经济驱动，但通过基于学校的心理健康护理和合理的数字监管，我们可以保护下一代的心理健康。把压力当作系统性问题而非个人弱点来对待，是至关重要的第一步。"
    },
    vocabulary: [
      "academic competition",
      "social comparison",
      "mental health",
      "hagwon",
      "self-harm",
      "cyberbullying",
      "mindfulness",
      "age verification",
      "addictive design",
      "counselling"
    ]
  },
  {
    id: 69,
    title: "问题解决类 - 水资源污染",
    type: "problem/solution",
    topic: "Water pollution is a serious environmental problem. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Clean water is becoming scarce in many regions. This essay will analyze the main sources of water pollution, particularly [cause1] and [cause2], and recommend measures including [solution1] and [solution2].",
      body1: "The most significant cause is [cause1]. For instance, [example]. Furthermore, [cause2] also damages water supplies because [explanation].",
      body2: "To restore water quality, authorities must [solution1]. This would [effect]. Equally important, [solution2] addresses the problem by [mechanism].",
      conclusion: "In conclusion, water pollution caused by [causes summary] can be reversed through [solutions summary], provided governments act decisively."
    },
    structureCN: {
      introduction: "清洁水源在许多地区正变得稀缺。本文将分析水污染的主要来源，特别是[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的措施。",
      body1: "最重要的原因是[原因1]。例如，[例子]。此外，[原因2]也破坏水资源，因为[解释]。",
      body2: "要恢复水质，当局必须[解决方案1]。这将[效果]。同样重要的是，[解决方案2]通过[机制]解决问题。",
      conclusion: "总之，由[原因总结]造成的水污染可以通过[解决方案总结]得到扭转，前提是政府果断行动。"
    },
    fullParagraphs: {
      introduction: "Clean water is becoming scarce in many regions. The United Nations reports that over two billion people live in countries experiencing high water stress, and contaminated water kills more people each year than all forms of violence combined. This essay will analyze the main sources of water pollution, particularly industrial discharge and agricultural runoff, and recommend measures including enforced treatment standards and precision farming.",
      body1: "The most significant cause is untreated industrial effluent. For instance, Bangladesh's garment district around Dhaka releases dyes and heavy metals directly into rivers that communities downstream use for drinking and irrigation, and parts of the Ganges carry faecal contamination thousands of times above safe limits despite decades of cleanup plans. Furthermore, agriculture damages water supplies because fertilisers and pesticides wash off fields into waterways: nitrate runoff from the American Midwest creates a dead zone in the Gulf of Mexico the size of New Jersey every summer, where fish cannot survive. Plastic waste and ageing sewage systems that overflow during storms compound the contamination.",
      body2: "To restore water quality, authorities must enforce mandatory treatment standards with real penalties. The European Union's Water Framework Directive, which requires member states to bring rivers to good ecological status, has visibly cleaned formerly dead rivers like the Rhine, proving that regulation works when monitoring is transparent and fines exceed the cost of compliance. Equally important, precision agriculture addresses the problem by cutting chemical use at the source: drip irrigation and sensor-guided fertiliser application, widespread in Israel, deliver nutrients only where crops need them, reducing runoff by a third or more. Constructed wetlands offer a low-cost final filter for rural communities.",
      conclusion: "In conclusion, water pollution caused by industrial discharge and farm runoff can be reversed through enforced treatment standards and smarter agriculture, provided governments act decisively. The Rhine's recovery shows that even severely degraded rivers can return to life within a generation when polluters pay and farmers are given better tools."
    },
        fullParagraphsCN: {
      introduction: "清洁水在许多地区正变得稀缺。联合国报告称，超过20亿人生活在水资源紧张程度较高的国家，而受污染的水每年造成的死亡人数超过所有形式暴力的总和。本文将分析水污染的主要来源，特别是工业排放和农业径流，并建议包括强制处理标准和精准农业在内的措施。",
      body1: "最重要的原因是未经处理的工业废水。例如，孟加拉国达卡周边的服装区把染料和重金属直接排入河流，而下游社区把这些河水用于饮用和灌溉；恒河的部分河段，尽管有数十年的清理计划，粪便污染仍是安全限值的数千倍。此外，农业损害了水供应，因为化肥和农药从田地冲入水道：美国中西部的硝酸盐径流每年夏天在墨西哥湾制造一个新泽西州大小的死区，那里鱼类无法生存。塑料垃圾和老化的污水系统在暴风雨时溢出，加剧了污染。",
      body2: "要恢复水质，当局必须以真正的处罚执行强制处理标准。欧盟《水框架指令》要求成员国把河流恢复到良好的生态状态，已经明显清洁了莱茵河等曾经死亡的河流，证明当监测透明且罚款超过合规成本时，监管是有效的。同样重要的是，精准农业从源头上减少化学品使用来解决问题：滴灌和传感器引导的施肥在以色列广泛应用，只在作物需要的地方输送养分，将径流减少了三分之一以上。人工湿地为农村社区提供了低成本的最终过滤。",
      conclusion: "总之，由工业排放和农田径流造成的水污染，可以通过强制执行的处理标准和更智能的农业来扭转，前提是政府果断行动。莱茵河的复苏表明，当污染者付费、农民获得更好的工具时，即使是严重退化的河流也能在一代人之内恢复生机。"
    },
    vocabulary: [
      "effluent",
      "runoff",
      "dead zone",
      "heavy metals",
      "precision agriculture",
      "drip irrigation",
      "sewage system",
      "water stress",
      "ecological status",
      "constructed wetland"
    ]
  },
  {
    id: 70,
    title: "问题解决类 - 森林砍伐",
    type: "problem/solution",
    topic: "Deforestation is a major environmental issue. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Forests are disappearing at a devastating rate. This essay will examine the principal drivers, namely [cause1] and [cause2], and propose solutions such as [solution1] and [solution2].",
      body1: "The primary driver of deforestation is [cause1]. For example, [example]. A further cause is [cause2], which [explanation].",
      body2: "Combating deforestation requires [solution1]. This works because [effect]. Additionally, [solution2] helps by [mechanism].",
      conclusion: "In conclusion, although forests fall to [causes summary], a strategy combining [solutions summary] can halt and eventually reverse the destruction."
    },
    structureCN: {
      introduction: "森林正以毁灭性的速度消失。本文将审视其主要驱动因素，即[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等对策。",
      body1: "森林砍伐的主要驱动因素是[原因1]。例如，[例子]。另一个原因是[原因2]，它[解释]。",
      body2: "打击森林砍伐需要[解决方案1]。之所以有效，是因为[效果]。此外，[解决方案2]通过[机制]发挥作用。",
      conclusion: "总之，尽管森林毁于[原因总结]，但结合[解决方案总结]的战略可以阻止并最终扭转破坏。"
    },
    fullParagraphs: {
      introduction: "Forests are disappearing at a devastating rate. The planet loses around ten million hectares of forest every year — an area the size of South Korea — and the Amazon has already surrendered roughly a fifth of its original cover, pushing it towards a tipping point beyond which it could dry into savannah. This essay will examine the principal drivers, namely commercial agriculture and weak land governance, and propose solutions such as supply-chain pressure and legally enforced protection.",
      body1: "The primary driver of deforestation is the expansion of commercial agriculture. For example, cattle ranching and soy farming account for the great majority of Amazon clearing, while in Indonesia ancient peat forests are burned to make way for palm oil plantations, releasing both carbon and the haze that chokes Southeast Asia most years. A further cause is weak land governance, which allows illegal loggers and land grabbers to operate with impunity: in frontier regions roads are cut deep into intact forest, titles are forged, and enforcement agencies are underfunded or corrupt. Poverty plays a role too, since small farmers clear plots to survive when no alternative livelihood exists.",
      body2: "Combating deforestation requires pressure through global supply chains. When the major soy traders signed the Amazon Soy Moratorium in 2006, refusing to buy from newly cleared land, deforestation linked to soy collapsed within two years — this works because it removes the profit from destruction, and similar zero-deforestation commitments now cover much of the beef and palm oil trade. Additionally, legally enforced protection helps by making standing forest more valuable than cleared land: Brazil cut Amazon deforestation by over 80 percent between 2004 and 2012 through satellite monitoring, fines and protected indigenous territories, while payment-for-ecosystem programmes in Costa Rica reversed deforestation entirely.",
      conclusion: "In conclusion, although forests fall to agricultural expansion and lawlessness, a strategy combining supply-chain pressure with enforced protection can halt and eventually reverse the destruction. Brazil's earlier success proves the tools exist; what is required is the political will to apply them consistently."
    },
        fullParagraphsCN: {
      introduction: "森林正以毁灭性的速度消失。地球每年损失约1000万公顷森林——相当于韩国的面积——而亚马逊已经丧失了约五分之一的原始覆盖，正逼近一个可能干涸成稀树草原的临界点。本文将考察主要驱动因素，即商业农业和薄弱的土地治理，并提出供应链压力和法律强制保护等解决方案。",
      body1: "森林砍伐的主要驱动因素是商业农业的扩张。例如，养牛业和大豆种植占了亚马逊清理的绝大部分，而在印度尼西亚，古老的泥炭森林被烧毁，为油棕种植园让路，释放出碳和每年都让东南亚窒息的烟雾。另一个原因是薄弱的土地治理，这让非法伐木者和土地掠夺者逍遥法外：在边境地区，道路被深入原始森林，产权被伪造，执法机构资金不足或腐败。贫困也起了作用，因为小农户在没有其他生计的情况下清理地块以求生存。",
      body2: "打击森林砍伐需要通过全球供应链施压。2006年主要大豆贸易商签署《亚马逊大豆停购协议》，拒绝购买新开垦土地上的大豆后，与大豆相关的毁林在两年内大幅下降——之所以有效是因为它消除了破坏的利润；类似的零毁林承诺现已覆盖大部分牛肉和棕榈油贸易。此外，法律强制保护通过让留存的森林比被开垦的土地更有价值来实现保护：2004至2012年间，巴西通过卫星监测、罚款和受保护的原住民领地将亚马逊砍伐率降低了80%以上，而哥斯达黎加的生态系统服务付费项目则彻底扭转了森林砍伐。",
      conclusion: "总之，虽然森林因农业扩张和无法无天而倒下，但把供应链压力与强制保护相结合的战略可以阻止并最终逆转破坏。巴西早前的成功证明工具已经存在；所需要的是持续应用它们的政治意愿。"
    },
    vocabulary: [
      "deforestation",
      "palm oil",
      "cattle ranching",
      "supply chain",
      "moratorium",
      "tipping point",
      "land governance",
      "indigenous territory",
      "satellite monitoring",
      "savannah"
    ]
  },
  {
    id: 71,
    title: "问题解决类 - 失业问题",
    type: "problem/solution",
    topic: "Unemployment is a major economic problem in many countries. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Unemployment damages both individuals and societies. This essay will discuss its main causes, including [cause1] and [cause2], and suggest remedies such as [solution1] and [solution2].",
      body1: "A fundamental cause of unemployment is [cause1]. For example, [example]. Another contributor is [cause2], since [explanation].",
      body2: "Governments can reduce unemployment by [solution1]. This would [effect]. Furthermore, [solution2] addresses joblessness through [mechanism].",
      conclusion: "In conclusion, while unemployment stems from [causes summary], targeted policies such as [solutions summary] can bring joblessness down to manageable levels."
    },
    structureCN: {
      introduction: "失业损害个人和社会。本文将讨论其主要原因，包括[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等补救措施。",
      body1: "失业的一个根本原因是[原因1]。例如，[例子]。另一个促成因素是[原因2]，因为[解释]。",
      body2: "政府可以通过[解决方案1]降低失业率。这将[效果]。此外，[解决方案2]通过[机制]解决失业问题。",
      conclusion: "总之，尽管失业源于[原因总结]，但[解决方案总结]等针对性政策可以把失业率降到可控水平。"
    },
    fullParagraphs: {
      introduction: "Unemployment damages both individuals and societies. Beyond lost income, joblessness is strongly linked to depression, family breakdown and even shortened life expectancy, while regions with chronic unemployment often fall into lasting decline. This essay will discuss its main causes, including automation and economic restructuring, and suggest remedies such as active retraining and stimulus through public investment.",
      body1: "A fundamental cause of unemployment is technological displacement. For example, automated checkouts, robotic warehouses and now AI-powered software have eliminated millions of routine jobs that once employed people with basic qualifications; the American trucking industry alone employs three million drivers whose work faces eventual automation. Another contributor is economic restructuring, since globalisation has moved manufacturing from high-wage to low-wage countries — when a single factory closes in a small town, the shops and services around it collapse too, creating concentrated pockets of long-term joblessness like those in northern England or the American Midwest. Recessions then push cyclical unemployment on top of these structural wounds.",
      body2: "Governments can reduce unemployment by investing in active labour market programmes rather than passive benefits. Denmark's flexicurity model combines easy hiring and firing with generous support and compulsory, high-quality retraining, keeping unemployment low because workers move quickly between jobs instead of being trapped in dying industries; Singapore's SkillsFuture credits similarly fund mid-career retraining for every adult. Furthermore, public investment addresses joblessness directly: infrastructure projects, green energy retrofits and care-sector expansion create jobs that cannot be offshored, and Germany's short-time work scheme, which subsidises reduced hours instead of layoffs during downturns, preserved millions of jobs through the 2008 and 2020 crises.",
      conclusion: "In conclusion, while unemployment stems from automation and economic restructuring, targeted policies such as active retraining and strategic public investment can bring joblessness down to manageable levels. The countries that succeed treat unemployed workers as assets to be redeployed rather than costs to be minimised."
    },
        fullParagraphsCN: {
      introduction: "失业既损害个人，也损害社会。除了收入损失，失业还与抑郁症、家庭破裂甚至预期寿命缩短密切相关，而长期失业的地区往往陷入持久的衰退。本文将讨论其主要原因，包括自动化和经济结构调整，并提出积极再培训和通过公共投资刺激等补救措施。",
      body1: "失业的一个根本原因是技术替代。例如，自动结账、机器人仓库，以及如今人工智能驱动的软件，已经消灭了数百万曾经雇用具备基本资格人员的常规岗位；仅美国卡车运输业就雇用了300万名司机，而他们的工作最终面临自动化。另一个原因是经济结构调整，因为全球化把制造业从高工资国家转移到了低工资国家——当一个小镇的一家工厂关闭时，周围的商店和服务也会崩溃，在英格兰北部或美国中西部等地造成集中的长期失业区域。随后，经济衰退又在这些结构性创伤之上叠加了周期性失业。",
      body2: "政府可以通过投资于积极的劳动力市场计划而非被动的福利来减少失业。丹麦的「弹性保障」（flexicurity）模式把容易的雇佣和解雇与慷慨的支持和强制的高质量再培训结合起来，保持了低失业率，因为工人能在不同工作之间快速流动，而非被困在垂死的行业中；新加坡的「技能未来」（SkillsFuture）积分同样为每个成年人资助职业中期再培训。此外，公共投资直接解决失业问题：基础设施项目、绿色能源改造和护理部门扩展创造了无法外包的工作岗位，而德国的短时工作计划——在经济低迷期间补贴减少的工时而非裁员——在2008年和2020年的危机中保住了数百万个工作岗位。",
      conclusion: "总之，虽然失业源于自动化和经济结构调整，但积极再培训和战略性公共投资等有针对性的政策可以把失业率降到可控水平。成功的国家把失业工人当作需要重新部署的资产，而非需要最小化的成本。"
    },
    vocabulary: [
      "technological displacement",
      "retraining",
      "flexicurity",
      "labour market",
      "offshore",
      "structural unemployment",
      "public investment",
      "short-time work",
      "routine jobs",
      "economic restructuring"
    ]
  },
  {
    id: 72,
    title: "问题解决类 - 贫困问题",
    type: "problem/solution",
    topic: "Poverty is a persistent problem in many parts of the world. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Despite global prosperity, poverty remains widespread. This essay will investigate its root causes, particularly [cause1] and [cause2], and propose solutions including [solution1] and [solution2].",
      body1: "The deepest cause of poverty is [cause1]. For example, [example]. Poverty is also perpetuated by [cause2], because [explanation].",
      body2: "Effective solutions include [solution1]. Evidence shows [effect]. Another powerful measure is [solution2], which works by [mechanism].",
      conclusion: "In conclusion, poverty persists because of [causes summary], but experience proves that [solutions summary] can break the cycle."
    },
    structureCN: {
      introduction: "尽管全球繁荣，贫困仍然普遍存在。本文将探究其根本原因，特别是[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的对策。",
      body1: "贫困最深的原因是[原因1]。例如，[例子]。贫困还因[原因2]而延续，因为[解释]。",
      body2: "有效的解决方案包括[解决方案1]。证据显示[效果]。另一个有力措施是[解决方案2]，它通过[机制]发挥作用。",
      conclusion: "总之，贫困因[原因总结]而持续存在，但经验证明[解决方案总结]可以打破这一循环。"
    },
    fullParagraphs: {
      introduction: "Despite global prosperity, poverty remains widespread. Nearly 700 million people still live in extreme poverty on less than two dollars a day, and billions more lack secure access to food, healthcare and education. This essay will investigate its root causes, particularly the poverty trap of missing capital and opportunity, and weak institutions, and propose solutions including direct cash support and investment in education and health.",
      body1: "The deepest cause of poverty is the poverty trap itself: without savings, credit or land, the poor cannot invest in the very things that would raise their income. For example, a farmer who cannot afford fertiliser harvests too little to save, and a family that keeps children out of school to work sacrifices their future earnings — poverty reproduces itself. Poverty is also perpetuated by weak institutions, because corrupt officials, insecure property rights and conflict destroy the foundations of economic life: South Sudan and the Democratic Republic of Congo hold enormous natural wealth, yet decades of misrule and war have left their populations among the poorest on earth, while aid arriving in such systems is often diverted before reaching the poor.",
      body2: "Effective solutions include direct cash transfers. Evidence from Brazil's Bolsa Família and Mexico's Progresa shows that giving poor families small regular payments, conditional on school attendance and vaccinations, cuts poverty while improving children's nutrition and education at remarkably low cost; randomised trials of unconditional transfers in Kenya found similar gains with no reduction in work effort. Another powerful measure is investing in basic health and education, which works by raising the productivity of the next generation: deworming programmes in East Africa, costing pennies per child, increased adult earnings substantially, and China's mass literacy and rural health campaigns laid the groundwork for the fastest poverty reduction in history.",
      conclusion: "In conclusion, poverty persists because of self-reinforcing scarcity and institutional failure, but experience proves that cash transfers and human-capital investment can break the cycle. The task is not discovering what works — it is delivering it honestly, at scale."
    },
        fullParagraphsCN: {
      introduction: "尽管全球繁荣，贫困仍然普遍存在。近7亿人仍然生活在每天不足两美元的极端贫困中，还有数十亿人缺乏获得食物、医疗和教育的可靠途径。本文将探究其根本原因，特别是缺少资本和机会的贫困陷阱，以及薄弱的制度，并提出包括直接现金支持和投资教育与健康在内的解决方案。",
      body1: "贫困最深层的原因是贫困陷阱本身：没有储蓄、信贷或土地，穷人无法投资于那些能提高他们收入的东西。例如，一个买不起化肥的农民收成太少，无法储蓄；而一个让孩子辍学打工的家庭牺牲了他们未来的收入——贫困自我复制。贫困还因薄弱的制度而延续，因为腐败的官员、不安全的产权和冲突摧毁了经济生活的基础：南苏丹和刚果民主共和国拥有巨大的自然财富，然而数十年的暴政和战争使它们的人民成为地球上最贫困的，而到达这类体系的援助在到达穷人之前往往被挪用。",
      body2: "有效的解决方案包括直接现金转移支付。巴西「家庭补助金」（Bolsa Família）和墨西哥「进步计划」（Progresa）的证据表明，以入学和接种疫苗为条件，向贫困家庭提供小额定期付款，能以极低的成本削减贫困，同时改善儿童的营养和教育；在肯尼亚对无条件转移支付的随机试验也发现了类似的收益，且工作意愿并未下降。另一个有力措施是投资基本医疗和教育，其作用是提高下一代的生产力：东非的驱虫项目每个儿童仅花费几美分，却显著提高了成年后的收入；中国的扫盲运动和农村医疗保健运动则为人类历史上最快的减贫奠定了基础。",
      conclusion: "总之，贫困因自我强化的稀缺和制度失灵而持续存在，但经验证明，现金转移支付和人力资本投资可以打破这个循环。任务不在于发现什么有效，而在于诚实、规模化地交付它。"
    },
    vocabulary: [
      "poverty trap",
      "cash transfer",
      "extreme poverty",
      "property rights",
      "human capital",
      "conditional transfer",
      "deworming",
      "institutional failure",
      "randomised trial",
      "livelihood"
    ]
  },
  {
    id: 73,
    title: "问题解决类 - 垃圾处理",
    type: "problem/solution",
    topic: "Waste management is a growing problem in modern society. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Modern societies produce more waste than they can handle. This essay will identify the causes, above all [cause1] and [cause2], and recommend solutions such as [solution1] and [solution2].",
      body1: "Waste is growing mainly because of [cause1]. For example, [example]. The problem is compounded by [cause2], as [explanation].",
      body2: "To manage waste sustainably, governments should [solution1]. This leads to [effect]. Another essential step is [solution2], which [mechanism].",
      conclusion: "In conclusion, the waste crisis driven by [causes summary] can be overcome through [solutions summary], turning a linear economy into a circular one."
    },
    structureCN: {
      introduction: "现代社会产生的垃圾已超过其处理能力。本文将找出其原因，最重要的是[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等对策。",
      body1: "垃圾增长主要因为[原因1]。例如，[例子]。问题还因[原因2]而加剧，因为[解释]。",
      body2: "要可持续地管理垃圾，政府应当[解决方案1]。这带来[效果]。另一个必要步骤是[解决方案2]，它[机制]。",
      conclusion: "总之，由[原因总结]驱动的垃圾危机可以通过[解决方案总结]克服，把线性经济转变为循环经济。"
    },
    fullParagraphs: {
      introduction: "Modern societies produce more waste than they can handle. The World Bank projects that global municipal waste will grow from two billion tonnes today to 3.4 billion by 2050, and an estimated eight million tonnes of plastic enter the oceans every year. This essay will identify the causes, above all disposable consumer culture and the low cost of dumping, and recommend solutions such as producer responsibility laws and investment in recycling infrastructure.",
      body1: "Waste is growing mainly because of a throwaway economy built on cheap materials. For example, fast fashion retailers like Shein release thousands of new low-priced items daily, and the average garment is now worn only a handful of times before disposal; packaging tells the same story, with roughly 40 percent of all plastic used once and discarded. The problem is compounded by the fact that dumping is artificially cheap, as landfill fees and plastic prices exclude environmental costs, so manufacturers have no financial reason to design for durability or recyclability. Developing countries suffer doubly, receiving waste exported from wealthy nations that they lack facilities to process safely.",
      body2: "To manage waste sustainably, governments should make producers responsible for the entire life of their products. Extended Producer Responsibility laws in Germany and South Korea, which oblige manufacturers to fund collection and recycling, have pushed recycling rates above 50 percent — Germany now recycles around two-thirds of its municipal waste, the highest rate in the world. Another essential step is investing in proper infrastructure, which means safe sanitary landfills, separate collection of organic waste for composting, and deposit-return schemes that achieve over 90 percent bottle recovery in countries like Norway. Landfill taxes and plastic bag charges, as introduced across the UK, reinforce the shift by making wasteful behaviour expensive.",
      conclusion: "In conclusion, the waste crisis driven by disposable culture and underpriced dumping can be overcome through producer responsibility and serious recycling infrastructure, turning a linear economy into a circular one. The countries that lead on this issue show that high living standards need not mean high waste."
    },
        fullParagraphsCN: {
      introduction: "现代社会产生的垃圾超出了其处理能力。世界银行预测，全球城市垃圾将从如今的20亿吨增长到2050年的34亿吨，而据估计每年有800万吨塑料进入海洋。本文将确定原因，首先是一次性消费文化和倾倒成本低廉，并建议包括生产者责任法和回收基础设施投资在内的解决方案。",
      body1: "垃圾的增长主要是因为建立在廉价材料之上的一次性经济。例如，Shein等快时尚零售商每天推出数千种新的低价商品，而普通服装现在只穿几次就被丢弃；包装讲述了同样的故事，大约40%的塑料只用一次就被扔掉。问题因倾倒人为地廉价而加剧，因为垃圾填埋费和塑料价格排除了环境成本，所以制造商没有设计耐用或可回收产品的经济理由。发展中国家遭受双重打击，接收了从富裕国家出口的、它们缺乏安全处理设施的垃圾。",
      body2: "为了可持续地管理垃圾，政府应当让生产者对其产品的整个生命周期负责。德国和韩国的「延伸生产者责任」法律要求制造商资助收集和回收，已把回收率推高到50%以上——德国如今回收了约三分之二的城市垃圾，是世界上最高的比例。另一个必要步骤是投资适当的基础设施，这意味着安全的卫生填埋场、单独收集有机垃圾进行堆肥，以及像挪威这样实现超过90%瓶子回收率的押金返还计划。英国各地推行的垃圾填埋税和塑料袋收费，通过使浪费行为变得昂贵，巩固了这一转变。",
      conclusion: "总之，由一次性文化和定价过低的倾倒驱动的垃圾危机，可以通过生产者责任和认真的回收基础设施来克服，把线性经济转变为循环经济。在这个问题上领先的国家表明，高生活水平不必意味着高垃圾量。"
    },
    vocabulary: [
      "throwaway economy",
      "extended producer responsibility",
      "landfill",
      "recycling rate",
      "deposit-return scheme",
      "circular economy",
      "fast fashion",
      "composting",
      "municipal waste",
      "plastic pollution"
    ]
  },
  {
    id: 74,
    title: "问题解决类 - 网络犯罪",
    type: "problem/solution",
    topic: "Cybercrime is becoming increasingly common. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Cybercrime now costs the global economy trillions of dollars. This essay will analyze why it is growing, focusing on [cause1] and [cause2], and propose countermeasures including [solution1] and [solution2].",
      body1: "Cybercrime is expanding primarily because of [cause1]. For example, [example]. A second driver is [cause2], since [explanation].",
      body2: "To fight cybercrime, authorities should [solution1]. This would [effect]. At the same time, [solution2] reduces vulnerability by [mechanism].",
      conclusion: "In conclusion, cybercrime flourishes because of [causes summary], but a combination of [solutions summary] can make the digital world substantially safer."
    },
    structureCN: {
      introduction: "网络犯罪如今每年给全球经济造成数万亿美元的损失。本文将分析其增长原因，聚焦[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的对策。",
      body1: "网络犯罪扩张主要因为[原因1]。例如，[例子]。第二个驱动因素是[原因2]，因为[解释]。",
      body2: "要打击网络犯罪，当局应当[解决方案1]。这将[效果]。同时，[解决方案2]通过[机制]降低脆弱性。",
      conclusion: "总之，网络犯罪因[原因总结]而猖獗，但[解决方案总结]的组合可以让数字世界变得安全得多。"
    },
    fullParagraphs: {
      introduction: "Cybercrime now costs the global economy trillions of dollars. Estimates from cybersecurity firms put annual losses above eight trillion dollars — more than the GDP of every country except the United States and China — spanning ransomware, fraud and data theft. This essay will analyze why it is growing, focusing on the profitability of low-risk online attacks and the weakness of digital defences, and propose countermeasures including international legal cooperation and better security hygiene.",
      body1: "Cybercrime is expanding primarily because it offers enormous rewards at minimal risk. For example, the 2021 ransomware attack on the Colonial Pipeline shut down fuel supplies to the American East Coast and earned the criminals millions in a single operation, yet attacks launched from jurisdictions without extradition agreements rarely lead to arrest; industrial-scale scam compounds in Southeast Asia run romance and investment fraud with near-total impunity. A second driver is poor security practice, since victims make attacks easy: the 2017 WannaCry worm infected hundreds of thousands of computers worldwide, including parts of Britain's National Health Service, by exploiting a vulnerability for which a patch had been available for months. Weak passwords, unpatched software and untrained staff remain the norm.",
      body2: "To fight cybercrime, authorities should strengthen international cooperation so that no jurisdiction offers safe harbour. The Budapest Convention on Cybercrime already enables cross-border evidence sharing among dozens of countries, and joint operations by Europol and the FBI have dismantled major ransomware networks and dark-web markets — this works because it raises the risk that makes crime profitable. At the same time, mandatory security standards reduce vulnerability at the source: requiring multi-factor authentication, timely patching and staff training, as regulations like the EU's NIS2 directive now demand of essential services, has been shown to block the great majority of opportunistic attacks.",
      conclusion: "In conclusion, cybercrime flourishes because of high rewards, low risks and weak defences, but a combination of international enforcement and compulsory security hygiene can make the digital world substantially safer. Since attackers exploit the weakest link, defence must be universal rather than optional."
    },
        fullParagraphsCN: {
      introduction: "网络犯罪如今给全球经济造成数万亿美元的损失。网络安全公司估计年损失超过8万亿美元——超过了除美国和中国以外任何国家的国内生产总值——涵盖勒索软件、欺诈和数据盗窃。本文将分析其增长的原因，重点关注低风险在线攻击的盈利能力和数字防御的薄弱，并提出包括国际法律合作和更好的安全习惯在内的对策。",
      body1: "网络犯罪扩张的主要原因是它以极小的风险提供了巨大回报。例如，2021年对殖民管道（Colonial Pipeline）的勒索软件攻击切断了美国东海岸的燃料供应，一次行动就让犯罪分子赚了数百万美元，而从没有引渡协议的司法管辖区发起的攻击很少导致逮捕；东南亚的工业级诈骗园区以几乎完全不受惩罚的方式运营着爱情和投资诈骗。第二个驱动因素是糟糕的安全实践，因为受害者使攻击变得容易：2017年的「想哭」（WannaCry）蠕虫病毒感染了全球数十万台计算机，包括英国国家医疗服务体系的部分机构，利用的是一个数月前就已有补丁的漏洞。弱密码、未打补丁的软件和未经培训的员工仍然是常态。",
      body2: "要打击网络犯罪，当局应当加强国际合作，使任何司法辖区都无法提供避风港。《布达佩斯网络犯罪公约》已使数十个国家能够跨境共享证据，欧洲刑警组织与FBI的联合行动已捣毁多个主要勒索软件网络和暗网市场——之所以有效是因为它提高了使犯罪有利可图的风险。同时，强制性安全标准从源头降低脆弱性：要求多因素认证、及时打补丁和员工培训——正如欧盟NIS2指令如今对关键服务机构的要求——已被证明能阻挡绝大多数机会主义攻击。",
      conclusion: "总之，网络犯罪因高回报、低风险和薄弱的防御而猖獗，但国际执法和强制安全习惯相结合，可以使数字世界安全得多。由于攻击者利用最薄弱的环节，防御必须是普遍的，而非可选的。"
    },
    vocabulary: [
      "ransomware",
      "phishing",
      "extradition",
      "data breach",
      "multi-factor authentication",
      "dark web",
      "patch",
      "security hygiene",
      "impunity",
      "safe harbour"
    ]
  },
  {
    id: 75,
    title: "问题解决类 - 教育不平等",
    type: "problem/solution",
    topic: "Educational inequality is a major social issue. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Educational inequality limits social mobility and wastes talent. This essay will examine its causes, especially [cause1] and [cause2], and suggest remedies such as [solution1] and [solution2].",
      body1: "The principal cause of educational inequality is [cause1]. For instance, [example]. It is reinforced by [cause2], because [explanation].",
      body2: "To narrow the gap, governments should [solution1]. This helps because [effect]. A further measure is [solution2], which [mechanism].",
      conclusion: "In conclusion, educational inequality rooted in [causes summary] can be reduced through [solutions summary], giving every child a fair start."
    },
    structureCN: {
      introduction: "教育不平等限制社会流动性并浪费人才。本文将审视其原因，尤其是[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等补救措施。",
      body1: "教育不平等的主要原因是[原因1]。例如，[例子]。它还被[原因2]强化，因为[解释]。",
      body2: "要缩小差距，政府应当[解决方案1]。之所以有帮助，是因为[效果]。进一步的措施是[解决方案2]，它[机制]。",
      conclusion: "总之，根植于[原因总结]的教育不平等可以通过[解决方案总结]来缩小，让每个孩子都有公平的起点。"
    },
    fullParagraphs: {
      introduction: "Educational inequality limits social mobility and wastes talent. In many countries, a child's postal code predicts their exam results more accurately than their ability, and children from rich families are several times more likely to complete university than equally bright poor children. This essay will examine its causes, especially funding tied to local wealth and unequal early childhood development, and suggest remedies such as weighted school funding and universal early education.",
      body1: "The principal cause of educational inequality is that school quality follows property wealth. For instance, in the United States schools are largely funded by local property taxes, so a wealthy suburb can spend twice as much per pupil as a poor district a few miles away, buying smaller classes, experienced teachers and advanced courses; China shows a mirror image, where elite urban schools concentrate resources while rural schools struggle to retain qualified staff. Inequality is reinforced before school even begins, because disadvantaged children hear fewer words, read fewer books and attend less preschool: studies in several countries find gaps in vocabulary and school readiness already measurable by age three, and children who start behind rarely catch up.",
      body2: "To narrow the gap, governments should fund schools progressively, sending more money to schools with more need. England's pupil premium, which pays schools extra for each disadvantaged student, and per-pupil funding formulas used in the Netherlands show this helps because resources finally match need rather than neighbourhood wealth. A further measure is universal, high-quality early childhood education, which equalises the starting line: France's free écoles maternelles and programmes like Head Start in the United States demonstrably raise the achievement of poor children, with benefits persisting into higher graduation rates and adult earnings. Targeted tutoring and school meals, as Finland combines with its famously equal outcomes, reinforce the effect.",
      conclusion: "In conclusion, educational inequality rooted in wealth-based funding and unequal early childhoods can be reduced through progressive funding and universal preschool, giving every child a fair start. Societies that invest early spend less later on welfare, prisons and lost potential."
    },
        fullParagraphsCN: {
      introduction: "教育不平等限制了社会流动，浪费了人才。在许多国家，一个孩子的邮政编码比其能力更能准确预测其考试成绩，而富裕家庭的孩子完成大学学业的可能性是同样聪明的贫困孩子的数倍。本文将考察其原因，特别是与地方财富挂钩的资金和不平等的幼儿发展，并提出加权学校拨款和普及学前教育等补救措施。",
      body1: "教育不平等的主要原因是学校质量跟随财产财富。例如，在美国，学校主要由地方财产税资助，因此富裕的郊区每个学生的花费可以是几英里外贫困学区的两倍，用以购买更小的班级、经验丰富的教师和高级课程；中国呈现了镜像般的情况，精英城市学校集中资源，而农村学校难以留住合格的教师。不平等在学校开始之前就已被强化，因为弱势儿童听到的词汇更少、读的书更少、上的学前班更少：多个国家的研究发现，词汇量和入学准备方面的差距在三岁时就已经可衡量，而起步落后的孩子很少能赶上。",
      body2: "为缩小差距，政府应当以累进方式资助学校，把更多资金拨给需求更大的学校。英格兰的「学生津贴」（pupil premium）为每个弱势学生向学校支付额外费用，荷兰使用的按学生拨款公式也证明了这一点，因为资源终于与需求而非社区财富相匹配。另一个措施是普及、高质量的幼儿教育，这能拉平起跑线：法国免费的「母育学校」（écoles maternelles）和美国的「开端计划」（Head Start）等项目已证明能提高贫困儿童的成绩，其益处持续到更高的毕业率和成年收入。芬兰把有针对性的辅导和校餐与其著名的平等成果相结合，进一步强化了这一效果。",
      conclusion: "总之，植根于基于财富的资助和不平等的幼儿期的教育不平等，可以通过累进资助和普及学前教育来减少，给每个孩子一个公平的起点。及早投资的社会，日后在福利、监狱和流失的潜力上花费更少。"
    },
    vocabulary: [
      "social mobility",
      "funding gap",
      "early childhood education",
      "pupil premium",
      "school readiness",
      "disadvantaged students",
      "progressive funding",
      "achievement gap",
      "tutoring",
      "equal opportunity"
    ]
  },
  {
    id: 76,
    title: "问题解决类 - 医疗成本",
    type: "problem/solution",
    topic: "High healthcare costs are a problem in many countries. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Healthcare costs are rising faster than incomes in most nations. This essay will examine the main drivers, particularly [cause1] and [cause2], and propose solutions including [solution1] and [solution2].",
      body1: "Costs are driven upward first by [cause1]. For example, [example]. A second driver is [cause2], because [explanation].",
      body2: "To contain costs, governments can [solution1]. This works by [mechanism]. Another effective strategy is [solution2], which [effect].",
      conclusion: "In conclusion, healthcare inflation caused by [causes summary] can be controlled through [solutions summary], keeping care affordable for all."
    },
    structureCN: {
      introduction: "多数国家的医疗成本上涨速度超过收入增长。本文将审视其主要驱动因素，特别是[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的对策。",
      body1: "成本首先被[原因1]推高。例如，[例子]。第二个驱动因素是[原因2]，因为[解释]。",
      body2: "要控制成本，政府可以[解决方案1]。其原理是[原理]。另一个有效策略是[解决方案2]，它[效果]。",
      conclusion: "总之，由[原因总结]导致的医疗成本上涨可以通过[解决方案总结]得到控制，让所有人负担得起医疗。"
    },
    fullParagraphs: {
      introduction: "Healthcare costs are rising faster than incomes in most nations. The United States spends nearly a fifth of its GDP on healthcare — roughly twice the average of other rich countries — yet still leaves millions uninsured, while even universal systems face ballooning budgets as populations age. This essay will examine the main drivers, particularly chronic lifestyle diseases and the pricing power of drug and insurance companies, and propose solutions including prevention-focused care and collective price negotiation.",
      body1: "Costs are driven upward first by the shift toward expensive chronic diseases. For example, diabetes, heart disease and cancer — largely linked to obesity, smoking and sedentary lifestyles — now consume the majority of health budgets, and treating one diabetic American costs around 17,000 dollars a year for life. A second driver is the market power of suppliers, because fragmented buyers face concentrated sellers: pharmaceutical companies charge whatever patent protection allows, illustrated by insulin prices in the US tripling over two decades for a century-old drug, and hospital mergers let dominant hospital groups raise prices without improving care. Administrative waste in multi-insurer systems adds hundreds of billions more.",
      body2: "To contain costs, governments can shift the system from treating sickness to preventing it. This works by attacking demand at the source: Mexico's sugar tax cut purchases of sugary drinks, and Britain's screening and smoking-cessation programmes catch disease early when treatment is cheapest, since every dollar spent on prevention saves several in treatment. Another effective strategy is collective price negotiation, which uses the state's purchasing power as a counterweight: Australia and New Zealand negotiate drug prices nationally and pay a fraction of American prices for identical medicines, while reference pricing in Germany caps what insurers will pay for equivalent treatments.",
      conclusion: "In conclusion, healthcare inflation caused by chronic disease and supplier pricing power can be controlled through prevention and collective negotiation, keeping care affordable for all. Countries that treat health as a public good to be managed, rather than a market to be left alone, consistently achieve better outcomes for less money."
    },
        fullParagraphsCN: {
      introduction: "在大多数国家，医疗成本的增长速度超过了收入。美国将近五分之一的国内生产总值用于医疗——大约是其他富裕国家平均水平的两倍——却仍有数百万人没有保险，而即使是全民体系也面临着因人口老龄化而膨胀的预算。本文将考察主要驱动因素，特别是慢性生活方式疾病和药品与保险公司的定价权，并提出包括以预防为重点的护理和集体价格谈判在内的解决方案。",
      body1: "成本上升首先由向昂贵慢性疾病的转变驱动。例如，糖尿病、心脏病和癌症——很大程度上与肥胖、吸烟和久坐生活方式相关——如今消耗了大部分医疗预算，而治疗一名美国糖尿病患者每年终身花费约1.7万美元。第二个驱动因素是供应商的市场势力，因为分散的买家面对集中的卖家：制药公司收取专利保护允许的任何价格，美国的胰岛素价格在二十年内上涨了两倍，而这种药物已有百年历史；医院合并让占主导地位的医院集团在不改善护理的情况下提高价格。多保险体系中的行政浪费又增加了数千亿。",
      body2: "要控制成本，政府可以把体系从治病转向防病。其原理是从源头削减需求：墨西哥的糖税减少了含糖饮料的购买，英国的筛查和戒烟项目在疾病最便宜治疗的早期就将其发现，因为在预防上花的每一美元能省下数美元的治疗费。另一个有效策略是集体价格谈判，用国家的购买力作为制衡：澳大利亚和新西兰在全国范围内谈判药品价格，对相同的药品只支付美国价格的一小部分，而德国的参考定价限制了保险公司为等效治疗支付的金额。",
      conclusion: "总之，由慢性病和供应商定价权造成的医疗通胀，可以通过预防和集体谈判来控制，使护理对所有人都负担得起。那些把健康当作需要管理的公共产品、而非放任不管的市场的国家，始终能用更少的钱取得更好的成果。"
    },
    vocabulary: [
      "chronic disease",
      "price negotiation",
      "prevention",
      "uninsured",
      "pharmaceutical patent",
      "administrative waste",
      "screening",
      "smoking cessation",
      "universal coverage",
      "lifestyle disease"
    ]
  },
  {
    id: 77,
    title: "问题解决类 - 人口老龄化",
    type: "problem/solution",
    topic: "An aging population is a challenge for many societies. What are the causes and what can be done to address this issue?",
    structure: {
      introduction: "Societies are growing older at an unprecedented pace. This essay will examine why, focusing on [cause1] and [cause2], and propose responses such as [solution1] and [solution2].",
      body1: "Population aging is caused first by [cause1]. For example, [example]. It is accelerated by [cause2], since [explanation].",
      body2: "Governments can respond by [solution1]. This helps because [effect]. A complementary approach is [solution2], which [mechanism].",
      conclusion: "In conclusion, aging driven by [causes summary] is irreversible, but through [solutions summary] societies can adapt successfully."
    },
    structureCN: {
      introduction: "社会正以前所未有的速度老龄化。本文将审视其原因，聚焦[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等应对。",
      body1: "人口老龄化首先由[原因1]造成。例如，[例子]。它还被[原因2]加速，因为[解释]。",
      body2: "政府可以通过[解决方案1]应对。之所以有帮助，是因为[效果]。一个互补的方法是[解决方案2]，它[机制]。",
      conclusion: "总之，由[原因总结]驱动的老龄化不可逆转，但通过[解决方案总结]，社会可以成功适应。"
    },
    fullParagraphs: {
      introduction: "Societies are growing older at an unprecedented pace. Japan already has nearly twice as many people over 65 as under 15, and by 2050 one in six people worldwide will be over 65, straining pension systems, health services and labour markets. This essay will examine why, focusing on falling birth rates and rising life expectancy, and propose responses such as raising retirement ages and welcoming working-age immigration alongside higher fertility support.",
      body1: "Population aging is caused first by collapsing fertility. For example, South Korea's fertility rate has fallen below 0.8 children per woman — the lowest ever recorded — as housing costs, education pressure and women's career penalties make child-rearing unattractive, and China's population began shrinking in 2022 after decades of family planning. Aging is accelerated by remarkable longevity, since medical progress keeps people alive far longer: life expectancy has risen by more than a decade in most rich countries since 1970, meaning retirees now draw pensions for twenty years instead of ten while the working population paying for them shrinks. The arithmetic of pay-as-you-go pensions simply breaks.",
      body2: "Governments can respond by extending working lives. Raising retirement ages in line with life expectancy, as Denmark and the Netherlands have done automatically by law, helps because it expands the contributor base while shrinking the beneficiary years; flexible partial retirement and age-friendly workplaces keep older workers productive rather than pushed out. A complementary approach is expanding the working-age population through immigration and family support: Canada's points-based immigration system deliberately recruits young skilled workers to rebalance its demographics, while France's generous childcare and parental benefits have sustained one of Europe's highest fertility rates. Investing in automation and healthcare productivity lets fewer workers support more retirees.",
      conclusion: "In conclusion, aging driven by low fertility and rising longevity is irreversible, but through longer working lives, managed immigration and family-friendly policy societies can adapt successfully. The countries that plan early will age gracefully; those that deny the arithmetic will face fiscal crisis."
    },
        fullParagraphsCN: {
      introduction: "社会正以前所未有的速度老龄化。日本65岁以上人口已经是15岁以下人口的近两倍，到2050年，全球每六个人中就有一个超过65岁，这给养老金体系、医疗服务和劳动力市场带来了压力。本文将考察原因，重点关注出生率下降和预期寿命上升，并提出提高退休年龄、欢迎适龄劳动移民以及加大生育支持等应对措施。",
      body1: "人口老龄化首先由生育率的暴跌引起。例如，韩国的生育率已降至每名妇女0.8个孩子以下——有史以来最低——因为住房成本、教育压力和女性的职业惩罚使养育孩子缺乏吸引力，而中国在数十年的计划生育后，人口于2022年开始缩减。老龄化因显著的长寿而加速，因为医学进步让人活得更久：自1970年以来，大多数富裕国家的预期寿命增加了十多年，这意味着退休人员现在领取养老金的时间是二十年而非十年，而为他们支付费用的劳动人口却在萎缩。现收现付养老金的算术简单地崩溃了。",
      body2: "政府可以通过延长工作年限来应对。像丹麦和荷兰那样通过立法让退休年龄与预期寿命自动挂钩，之所以有帮助是因为它扩大了缴费者基础，同时缩短了领取年限；灵活的部分退休和年龄友好型工作场所让年长员工保持生产力，而不是被排挤出去。一个互补的方法是通过移民和家庭支持扩大劳动年龄人口：加拿大的积分移民制度有意招募年轻的技术工人来重新平衡其人口结构，而法国慷慨的儿童保育和育儿福利维持了欧洲最高的生育率之一。投资于自动化和医疗生产力，让更少的工人能支撑更多的退休人员。",
      conclusion: "总之，由低生育率和长寿驱动的老龄化是不可逆转的，但通过更长的工作年限、有管理的移民和家庭友好政策，社会可以成功适应。及早规划的国家将优雅地老去；否认算术的国家将面临财政危机。"
    },
    vocabulary: [
      "fertility rate",
      "life expectancy",
      "pension system",
      "retirement age",
      "dependency ratio",
      "immigration policy",
      "labour shortage",
      "demographics",
      "pay-as-you-go",
      "automation"
    ]
  },
  {
    id: 78,
    title: "问题解决类 - 能源危机",
    type: "problem/solution",
    topic: "The world is facing an energy crisis. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Energy security has become a defining concern of our time. This essay will analyze the causes of the crisis, chiefly [cause1] and [cause2], and recommend solutions including [solution1] and [solution2].",
      body1: "The crisis originates in [cause1]. For example, [example]. It is deepened by [cause2], because [explanation].",
      body2: "To secure energy supplies, governments must [solution1]. This would [effect]. In parallel, [solution2] helps by [mechanism].",
      conclusion: "In conclusion, the energy crisis rooted in [causes summary] can be resolved through [solutions summary], building a more resilient system."
    },
    structureCN: {
      introduction: "能源安全已成为我们时代的决定性议题。本文将分析这场危机的原因，主要是[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的对策。",
      body1: "危机起源于[原因1]。例如，[例子]。它因[原因2]而加深，因为[解释]。",
      body2: "要保障能源供应，政府必须[解决方案1]。这将[效果]。与此同时，[解决方案2]通过[机制]提供帮助。",
      conclusion: "总之，根植于[原因总结]的能源危机可以通过[解决方案总结]化解，建立一个更具韧性的体系。"
    },
    fullParagraphs: {
      introduction: "Energy security has become a defining concern of our time. When Russia cut gas supplies to Europe in 2022, prices rose tenfold within months, factories closed and governments scrambled to prevent winter blackouts, exposing how fragile the global energy system had become. This essay will analyze the causes of the crisis, chiefly fossil fuel dependence on unreliable suppliers and chronic underinvestment in alternatives, and recommend solutions including accelerated renewable deployment and efficiency measures.",
      body1: "The crisis originates in concentrated fossil fuel dependence. For example, Germany built its industrial model on cheap Russian pipeline gas, importing over half its supply from a single supplier, so when the pipelines were cut after the invasion of Ukraine, Europe's largest economy faced potential deindustrialisation within one winter. The crisis is deepened by decades of underinvestment and policy swings, because nuclear plants were closed without replacement — Germany shut its last reactors in 2023 even as it burned more coal — and renewable build-out, though fast, has not kept pace with the retirement of dispatchable capacity. Oil markets add volatility: OPEC production decisions can move prices globally overnight, and every electric vehicle transition remains incomplete while transport still runs on petroleum.",
      body2: "To secure energy supplies, governments must accelerate domestic renewable deployment and the grids that support it. Spain and Portugal, which generate most of their electricity from wind, solar and hydro, suffered far smaller price shocks in 2022 than gas-dependent neighbours — renewables are not only clean but uninterruptible by foreign powers, and permitting reform can cut wind farm approval times from years to months. In parallel, energy efficiency helps by shrinking demand itself: building retrofits, heat pumps and industrial efficiency can reduce consumption permanently, as demonstrated when Europe cut gas demand by nearly a fifth in one year through efficiency and substitution. Strategic reserves and diversified suppliers provide insurance during the transition.",
      conclusion: "In conclusion, the energy crisis rooted in concentrated fossil dependence and underinvestment can be resolved through rapid renewables and relentless efficiency, building a more resilient system. Every wind turbine and insulated home is, in a real sense, an act of energy security."
    },
        fullParagraphsCN: {
      introduction: "能源安全已成为我们这个时代的一个核心关切。2022年俄罗斯切断对欧洲的天然气供应时，价格在几个月内上涨了十倍，工厂关闭，各国政府仓促防止冬季停电，暴露了全球能源体系已变得多么脆弱。本文将分析危机的原因，主要是对不可靠供应商的化石燃料依赖和对替代能源的长期投资不足，并建议包括加速可再生能源部署和能效措施在内的解决方案。",
      body1: "危机源于集中的化石燃料依赖。例如，德国建立在廉价俄罗斯管道天然气之上的工业模式，从单一供应商进口了一半以上的供应，因此当入侵乌克兰后管道被切断时，欧洲最大的经济体在一个冬天内就面临着去工业化的可能。危机因数十年的投资不足和政策摇摆而加深，因为核电站在没有替代的情况下被关闭——德国在2023年关闭了最后一座反应堆，同时却燃烧了更多的煤炭——而可再生能源的建设虽然迅速，却跟不上可调度产能的退役速度。石油市场增加了波动性：欧佩克的产量决定可以在一夜之间在全球范围内移动价格，而在交通仍依赖石油的情况下，任何向电动汽车的转型都是不完整的。",
      body2: "要保障能源供应，政府必须加速本土可再生能源部署及配套电网。西班牙和葡萄牙大部分电力来自风电、光伏和水电，2022年遭受的价格冲击远小于依赖天然气的邻国——可再生能源不仅清洁，而且无法被外国势力切断；审批改革可以把风电场的核准时间从数年缩短到数月。与此同时，提高能效通过压缩需求本身来发挥作用：建筑改造、热泵和工业节能能永久性降低消费——欧洲在一年内通过节能和替代把天然气需求削减了近五分之一就是证明。战略储备和多元化供应商在转型期间提供保险。",
      conclusion: "总之，植根于集中的化石燃料依赖和投资不足的能源危机，可以通过快速发展可再生能源和不懈提高能效来解决，建立一个更有韧性的体系。每一台风力涡轮机和每一座隔热的房屋，在真正意义上都是能源安全的行动。"
    },
    vocabulary: [
      "energy security",
      "fossil fuel dependence",
      "renewable deployment",
      "energy efficiency",
      "heat pump",
      "grid infrastructure",
      "strategic reserve",
      "deindustrialisation",
      "price shock",
      "energy transition"
    ]
  },
  {
    id: 79,
    title: "问题解决类 - 文化流失",
    type: "problem/solution",
    topic: "Cultural heritage is being lost in many parts of the world. What are the causes and what can be done to preserve it?",
    structure: {
      introduction: "Cultural heritage, from languages to monuments, is vanishing. This essay will examine why, focusing on [cause1] and [cause2], and propose preservation measures such as [solution1] and [solution2].",
      body1: "Heritage is lost primarily through [cause1]. For example, [example]. Loss is accelerated by [cause2], as [explanation].",
      body2: "To preserve heritage, societies should [solution1]. This works by [mechanism]. Equally important is [solution2], which [effect].",
      conclusion: "In conclusion, although heritage is threatened by [causes summary], determined action through [solutions summary] can pass it on to future generations."
    },
    structureCN: {
      introduction: "从语言到古迹，文化遗产正在消失。本文将审视其原因，聚焦[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等保护措施。",
      body1: "遗产主要通过[原因1]流失。例如，[例子]。流失还被[原因2]加速，因为[解释]。",
      body2: "要保护遗产，社会应当[解决方案1]。其原理是[原理]。同样重要的是[解决方案2]，它[效果]。",
      conclusion: "总之，尽管遗产受到[原因总结]的威胁，但通过[解决方案总结]的坚定行动，可以将其传给后代。"
    },
    fullParagraphs: {
      introduction: "Cultural heritage, from languages to monuments, is vanishing. UNESCO warns that a language dies roughly every two weeks, and historic city centres from Aleppo to Venice have been damaged or hollowed out within a single generation. This essay will examine why, focusing on modernisation and homogenising global culture, and propose preservation measures such as legal protection with funding and living transmission through education and tourism.",
      body1: "Heritage is lost primarily through the pressure of modernisation. For example, China's rapid urbanisation demolished countless historic hutong neighbourhoods before protection laws caught up, and around the world traditional crafts disappear when factory goods undercut them and young people leave villages for city jobs, breaking chains of apprenticeship centuries old. Loss is accelerated by a homogenising global culture, as English-language media, global brands and social platforms crowd out local expression: children in indigenous communities from the Amazon to Siberia grow up speaking dominant languages, and when the last fluent elders die, entire oral literatures vanish with them. War and mass tourism compound the damage, as Palmyra's ruins and overcrowded Venice both illustrate.",
      body2: "To preserve heritage, societies should protect it in law and pay for its survival. France funds the restoration of historic buildings through dedicated taxes and lottery proceeds, and UNESCO World Heritage status brings both money and obligation — protection works because it makes preservation a public duty rather than a private burden. Equally important is keeping heritage alive rather than frozen: New Zealand integrated Maori into school curricula and broadcasting, reviving a language once near extinction, and Japan designates master craftspeople as Living National Treasures, paying them to train apprentices. Community-based tourism, when managed locally, converts heritage into income that motivates its own preservation.",
      conclusion: "In conclusion, although heritage is threatened by modernisation and cultural homogenisation, determined action through legal protection and living transmission can pass it on to future generations. Heritage survives only when people can live in it, speak it and earn from it."
    },
        fullParagraphsCN: {
      introduction: "从语言到纪念碑，文化遗产正在消失。联合国教科文组织警告说，大约每两周就有一种语言消亡，从阿勒颇到威尼斯的历史市中心在一代人之内就遭到了破坏或空心化。本文将考察原因，重点关注现代化和同质化的全球文化，并提出法律保护与资金、通过教育和旅游进行活态传承等保护措施。",
      body1: "遗产的丧失主要源于现代化的压力。例如，中国的快速城市化在保护法律跟上之前拆除了无数历史悠久的胡同社区；而在世界各地，当工厂商品压低了传统手工艺品的价格，年轻人离开村庄去城市工作，打破了延续数百年的学徒链条时，传统工艺就消失了。同质化的全球文化加速了这种丧失，因为英语媒体、全球品牌和社交平台排挤了本土表达：从亚马逊到西伯利亚的原住民社区的孩子成长中说的是主流语言，当最后一位流利的长者去世时，整个口述文学也随之消失。战争和大众旅游加剧了破坏，巴尔米拉的废墟和过度拥挤的威尼斯都说明了这一点。",
      body2: "要保护遗产，社会应当在法律上保护它，并为它的存续买单。法国通过专项税收和彩票收益资助历史建筑的修复，而联合国教科文组织世界遗产地位既带来了资金也带来了义务——保护之所以有效，是因为它把保存变成了公共责任而非私人负担。同样重要的是让遗产保持活力而非冻结：新西兰把毛利语纳入学校课程和广播，复兴了一种一度濒临灭绝的语言；日本把大师级工匠指定为「人间国宝」，出资让他们培训学徒。由当地管理的社区旅游把遗产转化为收入，从而激励其自身的保护。",
      conclusion: "总之，虽然遗产受到现代化和文化同质化的威胁，但通过法律保护和活态传承的坚定行动，可以把它传递给后代。遗产只有在人们能在其中生活、说它的语言并从中谋生时才能存续。"
    },
    vocabulary: [
      "cultural heritage",
      "language extinction",
      "homogenisation",
      "UNESCO",
      "oral tradition",
      "apprenticeship",
      "indigenous",
      "living transmission",
      "restoration",
      "overtourism"
    ]
  },
  {
    id: 80,
    title: "问题解决类 - 青少年吸烟",
    type: "problem/solution",
    topic: "Teenage smoking is a serious health problem. What are the causes and what can be done to reduce it?",
    structure: {
      introduction: "Despite decades of anti-smoking campaigns, teenagers continue to take up smoking and vaping. This essay will examine the causes, particularly [cause1] and [cause2], and propose countermeasures including [solution1] and [solution2].",
      body1: "Teenagers start smoking mainly because of [cause1]. For example, [example]. The problem is worsened by [cause2], since [explanation].",
      body2: "To reduce teenage smoking, governments should [solution1]. Evidence shows [effect]. Schools and parents can also help through [solution2], which [mechanism].",
      conclusion: "In conclusion, teenage smoking driven by [causes summary] can be cut substantially through [solutions summary], protecting a generation's health."
    },
    structureCN: {
      introduction: "尽管开展了数十年的反吸烟运动，青少年仍在吸烟和吸电子烟。本文将审视其原因，特别是[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的对策。",
      body1: "青少年开始吸烟主要因为[原因1]。例如，[例子]。问题因[原因2]而恶化，因为[解释]。",
      body2: "要减少青少年吸烟，政府应当[解决方案1]。证据显示[效果]。学校和家长也可以通过[解决方案2]提供帮助，它[机制]。",
      conclusion: "总之，由[原因总结]驱动的青少年吸烟可以通过[解决方案总结]大幅减少，保护一代人的健康。"
    },
    fullParagraphs: {
      introduction: "Despite decades of anti-smoking campaigns, teenagers continue to take up smoking and vaping. While cigarette use among youth has fallen in many countries, flavoured e-cigarettes have created a new generation of nicotine addicts — in the United States, surveys found more than one in ten high school students vaping regularly. This essay will examine the causes, particularly peer pressure and industry marketing, and propose countermeasures including strict sales regulation and school-based prevention.",
      body1: "Teenagers start smoking mainly because nicotine use is woven into their social environment. For example, adolescents whose friends smoke are several times more likely to start themselves, and smoking still functions as a badge of rebellion and belonging at precisely the age when peer approval matters most. The problem is worsened by deliberate industry targeting, since tobacco and vaping companies design products for the young: fruit and candy flavours, sleek devices that look like USB sticks, and influencer marketing on platforms teenagers use, as Juul demonstrated before regulators acted. Easy access completes the trap — despite age limits, minors routinely buy vapes from corner shops or older students, and cheap disposables cost less than a cinema ticket.",
      body2: "To reduce teenage smoking, governments should regulate products and sales with real teeth. Evidence shows that raising the legal age to 21, banning flavours and requiring plain packaging cut youth uptake significantly: Australia's world-leading plain-packaging and tax policies drove teenage smoking down to low single digits, and New Zealand's law banning tobacco sales to anyone born after 2008 aims to create a smoke-free generation. Schools and parents can also help through honest, skill-based prevention education, which works when it teaches refusal skills and exposes industry manipulation rather than simply preaching; smoke-free norms at home matter, since children of non-smokers rarely start.",
      conclusion: "In conclusion, teenage smoking driven by social pressure and industry targeting can be cut substantially through strict regulation and smart prevention, protecting a generation's health. The goal should not be merely reducing cigarettes but preventing nicotine addiction in any form."
    },
        fullParagraphsCN: {
      introduction: "尽管开展了数十年的反吸烟运动，青少年仍然开始吸烟和吸电子烟。虽然许多国家的青年卷烟使用率已下降，但调味电子烟创造了新一代尼古丁成瘾者——在美国，调查发现超过十分之一的高中生经常吸电子烟。本文将考察原因，特别是同伴压力和行业营销，并提出包括严格销售监管和基于学校的预防在内的对策。",
      body1: "青少年开始吸烟主要是因为尼古丁的使用被编织进了他们的社交环境。例如，朋友吸烟的青少年自己开始吸烟的可能性要高出数倍，而在同龄人认可最为重要的年龄，吸烟仍然充当着叛逆和归属的标志。问题因行业有意的定向营销而恶化，因为烟草和电子烟公司为年轻人设计产品：水果和糖果口味、看起来像U盘的时尚设备，以及在青少年使用的平台上进行网红营销，正如Juul在监管机构采取行动之前所展示的那样。易得性完成了这个陷阱——尽管有年龄限制，未成年人仍经常从街角商店或年长的学生那里购买电子烟，而廉价的一次性电子烟比一张电影票还便宜。",
      body2: "为减少青少年吸烟，政府应当以真正的力度监管产品和销售。证据表明，把法定年龄提高到21岁、禁止调味和要求素面包装能显著降低青少年使用率：澳大利亚世界领先的素面包装和税收政策把青少年吸烟率降到了很低的个位数，而新西兰禁止向2008年以后出生的人销售烟草的法律，旨在创造一个无烟的一代。学校和家长也可以通过诚实、基于技能的预防教育来帮助——当它教授拒绝技巧并揭露行业操纵，而非单纯说教时，就能发挥作用；家里的无烟规范也很重要，因为非吸烟者的孩子很少会开始吸烟。",
      conclusion: "总之，由社会压力和行业定向营销驱动的青少年吸烟，可以通过严格监管和明智的预防大幅减少，保护一代人的健康。目标不应仅仅是减少卷烟，而是防止任何形式的尼古丁成瘾。"
    },
    vocabulary: [
      "vaping",
      "nicotine addiction",
      "peer pressure",
      "plain packaging",
      "flavoured e-cigarette",
      "age restriction",
      "smoke-free generation",
      "prevention education",
      "disposable vape",
      "tobacco marketing"
    ]
  },
  {
    id: 81,
    title: "问题解决类 - 工作压力",
    type: "problem/solution",
    topic: "Work-related stress is a growing problem. What are the causes and what can be done to address this issue?",
    structure: {
      introduction: "Work-related stress has become endemic in modern economies. This essay will examine its causes, above all [cause1] and [cause2], and propose solutions such as [solution1] and [solution2].",
      body1: "Stress at work stems first from [cause1]. For example, [example]. It is intensified by [cause2], because [explanation].",
      body2: "Employers can reduce stress by [solution1]. This helps because [effect]. Governments should also [solution2], which [mechanism].",
      conclusion: "In conclusion, workplace stress caused by [causes summary] can be alleviated through [solutions summary], benefiting workers and employers alike."
    },
    structureCN: {
      introduction: "工作压力已成为现代经济中的流行病。本文将审视其原因，最重要的是[原因1]和[原因2]，并提出[解决方案1]和[解决方案2]等对策。",
      body1: "工作压力首先源于[原因1]。例如，[例子]。它因[原因2]而加剧，因为[解释]。",
      body2: "雇主可以通过[解决方案1]减轻压力。之所以有帮助，是因为[效果]。政府也应当[解决方案2]，它[机制]。",
      conclusion: "总之，由[原因总结]造成的职场压力可以通过[解决方案总结]缓解，让劳动者和雇主共同受益。"
    },
    fullParagraphs: {
      introduction: "Work-related stress has become endemic in modern economies. The World Health Organization officially recognised burnout as an occupational phenomenon in 2019, and surveys suggest a large share of workers in major economies feel stressed at work daily. This essay will examine its causes, above all excessive workloads with always-on technology and job insecurity, and propose solutions such as organisational redesign and legal protections for rest.",
      body1: "Stress at work stems first from the combination of heavy demands and low control. For example, Japan's phenomenon of karoshi — death from overwork — forced national debate after cases like a 31-year-old journalist who logged 159 hours of overtime in one month, and in China the 996 schedule of nine-to-nine, six days a week produced similar tragedies and public backlash. Stress is intensified by always-on technology, because smartphones have abolished the boundary between work and home: employees answer messages at midnight and on holiday, so the nervous system never fully disengages. Job insecurity compounds everything, as gig contracts and layoff waves keep workers in permanent anxiety about their livelihood.",
      body2: "Employers can reduce stress by redesigning work around realistic demands and genuine autonomy. Trials of the four-day week in Britain and Iceland, involving hundreds of companies, found burnout fell sharply while productivity held steady or rose — this helps because rest restores the focus that exhausted workers lose. Governments should also establish legal boundaries, which France pioneered with its 2017 right to disconnect law requiring companies to negotiate rules for after-hours email; enforcing real holidays, capping overtime and regulating gig work address insecurity at its root. Managers trained to spot overload early complete the system.",
      conclusion: "In conclusion, workplace stress caused by overload, digital intrusion and insecurity can be alleviated through organisational redesign and legal protection of rest, benefiting workers and employers alike. Chronic exhaustion is not a badge of productivity but a failure of design."
    },
        fullParagraphsCN: {
      introduction: "与工作相关的压力已成为现代经济体中的流行病。世界卫生组织于2019年正式把职业倦怠认定为一种职业现象，而调查显示，主要经济体中有大量工人每天在工作中感到压力。本文将考察其原因，首要的是过度工作负荷与始终在线的技术，以及工作不安全感，并提出组织重新设计和休息的法律保护等解决方案。",
      body1: "工作压力首先源于高要求与低控制的结合。例如，日本的「过劳死」（karoshi）现象——因过度工作而死亡——在一名31岁记者一个月加班159小时的案例后引发了全国性辩论，而在中国，「996」工作制（朝九晚九，每周六天）也产生了类似的悲剧和公众反弹。始终在线的技术加剧了压力，因为智能手机消除了工作与家庭之间的界限：员工在午夜和假期回复消息，神经系统因此从未完全脱离。工作不安全感使一切雪上加霜，因为零工合同和裁员潮让工人对生计处于永久焦虑之中。",
      body2: "雇主可以通过围绕合理要求和真实自主权重新设计工作来减轻压力。英国和冰岛涉及数百家公司的四天工作制试验发现，倦怠率大幅下降而生产率保持稳定甚至上升——之所以有帮助是因为休息能恢复疲惫劳动者失去的专注力。政府也应当设立法律边界，法国在这方面率先垂范，其2017年的「离线权」法律要求企业就下班后收发邮件的规则进行协商；落实真正的假期、限制加班和规范零工经济则从根源上解决不安全感。培训管理者及早发现过劳迹象则使整个体系完整。",
      conclusion: "总之，由超负荷、数字入侵和不安全感造成的工作场所压力，可以通过组织重新设计和对休息的法律保护来缓解，对工人和雇主都有利。慢性疲惫不是生产力的徽章，而是设计的失败。"
    },
    vocabulary: [
      "burnout",
      "overwork",
      "karoshi",
      "four-day week",
      "right to disconnect",
      "job insecurity",
      "gig economy",
      "autonomy",
      "work-life boundary",
      "occupational health"
    ]
  },
  {
    id: 82,
    title: "问题解决类 - 食品安全",
    type: "problem/solution",
    topic: "Food safety is a major concern in modern society. What are the causes and what can be done to ensure food safety?",
    structure: {
      introduction: "Food safety scandals regularly shake public confidence. This essay will analyze the causes, chiefly [cause1] and [cause2], and propose safeguards including [solution1] and [solution2].",
      body1: "Food becomes unsafe primarily because of [cause1]. For example, [example]. The problem is compounded by [cause2], since [explanation].",
      body2: "To ensure food safety, authorities must [solution1]. This works by [mechanism]. In addition, [solution2] strengthens protection through [effect].",
      conclusion: "In conclusion, food safety threatened by [causes summary] can be guaranteed through [solutions summary], restoring public trust in what we eat."
    },
    structureCN: {
      introduction: "食品安全丑闻屡屡动摇公众信心。本文将分析其原因，主要是[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的保障措施。",
      body1: "食品变得不安全主要因为[原因1]。例如，[例子]。问题因[原因2]而加剧，因为[解释]。",
      body2: "要确保食品安全，当局必须[解决方案1]。其原理是[原理]。此外，[解决方案2]通过[效果]加强保护。",
      conclusion: "总之，受到[原因总结]威胁的食品安全可以通过[解决方案总结]得到保障，恢复公众对食物的信任。"
    },
    fullParagraphs: {
      introduction: "Food safety scandals regularly shake public confidence. The World Health Organization estimates that contaminated food sickens 600 million people every year — nearly one in ten humans — and kills 420,000 of them. This essay will analyze the causes, chiefly profit-driven adulteration and weak inspection of long supply chains, and propose safeguards including traceability systems and severe enforcement.",
      body1: "Food becomes unsafe primarily because fraud is profitable and detection is rare. For example, China's 2008 melamine scandal poisoned 300,000 infants when milk suppliers diluted milk and added an industrial chemical to fake protein content, because the financial incentive was strong and testing was easy to evade; Europe's 2013 horsemeat scandal similarly revealed beef products containing horse across a dozen countries. The problem is compounded by long, opaque supply chains, since a single ready meal may contain ingredients from twenty countries, each a potential point of contamination or fraud. Cost pressure on farmers also drives overuse of pesticides and antibiotics, leaving residues and breeding drug-resistant bacteria that reach consumers.",
      body2: "To ensure food safety, authorities must build traceability from farm to fork. The European Union's system, which requires every animal and batch to be trackable, allowed rapid recalls during scandals and deterred fraud — this works because opacity is the fraudster's greatest ally, and modern tools from QR codes to blockchain make tracking cheap. In addition, severe enforcement strengthens protection: China's later reforms jailed executives in the melamine case, created a single powerful food safety agency and made punishment severe enough to change incentives. Regular unannounced inspections, laboratory testing funded by industry fees and protected whistle-blower channels, as under the US Food Safety Modernization Act, catch problems before they reach the plate.",
      conclusion: "In conclusion, food safety threatened by profitable fraud and opaque supply chains can be guaranteed through traceability and real punishment, restoring public trust in what we eat. Safe food is not a luxury but the minimum a society owes its members."
    },
        fullParagraphsCN: {
      introduction: "食品安全丑闻经常动摇公众信心。世界卫生组织估计，受污染的食物每年使6亿人患病——将近每十个人中就有一个——并导致42万人死亡。本文将分析原因，主要是利润驱动的掺假和对长供应链的检查薄弱，并提出包括可追溯体系和严格执法在内的保障措施。",
      body1: "食物变得不安全，主要是因为欺诈有利可图而被发现的概率很低。例如，中国2008年的三聚氰胺丑闻毒害了30万名婴儿，当时牛奶供应商稀释牛奶并添加工业化学品来伪造蛋白质含量，因为经济激励很强而检测很容易规避；欧洲2013年的马肉丑闻同样揭露了十多个国家的牛肉产品中含有马肉。问题因漫长、不透明的供应链而加剧，因为一份现成餐可能含有来自二十个国家的成分，每一个都是潜在的污染或欺诈点。对农民的成本压力也导致农药和抗生素的过度使用，留下残留物并滋生能到达消费者的耐药细菌。",
      body2: "要确保食品安全，当局必须建立从农田到餐桌的可追溯体系。欧盟要求每头牲畜和每个批次都可追踪的制度，在丑闻期间实现了快速召回并震慑了掺假——之所以有效是因为不透明是造假者最大的盟友，而从二维码到区块链的现代工具让追踪成本极低。此外，严厉的执法加强了保护：中国后来的改革把三聚氰胺案中的高管判刑，设立了一个权力强大的统一食品安全机构，并使惩罚严厉到足以改变激励。定期的突击检查、由行业费用资助的实验室检测，以及美国《食品安全现代化法案》下的受保护举报人渠道，能在问题到达餐桌之前发现它们。",
      conclusion: "总之，受到利润驱动的欺诈和不透明供应链威胁的食品安全，可以通过可追溯性和真正的惩罚来保障，恢复公众对我们所吃食物的信任。安全食品不是奢侈品，而是社会对其成员的最低责任。"
    },
    vocabulary: [
      "food adulteration",
      "traceability",
      "supply chain",
      "melamine scandal",
      "contamination",
      "pesticide residue",
      "food recall",
      "whistle-blower",
      "inspection",
      "drug-resistant bacteria"
    ]
  },
  {
    id: 83,
    title: "问题解决类 - 网络欺凌",
    type: "problem/solution",
    topic: "Cyberbullying is a serious issue affecting young people. What are the causes and what can be done to prevent it?",
    structure: {
      introduction: "Cyberbullying has become a defining threat to young people's wellbeing. This essay will examine its causes, particularly [cause1] and [cause2], and propose preventive measures including [solution1] and [solution2].",
      body1: "Cyberbullying flourishes because of [cause1]. For example, [example]. It is made worse by [cause2], as [explanation].",
      body2: "To prevent cyberbullying, schools should [solution1]. This helps by [mechanism]. At the same time, [solution2] addresses the problem through [effect].",
      conclusion: "In conclusion, cyberbullying rooted in [causes summary] can be prevented through [solutions summary], making online spaces safe for the young."
    },
    structureCN: {
      introduction: "网络欺凌已成为对青少年福祉的决定性威胁。本文将审视其原因，特别是[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的预防措施。",
      body1: "网络欺凌猖獗是因为[原因1]。例如，[例子]。它因[原因2]而恶化，因为[解释]。",
      body2: "要预防网络欺凌，学校应当[解决方案1]。其原理是[原理]。同时，[解决方案2]通过[效果]解决问题。",
      conclusion: "总之，根植于[原因总结]的网络欺凌可以通过[解决方案总结]得到预防，让网络空间对年轻人更安全。"
    },
    fullParagraphs: {
      introduction: "Cyberbullying has become a defining threat to young people's wellbeing. UNICEF reports that one in three young people in over 30 countries has experienced online bullying, and several high-profile teen suicides linked to relentless online abuse have shocked the public worldwide. This essay will examine its causes, particularly anonymity and platform design that rewards cruelty, and propose preventive measures including school programmes and platform accountability.",
      body1: "Cyberbullying flourishes because the internet removes the restraints that govern face-to-face behaviour. For example, anonymity on apps and games lets children say things they would never dare say in a classroom, and the distance between bully and victim removes the sight of suffering that normally triggers empathy — experiments in psychology consistently show people behave more cruelly when consequences are invisible. It is made worse by the permanence and reach of digital content, as a humiliating photo or cruel comment can spread to an entire school within minutes, remain searchable for years and follow the victim home, whereas traditional bullying at least ended at the school gate. Platforms profit from engagement and are slow to remove abuse, since outrage keeps users scrolling.",
      body2: "To prevent cyberbullying, schools should make digital citizenship part of the curriculum. Programmes like Finland's KiVa, which trains students to support victims and refuse to reward bullies with attention, reduced bullying substantially in controlled trials — this helps because bullies perform for an audience, and removing the audience removes the incentive. At the same time, platforms must be held accountable through law: the UK's Online Safety Act and Australia's eSafety Commissioner can now compel platforms to remove abusive content quickly and face fines for systematic failure, while default privacy settings, easy reporting and verified identities make cruelty harder. Parents maintaining open dialogue, so victims report rather than suffer silently, is equally essential.",
      conclusion: "In conclusion, cyberbullying rooted in anonymity and engagement-driven platform design can be prevented through peer-focused education and legal accountability, making online spaces safe for the young. Technology created this problem; technology firms must be required to help solve it."
    },
        fullParagraphsCN: {
      introduction: "网络欺凌已成为年轻人福祉的一个核心威胁。联合国儿童基金会报告称，在30多个国家，每三个年轻人中就有一个经历过网络欺凌，而几起与无休止的网络虐待相关的高调青少年自杀震惊了全球公众。本文将考察其原因，特别是匿名性和奖励残忍的平台设计，并提出包括学校项目和平台问责制在内的预防措施。",
      body1: "网络欺凌之所以猖獗，是因为互联网去除了支配面对面行为的约束。例如，应用和游戏上的匿名性让孩子们说出他们在课堂上绝不敢说的话，而欺凌者和受害者之间的距离去除了通常触发同理心的痛苦画面——心理学实验一致表明，当后果不可见时，人们的行为会更残忍。数字内容的永久性和覆盖面使情况更糟，因为一张羞辱性的照片或一条残忍的评论可以在几分钟内传遍整个学校，数年都能被搜索到，并跟随受害者回家，而传统欺凌至少在学校门口就结束了。平台从参与度中获利，且对移除虐待内容行动迟缓，因为愤怒让用户持续滚动。",
      body2: "为预防网络欺凌，学校应当把数字公民素养纳入课程。芬兰的KiVa项目训练学生支持受害者、拒绝用关注奖励欺凌者，在对照试验中大幅减少了欺凌——之所以有帮助是因为欺凌者是为观众表演，移除观众就移除了动机。同时，必须通过法律让平台承担责任：英国的《在线安全法》和澳大利亚的电子安全专员如今可以强制平台迅速移除虐待内容，并因系统性失败而面临罚款，而默认隐私设置、便捷举报和实名认证使残忍行为更难实施。家长保持开放对话，让受害者敢于报告而非默默忍受，同样至关重要。",
      conclusion: "总之，植根于匿名性和以参与度为驱动的平台设计的网络欺凌，可以通过以同伴为中心的教育和法律问责来预防，使网络空间对年轻人安全。技术创造了这个问题；技术公司必须被要求帮助解决它。"
    },
    vocabulary: [
      "cyberbullying",
      "anonymity",
      "digital citizenship",
      "platform accountability",
      "online harassment",
      "engagement",
      "empathy",
      "privacy settings",
      "peer support",
      "eSafety"
    ]
  },
  {
    id: 84,
    title: "问题解决类 - 住房危机",
    type: "problem/solution",
    topic: "Housing affordability is a problem in many cities. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "Housing has become unaffordable in most major cities. This essay will examine the causes, especially [cause1] and [cause2], and propose solutions including [solution1] and [solution2].",
      body1: "Housing costs have soared primarily because of [cause1]. For example, [example]. The crisis is deepened by [cause2], since [explanation].",
      body2: "To restore affordability, governments should [solution1]. This would [effect]. A further measure is [solution2], which [mechanism].",
      conclusion: "In conclusion, the housing crisis caused by [causes summary] can be solved through [solutions summary], making decent homes attainable again."
    },
    structureCN: {
      introduction: "多数大城市的住房已变得难以负担。本文将审视其原因，尤其是[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的对策。",
      body1: "住房成本飙升主要因为[原因1]。例如，[例子]。危机因[原因2]而加深，因为[解释]。",
      body2: "要恢复可负担性，政府应当[解决方案1]。这将[效果]。进一步的措施是[解决方案2]，它[机制]。",
      conclusion: "总之，由[原因总结]造成的住房危机可以通过[解决方案总结]解决，让体面的住房重新可以企及。"
    },
    fullParagraphs: {
      introduction: "Housing has become unaffordable in most major cities. In Hong Kong, Sydney, Vancouver and London, median homes cost between twelve and twenty times median incomes, forcing young families into decades of debt or permanent renting. This essay will examine the causes, especially chronic undersupply and the treatment of housing as a financial asset, and propose solutions including supply-side reform and curbs on speculation.",
      body1: "Housing costs have soared primarily because supply has failed to follow demand. For example, England has built fewer homes than household formation for forty years, and restrictive planning systems around job-rich cities — green belts, height limits and endless consultation — mean that even San Francisco and Tokyo-sized demand meets a trickle of new construction; economists estimate planning restrictions add hundreds of thousands of dollars to prices in the most constrained cities. The crisis is deepened by the financialisation of housing, since property became the world's favourite investment: low interest rates let investors and foreign buyers outbid residents, thousands of London and Vancouver flats sit empty as stores of value, and buy-to-let landlords convert family homes into rental assets, pushing prices beyond what wages can support.",
      body2: "To restore affordability, governments should release land and speed up construction. Tokyo demonstrates this works: flexible zoning allows abundant building, and despite a growing economy, real house prices there stayed flat for decades because supply matched demand. A further measure is curbing speculative demand: New Zealand banned most foreign buyers, Singapore taxes additional properties heavily and uses public housing to house 80 percent of its population at stable prices, and vacancy taxes in Vancouver pushed thousands of empty units back onto the rental market. Rent regulation and social housing construction, as Vienna's century-long municipal building programme proves, can keep even a capital city broadly affordable.",
      conclusion: "In conclusion, the housing crisis caused by undersupply and speculation can be solved through building more and restraining investors, making decent homes attainable again. Cities exist for their residents, not for capital seeking a parking place."
    },
        fullParagraphsCN: {
      introduction: "在大多数主要城市，住房已变得负担不起。在香港、悉尼、温哥华和伦敦，住房中位数价格是收入中位数的12到20倍，迫使年轻家庭背负数十年债务或永久租房。本文将考察原因，特别是长期的供应不足和把住房当作金融资产对待，并提出包括供给侧改革和抑制投机在内的解决方案。",
      body1: "住房成本飙升主要是因为供给未能跟上需求。例如，英格兰四十年来建造的住房少于家庭组建数量，而就业机会丰富的城市周边限制性的规划体系——绿化带、高度限制和无休止的咨询——意味着即使旧金山和东京规模的需求也只遇到涓涓细流般的新建；经济学家估计，规划限制在受约束最严重的城市给房价增加了数十万美元。危机因住房的金融化而加深，因为房地产成了世界上最受欢迎的投资：低利率让投资者和外国买家出价比居民高，伦敦和温哥华数以千计的公寓作为价值储藏手段空置着，而购房出租的房东把家庭住宅变成租赁资产，把价格推到工资无法支撑的程度。",
      body2: "为恢复可负担性，政府应当释放土地并加快建设。东京证明了这一点是有效的：灵活的分区允许充足的建设，尽管经济增长，那里的实际房价数十年来保持平稳，因为供给与需求相匹配。另一个措施是遏制投机性需求：新西兰禁止了大多数外国买家，新加坡对额外房产征收重税，并用公共住房以稳定的价格为80%的人口提供住房，而温哥华的空置税把数千套空置单元重新推向了租赁市场。租金管制和社会住房建设，正如维也纳长达一个世纪的市政建设计划所证明的，可以让即使是首都城市也大致可负担。",
      conclusion: "总之，由供应不足和投机造成的住房危机，可以通过多建住房和抑制投资者来解决，让体面的住房再次可及。城市是为其居民而存在的，而非为寻求停车位的资本而存在。"
    },
    vocabulary: [
      "affordability",
      "zoning",
      "speculation",
      "financialisation",
      "public housing",
      "vacancy tax",
      "supply and demand",
      "rent regulation",
      "green belt",
      "social housing"
    ]
  },
  {
    id: 85,
    title: "问题解决类 - 语言消失",
    type: "problem/solution",
    topic: "Many languages are disappearing around the world. What are the causes and what can be done to preserve them?",
    structure: {
      introduction: "Half of the world's roughly seven thousand languages are endangered. This essay will examine why languages die, focusing on [cause1] and [cause2], and propose preservation strategies including [solution1] and [solution2].",
      body1: "Languages disappear primarily because of [cause1]. For example, [example]. The decline is accelerated by [cause2], since [explanation].",
      body2: "To preserve endangered languages, communities should [solution1]. This works by [mechanism]. Furthermore, [solution2] helps through [effect].",
      conclusion: "In conclusion, although languages are dying because of [causes summary], committed action through [solutions summary] can keep them alive for future generations."
    },
    structureCN: {
      introduction: "全球约七千种语言中有一半正濒临灭绝。本文将审视语言消亡的原因，聚焦[原因1]和[原因2]，并提出包括[解决方案1]和[解决方案2]在内的保护策略。",
      body1: "语言消失主要因为[原因1]。例如，[例子]。衰落还因[原因2]而加速，因为[解释]。",
      body2: "要保护濒危语言，社区应当[解决方案1]。其原理是[原理]。此外，[解决方案2]通过[效果]提供帮助。",
      conclusion: "总之，尽管语言因[原因总结]而消亡，但通过[解决方案总结]的坚定行动，可以让它们为后代存续。"
    },
    fullParagraphs: {
      introduction: "Half of the world's roughly seven thousand languages are endangered. Linguists estimate that one language falls silent every two weeks, each taking with it unique knowledge of ecosystems, medicine and ways of thought that exist nowhere else. This essay will examine why languages die, focusing on the economic dominance of major languages and the interruption of transmission to children, and propose preservation strategies including immersion education and digital documentation.",
      body1: "Languages disappear primarily because economic opportunity speaks a dominant tongue. For example, parents in Indonesia's Papua region or India's northeast raise children in Indonesian or Hindi rather than their ancestral language, reasonably believing that fluency in the national language is the price of education and employment, and each generation that switches makes the minority language weaker. The decline is accelerated by schools and media operating only in major languages, since children spend their days immersed in the dominant tongue and quickly associate their heritage language with backwardness: in the twentieth century, schools in countries from Canada to Wales actively punished children for speaking indigenous languages, and the shame created then still suppresses transmission now.",
      body2: "To preserve endangered languages, communities should teach children through them, not just about them. Hawaii revived its language from a few hundred elderly speakers to thousands of fluent children through Punana Leo immersion schools, where all instruction happens in Hawaiian — this works because a language survives only as a living medium of daily life, not as a museum subject. Furthermore, documentation and technology help secure what cannot yet be revived: projects recording the last speakers create permanent archives, while apps, social media content and smartphone keyboards in minority languages, as used by Welsh and Maori communities, make old languages usable in modern life. Legal status matters too — Welsh television and bilingual public services in Wales proved that official recognition restores prestige.",
      conclusion: "In conclusion, although languages are dying because of economic pressure and broken transmission, committed action through immersion education and digital revitalisation can keep them alive for future generations. Every language saved preserves a library of human knowledge that exists in no other form."
    },
        fullParagraphsCN: {
      introduction: "世界上大约七千种语言中有一半濒临灭绝。语言学家估计，每两周就有一种语言沉寂，每一种都带走了关于生态系统、医学和思维方式的独特知识，这些知识在其他任何地方都不存在。本文将考察语言消亡的原因，重点关注主要语言的经济主导地位和向儿童传承的中断，并提出包括沉浸式教育和数字记录在内的保护策略。",
      body1: "语言消失主要是因为经济机会说的是一种占主导地位的语言。例如，印度尼西亚巴布亚地区或印度东北部的父母用印度尼西亚语或印地语抚养孩子，而非他们祖先的语言，他们合理地相信流利掌握国家语言是接受教育和就业的代价，而每一代转换语言的人都使少数民族语言变得更弱。只以主要语言运作的学校和媒体加速了这种衰落，因为孩子们整天沉浸在主流语言中，并很快把自己的传统语言与落后联系起来：在20世纪，从加拿大到威尔士的学校积极惩罚说原住民语言的孩子，而当时造成的羞耻感至今仍在抑制传承。",
      body2: "要保护濒危语言，社区应当通过传承语言来教育孩子，而不仅仅是教他们关于这种语言的知识。夏威夷通过Punana Leo沉浸式学校，把夏威夷语从几百名老年使用者复兴为数千名流利的儿童——所有教学都用夏威夷语进行——之所以有效是因为语言只有作为日常生活的活媒介才能存续，而不是作为博物馆展品。此外，记录和科技能为尚无法复兴的语言提供保障：记录最后使用者言语的项目创造了永久档案；威尔士语和毛利语社区所使用的应用、社交媒体内容和智能手机键盘，让古老语言在现代生活中可用。法律地位也很重要——威尔士的威尔士语电视和双语公共服务证明，官方认可能恢复声望。",
      conclusion: "总之，虽然语言因经济压力和传承中断而消亡，但通过沉浸式教育和数字复兴的坚定行动，可以让它们为后代存续。每拯救一种语言，就保存了一座以其他任何形式都不存在的人类知识宝库。"
    },
    vocabulary: [
      "endangered language",
      "language transmission",
      "immersion education",
      "linguistic diversity",
      "indigenous language",
      "documentation",
      "revitalisation",
      "dominant language",
      "oral knowledge",
      "bilingualism"
    ]
  },
];

export const patternTypes = ['全部', 'argument', 'cause', 'effect', 'comparison', 'example', 'conclusion'];
export const templateTypes = ['agree/disagree', 'discuss both views', 'advantages/disadvantages', 'problem/solution'];
