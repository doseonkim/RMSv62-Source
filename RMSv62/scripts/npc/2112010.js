// Credits to Moogra,xChibi,& Mages4Ever
var status = 0;

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
            cm.sendSimple("#eWelcome to the #bFourth Stage of the Rebirth PQ#k! Please collect me #r25 Griffey Horns#k!\r\n#L6#I would like to leave!#l#b\r\n#L1#I have the Griffey Horns!#l "); 
       	}else{
	cm.sendOk("#eYou can't help me without an Entry Pass!\r\n #rThat's against the rules!");
	cm.dispose();
}
} else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4000243, 25)) {
                    cm.gainItem(4000243, -25); 
	   cm.warp(910000011, 0);
                    cm.sendOk("#eWelcome to the next stage!\r\nPlease click the NPC to continue!");
                } else {
                    cm.sendOk("#eSorry, you don't have enough #b#v4000243##k#rGriffey Horns#k!");
                }
                cm.dispose();       
} else {
		cm.dispose();
            }
        }
    }
  }