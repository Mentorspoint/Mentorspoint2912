const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
        explanation: "Paris is the capital of France, known for the Eiffel Tower."
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1,
        explanation: "Mars is called the Red Planet due to its iron oxide-rich surface."
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1,
        explanation: "William Shakespeare wrote 'Hamlet', one of his famous tragedies."
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    feedbackElement.innerHTML = ""; 
    optionsElement.innerHTML = ""; 

    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = document.querySelectorAll(".option");
    const feedbackElement = document.getElementById("feedback");

    if (selectedIndex === currentQuestion.correct) {
        options[selectedIndex].classList.add("correct");
        feedbackElement.innerHTML = `✅ Correct! ${currentQuestion.explanation}`;
    } else {
        options[selectedIndex].classList.add("wrong");
        options[currentQuestion.correct].classList.add("correct");
        feedbackElement.innerHTML = `❌ Incorrect. ${currentQuestion.explanation}`;
    }

    document.querySelectorAll(".option").forEach(btn => btn.onclick = null);
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<h2>🎉 Test Completed! Well done! 🎉</h2>";
    }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
