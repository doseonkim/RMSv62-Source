var status = 0;

function start() {
	if (status == 0)
	if (!cm.haveItem(400363, 1)){
			cm.sendSimple ("#eHello there!Which Jump Quest do you want to do for#rShumi's Coins#k??#l\r\n#b#L0#Kerning!(10)#l\r\n#L1#Zakum JQ + Ghost Chimney JQ!(20)#l \r\n#L2#No thank you sir!#l");
}else{
	cm.sendSimple ("#eHello there!Which Jump Quest do you want to do for#rShumi's Coins#k??#l\r\n#b#L0#Kerning!(10)#l\r\n#L1#Zakum JQ + Ghost Chimney JQ!(20)#l \r\n#L2#No thank you sir!#l");
  cm.dispose();
}
}
function action(mode, type, selection) {
	if (selection == 0) {
                cm.warp (103000900, 0);
		cm.sendOk ("#eGood Luck and remember you can leave whenever you want through @perry or the npc's");
    cm.dispose();
}
else if (selection == 1) {
                cm.warp (280020000, 0);
		cm.sendOk ("#eGood Luck and remember you can leave whenever you want through @perry or the npc's");
    cm.dispose();
}
 else if(selection == 2) {
  cm.sendOk ("Oh its okay to be scared! Come back next time! ");
  cm.dispose();
}
}
