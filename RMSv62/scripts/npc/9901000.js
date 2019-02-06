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
		cm.sendYesNo("#eHey #b#h ##k! My name is Buffy! I am head GM and also #bOwner and Coder#k of SpeedStory! My real name is #bJonah#k! My buff to you is #rHaste#k which symoblizes #gSPEED#k!\r\n\r\n Would you like to recieve Haste?");
	} else if (status == 1) {
			cm.giveBuff(4101004,19);
			cm.dispose();
		} else {
			cm.dispose();
			}		
		}
	}
