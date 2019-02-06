/*
	By Foldded
        Edited by iOWNu
	Super Rebirth
*/
var status = 0;
var wui = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {

	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
 			cm.sendSimple ("#eHey, do you want to do a #rSuper Rebirth#k?\r\nYou will need #b120,000#k stats in total, makining #b30,000#k of each stat. It will decrease your stats by 30,000 and give you a godly ring! Do you wish to do this?\r\n#b#L0#Yes please!\r\n#L1#No thank you.");
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getPlayer().getStr() > 29999 && cm.getPlayer().getDex() > 29999 && cm.getPlayer().getInt() > 29999 && cm.getPlayer().getLuk() > 29999) {
					cm.getPlayer().setStr(4); cm.getPlayer().setDex(4); cm.getPlayer().setLuk(4); cm.getPlayer().setInt(4);
					cm.gainItem(1112000,1);
					cm.reloadChar();
					cm.sendOk ("#eCongrats! You have done a #rSuper Rebirth#k!");
					cm.dispose();
				} else  {
					cm.sendOk ("#eSorry but you don't have enough stats!\r\nYou need to have 30,000 of each stat if you want to do this!");
					cm.dispose(); 
				}
			} else if (selection == 1) {
				cm.sendOk("#eAlright see you next time.");
				cm.dispose();
			}
		}
	}
}