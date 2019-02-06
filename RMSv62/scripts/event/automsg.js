var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
	setupTask = em.scheduleAtFixedRate("start", 1000 * 60 * 10);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    var Message = new Array("@commands to learn all your commands!","Please give suggestions or bugs to the Gm's and we could add or fix them!","FM 19-22 have Bosses!");
    em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.sendYellowTip("[RadianceTip] " + Message[Math.floor(Math.random() * Message.length)]));
}