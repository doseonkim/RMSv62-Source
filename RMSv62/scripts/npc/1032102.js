var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
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
	if (!cm.haveItem(400363, 1)){
                    cm.sendSimple("#eDo You Have a #rMonster Card?#k We can trade Monster Cards For Mounts!: \r\n#L1# I would like to trade #b#v2382038##k for #v1902004##v1912002##l \r\n#b#L2# I would like to trade #b#v2382061##k for #v1902003##v1912001##l \r\n#b#L3# I would like to trade #b#v2384035##k for #v1902015##v1912011##l \r\n#b#L4# I would like to trade #b#v2382048##k for #v1902021# #v1912014##l\r\n#b#L5# I would like to trade #b#v2382004##k for #v1902020##v1912013##l\r\n#b#L7# I would like to trade #b#v2388021##k for #v1902022##v1912015##l\r\n#b#L8# I would like to trade #b#v2381036##k for #v1902005##v1912005##l\r\n#b#L9# I would like to trade #b#v2384009##k for #v1902012##v1912008##l \r\n#b#L10# I would like to trade #b#v2383019##k for #v1902019##v1912012##l \r\n#b#L11# I would like to trade #b#v2383001##k for #v1902011##v1912007##l \r\n#b#L12# I would like to trade #b#v2388023##k for #v1902039##v1912032##l \r\n#b#L13# I would like to trade #b#v2388022##k for #v1902014##v1912010##l \r\n#b#L14# I would like to trade #b#v2388020##k for #v1902036##v1912029##l \r\n#b#L15# I would like to trade #b#v2385021##k for #v1902013##v1912009##l");
       	}else{
            cm.sendSimple("#eSomething sure went wrong. #rOur cloud machine broke #kand we need someone to #rpick up the remains#k, get them and come back for your reward!  Here are your options: \r\n #L6#Warp me there and I will help!#l\r\n #L0#Tell me more about these ITEMS!!#l#b\r\n#L1# I would like to trade 100 #b#v4001063##k for #v1102084##l \r\n#b#L2# I would like to trade 150 #b#v4001063##k for #v1072344##l \r\n#b#L3# I would like to trade 150 #b#v4001063##k for #v1082223##l \r\n#b#L4# I would like to trade 350 #b#v4001063##k for #v1012070##l\r\n#b#L5# I would like to trade 500 #b#v4001063##k for #v1122014##l\r\n#b#L7# I would like to trade 750 #b#v4001063##k for #v1002553##l\r\n#b#L8# I would like to trade 950 #b#v4001063##k for #v1302101##l\r\n#b#L9# I would like to trade 1250 #b#v2383001##k for #v1002723##l");
	cm.dispose();
}
} else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(2382038, 1)) {
                    cm.gainItem(1902004, 1);
                    cm.gainItem(1912002, 1);
                    cm.gainItem(2382038, -1);
                    cm.sendOk("#eThank you for your #b#v2382038##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2382038##k!");
                }
                cm.dispose();
            } else if (selection == 2) {
                if (cm.haveItem(2382061, 1)) {
                    cm.gainItem(1902003, 1);
                    cm.gainItem(1912001, 1);
                    cm.gainItem(2382061, -1);
                    cm.sendOk("#eThank you for your #b#v2382061##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2382061##k!");
                }
                cm.dispose();
                    } else if (selection == 3) {
                if (cm.haveItem(2384035, 1)) {
                    cm.gainItem(1902015, 1);
                    cm.gainItem(1912011, 1);
                    cm.gainItem(2384035, -1);
                    cm.sendOk("#eThank you for your #b#v2384035##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2384035##k!");
                }
                cm.dispose();
                            } else if (selection == 4) {
                if (cm.haveItem(2382048, 1)) {
                    cm.gainItem(1902021, 1);
                    cm.gainItem(1912014, 1);
                    cm.gainItem(2382048, -1);
                    cm.sendOk("#eThank you for your #b#v2382048##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2382048##k!");
                }
                cm.dispose();
                            } else if (selection == 5) {
                if (cm.haveItem(2382004, 1)) {
                    cm.gainItem(1902020, 1);
                    cm.gainItem(1912013, 1);
                    cm.gainItem(2382004, -1);
                    cm.sendOk("#eThank you for your #b#v2382004##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2382004##k!");
                }
                cm.dispose();
                            } else if (selection == 7) {
                if (cm.haveItem(2388021, 1)) {
                    cm.gainItem(1902022, 1);
                    cm.gainItem(1912015, 1);
                    cm.gainItem(2388021, -1);
                    cm.sendOk("#eThank you for your #b#v2388021##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2388021##k!");
                }
                cm.dispose();
                            } else if (selection == 8) {
                if (cm.haveItem(2381036, 1)) {
                    cm.gainItem(1902005, 1);
                    cm.gainItem(1912005, 1);
                    cm.gainItem(2381036, -1);
                    cm.sendOk("#eThank you for your #b#v2381036##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2381036##k!");
                }
                cm.dispose();
                            } else if (selection == 9) {
                if (cm.haveItem(2384009, 1)) {
                    cm.gainItem(1902012, 1);
                    cm.gainItem(1912008, 1);
                    cm.gainItem(2384009, -1);
                    cm.sendOk("#eThank you for your #b#v2384009##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2384009##k!");
                }
                cm.dispose();
                            } else if (selection == 10) {
                if (cm.haveItem(2383019, 1)) {
                    cm.gainItem(1902019, 1);
                    cm.gainItem(1912012, 1);
                    cm.gainItem(2383019, -1);
                    cm.sendOk("#eThank you for your #b#v2383019##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2383019##k!");
                }
                cm.dispose();
                            } else if (selection == 11) {
                if (cm.haveItem(2383001, 1)) {
                    cm.gainItem(1902011, 1);
                    cm.gainItem(1912007, 1);
                    cm.gainItem(2383001, -1);
                    cm.sendOk("#eThank you for your #b#v2383001##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2383001##k!");
                }
                cm.dispose(); 
                                            } else if (selection == 12) {
                if (cm.haveItem(2388023, 1)) {
                    cm.gainItem(1902039, 1);
                    cm.gainItem(1912032, 1);
                    cm.gainItem(2388023, -1);
                    cm.sendOk("#eThank you for your #b#v2388023##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2388023##k!");
                }
                cm.dispose();
                                            } else if (selection == 13) {
                if (cm.haveItem(2388022, 1)) {
                    cm.gainItem(1902014, 1);
                    cm.gainItem(1912010, 1);
                    cm.gainItem(2388022, -1);
                    cm.sendOk("#eThank you for your #b#v2388022##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2388022##k!");
                }
                cm.dispose();
                                            } else if (selection == 14) {
                if (cm.haveItem(2388020, 1)) {
                    cm.gainItem(1902036, 1);
                    cm.gainItem(1912029, 1);
                    cm.gainItem(2388020, -1);
                    cm.sendOk("#eThank you for your #b#v23880201##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2388020##k!");
                }
                cm.dispose();
                                            } else if (selection == 15) {
                if (cm.haveItem(2385021, 1)) {
                    cm.gainItem(1902013, 1);
                    cm.gainItem(1912009, 1);
                    cm.gainItem(2385021, -1);
                    cm.sendOk("#eThank you for your #b#v2385021##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have a #b#v2385021##k!");
                }
                cm.dispose();
 }
        }
    }
  }