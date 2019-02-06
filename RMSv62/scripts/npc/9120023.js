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
            cm.sendSimple("#eYou currently have "+ cm.getPlayer().getvotingpoints() + " #rvoting points#k. You could trade in #ryour voting points #kfor some goods or save them up and trade later.#l \r\nHere are your options: \r\n#L189# I would like to trade 2 #bVoting Points#k for #v5220010##l \r\n#L0# I would like to trade #bVoting Points#k for #v2049100#'s#l \r\n#L1# I would like to trade #bVoting Points#k for Swords#l \r\n#L100# I would like to trade #bVoting Points#k for Noob Chairs#l \r\n#L110# I would like to trade #bVoting Points#k for Pro Chairs#l \r\n#L120# I would like to trade #bVoting Points#k for GM Scrolls#l \r\n#L50# I would like to learn more about #bVoting Points#k#l \r\n#L51# I would like to learn more about the #bPrizes!#k#l");
       	}else{
            cm.sendSimple("#eYou currently have "+ cm.getPlayer().getvotingpoints() + " #rvoting points#k. You could trade in #ryour voting points #kfor some goods or save them up and trade later.#l \r\nHere are your options: \r\n#L0# I would like to trade #bVoting Points#k for #v2049100#'s#l \r\n#L1# I would like to trade #bVoting Points#k for #v1302081#'s#l");
	cm.dispose();
        }


} else if (status == 1) {
            if (selection == 0) {
                            cm.sendSimple("#eDid you vote on the site and get a #rvoting point#k? You could trade in #ryour voting points #kfor some goods or save them up and trade later.#l \r\nHere are your options: \r\n#L2# I would like to trade 2 #bVoting Points#k for 5 #v2049100##l \r\n#L3# I would like to trade 5 #bVoting Point#k for 15 #v2049100##l");
            } else if (selection == 1) {
                            cm.sendSimple("#eDid you vote on the site and get a #rvoting point#k? You could trade in #ryour voting points #kfor some goods or save them up and trade later.#l \r\nHere are your options: \r\n#L5# I would like to trade 35 #bVoting Point#k for a #v1302062##l \r\n#L6# I would like to trade 35 #bVoting Point#k for a #v1302024##l");
            } else if (selection == 50) {
                cm.sendOk("#eHow do you earn points?#l \r\n-Just go on the site http://RadianceMS.no-ip.org and vote.#l \r\n-Then after voting use @getpoints to recieve your voting points ingame.#l \r\n-Spend all the voting points you can get!");
       } else if (selection == 51) {
                cm.sendOk("#e#v1302062# - 175 Att#l \r\n #v1302024# - 175 Att#l");
                    } else if (selection == 100) {
                            cm.sendSimple("#eDid you vote on the site and get a #rvoting point#k? You could trade in #ryour voting points #kfor some goods or save them up and trade later.#l \r\nHere are your options: \r\n#L101# I would like to trade 10 #bVoting Point#k for a #v3010045##l  \r\n#L102# I would like to trade 10 #bVoting Point#k for a #v3010060##l \r\n#L103# I would like to trade 10 #bVoting Point#k for a #v3010064##l \r\n#L104# I would like to trade 10 #bVoting Point#k for a #v3010017##l \r\n#L105# I would like to trade 10 #bVoting Point#k for a #v3010016##l \r\n#L106# I would like to trade 10 #bVoting Point#k for a #v3012005##l \r\n#L107# I would like to trade 10 #bVoting Point#k for a #v3010098##l");
} else if (selection == 110) {
                            cm.sendSimple("#eDid you vote on the site and get a #rvoting point#k? You could trade in #ryour voting points #kfor some goods or save them up and trade later.#l \r\nHere are your options: \r\n#L111# I would like to trade 20 #bVoting Point#k for a #v3010085##l  \r\n#L112# I would like to trade 20 #bVoting Point#k for a #v3010043##l \r\n#L113# I would like to trade 20 #bVoting Point#k for a #v3010057##l \r\n#L114# I would like to trade 25 #bVoting Point#k for a #v3010046##l \r\n#L115# I would like to trade 25 #bVoting Point#k for a #v3010047##l");
} else if (selection == 120) {
    cm.sendSimple("#eDid you vote on the site and get a #rvoting point#k? You could trade in #ryour voting points #kfor some goods or save them up and trade later.#l \r\nHere are your options: \r\n#L121# I would like to trade a #bVoting Point#k for a #v2040603##l  \r\n#L122# I would like to trade a #bVoting Point#k for a #v2044503##l \r\n#L123# I would like to trade a #bVoting Point#k for a #v2041024##l \r\n#L124# I would like to trade a #bVoting Point#k for a #v2041025##l \r\n#L125# I would like to trade a #bVoting Point#k for a #v2044703##l\r\n#L150# I would like to trade a #bVoting Point#k for a #v2044603##l\r\n#L126# I would like to trade a #bVoting Point#k for a #v2043303##l\r\n#L127# I would like to trade a #bVoting Point#k for a #v2040807##l\r\n#L129# I would like to trade a #bVoting Point#k for a #v2040806##l\r\n#L130# I would like to trade a #bVoting Point#k for a #v2040007##l\r\n#L131# I would like to trade a #bVoting Point#k for a #v2043103##l\r\n#L132# I would like to trade a #bVoting Point#k for a #v2043203##l\r\n#L133# I would like to trade a #bVoting Point#k for a #v2043003##l\r\n#L134# I would like to trade a #bVoting Point#k for a #v2040506##l\r\n#L135# I would like to trade a #bVoting Point#k for a #v2044403##l\r\n#L136# I would like to trade a #bVoting Point#k for a #v2040903##l\r\n#L137# I would like to trade a #bVoting Point#k for a #v2040709##l\r\n#L138# I would like to trade a #bVoting Point#k for a #v2040710##l\r\n#L139# I would like to trade a #bVoting Point#k for a #v2040711##l\r\n#L140# I would like to trade a #bVoting Point#k for a #v2044303##l\r\n#L141# I would like to trade a #bVoting Point#k for a #v2043803##l\r\n#L142# I would like to trade a #bVoting Point#k for a #v2040403##l\r\n#L143# I would like to trade a #bVoting Point#k for a #v2044103##l\r\n#L144# I would like to trade a #bVoting Point#k for a #v2044203##l\r\n#L145# I would like to trade a #bVoting Point#k for a #v2044003##l\r\n#L146# I would like to trade a #bVoting Point#k for a #v2043703##l");
}    else if (selection == 189) {
                if (cm.getvotingpoints() > 1) {
                    cm.gainvotingpoints(-2);
                    cm.gainItem(5220010, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();

           }

}
}
    

else if (status == 2) {
            if (selection == 2) {
                if (cm.getvotingpoints() > 1) {
                    cm.gainvotingpoints(-2);
                    cm.gainItem(2049100, 5);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();

           }
            }
                   else if (selection == 3) {
                if (cm.getvotingpoints() > 4) {
                    cm.gainvotingpoints(-5);
                    cm.gainItem(2049100, 15);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }

                   }       else if (selection == 5) {
                if (cm.getvotingpoints() > 34) {
                    cm.gainvotingpoints(-35);
                    cm.gainItem(1302062, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
           }       else if (selection == 6) {
                if (cm.getvotingpoints() > 34) {
                    cm.gainvotingpoints(-35);
                    cm.gainItem(1302024, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
           }   else if (selection == 101) {
                if (cm.getvotingpoints() > 9) {
                    cm.gainvotingpoints(-10);
                    cm.gainItem(3010045, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
           }   else if (selection == 102) {
                if (cm.getvotingpoints() > 9) {
                    cm.gainvotingpoints(-10);
                    cm.gainItem(3010060, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
                      }   else if (selection == 103) {
                if (cm.getvotingpoints() > 9) {
                    cm.gainvotingpoints(-10);
                    cm.gainItem(3010064, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
                                 }   else if (selection == 104) {
                if (cm.getvotingpoints() > 9) {
                    cm.gainvotingpoints(-10);
                    cm.gainItem(3010017, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
                                            }   else if (selection == 105) {
                if (cm.getvotingpoints() > 9) {
                    cm.gainvotingpoints(-10);
                    cm.gainItem(3010016, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
                                            }   else if (selection == 106) {
                if (cm.getvotingpoints() > 9) {
                    cm.gainvotingpoints(-10);
                    cm.gainItem(3012005, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
    }   else if (selection == 107) {
                if (cm.getvotingpoints() > 9) {
                    cm.gainvotingpoints(-10);
                    cm.gainItem(3010098, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }

               }   else if (selection == 111) {
                if (cm.getvotingpoints() > 19) {
                    cm.gainvotingpoints(-20);
                    cm.gainItem(3010085, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }

                          }   else if (selection == 112) {
                if (cm.getvotingpoints() > 19) {
                    cm.gainvotingpoints(-20);
                    cm.gainItem(3010043, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
               }   else if (selection == 113) {
                if (cm.getvotingpoints() > 19) {
                    cm.gainvotingpoints(-20);
                    cm.gainItem(3010057, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
                          }   else if (selection == 114) {
                if (cm.getvotingpoints() > 24) {
                    cm.gainvotingpoints(-25);
                    cm.gainItem(3010046, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 115) {
                if (cm.getvotingpoints() > 24) {
                    cm.gainvotingpoints(-25);
                    cm.gainItem(3010047, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 121) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040603, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 122) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2044503, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 123) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2041024, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 124) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2041025, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 125) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2044703, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 126) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2043303, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 127) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040807, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 150) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2044603, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 129) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040806, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 130) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040007, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 131) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2043103, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 132) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2043203, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 133) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2043003, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 134) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040506, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           } }   else if (selection == 135) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2044403, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 136) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040903, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           } }   else if (selection == 137) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040709, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 138) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040710, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 139) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040711, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 140) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2044303, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 141) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2043803, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 142) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2040403, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 143) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2044103, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           } }   else if (selection == 144) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2044203, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 145) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2044003, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 }   else if (selection == 146) {
                if (cm.getvotingpoints() > 0) {
                    cm.gainvotingpoints(-1);
                    cm.gainItem(2043703, 1);
                    cm.sendOk("#eThank you for your #bVote points!#k!");
           } else {
                    cm.sendOk("#eSorry, you don't have enough #rVoting Points#k!");
                    cm.dispose();
           }
 
                    }
}
        }
}


   
  


    

  