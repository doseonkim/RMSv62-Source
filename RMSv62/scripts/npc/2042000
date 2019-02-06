var status = 0;   

function start() {   
    status = -1;   
    action(1, 0, 0);   
}   

function action(mode, type, selection) {   
        
    if (mode == -1) {   
        cm.dispose();   
    }   
    else {    
        if (status >= 2 && mode == 0) {    
            cm.sendOk("Goodbye");    
            cm.dispose();    
            return;    
        }    
           
        if (mode == 1) {   
            status++;   
        }       
        else {   
            status--;   
        }   
           
        if (status == 0) {  
            cm.sendNext("Hey, I can give you a SPECIAL lvl 200 RING!"); 
        } 
        else if (status == 1) { 
            if (cm.getLevel() >= 200) {
                cm.sendSimple("All I need is 1 TROPHY dropped by Red Slimes. Do you have a TROPHY?\r\n#L0#Yes#l\r\n#L1#No#l"); 
            } 
        }
        else if (status == 2) {
            if (selection == 0) { 
                cm.sendOk("Congratulation, #h # Here is yoru special lvl 200 ring"); 
                cm.gainItem(1112000); 
                cm.dispose(); 
            } 
            else if (selection == 1) { 
                cm.sendOk("See you later"); 
                cm.dispose(); 
            }   
            else { 
                cm.sendOk("Lol, you either dont have a TROPHY or your not lvl 200 yet. You can warp to the red slime map via Malady who is located in FM"); 
                cm.dispose(); 
            }
        } 
    }
}
