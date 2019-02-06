importPackage(net.sf.odinms.client);

var status = 0;
var jobName;
var job;
var jobz = Array(100, 200, 300, 400, 500);

function start() {
    cm.sendNext("#eHello, I'm in charge of Job Advancing.");
}

function action(mode, type, selection) {
    var jobId=cm.getPlayer().getJob().getId();
    if (mode == -1) {
        cm.sendOk("#eSee you around.");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() < 7) {
                    cm.sendYesNo("#eSorry but you must be at least level 8 to make the #bFirst Job Advancement#k.");
                    cm.dispose();
                } else {
                    cm.sendYesNo("#eCongratulations on reaching such a high level. Would you like to make the #bFirst Job Advancement#k?");
                    status = 149;
                }
            } else if (cm.getLevel() < 30) {
                cm.sendOk("#eSorry, but you have to be at least level 30 to make the #bSecond Job Advancement#k.");
                cm.dispose();
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF))
                cm.sendSimple("#eCongratulations on reaching such a high level. Which would you like to be? #b\r\n#L0#Assassin#l\r\n#L1#Bandit#l#k");
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR))
                cm.sendSimple("#eCongratulations on reaching such a high level. Which would you like to be? #b\r\n#L2#Fighter#l\r\n#L3#Page#l\r\n#L4#Spearman#l#k");
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN))
                cm.sendSimple("#eCongratulations on reaching such a high level. Which would you like to be? #b\r\n#L5#Ice Lightning Wizard#l\r\n#L6#Fire Poison Wizard#l\r\n#L7#Cleric#l#k");
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN))
                cm.sendSimple("#eCongratulations on reaching such a high level. Which would you like to be? #b\r\n#L8#Hunter#l\r\n#L9#Crossbowman#l#k");
            else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE))
                cm.sendSimple("#eCongratulations on reaching such a high level. Which would you like to be? #b\r\n#L10#Brawler#l\r\n#L11#Gunslinger#l#k");
            else if (cm.getLevel() < 70) {
                cm.sendOk("#eSorry, but you have to be at least level 70 to make the #bThird Job Advancement#k.");
                cm.dispose();
            } else if (jobId % 100 != 0 && (cm.getLevel() >= 70 && jobId % 10 == 0 || cm.getLevel() >= 120 && jobId % 10 == 1)) {
                cm.getPlayer().changeJob(MapleJob.getById(jobId + 1));
                cm.sendOk("#eCongratulations, you have been job advanced!");
                cm.dispose();
            } else if ( jobId == 112 || jobId == 122 || jobId == 132 || jobId == 212 || jobId == 222 || jobId == 232 || jobId == 312 || jobId == 322 || jobId == 412 || jobId == 422 || jobId == 512 || jobId == 522) {
                cm.sendOk("#eYou are already #bFourth Job#k.");
                cm.dispose();
            } else
                cm.dispose();
        } else if (status == 2) {
            switch(selection) {
                case 0: jobName = "Assassin";             job = net.sf.odinms.client.MapleJob.ASSASSIN;    break;
                case 1: jobName = "Bandit";               job = net.sf.odinms.client.MapleJob.BANDIT;      break;
                case 2: jobName = "Fighter";              job = net.sf.odinms.client.MapleJob.FIGHTER;     break;
                case 3: jobName = "Page";                 job = net.sf.odinms.client.MapleJob.PAGE;        break;
                case 4: jobName = "Spearman";             job = net.sf.odinms.client.MapleJob.SPEARMAN;    break;
                case 5: jobName = "Ice/Lightning Wizard"; job = net.sf.odinms.client.MapleJob.IL_WIZARD;   break;
                case 6: jobName = "Fire/Poison Wizard";   job = net.sf.odinms.client.MapleJob.FP_WIZARD;   break;
                case 7: jobName = "Cleric";               job = net.sf.odinms.client.MapleJob.CLERIC;      break;
                case 8: jobName = "Hunter";               job = net.sf.odinms.client.MapleJob.HUNTER;      break;
                case 9: jobName = "Crossbowman";          job = net.sf.odinms.client.MapleJob.CROSSBOWMAN; break;
                case 10:jobName = "Brawler";              job = net.sf.odinms.client.MapleJob.BRAWLER;     break;
                case 11:jobName = "Gunslinger";           job = net.sf.odinms.client.MapleJob.GUNSLINGER;  break;
            }
            cm.sendYesNo("#eDo you want to become a #b" + jobName + "#k?");
        } else if (status == 3) {
            cm.changeJob(job);
            cm.sendOk("#eThere you go. Hope you enjoy it. See you around in the future.");
            cm.dispose();
        } else if (status == 150) {
            cm.sendSimple("#eWhich would you like to be? #b\r\n#L0#Warrior#l\r\n#L1#Magician#l\r\n#L2#Bowman#l\r\n#L3#Thief#l\r\n#L4#Pirate#l#k");
        } else if (status == 151) {
            if (selection == 0) {
                jobName = "Warrior";
                job = net.sf.odinms.client.MapleJob.WARRIOR;
            } else if (selection == 1) {
                jobName = "Magician";
                job = net.sf.odinms.client.MapleJob.MAGICIAN;
            } else if (selection == 2) {
                jobName = "Bowman";
                job = net.sf.odinms.client.MapleJob.BOWMAN;
            } else if (selection == 3) {
                jobName = "Thief";
                job = net.sf.odinms.client.MapleJob.THIEF;
            } else if (selection == 4) {
                jobName = "Pirate";
                job = net.sf.odinms.client.MapleJob.PIRATE;
            }
            cm.sendYesNo("#eDo you want to become a #b" + jobName + "#k?");
        } else if (status == 152) {
                cm.changeJob(job);
                cm.sendOk("#eYour job has been changed. See you around.");
                cm.dispose();
        } else if (status == 161) {
            cm.doReborn();
            cm.sendOk("#eYou have been reborn! Good luck on your next journey!");
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
