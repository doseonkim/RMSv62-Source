/* Nerbit
	NLC Random Eye Change.
*/
var status = 0;
var beauty = 0;
var price = 1000000;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012);
var fface = Array(21001, 21002, 21003, 21004, 21005, 21006, 21008, 21012, 21014, 21016);
var facenew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.haveItem(4000363)){
			cm.sendSimple("#eOh my! Your hair sure does look wonderful! Seems that you've already visited #rClaudia and Julius#k? Ho ho! What happened to you? I think you need reconstructive surgery! Come back to me with an #rAccess Pass#k! All you have to do is hunt these slimes!\r\n\r\n#L2##bI have an Access Pass!#l");
			}else{
			cm.sendOk("#eYou must show me your Entry Pass!");
			cm.dispose();
}
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5152033, 1);
					cm.sendOk("Enjoy!");
				} else {
					cm.sendOk("You don't have enough mesos to buy a coupon!");
				}
				cm.dispose();
			} else if (selection == 2) {
				facenew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mface.length; i++) {
						facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fface.length; i++) {
						facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
					}
				}
				cm.sendYesNo("#g#eYou sure you want to undergo your surgery? It may hurt a little!");
			}
		} else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5152033)){
				cm.gainItem(5152033, -1);
				cm.setFace(facenew[Math.floor(Math.random() * facenew.length)]);
				cm.sendOk("#g#eEnjoy your new and improved face!");
			} else {
				cm.sendOk("#eHmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you...");
			}
		}
	}
}
