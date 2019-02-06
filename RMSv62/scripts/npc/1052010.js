var status = 0;

function start() {
	if (!cm.haveItem(400363, 1)){
	cm.sendOk ("#eWow You Have Finished All 3 Level!! Props to you Man!! #r10 of Shumi's Coins#k for you!#l");
    cm.gainItem(4031039,10);
		cm.warp (910000000,0);
		cm.sendOk ("#eHave a great day! I hope you enjoyed the JQ and don't waste those precious Coins! :)");
    cm.dispose();
  }else{
  cm.sendOk ("#eWow You Have Finished All 3 Level!! Props to you Man!! #r10 of Shumi's Coins#k for you!#l");
    cm.gainItem(4031039,10);
		cm.warp (910000000,0);
		cm.sendOk ("#eHave a great day! I hope you enjoyed the JQ and don't waste those precious Coins! :)");
    cm.dispose();
}
}