                            var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
            
    if (mode == -1) {//ExitChat
        cm.dispose();}
    
    else if (mode == 0){//No
        cm.sendOk("I can understand your choice #b#h ##k. If you have a change of heart or need to more time for the items come see me again.");
        cm.dispose();}
    
    else{            //Regular Talk
     
        if (mode == 1)
            status++;
        else
            status--;
     
        if (status == 0) {//First talk
            cm.sendYesNo("#b#h ##k, if you wish, I can show you the door to a new path, or you can be content with yourself as you are.\r\nThe choice is up to you...");
        }
        else if (status == 1) { //checks level and gives ok
            if (cm.getChar().getLevel() < 200){
                cm.sendOk("Sorry, You have to be level 200 to choose a new path.");
                cm.dispose();
            }
            else {//gives item list and does next
                cm.sendYesNo("I'm glad you have made the choice to better yourself. I will have to use the most secret magic known to  Maple. So secret, that not even Old Grendel can comprehend. The spell is called  Rebirth. It only works if you are level 200. I will need a few ingredients and pieces of equipment to prepare the spell for use. They are: \r\n#i[1122000]# #bHorntail's Necklace#k equipped\r\n#i[4000245]# #b50 Dragon scales#k\r\n#i[4000244]# #b50 Dragon Spirits#k\r\n#i[4021009]# #b5 Star Rock#k\r\n#i[4011007]# #b5 Moon Rock#k\r\n#i[4011008]# #b5 Lidium#k\r\nHave you brought the items I requested?");
            }
        }else if (status == 2) {//item check 1 (Horntails Necklace)
            if (cm.haveItem([1122000]) >= 1){
                cm.sendOk("Sorry, You don't have the items to for the spell to work.");
                cm.dispose();
            }else{
                cm.sendOk("I see you have #i[1122000]# Horntail's Necklace! That must have been quite a challenge");
            }
        }else if (status == 3) {//item check 2 (Dragon Spirits)
            if (cm.haveItem([4000244]) >= 50){
                cm.sendOk("Sorry, You don't have the items to for the spell to work.");
                cm.dispose();
            }else{
                cm.sendOk("I see you have the rare #i[4000244]# Dragon Spirits as well which is also amazing!!!");
            }
        }else if (status == 4) {//item check 3 (Dragon Scales)
            if (cm.haveItem([4000245]) >= 50){
                cm.sendOk("Sorry, You don't have the items to for the spell to work.");
                cm.dispose();
            }else{
                cm.sendOk("Im checking for your #i[4000245]# Scales...\r\nYes you have #i[4000245]# Dragons Scales almost finished with the Formula!!!");
            }
        }else if (status == 5) {//item check 4 (Moon Rocks)
            if  (cm.haveItem([4011007]) >= 5){
                cm.sendOk("Sorry, You don't have the items to for the spell to work.");
                cm.dispose();
            }else{
                cm.sendOk("Can you set your #i[4011007]# Moon Rocks to the right please.");
            }
        }else if (status == 6) {//item check 5  (Lidium)
            if  (cm.haveItem([4011008]) >= 5){
                cm.sendOk("Sorry, You don't have the items to for the spell to work.");
                cm.dispose();
            }else{
                cm.sendOk("Now let me see the #i[4011008]# Lidium");
            }
        }else if (status == 7) {//item check 6 (Star Rocks)
            if (cm.haveItem([4021009]) >= 5){
                cm.sendOk("Sorry, You  don't have the items to for the spell to work.");
                cm.dispose();   
            }else{
                cm.sendOk("Just to make sure can you place the #i[4021009]# Star Rocks opposite the #i[4011007]# Moon Rocks.");
            }
        }else if (status == 8) {
            cm.sendOk("You have come far great warrior,and you have collected the items for the spell. Now I can cast it for you, but please make sure your inventory has enough space, the spell unequips your armor and if it can't you will never be reborn.");
        
        }
    }if (status == 9) {
    cm.sendOk("You have been reborn! Good luck on your next journey! Maybe we will meet again.\r\n#bPlease change Channels now!#k");
    cm.doReborn();
    cm.dispose();
    }            
}  