/* Duey skill master
*/


var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendYesNo("Hello #h #, would you like to get your Skills maxed out? It's only a fee of 1,000,000 mesos. You might need to relog after this.");
		} else if (status == 1) {
			if (cm.getMeso() < 1000000) {
				cm.sendOk("You sir, do not have enough mesos. #bYOU SUCK#k #h # is a noob.");
				cm.dispose();
		} else {
			if (cm.getMeso() >= 1000000) {
			cm.gainMeso(-1000000);
cm.teachSkill(5001001,20,20); //Start of Pirate Job Skills
cm.teachSkill(5001002,20,20);
cm.teachSkill(5000000,20,20);
cm.teachSkill(5001003,20,20);
cm.teachSkill(5001005,10,10);
cm.teachSkill(5101002,20,20);
cm.teachSkill(5100001,20,20);
cm.teachSkill(5100000,20,20);
cm.teachSkill(5101003,20,20);
cm.teachSkill(5101004,20,20);
cm.teachSkill(5101005,20,20);
cm.teachSkill(5101007,10,10);
cm.teachSkill(5101006,20,20);
cm.teachSkill(5200000,20,20);
cm.teachSkill(5201001,20,20);
cm.teachSkill(5201002,20,20);
cm.teachSkill(5201003,20,20);
cm.teachSkill(5201004,20,20);
cm.teachSkill(5201005,10,10);
cm.teachSkill(5201006,20,20);
cm.teachSkill(5110000,20,20);
cm.teachSkill(5110001,40,40);
cm.teachSkill(5111002,30,30);
cm.teachSkill(5111004,20,20);
cm.teachSkill(5111005,20,20);
cm.teachSkill(5111006,30,30);
cm.teachSkill(5210000,20,20);
cm.teachSkill(5211001,30,30);
cm.teachSkill(5211002,30,30);
cm.teachSkill(5211004,30,30);
cm.teachSkill(5211005,30,30);
cm.teachSkill(5211006,30,30);
cm.teachSkill(5220001,30,30);
cm.teachSkill(5220002,20,20);
cm.teachSkill(5221000,20,20);
cm.teachSkill(5221003,30,30);
cm.teachSkill(5221004,30,30);
cm.teachSkill(5221006,10,10);
cm.teachSkill(5221007,30,30);
cm.teachSkill(5221008,30,30);
cm.teachSkill(5221009,20,20);
cm.teachSkill(5221010,1,1);
cm.teachSkill(5220011,20,20);
cm.teachSkill(5121000,20,20);
cm.teachSkill(5121001,30,30);
cm.teachSkill(5121002,30,30);
cm.teachSkill(5121003,20,20);
cm.teachSkill(5121004,30,30);
cm.teachSkill(5121005,30,30);
cm.teachSkill(5121007,30,30);
cm.teachSkill(5121008,1,1);
cm.teachSkill(5121009,20,20); //End of Pirate Job Skills
cm.teachSkill(1003,1,1);
cm.teachSkill(1004,1,1);
cm.teachSkill(1121011,1,1);
cm.teachSkill(1221012,1,1);
cm.teachSkill(1321010,1,1);
cm.teachSkill(2121008,1,1);
cm.teachSkill(2221008,1,1);
cm.teachSkill(2321009,1,1);
cm.teachSkill(3121009,1,1);
cm.teachSkill(3221008,1,1);
cm.teachSkill(4121009,1,1);
cm.teachSkill(4221008,1,1); //End of max-level "1" skills
cm.teachSkill(1000002,8,8); //Start of max-level "8" skills
cm.teachSkill(3000002,8,8);
cm.teachSkill(4000001,8,8); //End of max-level "8" skills
cm.teachSkill(1000001,10,10); //Start of max-level "10" skills
cm.teachSkill(2000001,10,10); //End of max-level "10" skills
cm.teachSkill(1000000,16,16); //Start of max-level "16" skills
cm.teachSkill(2000000,16,16);
cm.teachSkill(3000000,16,16); //End of max-level "16" skills
cm.teachSkill(1001003,20,20); //Start of max-level "20" skills
cm.teachSkill(1001004,20,20);
cm.teachSkill(1001005,20,20);
cm.teachSkill(2001002,20,20);
cm.teachSkill(2001003,20,20);
cm.teachSkill(2001004,20,20);
cm.teachSkill(2001005,20,20);
cm.teachSkill(3000001,20,20);
cm.teachSkill(3001003,20,20);
cm.teachSkill(3001004,20,20);
cm.teachSkill(3001005,20,20);
cm.teachSkill(4000000,20,20);
cm.teachSkill(4001344,20,20);
cm.teachSkill(4001334,20,20);
cm.teachSkill(4001002,20,20);
cm.teachSkill(4001003,20,20);
cm.teachSkill(1101005,20,20);
cm.teachSkill(1100001,20,20); //Start of mastery's
cm.teachSkill(1100000,20,20);
cm.teachSkill(1200001,20,20);
cm.teachSkill(1200000,20,20);
cm.teachSkill(1300000,20,20);
cm.teachSkill(1300001,20,20);
cm.teachSkill(3100000,20,20);
cm.teachSkill(3200000,20,20);
cm.teachSkill(4100000,20,20);
cm.teachSkill(4200000,20,20); //End of mastery's
cm.teachSkill(4201002,20,20);
cm.teachSkill(4101003,20,20);
cm.teachSkill(3201002,20,20);
cm.teachSkill(3101002,20,20);
cm.teachSkill(1301004,20,20);
cm.teachSkill(1301005,20,20);
cm.teachSkill(1201004,20,20);
cm.teachSkill(1201005,20,20);
cm.teachSkill(1101004,20,20); //End of boosters
cm.teachSkill(1101006,20,20);
cm.teachSkill(1201006,20,20);
cm.teachSkill(1301006,20,20);
cm.teachSkill(2101001,20,20);
cm.teachSkill(2100000,20,20);
cm.teachSkill(2101003,20,20);
cm.teachSkill(2101002,20,20);
cm.teachSkill(2201001,20,20);
cm.teachSkill(2200000,20,20);
cm.teachSkill(2201003,20,20);
cm.teachSkill(2201002,20,20);
cm.teachSkill(2301004,20,20);
cm.teachSkill(2301003,20,20);
cm.teachSkill(2300000,20,20);
cm.teachSkill(2301001,20,20);
cm.teachSkill(3101003,20,20);
cm.teachSkill(3101004,20,20);
cm.teachSkill(3201003,20,20);
cm.teachSkill(3201004,20,20);
cm.teachSkill(4100002,20,20);
cm.teachSkill(4101004,20,20);
cm.teachSkill(4200001,20,20);
cm.teachSkill(4201003,20,20); //End of second-job skills and first-job
cm.teachSkill(4211005,20,20);
cm.teachSkill(4211003,20,20);
cm.teachSkill(4210000,20,20);
cm.teachSkill(4110000,20,20);
cm.teachSkill(4111001,20,20);
cm.teachSkill(4111003,20,20);
cm.teachSkill(3210000,20,20);
cm.teachSkill(3110000,20,20);
cm.teachSkill(3210001,20,20);
cm.teachSkill(3110001,20,20);
cm.teachSkill(3211002,20,20);
cm.teachSkill(3111002,20,20);
cm.teachSkill(2210000,20,20);
cm.teachSkill(2211004,20,20);
cm.teachSkill(2211005,20,20);
cm.teachSkill(2111005,20,20);
cm.teachSkill(2111004,20,20);
cm.teachSkill(2110000,20,20);
cm.teachSkill(2311001,20,20);
cm.teachSkill(2311005,20,20);
cm.teachSkill(2310000,20,20);
cm.teachSkill(1311007,20,20);
cm.teachSkill(1310000,20,20);
cm.teachSkill(1311008,20,20);
cm.teachSkill(1210001,20,20);
cm.teachSkill(1211009,20,20);
cm.teachSkill(1210000,20,20);
cm.teachSkill(1110001,20,20);
cm.teachSkill(1111007,20,20);
cm.teachSkill(1110000,20,20); //End of 3rd job skills
cm.teachSkill(1121000,20,20);
cm.teachSkill(1221000,20,20);
cm.teachSkill(1321000,20,20);
cm.teachSkill(2121000,20,20);
cm.teachSkill(2221000,20,20);
cm.teachSkill(2321000,20,20);
cm.teachSkill(3121000,20,20);
cm.teachSkill(3221000,20,20);
cm.teachSkill(4121000,20,20);
cm.teachSkill(4221000,20,20); //End of Maple Warrior // Also end of max-level "20" skills
cm.teachSkill(1321007,10,10);
cm.teachSkill(1320009,25,25);
cm.teachSkill(1320008,25,25);
cm.teachSkill(2321006,10,10);
cm.teachSkill(1220010,10,10);
cm.teachSkill(1221004,19,19);
cm.teachSkill(1221003,19,19);
cm.teachSkill(1100003,30,30);
cm.teachSkill(1100002,30,30);
cm.teachSkill(1101007,30,30);
cm.teachSkill(1200003,30,30);
cm.teachSkill(1200002,30,30);
cm.teachSkill(1201007,30,30);
cm.teachSkill(1300003,30,30);
cm.teachSkill(1300002,30,30);
cm.teachSkill(1301007,30,30);
cm.teachSkill(2101004,30,30);
cm.teachSkill(2101005,30,30);
cm.teachSkill(2201004,30,30);
cm.teachSkill(2201005,30,30);
cm.teachSkill(2301002,30,30);
cm.teachSkill(2301005,30,30);
cm.teachSkill(3101005,30,30);
cm.teachSkill(3201005,30,30);
cm.teachSkill(4100001,30,30);
cm.teachSkill(4101005,30,30);
cm.teachSkill(4201005,30,30);
cm.teachSkill(4201004,30,30);
cm.teachSkill(1111006,30,30);
cm.teachSkill(1111005,30,30);
cm.teachSkill(1111002,30,30);
cm.teachSkill(1111004,30,30);
cm.teachSkill(1111003,30,30);
cm.teachSkill(1111008,30,30);
cm.teachSkill(1211006,30,30);
cm.teachSkill(1211002,30,30);
cm.teachSkill(1211004,30,30);
cm.teachSkill(1211003,30,30);
cm.teachSkill(1211005,30,30);
cm.teachSkill(1211008,30,30);
cm.teachSkill(1211007,30,30);
cm.teachSkill(1311004,30,30);
cm.teachSkill(1311003,30,30);
cm.teachSkill(1311006,30,30);
cm.teachSkill(1311002,30,30);
cm.teachSkill(1311005,30,30);
cm.teachSkill(1311001,30,30);
cm.teachSkill(2110001,30,30);
cm.teachSkill(2111006,30,30);
cm.teachSkill(2111002,30,30);
cm.teachSkill(2111003,30,30);
cm.teachSkill(2210001,30,30);
cm.teachSkill(2211006,30,30);
cm.teachSkill(2211002,30,30);
cm.teachSkill(2211003,30,30);
cm.teachSkill(2311003,30,30);
cm.teachSkill(2311002,30,30);
cm.teachSkill(2311004,30,30);
cm.teachSkill(2311006,30,30);
cm.teachSkill(3111004,30,30);
cm.teachSkill(3111003,30,30);
cm.teachSkill(3111005,30,30);
cm.teachSkill(3111006,30,30);
cm.teachSkill(3211004,30,30);
cm.teachSkill(3211003,30,30);
cm.teachSkill(3211005,30,30);
cm.teachSkill(3211006,30,30);
cm.teachSkill(4111005,30,30);
cm.teachSkill(4111006,20,20);
cm.teachSkill(4111004,30,30);
cm.teachSkill(4111002,30,30);
cm.teachSkill(4211002,30,30);
cm.teachSkill(4211004,30,30);
cm.teachSkill(4211001,30,30);
cm.teachSkill(4211006,30,30);
cm.teachSkill(1120004,30,30);
cm.teachSkill(1120003,30,30);
cm.teachSkill(1121008,30,30);
cm.teachSkill(1121010,30,30);
cm.teachSkill(1121006,30,30);
cm.teachSkill(1121002,30,30);
cm.teachSkill(1220005,30,30);
cm.teachSkill(1221009,30,30);
cm.teachSkill(1221007,30,30);
cm.teachSkill(1221011,30,30);
cm.teachSkill(1221002,30,30);
cm.teachSkill(1320005,30,30);
cm.teachSkill(1320006,30,30);
cm.teachSkill(1321003,30,30);
cm.teachSkill(1321002,30,30);
cm.teachSkill(2121005,30,30);
cm.teachSkill(2121003,30,30);
cm.teachSkill(2121004,30,30);
cm.teachSkill(2121002,30,30);
cm.teachSkill(2121007,30,30);
cm.teachSkill(2121006,30,30);
cm.teachSkill(2221007,30,30);
cm.teachSkill(2221006,30,30);
cm.teachSkill(2221003,30,30);
cm.teachSkill(2221005,30,30);
cm.teachSkill(2221004,30,30);
cm.teachSkill(2221002,30,30);
cm.teachSkill(2321007,30,30);
cm.teachSkill(2321003,30,30);
cm.teachSkill(2321008,30,30);
cm.teachSkill(2321005,30,30);
cm.teachSkill(2321004,30,30);
cm.teachSkill(2321002,30,30);
cm.teachSkill(3120005,30,30);
cm.teachSkill(3121008,30,30);
cm.teachSkill(3121003,30,30);
cm.teachSkill(3121007,30,30);
cm.teachSkill(3121006,30,30);
cm.teachSkill(3121002,30,30);
cm.teachSkill(3121004,30,30);
cm.teachSkill(3221006,30,30);
cm.teachSkill(3220004,30,30);
cm.teachSkill(3221003,30,30);
cm.teachSkill(3221005,30,30);
cm.teachSkill(3221001,30,30);
cm.teachSkill(3221002,30,30);
cm.teachSkill(4121004,30,30);
cm.teachSkill(4121008,30,30);
cm.teachSkill(4121003,30,30);
cm.teachSkill(4121006,30,30);
cm.teachSkill(4121007,30,30);
cm.teachSkill(4120005,30,30);
cm.teachSkill(4221001,30,30);
cm.teachSkill(4221007,30,30);
cm.teachSkill(4221004,30,30);
cm.teachSkill(4221003,30,30);
cm.teachSkill(4221006,30,30);
cm.teachSkill(4220005,30,30);
cm.teachSkill(1221001,30,30);
cm.teachSkill(1121001,30,30);
cm.teachSkill(1321001,30,30);
cm.teachSkill(2121001,30,30);
cm.teachSkill(2221001,30,30);
cm.teachSkill(2321001,30,30);
  cm.dispose();
			}
		}
	}
}

}
