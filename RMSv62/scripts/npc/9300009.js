//boss stage


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
				cm.sendNext ("I manage the Boss Challenge of the #bRaverStory Mini-Quest#k!");
			}
		else if (status == 1) {
			if (cm.haveItem(4032012,1)) {
			cm.sendOk ("Good Job! Ill warp you back to the FM with your rewards!!");
			}
			if (!cm.haveItem(4032012,1)) {
			cm.sendOk ("You have not killed the Headless Horseman yet...");
			cm.dispose();
			}
		}
		else if (status == 2) {
			
			cm.warp(910000000,0);
                        cm.showEffect("quest/party/clear");
                        cm.playSound("Party1/Clear");
cm.gainExp(200000);
cm.gainItem(2022179,2);
			cm.gainItem(2022282,1);
			cm.gainItem(1402044,1);
			cm.gainItem(1002699,1);
			cm.gainItem(1302062,1);
			cm.gainItem(2022113,100);
			cm.gainItem(2022246,100);
			cm.gainItem(5021012,3);
			cm.gainItem(2022245,100);
			cm.gainItem(4032012,-1000);
			cm.sendOk ("Congratz! You've finished RAVERSTORY MINI-QUEST. Hope you Enjoy your rewards!");
			cm.dispose();
		}
	}
}

			