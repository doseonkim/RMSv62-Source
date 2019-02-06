/*
JQ npc
Edit By John
*/

var status = 0;

function start() {
    cm.sendYesNo("Do you want to go back to henesys??. \r\n#rMade by Admin of UnitedStory");
}

function action(mode, type, selection) {
    if (mode < 1) {
	cm.sendNext ("Sweet thats the spirit!!");
        cm.dispose();
    } else {
        if (status == 0) {
            cm.sendNext ("Better luck next time D:.");
            status++;
        } else if (status == 1) {
            cm.warp(100000000, 0);
            cm.dispose();
        }
    }
}  