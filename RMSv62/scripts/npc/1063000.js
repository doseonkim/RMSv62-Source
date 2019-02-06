importPackage(net.sf.odinms.client);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("Alright, see you next time.");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            if (cm.getQuestStatus(2052).equals(MapleQuestStatus.Status.STARTED) && !cm.haveItem(4031025)) {
                cm.updateJQ();
                cm.gainItem(4031025, 10);
                cm.warp(105040300, 0);
            }
            else {
                var rand = 1 + Math.floor(Math.random() * 6);
                if (rand == 1) {
                    cm.gainItem(4031025, 10); // Adamantium Ore
                }
                else if (rand == 2) {
                    cm.gainItem(4031025, 10); // Bronze Ore
                }
                else if (rand == 3) {
                    cm.gainItem(4031025, 10); // Mithril Ore
                }
                else if (rand == 4) {
                    cm.gainItem(4031025, 10); // Orihalcon Ore
                }
                else if (rand == 5) {
                    cm.gainItem(4031025, 10); // Silver Ore
                }
                else if (rand == 6) {
                    cm.gainItem(4031025, 10); // Steel Ore
                }
                cm.warp(105040300, 0);
            }
            cm.dispose();	
        }
    }
}	
