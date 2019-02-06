//Written by Emilyx3 
//Warning: availibleStatArray, pricePerStatArray, 
//and getEqStat and upgradeItem in  
//NPCConversationManager must be consistent! 

importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.tools); 

var status = 0; 
var slotSelected = -1; 
var statSelected = -1; 
var amountToAdd = 0; 

var availibleStatArray = Array( 
    "Str", 
    "Dex", 
    "Int", 
    "Luk", 
    "Hp", 
    "Mp", 
    "WAtk", 
    "MAtk", 
    "WDef", 
    "MDef" 
); 

var pricePerStatArray = Array( 
    10000000,//Str 
    10000000,//Dex 
    10000000,//Int 
    10000000,//Luk 
    100000,//Hp 
    100000,//Mp 
    100000000,//WAtk 
    100000000,//MAtk 
    100000,//WDef 
    100000//MDef 
); 

function start() { 
    if (pricePerStatArray.length != availibleStatArray.length) { 
        cm.sendSimple("NPC is broken. Please notify your coder to fix it."); 
        cm.dispose(); 
        return; 
    } 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1 || mode == 0) { 
        cm.dispose(); 
        return; 
    } else { 
        if (mode == 1) 
        status++; 
        else 
        status--; 
        if (status == 0) { 
            var sendstr = "#eChoose an Equip you wish to #gupgrade#k!\r\n\r\n"; 
            cm.sendSimple(sendstr+cm.EquipList(cm.getC())); 
        } else if (status == 1) { 
            slotSelected = selection; 
            sendstr = "#eYou are upgrading: #v" + cm.getEquipId(slotSelected) + "# What stat would you like to add to? #bCurrent Item Stats: \r\n#k"; 
            for (var i = 0;i<availibleStatArray.length;i++) { 
                sendstr += "#b\r\n#L"+i+"#"+availibleStatArray[i]+ " #k(Current: "+cm.getEqStat(slotSelected,i)+") for #r"+ pricePerStatArray[i]+" #kmesos per point.#l"; 
            } 
            cm.sendSimple(sendstr); 
        } else if (status == 2) { 
            statSelected = selection; 
            cm.sendGetText("#eYou are adding "+availibleStatArray[statSelected]+" to #v"+cm.getEquipId(slotSelected)+"# for "+pricePerStatArray[statSelected]+" mesos per stat.\r\nIt's current "+availibleStatArray[statSelected]+" is "+cm.getEqStat(slotSelected,statSelected)+". You can add up to "+Math.min(32767 - cm.getEqStat(slotSelected,statSelected), Math.floor(cm.getMeso()/pricePerStatArray[statSelected]))+" points. How many points would you like to add?"); 
        } else if (status == 3) { 
            amountToAdd = cm.getText(); 
            if (isNaN(amountToAdd) || amountToAdd == "") { 
                cm.sendOk("#ePut a number please!"); 
                cm.dispose(); 
                return; 
            } 
            if (amountToAdd < 1) { 
                cm.sendOk("#ePlease choose a positive amount of stats to add."); 
                cm.dispose(); 
                return; 
            } 
            if (pricePerStatArray[statSelected]*amountToAdd > 2147483647) { 
                cm.sendOk("#eThat would cost more than the max amount of mesos. Didn't you read the last window?"); 
                cm.dispose(); 
                return; 
            } 
            if (amountToAdd*1 + cm.getEqStat(slotSelected,statSelected) > 32767) {//*1 is so it is read as a number and not a string. WTF? 
                cm.sendOk("#eYou cannot have a total of more than 32767 per stat. Didn't you read the last window?"); 
                cm.dispose(); 
                return; 
            } 
            cm.sendYesNo("#e#rConfirm:#k\r\nYou are adding "+amountToAdd+" "+availibleStatArray[statSelected]+" to #v"+cm.getEquipId(slotSelected)+"# for "+pricePerStatArray[statSelected]*amountToAdd+" mesos."); 
        } else if (status == 4) { 
            if (cm.getPlayer().getMeso() >= pricePerStatArray[statSelected]*amountToAdd) { 
                switch (cm.upgradeItem(slotSelected,statSelected,amountToAdd)) { 
                    case -1: { 
                        cm.sendOk("#eAn Error Occured! Please try again."); 
                        cm.dispose(); 
                        return; 
                    } 
                    case 1: { 
                        cm.gainMeso(-(pricePerStatArray[statSelected]*amountToAdd)); 
                        cm.sendOk("#eCongrats on your upgraded item!"); 
                        cm.getC().getSession().write(MaplePacketCreator.getCharInfo(cm.getPlayer())); 
                        cm.getPlayer().getMap().removePlayer(cm.getPlayer()); 
                        cm.getPlayer().getMap().addPlayer(cm.getPlayer()); 
                        cm.dispose(); 
                        return; 
                    } 
                } 
            } else { 
                cm.sendOk("#eYou only have "+cm.getPlayer().getMeso()+" mesos. You're short by "+(pricePerStatArray[statSelected]*amountToAdd) - cm.getPlayer().getMeso()+" mesos!") 
                cm.dispose(); 
                return; 
            } 
        } else { 
            cm.dispose(); 
        } 
    } 
}  
