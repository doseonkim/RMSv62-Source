//stag1

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
				cm.sendNext ("I manage the first task of the #bRaverStory Mini-Quest#k!");
			}
		else if (status == 1) {
			if (cm.haveItem(4000332,50)) {
			cm.sendOk ("Yay! Now I can build my HUGE sand castle!");
			}
			if (!cm.haveItem(4000332,50)) {
			cm.sendOk ("You have not collected:\r\n #b#i4000332# 50 Sand.#k");
			cm.dispose();
			}
		}
		else if (status == 2) {
cm.warp(220020600);
                        cm.showEffect("quest/party/clear");
                        cm.playSound("Party1/Clear");
                        cm.gainExp(400000);
			
                        cm.gainItem(4000332,-50);
			cm.sendOk ("Hey #h #, Welcome to the second Task!\r\n Glad you can help me #h #. I need some batteries for my lamp light. I heard ROBO's drop cheap batteries. Could you get me some, please? \r\n Now you have to obtain:\r\n #b#i4000111# 50 Cheap Batteries#k");
			cm.dispose();
		}
	}
}
