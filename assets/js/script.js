//questions
var quizQuestions = [
    {
        questions: "Which of the following is a Data Type?",
        answers: {
            a: 'object',
            b: 'var',
            c: 'function',
            d: 'console'
        },
        correctAnswer: 'a'
    },
    {
        questions: "What are variables used for in JavaScript Programs?",
        answers: {
            a: 'to output your code in the console',
            b: 'throws the code',
            c: 'storing numbers, dates, or other values',
            d: 'none of the above'
        },
        correctAnswer: 'c'
    },
    {
        questions: "What symbol is used for single line comments?",
        answers: {
            a: '$',
            b: '//',
            c: '/*',
            d: '#'
        },
        correctAnswer: 'b'
    },
    {
        questions: "What is the !== operator?",
        answers: {
            a: 'strict equality',
            b: 'stop',
            c: 'is not an operator',
            d: 'strict inequality'
        },
        correctAnswer: 'd'
    }, 
    {
        questions: "What is the result of 6 + 2 + '7' ?",
        answers: {
            a: '8',
            b: '87',
            c: 'undefined',
            d: '15'
        },
        correctAnswer: 'b'
    }, 
    {
        questions: "What is the pop() method?",
        answers: {
            a: 'pops the end of an array off and returns it',
            b: 'pops the beginning of an array off and returns it',
            c: 'pops the middle of an array off and returns it',
            d: 'does nothing'
        },
        correctAnswer: 'a'
    }, 
    {
        questions: "What does getElementById('idName') do?",
        answers: {
            a: 'only selects classnames',
            b: 'Gets all the elements that have the given tag name',
            c: 'Gets an element by its ID name',
            d: 'nothing'
        },
        correctAnswer: 'c'
    }, 
    {
        questions: "How do you define a variable?",
        answers: {
            a: 'var = ',
            b: 'variable = ',
            c: 'vari = ',
            d: 'none of the above'
        },
        correctAnswer: 'a'
    }, 
    {
        questions: "What is the difference between let and var?",
        answers: {
            a: 'var is for variables,let is nothing',
            b: 'var is for variable, let is for ouput',
            c: 'var is function scoped, let is block scoped',
            d: 'none of the above'
        },
        correctAnswer: 'c'
    }, 
    {
        questions: "Can you write a multi-line string in JavaScript?",
        answers: {
            a: 'Yes',
            b: 'No',
        },
        correctAnswer: 'a'
    }, 
]


var highScore = document.querySelector('#high-score');
var questionAsk = document.querySelector('#question');
var answersQues = document.querySelector('#answer')

var button = document.querySelector("#button");


var timers = document.querySelector('#timer');
var isWin = false;
var quizTime = 1000;
var quesTime = 60;
const  quizTimer = document.querySelector("#time-quiz");
const quesTimer = document.querySelector("#time-question");
var output = [];
var i = 0;

button.addEventListener("click", startQuiz);

function startQuiz() {
    //changes button to submit
    document.getElementById("button").innerHTML = "Submit";
    //document.getElementById("question-ask").innerHTML = "Question";
    //timer is now visible
    document.getElementById("timer").style.visibility = "visible";

    startTimer();
    questionRender();

    
}



// The setTimer function starts and stops the timer
function startTimer() {
    // Sets timer
    var quizTimerInterval = setInterval(function() {
      quizTime--;
      quizTimer.textContent = quizTime;
      for(i = 1000; i < quizQuestions.length; i--) {
          if(quizTime === 0) {
              clearInterval(quizTimerInterval);
              return;
          }
      }
    }, 1000)
    var questionTimerInterval = setInterval(function() {
        quesTime--;
        quesTimer.textContent = quesTime;
        for(i = 1000; i < quizQuestions.length; i--) {
            if(quesTime === 0) {
                clearInterval(questionTimerInterval);
                return;
            }
        }
    }, 1000)
};

