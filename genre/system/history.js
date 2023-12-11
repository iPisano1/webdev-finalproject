

const questions = [
    {
        question: "Which treaty was signed at the end of World War I?",
        answers: [
            { text: "Treaty of Paris", correct: false},
            { text: "Treaty of Maastricht", correct: false},
            { text: "Treaty of Versailles", correct: true},
            { text: "Treaty of London", correct: false},
        ]
    },
    {
        question: "Which country did Hitler invade on the 1st of September 1939?",
        answers: [
            { text: "Austria", correct: false},
            { text: "Netherlands", correct: false},
            { text: "Poland", correct: true},
            { text: "France", correct: false},
        ]
    },
    {
        question: "When did the wall of Berlin fall?",
        answers: [
            { text: "1979", correct: false},
            { text: "1983", correct: false},
            { text: "1986", correct: false},
            { text: "1989", correct: true},
        ]
    },
    {
        question: "In which country were the cities of Hiroshima and Nagasaki bombed on August 6th, 1945?",
        answers: [
            { text: "China", correct: false},
            { text: "Thailand", correct: false},
            { text: "Malaysia", correct: false},
            { text: "Japan", correct: true},
        ]
    },
    {
        question: "In which Texan city was JFK assassinated?",
        answers: [
            { text: "Houston", correct: false},
            { text: "Austin", correct: false},
            { text: "Dallas", correct: true},
            { text: "San Antonio", correct: false},
        ]
    },
    {
        question: "Which of the following landmarks was not hit during the 9/11 attacks?",
        answers: [
            { text: "World Trade Center – South Tower", correct: false},
            { text: "US capitol", correct: true},
            { text: "Pentagon", correct: false},
            { text: "World Trade Center – North Tower", correct: false},
        ]
    },
    {
        question: "What event was the catalyst for the start of World War I?",
        answers: [
            { text: "The invasion of Poland", correct: false},
            { text: "The assassination of Austrian Archduke Franz Ferdinand", correct: true},
            { text: "Pearl Harbour bombing", correct: false},
            { text: "The Black Death", correct: false},
        ]
    },
    {
        question: "Which of the following is not a D-Day beach?",
        answers: [
            { text: "Utah", correct: false},
            { text: "Oklahoma", correct: true},
            { text: "Juno", correct: false},
            { text: "Sword", correct: false},
        ]
    },
    {
        question: "How many people were in the Apollo 11 mission to the moon?",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
        ]
    },
    {
        question: "Which general famously stated, 'I shall return?'",
        answers: [
            { text: "Bull Halsey", correct: false},
            { text: "George Patton", correct: false},
            { text: "Douglas MacArthur", correct: true},
            { text: "Omar Bradley", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
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
        button.addEventListener("click", selectAnswer)
    });
};

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();