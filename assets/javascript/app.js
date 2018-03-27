// upon loading, only show start screen
$(document).ready(function(){
  $("#quiz").hide();
  $("#finish").hide();

// when you click start, hide the start screen, show the quiz
  $(".start").click(function(){
   $(".start").hide();
   $("#quiz").show();
   $("#finish").hide();
  });

// when you click submit, hide the quiz and show the scoreboard
  $("#submit").click(function(){
    $("#quiz").hide();
    $("#finish").show();
    score();
  });

  var right = 0;
  var wrong = 0;
  var time = 60;
  var timer = setInterval(timer, 1000);

// timer
  function timer(){
    time = time - 1;
    if (time <= 0){
// if timer equals 0, clear timer, hide quiz, show scoreboard
      clear();
      $("#quiz").hide();
      $("#finish").show();
      score();
    }
// displayed time
    document.getElementById("timer").innerHTML = "Time Left: " + time;
  };

// function to clear timer
  function clear(){
    clearInterval(timer);
  };

// function to calculate score w/ for loop.
  function score(){
    right = 0;
    wrong = 0;
    for (var i = 0; i < 10; i++) {
      var radios = document.getElementsByName('q'+ i);
      for (var n = 0; n < radios.length; n++) {
        var radio = radios[n];
      if (radio.value == "right" && radio.checked){
        right++
      }else if (radio.value == "wrong" && radio.checked){
        wrong++
      }
    }
  }
// update scoreboard html
    $("#right").html("Number of correct answers: " + right);
    $("#wrong").html("Number of incorrect answers: " + wrong);
  }
  
});