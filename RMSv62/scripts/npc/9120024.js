
var status = 0;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (mode == 1)
status++;
else
status--;
if (status == 0) {
cm.sendSimple("Are you the man? \r\n#L0#Yes#l \r\n#L1#No#l");
} else if (status == 1) {
if (selection == 0) {
cm.teachSkill(9001000,1,1); //Start of max-level "1" skills
cm.teachSkill(9001001,1,1);
cm.teachSkill(9001002,1,1);
cm.teachSkill(9101000,1,1);
cm.teachSkill(9101001,1,1);
cm.teachSkill(9101002,1,1);
cm.teachSkill(9101003,1,1);
cm.teachSkill(9101004,1,1);
cm.teachSkill(9101005,1,1);
cm.teachSkill(9101006,1,1);
cm.teachSkill(9101007,1,1);
cm.teachSkill(9101008,1,1);
cm.dispose
cm.dropMessage("BAIIIIIIIIZZZZ");
}
}
}