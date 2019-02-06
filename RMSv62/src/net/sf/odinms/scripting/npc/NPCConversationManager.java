package net.sf.odinms.scripting.npc;

import java.awt.Point;
import net.sf.odinms.server.maps.MapleMap;
import net.sf.odinms.server.life.MapleMonsterInformationProvider;
import java.rmi.RemoteException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.LinkedList;
import java.util.List;
import net.sf.odinms.client.IItem;
import net.sf.odinms.client.Item;
import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleInventoryType;
import net.sf.odinms.client.MapleJob;
import net.sf.odinms.client.SkillFactory;
import net.sf.odinms.scripting.AbstractPlayerInteraction;
import net.sf.odinms.scripting.event.EventManager;
import net.sf.odinms.server.MapleItemInformationProvider;
import net.sf.odinms.server.MapleShopFactory;
import net.sf.odinms.server.quest.MapleQuest;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.client.MapleStat;
import net.sf.odinms.net.world.guild.MapleGuild;
import net.sf.odinms.server.MapleSquad;
import net.sf.odinms.server.MapleSquadType;
import net.sf.odinms.server.maps.MapleMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Random;
import net.sf.odinms.client.Equip;
import net.sf.odinms.client.ISkill;
import net.sf.odinms.client.MapleInventory;
import net.sf.odinms.client.MapleKeyBinding;
import net.sf.odinms.database.DatabaseConnection;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.net.world.MaplePartyCharacter;
import net.sf.odinms.server.ClanHolder;
import net.sf.odinms.server.MapleInventoryManipulator;
import net.sf.odinms.server.MaplePortal;
import net.sf.odinms.server.MapleStatEffect;
import net.sf.odinms.server.TimerManager;
import net.sf.odinms.server.life.MapleLifeFactory;
import net.sf.odinms.server.life.MapleMonster;
import net.sf.odinms.server.life.MapleMonsterStats;
import net.sf.odinms.tools.Pair;

public class NPCConversationManager extends AbstractPlayerInteraction {

    private MapleClient c;
    private int npc;
    private String fileName = null;
    private String getText;
    private MapleCharacter chr;

    public NPCConversationManager(MapleClient c, int npc, MapleCharacter chr, String fileName) {
        super(c);
        this.c = c;
        this.npc = npc;
        this.chr = chr;
        this.fileName = fileName;
    }

    public void dispose() {
        NPCScriptManager.getInstance().dispose(this);
    }

