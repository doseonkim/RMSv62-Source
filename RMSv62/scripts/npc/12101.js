/*
JQ prize NPC
*/
var wui = 0;
 
function start() {
        cm.sendSimple ("GRATZ!! You're one of the first to complete this JQ!. You Deserve a PRIZE!\r\n#L0##b2mill mesos#k #l\r\n#L1##bRandom Equip#k #l\r\n#L2##bRandom Scroll#k #l\r\n#rMade by Admin of UnitedStory .edited by Xerixe");
}
 
function action(mode, type, selection) {
        cm.dispose();
        if (selection == 0) {
                cm.gainMeso(2000000); 
                cm.warp(100000000, 0);
                cm.dispose();
                } else if (selection == 1) { //Random Equips
                int randA = cm.maths(1, 31);
                                if (randA == 1) {
                                        cm.gainItem(1122005);
                                } else if (randA == 2) {
                                        cm.gainItem(1122007);
                                } else if (randA == 3) {
                                        cm.gainItem(1122006)
                                } else if (randA == 4) {
                                        cm.gainItem(1122004)
                                } else if (randA == 5) {
                                        cm.gainItem(1122003)
                                } else if (randA == 6) {
                                        cm.gainItem(1122002)
                                } else if (randA == 7) {
                                        cm.gainItem(1122001)
                                } else if (randA == 8) {
                                        cm.gainItem(1302036)
                                } else if (randA == 9) {
                                        cm.gainItem(1302035)
                                } else if (randA == 10) {
                                        cm.gainItem(1302062)
                                } else if (randA == 11) {
                                        cm.gainItem(1312013)
                                } else if (randA == 12) {
                                        cm.gainItem(1312014)
                                } else if (randA == 13) {
                                        cm.gainItem(1432048)
                                } else if (randA == 14) {
                                        cm.gainItem(1432041)
                                } else if (randA == 15) {
                                        cm.gainItem(1442050)
                                } else if (randA == 16) {
                                        cm.gainItem(1442049)
                                } else if (randA == 17) {
                                        cm.gainItem(1442048)
                                } else if (randA == 18) {
                                        cm.gainItem(1442047)
                                } else if (randA == 19) {
                                        cm.gainItem(1452018)
                                } else if (randA == 20) {
                                        cm.gainItem(1452023)
                                } else if (randA == 21) {
                                        cm.gainItem(1462053)
                                } else if (randA == 22) {
                                        cm.gainItem(1462054)
                                } else if (randA == 23) {
                                        cm.gainItem(1462055)
                                } else if (randA == 24) {
                                        cm.gainItem(1472062)
                                } else if (randA == 25) {
                                        cm.gainItem(1032026)
                                } else if (randA == 26) {
                                        cm.gainItem(1032027)
                                } else if (randA == 27) {
                                        cm.gainItem(1032028)
                                } else if (randA == 28) {
                                        cm.gainItem(1012073)
                                } else if (randA == 29) {
                                        cm.gainItem(1012072)
                                } else if (randA == 30) {
                                        cm.gainItem(1012071)
                                } else if (randA == 31) {
                                        cm.gainItem(1012070)
                                }
                                cm.warp(100000000, 0);
                                cm.dispose();
                        } else if (selection == 2) { //RANDOM Scrolls
                                int randA = cm.maths(1, 31);
                                if (randA == 1) {
                                        cm.gainItem(2040025);
                                } else if (randA == 2) {
                                        cm.gainItem(2040026);
                                } else if (randA == 3) {
                                        cm.gainItem(2040029)
                                } else if (randA == 4) {
                                        cm.gainItem(2040031)
                                } else if (randA == 5) {
                                        cm.gainItem(2040030)
                                } else if (randA == 6) {
                                        cm.gainItem(2040317)
                                } else if (randA == 7) {
                                        cm.gainItem(2040318)
                                } else if (randA == 8) {
                                        cm.gainItem(2040321)
                                } else if (randA == 9) {
                                        cm.gainItem(2040322)
                                } else if (randA == 10) {
                                        cm.gainItem(2040323)
                                } else if (randA == 11) {
                                        cm.gainItem(2040418)
                                } else if (randA == 12) {
                                        cm.gainItem(2040419)
                                } else if (randA == 13) {
                                        cm.gainItem(2040425)
                                } else if (randA == 14) {
                                        cm.gainItem(2040426)
                                } else if (randA == 15) {
                                        cm.gainItem(2040427)
                                } else if (randA == 16) {
                                        cm.gainItem(2040532)
                                } else if (randA == 17) {
                                        cm.gainItem(2040533)
                                } else if (randA == 18) {
                                        cm.gainItem(2040534)
                                } else if (randA == 19) {
                                        cm.gainItem(2040932)
                                } else if (randA == 20) {
                                        cm.gainItem(2040931)
                                } else if (randA == 21) {
                                        cm.gainItem(2040933)
                                } else if (randA == 22) {
                                        cm.gainItem(2040925)
                                } else if (randA == 23) {
                                        cm.gainItem(2040924)
                                } else if (randA == 24) {
                                        cm.gainItem(2044801)
                                } else if (randA == 25) {
                                        cm.gainItem(2044804)
                                } else if (randA == 26) {
                                        cm.gainItem(2044901)
                                } else if (randA == 27) {
                                        cm.gainItem(2044904)
                                } else if (randA == 28) {
                                        cm.gainItem(2049100)
                                } else if (randA == 29) {
                                        cm.gainItem(2049003)
                                } else if (randA == 30) {
                                        cm.gainItem(2040626)
                                } else if (randA == 31) {
                                        cm.gainItem(2040625)
                                }
                                cm.warp(100000000, 0);
                                cm.dispose();
                } else {
                cm.sendOk ("Superb! Your free to test your luck again :P!");
                cm.dispose();
        }
}
