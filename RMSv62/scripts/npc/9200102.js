/* Dr. Bosch
	Ludibrium Random/VIP Eye Color Change.
 */
var status = 0;
var beauty = 0;
var regprice = 1000000;
var vipprice = 1000000;
var colors = Array();

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
	    if (cm.haveItem(4000363)){
            cm.sendSimple("#eOh golly gee! A customer! I can change the colour of your eyes with a quick surgical procedure! As you know I can only do this with an #rAccess Pass#k!\r\n\r\n Hunt these monsters and bring one back!\r\n#L1##bSir, I brought a pass!#l");
}else{
	    cm.sendOk("#eIm sorry but without and Entry Pass, I cannot perform the surgery!");
	    cm.dispose();						
        } 
	}else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                cm.sendSimple("Which coupon would you like to buy?\r\n#L0#Cosmetic Lenses for " + regprice + " mesos: #i5152012##t5152012##l\r\n#L1#Cosmetic Lenses for " + vipprice + " mesos: #i5152015##t5152015##l");
            } else if (selection == 1) {
                beauty = 1;
                if (cm.getPlayer().getGender() == 0) {
                    var current = cm.getPlayer().getFace() % 100 + 20000;
                }
                if (cm.getPlayer().getGender() == 1) {
                    var current = cm.getPlayer().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendYesNo("#eSince this is a surgery it might hurt a little, be prepared!");
            } else if (selection == 2) {
                beauty = 2;
                if (cm.getPlayer().getGender() == 0) {
                    var current = cm.getPlayer().getFace() % 100 + 20000;
                }
                if (cm.getPlayer().getGender() == 1) {
                    var current = cm.getPlayer().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendStyle("With our new computer program, you can see yourself after the treatment in advance. What kind of lens would you like to wear? Please choose the style of your liking.", colors);
            }
        }
        else if (status == 2){
            if (beauty == 1){
                if (cm.haveItem(5152012) == true){
                    cm.gainItem(5152012, -1);
                    cm.setFace(colors[Math.floor(Math.random() * colors.length)]);
                    cm.sendOk("#e#gEnjoy your new and improved cosmetic lenses!");
                    cm.dispose();
                } else {
                    cm.sendOk("#e#gI'm sorry, but I don't think you have our cosmetic lens coupon with you right now. Without the coupon, I'm afraid I can't do it for you..");
                    cm.dispose();
                }
            }
            if (beauty == 2){
                if (cm.haveItem(5152015) == true){
                    cm.gainItem(5152015, -1);
                    cm.setFace(colors[selection]);
                    cm.sendOk("Enjoy your new and improved cosmetic lenses!");
                    cm.dispose();
                } else {
                    cm.sendOk("I'm sorry, but I don't think you have our cosmetic lens coupon with you right now. Without the coupon, I'm afraid I can't do it for you..");
                    cm.dispose();
                }
            }
            if (beauty == 0){
                if (selection == 0 && cm.getMeso() >= regprice) {
                    cm.gainMeso(-regprice);
                    cm.gainItem(5152012, 1);
                    cm.sendOk("Enjoy!");
                    cm.dispose();
                } else if (selection == 1 && cm.getMeso() >= vipprice) {
                    cm.gainMeso(-vipprice);
                    cm.gainItem(5152015, 1);
                    cm.sendOk("Enjoy!");
                    cm.dispose();
                } else {
                    cm.sendOk("You don't have enough mesos to buy a coupon!");
                }
            }
        }
    }
}