    public void sendNext(String text) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 01"));
    }

    public void sendPrev(String text) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "01 00"));
    }

    public void sendNextPrev(String text) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "01 01"));
    }

    public void sendOk(String text) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00"));
    }

    public void sendYesNo(String text) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 1, text, ""));
    }

    public void sendAcceptDecline(String text) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0x0C, text, ""));
    }

    public void sendSimple(String text) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 4, text, ""));
    }

    public void sendStyle(String text, int styles[]) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalkStyle(npc, text, styles));
    }

    public void sendGetNumber(String text, int def, int min, int max) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalkNum(npc, text, def, min, max));
    }

    public void sendGetText(String text) {
        getClient().getSession().write(MaplePacketCreator.getNPCTalkText(npc, text));
    }

    public void setGetText(String text) {
        this.getText = text;
    }

    public String getText() {
        return this.getText;
    }

    public void openShop(int id) {
        MapleShopFactory.getInstance().getShop(id).sendShop(getClient());
    }

    @Override
    public void openNpc(int id) {
        dispose();
        NPCScriptManager.getInstance().start(getClient(), id);
    }

    public void changeJob(MapleJob job) {
        getPlayer().changeJob(job);
    }

    public MapleJob getJob() {
        return getPlayer().getJob();
    }

    public void startQuest(int id) {
        MapleQuest.getInstance(id).start(getPlayer(), npc);
    }

    public void completeQuest(int id) {
        MapleQuest.getInstance(id).complete(getPlayer(), npc);
    }

    public void forfeitQuest(int id) {
        MapleQuest.getInstance(id).forfeit(getPlayer());
    }

    /**
     * use getPlayer().getMeso() instead
     * @return
     */
    @Deprecated
    public int getMeso() {
        return getPlayer().getMeso();
    }

    public void gainMeso(int gain) {
        getPlayer().gainMeso(gain, true, false, true);
    }

    public void gainExp(int gain) {
        getPlayer().gainExp(gain, true, true);
    }

    public int getNpc() {
        return npc;
    }

    public String getFileName() {
        return fileName;
    }

        public int getvotingpoints() {
        return getPlayer().getvotingpoints();
    }

    public void setvotingpoints(int newpoints) {
        getPlayer().setvotingpoints(newpoints);
    }

    public void reloadChar() {
            getPlayer().getClient().getSession().write(MaplePacketCreator.getCharInfo(getPlayer()));
            getPlayer().getMap().removePlayer(getPlayer());
            getPlayer().getMap().addPlayer(getPlayer());
        }


    public void gainvotingpoint1() {
        getPlayer().gain1votingpoint();
    }

    public void gainvotingpoints(int gainedpoints) {
        getPlayer().gainvotingpoints(gainedpoints);
        if (gainedpoints > 0) {
            getPlayer().dropMessage("Hi " + getPlayer().getName() + ",");
            getPlayer().dropMessage("You have achieved : " + gainedpoints + " VotingPoint(s),");
            getPlayer().dropMessage("Which brings you to a total of : " + getPlayer().getvotingpoints() + " VotingPoints~");
        }
        else {
            getPlayer().dropMessage("Hi " + getPlayer().getName() + ",");
            getPlayer().dropMessage("You have lost : " + gainedpoints + " VotingPoints,");
            getPlayer().dropMessage("Which brings you to a total of : " + getPlayer().getvotingpoints() + " VotingPoints~");
    }
    }
    /**
     * use getPlayer().getLevel() instead
     * @return
     */
    @Deprecated
    public int getLevel() {
        return getPlayer().getLevel();
    }

        public int getReborns() {
        return getPlayer().getReborns();
    }

    public void unequipEverything() {
        getPlayer().unequipEverything();
    }

    public void teachSkill(int id, int level, int masterlevel) {
        getPlayer().changeSkillLevel(SkillFactory.getSkill(id), level, masterlevel);
    }

    public MapleCharacter getP() {
return getPlayer();
}

public void MakeGMItem (byte slot, MapleCharacter player) {
MapleInventory equip = player.getInventory(MapleInventoryType.EQUIP);
Equip eu = (Equip) equip.getItem(slot);
int item = equip.getItem(slot).getItemId();
MapleJob job = eu.getJob();
short hand = eu.getHands();
short watt = eu.getWatk();
short matt = eu.getMatk();
short acc = eu.getAcc();
short mp = eu.getMp();
short hp = eu.getHp();
short avoid = eu.getAvoid();
short speed = eu.getSpeed();
short jump = eu.getJump();
short wdef = eu.getWdef();
short mdef = eu.getMdef();
byte level = eu.getLevel();
byte ups = eu.getUpgradeSlots();
Equip nItem = new Equip(item, equip.getNextFreeSlot());
nItem.setStr((short) 32000); // STR
nItem.setDex((short) 32000); // DEX
nItem.setInt((short) 32000); // INT
nItem.setLuk((short) 32000); //LUK
nItem.setJob(job);
nItem.setHands(hand);
nItem.setWatk(watt);
nItem.setMatk(matt);
nItem.setAcc(acc);
nItem.setMp(mp);
nItem.setHp(hp);
nItem.setAvoid(avoid);
nItem.setSpeed(speed);
nItem.setJump(jump);
nItem.setWdef(wdef);
nItem.setMdef(mdef);
nItem.setUpgradeSlots(ups);
nItem.setLevel(level);
nItem.setRingId(-1);
player.getInventory(MapleInventoryType.EQUIP).addFromDB(nItem);
equip.removeItem(slot); // Original Item Delete 
}

