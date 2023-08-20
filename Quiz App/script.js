const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers : [
            {text:"Shark", correct: "false"},
            {text:"Blue- Whale", correct: "true"},
            {text:"Zebra", correct: "false"},
            {text:"Lion", correct: "false"}
        ]
    },

{
    question: "Which is the most powerful  contry in the world?",
    answers : [
        {text:"Pakistan", correct: "false"},
        {text:"England", correct: "false"},
        {text:"USA", correct: "true"},
        {text:"China", correct: "false"}
    ]
},

{
    question: "Who is the captain of Pakistan cricket Team?",
    answers : [
        {text:"Babar Azam", correct: "true"},
        {text:"Shaheen Afridi", correct: "false"},
        {text:"Shoaib Malik", correct: "false"},
        {text:"Haris Rauf", correct: "false"}
    ]
},


{
    question: "Value of g at the surface of earth?",
    answers : [
        {text:"1.49", correct: "false"},
        {text:"9.9", correct: "false"},
        {text:"6.67", correct: "false"},
        {text:"9.8", correct: "true"}
    ]
},

{
    question: "Who is Undefeated fighter in the UFC history?",
    answers : [
        {text:"Cornor", correct: "false"},
        {text:"Dustin", correct: "false"},
        {text:"Khabib", correct: "true"},
        {text:"Islam", correct: "false"}
    ]
},

]


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");


let currentQuestionIndex= 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    showQuestion();
}

function showQuestion () {
   resetState()
  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selesctAnswer);
  })

}

function resetState () {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selesctAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"

}

function showScore () {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';
}

function handleNextButton () {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }


}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
})
 
startQuiz();