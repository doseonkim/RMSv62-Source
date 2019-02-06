/*
@author Jvlaple
*Aturo gives you a random item :D
*/
var status = 0;
var prizeIdScroll = Array(2040603,2044503,2041024,2041025,
2044703,2044603,2043303,2040807,
2040806,2040006, 2040007, 2043103,
2043203,2043003, 2040506, 2044403,
2040903,2040709, 2040710, 2040710,
2040711,2044303, 2043803, 2040403,
2044103,2044203, 2044003, 2043703, 2049100, 2049100);						// Helmet, Topwear and Bottomwear for DEF			// Elixir, Pure Water and Unagi

var prizeIdMount = Array(2384009, 2383001);

var prizeIdEquip = Array(1442023, 1442023);

var prizeIdStar = Array(2070018, 2070018);

var prizeIdChair = Array(3010045, 3010060, 3010064, 3010017, 3010016, 3012005, 3012005, 3010098);

var prizeIdEtc = Array(4031039, 4001063);						// Diamond and Black Crystal Ores and Screws
var prizeQtyEtc = Array(5, 35);

var PQItems = new Array(4001022, 4001023);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else { 
		  if (status >= 2 && mode == 0) { 
		   cm.dispose(); 
		   return; 
		} 
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			//cm.warp(220000000,0);
			cm.sendNext("Wow, you made it! Heres a reward for your job. Well done!");
        } else if (status == 1) {
			for (var i = 0; i < PQItems.length; i++) {
				cm.removeAll(PQItems[i]); // Remove All PQ Items :D
    var itemSetSel = Math.random();
    var itemSet;
    var itemSetQty;
    var hasQty = false;

  if (itemSetSel < 0.005)
        itemSet = prizeIdEquip;
      else if (itemSetSel < 0.025)
        itemSet = prizeIdMount;
       else if (itemSetSel < 0.05)
        itemSet = prizeIdChair;
     else if  (itemSetSel < 0.10 )
        itemSet = prizeIdScroll; 
    else if (itemSetSel < 0.25)
        itemSet = prizeIdStar;
                        
        
  else {
        itemSet = prizeIdEtc;
        itemSetQty = prizeQtyEtc;
        hasQty = true;
    }
    var sel = Math.floor(Math.random()*itemSet.length);
    var qty = 1;
    if (hasQty)

        qty = itemSetQty[sel];
        if (cm.gainItem(itemSet[sel], qty)) {
        cm.warp(221024500, 0);
        cm.getPlayer().changeMap(map, map.getPortal("sp"));
    }
}
                        }
                
                }
}
