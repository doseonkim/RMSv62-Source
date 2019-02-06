/*
JQ npc
*/

var status = 0;

function start() {
    cm.sendYesNo("Click Yes to start the UNITEDSTORY Jump Quest! \r\n#rMade by Admin of UnitedStory");
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
    } else {
        if (status == 0) {
            cm.sendNext ("Sweet. Good luck, dont fail! :D");
            status++;
        } else if (status == 1) {
            cm.warp(280020000, 0);
            cm.dispose();
        }
    }
}  