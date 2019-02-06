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
		cm.sendYesNo("#d#e[The rock is cold to touch, you see an encryption. As you touch the etched letters they glow, and you hear a loud voice echo throughout your body!]\r\n\r\n #k#rYou there!#k Do you dare to challenge the most powerful?#k");
	} else if (status == 1) {
			cm.warp(910000013, 0);
			cm.dispose();
		} else {
			cm.dispose();
			}		
		}
	}
