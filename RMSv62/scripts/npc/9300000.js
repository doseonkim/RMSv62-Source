/*

Warper. RaverStory - Rikki
*/


function start() {
	cm.sendSimple ("Hey, #h # Do you want to do the #bRaverStory Mini-Quest?#k\r\n#L0#Yeahh!#l\r\n\r\r\n#rGood Luck! \r\nMade by Rikki of RaverStory");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.warp (260020401, 0);
		cm.sendOk ("Welcome to the first Task! \r\nHey #h #. Im building a HUGE sand castle but I dont have alot of sand could you get me some sand? Obtain:\r\n #b#i4000332# 50 Sand.#k");
	}
}

