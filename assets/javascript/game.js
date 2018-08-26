$(document).ready(function () {



    var compRandom = Math.floor(Math.random() * 102) + 19;
    // console.log(compRandom);

    var wins = 0;
    var losses = 0;

    // Range 1-12
    var crys1 = Math.floor(Math.random() * 12) + 1;
    var crys2 = Math.floor(Math.random() * 12) + 1;
    var crys3 = Math.floor(Math.random() * 12) + 1;
    var crys4 = Math.floor(Math.random() * 12) + 1;
    // console.log(crys1 + ", " + crys2 + ", " + crys3 + ", " + crys4);

    var total = 0;

    // if c1 creats a random num 15 and c4 creats 5, add them both and continue to ad other c's until you win or loose. 
    $("#crys1").on("click", function () {
        total = crys1 + total;
        // console.log(total);
        ifWon();
    });
    $("#crys2").on("click", function () {
        total = crys2 + total;
        ifWon();
    });
    $("#crys3").on("click", function () {
        total = crys3 + total;
        ifWon();
    });
    $("#crys4").on("click", function () {
        total = crys4 + total;
        ifWon();
    });

    function ifWon() {
        if (total === compRandom) {
            wins++;
            $("#wins").text(wins);
        }
    }

    function ifLoss() {
        if (total !== compRandom) {
            losses++;
            $("#losses").text(losses);
        }
    }

    //Total
function scoring() {
    if (compRandom === total) {
        wins++;
        // console.log('wins: ' + wins);
        $('#wins').text(wins);
        restart();
    } else if (total > compRandom) {
        losses++;
        // console.log('losses: ' + losses);
        $('#losses').text(losses);
        restart();
    }
}


});


