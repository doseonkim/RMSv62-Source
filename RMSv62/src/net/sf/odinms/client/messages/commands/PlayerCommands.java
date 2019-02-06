package net.sf.odinms.client.messages.commands;

import com.mysql.jdbc.PreparedStatement;
import java.rmi.RemoteException;
import java.sql.Connection;
import java.sql.ResultSet;
import net.sf.odinms.client.IItem;
import net.sf.odinms.client.Item;
import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleInventoryType;
import net.sf.odinms.net.world.remote.WorldChannelInterface;
import net.sf.odinms.client.MapleStat;
import net.sf.odinms.client.messages.Command;
import net.sf.odinms.client.messages.CommandProcessor;
import net.sf.odinms.client.messages.CommandDefinition;
import net.sf.odinms.client.messages.MessageCallback;
import net.sf.odinms.database.DatabaseConnection;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.scripting.npc.NPCScriptManager;
import net.sf.odinms.server.MapleItemInformationProvider;
import net.sf.odinms.server.MapleShopFactory;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.StringUtil;



public class PlayerCommands implements Command {

    @Override
    public void execute(MapleClient c, MessageCallback mc, String[] splitted) throws Exception {
        splitted[0] = splitted[0].toLowerCase();
        MapleCharacter player = c.getPlayer();
        if (splitted[0].equals("@command") || splitted[0].equals("@commands") || splitted[0].equals("@help")) {
            mc.dropMessage("================================================================");
            mc.dropMessage("                  " + c.getChannelServer().getServerName() + " Commands");
            mc.dropMessage("================================================================");
            mc.dropMessage("@checkstat - | - Displays your stats.");
            mc.dropMessage("@save - | - Saves your progress.");
            mc.dropMessage("@expfix - | - Fixes your negative experience.");
            mc.dropMessage("@dispose - | - Unstucks you.");
            mc.dropMessage("@emo - | - Sets your HP zero.");
            mc.dropMessage("@rebirth - | - Resets your HP/MP and sets your level to 1 to be stronger.");
            mc.dropMessage("@togglesmega - | - Turn smegas OFF/ON.");
            mc.dropMessage("@str/@dex/@int/@luk <number> - | - Automatically add AP to your stats.");
            mc.dropMessage("@gm <message> - | - Sends a message to the GM's online.");
            mc.dropMessage("@revive - | - Revives anyone on the channel besides yourself.");
            mc.dropMessage("@afk - | - Shows how long a perosn has been AFK.");
            mc.dropMessage("@onlinetime - | - Shows how long a person has been online.");
            mc.dropMessage("@joinevent - | - Warps you to event map when an event is opened.");
            if (player.getClient().getChannelServer().extraCommands()) {
                mc.dropMessage("@cody/@storage/@kin/@nimakin/@fredrick/@spinel/@clan/@perry");
                mc.dropMessage("@goafk - | - Uses a CB to say that you are AFK.");
                mc.dropMessage("@go - | - Takes you to many towns and fighting areas.");
                mc.dropMessage("@buynx - | - You can purchase NX with this command.");
                mc.dropMessage("@votepoints - | - See how many vote points you have!");
                mc.dropMessage("@getpoints - | - After voting on the site for Gtop, using this will get you a voting point!");
                mc.dropMessage("@getpoints1 - | - After voting on the site for Ultimate top, using this will get you a voting point!");
                mc.dropMessage("@allinone - | - Opens a allinone shop!");
                mc.dropMessage("@pots - | - Opens a pot shop!");
                mc.dropMessage("@recharge - | - Recharges all stars!");


            }

                    } else if (splitted[0].equals("@pots")) {
            MapleShopFactory.getInstance().getShop(209).sendShop(c);

            } else if (splitted[0].equals("@checkstats")) {
            mc.dropMessage("Your stats are:");
            mc.dropMessage("Str: " + player.getStr());
            mc.dropMessage("Dex: " + player.getDex());
            mc.dropMessage("Int: " + player.getInt());
            mc.dropMessage("Luk: " + player.getLuk());
            mc.dropMessage("Available AP: " + player.getRemainingAp());
            mc.dropMessage("Rebirths: " + player.getReborns());
        } else if (splitted[0].equals("@save")) {
            if (!player.getCheatTracker().Spam(900000, 0)) { // 15 minutes
                player.saveToDB(true, true);
                mc.dropMessage("Saved.");
            } else {
                mc.dropMessage("You cannot save more than once every 15 minutes.");
            }
        } else if (splitted[0].equals("@expfix")) {
            player.setExp(0);
            player.updateSingleStat(MapleStat.EXP, player.getExp());
        } else if (splitted[0].equals("@dispose")) {
            NPCScriptManager.getInstance().dispose(c);
            mc.dropMessage("You have been disposed.");
        } else if (splitted[0].equals("@emo")) {
            if (player.getMapId() == 980000404 || player.getMapId() == 980000010 || player.getMapId() >= 922010000 && player.getMapId() <= 922011100 || player.getMapId() >= 103000800 && player.getMapId() <= 103000890 ){
          mc.dropMessage("This command has been block from this map.");
}else{
            player.setHp(0);
            player.updateSingleStat(MapleStat.HP, 0);
}
        } else if (splitted[0].equals("@rebirth") || splitted[0].equals("@reborn")) {
            if (player.getLevel() >= 200) {
                player.doReborn();
            } else {
                mc.dropMessage("You must be at least level 200.");
            }
                    } else if (splitted[0].equals("@rebirthw")) {
            if (player.getLevel() >= 200) {
                player.doRebornW();
            } else {
                mc.dropMessage("You must be at least level 200.");
            }

                                } else if (splitted[0].equals("@rebirthm")) {
            if (player.getLevel() >= 200) {
                player.doRebornM();
            } else {
                mc.dropMessage("You must be at least level 200.");
            }
                                } else if (splitted[0].equals("@rebirtha")) {
            if (player.getLevel() >= 200) {
                player.doRebornA();
            } else {
                mc.dropMessage("You must be at least level 200.");
            }
                                } else if (splitted[0].equals("@rebirtht")) {
            if (player.getLevel() >= 200) {
                player.doRebornT();
            } else {
                mc.dropMessage("You must be at least level 200.");
            }
                                } else if (splitted[0].equals("@rebirthp")) {
            if (player.getLevel() >= 200) {
                player.doRebornP();
            } else {
                mc.dropMessage("You must be at least level 200.");
            }
                                   } else if (splitted[0].equals("@recharge")) {
			MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
			for (IItem stars : c.getPlayer().getInventory(MapleInventoryType.USE) .list()) {
			if (ii.isThrowingStar(stars.getItemId())){
			stars.setQuantity(ii.getSlotMax(c, stars.getItemId()) );
			c.getSession().write(MaplePacketCreator.updateInventorySlot(MapleInventoryType.USE, (Item) stars));
			}
			mc.dropMessage("Everything has been Recharged.");
				}




        } else if (splitted[0].equals("@togglesmega")) {
            if (player.getMeso() >= 10000000) {
                player.setSmegaEnabled(!player.getSmegaEnabled());
                String text = (!player.getSmegaEnabled() ? "[Disable] Smegas are now disable." : "[Enable] Smegas are now enable.");
                mc.dropMessage(text);
                player.gainMeso(-10000000, true);
            } else {
                mc.dropMessage("You need 10,000,000 mesos to toggle smegas.");
            }
        } else if (splitted[0].equals("@str") || splitted[0].equals("@dex") || splitted[0].equals("@int") || splitted[0].equals("@luk") || splitted[0].equals("@hp") || splitted[0].equals("@mp")) {
            if (splitted.length != 2) {
                mc.dropMessage("Syntax: @<Stat> <amount>");
                mc.dropMessage("Stat: <STR> <DEX> <INT> <LUK> <HP> <MP>");
                return;
            }
        if (splitted[0].equals("@str") || splitted[0].equals("@int") || splitted[0].equals("@luk") || splitted[0].equals("@dex")) {

                        int amount = Integer.parseInt(splitted[1]);
                        boolean str = splitted[0].equals("@str");
                        boolean Int = splitted[0].equals("@int");
                        boolean luk = splitted[0].equals("@luk");
                        boolean dex = splitted[0].equals("@dex");

                        if (amount > 0 && amount <= player.getRemainingAp() && amount <= 32000 || amount < 0 && amount >= -32763 && Math.abs(amount) + player.getRemainingAp() <= 32000) {
                                if (str && amount + player.getStr() <= 32000 && amount + player.getStr() >= 4) {
                                        player.setStr(player.getStr() + amount);
                                        player.updateSingleStat(MapleStat.STR, player.getStr());
                                        player.setRemainingAp(player.getRemainingAp() - amount);
                                        player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
                                } else if (Int && amount + player.getInt() <= 32000 && amount + player.getInt() >= 4) {
                                        player.setInt(player.getInt() + amount);
                                        player.updateSingleStat(MapleStat.INT, player.getInt());
                                        player.setRemainingAp(player.getRemainingAp() - amount);
                                        player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
                                } else if (luk && amount + player.getLuk() <= 32000 && amount + player.getLuk() >= 4) {
                                        player.setLuk(player.getLuk() + amount);
                                        player.updateSingleStat(MapleStat.LUK, player.getLuk());
                                        player.setRemainingAp(player.getRemainingAp() - amount);
                                        player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
                                } else if (dex && amount + player.getDex() <= 32000 && amount + player.getDex() >= 4) {
                                        player.setDex(player.getDex() + amount);
                                        player.updateSingleStat(MapleStat.DEX, player.getDex());
                                        player.setRemainingAp(player.getRemainingAp() - amount);
                                        player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
                                } else {
                                        mc.dropMessage("Please make sure the stat you are trying to raise is not over 32000 or under 4.");
                                }
                        } else {
                                mc.dropMessage("Please make sure your AP is not over 32000 and you have enough to distribute.");
                        }
                }

        } else if (splitted[0].equals("@gm")) {
            if (splitted.length < 2) {
                return;
            }
            if (!player.getCheatTracker().Spam(300000, 1)) { // 5 minutes.
                try {
                    c.getChannelServer().getWorldInterface().broadcastGMMessage(null, MaplePacketCreator.serverNotice(6, "Channel: " + c.getChannel() + "  " + player.getName() + ": " + StringUtil.joinStringFrom(splitted, 1)).getBytes());
                } catch (RemoteException ex) {
                    c.getChannelServer().reconnectWorld();
                }
                mc.dropMessage("Message sent.");
            }

            } else if (splitted[0].equals("@top")) {
ResultSet rs = ranks();
try {
mc.dropMessage("Top 10 Players");
while (rs.next()) {
 mc.dropMessage("Player : " + rs.getString("name") +  "    |   Reborns :" + rs.getInt("reborns") +  "  |  Level :  " + rs.getString("level"));
}
} catch (Exception ex) {
}
player.saveToDB(true, true);


        } else if (splitted[0].equals("@joinevent")) {
             if (player.getMapId() == 980000404 || player.getMapId() == 980000010 || player.getMapId() >= 922010000 && player.getMapId() <= 922011100 || player.getMapId() >= 103000800 && player.getMapId() <= 103000890 ){
          mc.dropMessage("This command has been block from this map.");
}else{
            if (player.getClient().getChannelServer().eventOn == true) {
                  player.changeMap(player.getClient().getChannelServer().eventMap, 0);

            } else {
                mc.dropMessage("There's no event to warp you to.");
            }
}

    } else if (splitted[0].equals("@revive")) {
            if (splitted.length == 2) {
                MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
                if (player != victim) {
                    if (player.getMeso() >= 50000000) { // 50 mil
                        if (victim != null) {
                            if (!victim.isAlive()) {
                                victim.setHp((victim.getMaxHp() / 2));
                                player.gainMeso(-50000000);
                                victim.updateSingleStat(MapleStat.HP, (victim.getMaxHp() / 2));
                                mc.dropMessage("You have revived " + victim.getName() + ".");
                            } else {
                                mc.dropMessage(victim.getName() + " is not dead.");
                            }
                        } else {
                            mc.dropMessage("The player is not online.");
                        }
                    } else {
                        mc.dropMessage("You need 50 million mesos to do this.");
                    }
                } else {
                    mc.dropMessage("You can't revive yourself.");
                }
            } else {
                mc.dropMessage("Syntax: @revive <player name>");
            }

            } else if (splitted[0].equals("@votepoints")) {
             player.dropMessage("Hello " + c.getPlayer().getName() + ", you currently have : " + c.getPlayer().getvotingpoints() + " votingpoints~");

            } else if (splitted[0].equals("@getpoints")) {
                    java.sql.Connection con = DatabaseConnection.getConnection();
                    PreparedStatement ps = (PreparedStatement) con.prepareStatement("SELECT * FROM voterewards WHERE name = ?");
                    ps.setString(1, c.getAccountName());
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()){
                       player.gain1votingpoint();
                       mc.dropMessage("You have gained 1 votepoint");
                    } else {
                        mc.dropMessage("You dont seem to have any claim left");
                    }
                    rs.close();
                    ps.close();
                    PreparedStatement pse = (PreparedStatement) con.prepareStatement("DELETE FROM voterewards WHERE name = ?");
                    pse.setString(1, c.getAccountName());
                    pse.executeUpdate();
                    pse.close();

                     } else if (splitted[0].equals("@getpoints1")) {
                    java.sql.Connection con = DatabaseConnection.getConnection();
                    PreparedStatement ps = (PreparedStatement) con.prepareStatement("SELECT * FROM voterewards1 WHERE name = ?");
                    ps.setString(1, c.getAccountName());
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()){
                       player.gain1votingpoint();
                       mc.dropMessage("You have gained 1 votepoint");
                    } else {
                        mc.dropMessage("You dont seem to have any claim left");
                    }
                    rs.close();
                    ps.close();
                    PreparedStatement pse = (PreparedStatement) con.prepareStatement("DELETE FROM voterewards1 WHERE name = ?");
                    pse.setString(1, c.getAccountName());
                    pse.executeUpdate();
                    pse.close();

        } else if (splitted[0].equals("@afk")) {
            if (splitted.length >= 2) {
                String name = splitted[1];
                MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(name);
                if (victim == null) {
                    try {
                        WorldChannelInterface wci = c.getChannelServer().getWorldInterface();
                        int channel = wci.find(name);
                        if (channel == -1 || victim.isGM()) {
                            mc.dropMessage("This player is not online.");
                            return;
                        }
                        victim = ChannelServer.getInstance(channel).getPlayerStorage().getCharacterByName(name);
                    } catch (RemoteException re) {
                        c.getChannelServer().reconnectWorld();
                    }
                }
                long blahblah = System.currentTimeMillis() - victim.getAfkTime();
                if (Math.floor(blahblah / 60000) == 0) { // less than a minute
                    mc.dropMessage("Player has not been afk!");
                } else {
                    StringBuilder sb = new StringBuilder();
                    sb.append(victim.getName());
                    sb.append(" has been afk for");
                    compareTime(sb, blahblah);
                    mc.dropMessage(sb.toString());
                }
            } else {
                mc.dropMessage("Incorrect Syntax.");
            }
                    } else if (splitted[0].equals("@onlinetime")) {
            if (splitted.length >= 2) {
                String name = splitted[1];
                MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(name);
                if (victim == null) {
                    try {
                        WorldChannelInterface wci = c.getChannelServer().getWorldInterface();
                        int channel = wci.find(name);
                        if (channel == -1 || victim.isGM()) {
                            mc.dropMessage("This player is not online.");
                            return;
                        }
                        victim = ChannelServer.getInstance(channel).getPlayerStorage().getCharacterByName(name);
                    } catch (RemoteException re) {
                        c.getChannelServer().reconnectWorld();
                    }
                }
                long blahblah = System.currentTimeMillis() - victim.getLastLogin();
                StringBuilder sb = new StringBuilder();
                sb.append(victim.getName());
                sb.append(" has been online for");
                compareTime(sb, blahblah);
                mc.dropMessage(sb.toString());
            } else {
                mc.dropMessage("Incorrect Syntax.");
            }
        }
    }

    private void compareTime(StringBuilder sb, long timeDiff) {
        double secondsAway = timeDiff / 1000;
        double minutesAway = 0;
        double hoursAway = 0;

        while (secondsAway > 60) {
            minutesAway++;
            secondsAway -= 60;
        }
        while (minutesAway > 60) {
            hoursAway++;
            minutesAway -= 60;
        }
        boolean hours = false;
        boolean minutes = false;
        if (hoursAway > 0) {
            sb.append(" ");
            sb.append((int) hoursAway);
            sb.append(" hours");
            hours = true;
        }
        if (minutesAway > 0) {
            if (hours) {
                sb.append(" -");
            }
            sb.append(" ");
            sb.append((int) minutesAway);
            sb.append(" minutes");
            minutes = true;
        }
        if (secondsAway > 0) {
            if (minutes) {
                sb.append(" and");
            }
            sb.append(" ");
            sb.append((int) secondsAway);
            sb.append(" seconds !");
        }
    }

    @Override
    public CommandDefinition[] getDefinition() {
        return new CommandDefinition[]{
            new CommandDefinition("command", 0),
            new CommandDefinition("commands", 0),
            new CommandDefinition("help", 0),
            new CommandDefinition("pots", 0),
            new CommandDefinition("checkstats", 0),
            new CommandDefinition("save", 0),
            new CommandDefinition("merchant", 0),
            new CommandDefinition("expfix", 0),
            new CommandDefinition("dispose", 0),
            new CommandDefinition("joinevent", 0),
            new CommandDefinition("emo", 0),
            new CommandDefinition("rebirth", 0),
            new CommandDefinition("reborn", 0),
            new CommandDefinition("rebirthw", 0),
            new CommandDefinition("rebirthm", 0),
            new CommandDefinition("rebirtha", 0),
            new CommandDefinition("rebirtht", 0),
            new CommandDefinition("rebirthp", 0),
            new CommandDefinition("togglesmega", 0),
            new CommandDefinition("recharge", 0),
            new CommandDefinition("str", 0),
            new CommandDefinition("int", 0),
            new CommandDefinition("luk", 0),
            new CommandDefinition("dex", 0),
            new CommandDefinition("hp", 0),
            new CommandDefinition("mp", 0),
            new CommandDefinition("gm", 0),
            new CommandDefinition("top", 0),
            new CommandDefinition("revive", 0),
            new CommandDefinition("votepoints", 0),
            new CommandDefinition("getpoints", 0),
            new CommandDefinition("getpoints1", 0),
            new CommandDefinition("afk", 0),
            new CommandDefinition("onlinetime", 0)
        };
    }

             public static ResultSet ranks() {
		try {
			Connection con = DatabaseConnection.getConnection();
			java.sql.PreparedStatement ps = con.prepareStatement("SELECT name,level,reborns FROM characters WHERE `gm`< '3'  ORDER BY reborns desc LIMIT 10");
                     return ps.executeQuery();

		} catch (Exception ex) {}

		return null;
             }
}