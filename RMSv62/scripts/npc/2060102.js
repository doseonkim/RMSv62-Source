var wui = 0;

function start() {
cm.sendOk ("Hello #h # ! Welcome to #rRadiance MS#n #k. \r\n You will receive #e10 million mesos#n and #e250 Power Elixirs#n Have fun!
}

function action(mode, type, selection) {
if (mode == 0 || wui == 1) {
cm.dispose();
cm.gainItem(2000005, 250);
cm.gainMeso(10000000);
cm.warp(910000000, 0);
} else {
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4);
p.setRemainingAp (totAp - 16);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.Mapl eStat.STR, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.Mapl eStat.DEX, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.Mapl eStat.LUK, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.Mapl eStat.INT, java.lang.Integer.valueOf(4)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.Mapl eStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
if (cm.getGender() == 0) {
p.setHair(30260);
p.setFace(20005);
} else {
p.setHair(31680);
p.setFace(21003);
}
p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlay erStats(statup));

cm.sendOk ("Good luck on your #rRadiance MS #n#k journey ! :)");

cm.dispose();
cm.reloadChar();

}
}