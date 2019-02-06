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
            if (cm.getPlayer().getMap().mobCount() < 10) {
                if(cm.getPlayer().getMapId() == 910000001||910000002||910000003) {
cm.sendSimple("Please remember I will summon 1. \r\nPlease choose #b\r\n#L0#Mushmom#l\r\n#L1#Headless Horseman#l\r\n#L2#Black Crow#l\r\n#L3#Anego#l\r\n#L5#BigFoot#l");
                
    } else {
    cm.sendOk("kill all the monsters please. Or Please Go to FM 1, 2 or 3.");
    cm.dispose();
        }
            }
        }
        else if (status == 1) {
        if (selection == 0) {
            cm.summonMob(6130101, 20000, 1200, 1);
            cm.dispose();
        
        }
        else if (selection == 1) {
            cm.summonMob(9400549, 3500000, 300000, 1);
            cm.dispose();
        }
        else if (selection == 2) {
            cm.summonMob(9400014, 35000000, 1780000, 1);
            cm.dispose();
        }
        else if (selection == 3) {
            cm.summonMob(9400121, 75000000, 3900000, 1);
            cm.dispose();
        }
        else if (selection == 4) {
            cm.summonMob(9600001, 35000000, 1000000000, 1);
            cm.dispose();
        }
        else if (selection == 5) {
            cm.summonMob(9400575, 32000000, 2660000, 1);
            cm.dispose();
        }

        }
    }
}