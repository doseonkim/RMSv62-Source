/*
@    Author : Snow
@
@    NPC = NAME
@    Map =  MAP
@    NPC MapId = MAPID
@    Function = Rebirth Player
@
*/
//Some credits to xazerrx of RaGeZone for adding ap reset

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("Ok, talk to me when you're sure you want to be #bReborn#k.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("#e#bWow #h ##k! You're level 200 already? \r\n\r\nWould you like to start the #rRebirth PQ#k?");
        }else if (status == 1) {
        if(cm.getChar().getLevel() < 200){
        cm.sendOk("#eWoah! You lieing to me? You have to be level 200!");
        cm.dispose();
        }else{
        cm.warp(910000007, 0);
        cm.sendOk("#e#bHave fun!#k");
        }  
        }            
          }
     }