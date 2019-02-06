importPackage(net.sf.odinms.client);
var status = 0;
var selected = 1;

function start() {
status = -1;
action(1, 0, 0);
}
function action(mode, type, selection) {
selected = selection;
if (mode == -1) {
cm.dispose();
} else {
if (mode == 0 && status == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
    var statup = new java.util.ArrayList();
                    var p = cm.getPlayer(); // if doesn't work, use cm.c.getPlayer();
                 if (p.getStr() >= 32000 && p.getDex() >= 32000 && p.getInt() >= 32000 && p.getLuk() >= 32000) {
var String = "What Item to make SRB Item?.\r\n\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));
                 }else{
                  cm.sendOk("You don't have enough stats.\r\nPlease make sure you have 32000  of ALL stats.");
                  cm.dispose();
                }
}
else if (status == 1) {
       var statup = new java.util.ArrayList();
                    var p = cm.getPlayer(); // if doesn't work, use cm.c.getPlayer();
                    p.setStr(p.getStr() - 32000);
                    p.setDex(p.getDex() - 32000);
                    p.setInt(p.getInt() - 32000);
                    p.setLuk(p.getLuk() - 32000);
                    statup.add(new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
                    statup.add(new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
                    statup.add(new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
                    statup.add(new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
                    p.getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.MakeGMItem(selected, cm.getP());
cm.reloadChar();
cm.dispose();
}
}
}