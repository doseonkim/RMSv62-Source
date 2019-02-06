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
		cm.sendYesNo("#eWould you like me to take you out of the #rCosmetic Room#k?");
	} else if (status == 1) {
			cm.warp(260000302, 0);
			cm.sendOk("#eCome back soon!");
			cm.dispose();
		} else {
			cm.dispose();
			}		
		}
	}
