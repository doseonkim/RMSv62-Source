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
		cm.sendNext("#eYou must have some business to take care of here, right?");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("#eWelcome to #rSpeedStory#k! I can take you to the #rHall of GMs#k where each GM says something different made by them and also give you a buff! #bWould you like to go#k?");
	} else if (status == 1) {
			cm.warp(260000302, 0);
			cm.sendOk("#eWelcome! Just click each NPC and #bread what they have to say#k! To get out just go through any of the portals here!\r\n#r Enjoy!");
			cm.dispose();
		} else {
			cm.dispose();
			}		
		}
	}
