//stage5

var status = 0;


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk ("RaverStory FTW!~");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext ("I manage the fifth and the last Task of the #bRaverStory Mini-Quest#k!");
			}
		else if (status == 1) {
			if (cm.haveItem(4000157,100)) {
			cm.sendOk ("Great! Thank you! I can cook my exotic dish now!");
			}
			if (!cm.haveItem(4000157,100)) {
			cm.sendOk ("You have not collected #b#i4000157# 100 Seal Meat#k");
			cm.dispose();
			}
		}
		else if (status == 2) {
			
			cm.warp(230040001,0);
                        cm.showEffect("quest/party/clear");
                        cm.playSound("Party1/Clear");
cm.gainItem(4000157,-100);
			cm.gainExp(400000);
			cm.sendOk ("Welcome to the boss stage! In here you will need to kill a WEAK Headless Horseman! (remember to pick up the drops!)");
			cm.dispose();
		}
	}
}
