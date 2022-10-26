function countdownTimer() {
    //countdownTimer will go 50 to 0 by 5s
    console.log("countdownTimer() started");
    var currtime = 50;
    document.getElementById("countDis").innerHTML = currtime + " sec"

    //45 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 5000);

    //40 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 10000);

    //35 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 15000);
    //30 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 20000);

    //25 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 25000);

    //20 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 30000);

    //15 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 35000);

    //10 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 40000);

    //5 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 45000);

    //0 sec display
    setTimeout(function () {
        currtime = currtime - 5;
        console.log(currtime),
            document.getElementById("countDis").innerHTML = currtime + " sec"
    }, 50000);
}

function playcraps() {
    //troubleshooting playcraps() has started
    console.log("playCraps() started");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;

    //check if craps (7 or 11)

    var sum = die1 + die2;
    if (sum == 7 || sum == 11) {
        console.log("You lose!!!!!");
        document.getElementById("gameRes").innerHTML = "You did find victory. Please play again and WIN!";
        //check for win (even doubles)
    } else if (die1 % 2 == 0 && die1 == die2) {
        console.log("you win!!!!!");
        document.getElementById("gameRes").innerHTML = "You Won!!!!!";
        //check for tie
    } else {
        console.log("You did not win or lose.");
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again and WIN!"
    }
}

//btrCountdownTimer() created to fufil Assignment: Efficiency at Mission Control
function btrCountdownTimer() {
    console.log("btrCountdownTimer() started");
    var currTime = 50;

    for (var i = 0; i <= 10; i++) {
        setTimeout(function () {
            //what we do each function
            console.log(currTime);
            document.getElementById("countDis").innerHTML = currTime;
            if (currTime == 0) {
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            }
            currTime = currTime - 5;
        }, i * 2000)
    }
}

function chgbterCountdownTimer() {
    console.log("chgbtrCountdownTimer() started");
    var currTime = 50;
    var ogcurrTime = currTime;

    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            //what we do each function
            console.log(currTime);
            if (currTime == 0) {
                //when we finish counting down
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            } else if (currTime < 0.5 * ogcurrTime) {
                //less than 1/2 left
                document.getElementById("countDis").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
            } else {
                //at the beginning
                document.getElementById("countDis").innerHTML = currTime + " seconds";
            }
            currTime = currTime - 5;
        }, i * 2000)
    }
}

function startFun(){
    console.log("startFun() started");
    //disable start button
    document.getElementById("startButton").disabled = true;

    //enable (disable!) stop button
    document.getElementById("stopButton").disabled = false;

    chgbterCountdownTimer();
}