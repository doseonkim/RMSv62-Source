var status = 0;

function start() {
	if (status == 0)
	if (!cm.haveItem(400363, 1)){
			cm.sendSimple ("#eHello there! Which PQ do you want to do for Today?#l\r\n#b#L0#Kerning PQ! (Hard)#l\r\n#L1#Ludi PQ! (Easy)#l \r\n#L2#No Thank You!#l");
}else{
	cm.sendSimple ("#eHello there! Which PQ do you want to do for Today?#l\r\n#b#L0#Kerning PQ! (Hard)#l\r\n#L1#Ludi PQ! (Easy)#l \r\n#L2#No Thank You!#l");
  cm.dispose();
}
}
function action(mode, type, selection) {
	if (selection == 0) {
				cm.warp(103000000,"mid00");
		cm.sendOk ("#eGood Luck to you on the PQ");
    cm.dispose();
}
else if (selection == 1) {
                cm.warp (221024500, 0);
			cm.sendOk ("#eGood Luck to you on the PQ");
    cm.dispose();
}
 else if(selection == 2) {
  cm.sendOk ("Oh its okay to be scared! Come back next time! ");
  cm.dispose();
}
}