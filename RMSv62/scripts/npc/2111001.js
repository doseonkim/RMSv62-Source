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
   cm.sendSimple("Please remember I will summon 15. \r\nPlease choose #b\r\n#L0#Papulatus clock#l\r\n#L1#Headless Horseman#l\r\n#L2#Black Crow#l\r\n#L3#Anego#l\r\n#L4#Rooster#l\r\n#L5#BigFoot#l");
        }
        else if (status == 1) {

        if (selection == 0) {
            cm.summonMob(8500001, 23000000, 596000, 15);
            cm.dispose();
        }

        else if (selection == 1) {
            cm.summonMob(9400549, 3500000, 300000, 15);
            cm.dispose();
        }
        else if (selection == 2) {
            cm.summonMob(9400014, 35000000, 1780000, 15);
            cm.dispose();
        }
        else if (selection == 3) {
            cm.summonMob(9400121, 75000000, 3900000, 15);
            cm.dispose();
        }
        else if (selection == 4) {
            cm.summonMob(9600001, 35000000, 1000000000, 15);
            cm.dispose();
        }
        else if (selection == 5) {
            cm.summonMob(9400575, 32000000, 2660000, 15);
            cm.dispose();
        }
        else if (selection == 6) {
            cm.summonMob(9500124, 20000, 1200, 15);
            cm.dispose();
        }
        }
    }
}