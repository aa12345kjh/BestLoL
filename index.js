angular.module("lolApp",[])
.controller ("myCtrl", ['$scope','$sce',myCtrl])
.filter("hasKey", hasKey);

function hasKey(){
  return function(list,k){
    if (!k) return list;
    return list.filter(function(o){
        console.log(o.name + '_' + k);
        return o.name.indexOf(k) > -1;
    })
  }
}

function myCtrl ($scope,$sce) {

  //methodss
  angular.extend($scope, {
    trust: $sce.trustAsHtml
  })

  //models
  angular.extend($scope, {
    heros : [
      {name: '吸血鬼', sts:'TOP',img:'http://lol.replays.net/db/game/images/page/champions_Vladimir.jpg',
        text:'基本介紹吸血鬼是一隻後期很強的carry，經過多次的nerf還是屹立不搖，不但CD短傷害高，又十分的坦，團戰分推都很強勢，唯一缺點是沒CC和位移，可打上路和中路，這裡比較它的優點和缺點:'
            +'<br/><br/><ul>優點:'
                +'<li>賴線強，一直吸血</li>'
                +'<li>遠距法師，線上騷擾強，換血強</li>'
                +'<li>血轉ap，ap轉血，後期又坦又痛</li>'
                +'<li>短，持續輸出高</li>'
                +'<li>血池追殺逃跑兩相宜</li>'
                +'<li>大絕團戰神增傷</li>'
                +'<li>分推強勢</li>'
                +'<li>難gank</li>'
              +'</ul>'
            +'<br/><br/>難壓爛缺點:1.沒位移 難抓人2.沒控場 難留人3.前期因為CD長 所以比較弱勢天賦21/9/0上路天賦，點防禦和吃冰天賦幫助度過前期，中路可將防禦點去通用變成21/0/9召喚師技能鬼步: 對於沒位移的吸血鬼這是最適合的，可以一直追人追到死，線上單殺打團不可或缺的技能。'
            +'<br/><br/>閃現:之所以不選閃現，是因為吸血鬼需要持續輸出，閃現過去頂多吸到一下對面就跑了，逃跑鬼步+血池就夠了，就算有J4也不建議帶。點燃:殺人神技，R+點燃一起丟，R的增傷可以讓點燃傷害更高。治癒: 如果前期對面很強勢可以帶，E疊滿四層的話，可以回更多，常常可以使人誤判血量造成反殺(別人在血池上等你起來，結果一起來發現你一堆血XD)。'
            +'<br/><br/>虛弱: 對面前期很強可帶，但不建議。'
            +'<br/><br/>傳送: 因為前期弱勢，CD長又沒控場，所以幫不到什麼。裝備起手裝備 鞋+四水用來風箏對面，四瓶水用來過度沒吸血槍的前期。'
            +'<br/><br/>最終裝備正常情況： CD鞋+冰杖+死帽/虛空+大面具+振奮鎧甲+小金人普通都是出這套，下面會詳細介紹。'
            +'<br/><br/>爆發裝備： 法穿鞋+冥火+冰杖+虛空+死帽+小金人/振奮這套裝備重點在於高AP配合冥火+大絕雙增傷，R+冥火+Q+E可能人就死了XD，傷害和爆發十分驚人。'
            +'<br/><br/>通常中路會出這套，因為上路還是要撐點坦，不然就是太肥了XD。其他裝備深淵權杖:效果對吸血鬼不錯，但不建議，感覺不如振奮好用雙影斗篷:-CD和跑速都是很好的，主動可以讓吸血鬼更好追人，但唯一缺點就是沒空位放了，不然是個好裝備，如果前期打出優勢出這件，幾乎可以見一次殺一次。'
            +'<br/><br/>好戰者鎧甲:賣萌用的，稱血不如稱AP出裝流程（1）鞋+四水介紹同上（2）CD鞋/法穿鞋+吸血槍鞋子如何選?正常情況都是選擇CD鞋，但是有一種情況建議可以出法穿鞋，就是對面的角色也是指定技時（ex:蜘蛛，石頭人，潘森，T毛…等），因為換血都是互Q一下就退，此時-CD較無影響，這時法穿可以讓傷害和吸血都提高，讓你在這波換血中勝出。吸血槍是核心裝，讓你Q吸更多，也減緩E的噴血(?)，是前期最重要的裝。（3）CD鞋/法穿鞋+遠古意志+冰杖遠古意志:以前會把吸血槍當成過度裝，不會在合上去，但是近來發現他真的十分適合吸血鬼，CDR和20%技能吸血，會讓吸血鬼在前期變得非常強勢，永遠可以賴在線上，會戰殘血去吸幾隻冰都能快回滿，超級推薦，當然很肥也可以跳過。冰杖:提供吸血鬼重要的CC和血量，q到就可以不斷緩人，製造輸出機會，核心裝必出（4）CD鞋/法穿鞋+遠古意志+冰杖+大面具/法穿杖大面具:提供血量和法穿，和冰杖組合十分強，對面血量多時相當強，正常都是出這件。但是如果對面魔防超高、血量不多或是追求高傷害可以出法穿杖（5）CD鞋/法穿鞋+遠古意志+冰杖+大面具/法穿杖+小金人+振奮鎧甲中亞沙漏：物防裝，被針對時可以先出，小金人和血池能製造更多無敵時間，用來躲過招式的空窗，Q+E+W+（W起來）Q+E+小金人+Q+E+血池+（W起來）Q+E，可以打出一套非常強勢無空窗的接技。（對面表示：給不給人玩）振奮鎧甲：魔防裝，CDR和回血量增加，配合E疊四層，製造更多的回血，最適合吸血鬼的魔防裝。（6）滿裝後可將遠古意志換成以下裝備：死帽、法穿杖、冥火死帽：可以將AP撐高到最大化，因為後期已經不需要額外技能吸血，高AP=高吸血，順便稱高傷害，法穿杖：吸血鬼只撐魔法穿透就很痛，可以出雙穿，將敵人的魔防和血量都搞定。冥火：配合大絕的爆發流，通常出法穿鞋就建議出這裝，傷害非常痛而且補足缺少的15%CDR（因為沒買CD鞋）技能被動 血色契約弗拉迪米爾增加相當於 2.5% 額外生命的魔法攻擊，以及 140% 魔法攻擊的生命。增加魔法攻擊與生命的效果不會互相無限疊加。吸血鬼又坦又痛的原因，但是撐AP的效益比較高，所以以撐AP為主Q 鮮血轉換弗拉迪米爾吸取敵人的生命，造成 90/125/160/195/230（+0.6 魔法攻擊）點魔法傷害，並回復自身 15/25/35/45/55（+0.25 魔法攻擊）點生命。'
            +'<br/><br/>冷卻：10/8.5/7/5.5/4 秒射程：600核心技，也是被叫做吸血鬼的理由，前期線上的換血神招，遠程指定又能回血，配合普功對敵人騷擾，換完一波也能吸小兵回血繼續賴線，但是換血時要小心對面小兵的傷害。W 血紅之池弗拉迪米爾化成一灘持續 2 秒的血池，期間內無法被指定為目標，並增加 37.5% 跑速，持續 1 秒。血池會降低通過的敵人 40% 跑速，持續 1 秒，並且每 0.5 秒造成 20/33.75/47.5/61.25/75（+3.75% 額外生命）點魔法傷害。弗拉迪米爾會回復 15% 此技能傷害的生命。消耗：20% 自身當前生命冷卻：26/23/20/17/14 秒被敵人恨得牙癢癢，保命和追擊的技能，也是唯一的cc，注意開啟時會有加速。這招的使用時機決定你活在場上的時機，切記不要一直扣著不放，該放就放，不要想說一定躲掉別人的大招，或是要撐到最後一刻才放。有時先放一個QEWQE對面沒摸到你就殘了，一個會戰還可以多放2~3次，血池的重點在於無敵和無法反抗，所以如何將這招的效益最大化，就需要靠經驗去判斷了。先放血池：（1）搶得先機使敵人無法反抗（2）撐過CD空窗（3）多用幾次血池晚放血池：（1）躲避對方大招和招式”ex：菲斯的漁咬到就不能躲，還有維迦的暈撞到也會暈”（2）花費的血比較少（3）bait敵人E 血之潮汐弗拉迪米爾施放一股血液，對附近敵人造成 60/85/110/135/160（+0.45 魔法攻擊）點魔法傷害。每次施放此技能會獲得強化效果，持續 10 秒，最多疊加 4 層。每層效果提高弗拉迪米爾 4/5/6/7/8% 生命回復與所受的治癒效果，並增加 25% 下一次血之潮汐的基本傷害與生命消耗。消耗：30/40/50/60/70 生命冷卻：4.5 秒射程：610洗兵技能，也是第二個主要輸出來源，也是被稱作噴血鬼（?）的原因，這招前期沒吸血槍時要注意少用，會把血噴光還順便推兵線；線上不想推兵又想疊被動時可以躲在後面放，這時喝紅水也會有額外加成，可利用去多換血。後期在會戰前一定要疊滿四層，已經沒什麼副作用，可以長駐。這招也可以在分推拿到不錯的表現。順帶一提，這招可以打到草叢裡的人，對方躲進草叢時可以用這招打他。R 血之瘟疫弗拉迪米爾向目標區域注入劇毒瘟疫，提高被感染的目標 12% 受到的所有傷害，持續 5 秒。5 秒後，被感染的目標將受到 150/250/350（+0.7 魔法攻擊）點魔法傷害。冷卻：150/135/120 秒射程：700單殺和團戰技能，後期會戰往人多的地方砸就對了，最好能夠打中三個以上，使得對方受到大量增傷，結束時還有一個爆發收尾，而前期也是單殺的神技能，先poke對面到半血，判斷能殺死就可以直接接一套，接技為：(鬼步)+R+點燃+Q+E+W+Q+E+(R引爆)，沒死就跟著等CD好在補刀，過程中因為血池對方完全沒法反抗，並且W傷害也會增加，一定要先丟，起來後QE又好了，同理也可以用來塔殺(塔打不到)操作技巧對線期：一開始的吸血鬼雖然弱勢，但是有時還是可以透過不斷騷擾壓制住對面，除了讓自己壓力減緩，甚至可以塔殺對面。但是通常JG可以不用來，因為來了也沒有CC和傷害收掉對面(除非對面穩死或是對線壓力太大)一開始一等時，盡量風箏對面，透過A+Q進行消血，Q盡量拿來poke，但要注意對方小兵傷害以及自己的位置，千萬不要因此害自己面臨危險，第二點W用來躲避gank，記的要扣到對面丟招在放，不然可能還是躲不掉。吸血鬼換血很適合跟對面換完一波，在回來慢慢吸小兵補血，然後再還換一波，對面也會因殘血不敢上來吃冰，但是你卻能繼續賴線，所以只要別被一波打死就有優勢。等到9等有吸血槍出來之後，就會開始取得優勢了，對面會漸漸開始換不贏你。'
            +'<br/><br/>如果有取得優勢，將對方壓在塔下的話，可以嘗試塔下poke，就是進塔Q一下馬上往後退，快一點塔就不會打到你，如果被打到因為吸血所以也不會有太多損傷，對面血量耗的差不多了就可以直接進行塔殺，當然過程中都要小心，量力而為，不要因此弄巧成拙，被抓到失誤反殺。後期：可以選擇分推和打團戰，看情況來選擇，最好能夠靈活的轉換，因為兩邊的表現都很好。如果前期爆炸可以選擇去分推多洗點兵再回來打會戰。會戰時看兩邊的組合視情況poke，因為吸血鬼的手不長不短，有時可以騷擾對面，有時反而會被反打很多血，抓到時機就R開戰(至少3個以上，應該是不太會空大)，抓AD AP。可以直接用血池上去留人或是抓輸出，能活越久越好，活著就是輸出。英雄對線說一些比較常見會是難對付的角色，但是基本上都要勝負都要看雙方操作，所以只能給點建議，但是不管面對哪隻英雄，有幾個重點都是一樣的：利用指定技的優勢，靠走位躲過對方的招式並且反擊，不斷拉打製造無損換血利用血池躲過關鍵技能小心對面的爆發，不要被對方一波帶走把握這三個原則可以讓你對付大部份的情況雷玟這隻是現在的強勢角，從前期強到後期，他隨時都會想著上來殺你，1~3、6等都有可能直接在升級的瞬間直接閃線殺你，打這隻只能一直龜，他一靠近就小心，最好是把他ban掉。賈克斯他前期很弱，多壓制他，他的反擊風暴對你無效，只要用血池閃掉暈就贏。T毛致盲對你無效，但是前期CD太長，會被普功點到死，因此不要主動換，撐到中期躺著都打贏。蠻王很難對付，因為他傷害很高，前期只要小心風箏都可以打，回頭躲嘲諷，後期也是盡量風箏，血池用來多撐幾秒大絕,比操作，誰輸誰贏都不到最後都不知道慎 納瑟斯基本上可以輕鬆壓制他，但是如果他打得很兇，卻未必能贏，所以一開始不用急著壓制她，可以等中期再開始打爆他。狗頭則要一直壓制他，減少他的尾刀，但要小心不要被gank，只要讓他拿頭，就很難再壓他了。嘉文4世有人說這隻克制吸血鬼，但其實並沒有，因為他被nerf後，就不太適合上路了，他大絕就直接血池，在裡面跟他打，EQ連技要閃，但其實有時候沒閃過都贏… 伊瑞莉亞 犽宿一樣在nerf後，吸血鬼變得比較好對付，前期可以多壓制他，小心不要在殘血小兵旁，上六後更要小心被一波帶走。犽宿一樣打法藍寶基本上打不贏，他的火太痛，我們的Q CD卻太長，只要吃兵就好，被魚叉丟到就有可能要回家了…，等後期吧菲歐拉他前期十分痛，QAQA你就快噴一半血，有反盾所以別普功他，後期血池能閃他大絕，但切記不要因為扣著反而被打掉一堆血，他的反殺能力超強，基本上很難對付吶兒 傑西 奈德麗都是一直poke然後跳上來打你，打的方法就是躲招反打他，就這樣。(不過真的有點難閃=  達瑞斯 辛吉德 弗力貝爾這些角色都是容易風箏的角色，但是只要被抓到就會輸，一定要小心不要貪刀，E技會有施法動畫，要注意時機，不要因此被抓到。阿卡莉前六等一定要趕快壓制他，不然6等以後就被黏著打到死，但剛上6可以打一波，因為他的大只有一次。他隱形時可以R+E+血池，他一樣會被打中。潘森 剛普朗克這兩隻角色都換不太贏吸血鬼，互Ｑ一下，我們會吸血而且無消耗，但是這兩隻前期很強，不要硬幹，拖到中期就贏了石頭 狼人石頭人前期會一直跟你互Q，基本上會打平；狼人風箏即可。唯一要注意的是，它們上6後會開大直接一套收掉你，甚至會call jg，所以一定要十分小心菲斯 劫兩隻也都是強勢角，都很難打，只能比操作，菲斯還有減治療，重點在於他們的爆發很強，一失誤就很容易被秒。因此對打時，最好扣住血池躲大招(菲斯的大要在被魚咬到前)，當然，一樣要看情況扣。'
            +'<br/><br/>斯溫 雷茲 稻草人這三隻角色的技能組都玩剋吸血鬼，雷茲前期CD短，接一套就半殘；斯溫E+Q閃不掉又痛(血池也閃不掉)，後期也超會吸血；稻草人Q+W，看你要怎麼吸贏他(草人:一攤血用吸管更好喝)'},
      
      {name: '易大師', sts:'JG',img:'http://pic2.52pk.com/files/allimg/140724/2D0S4_203HUE6.png',text:'易大師jg!!(後期秒殺bd角)一大師這角色雖然最近因為燈籠的nerf沒在那麼強,但改回以前出蜥蜴刀,他還是有大的作用,只要抓好q的時機和w的時機,他是可以製造出很大的傷害的!天賦易大天賦沒什麼特別的21 9 0即可,軍閥可以只點1點即可,可拿來點咒力施放,武力全開召喚師技能重擊 + 傳送：小心被反野,但比較好做分推重擊 + 閃現：追擊一些位移能力強的後排閃現比較重要裝備買蜥蜴刀是因為我覺得現今版本的燈籠已經沒那麼強了,所以改回買蜥蜴刀,一開始要買黃色的視頻,以免吃第2個buff被些強勢的jg蹲先把蜥蜴刀和妖刀出出來搭配妖主動記爆發很猛cp直很高出完妖刀可自行選擇要先上殞落還是耳語看是血厚還是防高,大順風就可直接上無盡了,防裝也可以選擇女妖技能3等如果沒要Gank可點q雙重打擊（被動）：每攻擊幾次後，易大師將會進行2次打擊。先聲奪人（Ｑ）：易大師快速穿越戰場對敵人造成傷害，對路徑上多個目標造成物理傷害並對士兵和野怪造成額外傷害。先聲奪人可以對野怪與士兵暴擊和造成額外物理傷害。普攻可以減少先聲奪人的冷卻時間。 易大師飛速穿越戰場，對最多 4 位敵人造成 25/60/95/130/165 （+） 物理傷害，另外對士兵和野怪造成 75/100/125/150/175 傷害。先聲奪人可以造成暴擊，造成額外 物理傷害。普攻命中減少此技能 1 秒冷卻時間。冥想（Ｗ）：易大師進入冥想狀態，持續回復生命，同時短暫減少傷害。 易大師進入冥想狀態，每秒回復 30/50/70/90/110 （0.3） 生命，持續 4 秒。 易大師失去 1% 生命治癒效果就會提升 1%。當進入冥想狀態時，易大師減少50/55/60/65/70% 所受傷害。減少傷害百分比對上防禦塔則會減半。無極劍（Ｅ）：易大師精通深奧的無極之道，提高物理攻擊。主動使用技能時，加倍提高物理攻擊，普攻將獲得額外真實傷害，但被動所獲得額外傷害在技能冷卻時不會提供任何增益效果。 被動： 獲得 10/10/10/10/10% （） 物理傷害。主動： 普攻造成額外 10/15/20/25/30 （+） 真實傷害，持續 5/5/5/5/5 秒。 在無極劍道冷卻時間中，被動獲得的額外物理傷害將會消失。高原血統（Ｒ）：易大師以靈巧的步伐進行移動，短暫提高跑速和攻速，同時免疫全部的緩速效果。主動使用技能時，擊殺英雄或助攻可以延長高原血統的作用時間。處於被動時，擊殺或助攻可以減少易大師其他技能的冷卻時間。 被動： 擊殺英雄和助攻將會減少 70% 易大師技能冷卻時間。主動： 增加 25//45% 跑速，增加 30/55/80% 攻速，並獲得緩速免疫效果，持續 10/10/10 秒。當主動效果啟動時，英雄擊殺和助攻將會延長高原血統的作用時間 4/4/4 秒。敵對英雄李星　難度：★★★★現今版本強勢的jg之一. 第一輪的第2個buff小心被蹲,被蹲到殺到可能會一蹶不振,差眼防範或者call其他路來支援伊莉絲　難度：★★★★現今版本強勢的jg之一, 雖然之前nerf過了,但是一波傷害還是很夠,也是注意一開始不要被蹲嘉文四世　難度：★★最近比賽出場率越來越高,野區撞到只要小心別被e.q戳到還ok伊芙琳　難度：★★★★我覺得有點麻煩的jg,畢竟會隱形,三線都會有壓力,也是第一輪第2個buff要小心點,有的人會帶點燃,被蹲到幾乎都會死沃維克　難度：★★★他沒什麼,他一開始都會先農為主,農到6點才開始gank,一開始在野區撞到也別他打 打不贏,他2等q.w單挑打不贏,但是他很少會蹲趙信　難度：★★★3等傷害爆高的jg,被蹲也會很慘,遇到他別打,w的時機很重要費德提克　難度：★★★★應打他打不贏,小心被恐,被恐到打不贏,賈克斯　難度：★★★可以說是易大剋星之1,但是只要好好運用q可以閃掉e,在他e的時候開w等他要暈你的時候q,就打得贏附註易大初期是一隻在野區撞到很多都打不贏的英雄, 但他只有在對的時間出現收到一次頭很容易就起飛, 但還是要注意進場時機,我覺得他最大的技巧就是q的時機和w的時機, 在對的時間點開可以很好塔殺人,或者大反殺裝備:功速鞋>軍隊長劍(嗜魂)>鬼刀>無盡>殞落>耳語or復活甲'},
      {name: '拉克絲', sts:'MID.SUP',img:'http://img1.wikia.nocookie.net/__cb20121220042612/leagueoflegends/zh/images/c/c9/%E6%8B%89%E5%85%8B%E4%B8%9D%E5%A4%B4%E5%83%8F.png',text:'角色介紹對我來說拉克絲是一隻很需要上下跑線的角色，所以對戰局的判斷要準確，不然跑了沒拿到頭就很虧(2)召喚師技能我比較喜歡用光盾，你想換傳送也可以，看自己的習慣，因為我會一直跑線，所以光盾讓我線上不管防GANK還是硬打對方一套都好用(3)英雄技能Q的好上天堂 Q不好的話.......你隊友會告訴你的假如要抓就先點Q(這大家應該都知道XD)   不然正常開的話就是 R > E > Q > W(4)天賦跟符文就是AP常用的模式，大家如果有習慣的可以換自己的，不過記得降CD一定要拉克絲一定要降CD降CD才可以一直射一直射一射...............切記(5)建議出裝裝備的部份出門先多藍戒+2紅水，再來第一件裝備先出髒杯，前置裝備的部份錢請先算好夠了再回家，除非被壓得很慘不然建議先農到有 聖杯 + 惡魔法典在回家 如果順風的時候第二件裝備就買疊書，越早買越好疊(記得要勤跑線才有得疊阿!!!!!!!!)接下就  沙漏 --> 黑魔(沙漏黑魔順序可以互換) --> 死帽(假如對面魔防高得嚇人就出魔穿棒吧，不過基本上疊書有疊起來都不太需要，我自己很少出到魔穿棒) (6)對線技巧如果對面中路是刺客角色要寄的留 Q ，他想進塔可以陰他一把，在線上 Q 就是保命的本錢，千萬不要輕易的使用 連招部份的話 就 Q E R 一次尻出去就對了，玩拉克絲最重要的就是要Q的到人，多練習一定可以的記得當你 Q > E > R  在R動作的時候，E也要跟著引爆喔，這就算沒有被Q到，只要有被E到也會觸發光芒四射喔(7)總結曾經用拉克絲+EZ直接13連勝從金五爬到金二.......真的還是很OP有興趣的話可以嘗試看看喔..如果有什麼建議的，也歡迎提出來一起交流，畢竟小弟也才金2攻略可能不是那麼完整請大家鞭小力一點，提供給有需要的人看看喔，感謝大家囉!!!!'},
      {name: '麗珊卓', sts:'MID',img:'http://i.gbc.tw/2010/zone/lol/champion/120/lissandra.png',text:'先給你麗珊卓－信霜后得永生介紹記得！你選擇了麗珊卓，意味著你不是追求傷害唯第一優先，而是藉由團戰控場的發揮，騙取敵方大多數的關鍵招式，換取團隊的勝利。麗珊卓是個前期，配合JG非常好滾雪球的角色。要玩麗珊卓前，請先確認你會不會 [ALT+R] 不然關鍵時刻沒無敵自己.......(笑)天賦標準的 21 / 9 / 0召喚師技能閃現+傳送這是我最推薦的，重點是，你要提高自己的機動性，閃現不多說了，帶TP能有效的再前期給予其他邊路莫大的壓力而不敢兇推後期麗珊卓帶線很強，能利用TP做很有效的41分推戰術點燃當然！如果，你對於自己的技術有足夠的自信，也可以換成點燃，再對線期將對手壓的生活不能自理裝備起手多藍戒+紅水X2  OR  水精靈藥+紅水X3正常是前者，提供回藍跟血量，還有些許的AP，壓線比較舒服後者呢，則是顧慮到，如果對方的角色在上路的宰制及推兵能力非常強大，就考慮賴線吧畢竟符文沒有提供回藍，所以水精靈藥是抗壓的好選擇最終裝備中婭沙漏→法穿鞋→大面具→深淵權杖→[ 死亡之帽→冰杖 ]←這兩件順序互換也OK就是推薦的那一套，為什麼?中婭沙漏：能提供你很好的保命空間，以及配合[ ALT+R ]之後開能在第一時間做進場，無敵時間高達5秒之多，夠讓對手頭痛了大面具：Q擊中的第1個目標帶緩速，R丟自己後，周圍所有敵人會被傷害+緩速，還帶有魔穿，這裝的效益很大冰杖：配合面具後，Q的所有目標變成都會吃到面具的控制DOT傷害加成，又可以增加第一時間進場的存活時間深淵權杖：不用多說了吧，做為一個法坦而言，站在最前方位對有爭取空間，比出虛空還來的有用死亡之帽：沒什麼意義，只是單純提升自己的DPS罷了裝備替換的部分.......贓杯：是可以選擇的，回藍、CDR、魔防，對麗珊卓提升POKE能力有很大改善流程就跟推薦裝備的順序長的差不多就看個人需不需要贓杯作替換而已了。技能R>Q>W>E 沒什麼好多說了，麗珊卓的輸出手法..大概也就只有 Q+A 一直循環，大不了一套 EWQARAQ 還是Q實用最大R W E 的CD時間都過長了！！敵對英賈克斯(JAX) 難度:易 很多人認為麗珊卓很難打JAX，我覺得不是如此，JAX的一套不外乎是E W Q 他再跳過來的瞬間你只要W 拉開+ Q A 換血就贏了大不了被他接完一套，你WQA追著點也換得贏伊瑞莉亞(IRE)  難度:難可能會問，為什麼JAX容易IRE就會困難呢? JAX 的 E 是可以讓你有準備空間的但是IRE不是，在他沒有招的時後，他被你當狗打，血量一定比你來的低，接著只要IRE抓好遠程小兵得血量Q W E 把你定住拼命 A  一套你就要回補了，這一套的CD間隔並不長，只要接個兩套就差不多死了與IRE對線只能抓好距離，別跟他硬碰硬，乖乖等JG來照顧她吧雷茲(玩命光頭) 難度:易大家都知道，雷茲手短，1~6等拼命洗線進塔，會讓他非常難受，Q配合小兵能把他POKE到生活不能自理唯一要注意的，就是:你的E扣著不要亂丟，除非你有信心殺掉他，不然這貨配合JG來做COMBO是很可怕的藍寶  難度:中等對上藍寶而言，劣勢點在於他無消耗，你是要耗藍的，不過他的推兵是會影響到他的CS的，你推兵比他好很多，如果你被他壓著還有R可以自保OR反殺，配合JG來他不交閃比死，沒閃他不敢亂來的！杰西(好紳士)  難度:中等(易)其實..滿好打的，只要走位風騷一點，躲掉他的靈丸，其實以CD時間而言，他是動不到你的，唯一要怕得就是配合JG開槌模式，衝上來留你。嘉文四世(J4)難度:難(中等)如過這J4會玩得話，你很痛苦，EQ連技他必定在你後方，被彈起來比定為破甲狀態，加上J4被動起手打6%生命，一套很容易大殘大不了你 Q A 他，但是他的一套是CD算快的，他來第2套你沒死也得回補只要你能閃好他的 E Q 連技，基本上難度會降低一個擋次PS：沒有什麼英雄是最強的，沒有哪一隻英雄是最強勢的，只有駕駛員的操作才能改變一個英雄的能力上限'},
      {name: '布朗姆', sts:'SUP',img:'http://img.legames.cn/templates/images/upload/2014/07/1405329974_0.png',text:'他哪位？？？'},
      {name: '安妮', sts:'MID',img:'http://forums.euw.leagueoflegends.com/board/attachment.php?attachmentid=159092&d=1386868587',text:'這是？？'},
      {name: '維嘉',sts:'MID', img:'https://encrypted-tbn3.gstatic.com/images?q=tbn%3AANd9GcRT6sZ0SUWdnwyLaAVShflhx1RXUjY05vltg06oNSujF-KvKsTp',text:''},
      {name: '犽宿', sts:'MID',img:'http://tecnoslave.com/wp-content/uploads/2013/12/Yasuo_Square_0.jpg',text:''},
      {name: '菲歐拉', sts:'TOP',img:'http://i.gbc.tw/2010/zone/lol/champion/120/fiora.png',text:''},
      {name: '特朗德', sts:'TOP',img:'http://i.gbc.tw/2010/zone/lol/champion/120/trundle.png',  text:'這是誰'},
      {name: '阿姆姆',sts:'JG', img:'http://i.gbc.tw/2010/zone/lol/champion/120/amumu.png',text:''},
      {name: '奈德麗', sts:'TOP',img:'http://tw.loldb.gameguyz.com//images/sqlite_images/champions_avatar_104_104/76.png',text:''},
      {name: '威寇茲', sts:'MID',img:'http://i.gbc.tw/2010/zone/lol/champion/120/velkoz.png',text:''},
      {name: '雷茲', sts:'TOP',img:'http://i.gbc.tw/2010/zone/lol/champion/120/ryze.png',text:''},
      {name: '艾希',sts:'AD', img:'http://img2.wikia.nocookie.net/__cb20140210200942/leagueoflegends/images/4/4a/AsheSquare.png',text:''},
      {name: '星朵拉',sts:'MID', img:'http://img4.wikia.nocookie.net/__cb20120828063438/leagueoflegends/images/6/65/SyndraSquare.png',text:''},
      {name: '阿璃',sts:'MID', img:'http://cfile25.uf.tistory.com/image/237C1B48533A6FA00E7C0B',text:''},
      {name: '厄薩斯', sts:'JG.TOP',img:'http://i.gbc.tw/2010/zone/lol/champion/120/aatrox.png',text:''},

  ]
    
  })

}