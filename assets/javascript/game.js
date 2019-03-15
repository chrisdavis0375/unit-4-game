
//Random number variables

    var random = Math.floor(Math.random() * 50 + 1);
    $("#randomNumber").text(random);


    rubyNumber = Math.floor(Math.random() * 15 + 1);
    sapphireNumber = Math.floor(Math.random() * 15 + 1);
    emeraldNumber = Math.floor(Math.random() * 15 + 1);
    yellowCrystalNumber = Math.floor(Math.random() * 15 + 1);
    
//Score variables
    var wins = 0;
    var losses = 0;
    var total = 0;

    $("#wins").text(wins);
    $("loses").text(loses);
    $("total").text(score);

function reset() {
    random = Math.floor(Math.random() * 50 + 1);
    $("#randomNumber").text(random);

    rubyNumber = Math.floor(Math.random() * 15 + 1);
    sapphireNumber = Math.floor(Math.random() * 15 + 1);
    emeraldNumber = Math.floor(Math.random() * 15 + 1);
    yellowCrystalNumber = Math.floor(Math.random() * 15 + 1);

    total = 0;
    $("#score").text(total);
}

function win() {
    wins++;
    $("#wins").text(wins);

    reset();
}

function loss() {
    losses++;
    $("losses").text(losses);

    reset();
}

$("#ruby").on('click', function() {
    total = total + rubyNumber;
    $("#score").text(total);
        if (total = randomNumber) {
            win();
        }
        else if (total > random) {
            loss();
        }
})

$("#sapphire").on('click', function() {
    total = total + sapphireNumber;
    $("#score").text(total);
        if (total = randomNumber) {
            win();
        }
        else if (total > random) {
            loss();
        }
})

$("#emerald").on('click', function() {
    total = total + emeraldNumber;
    $("#score").text(total);
        if (total = randomNumber) {
            win();
        }
        else if (total > random) {
            loss();
        }
})

$("#yellowCrystal").on('click', function() {
    total = total + yellowCrystalNumber;
    $("#score").text(total);
        if (total = randomNumber) {
            win();
        }
        else if (total > random) {
            loss();
        }
})
