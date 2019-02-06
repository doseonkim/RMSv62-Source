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
            cm.sendSimple ("What do you want to do? \r\n#L1#Slime Shop\n\#l");
        } else if (status == 1) {
            switch(selection) {
                case 1: cm.openShop(5113333); break; //slime
            }
        } else {
            cm.dispose();
		}
    }
}