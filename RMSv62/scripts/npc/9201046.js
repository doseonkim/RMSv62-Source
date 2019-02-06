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
		cm.sendNext("#eEnjoy #rSpeedStory!");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0) {
		cm.sendYesNo("#eHey #b#h ##k! Would you like me to warp you out of the BOX event?");
	} else if (status == 1) {
			cm.warp(91000000, 0);
			cm.dispose();
		} else {
			cm.sendOk("Okay, just wait till a GM warps you out!");
			cm.dispose();
			}		
		}
	}
