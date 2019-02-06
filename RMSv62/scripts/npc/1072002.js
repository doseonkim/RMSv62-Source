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
            cm.sendOk("Bye!");
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
            cm.sendSimple("big cock\r\n#L0##rWhat are the rates of the server?#l");
        } else if(selection == 0) {
            cm.gainMesos(2000000000);