public void MakeQExchItem (byte slot, MapleCharacter player) {
MapleInventory equip = player.getInventory(MapleInventoryType.EQUIP);
Equip eu = (Equip) equip.getItem(slot);
int item = equip.getItem(slot).getItemId();
MapleJob job = eu.getJob();
short hand = eu.getHands();
short matt = eu.getMatk();
short watt = (short) (eu.getWatk() + 25);
short acc = eu.getAcc();
short mp = eu.getMp();
short hp = eu.getHp();
short avoid = eu.getAvoid();
short speed = eu.getSpeed();
short str = eu.getStr();
short dex = eu.getDex();
short intt = eu.getInt();
short luk = eu.getLuk();
short jump = eu.getJump();
short wdef = eu.getWdef();
short mdef = eu.getMdef();
byte level = eu.getLevel();
byte ups = eu.getUpgradeSlots();
Equip nItem = new Equip(item, equip.getNextFreeSlot());

nItem.setJob(job);
nItem.setHands(hand);
nItem.setMatk(matt);
nItem.setWatk(watt);
nItem.setAcc(acc);
nItem.setMp(mp);
nItem.setHp(hp);
nItem.setAvoid(avoid);
nItem.setSpeed(speed);
nItem.setJump(jump);
nItem.setWdef(wdef);
nItem.setMdef(mdef);
nItem.setStr(str);
nItem.setDex(dex);
nItem.setInt(intt);
nItem.setLuk(luk);
nItem.setUpgradeSlots(ups);
nItem.setLevel(level);
nItem.setRingId(-1);
player.getInventory(MapleInventoryType.EQUIP).addFromDB(nItem);
equip.removeItem(slot); // Original Item Delete
}

public String EquipList(MapleClient c) {
StringBuilder str = new StringBuilder();
MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
List<String> stra = new LinkedList<String>();
for (IItem item : equip.list()) {
stra.add("#L"+item.getPosition()+"##v"+item.getItemId()+"##l");
}
for (String strb : stra) {
str.append(strb);
}
return str.toString();
}


    public void clearSkills() {
        Map<ISkill, MapleCharacter.SkillEntry> skills = getPlayer().getSkills();
        for (Entry<ISkill, MapleCharacter.SkillEntry> skill : skills.entrySet()) {
            getPlayer().changeSkillLevel(skill.getKey(), 0, 0);
        }
    }
public void summonMob(int mobid, int customHP, int customEXP, int amount) {
        MapleMonsterStats newStats = new MapleMonsterStats();
        if (customHP > 0) {
            newStats.setHp(customHP);
        }
        if (customEXP >= 0) {
            newStats.setExp(customEXP);
        }
        if (amount <= 1) {
            MapleMonster npcmob = MapleLifeFactory.getMonster(mobid);
            npcmob.setOverrideStats(newStats);
            npcmob.setHp(npcmob.getMaxHp());
            getPlayer().getMap().spawnMonsterOnGroudBelow(npcmob, getPlayer().getPosition());
        } else {
            for (int i = 0; i < amount; i++) {
                MapleMonster npcmob = MapleLifeFactory.getMonster(mobid);
                npcmob.setOverrideStats(newStats);
                npcmob.setHp(npcmob.getMaxHp());
                getPlayer().getMap().spawnMonsterOnGroudBelow(npcmob, getPlayer().getPosition());
            }
        }
    }

public void spawnMob(int mobid, int customHP, int customEXP, int amount, int x, int y) {
        MapleMonsterStats newStats = new MapleMonsterStats();
        Point spawnPos = new Point(x, y);
        if (customHP > 0) {
            newStats.setHp(customHP);
        }
        if (customEXP >= 0) {
            newStats.setExp(customEXP);
        }
        if (amount <= 1) {
            MapleMonster npcmob = MapleLifeFactory.getMonster(mobid);
            npcmob.setOverrideStats(newStats);
            npcmob.setHp(npcmob.getMaxHp());
            getPlayer().getMap().spawnMonsterOnGroudBelow(npcmob, spawnPos);
        } else {
            for (int i = 0; i < amount; i++) {
                MapleMonster npcmob = MapleLifeFactory.getMonster(mobid);
                npcmob.setOverrideStats(newStats);
                npcmob.setHp(npcmob.getMaxHp());
                getPlayer().getMap().spawnMonsterOnGroudBelow(npcmob, spawnPos);
            }
        }
    }


