var status = 0;
var music = Array("Bgm16/Duskofgod","Bgm16/FightingPinkBeen","Bgm16/Forgetfulness","Bgm16/Remembrance","Bgm16/Repentance","Bgm16/TimeTemple","Bgm17/MureungSchool1","Bgm17/MureungSchool2","Bgm17/MureungSchool3","Bgm17/MureungSchool4","Bgm18/BlackWing","Bgm18/DrillHall","Bgm18/QueensGarden","Bgm18/RaindropFlower","Custom/EveryHeart","Custom/DamDadiDoo","Custom/BoGoShipDa","Custom/Electropop","Custom/GivePraise","Custom/JahJahCity","Custom/MudUp","Custom/Kryptonite","Custom/UnknownSoldier","Custom/LongKissGoodbye","Custom/TheSaltwaterRoom","Custom/GoinCrazy","Custom/CurseOfCurves","Custom/IntoTheOcean","Custom/Augustana","Custom/IWillFollowYouIntoTheDark");

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 2 && mode == 0) {
            cm.sendOk("You're done now, go away.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var MusicPlayer = "#b#eCustom Music Player#k#n";
            MusicPlayer += "\r\nPlease make sure you have the latest custom sound.wz file for these songs to all work. \r\n";
            for (var i = 0; i < music.length; i++) {
                MusicPlayer += "\r\n#L" + i + "# " +music[i]+ "#l";
            }
            cm.sendSimple(MusicPlayer);
        } else if (status == 1) {
            if (selection >= 0) {
                cm.sendYesNo("Do you want change the music to "+music[selection]+" ?");
                mc = selection;
            } else {
                cm.dispose();
            }
        } else if (status == 2) {
                cm.musicChange(music[mc]);
                cm.dispose();      
        } else {
            cm.dispose();
        }
    }
}  