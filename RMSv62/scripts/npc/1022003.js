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
                    if (cm.haveItem(4030002, 1) &&
                        cm.haveItem(4030003, 1) &&
                        cm.haveItem(4030004, 1) &&
                        cm.haveItem(4030005, 1) &&
                        cm.haveItem(4030006, 1) &&
                        cm.haveItem(4030007, 1) &&
                        cm.haveItem(4030008, 1)) {
var String = "What Item to would you like to add + 25 W. ATT to?.\r\n\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));
                 }else{
                  cm.sendOk("You don't have ALL the items. Make sure you have the following. These can be found in the map Hidden Place in the East.#l\r\n #v4030002##l\n\
\r\n#v4030003##l\n\
\r\n#v4030004##l\n\
\r\n#v4030005##l\n\
\r\n#v4030006##l\n\
\r\n#v4030007##l\n\
\r\n#v4030008##l");
                  cm.dispose();
                }
}
else if (status == 1) {
                    if (cm.haveItem(4030002, 1) &&
                        cm.haveItem(4030003, 1) &&
                        cm.haveItem(4030004, 1) &&
                        cm.haveItem(4030005, 1) &&
                        cm.haveItem(4030006, 1) &&
                        cm.haveItem(4030007, 1) &&
                        cm.haveItem(4030008, 1)) {

                        cm.gainItem(4030002, -1);
                        cm.gainItem(4030003, -1);
                        cm.gainItem(4030004, -1);
                        cm.gainItem(4030005, -1);
                        cm.gainItem(4030006, -1);
                        cm.gainItem(4030007, -1);
                        cm.gainItem(4030008, -1);
cm.MakeQExchItem(selected, cm.getP());
cm.reloadChar();
                 }else{
                  cm.sendOk("You don't have ALL the items. Make sure you have the following. These can be found in the map Hidden Place in the East.#l\r\n #v4030002##l\n\
\r\n#v4030003##l\n\
\r\n#v4030004##l\n\
\r\n#v4030005##l\n\
\r\n#v4030006##l\n\
\r\n#v4030007##l\n\
\r\n#v4030008##l");
                  cm.dispose();
                }
}
}
}

