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
		cm.sendYesNo("#eHey #b#h ##k! My name is #bcscX#k! I am the first player of #rSpeedStory#k\r\n\r\nWould you like 1 meso? ");
	} else if (status == 1) {
			cm.gainMeso(1);
			cm.dispose();
		} else {
			cm.dispose();
			}		
		}
	}