public void cleardrops() {
    MapleMonsterInformationProvider.getInstance().clearDrops();
    }  
    /**
     * Use getPlayer() instead (for consistency with MapleClient)
     * @return
     */
    @Deprecated
    public MapleCharacter getChar() {
        return getPlayer();
    }

    public MapleClient getC() {
        return getClient();
    }

    public void rechargeStars() {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        IItem stars = getChar().getInventory(MapleInventoryType.USE).getItem((byte) 1);
        if (ii.isThrowingStar(stars.getItemId()) || ii.isBullet(stars.getItemId())) {
            stars.setQuantity(ii.getSlotMax(getClient(), stars.getItemId()));
            getC().getSession().write(MaplePacketCreator.updateInventorySlot(MapleInventoryType.USE, (Item) stars));
        }
    }

    public EventManager getEventManager(String event) {
        return getClient().getChannelServer().getEventSM().getEventManager(event);
    }

    public void showEffect(String effect) {
        getPlayer().getMap().broadcastMessage(MaplePacketCreator.showEffect(effect));
    }

    public void playSound(String sound) {
        getPlayer().getMap().broadcastMessage(MaplePacketCreator.playSound(sound));
    }

    @Override
    public String toString() {
        return "Conversation with NPC: " + npc;
    }

    public void updateBuddyCapacity(int capacity) {
        getPlayer().setBuddyCapacity(capacity);
    }

    public int getBuddyCapacity() {
        return getPlayer().getBuddyCapacity();
    }

    public void setHair(int hair) {
        getPlayer().setHair(hair);
        getPlayer().updateSingleStat(MapleStat.HAIR, hair);
        getPlayer().equipChanged();
    }

    public void setFace(int face) {
        getPlayer().setFace(face);
        getPlayer().updateSingleStat(MapleStat.FACE, face);
        getPlayer().equipChanged();
    }

    @SuppressWarnings("static-access")
    public void setSkin(int color) {
        getPlayer().setSkinColor(c.getPlayer().getSkinColor().getById(color));
        getPlayer().updateSingleStat(MapleStat.SKIN, color);
        getPlayer().equipChanged();
    }

    public void warpParty(int mapId) {
        warpParty(mapId, 0, 0);
    }

    public void warpParty(int mapId, int exp, int meso) {
        for (MaplePartyCharacter chr_ : getPlayer().getParty().getMembers()) {
            MapleCharacter curChar = c.getChannelServer().getPlayerStorage().getCharacterByName(chr_.getName());
            if ((curChar.getEventInstance() == null && c.getPlayer().getEventInstance() == null) || curChar.getEventInstance() == getPlayer().getEventInstance()) {
                curChar.changeMap(mapId);
                if (exp > 0) {
                    curChar.gainExp(exp, true, false, true);
                }
                if (meso > 0) {
                    curChar.gainMeso(meso, true);
                }
            }
        }
    }

    public void warpRandom(int mapid) {
        MapleMap target = c.getChannelServer().getMapFactory().getMap(mapid);
        Random rand = new Random();
        MaplePortal portal = target.getPortal(rand.nextInt(target.getPortals().size())); //generate random portal
        getPlayer().changeMap(target, portal);
    }

    public int itemQuantity(int itemid) {
        int possesed = getPlayer().getItemQuantity(itemid, false);
        return possesed;
    }

    public MapleSquad createMapleSquad(MapleSquadType type) {
        MapleSquad squad = new MapleSquad(c.getChannel(), getPlayer());
        if (getSquadState(type) == 0) {
            c.getChannelServer().addMapleSquad(squad, type);
        } else {
            return null;
        }
        return squad;
    }

    public MapleCharacter getSquadMember(MapleSquadType type, int index) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        MapleCharacter ret = null;
        if (squad != null) {
            ret = squad.getMembers().get(index);
        }
        return ret;
    }

    public int getSquadState(MapleSquadType type) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            return squad.getStatus();
        } else {
            return 0;
        }
    }

    public void setSquadState(MapleSquadType type, int state) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            squad.setStatus(state);
        }
    }

    public boolean checkSquadLeader(MapleSquadType type) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            if (squad.getLeader().getId() == getPlayer().getId()) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public void removeMapleSquad(MapleSquadType type) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            if (squad.getLeader().getId() == getPlayer().getId()) {
                squad.clear();
                c.getChannelServer().removeMapleSquad(squad, type);
            }
        }
    }

    public int numSquadMembers(MapleSquadType type) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        int ret = 0;
        if (squad != null) {
            ret = squad.getSquadSize();
        }
        return ret;
    }

    public boolean isSquadMember(MapleSquadType type) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        boolean ret = false;
        if (squad.containsMember(getPlayer())) {
            ret = true;
        }
        return ret;
    }

    public void addSquadMember(MapleSquadType type) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            squad.addMember(getPlayer());
        }
    }

    public void removeSquadMember(MapleSquadType type, MapleCharacter chr, boolean ban) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            squad.banMember(chr, ban);
        }
    }

    public void removeSquadMember(MapleSquadType type, int index, boolean ban) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            MapleCharacter chr = squad.getMembers().get(index);
            squad.banMember(chr, ban);
        }
    }

    public boolean canAddSquadMember(MapleSquadType type) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        if (squad != null) {
            if (squad.isBanned(getPlayer())) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    public void warpSquadMembers(MapleSquadType type, int mapId) {
        MapleSquad squad = c.getChannelServer().getMapleSquad(type);
        MapleMap map = c.getChannelServer().getMapFactory().getMap(mapId);
        if (squad != null) {
            if (checkSquadLeader(type)) {
                for (MapleCharacter chr : squad.getMembers()) {
                    chr.changeMap(map, map.getPortal(0));
                }
            }
        }
    }

    public String searchItem(String item) {
        StringBuilder message = new StringBuilder("Choose the item you want:");
        getPlayer().getMap().broadcastMessage(getPlayer(), MaplePacketCreator.showJobChange(getPlayer().getId()), false);
        for (Pair<Integer, String> itemPair : MapleItemInformationProvider.getInstance().getAllItems()) {
            if (itemPair.getRight().toLowerCase().contains(item.toLowerCase())) {
                message.append("\r\n#L" + itemPair.getLeft() + "##i" + itemPair.getLeft() + "# - #b" + itemPair.getRight() + "#k#l");
            }
        }
        if (!message.toString().contains("#L")) {
            return "No Item's Found";
        }
        return message.toString();
    }


    public void resetReactors() {
        getPlayer().getMap().resetReactors();
    }

    public void displayGuildRanks() {
        MapleGuild.displayGuildRanks(getClient(), npc);
    }

    public boolean sendMessage(String recipient, String message) {
        MapleCharacter chr_ = getCharByName(recipient);
        if (chr_ != null) {
            chr_.dropMessage(6, getPlayer().getName() + ": " + message);
            return true;
        }
        return false;
    }

    public void gainFame(int amount) {
        getPlayer().addFame(amount);
        if (amount > 0) {
            getPlayer().dropMessage(1, "You have gained " + amount + " fame.");
        } else {
            getPlayer().dropMessage(1, "You have lost " + amount + " fame.");
        }
    }

    public void maxSkills() {
        getPlayer().maxAllSkills();
    }

    public int getSkillLevel(int skillid) {
        int skilllevel = getPlayer().getSkillLevel(SkillFactory.getSkill(skillid));
        return skilllevel;
    }

    public void giveBuff(int skillid) {
        MapleItemInformationProvider mii = MapleItemInformationProvider.getInstance();
        MapleStatEffect statEffect = mii.getItemEffect(skillid);
        statEffect.applyTo(getPlayer());
    }

    public int partyMembersInMap() {
        int inMap = 0;
        for (MapleCharacter char2 : getPlayer().getMap().getCharacters()) {
            if (char2.getParty() == getPlayer().getParty()) {
                inMap++;
            }
        }
        return inMap;
    }

    public void modifyNx(int amount) {
        getPlayer().modifyCSPoints(1, amount);
        if (amount > 0) {
            getPlayer().dropMessage(5, "You have gained " + amount + " NX points.");
        } else {
            getPlayer().dropMessage(5, "You have lost " + amount + " NX points.");
        }
    }

    public int getTime(String type) {
        Calendar cal = Calendar.getInstance();
        if (type.startsWith("d")) {
            return cal.get(Calendar.DAY_OF_WEEK);
        } else if (type.startsWith("h")) {
            return cal.get(Calendar.HOUR_OF_DAY);
        } else if (type.startsWith("m")) {
            return cal.get(Calendar.MINUTE);
        } else if (type.startsWith("s")) {
            return cal.get(Calendar.SECOND);
        }
        return -1; // wrong input
    }

    public void addBuddyCapacity(int capacity) {
        getPlayer().addBuddyCapacity(capacity);
    }

    public void clearKeys() {
        getPlayer().setDefaultKeyMap();
    }

    public void scheduleWarp(int delay, int mapid) {
        final int fmapid = mapid;
        TimerManager.getInstance().schedule(new Runnable() {

            public void run() {
                getPlayer().changeMap(fmapid);
            }
        }, delay * 1000);
    }

    public void startClock(int limit, int endMap) {
        getPlayer().getMap().addMapTimer(limit, endMap);
    }

    public MapleCharacter getCharByName(String name) {
        try {
            return c.getChannelServer().getPlayerStorage().getCharacterByName(name);
        } catch (Exception e) {
            return null;
        }
    }

    public void warpAllInMap(int mapid) {
        warpAllInMap(mapid, 0);
    }

    public void warpAllInMap(int mapid, int portal) {
        for (MapleCharacter mch : getPlayer().getMap().getCharacters()) {
            if (mch.getEventInstance() != null) {
                mch.getEventInstance().unregisterPlayer(mch);
            }
            mch.changeMap(mapid, portal);
        }
    }

    public boolean createMarriage(String partner_) {
        MapleCharacter partner = getCharByName(partner_);
        if (partner == null) {
            return false;
        }
        partner.setMarried(true);
        getPlayer().setMarried(true);
        partner.setPartnerId(getPlayer().getId());
        getPlayer().setPartnerId(partner.getId());
        if (partner.getGender() > 0) {
            Marriage.createMarriage(getPlayer(), partner);
        } else {
            Marriage.createMarriage(partner, getPlayer());
        }
        return true;
    }

    public boolean createEngagement(String partner_) {
        MapleCharacter partner = getCharByName(partner_);
        if (partner == null) {
            return false;
        }
        if (partner.getGender() > 0) {
            Marriage.createEngagement(getPlayer(), partner);
        } else {
            Marriage.createEngagement(partner, getPlayer());
        }
        return true;
    }

    public void divorceMarriage() {
        getPlayer().setPartnerId(0);
        getPlayer().setMarried(false);
        Marriage.divorceMarriage(getPlayer());
    }

    public void changeKeyBinding(int key, byte type, int action) {
        MapleKeyBinding newbinding = new MapleKeyBinding(type, action);
        getPlayer().changeKeybinding(key, newbinding);
    }

    public Equip getEquipById(int id) { // we can do getEquipById(2349823).setStr(545); etc.
        MapleInventoryType type = MapleItemInformationProvider.getInstance().getInventoryType(id);
        return (Equip) getPlayer().getInventory(type).findById(id);
    }

    public int getNpcTalkTimes() {
        return NPCScriptManager.getInstance().getNpcTalkTimes(getPlayer().getId(), npc);
    }

    public void setNpcTalkTimes(int amount) {
        NPCScriptManager.getInstance().setNpcTalkTimes(getPlayer().getId(), npc, amount);
    }

    public int talkedTimesByNpc() {
        return NPCScriptManager.getInstance().talkedTimesByNpc(npc);
    }

    public boolean makeProItem(int id, int hardcore) {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        IItem item = ii.getEquipById(id);
        MapleInventoryType type = ii.getInventoryType(id);
        if (type.equals(MapleInventoryType.EQUIP)) {
            MapleInventoryManipulator.addFromDrop(c, ii.hardcoreItem((Equip) item, (short) hardcore));
            return true;
        } else {
            return false;
        }
    }

    public boolean isGuest() {
        if (c.isGuest()) {
            return true;
        }
        return false;
    }

    public void broadcastMessage(int type, String message) {
        try {
            getPlayer().getClient().getChannelServer().getWorldInterface().broadcastMessage(null, MaplePacketCreator.serverNotice(type, message).getBytes());
        } catch (RemoteException e) {
            c.getChannelServer().reconnectWorld();
        }
    }

    public void setClan(int set) {
        getPlayer().setClan(set);
        try {
            getPlayer().getClient().getChannelServer().getWorldInterface().broadcastToClan((getPlayer().getName() + " has entered the clan ! Give him a nice welcome.").getBytes(), set);
        } catch (RemoteException e) {
            c.getChannelServer().reconnectWorld();
        }
        c.getChannelServer().addToClan(getPlayer());
    }

    public String getAllOnlineNamesFromClan(int set) {
        StringBuilder sb = new StringBuilder();
        for (MapleCharacter names : c.getChannelServer().getClanHolder().getAllOnlinePlayersFromClan(set)) {
            sb.append(names.getName() + "\r\n");
        }
        return sb.toString();
    }

    public String getAllOfflineNamesFromClan(int set) {
        StringBuilder sb = new StringBuilder();
        for (String names : c.getChannelServer().getClanHolder().getAllOfflinePlayersFromClan(set)) {
            sb.append(names + "\r\n");
        }
        return sb.toString();
    }

    public int getOfflineClanCount(int clan) {
        return ClanHolder.countOfflineByClan(clan);
    }

    public int getOnlineClanCount(int clan) {
        try {
            return c.getChannelServer().getWorldInterface().onlineClanMembers(clan);
        } catch (RemoteException re) {
            c.getChannelServer().reconnectWorld();
        }
        return -1;
    }

    public String getJobById(int id) {
        return MapleJob.getJobName(id);
    }

    public List<MapleCharacter> getPartyMembers() {
        if (getPlayer().getParty() == null) {
            return null;
        }
        List<MapleCharacter> chars = new LinkedList<MapleCharacter>();
        for (ChannelServer channel : ChannelServer.getAllInstances()) {
            for (MapleCharacter chr : channel.getPartyMembers(getPlayer().getParty())) {
                if (chr != null) { // double check <3
                    chars.add(chr);
                }
            }
        }
        return chars;
    }

    public MapleCharacter getSender() {
        return this.chr;
    }

    public boolean hasTemp() {
        if (!getPlayer().hasMerchant() && getPlayer().tempHasItems()) {
            return true;
        } else {
            return false;
        }
    }

    public void removeHiredMerchantItem(int id) {
        Connection con = DatabaseConnection.getConnection();
        try {
            PreparedStatement ps = con.prepareStatement("DELETE FROM hiredmerchant WHERE id = ?");
            ps.setInt(1, id);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException se) {
        }
    }

    public int getHiredMerchantMesos() {
        Connection con = DatabaseConnection.getConnection();
        int mesos;
        try {
            PreparedStatement ps = con.prepareStatement("SELECT MerchantMesos FROM characters WHERE id = ?");
            ps.setInt(1, getPlayer().getId());
            ResultSet rs = ps.executeQuery();
            rs.next();
            mesos = rs.getInt("MerchantMesos");
            rs.close();
            ps.close();

        } catch (SQLException se) {
            return 0;
        }
        return mesos;
    }

public void zeroMerchantMesos() {
        try {
            PreparedStatement ps = DatabaseConnection.getConnection().prepareStatement("UPDATE characters SET MerchantMesos = 0 WHERE id = ?");
            ps.setInt(1, getPlayer().getId());
            ps.executeUpdate();
            ps.close();
        } catch (Exception e) {
        }
    }


    public List<Pair<Integer, IItem>> getHiredMerchantItems() {
        Connection con = DatabaseConnection.getConnection();
        List<Pair<Integer, IItem>> items = new ArrayList<Pair<Integer, IItem>>();
        try {
            PreparedStatement ps = con.prepareStatement("SELECT * FROM hiredmerchant WHERE ownerid = ?");
            ps.setInt(1, getPlayer().getId());
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                if (rs.getInt("type") == 1) {
                    Equip eq = new Equip(rs.getInt("itemid"), (byte) 0, -1);
                    eq.setUpgradeSlots((byte) rs.getInt("upgradeslots"));
                    eq.setLevel((byte) rs.getInt("level"));
                    eq.setStr((short) rs.getInt("str"));
                    eq.setDex((short) rs.getInt("dex"));
                    eq.setInt((short) rs.getInt("int"));
                    eq.setLuk((short) rs.getInt("luk"));
                    eq.setHp((short) rs.getInt("hp"));
                    eq.setMp((short) rs.getInt("mp"));
                    eq.setWatk((short) rs.getInt("watk"));
                    eq.setMatk((short) rs.getInt("matk"));
                    eq.setWdef((short) rs.getInt("wdef"));
                    eq.setMdef((short) rs.getInt("mdef"));
                    eq.setAcc((short) rs.getInt("acc"));
                    eq.setAvoid((short) rs.getInt("avoid"));
                    eq.setHands((short) rs.getInt("hands"));
                    eq.setSpeed((short) rs.getInt("speed"));
                    eq.setJump((short) rs.getInt("jump"));
                    eq.setOwner(rs.getString("owner"));
                    items.add(new Pair<Integer, IItem>(rs.getInt("id"), eq));
                } else if (rs.getInt("type") == 2) {
                    Item newItem = new Item(rs.getInt("itemid"), (byte) 0, (short) rs.getInt("quantity"));
                    newItem.setOwner(rs.getString("owner"));
                    items.add(new Pair<Integer, IItem>(rs.getInt("id"), newItem));
                }
            }
            ps.close();
            rs.close();
        } catch (SQLException se) {
            se.printStackTrace();
            return null;
        }
        return items;
    }
}
