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
    // Previously existing 10 questions
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
    },
    // New questions added:
    {
      question: "1. ______ is the most fundamental determinant of a person's wants and behaviour.",
      options: [
        "Culture",
        "Opinion leader",
        "Age and stage in life cycle",
        "None of the above"
      ],
      correct: 0,
      explanation: "Culture is considered the most fundamental determinant of a person's wants and behaviour."
    },
    {
      question: "2. An organization develops ______ statements to share with managers, employees and, in many cases, the customers too.",
      options: [
        "Mission",
        "Aim",
        "Goal",
        "Market"
      ],
      correct: 0,
      explanation: "Organizations develop mission statements to communicate purpose and direction."
    },
    {
      question: "3. A business can be defined in terms of three dimensions: customer groups, customer's needs, and ______.",
      options: [
        "Marketing",
        "Policies",
        "Technology"
      ],
      correct: 2,
      explanation: "A business is often defined in terms of customer groups, customer needs, and the technology used to serve them."
    },
    {
      question: "4. The segmentation that calls for dividing the market into different groups on the basis of Personality Traits is known as:",
      options: [
        "Competencies",
        "Geographical Segmentation",
        "Lifestyle Segmentation"
      ],
      correct: 2,
      explanation: "Lifestyle segmentation groups consumers based on personality traits, values, and lifestyles."
    },
    {
      question: "5. When buyers are divided into different groups on the basis of their personality traits and values, this is known as:",
      options: [
        "Psychographic Segmentation",
        "Behavioural Segmentation",
        "Geographic Segmentation",
        "None of the Above"
      ],
      correct: 0,
      explanation: "Psychographic segmentation divides the market based on personality, values, attitudes, and lifestyles."
    },
    {
      question: "6. The total number of items that the company carries within its product lines refers to:",
      options: [
        "Width",
        "Length",
        "Depth",
        "None of the Above"
      ],
      correct: 1,
      explanation: "Length refers to the total number of items in the product mix."
    },
    {
      question: "7. ______ of product mix refers to how many different product lines the company carries.",
      options: [
        "Width",
        "Positioning",
        "Length",
        "Consistency"
      ],
      correct: 0,
      explanation: "Width refers to the number of different product lines a company carries."
    },
    {
      question: "8. In which stage of the Product Life Cycle do sales grow slowly and profits are non-existent due to heavy expenses incurred?",
      options: [
        "Introduction",
        "Growth",
        "Maturity",
        "None of the Above"
      ],
      correct: 0,
      explanation: "In the Introduction stage, sales grow slowly and profits are minimal due to high launch costs."
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
   

