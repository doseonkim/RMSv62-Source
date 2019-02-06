/* Made by Hector from LastStory. 
Do not take credits for something you didn't do!. */ 

var wui = 0; 

function start() { 
    cm.sendSimple ("Hello, I'm the Slime Eraser trader. If you got any #i4001013# you could exchange them here for prizes. \r\n#L0# #b#b50#k Slime erasers for #rFlaming Katana#k.#k #l\r\n#L1##b50#k Slime erasers for #bGlowing Whip!#k #l\r\n#L2##b50#k Slime erasers for #kDark Crystal Blade <Warror>!#k #l\r\n#L3##b20#k Slime erasers for #rBlack Bow Tie!#k #l\r\n#L4##b20#k Slime erasers for #rLunch Boxes!#k #l\r\n#L5##b20#k Slime erasers for 3 #rDragon Stones!#k #l\r\n#L6##b10#k Slime erasers for #rRaven CrossBows!#k #l\r\n#L7##b10#k Slime erasers for #rRaven Swords!#k #l\r\n#L8##b10#k Slime erasers for #rRaven Claws and Daggers!#k #l\r\n#L9##b50#k Slime erasers for #rElemental Wands & Staffs!#k #l\r\n#L10##b10#k Slime erasers for #rAll bars , (Etc.. Chocolate)#k #l\r\n#L11##b11#k Slime erasers for #rMounts + Saddle#k #l\r\n#L12##b5#k Slime erasers for #rTimeless Carabella#k #l\r\n#L13##b5#k Slime erasers for #rTimeless Axe#k #l\r\n#L14##b5#k Slime erasers for #rTimeless Flame#k #l\r\n#L15##b5#k Slime erasers for #rTimeless Claymore#k #l\r\n#L16##b5#k Slime erasers for #rTimeless Battle Axe#k #l\r\n#L17##b5#k Slime erasers for #rTimeless Maul#k #l\r\n#L18##b5#k Slime erasers for #rTimeless Hellslayer#k #l\r\n#L19##b5#k Slime erasers for #rTimeless Knuckle#k #l\r\n#L20##b5#k Slime erasers for #rGlowing Smile Cap!#k #l\r\n#L21##b3#k Slime erasers for #rBalanced Furys!#k"); 
} 

