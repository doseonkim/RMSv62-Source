var status;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("#e#kOk, see you next time!");
        cm.dispose();
        return;
    }
    if (status == 0) {
		cm.openShop(209);
		cm.dispose();
	}
}