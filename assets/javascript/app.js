//$("element you want to select").method()
var counter = 0;
var timer = 5;
var audio = new Audio("assets/audio/sadtrombone.mp3");
var questions = [
    {
        "question": "Is the sky blue?",
        "choices": ["true", "false"],
        "correctAns": "true",
        "image": "assets/images/sky.jpg"
    },
    {
        "question": "Is the Earth flat?",
        "choices": ["true", "false"],
        "correctAns": "false",
        "image": "assets/images/earth.jpg"
    },
    {
        "question": "Is Tupac still alive?",
        "choices": ["true", "false"],
        "correctAns": "false",
        "image": "assets/images/tupac.jpg"
    }
];

function getQuestion() {
    $("#questions-container").html(
        "<p>"+questions[counter].question+"</p>"+
        "<img src="+questions[counter].image+">"+ 
        "<button class='choice-btn' value="+questions[counter].choices[0]+">true</button>"+
        "<button class='choice-btn' value="+questions[counter].choices[1]+">false</button>"
    )
}

getQuestion();

// when the user clicks on the choice btn
// up the counter by one
// to show a new question
$(document).on("click", ".choice-btn", function(){
    if($(this).val() === questions[counter].correctAns) {
        alert("Correct!");
        counter++;
        if(counter < questions.length) {
            getQuestion();
        } else {
            alert("Good job you got all the questions right! Starting over!");
            counter = 0;
            getQuestion();
        }
    } else {
        alert("Incorrect! Try again!");
    }
});

var timerId = setInterval(function() {
    timer--;
    $("#timer").text(timer);
    if(timer === 0) {
        alert("time up!");
        clearInterval(timerId);
        counter = 0;
        $("#questions-container").hide();
        $("#timer").text("GAME OVER!");
        audio.play();
    }
}, 1000);