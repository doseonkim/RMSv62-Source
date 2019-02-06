var wui = 0;

function start() {
    cm.sendSimple ("#e#b#eHello #h #! #kI am the Shumi Coin exchanger! Every time you do the JQ you these: #v4031039#!\r\n\r\nYou can exchange these coins for prizes.#k!\r\n#L125#20 #v4031039# for #v5220010# #l  \r\n#L0#30 #v4031039# for #v1382060# #l\r\n#L1#30 #v4031039# for #v1442068# #l\r\n#L2#30 #v4031039# for #v1452060# #l\r\n#L3#40 #v4031039# for #v1022060# #l\r\n#L4#40 #v4031039# for #v1022058# #l\r\n#L5#50 #v4031039# for #v1012110# #l\r\n#L6#50 #v4031039# for #v1012108# #l\r\n#L7#50 #v4031039# for #v1012111# #l\r\n#L8#60 #v4031039# for #v1012106# #l\r\n#L9#60 #v4031039# for #v1012084##l \r\n#L10#120 #v4031039# for #v1482023##l\r\n#L11#150 #v4031039# for #v1302081##l\r\n#L12#150 #v4031039# for #v1402046##l")
}

function action(mode, type, selection) {
cm.dispose();


  if (selection == 0) {

if (cm.haveItem(4031039, 30)) {
          cm.gainItem(4031039, -30);
                      cm.gainItem(1382060, 1);
                      cm.sendOk("#b Here is your Crimson Arcanon #v1382060# be strong !");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 1) {


if (cm.haveItem(4031039, 30)) {
          cm.gainItem(4031039, -30);
                      cm.gainItem(1442068, 1);
                      cm.sendOk("#b Here is your Crimson Arcglaive #v1442068# be strong !");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 2) {


if (cm.haveItem(4031039, 30)) {
          cm.gainItem(4031039, -30);
                      cm.gainItem(1452060, 1);
                      cm.sendOk("#b Here is your Crimson Arclancer #v1452060# ! be strong !");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 3) {


if (cm.haveItem(4031039, 40)) {
          cm.gainItem(4031039, -40);
                      cm.gainItem(1022060, 1);
                      cm.sendOk("#b Here is your White Raccoon Mask #v1022060# !");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 4) {


if (cm.haveItem(4031039, 40)) {
          cm.gainItem(4031039, -40);
                      cm.gainItem(1022058, 1);
                      cm.sendOk("#b Here is your Brown Raccoon Mask #v1022058#!");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 5) {


if (cm.haveItem(4031039, 50)) {
          cm.gainItem(4031039, -50);
                      cm.gainItem(1012110, 1);
                      cm.sendOk("#b Here is your Angry Mask #v1012110# !");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 6) {


if (cm.haveItem(4031039, 50)) {
          cm.gainItem(4031039, -50);
                      cm.gainItem(1012108, 1);
                      cm.sendOk("#b Here is your Smiling Mask #v1012108#!");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 7) {


if (cm.haveItem(4031039, 50)) {
          cm.gainItem(4031039, -50);
                      cm.gainItem(1012111, 1);
                      cm.sendOk("#b Here is your Sad Mask #v1012111#!");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 8) {


if (cm.haveItem(4031039, 60)) {
          cm.gainItem(4031039, -60);
                      cm.gainItem(1012106, 1);
                      cm.sendOk("#b Here is your Rat Mouth #v1012106#!");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

      } else if (selection == 9) {


if (cm.haveItem(4031039, 60)) {
          cm.gainItem(4031039, -60);
                      cm.gainItem(1012084, 1);
                      cm.sendOk("#b Here is your White Mouse Kit #v1012084#!");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

        cm.dispose();
        } else if (selection == 10) {


if (cm.haveItem(4031039, 120)) {
          cm.gainItem(4031039, -120);
                      cm.gainItem(1482023, 1);
                      cm.sendOk("#b Here is your Timeless Knuckle #v1482023#!");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
            }
                   } else if (selection == 11) {


if (cm.haveItem(4031039, 150)) {
          cm.gainItem(4031039, -150);
                      cm.gainItem(1302081, 1);
                      cm.sendOk("#b Here is your Timeless Carabella #v1302081#!");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }
                } else if (selection == 12) {


if (cm.haveItem(4031039, 150)) {
          cm.gainItem(4031039, -150);
                      cm.gainItem(1402046, 1);
                      cm.sendOk("#b Here is your Timeless Carabella #v1402046#!");
                      cm.dispose();
            } else {
                cm.sendOk(" #eSorry You dont have enough #v4031039#!");
                cm.dispose();
                }

        cm.dispose();
 } else if (selection == 125) {


if (cm.haveItem(4031039, 20)) {
                      cm.sendOk("#bSorry this is Closed Due to Hackers!!");
                      cm.dispose();
            } else {
                      cm.sendOk("#bSorry this is Closed Due to Hackers!!");
                cm.dispose();
                }

        cm.dispose();
        }


    
}