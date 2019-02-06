/*
Made by Announcement of WORLD OF GOSU specifically for EnergyMS
*/

importPackage(net.sf.odinms.server.maps);
var status = 0;
var maps = new Array(910000000);
var mapNames = new Array("Yes, I would like to leave! I've gotten pampered enough!");
var selectedMap = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		var where = "#eWould you like to leave and go back to the #rFree Market#k#b?";
		for (var i = 0; i < maps.length; i++) {
			where += "\r\n#L" + i + "# " + mapNames[i] + "#l";
		}
		cm.sendSimple(where);
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendOk ("#eOk!");
					selectedMap = selection;
					status++
			} else if (status == 2) {
					cm.warp(maps[selectedMap], 0);
					cm.sendOk ("#eThank you for comming to #rSpeedySalons#k!");
					cm.dispose();
			}
		}
	}
}

