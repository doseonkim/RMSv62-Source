var status = 0;
var price = 1000000;
var skin = Array(0, 1, 2, 3, 4);

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
			if (cm.haveItem(4000363)){
			cm.sendSimple("#eWeuh! Is it scorching or is it just me? Unlike those other low lifes, Im going to give you a choice for your beautiful skin! Just get my one of my #rAccess Passes#k and you set to go!\r\n\r\n#rBreak these boxes and bring one back!#k\r\n\#L2##bMiss, I found an Access Pass!#l");
			} else {
			cm.sendOk("#eHand it over bud! Your Entry Pass!");
			cm.dispose();
}
}
		else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5153002, 1);
					cm.sendOk("Enjoy!");
				} else {
					cm.sendOk("You don't have enough mesos to buy a coupon!");
				}
				cm.dispose();
			} else if (selection == 2) {
				cm.sendStyle("#eWith my specialized machine, you can choose which colour you like! This will not dissappoint!", skin);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5153002) == true){
				cm.gainItem(5153002, -1);
				cm.setSkin(skin[selection]);
				cm.sendOk("#eEnjoy your new and improved skin!");
			} else {
				cm.sendOk("#eUm...you don't have the #rAccess Pass#k you need to receive the treatment. Sorry, but I am afraid we can't do it for you...");
			}
		}
	}
}
