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
      introduction: "有时有人声称，从智能手机到社交网站的现代技术把人们推入了更深的社会孤立。然而，我强烈反对这一观点。数字工具非但没有削弱人际纽带，实际上反而让人们更容易跨越距离保持联系，并找到志趣相投的社群。",
      body1: "最明显的好处是，交流不再依赖地理上的接近。最明显的例子是留学生和务工人员，他们如今几乎可以免费每晚与家人视频通话。四十年前，这些人只能依赖昂贵的电话或需要数周才能送达的航空信件，联系稀少而短暂。如今祖父母能够实时看着孙辈长大，这说明技术加强而非削弱了家庭纽带。",
      body2: "此外，网络平台使地理上孤立的人得以建立有意义的关系。例如，偏远村庄的青少年、残障人士以及性少数群体，经常能在网上找到身边环境中根本不存在的同伴支持。诚然，被动刷屏有时会取代面对面的聚会，重度使用者可能感到孤独。但这是工具使用方式的问题，而非技术本身的固有影响。",
      conclusion: "总之，技术远没有使人孤立，反而消除了曾经限制人际联系的许多障碍。它维系了远距离的家庭关系，并给弱势群体以归属感。最终重要的不是设备本身，而是人们能否明智地在屏幕互动与现实陪伴之间取得平衡。"
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
      introduction: "人们常担忧电视上的暴力场面，尤其是动作片和犯罪剧，会助长年幼观众的攻击性行为。我在很大程度上同意这一观点。虽然大多数儿童不会成为暴力罪犯，但反复接触血腥攻击会影响他们的行为和情绪反应，家长和监管机构应认真对待。",
      body1: "首先，儿童部分地通过模仿学习社会行为，而且他们比成人更难区分虚构与现实。当主角一再用武器或拳头解决冲突时，年幼观众可能接受这样一种信息：攻击是维护自己的有效甚至值得赞赏的方式。孩子在影片中看到角色因暴力行为得到回报，之后就可能在操场上推搡同学，尤其是在没有成人立即纠正时。屏幕暴力就这样为儿童提供了在现实情境中可套用的行为脚本。",
      body2: "其次，长期接触会导致脱敏，即儿童对痛苦和苦难的反应逐渐减弱。发展心理学研究发现，大量观看暴力节目的儿童在冲突情境中往往表现出更强的生理唤醒，事后对受害者的同理心却更少。当然，父母引导和稳定的家庭环境很重要，在充满支持的家庭中长大的孩子受到的保护更好。然而，良好的养育只能降低风险，无法完全消除童年时期累积的成千上万幅暴力画面所带来的影响。",
      conclusion: "总之，大量心理学证据表明，电视暴力确实会通过模仿和逐渐脱敏助长儿童的攻击倾向。家庭监督虽能提供一定保护，但最简单的对策仍是限制儿童接触血腥内容。播出方和家长因此共同承担责任，保护年幼观众远离他们尚无力消化的素材。"
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
      introduction: "广告常因助长物质主义、操纵消费者购买不需要的产品而受到批评。在我看来，这种批评很大程度上并不公允。广告提供了有助于市场运转的信息，并为人们消费的大量媒体提供资金，尽管某些形式，尤其是面向儿童的广告，显然需要更严格的监管。",
      body1: "首先要注意的是，广告具有告知功能。当企业推出更安全的药物、更便宜的智能手机或续航更长的电动汽车时，公众只有知道这些创新的存在才能从中受益。没有广告，比较竞争产品会困难得多，新竞争者也难以挑战成熟品牌。此外，广告收入资助了报纸、网站、搜索引擎和广播电视，使这些服务能够免费或以远低于真实成本的价格提供。",
      body2: "话虽如此，否认部分广告确实有害也是错误的，尤其是当它面向无力进行批判性判断的受众时。儿童节目前时段播放的高糖麦片广告，以及未明确标注的网红带货，利用的是天真而非告知选择。然而解决之道在于执行相关规则，如时段限制、清晰标注以及禁止误导性的健康宣传，而非谴责整个行业。负责任的广告与消费者保护完全可以并行不悖。",
      conclusion: "总之，权衡之下广告在社会中是一种积极力量，因为它传播信息、刺激竞争并资助各类媒体。它确实存在的弊端，尤其是对儿童的利用，应通过明确的监管加以约束，而不应被当作所有广告皆有害的证据。"
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
      introduction: "常有人认为，现代社会对影星、歌手和网红的迷恋以有害的方式塑造着青少年的态度。我基本同意这一观点。虽然个别名人无疑能激励年轻人，但名人文化作为一种产业，往往扭曲价值观、损害自我形象，并且把名气看得比真正的成就更重。",
      body1: "一方面，名人文化宣扬一种特定的成功观。社交媒体上充斥着豪车、名牌服装和异国度假的画面，仿佛这些仅仅是成名后的正常回报。在这种内容中长大的青少年可能认为，财富和知名度比勤奋、技能或善良更重要。多国调查发现，越来越多的学童把“成名”列为主要志向，而工程、护理或技工类职业几乎从不出现在以名人为核心的媒体中。",
      body2: "另一方面，持续接触精心修图的画面会损害年轻人的自我形象。青少年把自己的日常外表与专业编辑过的照片比较，常常对体型和皮肤产生焦虑；亚洲和西方的诊所都报告，十几岁患者对整容手术的需求不断上升。尽管有些名人真心支持慈善活动、树立了令人钦佩的榜样，但整个行业奖励的是争议和自我炒作，负责任的声音反而难以获得关注。",
      conclusion: "总之，虽然个别榜样无疑能激励人，但围绕名气的整体文化助长了物质主义、不安全感和不切实际的志向。一个更健康的社会会减少对耀眼名人的关注，而更重视普通专业人士安静踏实的成就。"
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
      introduction: "动物权利活动人士要求赋予非人类动物与人类完全相同的法定权利，包括生命权以及免于被占有和拥有的权利。虽然我坚决支持保护动物免受虐待，但我不同意它们应享有与人完全相同的权利，因为权利与道德能动性及社会责任密切相关。",
      body1: "权利通常与理解规则并承担相应义务的能力相联系。人类在法庭上为自己的行为负责、参加选举投票、签订契约，所享有的权利与这些义务并存。赋予动物相同权利会立即产生矛盾：狗不能因咬人而被起诉，不能指望老虎尊重他者的生命权，牲畜也无法订立法律协议。因此，把所有物种同等对待非但不能强化权利概念，反而会削弱它。",
      body2: "这并不意味着动物不应受到保护。相反，应赋予它们免受不必要痛苦的权利，并以严格的法律规范养殖条件、实验测试和濒危物种保护。就黑猩猩、大象等高智能动物而言，有限形式的法律人格甚至可能是合理的。然而目标应是与各物种相适应的福利，而不是从人类社会照搬的同等法律地位。",
      conclusion: "总之，动物与人享有相同权利既不可行也无必要，因为权利以动物无法承担的责任为前提。真正需要的是更强有力的福利保护，在防止虐待的同时，不把任何动物都无法真正行使的人造法律框架强加于它们。"
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
      introduction: "既然电子邮件、位置数据和浏览习惯被科技公司例行记录，有些人便得出结论：数字时代的个人已不能再期待隐私。我完全反对这一观点。控制个人信息的权利依然一如既往地重要，数据收集的普及使法律保护变得更加必要，而非更不必要。",
      body1: "第一个理由是，隐私在法律和技术层面仍然可以得到保护。欧盟《通用数据保护条例》等法规要求公司说明收集了哪些数据、应要求删除数据，并在处理前获得明确同意。同时，加密通讯、双重身份验证和注重隐私的浏览器让普通用户能够对其数字生活的相当一部分保密。当这些手段失效时，独立监管机构可以处以足以改变企业行为的高额罚款。",
      body2: "诚然，用户常以个人信息换取免费服务，而建立在定向广告之上的商业模式确实带来监控和数据泄露的风险。历次重大泄露事件表明，部分公司对待健康记录、财务信息等敏感数据何其草率。然而这些问题需要的是更严格的执法、透明的替代方案以及学校中的数字素养教育，而不是接受隐私已不复存在这种宿命论调。",
      conclusion: "总之，数字时代的隐私既没有过时，在技术上也并非不可能。应通过更强的监管、更好的安全工具和明智的公众选择积极捍卫隐私，而不是仅仅因为收集数据变得方便就将其拱手让出。"
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
      introduction: "有时有人建议，只要子女行为不端——无论是在学校、商店还是网上——父母就应受到惩罚或罚款。我只是部分同意这一观点。父母确实应为年幼儿童的行为负责，但随着孩子步入青春期、受到家庭之外各种力量的塑造，让父母承担全部责任就变得越来越不公平。",
      body1: "在幼儿期，父母无疑是对行为影响最大的人。他们教导基本的自控、对他人的尊重以及是非之分，学龄最初几年的大多数不当行为都反映了家庭中养成的习惯。例如，当幼儿一再损坏学校财物时，让父母负责能够形成合理的激励，促使他们尽早处理问题。许多法律制度已规定此类情况下父母须支付赔偿，这看起来既公平又可行。",
      body2: "然而进入青春期后，这一观点便大大减弱。青少年一天中大部分时间受同学、社交媒体和网络社群的影响，其价值观可能与家庭所教相冲突，而且他们正在形成独立选择的能力。把欺凌、偷窃或网络过错自动归咎于父母可能并不公正，尤其是在父母已主动寻求帮助时。因此，责任应由家庭、学校以及在适当情况下由未成年过错者本人共同承担。",
      conclusion: "总之，父母的责任真实存在但应受年龄限制。对年幼儿童而言，它提供必要的激励；而对青少年，自动归罪往往不公。法律与学校制度应体现这种从父母监管向个人责任的逐步过渡。"
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
      introduction: "有些人把艺术视为现代社会中负担不起的奢侈品，认为公共资金应花在医院、道路和科研上，而不是画廊或音乐厅。我强烈反对这一观点。艺术对人类生活不可或缺，既关乎个人的情感福祉，也关乎社会的经济与文化健康。",
      body1: "在个人层面，艺术提供了表达和理解情感的方式，而这些情感是日常语言无法捕捉的。绘画、音乐、舞蹈和文学使人们能够处理悲伤、确认身份、理解不确定性，正因如此，艺术治疗如今在医院中被用于治疗创伤、抑郁和孤独。对儿童而言，绘画和唱歌是他们发展想象力与协调能力的最早工具之一。把这些活动视为不必要的社会，将忽视心理健康的重要维度。",
      body2: "在社会层面，艺术也是重要产业，而非财政负担。设计、电影、出版、音乐和广告在全球雇用数百万人并创造可观的出口收入，博物馆和剧院则带动伦敦、首尔、佛罗伦萨等城市的旅游业。除金钱之外，艺术品保存着文明的记忆，使每一代人都能审视自身的价值。因此，科学进步与艺术文化相互补充，而非彼此竞争。",
      conclusion: "总之，艺术不是装饰，而是心理福祉、就业和集体记忆的源泉。以艺术非必需为由削减文化经费，既损害生活质量，也损害社会的长期繁荣。"
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
      introduction: "随着电子阅读器、平板电脑和智能手机迅速普及，有人预言纸质书很快将完全消失。我不同意这一预言。尽管电子文本无疑会继续流行，但纸质书具有数字设备无法完全取代的实用与情感优势。",
      body1: "纸质书具备屏幕无法比拟的优点。它们永远不会没电，在强烈阳光下也能阅读，造成的眼疲劳更小，读者还可以在书页上批注、直观感受阅读进度。若干教育研究甚至表明，纸质书读者对长篇内容的理解和记忆优于屏幕阅读者，这可能是因为实体版面提供了空间记忆线索。尤其对幼儿而言，纸质绘本支持亲子共读，又没有消息通知带来的干扰。",
      body2: "也几乎没有证据表明普通读者把两种形式视为对手。通勤者和旅行者选择电子书，因为整座图书馆的重量不过一本小说；而同样是这些读者，往往会购买喜爱作品、食谱和画册的纸质版。纸质书市场在经历最初下滑后已在许多国家趋于稳定，独立书店甚至开始复苏，并未崩溃。",
      conclusion: "总之，未来更可能是共存而非替代。电子书提供无可比拟的便利，纸质书则带来触感的愉悦、更专注的阅读以及持久的拥有感，读者会继续同时珍视二者。"
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
      introduction: "常有人声称，农历新年、圣诞节、排灯节等传统节日正在失去真正的意义，不过是购物季而已。我不同意这一观点。外在形式无疑在变化，但家庭团聚、感恩和文化更新的核心意义依然牢固。",
      body1: "商业化只是这些活动的一个层面。商场促销、网络平台提前数周开启节日打折，这些都是事实。然而，即便是最城市化的家庭，依然会聚在一起吃团圆饭、准备特色菜肴、走亲访友、给孩子红包或礼物。春节前的春运大潮中，数亿人在几天之内穿越中国，这表明回家的渴望而非消费才是节日的情感核心。",
      body2: "此外，城市化和移民传播而非削弱了传统。侨民社群如今在伦敦举办新春游行、在莱斯特特点亮排灯节灯饰、在东南亚各地举行中秋聚会，并向当地邻居介绍这些习俗。与此同时，年轻人在网上分享节日祝福、盛装照片和食谱，让古老仪式获得新的参与形式，而不是将其抛弃。",
      conclusion: "总之，活着的传统很少一成不变，适应与变化是活力而非衰落的证明。只要节日仍让家人团聚、传承共同的价值观，其意义便依然存在于商业化的表象之下。"
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
      introduction: "漫长的工时、通勤时间以及深夜回复邮件的期待，使一些人得出结论：健康的工作与生活平衡已无法实现。我反对这一观点。在竞争激烈的现代经济中，平衡当然困难，但只要雇主、政府和个人作出审慎选择，它依然可以实现。",
      body1: "来自职场的证据表明，组织可以在不牺牲绩效的前提下重新设计工作方式。冰岛、英国等国开展的四天工作制试点，以及斯堪的纳维亚部分地区的弹性工时和远程办公政策，均报告生产率持平或提高、员工流失率降低、病假减少。这些结果说明，疲惫并非繁荣不可避免的代价；它往往反映了过时的管理习惯——把看得见的工时当成可衡量成果的替代品。",
      body2: "个人也拥有真正的主动权。人们可以在办公时间之外限制工作通知、保住锻炼和陪伴家人的时间，并选择做法与自身优先事项相符的雇主；不过，若忽视低收入劳动者以及医疗等行业面临的更严苛限制，也是不公平的。声称平衡不可能实现，可能造成自我实现的失败主义，把立法与协商可以解决的问题当成现代生活不可改变的特征。",
      conclusion: "总之，良好的工作与生活平衡虽难但远非不可能。缩短工时试点和弹性政策证明明智的改革行之有效，而个人自律和支持性的公共政策能让这些益处惠及更多人。"
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
      introduction: "全球品牌、好莱坞大片和英语常被指责席卷了地方传统，制造出单一的世界文化。我在很大程度上不同意这一说法。尽管全球化确实给小语种和传统手工艺带来压力，但文化之间的接触更多带来的是适应与融合创新，而不是毁灭。",
      body1: "与外部世界的接触非但没有抹去传统，反而常常使其复兴。例如，韩国流行音乐结合西方制作技术与韩国表演传统，如今在各大洲都赢得了受众；同样，随着人们旅行和迁徙，泰国、墨西哥和埃塞俄比亚美食变得更知名、更受尊重。曾经只服务本地市场的工匠可以通过互联网把纺织品、陶器和珠宝销往全世界，让濒危手艺获得存续的经济理由。",
      body2: "诚然，同质化的风险确实存在，尤其是当国际连锁店取代有特色的本地商铺、当孩子从小觉得小语种在经济上没有用处时。然而这些危险可以通过双语教育、扶持文化产业以及保护独立店铺的规划规则来应对，而不必拒绝开放本身。历史上，孤立在保存传统的同时也保存了贫困。",
      conclusion: "总之，全球化对地方文化是真实挑战，但并非不可避免的毁灭者。自信地与世界互动、同时对最脆弱的文化要素给予合理保护的文化，往往会适应并繁荣，而不是消亡。"
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
      introduction: "社交平台让人们积累数百乃至数千个联系人，聚会照片也看似社交生活丰富。尽管如此，我在很大程度上同意：这些平台削弱了许多真实友谊的质量。轻松的浅层网络接触，逐渐减少了亲密关系所需要的深度与坦诚。",
      body1: "首先，网络互动偏好简短和展示，而非真正的在场。点赞照片或发送生日贴纸只需几秒钟，用户可以感觉彼此有联系，却从不了解朋友真正经历着什么。若干针对重度用户的调查显示，网友众多却仍感孤独，说明频繁联系并不等于真正的亲近。友谊得以加深的从容活动——共餐、长谈、患难相助——无法用表情回应来完成。",
      body2: "其次，精心经营的主页和不断比较会悄然引入不信任。朋友们展示假期、成就和外表，隐藏失败，这可能把旁观者变成观众，滋养嫉妒而非同情。平台确实帮助移民和分离的家庭维系本会淡化的远距离关系；然而，只有当信息之外还有通话和偶尔相见，这些关系才能存续，时间线并不能取代它们。",
      conclusion: "总之，社交媒体作为保持联系、发现远方社群的工具确实有用，但当它被当作亲身陪伴的替代品时，便削弱了友谊。深厚关系仍需要时间、专注以及面对面坦诚相对的意愿。"
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
      introduction: "在物质至上的社会里，财富常被描述为通往幸福最可靠的道路，人们牺牲闲暇、健康和人际关系去追求更高收入。我不同意金钱是幸福最重要的因素。它在消除困苦方面无疑有用，但一旦基本保障实现，生活中的其他要素便重要得多。",
      body1: "第一点是，收入对幸福的影响在基本需要满足后会急剧减弱。对于面临饥饿、无家可归或疾病得不到治疗的人，更多金钱确实能改变生活，这解释了为什么最贫困群体从收入增长中受益最大。然而，在衣食、住房和医疗得到保障之后，多国调查发现收入进一步增加只带来很小的生活满意度提升，因为欲望随收入膨胀，比较对象也转向更富有的参照群体。",
      body2: "此外，对幸福感的研究反复发现，身体健康、稳定的关系和意义感是比收入更强的幸福预测指标。哈佛一项长期研究发现，亲密关系的质量是晚年幸福感最清晰的指标。当财富需要以耗竭的工作为代价、因遗产纠纷侵蚀信任，或让富人困在高墙与地位焦虑之中时，甚至会损害幸福。",
      conclusion: "总之，金钱是获得保障与自由的宝贵工具，但不是幸福的根基。健康、关系和意义带来更持久的满足，因此金钱最明智的用途，往往是去保护那些它本身买不到的东西。"
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
      introduction: "标准化考试在世界各地被用来给学生排名、选拔大学申请者、比较学校优劣。尽管方便，我并不认为它是评价能力的最佳方式。它在人工设定的条件下测量有限的技能，只应被当作评价的组成部分之一。",
      body1: "主要弱点是，这类考试主要奖励记忆、速度和应试技巧，而非综合能力。经过题海训练的学生能针对熟悉题目套用公式化作答，却难以应对需要分析或创造的开放性问题。合作、口语表达、领导力和实际动手能力——雇主广泛看重的素质——在标准化形式中几乎不可见，因此高分者完全可能在考场之外判断力薄弱、不擅解决问题。",
      body2: "此外，表现还会被考试焦虑、单日的身体不适以及昂贵的私人辅导所扭曲：后者偏向富裕家庭，使所谓的能力测量沦为特权训练。题目中嵌入的文化假设还可能让少数背景的学生处于不利地位。更公平的制度应把标准化考试与平时作业、档案袋评价、教师评估和项目制学习结合起来，提供多扇观察能力的窗口，而不是一场高压定终身。",
      conclusion: "总之，标准化测试提供了有用的可比性和管理效率，但称其为评价学生的最佳方式，既忽视了人的完整能力，也忽视了成绩背后常有的社会偏见。"
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
      introduction: "在接收国，移民有时被指责造成失业、住房压力以及国家认同的侵蚀。我不同意这一说法。管理不善时，快速移民确实会带来真实压力，但总体证据表明，移民让接收社会经济更强、文化更丰富。",
      body1: "经济上，移民提供了老龄化人口无法提供的劳动力。他们填补医院、养老院、建筑、农业和酒店服务业的空缺，在关键研究实验室工作，而且其职业生涯中缴纳的税款通常超过领取的福利。许多人还成为企业家：例如在美国，移民创办了相当比例的大型科技公司，为本国出生者创造就业。移民不仅没有耗尽公共财政，反而支撑着否则将会萎缩的养老金和医疗体系。",
      body2: "文化上，移民更新了语言、音乐和饮食，多元课堂里的学生学会跨越差异合作。承认突然涌入的移民会给当地住房、学校和低薪劳动力市场带来压力，承认被政府忽视的社区可能焦虑，这些都是公平的。然而这些压力应靠融入项目、语言培训和地区投资来化解，而不是靠制造劳动力短缺和家庭分离的边境关闭。",
      conclusion: "总之，在公平的融入政策和务实的公共规划支持下，移民不是净负担而是财富。与之相关的问题主要源于管理不善，而非移民本身。"
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
      introduction: "从银行、病历到导航和社交，现代生活依托于彼此相连的数字系统。我同意社会对这种技术已经依赖过度。其好处不可否认，但依赖之深造成了脆弱性，并悄然侵蚀着上几代人视为理所当然的能力。",
      body1: "第一个担忧是系统性的脆弱。支付网络、电网、医院和物流链条都依赖软件和卫星链路，因此一次严重的网络攻击或自然灾害可在数小时内瘫痪服务。在区域性网络故障中，无法处理无现金支付的商店甚至连生活必需品也只能拒售；完全依赖卫星导航的司机曾被引向封闭道路。有韧性的社会需要备用流程，需要系统失灵时能手动操作的劳动者。",
      body2: "第二个担忧在认知与社交层面。把心算交给计算器、把方向交给导航应用、把记忆交给搜索引擎，仅因废用就会削弱技能；不断弹出的通知缩短了注意力持续时间，让人难以从容思考。在不会看纸质地图、记不住电话号码的环境中长大的孩子未必不聪明，但设备一旦丢失、损坏或没电，他们便失去了独立性。",
      conclusion: "总之，技术的好处真实存在，但不加判断的依赖使关键服务变得脆弱，使基本人类技能日渐稀少。更明智的社会会保护关键基础设施，并有意识地保留没有屏幕也能维持生活的能力。"
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
      introduction: "随着许多国家儿童肥胖和2型糖尿病急剧增加，有人主张学校应停止在校内供应汉堡、炸鸡和含糖饮料。我同意这一措施。学校塑造着儿童的身体健康和习惯，允许快餐进入校园，恰恰损害了教育本应支持的成长。",
      body1: "主要理由是健康。快餐通常富含饱和脂肪、盐和精制糖，在校频繁食用与体重增加、疲惫以及日后糖尿病风险上升相关。营养也影响学习：油腻餐食和含糖饮料带来能量骤升骤降，降低下午课堂的专注力。由于童年反复形成的习惯往往延续到成年，学校正是让均衡膳食成为常态而非例外的理想场所。",
      body2: "批评者认为，孩子吃什么应由父母选择，而且快餐选项对紧张预算更便宜。然而儿童是判断力有限的 captive audience，学校既已在体育和交通方面承担安全责任，保护其饮食便与这一职责一致。此外，以蔬菜、谷物和豆类为主的餐食可以价格低廉，营养教育也会影响校外选择。",
      conclusion: "总之，在校禁止快餐能保护长期健康、改善课堂专注，并建立让孩子受益终身的习惯。它对家庭毫无剥夺，周末和假期如何选择仍完全由家庭决定。"
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
      introduction: "疫情期间学校停课时，在线教育急剧扩张，录播讲座、直播辅导和电子作业此后变得普遍。我不同意远程学习总体上与传统课堂教学同样有效。它提供了显著的灵活性，但其成功高度依赖自律、技术条件以及往往受益于直接人际互动的学科。",
      body1: "课堂提供屏幕难以复制的结构与互动。教师能察觉困惑的表情、停下来重新解释、把安静的学生带入讨论，而同学间即兴的争论常常带来最深刻的理解。在化学、音乐、工程等实践性学科，实验操作和有人监督的练习无法被视频取代；年幼的儿童尤其需要学校提供的作息与社交环境。",
      body2: "在线学习还依赖分配极不均衡的资源。拥有快速网络、独立房间和家庭支持的学生可以如鱼得水，而共用一部手机、居住拥挤或缺少成人监督的孩子很容易掉队。停课期间，弱势群体的出勤率和成绩下降最明显，课堂学校本可部分弥合的差距反而扩大。",
      conclusion: "总之，远程学习对自律的成年人是宝贵选择，在紧急情况下也是有用补充，但并非对所有人同样有效。结合数字便利与课堂互动的混合模式，才是最有前景的道路。"
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
      introduction: "交通拥堵、尾气和停车难使世界许多城市的中心拥挤而污浊，一些人因此提议禁止私家车进入中心城区。总体而言，我赞同这一政策，前提是实施前先建立可靠的替代方案和合理的例外安排。",
      body1: "主要好处在环境与公共健康方面。移除过境车流将大幅减少氮氧化物和细颗粒物的局地排放——它们与哮喘和心血管疾病相关——并削减令居民紧张的发动机噪音。更安静的街道鼓励步行和骑行；哥本哈根以及马德里部分地区将中央大道改为步行街后，交通事故减少，更多人在公共空间停留，商店和咖啡馆也因此受益。",
      body2: "汽车对城市空间的利用也极其低效。私家车大部分时间处于停放状态，道路和停车场却占用中心城区大量土地，这些土地本可用于住房、花园或自行车道。禁令当然应为急救车辆、残障驾驶者、固定时段的配送以及别无选择的居民保留例外，使政策针对的是不必要的通勤，而非出行本身。",
      conclusion: "总之，当可靠的公共交通和公平的例外安排到位时，无车城市中心既现实又可取。它们减少污染、收回宝贵土地，让城市生活更健康宜人。"
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
      introduction: "机器学习和机器人技术的快速进展，重新引发了人们对智能系统终将大规模取代人类劳动者的担忧。我不同意这一预言。人工智能无疑会淘汰某些具体任务、重塑各行各业，但自动化的历史表明，它更多是改造职业，而非抹去职业。",
      body1: "历史表明，机器替代的是具体任务，而非整个职业。自动取款机从20世纪60年代开始普及，银行网点员工数量并未崩溃；机器减少了例行的现金处理，而成本降低后网点反而增加，员工转向为客户提供咨询。同样，文字处理软件没有消灭秘书，会计软件也没有终结会计行业。人工智能很可能接手重复性起草、基础翻译和常规分析，让劳动者腾出精力处理同类工作中更需要判断力的部分。",
      body2: "人工智能也缺乏仍然关键的品质：护理中的同理心、法庭上的责任承担、研究中的创造性冒险，以及谈判所依赖的信任。此外，每一项重大技术都会产生对新岗位的需求，从数据专家到人工智能训练师；不过，对于技能突然贬值的劳动者，转型可能很痛苦，因此再培训和社会保障必不可少。",
      conclusion: "总之，智能系统会改变就业、取代某些角色，但替代任务不等于替代人。只要认真投资教育和再培训，人类劳动者更可能去监督机器、与机器协作，而不是被机器淘汰。"
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
      introduction: "网购以惊人速度扩张，电商平台能在数小时内送来从生鲜到家具的各类商品。尽管如此，我不同意电子商务会完全取代传统商店。实体零售满足着数字交易无法提供的社交与感官需求，两种渠道越来越多地作为互补而非对手存在。",
      body1: "许多购买确实需要直接体验。试穿衣服、掂量相机手感、闻香水气味，顾客需要实体产品，因为照片和描述无法传达合身度、质地或香味。人们也看重立即把商品带回家、向懂行的店主咨询，并把周末购物变成与家人外出的社交活动。书店、五金店和时装店能够存续，部分原因正是它们提供浏览本身的乐趣，这是算法无法复制的。",
      body2: "线上零售还面临结构性局限。投递成千上万的零散包裹带来交通拥堵和包装废弃物，退回不合适的商品并不方便，小城镇消费者可能要等上数天。许多连锁店没有消失，而是把门店用作展示厅和取货点，网站则负责比价与下单，这种全渠道模式结合了两者的长处。",
      conclusion: "总之，电子商务会继续增长并重塑零售业，但实体店完全消失并不可能。人类购物包含体验、即时性和社交性，这让设计良好的门店在市场中拥有持久位置。"
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
      introduction: "由于温室气体排放主要来自电厂、工厂和运输网络，一些人断定普通个人在应对气候变化方面无济于事。我不同意这一观点。孤立的个人举动显然不够，但公民的共同行动推动着消费市场和政治决策，而没有这些，系统性变革永远不会发生。",
      body1: "当足够多的个人改变消费，市场便会大规模回应。植物基食品、电动汽车和屋顶太阳能板的快速增长，源于早期使用者用购买行为发出需求信号，促使制造商和投资者把资本从旧技术中撤出。数百万家庭在房屋保温、肉类消费和频繁飞行上的选择叠加起来，切实影响排放曲线；声誉压力也迫使企业公布本会被忽视的气候目标。",
      body2: "个人还在政治上采取行动。选举、校园气候罢课和股东行动等变革载体，都依赖愿意组织起来的公民；欧洲最强有力的排放政策，也是在持续的公众压力之后才出现。政府最终必须就碳定价、补贴和基础设施立法，但如果选民认为相关行动毫无价值，政客很少会主动施加成本。",
      conclusion: "总之，仅靠个人行动无法稳定气候，但把它说成徒劳，则误解了市场与民主运转的方式。个人选择是集体压力、最终也是政策得以建立的基础。"
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
      introduction: "翻译应用和实时传译设备日益强大，一些人开始质疑学习外语是否仍有必要。我坚信，在当今相互联结的世界里它依然不可或缺。机器可以转换词句，但掌握另一门语言带来经济优势、认知益处和文化理解，这些是软件无法替代的。",
      body1: "经济上，掌握多种语言能打开单语者无法进入的大门。国际贸易、旅游、外交、航空和学术研究，都奖励能够直接谈判、无需中介阅读文件、跨文化建立信任的员工。翻译工具能应付日常询问，但雇主仍因语言专业毕业生能进行细致入微的沟通而看重他们；能说顾客语言的小企业主，则获得机器无法完全提供的切实商业优势。",
      body2: "语言学习还带来有据可查的认知与文化益处。研究表明，双语与更强的执行控制、更好的多任务处理以及老年痴呆发病延迟相关。更重要的是，语言是通往另一种生活方式的窗口：学习者会发现不可直译的概念、幽默和历史典故，理解其他民族如何思考，从而培养国际合作所依赖的同理心。",
      conclusion: "总之，尽管技术辅助跨语言交流，掌握另一门语言所获得的职业机会、认知韧性和文化洞察仍不可替代。因此语言学习不是前数字时代的遗物，而是一项必不可少的现代能力。"
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
      introduction: "电子游戏常被指责导致儿童学业下降、攻击性行为和久坐不动的生活方式。我不同意游戏对发展具有固有的负面影响。与电影或书籍一样，游戏的质量差异极大，只要审慎选择、适度游玩，它们能够支持认知、社交和情感成长。",
      body1: "设计良好的游戏能以可衡量的方式支持发展。策略与模拟类游戏要求玩家规划、分配有限资源、检验假设，并在计划失败时迅速调整，锻炼的正是与数学相同的问题解决能力。合作类网游需要团队协作、沟通和领导力；教育类游戏则能通过课堂难以比拟的即时反馈教授语言、历史和编程。研究综述发现，游戏对注意力、空间推理和反应时间有适度而真实的益处。",
      body2: "诚然，过度游玩会导致睡眠不足、作业荒废和体力活动减少；少数作品把逼真暴力与奖励机制结合，使玩家脱敏。然而这些是滥用风险，而非媒介本身的特征，正如垃圾食品成瘾并不意味着吃饭本身有害。父母设定游玩时间、执行年龄分级、与孩子讨论游戏内容，能够化解危险，又不剥夺他们获得真实益处的机会。",
      conclusion: "总之，电子游戏既非毒药也非万能教师。其影响极大程度上取决于内容、时长和成人引导；游玩设计良好的游戏，并与学习、锻炼和社交生活保持平衡的孩子，能够有所收获，而非受到损害。"
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
      introduction: "数字技术的迅速扩张使人们对教育应如何开展产生了分歧。一些人仍然忠于传统课堂教学，另一些人则认为在线学习代表着未来。本文将探讨争论的双方，然后解释为什么我认为混合式模式最为有效。",
      body1: "一方面，传统教育的支持者强调面对面互动不可替代的价值。在实体课堂中，教师可以观察学生的表情、即时调整节奏并提供即时反馈，这很难通过屏幕复制。此外，学校培养纪律性和社交技能，因为孩子们学会合作、解决冲突并遵守常规。例如，经合组织2022年一项关于协作解决问题的研究发现，经常参加线下小组活动的学生在团队合作评估中表现优于同龄人。尤其对年幼学习者而言，真实课堂的结构化环境提供了自主在线学习往往缺乏的稳定性。",
      body2: "另一方面，现代方法的倡导者强调灵活性和可及性。在线平台允许学习者按自己的节奏学习、重温录播课程，并以远低于传统成本的价格选修顶尖大学的课程。这对偏远地区的人们尤其具有变革意义：例如，云南农村的学生现在足不出户就能参加清华大学的直播课。新冠疫情期间，Zoom和钉钉等平台使全球数亿学生得以不间断地继续学业，证明数字化教学在需要时可以迅速规模化。",
      conclusion: "在我看来，两个极端都不理想；将课堂互动与数字资源相结合的混合方式能兼顾两者之长。传统学校教育对培养社交和情感技能仍然必不可少，而在线工具则能实现个性化复习并拓宽获取知识的渠道。总的来说，教育的未来不在于二选一，而在于明智地将两者整合。"
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
      introduction: "人们选择住在哪里对生活质量有深远影响。一些人被大城市的活力与机遇所吸引，而另一些人更喜欢乡村的宁静。本文将考量两种生活方式各自的吸引力，并论证最佳选择很大程度上取决于人生阶段。",
      body1: "赞成城市生活的人通常指出职业前景和公共服务。大城市集中了金融、科技和创意产业的工作岗位，提供小城镇根本无法匹敌的薪资和晋升通道。此外，居民短途通勤即可享受一流的医院、大学和文化场所。上海很好地说明了这一点：其地铁系统、国际学校和专科医院吸引了全国雄心勃勃的专业人才，多项调查一再显示，年轻毕业生认为大城市更有利于个人发展和人脉积累。",
      body2: "然而，偏爱乡村地区的人看重金钱难以买到的好处。住房便宜得多，空气更清新，紧密的社区提供了城市匿名街区很少能给予的归属感。较慢的生活节奏减轻压力，留出更多陪伴家人的时间。疫情以来，远程办公使这一选择变得切实可行：例如在英国，数千名员工迁居威尔士和苏格兰的村庄，尽管薪资降低，生活满意度却更高。这类迁移还帮助振兴了数十年来持续衰落的地方经济。",
      conclusion: "在我看来，城市生活适合处于职业生涯早期和中期的人，而乡村则是养育子女或安享退休生活的理想之地。两种环境满足不同需求，而非绝对对立。归根结底，现代技术正日益让人们兼得城市机遇与乡村宁静，这种灵活性值得欢迎。"
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
      introduction: "通信技术改变了人们的互动方式，引发了关于当面交流是否仍然重要的争论。一些人声称面对面交流本质上更优越，而另一些人坚持认为线上沟通是更务实的选择。本文将评估两种说法，然后提出我自己的观点。",
      body1: "一方面，有人认为面对面沟通更好，因为非语言信号承载了大部分意义。面部表情、手势和语调所传达的情绪在屏幕上很容易丢失或失真，而亲身见面能更快建立信任。高风险的谈判和医疗问诊可以证明这一点，它们至今仍倾向于当面进行：加州大学洛杉矶分校心理学中经常被引用的研究表明，肢体语言在信息接收中占相当大比例，因此身体在场显然能加深相互理解。",
      body2: "另一方面，在许多情况下偏爱线上渠道也有充分依据。视频通话能在几秒钟内连接跨大洲的同事，省去差旅费用并节省大量时间。疫情期间，Zoom和腾讯会议等平台使企业、学校甚至法庭听证在封锁中仍能运转，证明了数字互动的韧性。此外，线上信息会自动留下书面记录，提高了工作场所的问责性。对于日常汇报和异地联络，上线显然比奔波更高效。",
      conclusion: "权衡双方之后，我认为应由情境决定渠道：敏感谈话、初次见面和冲突解决值得当面进行，而日常协调最好在线处理。这是因为每种媒介恰好弥补对方的弱点。总之，技术应补充而非取代真实的人际在场，明智地运用每种工具才能建立最牢固的关系。"
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
      introduction: "教育已不再局限于课堂，学习者越来越多地问：独自学习是否与正规课程同样有效。一些人拥护自学的自由，另一些人则捍卫课堂教学的结构。本文将审视双方，并解释为什么我认为两种方法按先后顺序结合效果最佳。",
      body1: "一方面，自学有明显优势，主要是能完全掌控进度和内容。有动力的人可以跳过已掌握的内容，在难点上多花功夫，并选择适合自己学习风格的资源。一个突出的例子是软件行业，无数开发者通过在线文档和开源项目自学成才，在没有任何正规计算机科班训练的情况下建立了成功的职业生涯。可汗学院和Coursera等免费平台让任何能上网的人都能获得高质量学习材料，大幅降低了独立学习的门槛。",
      body2: "另一方面，课堂学习提供了自学无法比拟的好处，最重要的是专家反馈和社交动力。优秀的教师能立即发现学生的误解并相应调整讲解，而同学之间则形成良性竞争和情感支持。语言学习清楚地证明了这一点：定期上口语课的学生通常比独自学习者更快达到流利，因为老师会纠正学习者自己听不出的发音错误。此外，固定的时间表和截止日期能对抗拖延，而拖延正是许多独立学习者在达成目标前失败的原因。",
      conclusion: "在我看来，两种方式相辅相成而非相互对立。课堂教学对打下坚实基础不可或缺，尤其在早期阶段；而自学则随着学习者的成熟和专业化变得越来越有价值。虽然自由能激励部分学生，但证据表明大多数人需要先获得引导。总的来说，最成功的学习者将结构化课程与自律的独立练习相结合，从两种传统中汲取力量。"
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
      introduction: "理财方式把人分为储蓄派和消费派，双方都坚信自己的观念更明智。对一些人来说，省下每一分闲钱是唯一明智的做法，而另一些人坚持认为钱就是用来当下享受的。本文将讨论两种观念，最后得出审慎平衡才是最稳妥之道的结论。",
      body1: "倡导储蓄的人主要因为储蓄能保障安全和长期自由。应急基金能缓冲失业、医疗账单等意外冲击，而持续储蓄能实现购房或资助子女教育等重大目标。新冠疫情的经历表明，有储蓄的家庭比月光家庭更能安然度过封锁期；像新加坡这样家庭储蓄率高的国家，经济复苏时社会阵痛也更小。储蓄还能换来独立自主，让人无惧地转换职业或提前退休。",
      body2: "相反，消费派主张钱是过好当下生活的工具，而非囤积的奖杯。旅行、爱好和共同体验创造了任何银行余额都无法提供的回忆和个人成长，无限期推迟的享受可能永远不会再来。再从整体经济来看：家庭消费在多数发达国家占GDP的大头，因此经济下行期过度节俭反而可能加深衰退。这凸显了一个事实：一个拼命储蓄却从不在健康、教育或人际关系上投入的人，最终可能金钱上富有、生活上贫穷。",
      conclusion: "权衡之下，我支持任何极端都不可取的观点。明智的法则是先把收入的固定比例存起来，再无愧疚地把余下的钱花在真正改善生活的事情上。归根结底，财务健康来自未来保障与当下幸福之间的平衡，而非牺牲一方成全另一方。"
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
      introduction: "世界各国的医疗体系反映了一个根本分歧：医疗应当是普惠的公共服务，还是私人购买的商品？两种模式的支持者都极力为其辩护。本文将审视两种方式，并论证以坚实的公共医疗为基础、辅以私人选择最能造福社会。",
      body1: "公共医疗的倡导者强调平等与社会团结。当医疗费用由税收承担时，没有人会因贫困而被拒诊，预防性服务也让全体人口更健康。例如，在英国国家医疗服务体系（NHS）中，患者在就诊时免费获得治疗，这意味着清洁工和公司董事都按医疗需要而非财富多寡得到救治。这证明公共体系保护弱势群体，并让数百万人免于在没有全民医保的国家里挥之不去的医疗破产恐惧。",
      body2: "相比之下，私人医疗的支持者强调效率和选择权。医疗机构之间的竞争推动更短的候诊时间、更新的设备和更个性化的服务。例如，在新加坡的混合体系中，公民可以用私人保险补充公共保障，该国以低于多数西方国家的GDP占比持续取得世界领先的健康成果。这表明，只要监管得当，市场激励可以在不放弃全民保障的前提下提高标准。",
      conclusion: "在我看来，医疗太重要，不能完全交给市场，但纯粹的国家垄断又往往滋生低效。理想的体系应为基本治疗提供全面的公共保障，同时允许私人机构提供更快捷或更舒适的选择。总的来说，目标应当是既有无人会跌穿的安全网，又有良性竞争所激励的创新。"
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
      introduction: "团队工作好还是独自工作好，这一问题在职场和课堂中都引发分歧。两种风格都有忠实的追随者。本文将考量双方，并论证应由任务的性质决定采用哪种方式。",
      body1: "一方面，团队合作汇聚了综合专业知识的力量。设计飞机或开发智能手机应用等复杂项目需要工程师、设计师、营销人员和测试人员的协作，因为没有任何个人掌握全部必要技能。例如，阿波罗登月计划的成功依靠约40万人的协作；现代研究也表明，多元化团队在处理复杂问题时始终优于单打独斗的个人。因此，对于雄心勃勃的跨学科目标，合作不是可选项，而是必需品。",
      body2: "另一方面，独自工作带来专注和个人责任感。一个明显的例子是写作：小说家、研究者和程序员往往在独处时产出最佳作品，远离会议和干扰。深度专注让想法不经妥协地成熟，个人对结果承担全部功过，这强化了责任心。关于生产力的研究还发现，为协作设计的开放式办公室往往因持续干扰而降低产出。因此，对于需要持续专注的任务，独处仍然更胜一筹。",
      conclusion: "在我看来，没有哪种模式普遍更优，因为不同任务需要不同结构：头脑风暴和执行受益于团队协作，而分析和创意草拟则在独处中蓬勃发展。总的来说，最高效的专业人士在两种模式间灵活切换——协作确定方向，然后退隐进行深度工作。雇主应当设计允许两者并存的环境。"
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
      introduction: "在屏幕时代，阅读这一老派习惯与电视争夺着我们的注意力。一些人坚持认为书籍以屏幕永远无法企及的方式开发心智，而另一些人则认为电视同样是观察世界的宝贵窗口。本文将权衡双方并给出我的看法。",
      body1: "阅读的支持者认为，阅读主动调动大脑而非仅仅娱乐大脑。解码文字迫使读者想象人物、跟随复杂论证并积累词汇，从而增强专注力和批判性思维。研究表明，以阅读为乐的孩子不仅在读写能力上，在数学上的得分也显著更高——这是伦敦教育学院长期追踪研究的结论。此外，深度阅读与更强的同理心相关，因为沉浸于虚构人物的内心能训练我们理解现实中的人。",
      body2: "然而，电视的捍卫者反驳说，视觉媒体能够强有力且无障碍地发挥教育作用。例如，BBC的《地球脉动》系列纪录片把科学与自然带给数百万永远不会翻开教科书的观众，将专家解说与耗时数年拍摄的影像结合在一起。电视还围绕共同事件凝聚社会——从登月到世界杯决赛——创造了共同的文化参照点。这意味着媒介的价值取决于内容质量而非技术本身，一概否定电视忽视了它真实的教育影响力。",
      conclusion: "在我看来，对于培养想象力、语言能力和持续注意力，阅读仍是更优的习惯，不过高质量纪录片在均衡的媒介饮食中也应有一席之地。大多数电视节目的被动性质使人不费思考就能消费，而书籍则要求主动参与。总的来说，坚持每日阅读、有选择地观看电视，能带来最丰富的精神生活。"
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
      introduction: "规划旅行时，旅行者面临一个基本选择：参加跟团游还是自由行。两种方式每年都吸引数百万忠实拥趸。本文将讨论两种选择各自的吸引力，然后论证正确的选择取决于旅行者的经验和目的地。",
      body1: "跟团游的爱好者指出其便利与安心。从机票、酒店到景点门票，一切都预先安排妥当，免去了规划的压力和在陌生国家犯下昂贵错误的风险。以赴欧的中国老年游客为例：语言障碍和复杂的铁路系统令自由行令人生畏，因此配备中文导游的旅行团让他们能舒适安全地游览卢浮宫和瑞士阿尔卑斯山。因此，跟团游为本可能终身不敢远行的人打开了世界，而且批量预订使价格出奇地低廉。",
      body2: "相比之下，自由行旅行者认为自由才是旅行的本质。没有固定行程，他们可以在里斯本的咖啡馆里消磨一下午，接受当地人的晚餐邀请，或在发现隐秘村落时改变计划。例如，东南亚的背包客常说，他们最难忘的经历——在清迈偶遇的节日、在越南的民宿家庭——恰恰是因为没有行程催着他们赶路才得以发生。因此，自由行培养了真正的大巴车四十分钟停靠无法复制的文化交流和个人成长。",
      conclusion: "在我看来，两种方式各有其适用场景：首次前往有挑战性目的地的游客能从旅行团中获得信心，而经验丰富的旅行者则在随性发挥中如鱼得水。如今许多人将两者结合——预订交通和酒店，但每天自由探索。归根结底，旅行的目标是获得有意义的体验，哪种方式能为特定的人实现它，哪种就是正确的选择。"
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
      introduction: "全球化使一个古老的困境更加尖锐：社会应当守护传统文化，还是拥抱现代文化？这场辩论涉及从语言、饮食到建筑和价值观的方方面面。本文将审视两种立场，并解释为什么我认为守护与更新必须并行。",
      body1: "捍卫传统的人警告说，失去文化遗产就是失去身份本身。语言、节日和手工艺承载着世代积累的智慧，一旦消亡便无法再造。当世界上最后一位能流利使用某种原住民语言的人去世时——这大约每两周就在某地发生一次——一整套理解自然与社群的方式也随之消逝。日本提供了正面的反例：它在摩天都市之外精心守护茶道、寺庙和和服制作，赋予公民一种纯粹未来主义社会所缺乏的扎根感。因此，守护传统能让人在令人迷惘的时代有所依傍。",
      body2: "欢迎现代文化的人回应说，传统是活的事物，必须演化，否则就会沦为博物馆展品。固守过去可能固化有害习俗——从性别不平等到抵制科学进步。例如在韩国，传统音乐与流行制作的刻意融合催生了K-pop，这个价值数十亿美元的全球性产业把韩国文化传播得比单纯保护所能及的范围更远。因此，拥抱现代性并非抹去身份，而是将其转译为新一代真正愿意继承的形式。",
      conclusion: "在我看来，这种非此即彼的框定是错误的。正如日本和韩国所展示的，文化在守护核心价值的同时让表现形式适应当代生活时才会繁荣。社会应当资助博物馆、语言项目和传统工艺，同时鼓励创造性的重新诠释。总的来说，只向后看的文化会成为遗物，只向前看的文化会失去根基；最健康的社会两者兼顾。"
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
      introduction: "政府预算在艺术投资和基础设施（如道路、医院和学校）投资之间不断拉锯。双方都声称自己的优先事项能带来更大的公共利益。本文将审视两种立场，并解释为什么我认为基础设施必须优先。",
      body1: "艺术资金的倡导者认为，文化以超越简单经济回报的方式丰富社会。博物馆、剧院和音乐节提升公民生活质量、吸引旅游并维护国家认同。以西班牙毕尔巴鄂古根海姆博物馆为例：1997年开放时，弗兰克·盖里设计的前卫建筑将一座衰落的工业城市转变为重要的文化旅游目的地，酒店预订和本地就业随之增长。这表明战略性艺术投资能够振兴整个地区，并赋予社区自豪感。",
      body2: "相反，基础设施的拥护者指出，基本服务是文明生活的先决条件。道路和公共交通决定人们能否上班，医院挽救生命，清洁水源预防疾病。例如，在许多发展中国家，数百万学童每天仍需在不安全的道路跋涉数小时，限制了出勤率和学业进步；哪怕修建简易的乡村公路，也能改变教育和经济成果。因此，基础设施支出以最直接的方式惠及最多的人，而缺乏基础设施会让社区陷入贫困。",
      conclusion: "在我看来，资金有限的政府应优先保障基本基础设施，因为健康、安全和教育是文化生活日后繁荣的基础。一旦这些基础稳固，艺术投资才是可取的，但在此之前不宜优先。归根结底，最负责任的政策是确保每位公民都有可靠的道路和清洁的水源，然后再用那些改善所创造的条件来丰富生活。"
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
      introduction: "家庭教育和学校教育哪个更重要的问题已困扰思想家数百年。每种环境以不同方式塑造年轻的心智。本文将探讨两种视角，然后解释为什么我认为家庭奠定基础，学校构筑大厦。",
      body1: "一方面，强调家庭教育的人指出，价值观、习惯和情感安全感在孩子进教室之前很久就已扎根。早期语言习得是一个明显的例子：儿童在头三年主要从父母和兄弟姐妹那里学习词汇、发音和社交规则。此外，家庭传递文化认同和道德标准——从尊敬长辈到对诚实的态度。这表明，如果没有支持性的家庭环境，即便最好的学校也收效甚微，因为饥饿、焦虑或被忽视的孩子无法专注于功课。",
      body2: "另一方面，学校教育的捍卫者认为，正规机构让孩子接触专业知识、多元视角和民主互动。以芬兰的教育体系为例：那里的教师训练有素，课程强调批判性思维而非死记硬背，学生在数学和阅读上始终位列世界前茅。因此，学校提供大多数家庭无法在家中复制的资源、专业指导和同伴网络，并让孩子接触到比自家社区更宽广的世界观。",
      conclusion: "在我看来，两者不可替代。家庭教育培养了对学习的热爱、品格和自尊，使正规学校教育成为可能；而学校则教授成人生活所需的学术技能和社交成熟度。虽然一些父母天生是卓越的教育者，但大多数孩子从专业教师和多元化同学中获益匪浅。总的来说，当家庭和学校携手合作、互相强化时，教育才能取得最大的成功。"
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
      introduction: "几乎每个人在人生的某个时刻都必须在稳定工作的安全感和创业的风险与回报之间做出选择。每条路吸引不同性格和处境的人。本文将评估两条路，然后得出正确的选择取决于个人情况和目标的结论。",
      body1: "稳定就业的吸引力显而易见：可预测的工资、带薪假期、养老金缴纳和法律保护。在日本和德国等国家，大型企业几十年来提供终身雇佣和优厚福利，让员工有信心买房、养家和长期规划。在经济下行期间，正如2008年金融危机所示，老牌企业的员工远比小企业主安全——那些店主和餐馆老板一夜之间关门大吉。这说明稳定工作提供了一种创业根本无法匹敌的社会安全网。",
      body2: "然而，选择创业的人认为，独立、无限的收入潜力和创造有意义事物的机会超过了风险。以字节跳动的故事为例：2012年张一鸣带着小团队创立，它成长为估值数千亿美元的全球巨头，在全球创造了数万个工作岗位。此外，即便失败的创业也教会了韧性、适应性和市场洞察力，这些是僵化层级中的员工很少能培养出来的。这意味着，虽然大多数初创企业不会成功，但经历本身就有价值，而少数成功的企业则能改变整个行业。",
      conclusion: "在我看来，稳定工作适合有家庭责任、健康顾虑或积蓄有限的人，而创业则适合有热情、资源和承受失败能力的人。问题不在于哪条路普遍更优，而在于哪条符合个人的处境和抱负。归根结底，就业和创业对繁荣的经济都至关重要，健康的社会应当支持两种选择。"
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
      introduction: "人们的购物方式发生了巨大变化，消费者分成了偏爱传统购物和网上购物两派。每种方式都有明显优势。本文将比较两种方式，并论证最佳策略取决于商品和购物者的优先事项。",
      body1: "传统购物的支持者强调线上商店无法复制的感官体验和即时性。购物者可以在付款前亲手触摸面料、测试电子产品、用眼睛判断新鲜度，这避免了收到与屏幕所见不同商品时的失望。例如，伦敦的哈罗德奢侈品百货已繁荣了一个多世纪，部分原因就在于它提供私人造型咨询和亲自检查商品的机会。因此，对于质量、合身度或口味至关重要的商品，许多消费者仍然远比网站描述和评论更相信自己的判断。",
      body2: "相反，网购的倡导者声称，便利性、选择范围和价格透明度使其占据优势。以中国电商平台的双十一为例：2023年，消费者在24小时内购买了超过万亿元的商品，这要归功于深度折扣和一键下单——这是任何实体商场都无法匹敌的。此外，用户评价和比较工具帮助买家无需奔波于各店之间就能做出知情决策，送货上门则节省了通勤和排队的时间。因此，对于书籍、电子产品和家庭日用品等标准化商品，网购更快、更便宜，而且通常更可靠。",
      conclusion: "在我看来，两种方式都不会消失，因为它们满足不同需求。对于日常必需品和重复购买，网购显然更胜一筹；但对于购买沙发或冬装等重大决策，实地检查仍然重要。总的来说，最聪明的消费者两者兼顾：先在线研究，如果商品需要仔细评估，再去实体店看看。"
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
      introduction: "人与动物的关系是当今最具争议的伦理问题之一：是否应保护所有动物免受人类利用，还是它们可以正当地服务于我们的需求？这场辩论涉及饮食、医药和工业。本文将讨论两种立场，并解释为什么我认为保护与负责任的使用可以兼容。",
      body1: "倡导完全保护的人认为，有感知能力的生命不论物种都应得到道德考量。他们指出工厂化养殖造成的痛苦：动物被拥挤在肮脏的环境中，以工业规模被屠宰。例如，2019年，多个国家的卧底调查揭示，猪和鸡被关在狭小得无法转身的空间里，伤口得不到治疗。这意味着，如果我们认为虐待猫狗是错误的，就应将这一原则延伸到农场动物和实验动物身上，而非仅仅根据人类的便利画一条武断的界线。",
      body2: "另一方面，支持负责任使用的人坚持认为，人类历来依赖动物获取食物、衣物和医学研究，完全废除既不现实，在道德上也不必要。例如，糖尿病用的胰岛素最初从猪身上提取，时至今日，许多救命的疫苗仍需在动物身上测试后才能进行人体试验。因此，他们认为伦理标准应是通过严格的福利法规将痛苦降至最低，而非终止一切使用。许多原住民社区也依赖狩猎获取营养和文化认同，禁止这些做法将摧毁生计和传统。",
      conclusion: "在我看来，两种极端都不必要。我们应保护动物免受虐待和栖息地破坏，同时认识到某些人类用途——如必要的医学研究和可持续采集——在福利标准严格时可以正当化。没有怜悯的利用是不可辩护的，但忽视人类需求的道德绝对主义也同样不可取。总的来说，目标应是建立一个动物免受不必要痛苦、人类负责任地满足自身需求的世界。"
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
      introduction: "在公立学校和私立学校之间做选择是许多家长面临的难题。一些人认为公办学校更公平、更能促进社会融合，另一些人则认为收费学校能带来更优异的成果。本文将审视双方，并解释为什么我认为资金充足的公立学校应当始终是教育的支柱。",
      body1: "支持公立学校的人认为，它们促进平等和社会融合。来自不同经济背景的孩子并肩学习，减少了阶层隔离，在整个社会中培养了同理心。例如，在私立学校极为罕见的芬兰，公立体系在PISA等国际评估中始终位居世界前列，证明国家教育可以既卓越又包容。这表明，只要政府在教师培训和设施上投入得当，公立学校就能与私立学校媲美甚至超越，同时不制造精英阶层。",
      body2: "与此同时，私立学校的支持者声称，更小的班级、更好的设施和更大的自主权限能带来更强的学业成果。在英国，伊顿公学等机构提供公立学校无法企及的师生比，以及丰富的音乐、体育和领导力项目。付费的家长还能对校政策施加影响，这促使学校更积极回应需求。然而，这种优势往往反映的是财富而非教学法：私立学校挑选的是积极上进的学生，其家长本就有能力聘请家教和提供课外拓展，因此更高的分数可能只是镜像了学生在家中已享有的优势。",
      conclusion: "在我看来，私立学校的成功更多归功于选择性生源和家长财富，而非更优的教学；而强大的公立体系惠及整个社会。政府不应资助两条平行轨道，而应提升公办学校的质量，让任何家长都不必为了体面的教育而被迫付费。归根结底，教育应当是每个孩子的阶梯，而非只属于付得起钱的人的特权。"
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
      introduction: "规划未来时，人们分为两大阵营：追逐短期目标的人和投资长期抱负的人。每种策略都有热情的捍卫者。本文将讨论两种方式，并论证以长期愿景为纲、分解为短期步骤的做法能带来最大的成功。",
      body1: "短期目标的倡导者指出，即时的成果能建立动力和势头。完成小而可实现的任务会释放进步感，支撑持续的努力，而速胜还能提供关于何种方法有效的宝贵反馈。以一位设定本月获取十个客户目标的年轻创业者为例：达成它能带来现金流、信心和实战经验，而'成为行业领袖'这样模糊的梦想却给不出明确的第一步。这意味着短期目标对于把抽象抱负转化为日常行动必不可少，尤其在环境快速变化时。",
      body2: "相反，长期目标的捍卫者相信，只有远方的愿景才能赋予人生方向。例如，日本的'ikigai'（生之意义）理念鼓励人们找到最深层的使命，并围绕它规划数十年的工作；同样，亚马逊创始人杰夫·贝索斯以七年为期经营公司闻名，投资于云计算等亏损多年才称霸市场的项目。因此，没有长期思考，人和组织就会从一个紧急任务漂向另一个，永远建立不起持久的事业。商业中的短视行为——如削减研发预算来美化季度利润——往往在十年内毁掉公司。",
      conclusion: "在我看来，这场辩论呈现的是一个假选择。长期目标提供指南针，短期目标则是路上的脚步；缺了任何一方，另一方都无法运转。最明智的做法是先定义清晰的目的地，再将其分解为保持动力的月度与年度里程碑。总的来说，将大胆愿景与自律的短期执行相结合的人，远比任一极端的信徒成就更大。"
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
      introduction: "雇主和学生无休止地争论：在职业发展中，工作经验和学历哪个更重要。本文将考量双方，然后论证两者的相对重要性取决于具体职业。",
      body1: "看重工作经验的人认为，实践技能只能在岗位上学到。课堂传授理论，而职场要求在真实压力下的判断力、沟通力和解决问题的能力。例如，在科技行业，谷歌和苹果等公司多年前就取消了学位要求，改为依据作品集和面试招聘程序员；他们最优秀的工程师中许多都是自学成才。这表明，在快速变化的实践领域，真实项目的履历比任何证书都更能说明候选人的能力。",
      body2: "珍视学历的人反驳说，正规教育提供了经验难以替代的基础。以医学为例，任何国家都不允许医生未经数年认证培训就执业，因为失误会以生命为代价；同样，设计桥梁的工程师必须掌握大学里才能系统学到的数学。因此，在错误代价惨重或知识高度理论化的职业中，学位是必不可少的质量把关。学历还向需要从数千份申请中筛选的雇主传递纪律性和学习能力的信号。",
      conclusion: "在我看来，答案因领域而异。对于技工、销售、设计和大部分科技行业，可证明的经验应高于一纸文凭；而对于医学、法律、学术和工程，严格的学历仍然不可或缺。最明智的学生两者兼顾：既取得扎实的学位，又寻找实习机会来证明自己能学以致用。总的来说，与其问哪个更重要，不如问对某个特定职业哪个更重要，并据此规划。"
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
      introduction: "不同社会在崇尚个人主义还是集体主义上存在深刻差异。本文将探讨两种价值体系，并论证健康的社群需要两者的平衡。",
      body1: "个人主义的拥护者声称，个人自由驱动创造力和进步。当人们被鼓励独立思考、质疑权威、追逐自己的梦想时，社会就会孕育出创新者和企业家。例如，硅谷的文化颂扬打破常规的特立独行者，这种态度催生了从苹果到特斯拉等重塑整个行业的企业。心理学研究也把个人自主权与动机和生活满意度联系起来，说明人们在掌控自己的选择而非屈从于群体期望时更能蓬勃发展。",
      body2: "集体主义的支持者回应说，人类是社会性生物，幸福依赖于强大的共同体。在日本，对群体和谐与共同责任的重视促成了该国对2011年地震和海啸极为有序的应对——市民平静地排队领取物资，并自愿节电数月。这表明集体纪律能实现孤立个体无法做到的事：灾后重建、公共卫生和社会信任。此外，集体主义文化中老年人的孤独感更低，因为家庭和社群义务确保无人被抛弃。",
      conclusion: "在我看来，两个极端都有风险。纯粹的个人主义会滋生孤独和不平等，而不受约束的集体主义会压制异议和个人成就。最成功的社会在保护个人权利、奖励主动精神的同时，通过共同的制度和相互的义务来培养团结。归根结底，个人与共同体相互依存：人恰恰在属于支持自己的群体时，才能作为独特的个体而绽放。"
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
      introduction: "很少有辩论像竞争与合作哪个对人类进步更重要这样古老。本文将审视两种主张，并解释为什么我认为两种力量结合时最为强大。",
      body1: "竞争的捍卫者认为，较量推动个人和组织超越极限。对手逼近时运动员训练更刻苦，市场份额攸关时企业更会创新。20世纪60年代的太空竞赛证明了这一点：美苏之间的激烈角逐在短短十年内催生了第一颗卫星、第一次载人轨道飞行和登月——仅靠和平时期的预算，这些成就需要几代人的投入才能实现。因此，竞争凝聚努力、加速创新并奖励卓越。",
      body2: "合作的倡导者坚持认为，人类最伟大的成就都是集体完成的。以人类基因组计划为例：来自二十个国家的科学家公开共享数据，于2003年提前数年、以远低于预算的成本完成了人类DNA图谱；同样的精神让数十个国家建成了国际空间站——这是任何一国都无力独自承担的。因此，当问题足够宏大——气候变化、疫情、贫困——合作能以竞争无法企及的方式汇聚资源和专长。相比之下，过度竞争会助长保密、重复建设甚至暗中破坏。",
      conclusion: "在我看来，任何一方都不应占主导。没有合作的竞争会变得破坏性十足，而没有竞争的合作可能陷入停滞；最健康的体系驾驭两者。企业在市场上竞争，却在共同标准上合作；科学家公开发表成果，又竞相争先。总的来说，当我们竞相做出最大贡献时，进步最快——这能把竞争转化为一种惠及所有人的协作形式。"
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
      body1: "智能手机最大的优点是，它把一整个世界的工具装进了一个口袋大小的设备。例如，肯尼亚农村的农民无需拥有电脑，就能查询农产品价格、通过M-Pesa接收移动支付并获取天气预报；而城市用户则用它导航城市、翻译外语标识并远程问诊。在紧急情况下，智能手机还能救命：日本的地震警报为居民争取到宝贵的避险秒数。这意味着这台设备同时充当银行、图书馆、办公室和生命线，缩小了贫富地区在获取服务上的差距。",
      body2: "然而，智能手机也有严重的缺点。最令人担忧的是强迫性使用，尤其在青少年中。例如，心理学家珍·特文格发表的研究将2012年后智能手机的普及与青少年抑郁和睡眠不足的急剧上升联系起来；普通用户如今每天查看手机超过100次。源源不断的通知流割裂了注意力，使深度阅读和持续交谈变得更加困难。因此，许多家庭反映用餐时在沉默中度过，每个人都盯着各自的屏幕；低头看手机的行人还制造了一类新型交通事故。",
      conclusion: "总之，智能手机是一个强大的工具，既提供前所未有的便利，也伴随成瘾和社交疏离的风险。关键在于有意识地使用：关闭不必要的通知、让手机远离餐桌和卧室、把设备当作仆人而非主人。只要自律地使用，其优点便稳稳超过缺点。"
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
      introduction: "随着城市发展，公共交通成为日益重要的议题。它提供了减少拥堵和降低排放等好处，但也存在拥挤和不灵活等弊端。本文将探讨两者。",
      body1: "主要的好处是规模化效率：一列地铁可以载客上千人，替代数百辆私家车。例如，东京的铁路网络每天运送约4000万人次出行，使这个世界最大都市圈的运转远比洛杉矶这样依赖汽车的城市更畅通、更清洁。公共交通还很公平，让学生、老人和低收入劳动者都能负担得起通勤，获得就业和服务机会。因此，公交系统强大的城市空气更清洁、家庭交通支出更低、城市形态也更紧凑宜居。",
      body2: "然而，主要的缺点是舒适度和灵活性的损失。通勤者必须遵循固定的线路和时刻表，常常要忍受高峰期的拥挤，还可能面临无法掌控的延误。在许多城市——比如美国部分地区公交车班次稀少——没有汽车会让十五分钟的车程变成换乘一小时的路程。深夜服务的空白和空荡车厢里的安全隐患进一步增加了不便。这导致许多中产家庭一旦买得起车就抛弃公共交通，乘客流失又削弱了改善服务的资金来源。",
      conclusion: "总而言之，虽然公共交通显然提供规模化的环境和经济效益，但其不灵活和拥挤的弱点仍是真实的劝退因素。总体而言，解决办法不是放弃公交，而是投资于班次密度、清洁度和安全性，让选择火车而非汽车成为便利之选，而非一种牺牲。"
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
      introduction: "社交媒体重塑了数十亿人的交流方式。支持者赞美前所未有的连接和表达自由，批评者则警告虚假信息和心理健康下滑。本文将考量双方。",
      body1: "最有力的支持论据是，社交平台让发声和社群实现了民主化。一个突出的例子是#MeToo等运动如何在几天内传遍全球，让传统媒体几十年来忽视的性骚扰幸存者拥有了集体发声的渠道；同样，海外侨胞家庭通过微信和WhatsApp零成本地跨洲保持日常联系。小企业也获益巨大：云南的手工艺人仅凭一条爆款视频就能把工艺品卖给欧洲客户。因此，社交媒体把出版、组织和创业的门槛降到了二十年前难以想象的高度。",
      body2: "最有力的反对论据是对注意力和真相的损害。平台的设计目标是最大化用户参与度，这会奖励愤怒和耸动而非准确。例如，麻省理工学院的研究者发现，Twitter上的假新闻传播速度是真新闻的六倍；在选举和疫情期间，这类虚假信息造成了致命的现实后果。重度使用还与青少年的焦虑和体像问题相关——与精心修饰的高光时刻无休止地比较会侵蚀自尊。这可能导致公众注意力涣散、两极分化，连基本事实都难以达成共识。",
      conclusion: "总之，社交媒体带来了连接和机遇，但代价是注意力、真相和心理健康。它是利是弊很大程度上取决于使用方式是否有意识：精心管理的关注列表、时间限制和核实信源能让用户收获好处，而被动地无尽刷屏则会招致伤害。对算法的监管加上更好的数字素养教育，会让天平进一步向好的一方倾斜。"
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
      introduction: "如今超过半数的人类居住在城市，城市化趋势还在加速。它带来了经济机会和更好的服务，但也造成了拥挤和不平等。本文将审视两种影响。",
      body1: "主要的优点是城市汇聚了机会。例如，从湖南农村来到深圳的农民工可以找到比务农收入高数倍的工厂或服务行业工作，同时获得乡村无法支撑的医院、学校和文化设施。高密度城市还很高效：公共交通、集中供暖和共享基础设施降低了人均公共服务成本，企业和人才的聚集则驱动创新。因此，城市化历来是收入增长最强大的引擎，城市化率越高的国家几乎无一例外地更富裕。",
      body2: "主要的缺点是无序增长会制造贫民窟、拥堵和社会压力。在孟买和拉各斯这样的超大城市，数百万人生活在缺乏清洁水和卫生设施的非正式定居点，通勤者每天在交通瘫痪中耗费数小时。房价飙升至普通薪资难以承受的水平——北京和伦敦的年轻专业人士普遍把一半收入花在房租上——老人和穷人被挤向边缘。这导致城市对一部分人是财富的引擎，对另一部分人则是日常的艰辛，空气污染和精神压力几乎影响着每一个人。",
      conclusion: "综上所述，城市化在提供繁荣与服务的同时，也制造了不平等和拥堵。它能否改善生活取决于治理：像新加坡和维也纳这样及早投资于保障性住房、公共交通和卫生设施的城市，把高密度转化成了宜居性；而放任市场失控的城市则把高密度变成了苦难。这一趋势本身不可逆转，因此规划就是一切。"
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
      introduction: "人工智能的发展速度超过历史上几乎任何技术。它有望在医学和生产力上实现突破，但也威胁着就业和人类的主导权。本文将评估双方。",
      body1: "主要的优点在于人工智能以超越人类的速度和规模解决问题的能力。例如，DeepMind的AlphaFold预测了超过2亿个蛋白质的结构——这项工作原本需要生物学家数个世纪——加速了从疟疾到癌症等疾病的药物研发。在日常生活中，人工智能已经可以即时翻译语言、比放射科医生更早地在扫描影像中发现肿瘤，还能优化电网以减少能源浪费。这使人类得以攻克此前算力无法企及的挑战，可能为全球经济增加数万亿美元产值，同时延长健康寿命。",
      body2: "主要的危险在于岗位替代和失控。例如，世界经济论坛估计，自动化在本十年内可能取代数千万个工作岗位——不仅是工厂工人，还有律师助理、翻译和初级程序员——而新岗位的出现速度慢于旧岗位的消失。深度伪造技术已经在侵蚀人们对证据和选举的信任，自主武器更让人担忧机器做出生死决定的前景。如果任其发展，可能导致大规模失业、规模化的操纵，以及权力集中于少数掌握最强系统的公司之手。",
      conclusion: "总之，人工智能带来非凡的好处，但也有严重社会动荡的风险。眼下的当务之急是让治理跟上能力的发展：再培训被替代的劳动者、标注合成媒体、要求高风险的决策必须有人类监督。通过审慎的引导，人工智能可以放大人类的潜能；缺乏引导，同样的力量可能侵蚀就业、真相，最终侵蚀人类的主体性。"
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
      introduction: "旅游业是全球最大的产业之一，疫情前约占全球就业岗位的十分之一。它带来收入和文化交流，但也可能造成环境破坏和文化侵蚀。本文将讨论两方面影响。",
      body1: "主要的优点是经济性的：旅游业把钱直接导入当地社区。例如，在泰国，该产业支撑了约五分之一的GDP，养活了酒店、餐厅、导游和手工艺生产者；在卢旺达，观赏山地大猩猩的许可费同时资助了生态保护和乡村学校。金钱之外，旅行还开阔眼界：游客带着对其他文化的第一手理解回国，东道主社区也因游客慕名而来的传统而获得自豪感和保护传统的动力。这意味着旅游业可以同时提高收入、保护遗产并建立国际友好关系。",
      body2: "主要的缺点是大规模旅游往往毁掉它所赞美的事物。在威尼斯，每年三千万游客逼走了本地居民，把一座活着的城市变成了本地人再也住不起的主题公园；在泰国玛雅湾，因电影《海滩》闻名的沙滩不得不关闭数年，让生态系统从每天数千名游客的压力下恢复。航空排放加剧气候变化，邮轮污染港口，纪念品经济还可能把神圣的仪式降格为表演。因此，旅游目的地面临着用真实性和环境换取短期现金的风险。",
      conclusion: "总之，虽然旅游业带来至关重要的收入和跨文化理解，但也有损害其所依赖的地方与文化的风险。答案在于可持续管理：游客数量上限、环境税，以及推广知名度较低的目的地。只要负责任地经营，旅游业仍是少数能让游客与东道主双赢的产业之一。"
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
      introduction: "对许多家庭来说，拥有汽车既是梦想中的大件消费，也是一笔重大开支。它提供了自由与便利，但也让车主背负高昂的成本和环境上的愧疚。本文将审视双方。",
      body1: "最明显的优点是个人的自由。例如，有车的家庭可以说走就走地探望乡下的长辈，采购食品杂货、接送孩子无需迁就公交时刻表，还能去公共交通难以覆盖的地方上班。紧急情况下差别可能至关重要：午夜开车送生病的孩子去医院只需几分钟，而不是等待救护车或夜班公交。汽车还拓宽了就业选择，因为许多工作——从销售到技工——实际上都要求有车。这让车主能掌控自己的日程，获得无车者难以触及的机会。",
      body2: "最明显的缺点是累积的成本，包括金钱和环境两方面。例如，美国汽车协会的分析显示，拥有一辆新车的真实年度成本——包括折旧、保险、油费、停车和维修——超过一万美元，通常是仅次于住房的家庭第二大开支。汽车约95%的时间处于闲置，却占着宝贵的城市空间；交通运输也仍是城市空气污染和碳排放的最大来源之一。因此，开车的便利实际上由堵车、气候破坏和家庭债务在补贴，而车主很少把这些成本算全。",
      conclusion: "综上所述，拥有汽车以沉重的持续开支和环境损害为代价，提供了无可比拟的灵活性。是否值得主要取决于居住地：在农村和摊大饼式的城市里，它仍近乎必需品；而在公共交通发达、有网约车和共享汽车的密集城市，许多家庭发现偶尔租车胜过长期拥有。"
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
      introduction: "互联网改变了现代生活的几乎每一个方面。它既带来即时获取知识和前所未有的连接，也产生了信息混乱和隐私风险。本文将探讨两个维度。",
      body1: "互联网最宝贵的优点是信息与机会的民主化。一个明显的例子是在线教育：Coursera和可汗学院等平台让印度农村的学生可以免费学习斯坦福大学教授的计算机课程，这在三十年前是不可想象的。小企业同样受益——摩洛哥的工匠可以通过Etsy或阿里巴巴直接向欧洲客户销售，无需中间商。远程医疗、在线法律咨询和科学论文的免费开放同样拉平了曾经受地理与财富限制的领域。因此，互联网缩小了机会差距，赋能了曾被排除在知识和市场之外的个人。",
      body2: "另一方面，互联网带来严重风险，尤其是虚假信息和隐私的侵蚀。例如，新冠疫情期间，虚假疗法和疫苗阴谋论在社交媒体上的传播速度快于卫生机构的辟谣，世界卫生组织甚至创造了「信息疫情」一词来描述其危害。与此同时，各平台收集用户行为用于广告变现：2018年剑桥分析丑闻曝光，8700万脸书用户的数据在未经有效同意的情况下被用于政治定向投放。这可能导致选举被操纵、社会两极化、公民不知该信任哪些信息源，而儿童还面临网络欺凌和网络捕食者的额外危险。",
      conclusion: "总之，互联网既是有史以来最伟大的图书馆和市场，也是操纵与监控的渠道。归根结底，其价值取决于社会如何明智地治理它——通过媒介素养教育、可执行的隐私法律和负责任的平台设计——以及用户能否以批判而非被动的方式使用它。"
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
      introduction: "自发明以来，电视一直主导着家庭娱乐。支持者看重它的教育和共同文化体验价值，批评者则指责它造成被动消费和健康损害。本文将考虑两种观点。",
      body1: "电视的主要优点在于其无与伦比的信息传播和凝聚大众的能力。例如，BBC《地球脉动》系列等自然纪录片把偏远生态系统带进全球客厅，唤醒了一代人的环保意识，推动了真实的政策变革——海洋污染画面震撼观众后，多国出台了塑料袋禁令。重大直播还创造了全民共同时刻——估计有6亿人共同观看了1969年登月，奥运会、王室婚礼等活动至今仍在凝聚社会的集体体验。此外，教育频道和新闻节目仍是老年人和识字有限者最容易获得的信息来源。这使得电视能够发挥真正的公共服务功能，而不仅仅是娱乐。",
      body2: "然而，电视也带来危害，最明显的是久坐习惯和扭曲的世界观。研究表明，每天看电视超过三小时的儿童肥胖概率显著更高，学业表现也更差；美国儿科学会将过度的屏幕时间与睡眠问题和注意力困难联系起来。广告直接向年轻观众推销垃圾食品，使问题雪上加霜。对成年人而言，持续接触犯罪报道会催生研究者所称的「冷酷世界综合征」——即认为社会远比统计数据显示的更加危险。这导致身体健康下降、家庭交流减少，重度观众还会出现焦虑和对社会现实的错误认知。",
      conclusion: "总之，电视提供教育和文化凝聚力，但有被动、肥胖和认知扭曲的风险。答案在于有选择、有限度地观看：把电视当作偶尔的共享活动而非持续背景音的家庭，能够保留它的好处，同时避开大部分已被证实的危害。"
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
      introduction: "快餐已成为全球现象，因便利和实惠而受到欢迎，也因健康后果而受到批评。本文将审视这一问题的两面。",
      body1: "快餐的主要优点是它几乎能瞬间提供便宜且品质可预期的餐食。例如，一位打两份工的单亲家长花几美元就能让孩子吃上热饭，省去一小时的做饭和洗碗，这解释了为何免下车窗口集中在低收入和时间紧张的社区。该行业还提供了大量就业：仅麦当劳在全球就雇有约200万人，常给青少年提供第一份工作经历和可配合学业的灵活工时。此外，标准化的厨房在街头食品卫生不可靠的国家保证了清洁与稳定品质。因此，快餐填补了一个传统餐馆难以覆盖的真实的经济与后勤空缺。",
      body2: "最严重的缺点是快餐对公共健康造成的损害。研究表明，一份典型的汉堡套餐所含热量、饱和脂肪和盐分超过成人每日建议摄入量的一半；《全球疾病负担》研究将每年数百万例过早死亡归因于高度依赖加工食品的饮食。接纳西式快餐的国家肥胖率随之攀升——在快餐业迅速扩张的一代人时间里，墨西哥成人肥胖率逼近40%。商家用玩具和卡通吉祥物向儿童营销，培养出延续到成年的饮食习惯。因此，各国面临糖尿病和心脏病的流行，医疗系统承担的成本远超收银台前省下的钱。",
      conclusion: "总之，快餐以长期健康损害为代价提供了无与伦比的便利和实惠。明智的做法是适度消费配合更明智的政策：偶尔吃一次无伤大雅，而更清晰的热量标注、限制针对儿童的广告以及改良配方，可以在保住行业真实好处的同时，不让它悄悄向公共健康征税。"
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
      introduction: "广告围绕着我们生活的每一块屏幕和每一条街道。支持者认为它为消费者提供信息并资助免费服务，反对者则抱怨它制造虚假欲望。本文将评估两种主张。",
      body1: "支持广告最有力的理由是它传递有用信息，并资助了大部分现代媒体。一个很好的例子是公众宣传：关于酒驾、吸烟和疫苗接种的广告活动已可量化地改变了行为，商业广告也提供类似服务——告诉消费者存在更便宜或更好的产品，迫使企业在质量和价格上竞争。同样重要的是，广告为人们免费享用的服务买单——没有它，谷歌、YouTube、独立新闻网站和广播电台都需要订阅付费。小企业尤其依赖精准广告触达它们原本无法触及的客户。这意味着广告润滑了经济，并维持了一个多元、可及的媒体生态。",
      body2: "最常见的批评是广告操纵情感并制造不必要的需求。例如，奢侈品牌推销手表和手袋靠的不是功能，而是人为制造的地位焦虑；美妆广告则通过把数字修图后的身体呈现为常态，利用人们的不安全感牟利。儿童尤其脆弱：研究显示大多数儿童约八岁前无法区分广告与内容，然而他们每年接触数千条营销信息，助长了「纠缠力」和物质主义。在线上，行为定向广告以少数人理解或同意的方式跨网站追踪用户。因此，广告助长了过度消费、负债、身体形象障碍，以及一种把幸福等同于购物的文化。",
      conclusion: "总之，广告在为消费者提供信息和资助免费媒体方面发挥着有益作用，但它也操纵不安全感并驱动过度消费。平衡取决于监管与素养：禁止面向幼儿的广告、要求修图广告如实标注、教授批判性媒介技能，这些都能在保留其经济利益的同时遏制其心理危害。"
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
      introduction: "移民是我们这个时代最具定义性的现象之一。它带来经济活力和文化丰富性，但也引发对融合问题和人才外流的担忧。本文将讨论两个方面。",
      body1: "对接收国而言，最明显的好处是移民填补劳动力短缺并驱动创新。例如，美国科技行业在很大程度上由移民建立——谢尔盖·布林从俄罗斯移民后联合创立了谷歌，研究显示财富500强企业中超过40%由移民或其后代创办。老龄化社会受益更多：德国和加拿大积极招募外国护士和护工，因为本国劳动力无法支撑不断增长的老年人口。移民还纳税、以高于本地人的比例创业，并让衰落的社区重获生机。对移民输出国而言，侨汇意义重大——世界银行估计2022年侨汇超过6000亿美元，远超外国援助，直接资助了尼泊尔、菲律宾等国的教育和住房。",
      body2: "然而，移民也造成困难，包括公共服务压力和融合挑战。例如，移民的快速涌入可能使住房、学校和医院的紧张速度快于政府的扩张速度——瑞典在2015年接收大量难民后就深有体会，当时轮候名单变长，公众对移民的支持率急剧下降。语言障碍和歧视可能使拥有资质的新移民困于低薪工作，在双方心中都滋生挫败感。与此同时，输出国遭受人才流失：撒哈拉以南非洲每年流失数千名急需的医生和护士，流向富裕国家的医疗体系。这可能导致目的地国的社会紧张和来源国公共服务的空心化。",
      conclusion: "总之，移民提供经济活力和跨文化交流，但也带来融合压力和人才流失。成功的结果需要积极的政策：语言培训、学历资历认证、住房投资以及让技能回流祖国的循环移民计划。管理得当，移民能丰富两个社会；消极放任，则会让双方都承受压力。"
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
      introduction: "科技已进入各级课堂，带来个性化学习和全球可及性，但也引发对注意力分散和不平等的担忧。本文将审视两种影响。",
      body1: "科技在教育中最大的好处是它能让教学适应每个学生，并拆除地理壁垒。例如，可汗学院等自适应平台会分析学生做错的题目并自动调整难度，让跟不上的学生获得额外练习，让学得快的学生加速前进——这是面对四十名学生的老师无法复制的。新冠封控期间，视频会议让超过十亿儿童的学业得以延续，录播课程让偏远村庄的学生获得与首都学生相同的教学内容。因此，设计良好的教育科技可以缩小学习差距，用语音转文字工具支持残障学生，并把教师从照本宣科中解放出来专注于辅导。",
      body2: "然而，教育科技也有缺点，最重要的是注意力分散和数字鸿沟。例如，经合组织的研究发现，在校高强度使用电脑的学生阅读成绩反而不如适度使用者，部分原因是设备诱发多任务——一个看似在记笔记的学生可能实际在给朋友发消息。基于屏幕的学习还会削弱手写和深度阅读习惯，而这些习惯是持续专注力的基础。最严重的是，昂贵的设备和快速的网络并非人人可得：疫情期间，没有笔记本电脑或稳定网络的学生干脆从虚拟课堂消失，联合国教科文组织估计数以亿计的学生完全无法获得远程学习。这可能导致贫富学生之间既有的成绩差距急剧扩大。",
      conclusion: "总之，教育科技提供个性化与可及性，但威胁专注力与公平。最佳做法是有目的的整合：设备应服务于明确的教学目标，屏幕时间应与书本和讨论平衡，政府必须保障所有家庭的基础网络连接。把科技当作有纪律的工具而非替代教师，它能放大优质教育；用得草率，它就会侵蚀教育。"
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
      introduction: "随着气候担忧加剧，可再生能源正在全球范围内取代化石燃料。尽管可再生能源提供清洁电力和不断下降的成本，但也存在间歇性和土地利用方面的挑战。本文将评估两者。",
      body1: "可再生能源的主要优点是发电无需燃料成本也不产生碳排放，且价格持续下降。例如，2010年至2023年间太阳能发电成本下降约90%，据国际能源署称，它已成为世界大部分地区新建电力中最便宜的来源。丹麦一半以上的电力已来自风电，乌拉圭在十年内几乎把全国电网转为可再生能源，同时降低了排放和能源进口账单。可再生能源设施还创造了无法外包的制造和维护岗位，屋顶光伏让家庭摆脱波动的能源市场。这带来更清洁的空气、更强的能源安全，以及免受化石燃料依赖所招致的地缘政治冲击。",
      body2: "主要缺点是间歇性：太阳不总是照耀，风不总是吹。例如，在平静的冬夜，德国庞大的风电装机有时几乎不发电，迫使该国重启煤电厂或从法国进口核电；南澳大利亚州2016年因风暴损毁输电设施而发生大停电。大规模储能仍然昂贵——电池只能支撑数小时而非数周——而庞大的太阳能电场和风力发电机占用土地，可能危害鸟类种群和自然景观。为电池和涡轮机开采锂、钴和稀土也在生产国造成污染和人权问题。因此，纯可再生能源电网仍需要备用容量和储能，这些都增加了隐性成本。",
      conclusion: "总之，尽管存在间歇性和材料需求问题，可再生能源仍带来清洁且日益便宜的能源。明智的路径是有管理的转型：投资电网级储能和跨区域联网，保留多元备用电源，并回收电池材料，从而在不为可靠性冒险的前提下获得明确的环境效益。"
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
      introduction: "现代超市的货架上摆满来自地球每个角落的食品。这种全球食品贸易提供了多样性、低价格和粮食安全，但也产生了排放和脆弱的供应链。本文将讨论两者。",
      body1: "全球食品贸易的主要好处是它让人们不受季节和本地条件限制地获得食物。一个明显的例子是北欧：没有进口，那里半年没有新鲜蔬菜——英国消费者在一月吃到西班牙番茄，而阿联酋这样几乎没有耕地的中东国家靠贸易养活全部人口。专业化还降低了价格——各地区种植最适合其气候的作物，从新西兰羊肉到泰国大米，全球竞争压低了成本。至关重要的是，贸易提供了保险：当干旱或洪水摧毁一国收成时，进口能防止饥荒。这使得饮食比任何单一国家所能做到的更加多样、有营养且实惠。",
      body2: "它最严重的缺点是环境成本和系统脆弱性。例如，空运芦笋和易腐浆果每公斤产生的排放是本地应季农产品的数十倍，而整个食品系统约占全球温室气体排放的三分之一。漫长的供应链也会断裂：2022年俄罗斯入侵乌克兰时，小麦出口骤减，从埃及到孟加拉国面包价格飙升，显示出各国对少数出口国的依赖程度。与此同时，发展中国家的小农户要与享受补贴的工业化农业和波动的世界价格竞争，许多人被迫放弃土地。这导致不必要的排放、对遥远冲击的脆弱性，以及本地饮食文化的空心化。",
      conclusion: "总之，全球食品贸易带来多样性、实惠和饥荒保险，但付出了气候代价并制造了依赖。平衡的政策应当主粮和应季农产品优先区域供应，长途贸易留给真正稀缺的商品，并投资仓储和多元化采购，使效率永远不应凌驾于韧性之上。"
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
      introduction: "外包已成为标准的商业战略。企业追求它以降低成本、获取全球人才，但它也因国内岗位流失和质量风险而受到批评。本文将审视两面。",
      body1: "外包的主要优点是大幅降低成本，同时获得稀缺技能。例如，当一家英国银行把客服中心迁往菲律宾、把软件开发迁往波兰时，人力成本可下降一半甚至更多，这些节省可用于降价、提高利润或进一步投资。印度科技行业展示了对接收国的好处：印孚瑟斯和塔塔咨询等公司雇用数十万高薪工程师服务全球客户，该行业把班加罗尔等城市变成了全球枢纽。时区甚至可以成为资产——伦敦下班时交给悉尼的项目整夜持续推进。这使企业能够在国际上竞争，同时把收入导入发展中经济体。",
      body2: "最显著的缺点是国内岗位的流失和对质量控制的削弱。例如，当美国制造商把生产转移到墨西哥和中国时，俄亥俄、密歇根等州的整个城镇失去了经济基础；经济学家戴维·奥特的研究把这种「中国冲击」与受影响地区持续的失业和社会衰退联系起来。服务外包也有自身风险：客户苦于应对照本宣科的呼叫中心客服，多家航空公司和银行在质量投诉损害品牌后已把业务迁回国内。数据安全是另一个担忧，因为敏感信息跨越边境进入隐私法规不同的司法辖区。这可能导致国内社区空心化、国外客户失望，以及针对贸易本身的政治反弹。",
      conclusion: "总之，外包提供效率和共享繁荣，但有国内动荡和质量滑坡的风险。企业应当有选择地外包——把核心专业能力和对客户至关重要的职能留在内部——同时政府投资再培训，让失业工人转入全球化经济仍在创造的高价值岗位。"
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
      introduction: "社交媒体已成为必不可少的营销渠道。它承诺精准定向和直接的客户关系，但也伴随着声誉波动和对算法的依赖。本文将评估两者。",
      body1: "社交媒体营销最大的优点是，它让哪怕极小的企业也能以极低成本触达恰好正确的客户。一个很好的例子是直接面向消费者品牌的崛起：Gymshark等公司从车库创业成长为十亿英镑企业，几乎完全依靠Instagram网红和社区内容，从未买过电视广告。各平台的定向工具允许一家社区面包房只向五公里内关注烘焙账号的用户投放广告，这是任何广告牌或报纸都做不到的。社交渠道还创造双向关系——客户评论、分享并捍卫他们喜爱的品牌，规模化地产生真实的口碑。这意味着当对话显得真诚时，营销预算花得更值，客户忠诚度也更深。",
      body2: "它最危险的缺点是品牌失去对自身叙事的控制，并沦为平台规则的人质。例如，一条批评视频可能一夜之间疯传，抹掉多年的品牌建设——美联航2017年就深有体会，当时一名乘客被拖下航班的画面被观看了数亿次，其市值一度蒸发近十亿美元。与此同时，自然触达持续崩塌——曾经能触达大多数粉丝的脸书主页，如今不付费只能触达百分之几——所谓的免费营销变成了不断攀升的广告账单。算法变更可以一夜之间摧毁一种商业模式，网红合作则可能因对方个人丑闻而受牵连。这可能导致脆弱的可见度、不可预测的成本，以及超出任何营销团队控制的声誉危机。",
      conclusion: "总之，社交媒体营销带来无与伦比的定向和互动，但需要时刻警惕波动。成功需要把它当作众多渠道之一：品牌应通过邮件列表和官网建立自己的受众，持续监测舆情，永远不让租来的平台成为唯一的家。"
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
      introduction: "空气污染已成为最紧迫的城市挑战之一。世界卫生组织估计，室外空气污染每年导致超过四百万人过早死亡；在德里这样的城市，冬季雾霾经常使颗粒物浓度达到安全上限的二十倍。本文将审视其主要原因，即机动车排放和煤炭工业，并提出包括清洁公共交通和更严格工业监管在内的对策。",
      body1: "该问题主要源于以化石燃料为动力的私家车的爆炸式增长。例如，北京的机动车保有量从2000年的不足两百万辆增长到今天的六百多万辆，在无风天气里，交通尾气约占全市PM2.5的三分之一。此外，燃煤电厂和重工业也有重要贡献：在中国北方和印度工业带，冬季供暖和工厂生产释放的二氧化硫和细颗粒物会跨区域漂移，这意味着即使是本地政策清洁的城市也会遭受输入性雾霾。",
      body2: "为解决这一问题，政府应当大力投资清洁公共交通，同时限制私家车使用。伦敦的超低排放区对污染最严重的车辆收费，四年内使路边二氧化氮减少了近一半；深圳已将其全部1.6万辆公交车电动化。此外，更严格的工业监管也能发挥作用，例如强制工厂安装脱硫设备，并加速从煤炭向可再生能源转型，中国的碳交易试点和关停高污染工厂就是证明。拥堵收费、自行车基础设施和绿色建筑标准则能巩固这些成效。",
      conclusion: "总之，尽管空气污染源于机动车排放和煤炭工业，但通过清洁公共交通与严格工业标准的组合可以显著改善城市空气质量。伦敦、深圳和北京的经验表明，坚定的政策能在数年而非数十年内产生可量化的成果。"
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
      introduction: "交通拥堵在全球城市浪费了数十亿小时。根据INRIX全球交通记分卡，伊斯坦布尔和墨西哥城的司机每年在拥堵中损失超过100小时，这些时间本可用于工作或陪伴家人。本文将找出其根本原因，包括依赖汽车的城市设计和道路使用定价过低，并提出拥堵收费和公共交通投资等补救措施。",
      body1: "第一个主要原因是迫使人们开车的城市规划。例如，许多中国和美国城市围绕宽阔的干道和单一用途分区建成或改建，住宅、办公室和商店相距遥远，每次出行都需要汽车；随着收入增长，汽车保有量爆炸式地填满这种设计。其次，道路在使用环节实际上是免费的，这鼓励了过度使用。每个司机只考虑自己的时间，忽视了强加给其他所有人的延误——经济学家称之为未定价的外部性，这也解释了为何新车道几个月内就会再次被填满，即「诱导需求」现象。",
      body2: "一些措施可以缓解拥堵。最有效的是对稀缺的道路空间收费：新加坡的电子道路收费系统自1975年以来保持了交通畅通，伦敦的拥堵费使进入市中心的车辆减少了约三分之一。另一个有用的方法是投资有吸引力的替代方式——地铁、快速公交和受保护的自行车道——通过为通勤者提供真正更快的选择来实现；波哥大的TransMilenio公交每小时运送的乘客超过一条十二车道高速公路。弹性工作制和远程办公政策也能削平高峰需求。",
      conclusion: "总之，拥堵源于依赖汽车的设计和免费的道路使用，但采取定价和认真投资公共交通的城市已经证明，交通瘫痪并非不可避免。新加坡、伦敦和波哥大的经验是，管理需求比无休止地扩大供给更有效。"
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
      introduction: "年轻人的压力已达到令人担忧的水平。美国心理学会的调查一直显示青少年报告的压力水平高于成年人，发达国家青少年自残的住院人数也急剧上升。本文将探讨其关键驱动因素，即学业竞争和社交媒体攀比，并提出学校心理咨询改革和限制数字接触等对策。",
      body1: "一个主要原因是无休止的学业竞争。例如，韩国学生通常在名为「学院」的补习班学习到午夜以后，全国青少年自杀率在大学入学考试前后激增；即使在竞争不那么极端的体系里，学生也内化了「一次考试决定整个未来」的观念。另一个重要因素是社交媒体，因为Instagram等平台不断推送经过修饰的完美形象，青少年拿自己的平凡生活与之比较。发表在《柳叶刀》上的研究将青春期早期的重度社交媒体使用与后来的抑郁联系起来，女孩尤其如此；而网络欺凌意味着人们再也无法逃离同伴的评判，哪怕在午夜家中。",
      body2: "学校和家庭可以通过把心理健康支持嵌入日常校园生活来应对。芬兰培训教师及早发现心理困扰，并提供免费的学校心理学家服务，之所以有帮助，是因为问题在演变成危机之前就得到处理；正念课程和合理的作业量上限也显示出类似的益处。此外，政府应当监管数字环境——年龄验证、限制成瘾性设计功能、以及像法国对15岁以下学生实施的无手机校园时段——能通过减少攀比和骚扰接触来减轻压力。父母以身作则养成健康的设备使用习惯同样重要。",
      conclusion: "总之，青少年压力由学业压力和社交媒体的攀比经济驱动，但通过校本心理健康服务和合理的数字监管，我们可以保护下一代的心理健康。把压力当作系统性问题而非个人软弱，是必不可少的第一个认知。"
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
      introduction: "清洁水源在许多地区正变得稀缺。联合国报告，超过二十亿人生活在水资源高度紧张的国家，受污染的水每年造成的死亡超过所有形式的暴力总和。本文将分析水污染的主要来源，特别是工业排放和农业径流，并提出包括强制执行处理标准和精准农业在内的措施。",
      body1: "最重要的原因是未经处理的工业废水。例如，孟加拉国达卡周边的制衣区把染料和重金属直接排入河流，下游社区却用这些水饮用和灌溉；恒河的某些河段粪便污染超出安全上限数千倍，尽管治理计划已实施数十年。此外，农业也破坏水资源，因为化肥和农药从田地冲入水道：来自美国中西部的硝酸盐径流每年夏天在墨西哥湾制造出一个面积相当于新泽西州的「死亡区」，鱼类无法生存。塑料垃圾和在暴雨中溢流的老旧污水系统进一步加剧了污染。",
      body2: "要恢复水质，当局必须执行有真正惩罚力的强制处理标准。欧盟《水框架指令》要求成员国将河流恢复至良好生态状态，已让莱茵河这样曾经「死亡」的河流明显变清，证明只要监测透明、罚款超过合规成本，监管就能奏效。同样重要的是，精准农业从源头减少化学品使用：在以色列广泛应用的滴灌和传感器制导施肥只在作物需要的地方输送养分，使径流减少三分之一甚至更多。人工湿地则为农村社区提供了低成本的末端过滤。",
      conclusion: "总之，由工业排放和农业径流造成的水污染可以通过强制执行处理标准和更聪明的农业得到扭转，前提是政府果断行动。莱茵河的复苏表明，当污染者付出代价、农民获得更好的工具时，即使严重退化的河流也能在一代人的时间里恢复生机。"
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
      introduction: "森林正以毁灭性的速度消失。地球每年失去约一千万公顷森林——相当于韩国的国土面积——而亚马逊已经失去了约五分之一的原始覆盖，正逼近一个临界点，越过之后雨林可能退化为草原。本文将审视其主要驱动因素，即商业农业和土地治理薄弱，并提出供应链压力和依法保护等对策。",
      body1: "森林砍伐的主要驱动因素是商业农业的扩张。例如，养牛业和大豆种植占亚马逊砍伐的绝大部分；在印度尼西亚，古老的泥炭林被烧毁以为棕榈油种植园让路，既释放碳排放，又制造出几乎每年都笼罩东南亚的烟霾。另一个原因是土地治理薄弱，让非法伐木者和土地掠夺者逍遥法外：在边境地区，道路被开辟进原始森林深处，地契被伪造，执法机构资金不足或腐败。贫困也起了作用，因为当没有其他生计时，小农户只能靠开荒求生。",
      body2: "打击森林砍伐需要通过全球供应链施压。2006年主要大豆贸易商签署《亚马逊大豆停购协议》，拒绝购买新开垦土地上的大豆后，与大豆相关的毁林在两年内崩溃——之所以有效，是因为它消除了破坏的利润；类似的零毁林承诺现已覆盖大部分牛肉和棕榈油贸易。此外，依法保护通过让留存的森林比被开垦的土地更有价值来实现：2004至2012年间，巴西通过卫星监测、罚款和受保护的原住民领地将亚马逊砍伐率降低了80%以上，而哥斯达黎加的生态系统服务付费项目则彻底扭转了森林砍伐。",
      conclusion: "总之，尽管森林毁于农业扩张和法治缺失，但结合供应链压力与依法保护的战略可以阻止并最终扭转破坏。巴西此前的成功证明工具已经存在，需要的是持之以恒运用它们的政治意愿。"
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
      introduction: "失业损害个人和社会。除了收入损失，失业与抑郁、家庭破裂甚至预期寿命缩短密切相关，而长期失业的地区往往陷入持久衰退。本文将讨论其主要原因，包括自动化和经济结构调整，并提出积极再培训和公共投资刺激等补救措施。",
      body1: "失业的一个根本原因是技术性替代。例如，自动收银、机器人仓库以及如今的AI软件已经消灭了数以百万计曾经雇用低技能劳动者的常规岗位；仅美国卡车运输业就雇有三百万司机，其工作最终面临自动化。另一个促成因素是经济结构调整，因为全球化把制造业从高工资国家转移到低工资国家——当小镇上唯一一家工厂关闭时，周边的商店和服务也随之崩溃，形成集中的长期失业区，英格兰北部和美国中西部铁锈带就是如此。经济衰退又会在这些结构性伤口上叠加周期性失业。",
      body2: "政府可以通过投资积极的劳动力市场项目而非消极的救济来降低失业率。丹麦的「灵活保障」模式把宽松的雇用解雇制度与慷慨的支持和强制的高质量再培训结合起来，使失业率保持低位，因为工人在岗位之间快速流动，而不是被困在衰亡的行业；新加坡的「技能创前程」补贴同样为每位成年人的职业中期再培训提供资金。此外，公共投资直接创造就业：基础设施项目、绿色能源改造和护理行业扩张创造的岗位无法外包；德国的短时工作制在经济下行期补贴缩减工时而非裁员，在2008年和2020年危机中保住了数百万个岗位。",
      conclusion: "总之，尽管失业源于自动化和经济结构调整，但积极再培训和战略性公共投资等针对性政策可以把失业率降到可控水平。成功的国家把失业工人视为需要重新部署的资产，而非需要削减的成本。"
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
      introduction: "尽管全球繁荣，贫困仍然普遍存在。近七亿人仍生活在每天不足两美元的极端贫困中，还有数十亿人无法稳定获得食物、医疗和教育。本文将探究其根本原因，特别是资本与机会缺失造成的贫困陷阱以及制度薄弱，并提出直接现金支持和投资教育健康等对策。",
      body1: "贫困最深的原因是贫困陷阱本身：没有储蓄、信贷或土地，穷人无法投资那些恰恰能提高收入的东西。例如，买不起化肥的农民收成太少而无法储蓄，让孩子辍学打工的家庭牺牲了孩子未来的收入——贫困自我复制。贫困还因制度薄弱而延续，因为腐败官员、不安全的产权和冲突摧毁了经济生活的基础：南苏丹和刚果民主共和国拥有巨大的自然财富，但数十年的治理不善和战争使其人口成为地球上最贫困的群体之一；进入这类体系的援助往往在到达穷人手中之前就被截留。",
      body2: "有效的解决方案包括直接现金转移支付。巴西「家庭补助金」和墨西哥「进步计划」的证据表明，以入学和接种疫苗为条件向贫困家庭提供小额定期付款，能以极低成本削减贫困，同时改善儿童的营养和教育；在肯尼亚对无条件转移支付的随机试验也发现了类似的收益，且工作意愿并未下降。另一个有力措施是投资基础医疗和教育，其作用机制是提高下一代的生产力：东非的驱虫项目每个儿童仅花费几美分，却显著提高了成年后的收入；中国的扫盲运动和农村医疗运动为人类历史上最快的减贫奠定了基础。",
      conclusion: "总之，贫困因自我强化的稀缺和制度失灵而持续存在，但经验证明现金转移支付和人力资本投资可以打破这一循环。任务不在于发现什么有效——而在于诚实、大规模地将其落实。"
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
      introduction: "现代社会产生的垃圾已超过其处理能力。世界银行预测，全球城市垃圾将从今天的二十亿吨增长到2050年的三十四亿吨，每年估计有八百万吨塑料进入海洋。本文将找出其原因，最重要的是一次性消费文化和倾倒成本过低，并提出生产者责任法和回收基础设施投资等对策。",
      body1: "垃圾增长主要因为建立在廉价材料之上的一次性经济。例如，Shein等快时尚零售商每天发布数千款低价新品，一件衣服的平均穿着次数如今只有寥寥几次就被丢弃；包装也讲述着同样的故事——约40%的塑料只使用一次就被扔掉。问题还因倾倒被人为压低成本而加剧，因为填埋费和塑料价格不包含环境成本，制造商没有经济动机为耐用性或可回收性而设计。发展中国家承受双重痛苦，接收从富裕国家出口而来、自己却没有设施安全处理的垃圾。",
      body2: "要可持续地管理垃圾，政府应当让生产者对产品的整个生命周期负责。德国和韩国的《生产者责任延伸法》要求制造商出资回收，已将回收率推高至50%以上——德国目前的城市垃圾回收率约三分之二，居世界首位。另一个必要步骤是投资恰当的基础设施，即安全的卫生填埋场、有机垃圾分类堆肥，以及押金返还制度——挪威等国通过押金制实现了超过90%的瓶子回收率。英国推行的填埋税和塑料袋收费则通过让浪费行为变得昂贵来巩固这一转变。",
      conclusion: "总之，由一次性文化和低成本倾倒驱动的垃圾危机可以通过生产者责任和认真的回收基础设施建设来克服，把线性经济转变为循环经济。在这一领域领先的国家证明，高生活水平并不意味着高垃圾量。"
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
      introduction: "网络犯罪如今每年给全球经济造成数万亿美元的损失。网络安全公司的估计显示，年度损失超过八万亿美元——超过除美国和中国以外每个国家的GDP——涵盖勒索软件、诈骗和数据盗窃。本文将分析其增长原因，聚焦低风险网络攻击的高收益和数字防御的薄弱，并提出国际法律合作和更好的安全习惯等对策。",
      body1: "网络犯罪扩张主要因为它以极小风险提供巨额回报。例如，2021年针对科洛尼尔管道公司的勒索软件攻击切断了美国东海岸的燃料供应，一次行动就为犯罪分子赚取数百万美元，然而从没有引渡协议的司法辖区发起的攻击很少导致逮捕；东南亚的工业化诈骗园区以几乎完全不受惩罚的方式运营着「杀猪盘」和投资诈骗。第二个驱动因素是糟糕的安全实践，因为受害者让攻击变得容易：2017年的WannaCry蠕虫利用一个补丁已发布数月的漏洞，感染了全球数十万台电脑，包括英国国民医疗服务体系的部分机构。弱密码、未打补丁的软件和未经培训的员工仍是常态。",
      body2: "要打击网络犯罪，当局应当加强国际合作，使任何司法辖区都无法提供避风港。《布达佩斯网络犯罪公约》已使数十个国家能够跨境共享证据，欧洲刑警组织与FBI的联合行动已捣毁多个主要勒索软件网络和暗网市场——之所以有效，是因为它提高了犯罪的风险，从而侵蚀其利润。同时，强制性安全标准从源头降低脆弱性：要求多因素认证、及时打补丁和员工培训——正如欧盟NIS2指令如今对关键服务机构的要求——已被证明能阻挡绝大多数机会主义攻击。",
      conclusion: "总之，网络犯罪因高回报、低风险和防御薄弱而猖獗，但国际执法与强制安全规范的组合可以让数字世界变得安全得多。由于攻击者专挑最薄弱的环节，防御必须普及而非可有可无。"
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
      introduction: "教育不平等限制社会流动性并浪费人才。在许多国家，一个孩子的邮编比他的能力更能预测考试成绩，富裕家庭的孩子完成大学学业的可能性是同等聪明的贫困孩子的数倍。本文将审视其原因，尤其是与地方财富挂钩的教育经费和不平等的早期儿童发展，并提出加权教育拨款和普及早期教育等补救措施。",
      body1: "教育不平等的主要原因是学校质量随房产财富而定。例如，美国学校主要由地方房产税资助，因此富裕郊区每名学生的经费可能是几英里外贫困学区的两倍，可以购买更小的班额、经验丰富的教师和高级课程；中国则呈现镜像——优质城市学校集中资源，而农村学校难以留住合格教师。不平等在入学前就已被强化，因为弱势儿童听到的词汇更少、读的书更少、上的学前教育更少：多个国家的研究发现，词汇量和入学准备度的差距在三岁时就已可测量，起步落后的孩子很少能赶上。",
      body2: "要缩小差距，政府应当实行累进式拨款，向需求更大的学校投入更多资金。英格兰的「学生补贴」为每名弱势学生向学校支付额外经费，荷兰的生均拨款公式也表明这有帮助，因为资源终于与需求而非社区财富相匹配。进一步的措施是普及高质量的学前教育，让起跑线平等：法国的免费公立幼儿园和美国的「开端计划」明显提高了贫困儿童的学业成就，其益处延续到更高的毕业率和成年收入。芬兰把针对性辅导和校餐结合起来，实现了著名的平等结果，进一步强化了这种效果。",
      conclusion: "总之，根植于财富拨款和不平等童年的教育不平等，可以通过累进拨款和普及学前教育来缩小，让每个孩子都有公平的起点。在早期投资的社会，日后在福利、监狱和浪费的潜能上的支出会更少。"
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
      introduction: "多数国家的医疗成本上涨速度超过收入增长。美国将近五分之一的GDP用于医疗——约为其他富裕国家平均水平的两倍——却仍让数百万人没有医保，而随着人口老龄化，即便是全民医保体系也面临不断膨胀的预算。本文将审视其主要驱动因素，特别是慢性生活方式疾病和药企与保险公司的定价权，并提出以预防为主的医疗和集体价格谈判等对策。",
      body1: "成本首先被向昂贵的慢性病转移的趋势推高。例如，糖尿病、心脏病和癌症——很大程度上与肥胖、吸烟和久坐生活方式相关——如今消耗了医疗预算的大头；治疗一名美国糖尿病患者每年花费约1.7万美元，且是终身支出。第二个驱动因素是供给方的市场力量，因为分散的买家面对的是集中的卖家：制药公司在专利保护允许的范围内随意定价，美国胰岛素价格在二十年间涨了两倍就是一个例证，而这种药已有百年历史；医院合并则让占主导地位的医院集团得以在不改善服务的情况下提价。多保险公司体系中的行政浪费又增加了数千亿美元。",
      body2: "要控制成本，政府可以把医疗体系从治病转向防病。其原理是从源头削减需求：墨西哥的糖税减少了含糖饮料的购买，英国的筛查和戒烟项目在疾病最便宜治疗的早期就将其发现，因为在预防上花的每一美元能省下数美元的治疗费。另一个有效策略是集体价格谈判，用国家的购买力作为制衡：澳大利亚和新西兰全国统谈药价，为完全相同的药品支付的价格仅为美国的零头；德国的参考定价则为同等疗效药物设定了医保支付上限。",
      conclusion: "总之，由慢性病和供给方定价权导致的医疗成本上涨，可以通过预防和集体谈判得到控制，让所有人负担得起医疗。把健康当作需要管理的公共产品而非放任的市场，这样的国家始终以更少的钱取得更好的结果。"
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
      introduction: "社会正以前所未有的速度老龄化。日本65岁以上人口已几乎是15岁以下人口的两倍，到2050年全球每六人中就有一人超过65岁，养老金体系、医疗服务和劳动力市场都承受压力。本文将审视其原因，聚焦出生率下降和预期寿命延长，并提出提高退休年龄、吸纳劳动年龄移民以及生育支持等应对。",
      body1: "人口老龄化首先由生育率崩溃造成。例如，韩国的总和生育率已跌破每位女性0.8个孩子——有记录以来全球最低——因为住房成本、教育压力和女性职业代价让生育失去吸引力；中国在数十年计划生育之后，人口已于2022年开始缩减。老龄化还被惊人的长寿加速，因为医学进步大幅延长了寿命：1970年以来多数富裕国家的预期寿命上升了十年以上，意味着退休人员如今领取养老金二十年而非十年，而供养他们的劳动人口却在缩减。现收现付养老金制度的算术逻辑已经无法成立。",
      body2: "政府可以通过延长工作年限来应对。像丹麦和荷兰那样通过立法让退休年龄与预期寿命自动挂钩，之所以有帮助，是因为它扩大了缴费者基础，同时缩短了领取年限；灵活的部分退休和年龄友好型工作场所让年长员工保持生产力，而不是被排挤出去。一个互补的方法是通过移民和家庭支持扩大劳动年龄人口：加拿大的积分制移民体系有意招募年轻的技术工人来重新平衡人口结构；法国慷慨的托儿和育儿福利则维持了欧洲最高的生育率之一。投资自动化和医疗生产率，能让更少的劳动者供养更多的退休者。",
      conclusion: "总之，由低生育率和寿命延长驱动的老龄化不可逆转，但通过延长工作年限、有管理的移民和家庭友好政策，社会可以成功适应。早做规划的国家将优雅地老去；否认算术规律的国家将面临财政危机。"
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
      introduction: "能源安全已成为我们时代的决定性议题。2022年俄罗斯切断对欧天然气供应时，价格数月内上涨十倍，工厂关闭，各国政府紧急应对以避免冬季停电，暴露了全球能源体系何等脆弱。本文将分析这场危机的原因，主要是对不可靠供应国的化石燃料依赖和对替代能源的长期投资不足，并提出加速可再生能源部署和提高能效等对策。",
      body1: "危机起源于集中的化石燃料依赖。例如，德国把自己的工业模式建立在廉价的俄罗斯管道天然气之上，一半以上的进口来自单一供应国，因此乌克兰战争后管道被切断时，这个欧洲最大经济体在一个冬天内就面临去工业化的风险。危机还因数十年的投资不足和政策摇摆而加深：核电站在没有替代的情况下被关闭——德国在燃烧更多煤炭的同时于2023年关停了最后的反应堆——可再生能源建设虽快，却跟不上可调峰容量退役的速度。石油市场更添波动：欧佩克的产量决定能在一夜之间撬动全球价格，而在交通仍依赖石油的情况下，每一次电动化转型都不完整。",
      body2: "要保障能源供应，政府必须加速本土可再生能源部署及配套电网。西班牙和葡萄牙大部分电力来自风电、光伏和水电，2022年遭受的价格冲击远小于依赖天然气的邻国——可再生能源不仅清洁，而且无法被外国势力切断；审批改革可以把风电场的核准时间从数年缩短到数月。与此同时，提高能效通过压缩需求本身来实现：建筑改造、热泵和工业节能能永久性降低消费——欧洲在一年内通过节能和替代把天然气需求削减了近五分之一就是证明。战略储备和多元化供应国则为转型期提供保险。",
      conclusion: "总之，根植于集中化石依赖和投资不足的能源危机，可以通过快速部署可再生能源和坚持不懈的节能来化解，建立一个更具韧性的体系。每一台风力发电机和每一栋保温住宅，在真实意义上都是能源安全的行动。"
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
      introduction: "从语言到古迹，文化遗产正在消失。联合国教科文组织警告，大约每两周就有一种语言消亡；从阿勒颇到威尼斯，历史城区在一代人的时间内被破坏或掏空。本文将审视其原因，聚焦现代化和同化的全球文化，并提出依法保护加资金支持、通过教育和旅游实现活态传承等保护措施。",
      body1: "遗产主要通过现代化的压力而流失。例如，中国的快速城市化在保护法律跟上之前拆除了无数历史胡同街区；在世界各地，当工厂商品以低价冲击传统手工艺、年轻人离开乡村进城工作时，传承数百年的学徒链条就断裂了。同化的全球文化加速了流失，因为英语媒体、全球品牌和社交平台挤压了本土表达：从亚马逊到西伯利亚，原住民社区的孩子在强势语言中长大，当最后一批流利的老人去世，整部口头文学也随之消失。战争和大规模旅游加剧破坏，帕尔米拉古城的废墟和过度拥挤的威尼斯都是例证。",
      body2: "要保护遗产，社会应当将其纳入法律保护并为其存续出资。法国通过专项税收和彩票收益资助历史建筑修复，联合国教科文组织的世界遗产称号既带来资金也带来义务——保护有效是因为它让保护成为公共责任而非私人负担。同样重要的是让遗产保持活态而非凝固：新西兰把毛利语纳入学校课程和广播，复兴了一门曾濒临消亡的语言；日本把大师级匠人认定为「人间国宝」，出资让他们带徒授艺。由本地人管理的社区旅游，则能把遗产转化为激励自我保护的收入。",
      conclusion: "总之，尽管遗产受到现代化和文化同质化的威胁，但通过依法保护和活态传承的坚定行动，可以将其传给后代。只有当人们能在遗产中生活、使用它并从中获利时，遗产才能真正存续。"
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
      introduction: "尽管开展了数十年的反吸烟运动，青少年仍在吸烟和吸电子烟。在许多国家，青少年吸烟率虽然下降，但调味电子烟造就了一代新的尼古丁成瘾者——美国调查发现超过十分之一的高中生经常吸电子烟。本文将审视其原因，特别是同伴压力和行业营销，并提出严格销售监管和校本预防教育等对策。",
      body1: "青少年开始吸烟主要因为尼古丁使用已织入他们的社交环境。例如，朋友吸烟的青少年自己开始吸烟的可能性要高出数倍；在同伴认可最为重要的年纪，吸烟仍然充当着叛逆和归属的徽章。行业刻意的针对使问题恶化，因为烟草和电子烟公司就是为年轻人设计产品：水果和糖果口味、看似U盘的时尚设备，以及在青少年使用的平台上投放网红营销——Juul在监管机构出手之前就是这样做的。易得性完成了这个陷阱——尽管有年龄限制，未成年人仍能从街角商店或年长学生那里买到电子烟，廉价的一次性电子烟比一张电影票还便宜。",
      body2: "要减少青少年吸烟，政府应当以真正的力度监管产品和销售。证据显示，把合法年龄提高到21岁、禁止调味产品、强制素面包装能显著降低青少年的尝试率：澳大利亚世界领先的素面包装和税收政策把青少年吸烟率压低到个位数；新西兰禁止向2008年后出生者售烟的法律旨在创造无烟一代。学校和家长也可以通过诚实、以技能为基础的预防教育提供帮助——教育有效的方式是教授拒绝技巧、揭露行业操纵，而非简单说教；家庭中的无烟规范很重要，因为父母不吸烟的孩子很少开始吸烟。",
      conclusion: "总之，由同伴压力和行业针对驱动的青少年吸烟，可以通过严格监管和聪明的预防大幅减少，保护一代人的健康。目标不应只是减少卷烟，而是防止任何形式的尼古丁成瘾。"
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
      introduction: "工作压力已成为现代经济中的流行病。世界卫生组织2019年正式把「职业倦怠」认定为一种职业现象，调查显示主要经济体中相当大比例的劳动者每天都在工作中感到压力。本文将审视其原因，最重要的是过重负荷与永远在线的科技以及工作不安全感，并提出组织再造和休息的法律保障等对策。",
      body1: "工作压力首先源于高要求与低掌控感的组合。例如，日本的「过劳死」现象在一名31岁女记者一个月加班159小时后被迫引发全国性讨论；中国的996工作制——早九晚九、每周六天——也造成了类似的悲剧和公众反弹。永远在线的科技加剧了压力，因为智能手机废除了工作与家庭之间的界限：员工在午夜和假期仍回复消息，神经系统永远无法彻底放松。工作不安全感让一切雪上加霜，零工合同和裁员潮让劳动者对生计处于持续的焦虑之中。",
      body2: "雇主可以通过围绕合理要求和真实自主权重新设计工作来减轻压力。英国和冰岛涉及数百家公司的四天工作制试验发现，倦怠率大幅下降而生产率保持稳定甚至上升——之所以有帮助，是因为休息能恢复疲惫劳动者失去的专注力。政府也应当设立法律边界，法国2017年的「离线权」法律率先要求企业就下班后收发邮件的规则进行协商；落实真正的假期、限制加班、规范零工经济则从根源上解决不安全感。培训管理者及早发现过劳迹象则使整个体系完整。",
      conclusion: "总之，由过载、数字侵入和不安全感造成的职场压力，可以通过组织再造和休息的法律保障来缓解，让劳动者和雇主共同受益。长期的精疲力竭不是生产力的勋章，而是设计的失败。"
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
      introduction: "食品安全丑闻屡屡动摇公众信心。世界卫生组织估计，受污染的食品每年使六亿人患病——接近人类的十分之一——并导致其中四十二万人死亡。本文将分析其原因，主要是逐利驱动的掺假和对漫长供应链的检验薄弱，并提出可追溯体系和严厉执法等保障措施。",
      body1: "食品变得不安全主要因为掺假有利可图而被发现的概率极低。例如，中国2008年的三聚氰胺事件毒害了三十万名婴儿，因为奶农稀释牛奶后添加工业化学品来伪造蛋白含量，其财务动机强烈且检测容易被规避；欧洲2013年的马肉丑闻同样揭露出十几个国家的「牛肉」制品中含马肉。漫长而不透明的供应链使问题加剧，因为一份即食餐可能包含来自二十个国家的原料，每个环节都是潜在的污染或掺假点。对农户的成本压力还驱使农药和抗生素滥用，残留物和耐药菌最终抵达消费者。",
      body2: "要确保食品安全，当局必须建立从农田到餐桌的可追溯体系。欧盟要求每头牲畜和每个批次都可追踪的制度，在丑闻期间实现了快速召回并震慑了掺假——之所以有效，是因为不透明是造假者最大的盟友，而从二维码到区块链的现代工具让追踪成本极低。此外，严厉执法加强保护：中国随后的改革把三聚氰胺案的高管送进监狱，成立了统一的强大食药监管机构，并让惩罚严厉到足以改变动机。定期突击检查、由行业费用资助的实验室检测、以及美国《食品安全现代化法》所保护的举报人渠道，能在问题端上餐桌之前将其拦截。",
      conclusion: "总之，受到暴利掺假和不透明供应链威胁的食品安全，可以通过可追溯体系和真正的惩罚得到保障，恢复公众对食物的信任。安全的食品不是奢侈品，而是一个社会对其成员最起码的亏欠。"
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
      introduction: "网络欺凌已成为对青少年福祉的决定性威胁。联合国儿童基金会报告，在三十多个国家中，三分之一的年轻人经历过网络欺凌；多起与持续网络暴力相关的青少年自杀事件震惊了全球公众。本文将审视其原因，特别是匿名性和奖励恶行的平台设计，并提出学校教育和平台问责等预防措施。",
      body1: "网络欺凌猖獗是因为互联网移除了约束面对面行为的规范。例如，应用和游戏里的匿名性让孩子说出在教室里绝不敢说的话，欺凌者与受害者之间的距离消除了正常会触发同理心的痛苦画面——心理学实验一致表明，当后果不可见时，人们会表现得更残忍。数字内容的持久性和传播力让情况更糟：一张羞辱性的照片或一条刻薄的评论几分钟内就能传遍全校，多年内可被搜索，并跟着受害者回家，而传统欺凌至少在校门口就结束了。平台从用户互动中获利，对清除恶行行动迟缓，因为愤怒情绪能让用户不停刷屏。",
      body2: "要预防网络欺凌，学校应当把数字公民素养纳入课程。芬兰的KiVa项目训练学生支持受害者、拒绝用关注奖励欺凌者，在对照试验中大幅减少了欺凌——之所以有效，是因为欺凌者是为观众表演，移除观众就移除了动机。同时，必须通过法律让平台承担责任：英国的《在线安全法》和澳大利亚的电子安全专员现在可以强制平台迅速删除霸凌内容，并对系统性失职处以罚款；默认隐私设置、便捷的举报和实名认证让恶行更难实施。父母保持开放的沟通同样重要，这样受害者会报告而非默默忍受。",
      conclusion: "总之，根植于匿名性和互动导向平台设计的网络欺凌，可以通过以同伴为中心的教育和法律问责得到预防，让网络空间对年轻人更安全。科技制造了这个问题，就必须要求科技公司参与解决它。"
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
      introduction: "多数大城市的住房已变得难以负担。在香港、悉尼、温哥华和伦敦，房价中位数是收入中位数的十二到二十倍，迫使年轻家庭背负数十年债务或终身租房。本文将审视其原因，尤其是长期供给不足和住房被当作金融资产，并提出供给侧改革和遏制投机等对策。",
      body1: "住房成本飙升主要因为供给没有跟上需求。例如，英格兰四十年来新建住房一直少于家庭形成的数量；就业机会密集城市周边的限制性规划体系——绿化带、限高和无休止的听证——意味着即使面对旧金山和东京级别的需求，新建供应也只有涓涓细流；经济学家估计，在受限最严重的城市，规划限制为房价推高了数十万美元。住房金融化加深了危机，因为房产成了全球最爱的投资品：低利率让投资者和外国买家出价压过本地居民，伦敦和温哥华数千套公寓空置着充当价值储藏工具，购房出租的房东把家庭住宅变成租赁资产，把价格推到工资无力支撑的高度。",
      body2: "要恢复可负担性，政府应当释放土地并加快建造。东京证明这有效：灵活的用途分区允许大量建设，尽管经济在增长，其实际房价数十年保持平稳，因为供给跟上了需求。进一步的措施是抑制投机性需求：新西兰禁止了大部分外国买家，新加坡对购买多套房产课以重税、并用公共住房以稳定价格安置了80%的人口；温哥华的空置税把数千套空置单元推回了租赁市场。租金管制和社会住房建设同样有效——维也纳持续百年的市政建房计划证明，即使首都也能保持大体可负担。",
      conclusion: "总之，由供给不足和投机造成的住房危机，可以通过增加建设和约束投资者来解决，让体面的住房重新可以企及。城市为它的居民而存在，而不是为寻找停泊之地的资本而存在。"
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
      introduction: "全球约七千种语言中有一半正濒临灭绝。语言学家估计，每两周就有一种语言归于沉寂，每种语言都带着别处不存在的关于生态系统、医药和思维方式的独特知识。本文将审视语言消亡的原因，聚焦主要语言的经济主导地位和向儿童传承的中断，并提出沉浸式教育和数字化记录等保护策略。",
      body1: "语言消失主要因为经济机会说的是强势语言。例如，印度尼西亚巴布亚地区或印度东北部的父母用印尼语或印地语而非祖先语言养育孩子，他们有理由相信，流利掌握国语是获得教育和就业的代价；而每一代人的语言转换都让少数语言变得更弱。只用主要语言办学的学校和媒体加速了衰落，因为孩子们整天沉浸在强势语言中，很快把传承语言与落后联系起来：二十世纪，从加拿大到威尔士的学校曾积极惩罚说原住民语言的儿童，那时造成的羞耻感至今仍在压制语言传承。",
      body2: "要保护濒危语言，社区应当通过传承语言来教育孩子，而不仅仅是教他们关于这种语言的知识。夏威夷通过Punana Leo沉浸式学校，把夏威夷语从几百名老年使用者复兴为数千名流利的儿童——所有教学都用夏威夷语进行——之所以有效，是因为语言只有作为日常生活的活媒介才能存续，而不是作为博物馆展品。此外，记录和科技能为尚无法复兴的语言提供保障：记录最后使用者言语的项目创造了永久档案；威尔士语和毛利语社区所使用的应用、社交媒体内容和智能手机键盘，则让古老语言能在现代生活中使用。法律地位同样重要——威尔士语电视台和威尔士的双语公共服务证明，官方认可能够恢复语言的声望。",
      conclusion: "总之，尽管语言因经济压力和传承中断而消亡，但通过沉浸式教育和数字化复兴的坚定行动，可以让它们为后代存续。每拯救一种语言，就保存了一座以其他任何形式都不存在的人类知识宝库。"
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
