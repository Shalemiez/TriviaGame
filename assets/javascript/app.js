var startButton = $('#start');
var quiz_area = $('.quiz-area');
var sub_wrapper = $('.sub-wrapper');
var startTime = 30;
var countDownTime = startTime;
var timer;
var correct = 0;
var incorrect = 0;


function countdown() {
    countDownTime--;
    $('#count-number').text(countDownTime);
    console.log(countDownTime)
    if (countDownTime == 0) {
        console.log('times up')
        timeUp();
    }
}
function timeUp() {
    clearInterval(timer);
    alert("You have" + correct + "correct and " + incorrect + "incorrect")




}
var questions = [
    {
        question: "What do Aladdin and his monkey Abu steal from the marketplace when you’re first introduced to them in the movie?",
        answer: ["Apple", "Gold", "Bread", "Banana"],
        correctAns: "Bread"
    },
    {
        question: "What's half of quarter of 8000?",
        answer: ["1000", "2000", " 3000", "4000"],
        correctAns: "1000"
    },
    {
        question: " If there are 8 apples and you took away 6, how many apples do you have?",
        answer: ["6", "2", "4", "8"],
        correctAns: "6"
    },
    {
        question: "If you had only one match, and entered a dark room containing the following:  Which do you light first?",
        answer: ["oil lamp", "news paper", "match", "wood"],
        correctAns: "match"
    },
    {
        question: "If there are 12 fish and 3/4 of them drown, how many are there?",
        answer: ["6", "8", "10", "12"],
        correctAns: "12"
    },
    {
        question: "How many Keys are in a full size Piano",
        answer: ["76", "88", "102", "96"],
        correctAns: "88"
    },
    {

        question: "Which animal produce milk for its young?",
        answer: ["chicken", "bunny", "snake", "bird"],
        correctAns: "bunny"
    },
    {

        question: "What is the princess name in Beauty and the Beast",
        answer: ["Jasmine", "Cinderella", "Bella", "Mulan"],
        correctAns: "Belle"
    },
]

function displayQuestions() {
    var newForm = $("<form>");
    for (var q = 0; q < questions.length; q++) {

        newQuestion = $("<h3>");
        newQuestion.html(questions[q].question);
        console.log(questions[q].question);
        newForm.append(newQuestion);
        for (var i = 0; i < questions[q].answer.length; i++) {
            newAnswer = $(`<input type='radio' class='ansButton' name='${q}'  value='test'>` + " " + questions[q].answer[i] + `<br>`)
            console.log(questions[q].answer[i]);
            newForm.append(newAnswer);
        }

    }
    quiz_area.append(newForm);
}
$(document).on("click", ".ansButton", function (event) {

    if ($(event.target).attr("name") == questions.correctAns) {
        correct++;
    }
    else {
        incorrect++;
    }
})
startButton.on("click", function () {
    timer = setInterval(countdown, 1000);
    sub_wrapper.prepend("<h2>Time Remaining: <span id='count-number'>30</span> Seconds</h2>");
    $('#start').hide();
    displayQuestions();
});