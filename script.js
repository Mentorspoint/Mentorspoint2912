document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("whatsappBtn").addEventListener("click", function () {
        window.location.href = "https://chat.whatsapp.com/YOUR_GROUP_LINK";  // Replace with actual link
    });

    document.getElementById("videoBtn").addEventListener("click", function () {
        alert("Video Library will be available soon!");
    });
// Sample MCQs for different subjects
const questions = {
    math: [
        { 
            question: "What is 2 + 2?", 
            options: ["3", "4", "5", "6"], 
            answer: "4",
            explanation: "2 + 2 = 4, which is a basic arithmetic rule."
        },
        { 
            question: "What is 5 × 6?", 
            options: ["30", "25", "20", "35"], 
            answer: "30",
            explanation: "Multiplication of 5 and 6 results in 30."
        }
    ],
    science: [
        { 
            question: "What is the chemical symbol for water?", 
            options: ["H2O", "CO2", "O2", "NaCl"], 
            answer: "H2O",
            explanation: "Water is chemically represented as H2O."
        }
    ],
    history: [
        { 
            question: "Who was the first President of the United States?", 
            options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], 
            answer: "George Washington",
            explanation: "George Washington was the first U.S. President."
        }
    ]
};

// Variables
let currentQuestionIndex = 0;
let selectedSubject = "";
let currentQuestions = [];

// Function to Start Test
function startTest(subject) {
    selectedSubject = subject;
    currentQuestions = questions[subject]; // Load subject's questions
    currentQuestionIndex = 0;

    // Hide subject selection & show MCQ test section
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("mcq-test").style.display = "block";
    
    // Set Subject Title
    document.getElementById("subject-title").innerText = 
        subject.charAt(0).toUpperCase() + subject.slice(1) + " Test";

    // Load First Question
    loadQuestion();
}

// Function to Load Question
function loadQuestion() {
    let questionObj = currentQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    
    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    questionObj.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(option, questionObj.answer);
        optionsContainer.appendChild(button);
    });

    // Hide Explanation and Next button initially
    document.getElementById("explanation").innerText = "";
    document.getElementById("next-btn").style.display = "none";
}

// Function to Check Answer
function checkAnswer(selectedOption, correctAnswer) {
    let buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        } else if (btn.innerText === selectedOption) {
            btn.classList.add("wrong");
        }
        btn.disabled = true; // Disable all options after selection
    });

    // Show Explanation
    document.getElementById("explanation").innerText = 
        "Explanation: " + questions[selectedSubject][currentQuestionIndex].explanation;

    // Show Next button if there are more questions
    if (currentQuestionIndex < currentQuestions.length - 1) {
        document.getElementById("next-btn").style.display = "block";
    }
}

// Function to Load Next Question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("mcq-test").innerHTML = 
            `<h2>Test Completed!</h2><p>You have completed the ${selectedSubject} test.</p>`;
    }
}

});
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    document.addEventListener('mousemove', (e) => {
        let trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        body.appendChild(trail);

        // Remove the trail after animation
        setTimeout(() => {
            trail.remove();
        }, 500);
    });

    // Show alert when login button is clicked
    document.querySelector('.login-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        alert("🚀 This feature is coming soon!");
    });
});
