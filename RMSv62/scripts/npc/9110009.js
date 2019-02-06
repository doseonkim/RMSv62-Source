var status = 0;
var map = Array(240010501);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0 && status == 0)
            cm.dispose();
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#eHello#b #h ##k, You can trade me your present boxes for credits! It will cost you exactly 10 presents for 1 credit!\r\n\r\n#bWhat would you like to do?\r\n\r\n#k#L1#I have 10 present boxes to trade in!#l\r\n\#L2#I would like to leave!#l");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.haveItem(4031307)) {
                    cm.gainItem(4031307,-10);
	                  cm.gainItem(4031039,1);
                    cm.sendOk("#eEnjoy! You can keep hunting as long as you like!");
                } else
                    cm.sendOk("#eSorry, you don't have any #b#v4031307##k!");
                	  cm.dispose();
            } else if (selection == 2) {
               cm.warp(910000000, 0);
            } else
                cm.sendOk("#eAll right. Come back later");
        }
    }
}