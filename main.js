const N=100000;
function calculate() {
    let dices = $('#dices').val();
    let tries = $('#tries').val();
    let target = $('#target').val();
    target = target.split("").sort();
    let okeys = 0;
    for (let i = 0; i < N; i++) {
        for(let t=0; t<tries; t++) {
            let diceArr = randomDice(dices);
            if(compare(target, randomDice(dices))) {
                okeys++;
                break;
            }
        }
    }
    $('#result').html(Math.round(okeys/N*100) + "%");
}

function compare(a, b) {
    let ok = true;
    for(let i=0; i<a.length; i++) {
        if(a[i] == '?')
            continue;
        let num = Number(a[i]);
        if(!b.includes(num)) {
            ok = false;
            break;
        } else {
            b.splice(b.indexOf(num), 1);
        }
    }
    return ok;
}

function randomDice(dices) {
    let diceArr = [];
    for(let d = 0; d< dices; d++) {
        diceArr.push(Math.floor(Math.random()*6)+1);
    }
    diceArr.sort();
    return diceArr;
}