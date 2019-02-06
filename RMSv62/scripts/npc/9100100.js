
importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*100+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*75)+1);
var chance4 = Math.floor(Math.random()*12+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*30+1);


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
			else if (itemchance == 71) {
			cm.gainItem(2040001, 1);
			}
			else if (itemchance == 72) {
			cm.gainItem(2041002, 1);
			}
			else if (itemchance == 73) {
			cm.gainItem(2040805, 1);
			}
			else if (itemchance == 74) {
			cm.gainItem(2040702, 1);
			}
			else if (itemchance == 75) {
			cm.gainItem(2043802, 1);
			}
			else if (itemchance == 76) {
			cm.gainItem(2040402, 1);
			}
			else if (itemchance == 77) {
			cm.gainItem(2043702, 1);
			}
			else if (itemchance == 78) {
			cm.gainItem(1302022, 1);
			}
			else if (itemchance == 79) {
			cm.gainItem(1322021, 1);
			}	
			else if (itemchance == 80) {
			cm.gainItem(1322026, 1);
			}	
			else if (itemchance == 81) {
			cm.gainItem(1302026, 1);
			}
			else if (itemchance == 82) {
			cm.gainItem(1442017, 1);
			}
			else if (itemchance == 83) {
			cm.gainItem(1082147, 1);
			}	
			else if (itemchance == 84) {
			cm.gainItem(1102043, 1);
			}
			else if (itemchance == 85) {
			cm.gainItem(1442016, 1);
			}
			else if (itemchance == 86) {
			cm.gainItem(1402012, 1);
			}
			else if (itemchance == 87) {
			cm.gainItem(1302027, 1);
			}	
			else if (itemchance == 88) {
			cm.gainItem(1322027, 1);
			}
			else if (itemchance == 89) {
			cm.gainItem(1322025, 1);
			}
			else if (itemchance == 90) {
			cm.gainItem(1312012, 1);
			}
			else if (itemchance == 91) {
			cm.gainItem(1062000, 1);
			}
			else if (itemchance == 92) {
			cm.gainItem(1332020, 1);
			}
			else if (itemchance == 93) {
			cm.gainItem(1302028, 1);
			}
			else if (itemchance == 94) {
			cm.gainItem(1372002, 1);
			}
			else if (itemchance == 95) {
			cm.gainItem(1002033, 1);
			}
			else if (itemchance == 96) {
			cm.gainItem(1092022, 1);
			}
			else if (itemchance == 97) {
			cm.gainItem(1302021, 1);
			}
			else if (itemchance == 98) {
			cm.gainItem(1102041, 1);
			}
			else if (itemchance == 99) {
			cm.gainItem(1102042, 1);
			}
			else if (itemchance == 100) {
			cm.gainItem(1322024, 1);
			}
			else if (itemchance == 101) {
			cm.gainItem(1082148, 1);
			}
			else if (itemchance == 102) {
			cm.gainItem(1002012, 1);
			}
			else if (itemchance == 103) {
			cm.gainItem(1322012, 1);
			}
			else if (itemchance == 104) {
			cm.gainItem(1322022, 1);
			}
			else if (itemchance == 105) {
			cm.gainItem(1002020, 1);
			}
			else if (itemchance == 106) {
			cm.gainItem(1302013, 1);
			}
			else if (itemchance == 107) {
			cm.gainItem(1082146, 1);
			}
			else if (itemchance == 108) {
			cm.gainItem(1442014, 1);
			}
			else if (itemchance == 109) {
			cm.gainItem(1002096, 1);
			}
			else if (itemchance == 110) {
			cm.gainItem(1302017, 1);
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
			cm.gainItem(1092011, 1);
			}
			else if (itemchance == 116) {
			cm.gainItem(1092014, 1);
			}
			else if (itemchance == 117) {
			cm.gainItem(1302003, 1);
			}
			else if (itemchance == 118) {
			cm.gainItem(1432001, 1);
			}
			else if (itemchance == 119) {
			cm.gainItem(1312011, 1);
			}
			else if (itemchance == 120) {
			cm.gainItem(1002088, 1);
			}
			else if (itemchance == 121) {
			cm.gainItem(1041020, 1);
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
			cm.gainItem(1041053, 1);
			}
			else if (itemchance == 129) {
			cm.gainItem(1060014, 1);
			}
			else if (itemchance == 130) {
			cm.gainItem(1050053, 1);
			}
			else if (itemchance == 131) {
			cm.gainItem(1051032, 1);
			}
			else if (itemchance == 132) {
			cm.gainItem(1050073, 1);
			}
			else if (itemchance == 133) {
			cm.gainItem(1061036, 1);
			}
			else if (itemchance == 134) {
			cm.gainItem(1002253, 1);
			}
			else if (itemchance == 135) {
			cm.gainItem(1002034, 1);
			}
			else if (itemchance == 136) {
			cm.gainItem(1051025, 1);
			}
			else if (itemchance == 137) {
			cm.gainItem(1050067, 1);
			}
			else if (itemchance == 138) {
			cm.gainItem(1051052, 1);
			}
			else if (itemchance == 139) {
			cm.gainItem(1002072, 1);
			}
			else if (itemchance == 140) {
			cm.gainItem(1002144, 1);
			}
			else if (itemchance == 141) { 
			cm.gainItem(1051054, 1);
			}
			else if (itemchance == 142) { 
			cm.gainItem(1050069, 1);
			}
			else if (itemchance == 143) { 
			cm.gainItem(1372007, 1);
			}
			else if (itemchance == 144) { 
			cm.gainItem(1050056, 1);
			}
			else if (itemchance == 145) { 
			cm.gainItem(1050074, 1);
			}
			else if (itemchance == 146) { 
			cm.gainItem(1002254, 1);
			}
			else if (itemchance == 147) {
			cm.gainItem(1002274, 1);
			}
			else if (itemchance == 148) { 
			cm.gainItem(1002218, 1);
			}
			else if (itemchance == 149) { 
			cm.gainItem(1051055, 1);
			}
			else if (itemchance == 150) { 
			cm.gainItem(1382010, 1);
			}
			else if (itemchance == 151) { 
			cm.gainItem(1002246, 1);
			}
			else if (itemchance == 152) { 
			cm.gainItem(1050039, 1);
			}
			else if (itemchance == 153) { 
			cm.gainItem(1382007, 1);
			}
			else if (itemchance == 154) { 
			cm.gainItem(1372000, 1);
			}
			else if (itemchance == 155) { 
			cm.gainItem(1002013, 1);
			}
			else if (itemchance == 156) { 
			cm.gainItem(1050072, 1);
			}
			else if (itemchance == 157) { 
			cm.gainItem(1002036, 1);
			}
			else if (itemchance == 158) { 
			cm.gainItem(1002243, 1);
			}
			else if (itemchance == 159) { 
			cm.gainItem(1372008, 1);
			}
			else if (itemchance == 160) { 
			cm.gainItem(1382008, 1);
			}
			else if (itemchance == 161) { 
			cm.gainItem(1382011, 1);
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
			else if (itemchance == 175) { 
			cm.gainItem(1050055, 1);
			}
			else if (itemchance == 176) { 
			cm.gainItem(1051031, 1);
			}
			else if (itemchance == 177) { 
			cm.gainItem(1050025, 1);
			}
			else if (itemchance == 178) { 
			cm.gainItem(1002155, 1);
			}
			else if (itemchance == 179) { 
			cm.gainItem(1002245, 1);
			}
			else if (itemchance == 180) { 
			cm.gainItem(13720013, 1);
			}
			else if (itemchance == 181) { 
			cm.gainItem(1452004, 1);
			}
			else if (itemchance == 182) { 
			cm.gainItem(1452023, 1);
			}
			else if (itemchance == 183) { 
			cm.gainItem(1060057, 1);
			}
			else if (itemchance == 184) { 
			cm.gainItem(1040071, 1);
			}
			else if (itemchance == 185) { 
			cm.gainItem(1002137, 1);
			}
			else if (itemchance == 186) { 
			cm.gainItem(1462009, 1);
			}
			else if (itemchance == 187) { 
			cm.gainItem(1452017, 1);
			}
			else if (itemchance == 188) { 
			cm.gainItem(1040025, 1);
			}
			else if (itemchance == 189) { 
			cm.gainItem(1041027, 1);
			}
			else if (itemchance == 190) { 
			cm.gainItem(1452005, 1);
			}
			else if (itemchance == 191) { 
			cm.gainItem(1452007, 1);
			}
			else if (itemchance == 192) { 
			cm.gainItem(1061057, 1);
			}
			else if (itemchance == 193) { 
			cm.gainItem(1472006, 1);
			}
			else if (itemchance == 194) { 
			cm.gainItem(1472019, 1);
			}
			else if (itemchance == 195) { 
			cm.gainItem(1060084, 1);
			}
			else if (itemchance == 196) { 
			cm.gainItem(1472028, 1);
			}
			else if (itemchance == 197) { 
			cm.gainItem(1002179, 1);
			}
			else if (itemchance == 198) { 
			cm.gainItem(1082074, 1);
			}
			else if (itemchance == 199) { 
			cm.gainItem(1332015, 1);
			}
			else if (itemchance == 200) { 
			cm.gainItem(1432001, 1);
			}
			else if (itemchance == 201) { 
			cm.gainItem(1060071, 1);
			}
			else if (itemchance == 202) { 
			cm.gainItem(1472007, 1);
			}
			else if (itemchance == 203) { 
			cm.gainItem(1472002, 1);
			}
			else if (itemchance == 204) { 
			cm.gainItem(1051009, 1);
			}
			else if (itemchance == 205) { 
			cm.gainItem(1061037, 1);
			}
			else if (itemchance == 206) { 
			cm.gainItem(1332016, 1);
			}
			else if (itemchance == 207) { 
			cm.gainItem(1332034, 1);
			}
			else if (itemchance == 208) { 
			cm.gainItem(1472020, 1);
			}
			else if (itemchance == 209) {
			cm.gainItem(1102084, 1);
			}
			else if (itemchance == 210) {
			cm.gainItem(1102086, 1);
			}
			else if (itemchance == 211) {
			cm.gainItem(1102042, 1);
			}
			else if (itemchance == 212) {
			cm.gainItem(1032026, 1);
			}
			else if (itemchance == 213) { 
			cm.gainItem(1102207, 1);
			}
			else if (itemchance == 214) { 
			cm.gainItem(1102214, 1);
			}
			else if (itemchance == 215) { 
			cm.gainItem(1102214, 1);
			}
			else if (itemchance == 216) { 
			cm.gainItem(1022083, 1);
			}
			else if (itemchance == 217) { 
			cm.gainItem(1052213, 1);
			}
			else if (itemchance == 218) { 
			cm.gainItem(1072406, 1);
			}
			else if (itemchance == 219) { 
			cm.gainItem(1003001, 1);
			}
			else if (itemchance == 220) { 
			cm.gainItem(1072330, 1);
			}
			else if (itemchance == 221) { 
			cm.gainItem(1072333, 1);
			}
			else if (itemchance == 222) { 
			cm.gainItem(1072334, 1);
			}
			else if (itemchance == 223) { 
			cm.gainItem(1072335, 1);
			}
			else if (itemchance == 224) { 
			cm.gainItem(1072336, 1);
			}
			else if (itemchance == 225) { 
			cm.gainItem(1072331, 1);
			}
			else if (itemchance == 226) { 
			cm.gainItem(1042169, 1);
			}
			else if (itemchance == 227) { 
			cm.gainItem(1042170, 1);
			}
			else if (itemchance == 228) { 
			cm.gainItem(1042171, 1);
			}
			else if (itemchance == 229) { 
			cm.gainItem(1042172, 1);
			}
			else if (itemchance == 230) { 
			cm.gainItem(1042173, 1);
			}
			else if (itemchance == 231) { 
			cm.gainItem(1042174, 1);
			}
			else if (itemchance == 232) { 
			cm.gainItem(1042174, 1);
			}
			else if (itemchance == 233) { 
			cm.gainItem(1042181, 1);
			}
			else if (itemchance == 234) { 
			cm.gainItem(1012166, 1);
			}
			else if (itemchance == 235) { 
			cm.gainItem(1702235, 1);
			}
			else if (itemchance == 236) { 
			cm.gainItem(1042149, 1);
			}
			else if (itemchance == 237) { 
			cm.gainItem(01102202, 1);
			}
			else if (itemchance == 238) { 
			cm.gainItem(01102203, 1);
			}
			else if (itemchance == 239) { 
			cm.gainItem(01102210, 1);
			}
			else if (itemchance == 240) { 
			cm.gainItem(1002995, 1);
			}
			else if (itemchance == 241) { 
			cm.gainItem(01102212, 1);
			}
			else if (itemchance == 242) { 
			cm.gainItem(01702236, 1);
			}
			else if (itemchance == 243) { 
			cm.gainItem(1042181, 1);
			}
			else if (itemchance == 244) { 
			cm.gainItem(1702139, 1);
			}
			else if (itemchance == 245) { 
			cm.gainItem(1022073, 1);
			}
			else if (itemchance == 246) { 
			cm.gainItem(1122059, 1);
			}
			else if (itemchance == 247) { 
			cm.gainItem(1062107, 1);
			}
			else if (itemchance == 248) { 
			cm.gainItem(1702228, 1);
			}
			else if (itemchance == 249) { 
			cm.gainItem(1702226, 1);
			}
			else if (itemchance == 250) { 
			cm.gainItem(1702229, 1);
			}
			else if (itemchance == 251) { 
			cm.gainItem(01012147, 1);
			}
			else if (itemchance == 252) { 
			cm.gainItem(1702211, 1);
			}
			else if (itemchance == 253) { 
			cm.gainItem(1472071, 1);
			}
			else if (itemchance == 254) { 
			cm.gainItem(1702190, 1);
			}
			else if (itemchance == 255) { 
			cm.gainItem(01062116, 1);
			}
			else if (itemchance == 256) { 
			cm.gainItem(01032073, 1);
			}
			else if (itemchance == 257) { 
			cm.gainItem(1002868, 1);
			}
			else if (itemchance == 258) { 
			cm.gainItem(1002945, 1);
			}
			else if (itemchance == 259) { 
			cm.gainItem(1102186, 1);
			}
			else if (itemchance == 260) { 
			cm.gainItem(5010064, 1);
			}
			else if (itemchance == 261) { 
			cm.gainItem(1002928, 1);
			}
			else if (itemchance == 262) { 
			cm.gainItem(1002930, 1);
			}
			else if (itemchance == 263) { 
			cm.gainItem(1002929, 1);
			}
			else if (itemchance == 264) { 
			cm.gainItem(5021025, 1);
			}
			else if (itemchance == 265) { 
			cm.gainItem(5021026, 1);
			}
			else if (itemchance == 266) { 
			cm.gainItem(1062108, 1);
			}
			else if (itemchance == 267) { 
			cm.gainItem(1062109, 1);
			}
			else if (itemchance == 268) { 
			cm.gainItem(1062110, 1);
			}
			else if (itemchance == 269) { 
			cm.gainItem(1062111, 1);
			}
			else if (itemchance == 270) { 
			cm.gainItem(1702218, 1);
			}
			else if (itemchance == 271) { 
			cm.gainItem(1702217, 1);
			}
			else if (itemchance == 272) { 
			cm.gainItem(1062110, 1);
			}
			else if (itemchance == 273) { 
			cm.gainItem(1002870, 1);
			}
			else if (itemchance == 274) { 
			cm.gainItem(1062117, 1);
			}
			else if (itemchance == 275) { 
			cm.gainItem(1002866, 1);
			}
			else if (itemchance == 276) { 
			cm.gainItem(1002865, 1);
			}
			else if (itemchance == 277) { 
			cm.gainItem(1002864, 1);
			}
			else if (itemchance == 278) { 
			cm.gainItem(1002863, 1);
			}
			else if (itemchance == 279) { 
			cm.gainItem(1052137, 1);
			}
			else if (itemchance == 281) { 
			cm.gainItem(1002665, 1);
			}
			else if (itemchance == 282) { 
			cm.gainItem(1002849, 1);
			}
			else if (itemchance == 283) { 
			cm.gainItem(1002847, 1);
			}
			else if (itemchance == 284) { 
			cm.gainItem(5000103, 1);
			}
			else if (itemchance == 285) { 
			cm.gainItem(1702182, 1);
			}
			else if (itemchance == 286) { 
			cm.gainItem(1052198, 1);
			}
			else if (itemchance == 287) { 
			cm.gainItem(1002999, 1);
			}
			else if (itemchance == 288) { 
			cm.gainItem(1052211, 1);
			}
			else if (itemchance == 289) { 
			cm.gainItem(1072405, 1);
			}
			else if (itemchance == 290) { 
			cm.gainItem(1002784, 1);
			}
			else if (itemchance == 291) { 
			cm.gainItem(1062119, 1);
			}
			else if (itemchance == 292) { 
			cm.gainItem(1062102, 1);
			}
			else if (itemchance == 293) { 
			cm.gainItem(1102215, 1);
			}
			else if (itemchance == 294) { 
			cm.gainItem(1102196, 1);
			}
			else if (itemchance == 295) { 
			cm.gainItem(1072395, 1);			
                        }
			else if (itemchance == 296) { 
			cm.gainItem(1102223, 1);			
                        }
			else if (itemchance == 297) { 
			cm.gainItem(1702203, 1);
                        }
			else if (itemchance == 298) { 
			cm.gainItem(1702238, 1);
                        }
			else if (itemchance == 299) { 
			cm.gainItem(1042160, 1);
                        }
			else if (itemchance == 300) { 
			cm.gainItem(1072426, 1);
                        }
			else if (itemchance == 301) { 
			cm.gainItem(1002922, 1);
                        }
			else if (itemchance == 302) { 
			cm.gainItem(1002735, 1);
                        }
			else if (itemchance == 303) { 
			cm.gainItem(1002736, 1);
                        }
			else if (itemchance == 304) { 
			cm.gainItem(1062094, 1);
                        }
			else if (itemchance == 305) { 
			cm.gainItem(01072407, 1);
                        }
			else if (itemchance == 306) { 
			cm.gainItem(1072341, 1);
                        }
			else if (itemchance == 307) { 
			cm.gainItem(1072349, 1);
                        }
			else if (itemchance == 308) { 
			cm.gainItem(1092039, 1);
                        }
			else if (itemchance == 309) { 
			cm.gainItem(01702234, 1);
                        }
			else if (itemchance == 310) { 
			cm.gainItem(01042164, 1);
                        }
			else if (itemchance == 311) { 
			cm.gainItem(01042163, 1);
                        }
			else if (itemchance == 312) { 
			cm.gainItem(01042165, 1);
                        }
			else if (itemchance == 313) { 
			cm.gainItem(01042166, 1);
                        }
			else if (itemchance == 314) { 
			cm.gainItem(01042167, 1);
                        }
			else if (itemchance == 315) { 
			cm.gainItem(1042168, 1);
                        }
			else if (itemchance == 316) { 
			cm.gainItem(1042169, 1);
                        }
			else if (itemchance == 317) { 
			cm.gainItem(01042170, 1);
                        }
			else if (itemchance == 318) { 
			cm.gainItem(01702171, 1);
                        }
			else if (itemchance == 319) { 
			cm.gainItem(01042172, 1);
                        }
			else if (itemchance == 320) { 
			cm.gainItem(01042173, 1);
                        }
			else if (itemchance == 321) { 
			cm.gainItem(01042174, 1);
                        }
			else if (itemchance == 322) { 
			cm.gainItem(01702215, 1);
                        }
			else if (itemchance == 323) { 
			cm.gainItem(01702213, 1);
                        }
			else if (itemchance == 324) { 
			cm.gainItem(01012137, 1);
                        }
			else if (itemchance == 325) { 
			cm.gainItem(1052172, 1);
                        }
			else if (itemchance == 326) { 
			cm.gainItem(1052173, 1);
                        }
			else if (itemchance == 327) { 
			cm.gainItem(1052171, 1);
                        }
			else if (itemchance == 328) { 
			cm.gainItem(1702235, 1);
                        }
			else if (itemchance == 329) { 
			cm.gainItem(1002887, 1);
                        }
			else if (itemchance == 330) { 
			cm.gainItem(2101023, 1);
                        }
			else if (itemchance == 331) { 
			cm.gainItem(2101024, 1);
                        }
			else if (itemchance == 332) { 
			cm.gainItem(1002887, 1);
                        }
			else if (itemchance == 333) { 
			cm.gainItem(3010000, 1);
                        }
			else if (itemchance == 334) { 
			cm.gainItem(3010001, 1);
                        }
			else if (itemchance == 335) { 
			cm.gainItem(3010002, 1);
                        }
			else if (itemchance == 336) { 
			cm.gainItem(3010003, 1);
                        }
			else if (itemchance == 337) { 
			cm.gainItem(3010004, 1);
                        }
			else if (itemchance == 338) { 
			cm.gainItem(3010005, 1);
                        }
			else if (itemchance == 339) { 
			cm.gainItem(3010006, 1);
                        }
			else if (itemchance == 340) { 
			cm.gainItem(3010007, 1);
                        }
			else if (itemchance == 341) { 
			cm.gainItem(3010008, 1);
                        }
			else if (itemchance == 342) { 
			cm.gainItem(3010009, 1);
                        }
			else if (itemchance == 343) { 
			cm.gainItem(3010010, 1);
                        }
			else if (itemchance == 345) { 
			cm.gainItem(3010011, 1);
                        }
			else if (itemchance == 346) { 
			cm.gainItem(3010012, 1);
                        }
			else if (itemchance == 347) { 
			cm.gainItem(3010013, 1);
                        }
			else if (itemchance == 348) { 
			cm.gainItem(3010014, 1);
                        }
			else if (itemchance == 349) { 
			cm.gainItem(3010015, 1);
                        }
			else if (itemchance == 350) { 
			cm.gainItem(3010016, 1);
                        }
			else if (itemchance == 351) { 
			cm.gainItem(3010017, 1);
                        }
			else if (itemchance == 352) { 
			cm.gainItem(3010018, 1);
                        }
			else if (itemchance == 353) { 
			cm.gainItem(3010019, 1);
                        }
			else if (itemchance == 354) { 
			cm.gainItem(3010020, 1);
                        }
			else if (itemchance == 355) { 
			cm.gainItem(3010021, 1);
                        }
			else if (itemchance == 356) { 
			cm.gainItem(3010022, 1);
                        }
			else if (itemchance == 357) { 
			cm.gainItem(3010023, 1);
                        }
			else if (itemchance == 358) { 
			cm.gainItem(3010024, 1);
                        }
			else if (itemchance == 359) { 
			cm.gainItem(3010025, 1);
                        }
			else if (itemchance == 360) { 
			cm.gainItem(3010026, 1);
                        }
			else if (itemchance == 361) { 
			cm.gainItem(3010027, 1);
                        }
			else if (itemchance == 362) { 
			cm.gainItem(3010028, 1);
                        }
			else if (itemchance == 363) { 
			cm.gainItem(3010029, 1);
                        }
			else if (itemchance == 364) { 
			cm.gainItem(3010030, 1);
                        }
			else if (itemchance == 365) { 
			cm.gainItem(3010031, 1);
                        }
			else if (itemchance == 366) { 
			cm.gainItem(3010032, 1);
                        }
			else if (itemchance == 367) { 
			cm.gainItem(3010033, 1);
                        }
			else if (itemchance == 368) { 
			cm.gainItem(3010034, 1);
                        }
			else if (itemchance == 369) { 
			cm.gainItem(3010035, 1);
                        }
			else if (itemchance == 370) { 
			cm.gainItem(3010036, 1);
                        }
			else if (itemchance == 371) { 
			cm.gainItem(3010037, 1);
                        }
			else if (itemchance == 372) { 
			cm.gainItem(3010038, 1);
                        }
			else if (itemchance == 373) { 
			cm.gainItem(3010039, 1);
                        }
			else if (itemchance == 374) { 
			cm.gainItem(3010040, 1);
                        }
			else if (itemchance == 375) { 
			cm.gainItem(3010041, 1);
                        }
			else if (itemchance == 376) { 
			cm.gainItem(3010043, 1);
                        }
			else if (itemchance == 377) { 
			cm.gainItem(3010044, 1);
                        }
			else if (itemchance == 378) { 
			cm.gainItem(3010045, 1);
                        }
			else if (itemchance == 379) { 
			cm.gainItem(3010046, 1);
                        }
			else if (itemchance == 380) { 
			cm.gainItem(3010047, 1);
                        }
			else if (itemchance == 381) { 
			cm.gainItem(3010048, 1);
                        }
			else if (itemchance == 382) { 
			cm.gainItem(3010049, 1);
                        }
			else if (itemchance == 383) { 
			cm.gainItem(3010050, 1);
                        }
			else if (itemchance == 384) { 
			cm.gainItem(3010051, 1);
                        }
			else if (itemchance == 385) { 
			cm.gainItem(3010052, 1);
                        }
			else if (itemchance == 386) { 
			cm.gainItem(3010054, 1);
                        }
			else if (itemchance == 387) { 
			cm.gainItem(3010057, 1);
                        }
			else if (itemchance == 388) { 
			cm.gainItem(3010058, 1);
                        }
			else if (itemchance == 389) { 
			cm.gainItem(3010059, 1);
                        }
			else if (itemchance == 390) { 
			cm.gainItem(3010085, 1);
                        }
			else if (itemchance == 391) { 
			cm.gainItem(1022084, 1);
                        }
			else if (itemchance == 392) { 
			cm.gainItem(1022085, 1);
                        }
			else if (itemchance == 393) { 
			cm.gainItem(1022086, 1);
                        }
			else if (itemchance == 394) { 
			cm.gainItem(102287, 1);
                        }
			else if (itemchance == 395) { 
			cm.gainItem(1022068, 1);
                        }
			else if (itemchance == 396) { 
			cm.gainItem(1022069, 1);
                        }
			else if (itemchance == 397) { 
			cm.gainItem(1022070, 1);
                        }
			else if (itemchance == 398) { 
			cm.gainItem(1022071, 1);
                        }
			else if (itemchance == 399) { 
			cm.gainItem(1022072, 1);
                        }
			else if (itemchance == 400) { 
			cm.gainItem(1052199, 1);
                        }
			else if (itemchance == 401) { 
			cm.gainItem(1102210, 1);
                        }
			else if (itemchance == 402) { 
			cm.gainItem(1402048, 1);
                        }
			else if (itemchance == 403) { 
			cm.gainItem(1402049, 1);
                        }
			else if (itemchance == 404) { 
			cm.gainItem(01402050, 1);
                        }
			else if (itemchance == 405) { 
			cm.gainItem(01402051, 1);
                        }
			else if (itemchance == 406) {
			cm.gainItem(4001025, 1);
                        }
			else if (itemchance >= 407) {
			cm.gainItem(2022282, itemamount);
			}

			cm.dispose();
		}
	}
}
