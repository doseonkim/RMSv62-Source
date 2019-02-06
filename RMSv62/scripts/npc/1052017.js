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
            cm.sendSimple ("Hey #h #, you wanna get buffed up?\r\nSelect what buff you want then!.\r\n#r#eNote#n: You will be using your own MP.#k\r\n\r\n#L1#Buff\n\#l\r\n#L2#Buff\n\#l\r\n#L3#buff#l\r\n#L4#buff#l\r\n#L5#buff#l");
        } else if (status == 1) {
            switch(selection) {
                case 1: cm.giveBuff(1002); break; 
                case 2: cm.giveBuff(1001); break; 
                case 3: cm.giveBuff(1001003); break; 
                case 4: cm.giveBuff(2001003); break; 
                case 5: cm.giveBuff(2001002); break; 
        } else {
            cm.dispose();
		}
    }
}