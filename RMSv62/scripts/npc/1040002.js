//Kerning Gachaphon

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*75+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("See you next time, when you try your luck here~!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("I am gachapon.\r\nI give things to people if they give me cardboard tickets~!\r\nThe tickets look like this: #v5220010#");
			}
		else if (status == 1) {
			if (cm.haveItem(5220010)) {
			cm.sendYesNo("I see you have a ticket of mine, do you wish to use it?");
			}
			else if (!cm.haveItem(5220010)) {
			cm.sendOk("You dont have any #bgachapon tickets#k.");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(5220010, -1);
			if ((itemchance >= 1) && (itemchance <= 20)) {
			cm.gainItem(2000004, itemamount);
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
			cm.gainItem(2020012, itemamount);
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
			cm.gainItem(2000005, itemamount);
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
			cm.gainItem(2022179, itemamount);
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
			cm.gainItem(2022282, itemamount);
			}
			else if (itemchance == 72) {
			cm.gainItem(2040402, 1);
			}
			else if (itemchance == 73) {
			cm.gainItem(1322008, 1);
			}
			else if (itemchance == 74) {
			cm.gainItem(3012005, 1);
			}
			else if (itemchance == 75) {
			cm.gainItem(1322022, 1);
			}
			else if (itemchance == 76) {
			cm.gainItem(1302013, 1);
			}
			else if (itemchance == 77) {
			cm.gainItem(3010043, 1);
			}
			else if (itemchance == 78) {
			cm.gainItem(1060079, 1);
			}
			else if (itemchance == 79) {
			cm.gainItem(1002005, 1);
			}	
			else if (itemchance == 80) {
			cm.gainItem(1002023, 1);
			}	
			else if (itemchance == 81) {
			cm.gainItem(1002085, 1);
			}
			else if (itemchance == 82) {
			cm.gainItem(2382048, 1);
			}
			else if (itemchance == 83) {
			cm.gainItem(1322010, 1);
			}	
			else if (itemchance == 84) {
			cm.gainItem(3010064, 1);
			}
			else if (itemchance == 85) {
			cm.gainItem(1002212, 1);
			}
			else if (itemchance == 86) {
			cm.gainItem(1002117, 1);
			}
			else if (itemchance == 87) {
			cm.gainItem(1040081, 1);
			}	
			else if (itemchance == 88) {
			cm.gainItem(3010062, 1);
			}
			else if (itemchance == 89) {
			cm.gainItem(3010057, 1);
			}
			else if (itemchance == 90) {
			cm.gainItem(3010046, 1);
			}
			else if (itemchance == 91) {
			cm.gainItem(1702203, 1);
			}
			else if (itemchance == 92) {
			cm.gainItem(1472003, 1);
			}
			else if (itemchance == 93) {
			cm.gainItem(1102223, 1);
			}
			else if (itemchance == 94) {
			cm.gainItem(1060087, 1);
			}
			else if (itemchance == 95) {
			cm.gainItem(2383019, 1);
			}
			else if (itemchance == 96) {
			cm.gainItem(5000060, 1);
			}
			else if (itemchance == 97) {
			cm.gainItem(3010016, 1);
			}
			else if (itemchance == 98) {
			cm.gainItem(3010047, 1);
			}
			else if (itemchance == 99) {
			cm.gainItem(5000026, 1);
			}
			else if (itemchance == 100) {
			cm.gainItem(5000042, 1);
			}
			else if (itemchance == 101) {
			cm.gainItem(2388021, 1);
			}
			else if (itemchance == 102) {
			cm.gainItem(3010060, 1);
			}
			else if (itemchance == 103) {
			cm.gainItem(1092014, 1);
			}
			else if (itemchance == 104) {
			cm.gainItem(1322022, 1);
			}
			else if (itemchance == 105) {
			cm.gainItem(1432047, 1);
			}
			else if (itemchance == 106) {
			cm.gainItem(2382004, 1);
			}
			else if (itemchance == 107) {
			cm.gainItem(3010045, 1);
			}
			else if (itemchance == 108) {
			cm.gainItem(2383001, 1);
			}
			else if (itemchance == 109) {
			cm.gainItem(2382061, 1);
			}
			else if (itemchance == 110) {
			cm.gainItem(3010017, 1);
			}
			else if (itemchance == 111) {
			cm.gainItem(1442012, 1);
			}
			else if (itemchance == 112) {
			cm.gainItem(1322010, 1);
			}
			else if (itemchance == 113) {
			cm.gainItem(1442011, 1);
			}
			else if (itemchance == 114) {
			cm.gainItem(1442018, 1);
			}
			else if (itemchance == 115) {
			cm.gainItem(3010098, 1);
			}
			else if (itemchance == 116) {
			cm.gainItem(2382038, 1);
			}
			else if (itemchance == 117) {
			cm.gainItem(2384009, 1);
			}
			else if (itemchance == 118) {
			cm.gainItem(1702238, 1);
			}
			else if (itemchance == 119) {
			cm.gainItem(1312011, 1);
			}
			else if (itemchance == 120) {
			cm.gainItem(1002088, 1);
			}
			else if (itemchance == 121) {
			cm.gainItem(2381036, 1);
			}
			else if (itemchance == 122) {
			cm.gainItem(1322015, 1);
			}
			else if (itemchance == 123) {
			cm.gainItem(1442004, 1);
			}
			else if (itemchance == 124) {
			cm.gainItem(1422008, 1);
			}
			else if (itemchance == 125) {
			cm.gainItem(1302056, 1);
			}
			else if (itemchance == 126) {
			cm.gainItem(1432000, 1);
			}
			else if (itemchance == 127) {
			cm.gainItem(1382001, 1);
			}
			else if (itemchance == 128) {
			cm.gainItem(1072395, 1);
			}
			else if (itemchance == 129) {
			cm.gainItem(3010085, 1);
			}
			else if (itemchance == 130) {
			cm.gainItem(1050053, 1);
			}
			else if (itemchance == 131) {
			cm.gainItem(1702208, 1);
			}
			else if (itemchance == 132) {
			cm.gainItem(1442023, 1);
			}
			else if (itemchance == 133) {
			cm.gainItem(2384035 , 1);
			}
			else if (itemchance == 134) {
			cm.gainItem(1702250, 1);
			}
			else if (itemchance == 135) {
			cm.gainItem(1002034, 1);
			}
			else if (itemchance == 136) {
			cm.gainItem(1051025, 1);
			}
			else if (itemchance == 137) {
			cm.gainItem(1002887, 1);
			}
			else if (itemchance == 138) {
			cm.gainItem(1051052, 1);
			}
			else if ((itemchance >= 139) && (itemchance <= 250)) {
			cm.gainItem(1102084, 1);
			}

			cm.dispose();
		}
	}
}
