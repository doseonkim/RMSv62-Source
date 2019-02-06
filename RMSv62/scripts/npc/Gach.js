

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*80+1);
var chance2 = Math.floor(Math.random()*55);
var chance3 = (Math.floor(Math.random()*25)+1);
var chance4 = Math.floor(Math.random()*3+1);
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
			cm.gainItem(1102215, 1);
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
			cm.gainItem(3010058, 1);
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
			cm.gainItem(1102184, 1);
			}
			else if (itemchance == 121) {
			cm.gainItem(2381036, 1);
			}
			else if (itemchance == 122) {
			cm.gainItem(1322015, 1);
			}
			else if (itemchance == 123) {
			cm.gainItem(3010073, 1);
			}
			else if (itemchance == 124) {
			cm.gainItem(3010071, 1);
			}
			else if (itemchance == 125) {
			cm.gainItem(2385021, 1);
			}
			else if (itemchance == 126) {
			cm.gainItem(2388020, 1);
			}
			else if (itemchance == 127) {
			cm.gainItem(2388022, 1);
			}
			else if (itemchance == 128) {
			cm.gainItem(1072395, 1);
			}
			else if (itemchance == 129) {
			cm.gainItem(3010085, 1);
			}
			else if (itemchance == 130) {
			cm.gainItem(2388023, 1);
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
			cm.gainItem(1072395 , 1);
			}
			else if (itemchance == 137) {
			cm.gainItem(1702170, 1);
			}
			else if (itemchance == 138) {
			cm.gainItem(1002976, 1);
			}
			else if (itemchance == 139) {
			cm.gainItem(2388023, 1);
			}
                        else if (itemchance == 140) {
			cm.gainItem(3010029, 1);
			}
			else if (itemchance == 141) {
			cm.gainItem(1051054, 1);
			}
			else if (itemchance == 142) {
			cm.gainItem(3010020, 1);
			}
			else if (itemchance == 143) {
			cm.gainItem(3010021, 1);
			}
			else if (itemchance == 144) {
			cm.gainItem(3010027, 1);
			}
			else if (itemchance == 145) {
			cm.gainItem(3010032, 1);
			}
			else if (itemchance == 146) {
			cm.gainItem(3010030, 1);
			}
			else if (itemchance == 147) {
			cm.gainItem(3010031, 1);
			}
			else if (itemchance == 148) {
			cm.gainItem(3010033, 1);
			}
			else if (itemchance == 149) {
			cm.gainItem(3010034, 1);
			}
			else if (itemchance == 150) {
			cm.gainItem(3010035, 1);
			}
			else if (itemchance == 151) {
			cm.gainItem(3010036, 1);
			}
			else if (itemchance == 152) {
			cm.gainItem(3010037, 1);
			}
			else if (itemchance == 153) {
			cm.gainItem(3010038, 1);
			}
			else if (itemchance == 154) {
			cm.gainItem(3010044, 1);
			}
			else if (itemchance == 155) {
			cm.gainItem(3010048, 1);
			}
			else if (itemchance == 156) {
			cm.gainItem(3010049, 1);
			}
			else if (itemchance == 157) {
			cm.gainItem(3010050, 1);
			}
			else if (itemchance == 158) {
			cm.gainItem(3010052, 1);
			}
			else if (itemchance == 159) {
			cm.gainItem(3010054, 1);
			}
			else if (itemchance == 160) {
			cm.gainItem(3010055, 1);
			}
			else if (itemchance == 161) {
			cm.gainItem(3010059, 1);
			}
			else if (itemchance == 162) {
			cm.gainItem(1092021, 1);
			}
                        else if (itemchance == 163) {
			cm.gainItem(1051034, 1);
			}
			else if (itemchance == 164) {
			cm.gainItem(1050047, 1);
			}
                        else if (itemchance == 165) {
			cm.gainItem(1040019, 1);
			}
			else if (itemchance == 166) {
			cm.gainItem(1041031, 1);
			}
			else if (itemchance == 167) {
			cm.gainItem(1051033, 1);
			}
			else if (itemchance == 168) {
			cm.gainItem(1002153, 1);
			}
			else if (itemchance == 169) {
			cm.gainItem(1002252, 1);
			}
			else if (itemchance == 170) {
			cm.gainItem(1051024, 1);
			}
			else if (itemchance == 171) {
			cm.gainItem(1002153, 1);
			}
			else if (itemchance == 172) {
			cm.gainItem(1050068, 1);
			}
			else if (itemchance == 173) {
			cm.gainItem(1382003, 1);
			}
			else if (itemchance == 174) {
			cm.gainItem(1382006, 1);
			}
                        else if (itemchance >= 175) { 
			cm.gainItem(1050055, 1);
			}
			cm.dispose();
		}
	}
}