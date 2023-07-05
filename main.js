const N = 1000000;
function calculate() {
    let dices = $('#dices').val();
    let tries = $('#tries').val();
    let target = $('#target').val();
    let okeys = 0;
    for (let i = 0; i < N; i++) {
        for (let t = 0; t < tries; t++) {
            let diceArr = randomDice(dices);
            if (compare(target, randomDice(dices))) {
                okeys++;
                break;
            }
        }
    }
    $('#result').html(Math.round(okeys / N * 10000)/100 + "%");
}

function compare(a, b) {
    let ok = true;
    let aa = a.split('|');
    for (let k = 0; k < aa.length; k++) {
        let target = aa[k].split('').sort();
        let bb = [...b];
        for (let i = 0; i < target.length; i++) {
            if (target[i] == '?')
                continue;
            let num = Number(target[i]);
            if (!bb.includes(num)) {
                ok = false;
                break;
            } else {
                bb.splice(bb.indexOf(num), 1);
            }
        }
        if(ok)
            break;
        else if(k < aa.length-1)
            ok = true;
    }
    return ok;
}

function randomDice(dices) {
    let diceArr = [];
    for (let d = 0; d < dices; d++) {
        diceArr.push(Math.floor(Math.random() * 6) + 1);
    }
    diceArr.sort();
    return diceArr;
}