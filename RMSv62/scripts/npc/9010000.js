/*    public void changeItemStat(byte slot, int type, short amount) {
		Equip sel = (Equip) getInventory(MapleInventoryType.EQUIPPED).getItem(slot);
		switch (type) {
			case 0:
				sel.setStr(amount);
				break;
			case 1:
				sel.setDex(amount);
				break;
			case 2:
				sel.setInt(amount);
				break;
			case 3:
				sel.setLuk(amount);
				break;
			case 4:
				sel.setHp(amount);
				break;
			case 5:
				sel.setMp(amount);
				break;
			case 6:
				sel.setWatk(amount);
				break;
			case 7:
				sel.setMatk(amount);
				break;
			case 8:
				sel.setWdef(amount);
				break;
			case 9:
				sel.setMdef(amount);
				break;
			case 10:
				sel.setAcc(amount);
				break;
			case 11:
				sel.setAvoid(amount);
				break;
			case 12:
				sel.setHands(amount);
				break;
			case 13:
				sel.setSpeed(amount);
				break;
			case 14:
				sel.setJump(amount);
				break;
			default:
				break;
		}
		equipChanged();
	}*/
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.tools);

var status;
var slot = Array();
var stats = Array("Strength", "Dexterity", "Intelligence", "Luck", "HP", "MP", "Weapon Attack", "Magic Attack", "Weapon Defense", "Magic Defense", "Accuracy", "Avoidability", "Hands", "Speed", "Jump");
var selected;
var statsSel;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getPlayer().gmLevel() > 1) {
				cm.sendSimple("Hi there Game Master! What do you want to do?#b\r\n#L0#Max Stats#l\r\n#L1#Modify Equip Stats#l#k");
			} else {
				cm.sendOk("Sorry, I only talk to Game Masters. Have a nice day.");
				cm.dispose();
			}
		} else if (status == 1) {
			if (selection == 0) {
				var statup = new java.util.ArrayList();
				var p = cm.getPlayer();
				p.setRemainingAp(0);
				p.setRemainingSp(0);
				p.setStr(32767);
				p.setDex(32767);
				p.setInt(32767);
				p.setLuk(32767);
				p.setHp(30000);
				p.setMaxHp(30000);
				p.setMp(30000);
				p.setMaxMp(30000);
				statup.add(new Pair(MapleStat.STR, java.lang.Integer.valueOf(32767)));
				statup.add(new Pair(MapleStat.DEX, java.lang.Integer.valueOf(32767)));
				statup.add(new Pair(MapleStat.LUK, java.lang.Integer.valueOf(32767)));
				statup.add(new Pair(MapleStat.INT, java.lang.Integer.valueOf(32767)));
				statup.add(new Pair(MapleStat.HP, java.lang.Integer.valueOf(30000)));
				statup.add(new Pair(MapleStat.MAXHP, java.lang.Integer.valueOf(30000)));
				statup.add(new Pair(MapleStat.MP, java.lang.Integer.valueOf(30000)));
				statup.add(new Pair(MapleStat.MAXMP, java.lang.Integer.valueOf(30000)));
				statup.add(new Pair(MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
				statup.add(new Pair(MapleStat.AVAILABLESP, java.lang.Integer.valueOf(p.getRemainingSp())));
				cm.getC().getSession().write(MaplePacketCreator.updatePlayerStats(statup));
				cm.sendOk("Done.");
				cm.dispose();
			} else {
				var avail = "";
				for (var i = -1; i > -18; i--) {
					if (cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i) != null) {
						avail += "#L" + Math.abs(i) + "##t" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i).getItemId() + "##l\r\n";
					}
					slot.push(i);
				}
				cm.sendSimple(avail);
			}
		} else if (status == 2) {
			selected = selection - 1;
			var text = "";
			for (var i = 0; i < stats.length; i++) {
				text += "#L" + i + "#" + stats[i] + "#l\r\n";
			}
			cm.sendSimple("You want to edit the stats of your #b#t" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot[selected]).getItemId() + "##k.\r\nWhat stat do you want to change?\r\n#b" + text);
		} else if (status == 3) {
			statsSel = selection;
			cm.sendGetNumber("What do you want to set as your #b#t" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel], 0, 0, 32767);
		} else if (status == 4) {
			cm.changeStat(slot[selected], statsSel, selection);
			cm.sendOk("Your #b#t" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " has been set to " + selection + ".");
			cm.dispose();
		}
	}
}
