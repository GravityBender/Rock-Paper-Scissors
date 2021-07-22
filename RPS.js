function rpsgame(yrchoice){
    console.log(yrchoice);
    var hmchoice, btchoice;
    hmchoice = yrchoice.id;
    btchoice = numberedchoice(randomint());

    console.log('Computer choice:', btchoice);

    let result = decidewinner(hmchoice, btchoice);
    console.log(result);

    let message = finalmessage(result);
    console.log(message);
    frntend(yrchoice.id, btchoice, message);
}

function randomint(){
    return Math.floor(Math.random() * 3);
}

function numberedchoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decidewinner(yrchoice, compchoice){
    var rpsdb = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }

    var yrscore = rpsdb[yrchoice][compchoice];
    var compscore = rpsdb[compchoice][yrchoice];

    return [yrscore, compscore];
}

function finalmessage([yrscore, btscore]){
    if(yrscore === 0){
        return {'message': 'You Lost', 'color': 'red'};
    }
    else if(yrscore === 0.5){
        return {'message': 'You Tied', 'color': 'yellow'};
    }
    else{
        return {'message': 'You Won', 'color': 'green'};
    }
}

function frntend(hmimgchoice, btimgchoice, finalmessage){
    var imgdbs = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var hmdiv = document.createElement('div');
    var btdiv = document.createElement('div');
    var msgdiv = document.createElement('div');

    hmdiv.innerHTML = "<img src='" + imgdbs[hmimgchoice] + "' height=150 width=150 style='box-shadow: 0px 10px 15px rgb(92, 158, 92)'>";
    msgdiv.innerHTML = "<h2 style='color: " + finalmessage['color'] + "; font-size: 30px; padding: 30px'>" + finalmessage['message'];
    btdiv.innerHTML = "<img src='" + imgdbs[btimgchoice] + "' height=150 width=150 style='box-shadow: 0px 10px 15px rgb(92, 158, 92)'>";

    document.getElementById('game').appendChild(hmdiv);
    document.getElementById('game').appendChild(msgdiv);
    document.getElementById('game').appendChild(btdiv);
}