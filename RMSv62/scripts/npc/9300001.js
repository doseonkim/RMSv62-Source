//stage2

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
				cm.sendNext ("I manage the second task of the #bRaverStory Mini-Quest#k!");
			}
		else if (status == 1) {
			if (cm.haveItem(4000111,50)) {
			cm.sendOk ("Thanks alot!! I can use my lamp light now :P");
			}
			if (!cm.haveItem(4000111,50)) {
			cm.sendOk ("You have not collected #b#i4000111# 50 Cheap Batteries.#k");
			cm.dispose();
			}
		}
		else if (status == 2) {

			cm.warp(221030301,0);
                        cm.showEffect("quest/party/clear");
                        cm.playSound("Party1/Clear");
cm.gainItem(4000111,-50);
			cm.gainExp(400000);
			cm.sendOk ("Hey #h #, Welcome to the third Task! \r\n Hey I need some help... Im a scientist and im studying these aliens to see where they cam from, but ill need some stuff. \r\n Get me:\r\n #b#i4000120# 50 Mateon's Tentacle.#k");
			cm.dispose();
		}
	}
}
