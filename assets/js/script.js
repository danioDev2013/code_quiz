var highScore = document.querySelector('#high-score');
var quizTimer = document.querySelector('#time-quiz');
var questTimer = document.querySelector('#time-question');
var questionAsk = document.querySelector('#question');
var answersQues = document.querySelector('#question-answer')

var startBtn = document.querySelector('#start-button');
var submitBtn = document.querySelector('#submit-button');


var timers = document.querySelector('#timer');


button.addEventListener("click", replaceButtonText);

function replaceButtonText() {
    document.getElementById("button").innerHTML = "Submit";
    document.getElementById("question-ask").innerHTML = "Question";
    document.getElementById("question-answer").innerHTML="answers";
    document.getElementById("timer").style.visibility = "visible";
}

