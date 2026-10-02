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
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "远程办公近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然远程办公具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 47,
    title: "优缺点类 - 出国留学",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of studying abroad.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "出国留学近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然出国留学具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 48,
    title: "优缺点类 - 智能手机",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of smartphones.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "智能手机近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然智能手机具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 49,
    title: "优缺点类 - 公共交通",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of public transportation.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "公共交通近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然公共交通具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 50,
    title: "优缺点类 - 社交媒体",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of social media.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "社交媒体近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然社交媒体具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 51,
    title: "优缺点类 - 全球化",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of globalization.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "全球化近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然全球化具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 52,
    title: "优缺点类 - 城市化",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of urbanization.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "城市化近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然城市化具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 53,
    title: "优缺点类 - 人工智能",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of artificial intelligence.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "人工智能近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然人工智能具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 54,
    title: "优缺点类 - 旅游业",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of tourism.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "旅游业近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然旅游业具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 55,
    title: "优缺点类 - 汽车",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of owning a car.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "拥有汽车近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然拥有汽车具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 56,
    title: "优缺点类 - 互联网",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of the Internet.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "互联网近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然互联网具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 57,
    title: "优缺点类 - 电视",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of television.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "电视近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然电视具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 58,
    title: "优缺点类 - 快餐",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of fast food.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "快餐近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然快餐具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 59,
    title: "优缺点类 - 广告",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of advertising.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "广告近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然广告具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 60,
    title: "优缺点类 - 移民",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of immigration.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "移民近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然移民具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 61,
    title: "优缺点类 - 教育科技",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of educational technology.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "教育科技近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然教育科技具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 62,
    title: "优缺点类 - 可再生能源",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of renewable energy.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "可再生能源近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然可再生能源具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 63,
    title: "优缺点类 - 全球化食品",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of global food trade.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "全球食品贸易近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然全球食品贸易具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 64,
    title: "优缺点类 - 外包",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of outsourcing.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "外包近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然外包具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 65,
    title: "优缺点类 - 社交媒体营销",
    type: "advantages/disadvantages",
    topic: "Discuss the advantages and disadvantages of social media marketing.",
    structure: {
      introduction: "[Topic] has become increasingly popular in recent years. This essay will examine the advantages and disadvantages of this trend.",
      body1: "One of the main advantages of [topic] is [advantage1]. For example, [example1]. This contributes to [benefit1].",
      body2: "However, there are also some disadvantages. One major drawback is [disadvantage1]. Additionally, [disadvantage2]. These issues can lead to [negative effect].",
      conclusion: "Overall, while [topic] has clear benefits such as [advantage], it also has drawbacks like [disadvantage]. Proper management is essential to maximize the benefits."
    },
    structureCN: {
      introduction: "[话题]既有优点也有缺点。我们需要平衡考虑。",
      body1: "一方面，[优点]。例如，[例子1]。这表明[结论1]。",
      body2: "另一方面，也有缺点，如[缺点]。研究表明[证据]。",
      conclusion: "总之，[总结]。我们需要权衡利弊。"
    },
    fullParagraphs: {
      introduction: " has become a significant trend in recent years, with both positive and negative implications. This essay will examine the advantages and disadvantages of this development.",
      body1: "One of the main advantages is the convenience it offers. For example, many people now enjoy greater flexibility in their daily lives, which has improved work-life balance for countless individuals. This contributes to higher levels of satisfaction and well-being.",
      body2: "However, there are also some notable disadvantages. One major concern is the potential for increased dependency, which can reduce self-reliance and resilience. Additionally, there may be unintended consequences that are not immediately apparent. These issues require careful consideration and proactive management.",
      conclusion: "Overall, while  offers clear benefits such as convenience and efficiency, it also presents challenges like dependency and unforeseen consequences. Proper planning and mindful use are essential to maximize the advantages while minimizing the drawbacks."
    },
    fullParagraphsCN: {
      introduction: "社交媒体营销近年来已成为一个重要趋势，产生了积极和消极两方面的影响。本文将审视这一发展的优缺点。",
      body1: "主要优点之一是它带来的便利。例如，许多人现在在日常生活中享受到了更大的灵活性，这改善了无数人的生活与工作的平衡。这有助于提高满意度和幸福感。",
      body2: "然而，也存在一些显著的缺点。一个主要问题是可能导致依赖性增加，这会降低自主性和韧性。此外，可能存在一些并非立即显现的意外后果。这些问题需要仔细考虑和主动管理。",
      conclusion: "总的来说，虽然社交媒体营销具有便利和效率等明显优势，但也带来了依赖性和不可预见后果等挑战。合理的规划和使用对于最大化优势同时最小化劣势至关重要。"
    },
    vocabulary: [
      "beneficial",
      "detrimental",
      "significant",
      "substantial",
      "considerable",
      "potential",
      "major"
    ]
  },
  {
    id: 66,
    title: "问题解决类 - 空气污染",
    type: "problem/solution",
    topic: "Air pollution is a serious problem in many cities. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Air pollution is a serious problem in many cities. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, air pollution is a serious problem in many cities. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "空气污染是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，空气污染是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 67,
    title: "问题解决类 - 交通拥堵",
    type: "problem/solution",
    topic: "Traffic congestion is a major problem in many urban areas. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Traffic congestion is a major problem in many urban areas. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, traffic congestion is a major problem in many urban areas. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "交通拥堵是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，交通拥堵是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 68,
    title: "问题解决类 - 青少年压力",
    type: "problem/solution",
    topic: "Many young people are experiencing high levels of stress. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Many young people are experiencing high levels of stress. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, many young people are experiencing high levels of stress. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "许多年轻人正经历着高水平的压力是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，许多年轻人正经历着高水平的压力是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 69,
    title: "问题解决类 - 水资源污染",
    type: "problem/solution",
    topic: "Water pollution is a serious environmental problem. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Water pollution is a serious environmental problem. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, water pollution is a serious environmental problem. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "水资源污染是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，水资源污染是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 70,
    title: "问题解决类 - 森林砍伐",
    type: "problem/solution",
    topic: "Deforestation is a major environmental issue. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Deforestation is a major environmental issue. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, deforestation is a major environmental issue. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "森林砍伐是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，森林砍伐是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 71,
    title: "问题解决类 - 失业问题",
    type: "problem/solution",
    topic: "Unemployment is a major economic problem in many countries. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Unemployment is a major economic problem in many countries. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, unemployment is a major economic problem in many countries. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "失业问题是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，失业问题是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 72,
    title: "问题解决类 - 贫困问题",
    type: "problem/solution",
    topic: "Poverty is a persistent problem in many parts of the world. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Poverty is a persistent problem in many parts of the world. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, poverty is a persistent problem in many parts of the world. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "贫困问题是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，贫困问题是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 73,
    title: "问题解决类 - 垃圾处理",
    type: "problem/solution",
    topic: "Waste management is a growing problem in modern society. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Waste management is a growing problem in modern society. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, waste management is a growing problem in modern society. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "垃圾处理是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，垃圾处理是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 74,
    title: "问题解决类 - 网络犯罪",
    type: "problem/solution",
    topic: "Cybercrime is becoming increasingly common. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Cybercrime is becoming increasingly common. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, cybercrime is becoming increasingly common. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "网络犯罪是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，网络犯罪是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 75,
    title: "问题解决类 - 教育不平等",
    type: "problem/solution",
    topic: "Educational inequality is a major social issue. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Educational inequality is a major social issue. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, educational inequality is a major social issue. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "教育不平等是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，教育不平等是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 76,
    title: "问题解决类 - 医疗成本",
    type: "problem/solution",
    topic: "High healthcare costs are a problem in many countries. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "High healthcare costs are a problem in many countries. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, high healthcare costs are a problem in many countries. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "医疗成本高昂是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，医疗成本高昂是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 77,
    title: "问题解决类 - 人口老龄化",
    type: "problem/solution",
    topic: "An aging population is a challenge for many societies. What are the causes and what can be done to address this issue?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "An aging population is a challenge for many societies. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, an aging population is a challenge for many societies. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "人口老龄化是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，人口老龄化是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 78,
    title: "问题解决类 - 能源危机",
    type: "problem/solution",
    topic: "The world is facing an energy crisis. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "The world is facing an energy crisis. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, the world is facing an energy crisis. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "能源危机是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，能源危机是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 79,
    title: "问题解决类 - 文化流失",
    type: "problem/solution",
    topic: "Cultural heritage is being lost in many parts of the world. What are the causes and what can be done to preserve it?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Cultural heritage is being lost in many parts of the world. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, cultural heritage is being lost in many parts of the world. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "文化流失是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，文化流失是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 80,
    title: "问题解决类 - 青少年吸烟",
    type: "problem/solution",
    topic: "Teenage smoking is a serious health problem. What are the causes and what can be done to reduce it?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Teenage smoking is a serious health problem. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, teenage smoking is a serious health problem. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "青少年吸烟是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，青少年吸烟是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 81,
    title: "问题解决类 - 工作压力",
    type: "problem/solution",
    topic: "Work-related stress is a growing problem. What are the causes and what can be done to address this issue?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Work-related stress is a growing problem. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, work-related stress is a growing problem. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "工作压力是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，工作压力是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 82,
    title: "问题解决类 - 食品安全",
    type: "problem/solution",
    topic: "Food safety is a major concern in modern society. What are the causes and what can be done to ensure food safety?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Food safety is a major concern in modern society. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, food safety is a major concern in modern society. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "食品安全是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，食品安全是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 83,
    title: "问题解决类 - 网络欺凌",
    type: "problem/solution",
    topic: "Cyberbullying is a serious issue affecting young people. What are the causes and what can be done to prevent it?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Cyberbullying is a serious issue affecting young people. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, cyberbullying is a serious issue affecting young people. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "网络欺凌是影响年轻人的一个严重问题，需要立即关注。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，网络欺凌是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 84,
    title: "问题解决类 - 住房危机",
    type: "problem/solution",
    topic: "Housing affordability is a problem in many cities. What are the causes and what can be done to solve this problem?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Housing affordability is a problem in many cities. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, housing affordability is a problem in many cities. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "住房负担能力是许多城市面临的问题，需要立即关注。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，住房负担能力问题是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
  {
    id: 85,
    title: "问题解决类 - 语言消失",
    type: "problem/solution",
    topic: "Many languages are disappearing around the world. What are the causes and what can be done to preserve them?",
    structure: {
      introduction: "[Problem] is a pressing issue in modern society. This essay will analyze the causes of this problem and propose some solutions.",
      body1: "There are several reasons why [problem] occurs. Firstly, [cause1]. Secondly, [cause2]. These factors contribute to [problem severity].",
      body2: "To address this issue, several measures can be taken. One solution is [solution1]. Another approach is [solution2]. These actions would help to [expected effect].",
      conclusion: "In conclusion, [problem] is caused by [causes] and can be solved by [solutions]. It is essential that [call to action]."
    },
    structureCN: {
      introduction: "[问题]是当今社会的紧迫问题。本文将分析这一问题的原因并提出一些解决方案。",
      body1: "首先，[问题]的主要原因之一是[原因1]。例如，[例子1]。这表明[结论1]。",
      body2: "其次，我们可以通过[解决方案]来解决这个问题。这将[结果]。",
      conclusion: "总之，[总结]。我们应该采取行动来[建议]。"
    },
    fullParagraphs: {
      introduction: "Many languages are disappearing around the world. is a pressing issue that requires immediate attention. This essay will analyze the main causes of this problem and propose practical solutions.",
      body1: "There are several factors contributing to this issue. Firstly, rapid urbanization and population growth have placed significant strain on existing resources and infrastructure. Secondly, changing lifestyles and consumption patterns have exacerbated the problem. These factors have combined to create a situation that demands action.",
      body2: "To address this issue, several strategies can be implemented. One approach is to promote awareness and education, which can encourage more sustainable behaviors. Another solution is to invest in infrastructure and technology that can mitigate the problem. These measures would help to create a more sustainable and resilient society.",
      conclusion: "In conclusion, many languages are disappearing around the world. is caused by a combination of factors including urbanization and changing behaviors. By implementing education campaigns and investing in sustainable solutions, we can effectively address this issue and create a better future for all."
    },
    fullParagraphsCN: {
      introduction: "世界上许多语言正在消失，这是一个需要立即关注的紧迫问题。本文将分析这一问题的主要原因并提出切实可行的解决方案。",
      body1: "有几个因素导致了这个问题的产生。首先，快速的城市化进程和人口增长给现有资源和基础设施带来了重大压力。其次，生活方式和消费模式的改变加剧了这一问题。这些因素共同造成了一个需要采取行动的局面。",
      body2: "为了解决这个问题，可以实施几项战略。一种方法是促进宣传和教育，这可以鼓励更可持续的行为。另一个解决方案是投资于能够缓解问题的基础设施和技术。这些措施将有助于创造一个更可持续和更具韧性的社会。",
      conclusion: "总之，语言消失是由包括城市化和行为变化在内的多种因素造成的。通过实施教育活动和投资可持续解决方案，我们可以有效地解决这个问题，为所有人创造一个更美好的未来。"
    },
    vocabulary: [
      "pressing",
      "urgent",
      "critical",
      "essential",
      "effective",
      "practical",
      "viable"
    ]
  },
];

export const patternTypes = ['全部', 'argument', 'cause', 'effect', 'comparison', 'example', 'conclusion'];
export const templateTypes = ['agree/disagree', 'discuss both views', 'advantages/disadvantages', 'problem/solution'];
