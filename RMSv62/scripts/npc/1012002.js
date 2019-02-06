//Made by Moogra
//Vicious Old Arrow/Bow maker
var status= 0;
importPackage(net.sf.odinms.scripting);//This isn't needed is it

function start() {
	if (status == 0){
	if (cm.haveItem(4000363)){
    	cm.sendYesNo("#eDo you want to go to the event map?");
}else{
	cm.sendOk("#eEvents are exclusive to Entry pass holders only!");
	cm.dispose();
}
}
}
function action(mode, type, selection) {
    if (mode < 1) {
        cm.sendOk("#eAll right, come back next time.");
        cm.dispose();
        return;
    } else {
        if (cm.eventOn())
            cm.doEvent();
        cm.dispose();
    }
}
