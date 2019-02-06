/*
By Foldded
Edited by iOWNu
Super Rebirth

Fixed by Emilyx3
*/

var status = 0;

var itemArray = Array(1112407,1122059,1032058,1022073,1002800,1082 245,1072368,1102211,1052167);

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
cm.sendYesNo ("Hey, do you want to do a #rSuper Rebirth#k?\r\nYou will need #b30,001#k of each stat. It will decrease each of your stats by 30,000 and give you a ring with 30,000 of each stat point! There are 9 Super Rebirths. Each one require a higher ammount of rebirths. \r\n\ First - 120 Rebirths or more \r\n\ Second - 240 Rebirths or more \r\n\ Third - 360 Rebirths or more\r\n\ Forth - 480 Rebirths or more\r\n\ Fifth - 600 Rebirths or more\r\n\ Sixth - 720 Rebirths or more \r\n\ Seventh - 840 Rebirths or more\r\n\ Eighth - 960 Rebirths or more \r\n\ Ninth - 1080 Rebirths or more \r\n\ Do you wish to do this?");
} else if (status == 1) {
if (cm.getPlayer().getStr() > 30000 && cm.getPlayer().getDex() > 30000 && cm.getPlayer().getInt() > 30000 && cm.getPlayer().getLuk() > 30000) {
if (getSRebirthRank() > -1 && getSRebirthRank() < 9) {
var item = itemArray[getSrebirthRank()];
} else {
cm.sendOk("Sorry, you don't meet the Rebirth Requirements!");
cm.dispose();
}
if (cm.getPlayer().haveItem(item)) {
cm.sendOk("You already have the item from this Super Rebirth level! (Level " + (getSRebirthRank() + 1) + ")");
cm.dispose();
} else {
cm.gainItem(item,1);
resetPlayerStats();
cm.sendOk("Congrats! You have done a #rSuper Rebirth#k!");
cm.dispose();
}
} else {
cm.sendOk("Sorry, but you don't have enough stats!\r\nYou need to have at least 30,001 of each stat if you want to do this!");
cm.dispose();
}
} else {
cm.dispose();
}
}
}

function getSRebirthRank() {
var rebirths = cm.getPlayer().getReborns();

if (rebirths >= 120 && rebirths < 240) {
return 0;
} else if (rebirths >= 240 && rebirths < 360) {
return 1;
} else if (rebirths >= 360 && rebirths < 480) {
return 2;
} else if (rebirths >= 480 && rebirths < 600) {
return 3;
} else if (rebirths >= 600 && rebirths < 720) {
return 4;
} else if (rebirths >= 720 && rebirths < 840) {
return 5;
} else if (rebirths >= 840 && rebirths < 960) {
return 6;
} else if (rebirths >= 960 && rebirths < 1080) {
return 7;
} else if (rebirths >= 1080) {
return 8;
} else {
return -1;
}
}

function resetPlayerStats() {
cm.getPlayer().setStr(cm.getPlayer().getStr() - 30000);
cm.getPlayer().setDex(cm.getPlayer().getDex() - 30000);
cm.getPlayer().setLuk(cm.getPlayer().getLuk() - 30000);
cm.getPlayer().setInt(cm.getPlayer().getInt() - 30000);
cm.getPlayer().recalcLocalStats(); //Just in Case
cm.getPlayer().reloadChar(); //Is this even Needed?
} 


