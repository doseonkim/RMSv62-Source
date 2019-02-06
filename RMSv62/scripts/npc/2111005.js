var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("Goodbye");
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
                       if (cm.getPlayer().getMap().mobCount() < 1) {
                if(cm.getPlayer().getMapId() == 910000004||910000005||910000006) {
        cm.sendSimple("Please remember I will summon 1. \r\nPlease choose #b\r\n#L1#Headless Horseman#l\r\n#L2#Black Crow#l\r\n#L3#Anego#l\r\n#L5#BigFoot#l");

    } else {
    cm.sendOk("kill all the monsters please. Or Please Go to FM 1, 2 or 3.");
    cm.dispose();
        }
            }
        }
        else if (selection == 1) {
              if (cm.getPlayer().getMap().mobCount() < 1) {
            cm.spawnMob(9400549, 3500000, 300000, 3, -192, 34);
            cm.spawnMob(9400549, 3500000, 300000, 2, 358, 34);
              }  else {
    cm.sendOk("kill all the monsters please.");
            cm.dispose();
                             }
        }
        else if (selection == 2) {
                        if (cm.getPlayer().getMap().mobCount() < 1) {
            cm.spawnMob(9400014, 35000000, 1780000, 3, -192, 34);
            cm.spawnMob(9400014, 35000000, 1780000, 2, 358, 34);
                            } else {
    cm.sendOk("kill all the monsters please.");
            cm.dispose();
        }
        }
        else if (selection == 3) {
                        if (cm.getPlayer().getMap().mobCount() < 1) {
            cm.spawnMob(9400121, 75000000, 3900000, 3, -192, 34);
            cm.spawnMob(9400121, 75000000, 3900000, 2, 358, 34);
                            } else {
    cm.sendOk("kill all the monsters please.");
            cm.dispose();
        }
        }
        else if (selection == 5) {
                        if (cm.getPlayer().getMap().mobCount() < 1) {
            cm.spawnMob(9400575, 32000000, 2660000, 3, -192, 34);
            cm.spawnMob(9400575, 32000000, 2660000, 2, 358, 34);
                            } else {
    cm.sendOk("kill all the monsters please.");
            cm.dispose();
        }
        }
        }
    }
