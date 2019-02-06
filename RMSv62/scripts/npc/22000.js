var status = 0;
var npcid = Array(9000020, 9200000, 2003, 2040030, 9201082, 2050015, 1092015, 9201099, 9201024, 9300013);

function start() {
	if (status == 0){
    	cm.sendSimple("#g\#eWhat do you want me to do for you?#d\b\r\n#L0#\#e\#dTravel to Towns or Fight Bosses\n\#l\r\n#L1#Job Advance\n\#l\r\n#L2#Reset Stats\n\#l\r\n#L3#Cloud Farm#l\r\n#L4#Buy NX#l\r\n#L5#Exchange Mesos for Items#l\r\n#L6#Skill Maxer#l\r\n#L7#Jump Quest#l\r\n#L8#Trade Coins for Goods#l\r\n#L9#All In One Shop#l\r\n\r\n\r\n #k Please Have Fun on RMS :)");
}else{
	cm.dispose();
}
}
function action(m, t, s) {
    cm.openNpc(npcid[s]);
}