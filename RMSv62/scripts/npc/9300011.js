importPackage(net.sf.odinms.client);


function start() {
                if (cm.getJob().equals(MapleJob.HERO)) {
                    
                    cm.teachSkill(1121000, 20, 20);
                    cm.teachSkill(1121001, 20, 20);
                    cm.teachSkill(1121002, 30, 30);
                    cm.teachSkill(1120003, 30, 30);
                    cm.teachSkill(1120004, 30, 30);
                    cm.teachSkill(1120005, 30, 30);
                    cm.teachSkill(1121006, 30, 30);
                    cm.teachSkill(1121008, 30, 30);
                    cm.teachSkill(1121010, 30, 30);
                    cm.teachSkill(1121011, 1, 1);
            
                    cm.sendOk("#bHero#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.DARKKNIGHT)) {
                    
                    cm.teachSkill(1321001, 20, 20);
                    cm.teachSkill(1321002, 30, 30);
                    cm.teachSkill(1321003, 30, 30);
                    cm.teachSkill(1320005, 30, 30);
                    cm.teachSkill(1320006, 30, 30);
                    cm.teachSkill(1321007, 10, 10);
                    cm.teachSkill(1320008, 25, 25);
                    cm.teachSkill(1320009, 25, 25);
                    cm.teachSkill(1321010, 1, 1);

                    cm.sendOk("#bDark Knight#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.PALADIN)) {
                    
                    cm.teachSkill(1221000, 20, 20);
                    cm.teachSkill(1221001, 20, 20);
                    cm.teachSkill(1221002, 30, 30);
                    cm.teachSkill(1221003, 20, 20);
                    cm.teachSkill(1221004, 20, 20);
                    cm.teachSkill(1220005, 30, 30);
                    cm.teachSkill(1220006, 30, 30);
                    cm.teachSkill(1221007, 30, 30);
                    cm.teachSkill(1221009, 30, 30);
                    cm.teachSkill(1220010, 10, 10);
                    cm.teachSkill(1221011, 30, 30);
                    cm.teachSkill(1221012, 1, 1);
                    cm.sendOk("#bPaladin#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.FP_ARCHMAGE)) {
                    
                    cm.teachSkill(2121000, 20, 20);
                    cm.teachSkill(2121001, 30, 30);
                    cm.teachSkill(2121002, 30, 30);
                    cm.teachSkill(2121004, 30, 30);
                    cm.teachSkill(2121008,  1, 1);
                    cm.teachSkill(2121003, 30, 30);
                    cm.teachSkill(2121005, 30, 30);
                    cm.teachSkill(2121006, 30, 30);
                    cm.teachSkill(2121007, 30, 30);
                    cm.sendOk("#bFire/Poison Arch Mage#k Maxed");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.IL_ARCHMAGE)) {
                    
                    cm.teachSkill(2221000, 20, 20);
                    cm.teachSkill(2221001, 30, 30);
                    cm.teachSkill(2221002, 30, 30);
                    cm.teachSkill(2221004, 30, 30);
                    cm.teachSkill(2221008, 1, 1);
                    cm.teachSkill(2221003, 30, 30);
                    cm.teachSkill(2221005, 30, 30);
                    cm.teachSkill(2221006, 30, 30);
                    cm.teachSkill(2221007, 30, 30);
                    cm.sendOk("#bIce/Lightning Arch Mage#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.BISHOP)) {
                    
                    cm.teachSkill(2321000, 20, 20);
                    cm.teachSkill(2321001, 30, 30);
                    cm.teachSkill(2321002, 30, 30);
                    cm.teachSkill(2321003, 30, 30);
                    cm.teachSkill(2321004, 30, 30);
                    cm.teachSkill(2321005, 30, 30);
                    cm.teachSkill(2321006, 10, 10);
                    cm.teachSkill(2321007, 30, 30);
                    cm.teachSkill(2321008, 30, 30);
                    cm.teachSkill(2321009, 1, 1);
                    cm.sendOk("#bBishop#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.BOWMASTER)) {
                    
                    cm.teachSkill(3121000, 20, 20);
                    cm.teachSkill(3121002, 30, 30);
                    cm.teachSkill(3121003, 30, 30);
                    cm.teachSkill(3121004, 30, 30);
                    cm.teachSkill(3120005, 30, 30);
                    cm.teachSkill(3121006, 30, 30);
                    cm.teachSkill(3121007, 30, 30);
                    cm.teachSkill(3121008, 30, 30);
                    cm.teachSkill(3121009, 1, 1);
                    cm.sendOk("#bBow Master#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.CROSSBOWMASTER)) {
                    
                    cm.teachSkill(3221000, 20, 20);
                    cm.teachSkill(3221001, 30, 30);
                    cm.teachSkill(3221002, 30, 30);
                    cm.teachSkill(3221003, 30, 30);
                    cm.teachSkill(3220004, 30, 30);
                    cm.teachSkill(3221005, 30, 30);
                    cm.teachSkill(3221006, 30, 30);

                    cm.teachSkill(3221007, 30, 30);
                    cm.teachSkill(3221008, 1, 1);
                    cm.sendOk("#bMarksman#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.SHADOWER)) {
                    cm.teachSkill(4221000, 20, 20);
                    cm.teachSkill(4220002, 30, 30);
                    cm.teachSkill(4221003, 30, 30);
                    cm.teachSkill(4221004, 30, 30);

                    cm.teachSkill(4220005, 30, 30);
                    cm.teachSkill(4221006, 30, 30);
                    cm.teachSkill(4221007, 30, 30);
                    cm.teachSkill(4221001, 30, 30);
                    cm.sendOk("#bShadower#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.NIGHTLORD)) {
                    cm.teachSkill(4121000, 20, 20);
                    cm.teachSkill(4120002, 30, 30);
                    cm.teachSkill(4121003, 30, 30);
                    cm.teachSkill(4121004, 30, 30);

                    cm.teachSkill(4120005, 30, 30);
                    cm.teachSkill(4121006, 30, 30);
                    cm.teachSkill(4121007, 30, 30);
                    cm.teachSkill(4121008, 30, 30);
                    cm.sendOk("#bNightLord#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.BUCCANEER)) {
                    
                    cm.teachSkill(5121000, 20, 20);
                    cm.teachSkill(5121001, 30, 30);
                    cm.teachSkill(5121002, 30, 30);
                    cm.teachSkill(5121003, 20, 20);
                    cm.teachSkill(5121004, 30, 30);
                    cm.teachSkill(5121005, 30, 30);
                    cm.teachSkill(5121007, 30, 30);
                    cm.teachSkill(5121008, 1, 1);
                    cm.teachSkill(5121009, 20, 20);
                    cm.teachSkill(5121010, 30, 30);
                    cm.sendOk("#bBuccaneer#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.CORSAIR)) {
                    
                    cm.teachSkill(5221000, 20, 20);
                    cm.teachSkill(5220001, 30, 30);
                    cm.teachSkill(5220002, 20, 20);
                    cm.teachSkill(5221003, 30, 30);
                    cm.teachSkill(5221004, 30, 30);
                    cm.teachSkill(5221006, 10, 10);
                    cm.teachSkill(5221007, 30, 30);
                    cm.teachSkill(5221008, 30, 30);
                    cm.teachSkill(5221009, 30, 30);
                    cm.teachSkill(5221010, 1, 1);
                    cm.teachSkill(5220011, 20, 20);
                    cm.sendOk("You are now a #bCorsair#k Maxed.");
                    cm.dispose();
                } else if (cm.getJob().equals(MapleJob.CORSAIR)) {
                    
                    cm.teachSkill(5221000, 20, 20);
                    cm.teachSkill(5220001, 30, 30);
                    cm.teachSkill(5220002, 20, 20);
                    cm.teachSkill(5221003, 30, 30);
                    cm.teachSkill(5221004, 30, 30);
                    cm.teachSkill(5221006, 10, 10);
                    cm.teachSkill(5221007, 30, 30);
                    cm.teachSkill(5221008, 30, 30);
                    cm.teachSkill(5221009, 30, 30);
                    cm.teachSkill(5221010, 1, 1);

                    cm.teachSkill(5220011, 20, 20);
                    cm.sendOk("You are now a #bCorsair#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.WARRIOR)) {
        cm.teachSkill(1000000,16,16);     /// Improving HP Recovery
        cm.teachSkill(1000001,10,10);    /// Improving MaxHP Increase
        cm.teachSkill(1000002,8,8);    /// Endure
        cm.teachSkill(1001003,20,20);    /// Iron Body

        cm.teachSkill(1001004,20,20);    /// Power Strike
        cm.teachSkill(1001005,20,20);    /// Slash Blast
                    cm.sendOk("You are now a #bWarrior#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.MAGICIAN)) {
        cm.teachSkill(2000000,16,16);    /// Improving MP recovery
        cm.teachSkill(2000001,10,10);    /// Improving Max MP Increase
        cm.teachSkill(2001002,20,20);    /// Magic Guard
        cm.teachSkill(2001003,20,20);    /// Magic Armor

        cm.teachSkill(2001004,20,20);    /// Energy Bolt
        cm.teachSkill(2001005,20,20);    /// Magic Claw
                    cm.sendOk("You are now a #bMagician#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.BOWMAN)) {
        cm.teachSkill(3000000,16,16);    /// The Blessing of Amazon
        cm.teachSkill(3000001,20,20);    /// Critical Shot
        cm.teachSkill(3000002,8,8);    /// The Eye of Amazon
        cm.teachSkill(3001003,20,20);    /// Focus

        cm.teachSkill(3001004,20,20);    /// Arrow Blow
        cm.teachSkill(3001005,20,20);    /// Double Shot
                    cm.sendOk("You are now a #bBowman#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.THIEF)) {
        cm.teachSkill(4000000,20,20);    /// Nimble Body
        cm.teachSkill(4000001,8,8);    /// Keen Eyes
        cm.teachSkill(4001002,20,20);    /// Disorder
        cm.teachSkill(4001003,20,20);    /// Dark Sight

        cm.teachSkill(4001334,20,20);    /// Double Stab
        cm.teachSkill(4001344,20,20);    /// Lucky Seven
                    cm.sendOk("You are now a #bThief#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.PIRATE)) {
        cm.teachSkill(5000000,20,20);    /// Bullet Time
        cm.teachSkill(5001001,20,20);    /// Flash Fist

        cm.teachSkill(5001002,20,20);    /// Sommersault kick
        cm.teachSkill(5001003,20,20);    /// Double Shot
        cm.teachSkill(5001005,0,0);    /// Dash
                    cm.sendOk("You are now a #bPirate#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.ASSASSIN)) {
        cm.teachSkill(4100000,20,20);    /// Claw Mastery
        cm.teachSkill(4100001,30,30);    /// Critical Throw
        cm.teachSkill(4100002,20,20);    /// Endure
        cm.teachSkill(4101003,20,20);    /// Claw Booster

        cm.teachSkill(4101004,20,20);    /// Haste
        cm.teachSkill(4101005,30,30);    /// Drain
                    cm.sendOk("You are now a #bAssassin#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.BANDIT)) {
        cm.teachSkill(4200000,20,20);    /// Dagger Mastery
        cm.teachSkill(4200001,20,20);    /// Endure
        cm.teachSkill(4201002,20,20);    /// Dagger Booster
        cm.teachSkill(4201003,20,20);    /// Haste

        cm.teachSkill(4201004,30,30);    /// Steal
        cm.teachSkill(4201005,30,30);    /// Savage Blow
                    cm.sendOk("You are now a #bBandit#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.FIGHTER)) {
        cm.teachSkill(1100000,20,20);    /// Sword Mastery
        cm.teachSkill(1100001,20,20);    /// Axe Mastery
        cm.teachSkill(1101005,20,20);    /// Axe Booster
        cm.teachSkill(1100003,30,30);    /// Final Attack : Axe

        cm.teachSkill(1100002,30,30);    /// Final Attack : Sword
        cm.teachSkill(1101007,30,30);    /// Power Guard
        cm.teachSkill(1101006,20,20);    /// Rage
        cm.teachSkill(1101004,20,20);    /// Sword Booster
                    cm.sendOk("You are now a #bFighter#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.PAGE)) {
        cm.teachSkill(1201005,20,20);    /// BW Booster
        cm.teachSkill(1200001,20,20);    /// BW Mastery
        cm.teachSkill(1200003,30,30);    /// Final Attack : BW

        cm.teachSkill(1200002,30,30);    /// Final Attack : Sword
        cm.teachSkill(1201007,30,30);    /// Power Guard
        cm.teachSkill(1201004,20,20);    /// Sword Booster
        cm.teachSkill(1200000,20,20);    /// Sword Mastery
        cm.teachSkill(1201006,20,20);    /// Threaten
                    cm.sendOk("You are now a #bPage#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.SPEARMAN)) {
        cm.teachSkill(1300003,30,30);    /// Final Attack : Pole Arm
        cm.teachSkill(1300002,30,30);    /// Final Attack : Spear
        cm.teachSkill(1301007,30,30);    /// Hyper Body
        cm.teachSkill(1301006,20,20);    /// Iron Will
        cm.teachSkill(1301005,20,20);    /// Pole Arm Booster

        cm.teachSkill(1300001,20,20);    /// Pole Arm Mastery
        cm.teachSkill(1301004,20,20);    /// Spear Booster
        cm.teachSkill(1300000,20,20);    /// Spear Mastery
                    cm.sendOk("You are now a #bSpearman#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.IL_WIZARD)) {
        cm.teachSkill(2201004,30,30);    /// Cold Beam
        cm.teachSkill(2201001,20,20);    /// Meditation
        cm.teachSkill(2200000,20,20);    /// MP Eater

        cm.teachSkill(2201003,20,20);    /// Slow
        cm.teachSkill(2201002,20,20);    /// Teleport
        cm.teachSkill(2201005,30,30);    /// Thunderbolt
                    cm.sendOk("You are now a #bIce Lighning Mage#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.FP_WIZARD)) {
        cm.teachSkill(2101004,30,30);    /// Fire Arrow
        cm.teachSkill(2101001,20,20);    /// Meditation
        cm.teachSkill(2100000,20,20);    /// MP Eater

        cm.teachSkill(2101005,30,30);    /// Poison Brace
        cm.teachSkill(2101003,20,20);    /// Slow
        cm.teachSkill(2101002,20,20);    /// Teleport
                    cm.sendOk("You are now a #bFire Poison Mage#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.CLERIC)) {
        cm.teachSkill(2301004,20,20);    /// Bless
        cm.teachSkill(2301002,30,30);    /// Heal
        cm.teachSkill(2301005,30,30);    /// Holy Arrow
        cm.teachSkill(2301003,20,20);    /// Invincible
        cm.teachSkill(2300000,20,20);    /// MP Eater

        cm.teachSkill(2301001,20,20);    /// Teleport
                    cm.sendOk("You are now a #bCleric#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.HUNTER)) {
        cm.teachSkill(3101005,30,30);    /// Arrow Bomb : Bow
        cm.teachSkill(3101002,20,20);    /// Bow Booster
        cm.teachSkill(3100000,20,20);    /// Bow Mastery
        cm.teachSkill(3101003,20,20);    /// Power Knock-Back
        cm.teachSkill(3101004,20,20);    /// Soul Arrow : Bow

                    cm.sendOk("You are now a #bHunter#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.CROSSBOWMAN)) {
        cm.teachSkill(3201002,20,20);    /// Crossbow Booster
        cm.teachSkill(3200000,20,20);    /// Crossbow Mastery
        cm.teachSkill(3201005,30,30);    /// Iron Arrow : Crossbow

        cm.teachSkill(3201003,20,20);    /// Power Knock-Back
        cm.teachSkill(3201004,20,20);    /// Soul Arrow : Crossbow
                    cm.sendOk("You are now a #bCrossbowman#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.BRAWLER)) {
        cm.teachSkill(5100000,10,10);    /// HP Increase
        cm.teachSkill(5100001,20,20);    /// Knuckle Mastery
        cm.teachSkill(5101006,20,20);    /// Knuckle Booster

        cm.teachSkill(5101002,20,20);    /// Backspin Blow
        cm.teachSkill(5101003,20,20);    /// Double Uppercut
        cm.teachSkill(5101004,20,20);    /// Corkscrew Blow
        cm.teachSkill(5101005,10,10);    /// MP Recovery
        cm.teachSkill(5101007,10,10);    /// Oak Barrel
                    cm.sendOk("You are now a #bBrawler#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.GUNSLINGER)) {
        cm.teachSkill(5200000,20,20);    /// Gun Mastery
        cm.teachSkill(5201003,20,20);    /// Gun Booster
        cm.teachSkill(5201001,20,20);    /// Invisible shot

        cm.teachSkill(5201002,20,20);    /// Grenade
        cm.teachSkill(5201004,20,20);    /// Blank shot
        cm.teachSkill(5201005,10,10);    /// Wings
        cm.teachSkill(5201006,20,20);    /// Recoil Shot
                    cm.sendOk("You are now a #bGunslinger#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.HERMIT)) {
        cm.teachSkill(4110000,20,20);    /// Alchemist
        cm.teachSkill(4111005,30,30);    /// Avenger
        cm.teachSkill(4111006,20,20);    /// Flash Jump
        cm.teachSkill(4111001,20,20);    /// Meso Up

        cm.teachSkill(4111004,30,30);    /// Shadow Meso
        cm.teachSkill(4111002,30,30);    /// Shadow Partner
        cm.teachSkill(4111003,20,20);    /// Shadow Web
                    cm.sendOk("You are now a #bHermit#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.CHIEFBANDIT)) {
        cm.teachSkill(4211002,30,30);    /// Assaulter
        cm.teachSkill(4211004,30,30);    /// Band of Thieves
        cm.teachSkill(4211001,30,30);    /// Chakra
        cm.teachSkill(4211006,30,30);    /// Meso Explosion

        cm.teachSkill(4211005,20,20);    /// Meso Guard
        cm.teachSkill(4211003,20,20);    /// Pickpocket
        cm.teachSkill(4210000,20,20);    /// Shield Mastery
                    cm.sendOk("You are now a #bChiefBandit#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.RANGER)) {
        cm.teachSkill(3111004,30,30);    /// Arrow Rain
        cm.teachSkill(3111003,30,30);    /// Inferno

        cm.teachSkill(3110001,20,20);    /// Mortal Blow
        cm.teachSkill(3111002,20,20);    /// Puppet
        cm.teachSkill(3111005,30,30);    /// Silver Hawk
        cm.teachSkill(3111006,30,30);    /// Strafe
        cm.teachSkill(3110000,20,20);    /// Thrust     
                    cm.sendOk("You are now a #bRanger#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.SNIPER)) {
        cm.teachSkill(3211004,30,30);    /// Arrow Eruption
        cm.teachSkill(3211003,30,30);    /// Blizzard
        cm.teachSkill(3211005,30,30);    /// Golden Eagle
        cm.teachSkill(3210001,20,20);    /// Mortal Blow
        cm.teachSkill(3211002,20,20);    /// Puppet

        cm.teachSkill(3211006,30,30);    /// Strafe
        cm.teachSkill(3210000,20,20);    /// Thrust 
                    cm.sendOk("You are now a #bSniper#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.FP_MAGE)) {
        cm.teachSkill(2110001,30,30);    /// Element Amplification
        cm.teachSkill(2111006,30,30);    /// Element Composition
        cm.teachSkill(2111002,30,30);    /// Explosion
        cm.teachSkill(2110000,20,20);    /// Partial Resistance

        cm.teachSkill(2111003,30,30);    /// Poison Mist
        cm.teachSkill(2111004,20,20);    /// Seal
        cm.teachSkill(2111005,20,20);    /// Spell Booster   
                    cm.sendOk("You are now a #bFP Mage#k Maxed.");
                    cm.dispose(); 
} else if (cm.getJob().equals(MapleJob.IL_MAGE)) {
        cm.teachSkill(2210001,30,30);    /// Element Amplification
        cm.teachSkill(2211006,30,30);    /// Element Composition
        cm.teachSkill(2211002,30,30);    /// Ice Strike
        cm.teachSkill(2210000,20,20);    /// Partial Resistance

        cm.teachSkill(2211004,20,20);    /// Seal
        cm.teachSkill(2211005,20,20);    /// Spell Booster
        cm.teachSkill(2211003,30,30);    /// Thunder Spear
                    cm.sendOk("You are now a #bIL Mage#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.PRIEST)) {
        cm.teachSkill(2311001,20,20);    /// Dispel
        cm.teachSkill(2311005,30,30);    /// Doom
        cm.teachSkill(2310000,20,20);    /// Elemental Resistance
        cm.teachSkill(2311003,30,30);    /// Holy Symbol
        cm.teachSkill(2311002,30,30);    /// Mystic Door
        cm.teachSkill(2311004,30,30);    /// Shining Ray

        cm.teachSkill(2311006,30,30);    /// Summon Dragon
                    cm.sendOk("You are now a #bPriest#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.CRUSADER)) {
        cm.teachSkill(1111007,20,20);    /// Armor Crash
        cm.teachSkill(1111006,30,30);    /// Coma: Axe

        cm.teachSkill(1111005,30,30);    /// Coma: Sword
        cm.teachSkill(1111002,30,30);    /// Combo Attack
        cm.teachSkill(1110000,20,20);    /// Improving MP recovery
        cm.teachSkill(1111004,30,30);    /// Panic: Axe
        cm.teachSkill(1111003,30,30);    /// Panic: Sword
        cm.teachSkill(1110001,20,20);    /// Shield Mastery
        cm.teachSkill(1111008,30,30);    /// Shout
                    cm.sendOk("You are now a #bCrusader#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.WHITEKNIGHT)) {
        cm.teachSkill(1211006,30,30);    /// Blizzard Charge: BW
        cm.teachSkill(1211002,30,30);    /// Charged Blow
        cm.teachSkill(1211004,30,30);    /// Fire Charge: BW

        cm.teachSkill(1211003,30,30);    /// Fire Charge: Sword
        cm.teachSkill(1211005,30,30);    /// Ice Charge: Sword
        cm.teachSkill(1210000,20,20);    /// Improving MP recovery
        cm.teachSkill(1211008,30,30);    /// Lightning Charge: BW
        cm.teachSkill(1211009,20,20);    /// Magic Crash
        cm.teachSkill(1210001,20,20);    /// Shield Mastery
        cm.teachSkill(1211007,30,30);    /// Thunder Charge: Sword  
                    cm.sendOk("You are now a #bWhiteknight#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.DRAGONKNIGHT)) {
        cm.teachSkill(1311008,20,20);    /// Dragon Blood
        cm.teachSkill(1311004,30,30);    /// Dragon Fury: Pole Arm
        cm.teachSkill(1311003,30,30);    /// Dragon Fury: Spear
        cm.teachSkill(1311006,30,30);    /// Dragon Roar

        cm.teachSkill(1310000,20,20);    /// Elemental Resistance
        cm.teachSkill(1311002,30,30);    /// Pole Arm Crusher
        cm.teachSkill(1311007,20,20);    /// Power Crash
        cm.teachSkill(1311005,30,30);    /// Sacrifice
        cm.teachSkill(1311001,30,30);    /// Spear Crusher
                    cm.sendOk("You are now a #bDragonKnight#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.MARAUDER)) {
        cm.teachSkill(5110000,20,20);    /// Stun Mastery
        cm.teachSkill(5110001,40,40);    /// Energy Charge
        cm.teachSkill(5111002,30,30);    /// Energy Blast

        cm.teachSkill(5111004,20,20);    /// Energy Drain
        cm.teachSkill(5111005,20,20);    /// Transformation
        cm.teachSkill(5111006,30,30);    /// Shockwave    
                    cm.sendOk("You are now a #bMarauder#k Maxed.");
                    cm.dispose();
} else if (cm.getJob().equals(MapleJob.OUTLAW)) {
        cm.teachSkill(5210000,20,20);    /// Burst Fire
        cm.teachSkill(5211001,30,30);    /// Octopus
        cm.teachSkill(5211002,30,30);    /// Gaviota

        cm.teachSkill(5211004,30,30);    /// Flamethrower
        cm.teachSkill(5211005,30,30);    /// Ice Splitter
        cm.teachSkill(5211006,30,30);    /// Homing Beacon
                    cm.sendOk("You are now a #bOutlaw#k Maxed.");
                    cm.dispose();
            }
}