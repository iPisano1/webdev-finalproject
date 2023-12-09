console.log("bisthc")

const questions = [
    {
        question: "What did Marlon Brando have `Paris`, in his X-rated film?",
        answers: [
            { text: "Last Goodbye", correct: false},
            { text: "April", correct: false},
            { text: "Last Tango", correct: true},
            { text: "Last Waltz", correct: false},
        ]
    },
    {
        question: "Which film won the Oscar for Best Picture in 1972?",
        answers: [
            { text: "Deliverance", correct: false},
            { text: "Cabaret", correct: false},
            { text: "Taxi Driver", correct: false},
            { text: "The Godfather", correct: true},
        ]
    },
    {
        question: "What world-famous movie monster turned 50 in 2005?",
        answers: [
            { text: "Frankenstein", correct: false},
            { text: "King Kong", correct: false},
            { text: "Monthra", correct: false},
            { text: "Godzilla", correct: true},
        ]
    },
    {
        question: "What film had its first private screening at the 39 room hotel Melhana Plantation in Georgia?",
        answers: [
            { text: "Psycho", correct: false},
            { text: "The Godfather", correct: false},
            { text: "From Here to Eternity", correct: false},
            { text: "Gone With The Wind", correct: true},
        ]
    },
    {
        question: "Jack and Rose are the main characters from which film?",
        answers: [
            { text: "Lost in Translation", correct: false},
            { text: "The Titanic", correct: true},
            { text: "Punch-Drunk Love", correct: false},
            { text: "The Way We Were", correct: false},
        ]
    },
    {
        question: "On which classic story is the 1998 movie `Ever After` based?",
        answers: [
            { text: "Cinderella", correct: true},
            { text: "Beauty And The Beast", correct: false},
            { text: "Snow White", correct: false},
            { text: "The Sword In The Stone", correct: false},
        ]
    },
    {
        question: "What was the name of Patrick Swayze's character in `Ghost`?",
        answers: [
            { text: "Sam", correct: true},
            { text: "Bob", correct: false},
            { text: "Tom", correct: false},
            { text: "Joe", correct: false},
        ]
    },
    {
        question: "Which film was promoted with the line `Someone's got a zoo loose`?",
        answers: [
            { text: "Bewitched", correct: false},
            { text: "The 40 Year Old Virgin", correct: false},
            { text: "War of The Worlds", correct: false},
            { text: "Madagascar", correct: true},
        ]
    },
    {
        question: "Which film was promoted with the line `Prepare for the fantastic`?",
        answers: [
            { text: "Are We There Yet?", correct: false},
            { text: "Fantastic Four", correct: true},
            { text: "Diary Of A Mad Black Woman", correct: false},
            { text: "Miss Congeniality 2: Armed And Fabulous", correct: false},
        ]
    },
    {
        question: "Which actor played Shane Wolfe in `The Pacifier`?",
        answers: [
            { text: "Vin Diesel", correct: true},
            { text: "Robert De Niro", correct: false},
            { text: "Ben Stiller", correct: false},
            { text: "Russell Crowe", correct: false},
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