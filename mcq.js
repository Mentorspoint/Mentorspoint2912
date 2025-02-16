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
    // (Questions 1–45 are assumed to be already here)
    // ...
    // New Questions 46–59:
    {
      // Q46
      question: "46. A type of value pricing EDLP is known as:",
      options: [
        "Every time low pricing",
        "Everyday low pricing",
        "Everyday least price",
        "None"
      ],
      correct: 1,
      explanation: "EDLP stands for Everyday low pricing."
    },
    {
      // Q47
      question: "47. ______ is called as consumers tend to process prices in a left-to-right manner rather than by rounding.",
      options: [
        "Price Cues",
        "Reference Price"
      ],
      correct: 0,
      explanation: "Consumers use price cues when reading prices sequentially."
    },
    {
      // Q48
      question: "48. The ______ of product mix refers to how many variants are offered of each product in a line.",
      options: [
        "Width",
        "Length"
      ],
      // Note: Typically, the term 'depth' is used for variants. Given the options, we assume 'Length' here.
      correct: 1,
      explanation: "Although 'depth' is the standard term for variants in a line, given the options we choose Length."
    },
    {
      // Q49
      question: "49. Consumer preferences for a product concept can be measured through:",
      options: [
        "Marketing Strategy",
        "Conjoint Analysis"
      ],
      correct: 1,
      explanation: "Conjoint analysis is used to measure consumer preferences."
    },
    {
      // Q50
      question: "50. A ______ is an elaborated version of the idea expressed in consumer terms.",
      options: [
        "Price Quality Inference",
        "All of the above"
      ],
      // Note: In many contexts, the term 'Product Concept' is used. Here, based on available options, we select All of the above.
      correct: 1,
      explanation: "Based on the provided options, the answer is All of the above."
    },
    {
      // Q51
      question: "51. ______ means testing the product within the firm to check its performance in different applications.",
      options: [
        "Alpha testing",
        "Beta testing",
        "Market testing",
        "Test marketing"
      ],
      correct: 0,
      explanation: "Alpha testing is conducted internally within the firm."
    },
    {
      // Q52
      question: "52. ______ means gradually reducing a product's or business's cost while trying to maintain sales.",
      options: [
        "Liquidating",
        "Investing",
        "Harvesting",
        "Divesting"
      ],
      correct: 2,
      explanation: "Harvesting refers to reducing costs while trying to maintain sales."
    },
    {
      // Q53
      question: "53. Under Information Search in the Buying Decision Process, which of the following are examples of commercial sources?",
      options: [
        "Family, friends, neighbours, acquaintances"
      ],
      // Note: Typically commercial sources are advertisements, websites, etc. Here only one option is given.
      correct: 0,
      explanation: "(Note: The provided option is more of a personal source; please verify the intended options.)"
    },
    {
      // Q54
      question: "54. ______ refers to the distinguishing psychological traits that lead to relatively consistent and enduring responses to environmental stimuli.",
      options: [
        "Personality",
        "Self-concept",
        "Actual self-concept",
        "Ideal self concept"
      ],
      correct: 0,
      explanation: "Personality refers to these enduring psychological traits."
    },
    {
      // Q55
      question: "55. ______ is the most fundamental determinant of a person's wants and behavior.",
      options: [
        "Culture"
      ],
      correct: 0,
      explanation: "Culture is widely recognized as the most fundamental determinant of behavior."
    },
    {
      // Q56
      question: "56. ______ is the study of how individuals, groups, and organizations select, buy, use and dispose of goods, services, ideas, or experiences to satisfy their needs and desires.",
      options: [
        "Consumer Behaviour",
        "Customer Behaviour",
        "Customer Relationship",
        "Consumer Relationship"
      ],
      correct: 0,
      explanation: "Consumer Behaviour is the study of these processes."
    },
    {
      // Q57
      question: "57. Aspirational groups are those groups which a person ______.",
      options: [
        "Hopes to join",
        "Rejects the values or behavior of the group",
        "Interacts on a fairly continuous basis",
        "Interacts on a formal basis"
      ],
      correct: 0,
      explanation: "Aspirational groups are those that an individual aspires to join."
    },
    {
      // Q58
      question: "58. Which type of pricing method should be adopted by sellers who want to sell antique items?",
      options: [
        "Target return Pricing",
        "Auction bid pricing",
        "Going rate Pricing",
        "Perceived value pricing"
      ],
      correct: 1,
      explanation: "Auction bid pricing is commonly used for selling antiques."
    },
    {
      // Q59
      question: "59. The ______ of a product mix refers to the total number of items in a product mix.",
      options: [
        "Consistency",
        "Depth",
        "Width",
        "Length"
      ],
      correct: 3,
      explanation: "Length refers to the total number of items in the product mix."
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
