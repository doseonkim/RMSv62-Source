var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.sendOk("Peace. Hope you come back soon!.");
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
            cm.sendSimple ("#eHey #h # you can change your apearence here by talking to Kin(male) or Nimakin(female). You can also access them by typing @raver or @kin/@nimakin anytime!\r\n\r\n #rWould you like to proceed to the next map? \r\n#L1#Lets Go!");
        } else if (status == 1) {
            switch(selection) {
                case 1: cm.warp(222020110); break; //warper
                }
        } else {
            cm.dispose();
		}
    }
}
