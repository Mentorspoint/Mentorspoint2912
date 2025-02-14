// MCQ Questions for Different Subjects
const mcqData = {
    math: [
        {
            question: "What is 5 + 3?",
            options: ["5", "8", "10", "15"],
            correct: 1,
            explanation: "5 + 3 equals 8."
        },
        {
            question: "What is the square root of 16?",
            options: ["2", "4", "8", "16"],
            correct: 1,
            explanation: "The square root of 16 is 4."
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["O2", "H2O", "CO2", "NaCl"],
            correct: 1,
            explanation: "Water is represented as H2O."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correct: 1,
            explanation: "Mars is called the Red Planet due to its reddish color."
        }
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
            correct: 1,
            explanation: "George Washington was the first President of the U.S."
        },
        {
            question: "Which year did World War II end?",
            options: ["1939", "1942", "1945", "1950"],
            correct: 2,
            explanation: "World War II ended in 1945."
        }
    ]
};

let currentSubject = "";
let currentQuestionIndex = 0;

// Function to Start the Test
function startTest(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;

    // Shuffle questions before starting
    mcqData[currentSubject] = shuffleArray(mcqData[currentSubject]);

    // Reset the test section (Clear any previous result)
    document.getElementById("mcq-test").innerHTML = `
        <h2 id="subject-title"></h2>
        <p id="question"></p>
        <div id="options"></div>
        <button id="next-btn" onclick="nextQuestion()" style="display: none;">Next</button>
        <p id="explanation"></p>
    `;

    // Hide subject selection and show MCQ test
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("mcq-test").style.display = "block";
    document.getElementById("subject-title").innerText = subject.toUpperCase() + " Test";

    loadQuestion();
}



// Function to Load a Question
function loadQuestion() {
    let questionData = mcqData[currentSubject][currentQuestionIndex];

    // Shuffle options while keeping track of the correct answer
    let shuffledOptions = shuffleArray([...questionData.options]);
    let correctIndex = shuffledOptions.indexOf(questionData.options[questionData.correct]);

    document.getElementById("question").innerText = questionData.question;
    
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; // Clear previous options

    shuffledOptions.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(index, correctIndex, btn);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("explanation").innerText = "";
    document.getElementById("next-btn").style.display = "none"; // Hide Next button initially
}


// Function to Check the Answer
function checkAnswer(selectedIndex, correctIndex, btn) {
    let allButtons = document.querySelectorAll(".option-btn");

    if (selectedIndex === correctIndex) {
        btn.classList.add("correct");
        document.getElementById("explanation").innerText = "✅ Correct!";
    } else {
        btn.classList.add("wrong");
        allButtons[correctIndex].classList.add("correct");
        document.getElementById("explanation").innerText = "❌ Incorrect!";
    }

    // Disable all options after selection
    allButtons.forEach(button => button.onclick = null);

    // Show the Next button
    document.getElementById("next-btn").style.display = "block";
}


// Function to Move to Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < mcqData[currentSubject].length) {
        loadQuestion();
    } else {
        // When the test is completed, show results and buttons
        document.getElementById("mcq-test").innerHTML = `
            <h2>Test Completed!</h2>
            <p>Well done! You have finished the ${currentSubject} test.</p>
            <button onclick="goHome()" class="btn">🏠 Return to Home</button>
            <button onclick="retryTest()" class="btn">🔄 Retry Test</button>
        `;
    }
}

// Function to return to home
function goHome() {
    window.location.href = "index.html";  // Change this if your home page URL is different
}

// Function to retry test (reload subject selection)
function retryTest() {
    document.getElementById("mcq-test").style.display = "none";
    document.getElementById("subject-selection").style.display = "block";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
