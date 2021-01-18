//questions
var quizQuestions = [
    {
        "questions": "Which of the following is a Data Type?",
            "choice1": "object",
            "choice2": "var",
            "choice3": "function",
            "choice4": "console",
            "correctAnswer": "object"
    },
    {
        "questions": "What are variables used for in JavaScript Programs?",
        "choice1": "to output your code in the console",
        "choice2": "throws the code",
        "choice3": "storing numbers, dates, or other values",
        "choice4": "none of the above",
        "correctAnswer": "storing numbers, dates, or other values"
    },
    {
        "questions": "What symbol is used for single line comments?",
            "choice1": "$",
            "choice2": "//",
            "choice3": "/*",
            "choice4": "#",
            "correctAnswer": "//"
    },
    {
        "questions": "What is the !== operator?",
            "choice1": "strict equality",
            "choice2": "stop",
            "choice3": "is not an operator",
            "choice4": "strict inequality",
            "correctAnswer": "strict inequality"
    }, 
    {
        "questions": "What is the result of 6 + 2 + '7' ?",
            "choice1": "8",
            "choice2": "87",
            "choice3": "undefined",
            "choice4": "15",
            "correctAnswer": "87"
    }, 
    {
        "questions": "What is the pop() method?",
            "choice1": "pops the end of an array off and returns ",
            "choice2": "pops the beginning of an array off and returns ",
            "choice3": "pops the middle of an array off and returns ",
            "choice4": "does nothing",
            "correctAnswer": "pops the end of an array off and returns "
    }, 
    {
        "questions": "What does querySelector('idName') do?",
            "choice1": "only selects classname",
            "choice2": "Gets all the elements that have the given tag name",
            "choice3": "Gets an element by its ID name",
            "choice4": "nothing",
            "correctAnswer": "Gets an element by its ID name"
    }, 
    {
        "questions": "How do you define a variable?",
            "choice1": "var ",
            "choice2": "variable ",
            "choice3": "vari ",
            "choice4": "none of the above",
            "correctAnswer": "var"
    }, 
    {
        "questions": "What is the difference between let and var?",
            "choice1": "var is for variables,let is nothing",
            "choice2": "var is for variable, let is for output",
            "choice3": "var is function scoped, let is block scope",
            "choice4": "none of the above",
            "correctAnswer": "var is function scoped, let is block scope"
    }, 
    {
        "questions": "Can you write a multi-line string in JavaScript?",
            "choice1": "Y",
            "choice2": "n",
        "correctAnswer": "y"
    }, 
]

//variable declarations
var startbutton = document.querySelector("#start-button");
var starter = document.querySelector("#starter");
var questions = document.querySelector("#questions");
var results = document.querySelector("#results");
var userCorrect = document.querySelector("#userGotCorrect");
var userScore = document.querySelector("#userScore");
var userInitials = document.querySelector("#userInitials");
var submitBtn = document.querySelector("#submit-button");
var score = document.querySelector("#score");
var viewScores = document.querySelector("#high-score");
var questionAsk = document.querySelector("#question-ask");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice5 = document.querySelector("#choice4");
var answer = document.querySelector("#answer");
var buttonsAnswer = document.querySelector("#buttons-answer");
var respond = document.querySelector(".respond");
var timerDisplay = document.querySelector("#timer");
var timeQuiz = document.querySelector("#time-quiz");
var timeQuiz = document.querySelector("#time-question");
var leaderBoard = document.querySelector("#leaderboard");
var back = document.querySelector("#back");
var clear = document.querySelector("#clear");
var navbar = document.querySelector(".navbar");
var hr = document.querySelector("#hr");
var buttonsCheck = document.querySelector(".buttonsCheck")


var next = document.querySelector(".button-next")

var i = 0;
var guess;
var correct = 0;
var secondsLeft = 60;
var TimeLeft = 600;
var timerInterval;
var highscores = [];
var random = Math.floor(Math.random() * quizQuestions.length);
var userInitials;
var userScore
 

//questions random
function questionsAsked() {

   if(i === quizQuestions.length) {
       return;
   }
    questionAsk.textContent =  quizQuestions[random].questions;
    choice1.textContent = quizQuestions[random].choice1;
    choice2.textContent = quizQuestions[random].choice2;
    choice3.textContent = quizQuestions[random].choice3;
    choice4.textContent = quizQuestions[random].choice4;
    answer.textContent = quizQuestions[random].correctAnswer;


    buttonsAnswer.addEventListener("click", function (event) {
        if(event.target.matches("button")){
            event.preventDefault();
            guess = event.target.innerHTML;
            checkAnswer(guess);
        }
    })
}

//checks the users answer 
function checkAnswer(guess) {
    if(guess.includes(quizQuestions[random].correctAnswer)) {
        respond.textContent = "Correct! Yay";
        correct++;
        i++;
     questionsAsked();
    } else {
        respond.textContent= "Wrong!";
        i++;
        secondsLeft = secondsLeft - 5;
       questionsAsked();
    }
    
}

//when the start button is clicked
startbutton.addEventListener("click", function (event) {
    event.preventDefault();
    questionsAsked()
    starter.style.display = "none"
    questions.style.display ="block";
    //startTimer();
    timerDisplay.style.display = secondsLeft;
})

