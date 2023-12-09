buttonColors = ["red", "blue", "green", "yellow"]
gamePattern = []
userClickedPattern = []
level = 0
started = false


$(document).keydown(function () { 
    if (!started) {
        $('h1').text('Level ' + level);
        started = true
        nextSequence()        
    }
});


function nextSequence(){   
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    randomNumber = Math.floor(Math.random() * 4)
    randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); 
    playSound(randomChosenColor);    
};


function playSound(name) {
    $('#' + name).click(function () { 
        myAudio = new Audio("sounds/" + name + ".mp3")
        myAudio.play();        
    });
};


$('.btn').click(function () { 

    userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor)    
    
    playSound(userChosenColor)
    animatePress(userChosenColor)

    checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColor) {
    $("#" + currentColor).click(function () { 
        $(this).addClass('pressed'); 
    });

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
    
};


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }
    }
    else {
      console.log("wrong");
      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }
};


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
};

