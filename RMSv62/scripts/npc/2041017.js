/*
UnitedPQ Stage 1 Npc.
Made by Rikki, Edited by Anden
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.sendOk("See you around.");
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
				cm.sendNext ("Welcome to the first stage of #bUnitedPQ#k!");
			}
		else if (status == 1) {
			if (cm.haveItem(4000000,20) && cm.haveItem(4000016,20) && cm.haveItem(4000019,20) && cm.haveItem(3994017,1)){
			cm.sendNext ("WOW! You are totally ready for the second stage of UnitedPQ");
			} else {
			cm.sendOk ("You are either not part of UnitedPQ or you havnt collected: #g#i4000019# 20 Green Snail Shells. #k\r\n#b#i4000000# 20 Blue Snail Shells. #k\r\n#r#i4000016# 20 Red Snail Shell. #k");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4000016,-20);
			cm.gainItem(4000019,-20);
			cm.gainItem(4000000,-20);
			cm.gainItem(3994017,-1);
			cm.gainItem(3994018,1);
			cm.gainExp(50000);
			cm.warp(260020401,0);
			cm.sendOk ("Yooo Second stage, thats here!Now... Get me #b#i4000332# 50 Sand.#k");
			cm.dispose();
		}
	}
}
