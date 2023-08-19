function random() {
    var texts = [
        "想要留住雪花，但在手心里它只会融化得更快。",
	"雪霁银装素，桔高映琼枝，若知是梦何须醒，不比真如一相会。",
	"深山踏红叶，耳畔闻鹿鸣，我很喜欢枫叶，可惜枫叶红时总多离别。",
	"飘摇风雨中，睹物思故乡，深山踏红叶，耳畔闻鹿鸣，流光换日月，鹤归云起庆生时，异乡有故知。",
	"阴阳有序，命运无常，生老病死，天地万象，尽在吾辈。",
	"复白亘古事，诗人起歌喉，众神居尘世，人间几春秋。",
	"浮世景色百千年依旧，人之在世却如白露与泡影虚无。",
	"无人相陪，此般花鸟余情，也不过衬托我身不移不变的背景罢了。",
	"欲买桂花同载酒，只可惜故人，何日再见呢？",
	"感故人之恩，乘旧友之情，追千古之意，环千秋之城。",
	"心移斗转，沧海桑田，烟火人间依旧。",
	"功名在我，百岁千秋，毋忘秉烛夜游。",
	"今古诸事，激荡中流，宏图待看新秀。",
	"惊涛入海觅之螭虎，风雪归山斩妖邪。",
	"曲高未必人不识，自有知音和清词。",
	"接引春雷焚身骨，化灰以养万类荣。",
	"烟花易逝，人情长存。",
	"在黎明到来之前，必须要有人稍微照亮黑暗。",
	"只要坚信自己的道路，就无所谓天气是晴是雨。",
	"正是因为无法更改，无法违逆，只能接受，命运才被称之为命运。",
	"在这个真实得太过分的世界里，每个人都需要仰望星空。",
	"一切力量皆有其代价，一千种权力伴随着一千种责任。",
	"当你重新踏上旅途之后，一定要记得旅途本身的意义。",
	"用自己的双脚丈量土地，将未知变为知识。",
	"拾花鸟之一趣，照月风之长路。",
	"总有地上的生灵，敢于直面雷霆的威光。",
	"最初的鸟儿是不会飞翔的，飞翔是它们勇敢跃入峡谷的奖励。",
	"我等必将复起，古木已发新枝。",
	"只要不失去你的崇高，整个世界都会向你敞开。",
	"纵使古玩价值连城，给人的快乐不过刚拥有时的一瞬。",
	"正是因为有大家的寄托，烟花才能以如此美妙的姿态一直存在下去吧。",
	"心有所向，日复一日，必有精进。",
	"身为战士，要时刻把挑战之心系于刀尖之上。",
	"惊涛入海觅螭虎，风雪归山斩妖邪。",
	"朋友，假使有一日不得不同你相别，你在我的记忆中也会如黄金般闪耀。",
	"在夜空所有星星熄灭的时候，所有梦想、所有溪流，都能汇入同一片大海中，那时我们终会相见。",
	"但风向是会转变的。终有一天,会吹向更有光亮的方向。从今往后,带着我的祝福,活得更加从容一些吧。",
	"风雨犹祝，山海同欢，是承天地之佑。",
	"星移斗转，沧海桑田，烟火人间依旧。",
	"人这一辈子这么短，趁着还活着抓紧时间好好享受生活。",
	"见证者，为见证而来。铭记者，因铭记而生。",
	"我们都还没来得及说再见，所以，我不会把它当做离别。",
	"旅程总有一天会迎来终点，不必匆忙。",
	"赌徒永远会把希望寄托在下一颗骰子上…但最后赚钱的，当然是从来不碰骰子的庄家。",
	"举头望明月，万般感怀皆在其中。此情此景，犹如天星照我，愿逐月华。感故人之恩，承旧友之情，追千古之意，环千秋之城。以上种种，谓之「逐月」。",
	"天动万象,山海化形。荒地生星,璨如烈阳。",
	"若你困于无风之地，我将为你奏响高天之歌！",
	"绯樱若解别离苦，自当常留驻。",
	"与君相别离，不知何日是归期，我如朝露转瞬睎。",
	"此身应许予臣民一梦，即是千世万代不变不移之『永恒』。",
	"浮世美景百千年依旧，人之在世却如白露与泡影。虚无。",
	"我命十方世界雷鸣平息，愿你今晚得享安睡。",
	"璃月港的孤独，比绝云间更加孤独，在绝云间看云，只不过是一个人看云的孤独，走入璃月的人海，确是非人之物，在世间的孤独。",
	"听戏时要点最红的名伶，遛鸟时要买最贵的画眉——此即人生。",
	"重要的不是强风而是勇气，是它让你们成为了世上最初的飞鸟",
	"不愿意沟通的话，问题就会永远留在那里，人们就看着，看着…直到眼睁睁的错过所有解决它的机会。",
	"烟花飞的足够高，无论身处何处都能看见。想找我的人，也都会过来。",
	"与君初相识，犹似故人归。愿做云中星，照取夜旅人。",
	"请从绝处，读我侠义。",
	"无人能为最为杰出的猎人冠冕，因为高于她的只有自然的天地。",
	"“爱也好，遗憾也好，与她有关的一切，全部都消失了…”",
	"“就好像她从未出现在我的身边…就好像这些年不过是一场模糊的梦。”",
	"“只是，如果等到了她，却连她的名字都叫不出来的话，会不会让她感到难过呢？”",
	"不论当下的境遇如何，提瓦特的星空中永远存在着你的位置。",
	"我虽无意逐鹿，却知苍生苦楚。只愿荡涤四方，护得浮世一隅。",
	"人类不止渴望超越和奇迹，他们对平凡、普通的追求也远超我们想象。",
	"就算是假的，但是很帅气，很浪漫啊，轮不到别人来否定吧。",
	"浮生一刹，万般皆舍。",
	"趴在草地上，能听见大地的心跳。",
        "笑着告别 是为了下次见面的时候笑着打招呼。",
        "跟紧我，不要乱走，沙漠可不会对任何人留情。",
        "「明日复明日，明日．何其多...」总之快快行动起来吧。",
        "大家应该都在努力着，那我们也不能偷懒，对吧？",
        "耽误太多时间，事情可就做不完了。",
        "劳逸结合是不错，但也别放松过头。",
        "无论是冒险还是做生意，机会都稍纵即逝。",
        "做学问可不是赶潮流、没有冷门热门之说。",
	"我们终究是没有被神明注视着啊……",
        "只要坚信自己的道路,就无所谓天气是晴是雨。",
	"你想知道夜晚流星的真相吗？哈哈，真相就是缥缈须臾的一瞬天光罢了。",
        "旅程总有一天会迎来终点，不必匆忙。",
        "我们终将重逢。",
	"旅行者…当你重新踏上旅途之时，一定要记得旅途本身的意义。提瓦特的飞鸟、诗歌和城邦,女皇、愚人和怪物…都是你旅途的一部分。终点并不意味着一切。在抵达终点之前,用你的眼睛,多多观察这个世界吧…",
	"一切力量皆有其代价，一千种权力伴随着一千种责任。",
	"就应你说的吧。从今往后，天下英雄永不陌路。",
        "风带来故事的种子，时间使之神话。",
        "倘若天下无神，这里便是人的国度。我曾是人的神，理应见证人的兴衰。",
        "这世界上没有纯粹的自由，风也会有吹到尽头的时候。",
	"“坎瑞亚没有亡国是吗……毕竟您还站在这里。”",
	"我用着他的模样，唱着他曾唱过的诗篇，记着他那天闪烁着倔强的眼瞳，代替他守护蒙德，却忘了他的名字。",
	"我希望死以后，埋在一片蒲公英地，还种有苹果树，让风带走我的灵魂",
	"晚上好，今天，我做了什么来着……",
	"白草净华，幽宫启蛰。",
	"「原来是，梦中梦啊…」",
	"她深知自己必须不断学习，尽快成长，才能面对来自世界最深处的威胁，这是她无法回避的使命。",
	"不被理解也好，不被重视也好，纳西妲对此并无意见。",
	"你的真面目是一种武器，可为钢铁的意志所用，也可继续漂泊流浪。",
	"信仰者铸就神明的荣光，背弃者见证神明的度化。而这一位，我不会将他定性在任何一种位置上。一切不确定性均是他未来道路的基石。",
	"有时候用小动作转移注意，有时候假装懈怠故意漏出破绽…一旦认真起来，指间的戏法比魔术本身更让人眼花缭乱——猜猜我说的是什么？”",
	"千岩牢固，重瘴不移。",
	"常道恢宏，鸣神永恒",
	"只要前进，便会有所失去。",
	"那么，趁着一切还美好，就这样静止吧……去往永恒。",
	"你想知道夜晚流星的真相吗？哈哈，真相就是缥缈须臾的一瞬天光罢了。",
	"徒然无事，对砚枯坐"
    ];

    var randomNumber = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomNumber];

    document.getElementById("ys").innerText = randomText;
}

window.onload = random; 
