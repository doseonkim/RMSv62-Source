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
		cm.sendYesNo("#eHey #b#h ##k! I can warp you to the Box Event! \r\n\r\n #bWould you like to go?#k");
	} else if (status == 1) {
			/*cm.warp(670010800, 0);*/
			cm.sendOk("#eThe Box Event is closed for now! Ask a GM to open it!");
			cm.dispose();
		} else {
			cm.sendOk("#eOkay, just wait till a GM warps you out!");
			cm.dispose();
			}		
		}
	}
