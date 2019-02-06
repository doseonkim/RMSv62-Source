
var status;
var minLevel = 1;
var maxLevel = 255;
var minPlayers = 3;
var maxPlayers = 6;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        // Lakelis has no preamble, directly checks if you're in a party
        if (cm.getParty() == null) { // No Party
            cm.sendOk("How about you and your party members collectively beating a quest? Here you'll find obstacles and problems where you won't be able to beat it without great teamwork.  If you want to try it, please tell the #bleader of your party#k to talk to me.");
            cm.dispose();
        } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("If you want to try the quest, please tell the #bleader of your party#k to talk to me.");
            cm.dispose();
        } else {
            // Check if all party members are within Levels 21-30
            var party = cm.getParty().getMembers();
            var inMap = cm.partyMembersInMap();
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {
                if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
                    levelValid++;
            }
            if (inMap < minPlayers || inMap > maxPlayers) {
                cm.sendOk("Your party is not a party of "+minPlayers+". Please make sure all your members are present and qualified to participate in this quest. I see #b" + inMap + "#k of your party members are in Kerning. If this seems wrong, #blog out and log back in,#k or reform the party.");
				cm.dispose();
			} else if (levelValid != inMap) {
				cm.sendOk("Please make sure all your members are present and qualified to participate in this quest. This PQ requires players ranging from level "+minLevel+" to level "+maxLevel+". I see #b" + levelValid + "#k members are in the right level range. If this seems wrong, #blog out and log back in,#k or reform the party.");
				cm.dispose();
			} else {
                var em = cm.getEventManager("KerningPQ");
                if (em == null) {
                    cm.sendOk("This PQ is not currently available.");
                } else if (em.getProperty("KPQOpen").equals("true")) {
                    // Begin the PQ.
                    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    // Remove Passes and Coupons
                    party = cm.getChar().getEventInstance().getPlayers();
                    cm.removeFromParty(4001008, party);
                    cm.removeFromParty(4001007, party);
					em.setProperty("KPQOpen" , "false");
                } else {
                    cm.sendNext("There is already another party inside. Please wait !");
                }
				cm.dispose();
            }
        }
    }
}