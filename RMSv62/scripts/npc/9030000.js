importPackage(net.sf.odinms.server);
var status = 0;
var text = "";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
             cm.sendSimple("I'm fredrick. You can pick up your Hired Merchant's item's or mesos here.\r\n#b#L0#Pick up mesos#l\r\n#L1#Pick up items#l");
        } else if (status == 1) {
            switch(selection) {
              case 0:
                if (cm.getHiredMerchantMesos() > 0) {
                      setid = 0;
                      cm.sendYesNo(" You have made #r" + cm.getHiredMerchantMesos() + "#k in your merchant. Would you like to take them out?");
                } else {
                      cm.sendOk("You either don't have a Hired Merchant or you do not have any mesos stored.");
                      cm.dispose();
                }
              break;
              case 1:
                      setid = 1;
                if (cm.getHiredMerchantItems().size() > 0) {
                      var text = "????????????????? : \r\n";
                      for (var i = 0; i < cm.getHiredMerchantItems().size(); i++) {
                            text += "#b#L"+i+"##t"+cm.getHiredMerchantItems().get(i).getRight().getItemId()+"##l\r\n";
                      }
                      cm.sendSimple(text);
                } else {
                      cm.sendOk("You either don't have a Hired Merchant or you do not have any items stored here.");
                      cm.dispose();
                }
              break;
              case 2:
                  setid = 2;
                  cm.sendGetText("1?#e#b500#n#k?????????????????????");
              break;
              case 3:
                  setid = 3;
                  cm.sendGetText("1LV~50LV?????????????? #e#b 1 #n#k????50LV~70LV??????????????#e#b 2 #n#k??????????");
              break;
              case 4:
                  cm.openShop(1330);
                      cm.dispose();
              break;
              case 5:
                  cm.openShop(1332);
                      cm.dispose();
              break;
            }
        } else if (status == 2) {

            switch (setid) {

              case 0:
                cm.sendOk("Your mesos that were stored in your merchant were succesfully recived.");
                cm.gainMeso(cm.getHiredMerchantMesos());
                cm.zeroMerchantMesos();
                cm.dispose();
                //return;
              break;
              case 1:
            	MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), cm.getHiredMerchantItems().get(selection).getRight(), true);
                cm.sendOk("Your items that were stores in your Hired Merchant were succesfully recived.");
                cm.removeHiredMerchantItem(cm.getHiredMerchantItems().get(selection).getLeft());
                cm.dispose();
              break;
              case 2:
                  buyquarity = cm.getText();
                  if (cm.getMeso() >= (buyquarity * 500)) {
                      cm.sendYesNo(buyquarity + "????????????");
                  } else {
                      cm.sendOk("???????????????????????");
                      cm.dispose();
                  }
              break;
              case 3:
                openid = cm.getText();
                if (openid == 1) {
                    setshop = 1300;
                } else if (openid == 2) {
                    setshop = 1301;
                } else {
                      cm.sendOk("??????????????????????");
                      status == 1;
                      cm.dispose();
                      break;
                }
                cm.openShop(setshop);
              break;

            }

        } else if (status == 3) {
            cm.gainItem(5390002, buyquarity);
            cm.gainMeso(-(buyquarity * 500));
            cm.sendOk("????????????????????????????????????????????????????????");
            cm.dispose();
        }
    }
}
