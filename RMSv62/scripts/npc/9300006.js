
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
				cm.sendSimple ("Hey do you want to go to the next stage??. \r\n\r\n #b#L1#Go To Next Stage!\n\#l\r\n#L2#Go To Free Market\n\#l\r\n\r\n\r\nMade by Rikki of RaverStory");
        } else if (status == 1) {
            switch(selection) {
			    case 1: cm.warp (220000006, 0);break;
                case 2: cm.warp (910000000, 0);break;
            }
        } else {
			cm.dispose();
		}
	}
}
