// Declare variables
var intervalid;
var time = 5;
var clockRunning = false;




// Timer that counts down to and stops at zero


// Display question with radio buttons selection for answers, only one selectable

// submit button that stores the answer in memory and displays the next trivia question. If no questions left ends game and displays results (number correct/incorrect)

// When timer reaches zero display trivia quiz results (correct/incorrect) and play again button
function start() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(countDown, 1000);
      clockRunning = true;
    }
  }

// $(".timerText").text(time);

function countDown() {
    if (time > 0) {
    time--;
    } else {
        $(".question").text("Times Up!");
        $("button").text("Play Again?");
        $("button").on("click", function reset() {
            clockRunning = false;
            time = 5;
            $("button").text("Next");
            $(".question").text("place holder for questions[i]");
        });
    }


  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);
  console.log(converted);

  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#timerText").text(converted);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

start();