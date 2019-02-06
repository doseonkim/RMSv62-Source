/*
Donator NPC
Author: Moogra
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
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
            cm.sendSimple ("#eSo you want to use your Event points? What do you want to do? \n You currently have #r" + cm.getDonatorPoints() + " Event points.#k #b\b\r\n#L0#Become an Eventeer (15 points)!\n\#l\r\n#L1#Get an Eventeer Helm (5 points)\n\#l\r\n#L2#Buy Rebirth (1 point)\n\#l\r\n#L3#Get 1000 AP (2 point)\n\#l\r\n#L4#Get a Maple Coin (1 point)\n\#l");
        } else if (status == 1) {
            switch(selection) {
                case 0:
                    if (cm.getDonatorPoints() > 15) {
                        cm.setGMLevel(1);
                        cm.gainDonatorPoints(-15);
			cm.channelMessage(6, "Someone has just been promoted to Eventeer! Congratulations! Everyone scream!");
                        cm.dispose();
                    } else {
                        cm.sendSimple("#eYou don't have 15 Event points.");
                        cm.dispose();
                    }
                    break;
                case 1:
                    if (cm.getDonatorPoints() > 5) {
                        cm.gainItem(1002857,1);
                        cm.gainDonatorPoints(-5);
                        cm.dispose();
                    } else {
                        cm.sendSimple("#eYou don't have 5 Event points.");
                        cm.dispose();
                    }
                    break;
                case 2:
                    if (cm.getDonatorPoints() > 1) {
                        cm.gainReborns(1);
                        cm.gainDonatorPoints(-1);
                        cm.dispose();
                    } else {
                        cm.sendSimple("#eYou don't have any Event points.");
                        cm.dispose();
                    }
                    break;
                case 3:
                    if (cm.getDonatorPoints() > 2) {
                        cm.gainAP(1000);
                        cm.gainDonatorPoints(-2);
                        cm.dispose();
                    } else {
                        cm.sendSimple("#eYou don't have any Event points.");
                        cm.dispose();
                    }
 		     break;
		case 4:
			if (cm.getDonatorPoints() > 1) {
                        cm.gainItem(4001129, 1);
                        cm.gainDonatorPoints(-1);
                        cm.dispose();
                    } else {
                        cm.sendSimple("#eYou don't have any Event points.");
                        cm.dispose();
                    }
                    break;
            }
        }
    }
}