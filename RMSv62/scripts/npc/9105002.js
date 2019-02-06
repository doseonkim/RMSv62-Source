importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.client);

var status = 0;
var resetKeyboard = false;
var unequipEverything = false;
var servername = "Radiance MS"; // put in between the quotation marks.

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {
        cm.dispose();
    
    }else if (mode == 0){
        cm.sendOk("Ok, talk to me when your sure you want to #bSuper Rebirth#k.");
        cm.dispose();

    }else{            
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
            cm.sendYesNo("Welcome, Unholy hero of #b" + ServerName + "#k. Would you like to Super Rebirth? What will happen is that you Character will be reset and you will be given an item with Max Stats on it. It costs 100 Rebirths! So, do you want to Super Rebirth?");
        }else if (status == 1) {
         var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
				  if (totAp > 127999) { /* Make this how much you want to, Make it 1 less than the reqstat */
                cm.sendOk("Sorry, You need to have 128000 or more AP points.");
                cm.dispose();
            } else {
            if (cm.canHold(1032033) {
                    cm.sendOk("#bGood-Job#k, you have qualified for a #eSuper Rebirth#n. Please click #rOk#k to continue.");
            } else {
                cm.sendOk("You do not have enough space in your inventory. Please have at least 24 open slots.");
                cm.dispose();
            }
          }
         } else if (status == 2) {
        // Give item
        cm.gainItem(1032033, 1);
        // Meow
          if (unequipEverything == true) {
            cm.unequipEverything();
          }
        // Reset to default
        cm.getPlayer().changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
        cm.getPlayer().setDex(4);
        cm.getPlayer().setInt(4);
        cm.getPlayer().setLuk(4);
        cm.getPlayer().setStr(4);
        cm.getPlayer().setRemainingAp(9);
        cm.getPlayer().setExp(0);
        cm.getPlayer().setLevel(2);
        if (resetKeyboard == true) {
        cm.getPlayer().setKeymap(net.sf.odinms.client.MapleCharacter.getDefault(cm.getPlayer().getClient()).getKeymap());
       }
        // Edit Item stats
        MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032033, "str", 32000);
        MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032033, "dex", 32000);
        MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032033, "luk", 32000);
        MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032033, "int", 32000);
            cm.saveToDb(true); // Might need to add another ,true for some sources.
            cm.dispose();

        }   
    }
}  
