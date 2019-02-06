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
	if (cm.getLevel() == 30 || cm.getLevel() == 31||cm.getLevel() == 32||cm.getLevel() == 33 || cm.getLevel() == 34 || cm.getLevel() == 35 || cm.getLevel() == 70 || cm.getLevel() == 71 || cm.getLevel() == 72 || cm.getLevel() == 73 || cm.getLevel() == 74 || cm.getLevel() == 75  || cm.getLevel() == 120 || cm.getLevel() == 121 || cm.getLevel() == 122|| cm.getLevel() == 123 || cm.getLevel() == 124 || cm.getLevel() == 125) {
		cm.sendAcceptDecline("#eI see you have come here to #rJob Advance#k! Instead of just giving you your next job, you have to do a simple task first! As you progress in levels it gets\r\n#dALOT easier#k!\r\n\r\n#bWould you like to enter the Advancing PQ?#k\r\n\r\n#d[Under Construction #B[60%]# ]");
	} else if (status == 1){
			cm.sendOk("#eIm sorry but the Advancing PQ is still in progress!\r\n\r\n");
			cm.dispose();
		} else {
			cm.sendOk("#eYou either are not the right level to enter the Advancing PQ, or you have over exceeded the needed level to advance. If this is the case! Contact a GM using #r@gm#k!");
			cm.dispose();
			}		
		}
	}
}	