
/* Salon Seamus
	Amoria Random Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30570, 30690, 30250, 30230, 30050, 30280, 30410, 30290, 30300, 30580, 30590, 30200, 30450);
var fhair = Array(31490, 31570, 31150, 31590, 31310, 31220, 31260, 31020, 31160, 31110, 31230, 31580, 31480);
var hairnew = Array();

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
			cm.sendSimple("#eOh no! You went to Claudia for your hair didn't you! Luckily I can still save the colour! Just bring me one of my #rAccess Passes#k and make sure you have your #rEntry Pass#k and I'll fix you right up!\r\n\r\n#b#L2#I brought an Access Pass!#l");						
		} else {
			cm.sendOk("#eYou do not have your #rEntry Pass#k!");
			cm.dispose();
}
}
			else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("Which coupon would you like to buy?\r\n#L0#Haircut for " + hairprice + " mesos: #i5150019##t5150019##l\r\n#L1#Dye your hair for " + haircolorprice + " mesos: #i5151016##t5151016##l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				cm.sendYesNo("If you use the EXP coupon your hair will change RANDOMLY with a chance to obtain a new experimental style that even you didn't think was possible. Are you going to use #b#t5150019##k and really change your hairstyle?");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("#eI will only use temp hair dye just incase you might want to change! #gHere we go!");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150019) == true){
					cm.gainItem(5150019, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("Enjoy your new and improved hairstyle!");
				} else {
					cm.sendOk("#eHmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151016) == true){
					cm.gainItem(5151016, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("#eEnjoy your new and improved haircolor!");
				} else {
					cm.sendOk("#eHmmm...it looks like you don't have my #rAccess Pass#k...I'm afraid I can't dye your hair without it. I'm sorry...");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getMeso() >= hairprice) {
					cm.gainMeso(-hairprice);
					cm.gainItem(5150019, 1);
					cm.sendOk("Enjoy!");
				} else if (selection == 1 && cm.getMeso() >= haircolorprice) {
					cm.gainMeso(-haircolorprice);
					cm.gainItem(5151016, 1);
					cm.sendOk("Enjoy!");
				} else {
					cm.sendOk("You don't have enough mesos to buy a coupon!");
				}
			}
		}
	}
}

