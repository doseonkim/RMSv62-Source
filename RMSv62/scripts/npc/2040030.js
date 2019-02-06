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
            cm.sendSimple("#eSomething sure went wrong. #rOur cloud machine broke #kand we need someone to #rpick up the remains#k, get them and come back for your reward!  Here are your options: \r\n #L6#Warp me there and I will help!#l\r\n #L0#Tell me more about these ITEMS!!#l#b\r\n#L1# I would like to trade 100 #b#v4001063##k for #v1102084##l \r\n#b#L2# I would like to trade 150 #b#v4001063##k for #v1072344##l \r\n#b#L3# I would like to trade 150 #b#v4001063##k for #v1082223##l \r\n#b#L4# I would like to trade 350 #b#v4001063##k for #v1012070##l\r\n#b#L5# I would like to trade 500 #b#v4001063##k for #v1122014##l\r\n#b#L7# I would like to trade 750 #b#v4001063##k for #v1002553##l\r\n#b#L8# I would like to trade 950 #b#v4001063##k for #v1302101##l\r\n#b#L9# I would like to trade 1250 #b#v4001063##k for #v1002723##l");
       	}else{
            cm.sendSimple("#eSomething sure went wrong. #rOur cloud machine broke #kand we need someone to #rpick up the remains#k, get them and come back for your reward!  Here are your options: \r\n #L6#Warp me there and I will help!#l\r\n #L0#Tell me more about these ITEMS!!#l#b\r\n#L1# I would like to trade 100 #b#v4001063##k for #v1102084##l \r\n#b#L2# I would like to trade 150 #b#v4001063##k for #v1072344##l \r\n#b#L3# I would like to trade 150 #b#v4001063##k for #v1082223##l \r\n#b#L4# I would like to trade 350 #b#v4001063##k for #v1012070##l\r\n#b#L5# I would like to trade 500 #b#v4001063##k for #v1122014##l\r\n#b#L7# I would like to trade 750 #b#v4001063##k for #v1002553##l\r\n#b#L8# I would like to trade 950 #b#v4001063##k for #v1302101##l\r\n#b#L9# I would like to trade 1250 #b#v4001063##k for #v1002723##l");
	cm.dispose();
}
} else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4001063, 100)) {
                    cm.gainItem(1102084, 1);
                    cm.gainItem(4001063, -100);
                    cm.sendOk("#eThank you for your #b#v4001063##k!");
                } else {
                    cm.sendOk("#eSorry, you don't have enough #b#v4001063##k#rCloud Pieces#k!");
                }
                cm.dispose();
            }  else if (selection == 2) {
                if (cm.haveItem(4001063, 150)) {
		                cm.gainItem(4001063, -150);
                    cm.gainItem(1072344, 1);
                    cm.sendOk("#eThank you for your #b#v4001063##k!");
                } else {
                    cm.sendOk("#eSorry you dont have enough #b#v4001063##k#rCloud Pieces#k!");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.haveItem(4001063, 150)) {
                    cm.gainItem(1082223, 1);
                    cm.gainItem(4001063, -150);
                    cm.sendOk("#eThank you for your #b#v4001063##k!");
                } else {
                    cm.sendOk("#eSorry you dont have enough #b#v4001063##k#rCloud Pieces#k!");
                }
                cm.dispose();
        } else if (selection == 4) {
                 if(cm.haveItem(4001063, 350)) {
                    cm.gainItem(1012070, 1);
                    cm.gainItem(4001063, -350);
                    cm.sendOk("#eThank you for your #b#v4001063##k!");
                } else {
                    cm.sendOk("#eSorry you dont have enough #b#v4001063##k#rCloud Pieces#k!");
                }
		cm.dispose();
	} else if (selection == 5) {
                if (cm.haveItem(4001063, 500)) {
                    cm.gainItem(1122014, 1);
                    cm.gainItem(4001063, -500);
                    cm.sendOk("#eThank you for your #b#v4001063##k!");
                } else {
                    cm.sendOk("#eSorry you dont have enough #b#v4001063##k#rCloud Pieces#k!");
                }
                cm.dispose();
       } else if (selection == 7) {
                if (cm.haveItem(4001063, 750)) {
                    cm.gainItem(1002553, 1);
                    cm.gainItem(4001063, -750);
                    cm.sendOk("#eThank you for your #b#v4001063##k!");
                } else {
                    cm.sendOk("#eSorry you dont have enough #b#v4001063##k#rCloud Pieces#k!");
                }
                cm.dispose();
} else if (selection == 8) {
                if (cm.haveItem(4001063, 950)) {
                    cm.gainItem(1302101, 1);
                    cm.gainItem(4001063, -950);
                    cm.sendOk("#eThank you for your #b#v4001063##k!");
                } else {
                    cm.sendOk("#eSorry you dont have enough #b#v4001063##k#rCloud Pieces#k!");
                }
                cm.dispose();
} else if (selection == 9) {
                if (cm.haveItem(4001063, 1250)) {
                    cm.gainItem(1002723, 1);
                    cm.gainItem(4001063, -1250);
                    cm.sendOk("#eThank you for your #b#v4001063##k!");
                } else {
                    cm.sendOk("#eSorry you dont have enough #b#v4001063##k#rCloud Pieces#k!");
                }
                cm.dispose();
} else if (selection == 6) {
		cm.warp(222010310,0);
                cm.sendOk("#eThank you for offering your help!");
		cm.dispose();
            } else if (selection == 0) {
              cm.sendOk("#e#v1102084##v1072344##v1082223# are clean items!#l \r\n #v1012070# is a 10 att Icecream Bar!#l \r\n #v1122014# is a 25 all stat Dep. Star!#l\r\n #v1002553# is a 50 att Genesis Bandana!#l\r\n #v1302101# is a clean 130 att LunchBox!#l\r\n #v1002723# is a 100 att RiceCake!");
		cm.dispose();


         }
        }
    }
  }
  