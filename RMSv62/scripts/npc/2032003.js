var status = 0;

function start() {
	if (status == 0)
	if (!cm.haveItem(400363, 1)){
	cm.sendSimple ("#eWell you sure are a strong willed player! You came all this way! Would you like to recieve your prize of #r10 of Shumi's Coins#k or Go to the Next Level and recieve #r20 Shumi's Coins#k!?\r\n#b#L0#I'll just take the 10 Shumi's Coins!#l\r\n#L1#No thank you sir! I don't give up! Next Level Please!#l");
}else{
cm.sendSimple ("#eWell you sure are a strong willed player! You came all this way! Would you like to recieve your prize of #r10 of Shumi's Coins#k or Go to the Next Level and recieve #r20 Shumi's Coins#k!?\r\n#b#L0#I'll just take the 10 Shumi's Coins!#l\r\n#L1#No thank you sir! I don't give up! Next Level Please!#l");
  cm.dispose();
}
}
function action(mode, type, selection) {
	if (selection == 0) {
		cm.gainItem(4031039,10);
		cm.warp (910000000,0);
		cm.sendOk ("#eHave a great day! I hope you enjoyed the JQ! :)");
    cm.dispose();
}
  if(selection == 1) {
  cm.warp(682000200,0)
  cm.sendOk ("Wow you are brave! Good Luck to you!")
  cm.dispose();
}
}