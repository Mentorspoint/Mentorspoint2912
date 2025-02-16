// MCQ Questions for Different Subjects
const mcqData = {
    "Cost Accounting": [
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
    "Marketing Management": [
        {
            question: "1. ___ is the process of evaluating each market segment's attractiveness and selecting one or more segments to enter.",
            options: [
                "Mass Targeting",
                "Market Targeting",
                "Target Marketing",
                "Segment Marketing"
            ],
            correct: 2,
            explanation: "The process is known as Target Marketing."
        },
        {
            question: "2. In segmentation the market is divided into groups on the basis of age or other variables.",
            options: [
                "Psychographic",
                "Geographic",
                "Demographic",
                "Behavioural"
            ],
            correct: 2,
            explanation: "Dividing the market based on age or similar variables is Demographic segmentation."
        },
        {
            question: "3. ___ consist of all of the groups that have a direct or indirect influence on a person's attitude or behavior.",
            options: [
                "Reference groups",
                "Opinion leader",
                "Dissociative group",
                "None of the above"
            ],
            correct: 0,
            explanation: "Reference groups influence a person's attitudes or behaviors."
        },
        {
            question: "4. Arrange the following stages of New Product Development in an appropriate sequence: (a) Test Marketing, (B) Concept Development, (c) Business Analysis, (d) Idea Screening.",
            options: [
                "b-d-a-b",
                "a-b-c-d",
                "d-a-b-c",
                "d-b-c-a"
            ],
            correct: 3,
            explanation: "The correct sequence is: Idea Screening, Concept Development, Business Analysis, Test Marketing (d-b-c-a)."
        },
        {
            question: "5. Under which step does a company evaluate a new product's business attractiveness by preparing sales, cost and profit projections in accordance with company objectives?",
            options: [
                "Business Analysis",
                "Buyer Analysis",
                "Business Forecasting",
                "Buyer Behaviour"
            ],
            correct: 0,
            explanation: "This step is known as Business Analysis."
        },
        {
            question: "6. ___ refers to the distinguishing psychological traits that lead to relatively consistent and enduring responses to environmental stimuli.",
            options: [
                "Psychology",
                "Personality",
                "Perception",
                "Attitude"
            ],
            correct: 1,
            explanation: "Personality refers to those distinguishing psychological traits."
        },
        {
            question: "7. The total number of items that the company carries within its product lines refers to:",
            options: [
                "Width",
                "Length",
                "Depth",
                "Height"
            ],
            correct: 1,
            explanation: "The total number of items in a product mix is referred to as its length."
        },
        {
            question: "8. In pricing, the firm determines the price that would yield its target rate of return on investment.",
            options: [
                "Target returns pricing",
                "Target base Pricing",
                "Going rate pricing",
                "Target line Pricing"
            ],
            correct: 0,
            explanation: "Pricing set to yield a target return is known as Target returns pricing."
        },
        {
            question: "9. ___ testing involves presenting the product concept to appropriate target consumers and getting their reactions.",
            options: [
                "Brain storming",
                "Conjoint analysis",
                "Idea screening",
                "Concept testing"
            ],
            correct: 3,
            explanation: "Concept testing involves presenting a product concept to target consumers."
        },
        {
            question: "10. The term EDLP means:",
            options: [
                "Early delivery life pricing",
                "Even day low pricing",
                "Explosive day life pricing",
                "Everyday low pricing"
            ],
            correct: 3,
            explanation: "EDLP stands for Everyday low pricing."
        }
    ],
    "ESBM": [
        {
            question: "What does ESBM stand for?",
            options: [
                "Enterprise Systems and Business Management",
                "European Society for Business Mathematics",
                "E-commerce Solutions and Business Models",
                "Economic Strategies and Business Metrics"
            ],
            correct: 0,
            explanation: "ESBM stands for Enterprise Systems and Business Management."
        },
        {
            question: "Which one of these is a key principle of ESBM?",
            options: [
                "Customer Focus",
                "Innovative Design",
                "Social Media Marketing",
                "Economic Forecasting"
            ],
            correct: 0,
            explanation: "ESBM emphasizes customer focus."
        }
    ],
    "Income Tax": [
        {
            question: "What is the primary purpose of income tax?",
            options: [
                "Fund government programs",
                "Increase personal wealth",
                "Promote business competition",
                "Regulate stock markets"
            ],
            correct: 0,
            explanation: "Income tax funds government programs."
        },
        {
            question: "Who is typically required to pay income tax?",
            options: [
                "Only corporations",
                "Individuals earning above a threshold",
                "Only government employees",
                "All residents regardless of income"
            ],
            correct: 1,
            explanation: "Individuals earning above a threshold are required to pay income tax."
        }
    ]
};

let currentSubject = "";
let currentQuestionIndex = 0;
let currentQuestionData = {}; // Holds the current question's data

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
    currentQuestionData = mcqData[currentSubject][currentQuestionIndex];

    // Shuffle options while keeping track of the correct answer
    let shuffledOptions = shuffleArray([...currentQuestionData.options]);
    let correctIndex = shuffledOptions.indexOf(currentQuestionData.options[currentQuestionData.correct]);

    document.getElementById("question").innerText = currentQuestionData.question;
    
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
    let explanationText = "";

    if (selectedIndex === correctIndex) {
        btn.classList.add("correct");
        explanationText = "✅ Correct! " + currentQuestionData.explanation;
    } else {
        btn.classList.add("wrong");
        allButtons[correctIndex].classList.add("correct");
        explanationText = "❌ Incorrect! " + currentQuestionData.explanation;
    }

    document.getElementById("explanation").innerText = explanationText;

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

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
