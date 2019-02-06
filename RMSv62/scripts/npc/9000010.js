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
	if (!cm.haveItem(400363, 1)){
            cm.sendSimple("#e\r\n #L6#Warp me there so I can get my tetris pieces!!#l\r\n #L0#No thank you, I will pass.#l#b");
       	}else{
             cm.sendSimple("#e\r\n #L6#Warp me there so I can get my tetris pieces!!#l\r\n #L0#No thank you, I will pass.#l#b");
             cm.dispose();
}
} else if (status == 1) {
     if (selection == 6) {
		cm.warp(109010104,0);
                cm.sendOk("#eGood Luck!");
		cm.dispose();
            } else if (selection == 0) {
              cm.sendOk("Oh, okay! Come back next time! :D");
		cm.dispose();
            }
    }
}
}