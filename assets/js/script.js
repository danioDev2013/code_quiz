 //questions array
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
            "correctAnswer": "var "
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
            "choice1": "Yes",
            "choice2": "No",
            "choice3": "this",
            "choice4": "that",
        "correctAnswer": "Yes"
    },
];

//variable declarations with html selectors
var startButton = document.querySelector("#startButton");
var startArea = document.querySelector("#startArea");
var questionAsk = document.querySelector("#questionAsk");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice5 = document.querySelector("#choice4");
var answerQuestion = document.querySelector("#answer");
var buttons = document.querySelector("#buttonsAnswer");
var respond = document.querySelector(".respond");
var questionTimeElement = document.querySelector("#questionTime");
var quizTimeElement = document.querySelector("#quizTime");
var timerShow = document.querySelector("#timer");
var correct = document.querySelector("#userGotCorrect");
var userScore = document.querySelector("#userScore");
var score = document.querySelector("#score");
var results = document.querySelector("#results");
var initials = document.querySelector("#userInitials");
var leaderBoard = document.querySelector("#leaderBoard");
var highScoreView = document.querySelector("#highScoreView");
var submitBtn = document.querySelector("#submitButton");
var navbar = document.querySelector(".navbar");
var goBackStart = document.querySelector("#back");
var clearHighScore = document.querySelector("#clear")


//variable declaration
var guessCorrect = 0;
var i = 0;
var questionTime = 30;
var highScoreArr = [];
var highScores = [];
var newHighScores = [];
var userInitials;
var userScore;
var scoreCorrect;





function questionGen() {
    if(i === quizQuestions.length) {
        showFinal();
        clearInterval(questionTimer);
        return;
    }

    questionAsk.textContent =  quizQuestions[i].questions;
    choice1.textContent = quizQuestions[i].choice1;
    choice2.textContent = quizQuestions[i].choice2;
    choice3.textContent = quizQuestions[i].choice3;
    choice4.textContent = quizQuestions[i].choice4;
    answerQuestion.textContent = quizQuestions[i].correctAnswer;
}

function checkAnswer() {
   if(quizQuestions[i].correctAnswer === guess) {
       respond.textContent = "Correct";
       respondShow();
       i++;
       guessCorrect++;
       questionGen();
   } else {
      i++;
      respond.textContent = "Wrong!";
      questionTime = questionTime - 10;
      console.log(questionTime);
      respondShow();
      questionGen();
   }
}

function respondShow() {
    respond.style.display = "block";
    var respondCountdown = 1;
    var timerRespond = setTimeout(function () {
        respondCountdown--;
        if(respondCountdown === 0);
        clearInterval(timerRespond);
        respond.style.display = "none";
    }, 1000);
}

function startTimer() {
    questionTimeElement.style.display = "block";
    questionTimer = setInterval(function () {
        questionTime--;
        questionTimeElement.textContent = questionTime;
        if(questionTime === 0) {
            showFinal();
            clearInterval(questionTimer);
        }
    }, 1000);
}

function showFinal() {
    clearInterval(questionTimer);
    questionTimeElement.style.display = "none";
    questions.style.display = "none";
    results.style.display = "block";
    correct.textContent = guessCorrect;
    scoreCorrect = (guessCorrect / 10) * 100 + "%";
    userScore.textContent = " " + scoreCorrect;
}

function getScore() {
    highScoreArr = JSON.parse(localStorage.getItem("highScores"));
    console.log(highScoreArr);
    if(!highScoreArr) {
        highScoreArr = [];
        return(highScoreArr);
    } else {
        return(highScoreArr);
    }
}

function showScore() {
    results.style.display = "none";
    score.style.display = "block";
    questionTimeElement.style.display = "none";
    navbar.style.display = "none";
    leaderBoard.innerHTML = "";
    getScore();
    for(var s = 0; s < highScoreArr.length; s++) {
        var scoreEntry = document.createElement("li");
        scoreEntry.setAttribute("class", "highScoresArr");
        var scoreInitials = highScoreArr[s].initials;
        var scoreSave = highScoreArr[s].score;
        scoreEntry.textContent = scoreInitials + " - " + scoreSave;
        leaderBoard.appendChild(scoreEntry);
    }

};


startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startArea.style.display= "none";
    questions.style.display = "block";
    timerShow.style.display = "block";
    getScore();
    questionGen();
    startTimer();
}) 

buttonsAnswer.addEventListener("click", function (event) {
    if(event.target.matches("button")) {
        guess = event.target.innerHTML;
        console.log(guess);
        clearInterval(questionTimer);
        if(!quizQuestions[i].correctAnswer === guess) {
            questionTime = 20;
        } else {
           questionTime = 30;
        }
        startTimer();
        checkAnswer();
    }
})

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    userInitials = initials.value.trim();
    if(userInitials === "") {
        display("please enter initials");
        return;
    }
    console.log(userInitials);
    console.log(scoreCorrect);
    var newUserScore = {"initials": userInitials, "score": scoreCorrect};
    highScoreArr.push(newUserScore);
    console.log(highScores);
    localStorage.setItem("highScores", JSON.stringify(highScoreArr));
    showScore();
})


highScoreView.addEventListener("click", function(event) {
    event.preventDefault();
    startArea.style.display = "none";
    showScore();
})

goBackStart.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.reload();
})

clearHighScore.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.removeItem("highScores");
    while(leaderBoard.firstChild){
        leaderBoard.removeChild(leaderBoard.lastChild);
    }
})
