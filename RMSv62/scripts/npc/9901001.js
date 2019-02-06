 /* Author: Xterminator
	NPC Name: 		Rini
	Map(s): 		Orbis: Station<To Ellinia> (200000111)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.sendNext("#eOkay, enjoy #rSpeedStory!");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0) {
		cm.sendYesNo("#eHey #b#h ##k! I can take you to the #rCredit Room#k where you can hunt credits! Its not easy though! And it will cost you 2 BILLION mesos!\r\n\r\n#bWould you like to go?#k");
	} else if (status == 1) {
			if (cm.haveItem(1012055)){
			cm.warp(680004000, 0);
			cm.sendOk("#e#d[Traveling Portal: You have successfully travelled through the portal]");
			cm.dispose();
		} else {
			cm.sendOk("#d[The portal has rejected you because you do not have the needed supplies.]");
			cm.dispose();
			}		
		}
	}
}