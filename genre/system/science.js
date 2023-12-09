console.log("bisthc")

const questions = [
    {
        question: "What does DNA stand for?",
        answers: [
            { text: "Dinitronucleic acid", correct: false},
            { text: "Dinucleic acid", correct: false},
            { text: "Deoxynitrogenous acid", correct: false},
            { text: "Deoxyribonucleic acid", correct: true},
        ]
    },
    {
        question: "How many bones are in the human body?",
        answers: [
            { text: "206", correct: true},
            { text: "182", correct: false},
            { text: "226", correct: false},
            { text: "188", correct: false},
        ]
    },
    {
        question: "The concept of gravity was discovered by which famous physicist?",
        answers: [
            { text: "Isaac Newton", correct: true},
            { text: "Albert Einstein", correct: false},
            { text: "Galileo Galilei", correct: false},
            { text: "Charles Darwin", correct: false},
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Emerald", correct: false},
            { text: "Gold", correct: false},
            { text: "Diamond", correct: true},
            { text: "Iron", correct: false},
        ]
    },
    {
        question: "What is the biggest planet in our solar system?",
        answers: [
            { text: "Uranus", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false},
            { text: "Mercury", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for table salt?",
        answers: [
            { text: "S", correct: false},
            { text: "NaCI", correct: true},
            { text: "NH4F", correct: false},
            { text: "Sc", correct: false},
        ]
    },
    {
        question: "Which of the following planet was first discovered by a telescope?",
        answers: [
            { text: "Jupiter", correct: false},
            { text: "Venus", correct: false},
            { text: "Uranus", correct: true},
            { text: "Mars", correct: false},
        ]
    },
    {
        question: "Who invented the Bicycle?",
        answers: [
            { text: "John Kemp Starley", correct: false},
            { text: "Leonardo Da Vinci", correct: false},
            { text: "Karl von Drais", correct: true},
            { text: "Micheal Faraday", correct: false},
        ]
    },
    {
        question: "What types of animals are Frogs and Toads?",
        answers: [
            { text: "Mammals", correct: false},
            { text: "Nocturnal", correct: false},
            { text: "Amphibians", correct: true},
            { text: "Insect", correct: false},
        ]
    },
    {
        question: "Teeth of the human body is consist of?",
        answers: [
            { text: "Aluminum", correct: false},
            { text: "Calcium", correct: true},
            { text: "Nitrogen", correct: false},
            { text: "Magnesium", correct: false},
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