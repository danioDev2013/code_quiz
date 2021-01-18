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