function action(mode, type, selection) { 
    cm.dispose();
    if (selection == 0) {
     
        if (cm.haveItem(4001013, 50)) {
            cm.gainItem(1302063, 1);
            cm.gainItem(4001013, -50);
            cm.sendOk("Well done!, Here is your #rFlaming Katana!#k");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime erasers. ");
            cm.dispose();
        }


    } else if (selection == 1) {


        if (cm.haveItem(4001013, 50)) {
            cm.gainItem(1302049,1);
            cm.gainItem(4001013, -50);
            cm.sendOk("Well done, Here are is your Glowing Whip!");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }



    } else if (selection == 2) {


        if (cm.haveItem(4001013, 50)) {
            cm.gainItem(1302107,1);
            cm.gainItem(4001013, -50);
            cm.sendOk("Well done, Here is your #r Dark Crystal Blade!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }



    } else if (selection == 3) {

        if (cm.haveItem(4001013, 20)) {
            cm.gainItem(1122005,1);
            cm.gainItem(4001013, -20);
            cm.sendOk("Well done, Here is your Black Bow tie!! Good luck!!");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }



    } else if (selection == 4) {


        if (cm.haveItem(4001013, 20)) {
            cm.gainItem(1302098,1);
            cm.gainItem(1302099,1);
            cm.gainItem(1302100,1);
            cm.gainItem(1302101,1);
            cm.gainItem(4001013, -20);
            cm.sendOk("Well done, Here is your #r Lunch Boxes!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }



    } else if (selection == 5) {


        if (cm.haveItem(4001013, 20)) {
            cm.gainItem(2041200,3);
            cm.gainItem(4001013, -20);
            cm.sendOk("Well done, Here are your 3 Dragon Stones.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }


    } else if (selection == 6) {


        if (cm.haveItem(4001013, 10)) {
            cm.gainItem(1462052,1);
            cm.gainItem(1462053,1);
            cm.gainItem(1462054,1);
            cm.gainItem(1462055,1);
            cm.gainItem(4001013, -10);
            cm.sendOk("Well done, Here is your #r Raven CrossBows!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }



    } else if (selection == 7) {


        if (cm.haveItem(4001013, 10)) {
            cm.gainItem(1402048,1);
            cm.gainItem(1402049,1);
            cm.gainItem(1402050,1);
            cm.gainItem(1402051,1);
            cm.gainItem(4001013, -10);
            cm.sendOk("Well done, Here is your #r Raven Swords!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }



    } else if (selection == 8) {


        if (cm.haveItem(4001013, 10)) {
            cm.gainItem(1472073,1);
            cm.gainItem(1472072,1);
            cm.gainItem(1472074,1);
            cm.gainItem(1472075,1);
            cm.gainItem(1332077,1);
            cm.gainItem(1332078,1);
            cm.gainItem(1332079,1);
            cm.gainItem(1332080,1);
            cm.gainItem(4001013, -10);
            cm.sendOk("Well done, Here is your #r Raven Daggers and claws!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }



    } else if (selection == 9) {

        if (cm.haveItem(4001013, 50)) {
            cm.gainItem(1372035,1);
            cm.gainItem(1372036,1);
            cm.gainItem(1372037,1);
            cm.gainItem(1372038,1);
            cm.gainItem(1372039,1);
            cm.gainItem(1372040,1);
            cm.gainItem(1372041,1);
            cm.gainItem(1372042,1);
            cm.gainItem(1382045,1);
            cm.gainItem(1382046,1);
            cm.gainItem(1382047,1);
            cm.gainItem(1382048,1);
            cm.gainItem(1382049,1);
            cm.gainItem(1382050,1);
            cm.gainItem(1382051,1);
            cm.gainItem(1382052,1);
            cm.gainItem(4001013, -50);
            cm.sendOk("Well done, Here is your #r Elemental Items!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime erasers. ");
            cm.dispose();
        } 
    } else if (selection == 10) {
        if (cm.haveItem(4001013, 10)) {
            cm.gainItem(1902000,1);
            cm.gainItem(1902001,1);
            cm.gainItem(1902002,1);
            cm.gainItem(1912000,1);
            cm.gainItem(4001013, -10);
            cm.sendOk("Well done, Here are your Bars");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }
    } else if (selection == 11) {
        if (cm.haveItem(4001013, 11)) {
            cm.gainItem(1012071,1);
            cm.gainItem(1012072,1);
            cm.gainItem(1012073,1);
			cm.gainItem(1012070,1);
            cm.gainItem(4001013, -11);
            cm.sendOk("Well done, Here are your #r Taming mobs + Saddle!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }
    } else if (selection == 12) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1302081,1);
			cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Timeless Carabella!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
			}
    } else if (selection == 13) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1312037,1);
			cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Timeless Axe!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
			}
    } else if (selection == 14) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1322060,1);
			cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Timeless Flame!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
			}
    } else if (selection == 15) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1402046,1);
			cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Timeless Claymore!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
			}
    } else if (selection == 16) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1412033,1);
			cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Timeless Battle Axe!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
			}
    } else if (selection == 17) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1422037,1);
			cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Timeless Maulk.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
			}
    } else if (selection == 18) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1442063,1);
			cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Timeless Hellslayer!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
			}
    } else if (selection == 19) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1482023,1);
			cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Timeless Knuckle!!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }
    } else if (selection == 20) {
        if (cm.haveItem(4001013, 5)) {
            cm.gainItem(1002735,1);
            cm.gainItem(4001013, -5);
            cm.sendOk("Well done, Here is your #r Glowing Smile cap!!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }
    } else if (selection == 21) {
        if (cm.haveItem(4001013, 3)) {
            cm.gainItem(2070018,1);
            cm.gainItem(4001013, -3);
            cm.sendOk("Well done, Here is your #r Balanced Fury!#k.");
            cm.dispose();
        } else {
            cm.sendOk(" Sorry. You do not have enough Slime Erasers. ");
            cm.dispose();
        }
        cm.dispose(); 
    }


     
}  