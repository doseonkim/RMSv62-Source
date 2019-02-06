//stage3

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
				cm.sendNext ("I manage the third task of the #bRaverStory Mini-Quest#k!");
			}
		else if (status == 1) {
			if (cm.haveItem(4000120,50)) {
			cm.sendOk ("Whoa thanks! Now I can further my research!");
			}
			if (!cm.haveItem(4000120,50)) {
			cm.sendOk ("You have not collected:\r\n #b#i4000120# 50 Mateon's Tentacle#k");
			cm.dispose();
			}
		}
		else if (status == 2) {
			
			cm.warp(250010200,0);
                        cm.showEffect("quest/party/clear");
                        cm.playSound("Party1/Clear");
cm.gainItem(4000120,-50);
			cm.gainExp(400000);
			cm.sendOk ("Welcome to the fourth Task! Hey, Ive lost my sewing kit and I need to make a sweater today! could you help me get anything that can replace a needle?  Obtain:/r/n #b#i4000278# 50 Needle Pouches#k");
			cm.dispose();
		}
	}
}
