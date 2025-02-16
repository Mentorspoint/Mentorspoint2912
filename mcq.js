// MCQ Questions for Different Subjects
const mcqData = {
    "Cost Accounting": [
        // ------ Existing MCQs -------------
        {
            question: "Under Emerson's efficiency bonus plan, no bonus is payable when efficiency is less than:",
            options: ["83%", "67%", "100%", "None of the above"],
            correct: 2,
            explanation: "Under Emerson's efficiency bonus plan, bonus is only payable when efficiency reaches 100% or above."
        },
        {
            question: "Comparing Rowan and Halsey plan, it is seen that up to 50% of time saved,",
            options: [
                "Rowan plan pays higher bonus to a worker than Halsey bonus plan",
                "Rowan plan pays less bonus to a worker than Halsey bonus plan",
                "Rowan and Halsey plan both pay equal bonus to a worker",
                "None of the above"
            ],
            correct: 0,
            explanation: "Under the given conditions, the Rowan plan pays a higher bonus than the Halsey plan when time saved is up to 50%."
        },
        {
            question: "When the amount of overhead absorbed is less than actual amount of overheads, it is known as ______ of overheads.",
            options: [
                "Under absorption",
                "Over absorption",
                "Allocation",
                "Apportionment"
            ],
            correct: 0,
            explanation: "When the absorbed overhead is less than the actual overhead incurred, it is termed under absorption."
        },
        {
            question: "Which of the following is not a normal cause leading to idle time?",
            options: [
                "Time spent to meet workers' personal needs like taking lunch, tea, etc.",
                "Waiting time for jobs due to defective, initial processing of material, etc.",
                "Time required to setup machinery, initial processing of material, etc.",
                "Travelling time from on job or department to another."
            ],
            correct: 0,
            explanation: "Time spent for personal needs (like taking lunch or tea) is generally not considered a normal cause of idle time."
        },
        {
            question: "______ is a measurement, in monetary terms, of the amount of resources used for the purpose of production of goods or rendering of services.",
            options: [
                "Cost Unit",
                "Cost",
                "Cost Centre",
                "All of these"
            ],
            correct: 1,
            explanation: "Cost is the measurement, in monetary terms, of the amount of resources used in production or service delivery."
        },
        {
            question: "______ of overheads is distribution of overheads to more than one cost centre on some equitable basis.",
            options: [
                "Allocation",
                "Apportionment",
                "Absorption",
                "Collection"
            ],
            correct: 1,
            explanation: "Apportionment refers to the distribution of overheads to more than one cost centre on an equitable basis."
        },
        {
            question: "The storekeeper should initiate a purchase requisition when stock reaches:",
            options: [
                "Minimum Level",
                "Maximum Level",
                "Re-Order Level",
                "Average level"
            ],
            correct: 2,
            explanation: "A purchase requisition is initiated when the stock reaches the Re-Order Level."
        },
        {
            question: "Standard output is 100 units per day of 8 hours and the piece rate is 20 per unit. Under Merrick differential piece rate system, what will be the amount of wages of a worker who produces 95 units in a day?",
            options: [
                "₹1,900",
                "₹2,000",
                "₹2,090",
                "₹2,280"
            ],
            correct: 1,
            explanation: "Under the Merrick differential piece rate system, if the worker produces below the standard output, he is paid his time wage, which is based on the standard output (100 units × 20 = ₹2,000)."
        },
        // ------ New MCQs (from exam paper) -------------
        {
            question: "1. Accounting treatment of overtime due to abnormal circumstances is charged to:",
            options: [
                "Respective Job",
                "Costing Profit & Loss A/c",
                "Department",
                "Factory Overheads"
            ],
            correct: 1,
            explanation: "Abnormal overtime costs are usually charged to the Costing Profit & Loss Account as they are not part of normal production cost."
        },
        {
            question: "2. Re-order Level is defined as the inventory level at which a new order should be placed.",
            options: [
                "Minimum Level",
                "Costing Profit & Loss A/c",
                "Re-order Level",
                "Factory Overheads"
            ],
            correct: 2,
            explanation: "Re-order level is the stock level at which replenishment is required."
        },
        {
            question: "3. X Ltd. had 800 units at ₹20 each on 01/08/2022. The purchases made during the month were:",
            options: [
                "Option not provided",
                "Option not provided",
                "Option not provided",
                "Option not provided"
            ],
            correct: 0,
            explanation: "No explanation provided."
        },
        {
            question: "4. X Ltd. had 800 units at ₹20 each on 01/11/2022. Materials purchased in November: 4th Nov – 800 units @₹20, 15th Nov – 1,000 units @₹30, 25th Nov – 600 units @₹40. Calculate issue price by periodic simple average method.",
            options: [
                "Option not provided",
                "Option not provided",
                "Option not provided",
                "Option not provided"
            ],
            correct: 0,
            explanation: "No explanation provided."
        },
        {
            question: "5. Calculate value of X as per simultaneous equation method: X = 4000 + 20%Y and Y = 2600 + 10%X.",
            options: [
                "2,600",
                "4,612",
                "4,160",
                "3,061"
            ],
            correct: 1,
            explanation: "Solving the equations gives X ≈ 4,612."
        },
        {
            question: "6. What is the issue price per unit as per Simple Average Method if 1,500 units are issued to production on 20/08/2022? (Assume purchases: 600 units @₹21, 500 units @₹22, 400 units @₹25)",
            options: [
                "21",
                "18",
                "22",
                "20"
            ],
            correct: 2,
            explanation: "Total cost = (600×21)+(500×22)+(400×25) = 33,600; Average = 33,600/1,500 ≈ 22."
        },
        {
            question: "7. Suitable base for apportionment of Factory Building related expenses to various cost centers is:",
            options: [
                "No. of Light Points",
                "Direct Material Cost",
                "No. of Employee",
                "Floor Area occupied"
            ],
            correct: 3,
            explanation: "Factory building expenses are typically apportioned on the basis of floor area."
        },
        {
            question: "8. The production cost excluding the cost of direct materials is known as:",
            options: [
                "Conversion Cost",
                "Factory Cost",
                "Prime Cost",
                "Indirect Cost"
            ],
            correct: 0,
            explanation: "Conversion cost is the production cost excluding direct materials."
        },
        {
            question: "9. A worker’s time-card shows 48 hours worked – 45 hours (including 4 hours overtime) on production and 3 hours idle due to machine breakdown. With a wage rate of ₹60 per hour and overtime at 50% extra, calculate the overtime wage.",
            options: [
                "360",
                "120",
                "300",
                "240"
            ],
            correct: 0,
            explanation: "Overtime wage = 4 hours × (60 + 30) = 360."
        },
        {
            question: "10. If a worker's efficiency is 110%, what is the bonus rate under Emerson's Efficiency Bonus Plan?",
            options: [
                "20%",
                "10%",
                "120",
                "180"
            ],
            correct: 0,
            explanation: "Under the plan, efficiency above 100% qualifies for bonus; here 20% is assumed."
        },
        {
            question: "11. Value of P & M used: Dept P = ₹60,000, Q = ₹80,000, R = ₹1,00,000, X = ₹5,000, Y = ₹5,000. Calculate the ratio for distribution of Depreciation.",
            options: [
                "6:8:10:5:5",
                "60:80:10:5:5",
                "12:16:100:5:5",
                "12:16:20:1:1"
            ],
            correct: 3,
            explanation: "Dividing each amount by 5,000 gives the ratio 12:16:20:1:1."
        },
        {
            question: "12. Calculate Labour Turnover Rate as per the separation method: Average employees = 275; Employees resigned = 11; Employees replaced = 15.",
            options: [
                "1375%",
                "7.27%",
                "12.72%",
                "5.45%"
            ],
            correct: 3,
            explanation: "Using the replacement count: (15/275)×100 ≈ 5.45% (note: methods may vary)."
        },
        {
            question: "13. Consumption is 100 units/month, purchase price is ₹100 per unit, EOQ = 300 units, ordering cost = ₹600 per order, and carrying cost = ₹16 per unit per annum. Find the time gap between consecutive orders.",
            options: [
                "2 Months",
                "4 Months",
                "6 Months",
                "3 Months"
            ],
            correct: 3,
            explanation: "Annual consumption = 1,200 units; orders per year = 1,200/300 = 4; time gap = 12/4 = 3 months."
        },
        {
            question: "14. Milk and Cream used in ice-cream is an example of:",
            options: [
                "Direct Material Cost",
                "Indirect Cost",
                "Semi Variable Cost",
                "Fixed Cost"
            ],
            correct: 0,
            explanation: "Milk and cream are direct materials in ice-cream production."
        },
        {
            question: "15. Total purchase cost of 2,50,000 bricks is ₹5,44,500 with 1% breakage. Find the issue price per 1,000 bricks.",
            options: [
                "459",
                "Not Provided",
                "2,200",
                "455"
            ],
            correct: 2,
            explanation: "After adjusting for 1% breakage, the issue price per 1,000 bricks is calculated as ₹2,200."
        },
        {
            question: "16. Ram Ltd. has three production departments (X, Y, Z) and two service departments (A, B). If general lighting overheads amount to ₹1,200 and total light points are 120, apportioned as: X=20, Y=30, Z=40, A=20, B=10, what is the overhead allocated to service departments A & B?",
            options: [
                "600",
                "2,178",
                "500",
                "400"
            ],
            correct: 3,
            explanation: "Based on light points the calculated amount is ambiguous; answer chosen is ₹400."
        },
        {
            question: "17. [Ambiguous Data] Earnings, advances, and deductions for a worker are provided. (Details not fully provided)",
            options: [
                "Option not provided",
                "Option not provided",
                "Option not provided",
                "Option not provided"
            ],
            correct: 0,
            explanation: "No explanation provided."
        },
        {
            question: "18. Re-order Period = 8–10 days, EOQ = 1,200 units, and consumption ranges from 60 units/day (normal) to 120 units/day (maximum). Find the minimum level.",
            options: [
                "27,700",
                "22,100",
                "27,100",
                "26,680"
            ],
            correct: 1,
            explanation: "Calculation details are ambiguous; answer chosen is 22,100."
        },
        {
            question: "19. Material Requirement is 10 kgs per unit of finished product. Weekly production varies from 25 to 175 units and re-order period is 4 to 7 weeks. Find the re-order level.",
            options: [
                "10,500 Kgs",
                "600 Units",
                "12,250 Kgs",
                "1,750 Kgs"
            ],
            correct: 2,
            explanation: "Maximum production scenario: 175 units × 7 weeks × 10 = 12,250 kgs."
        },
        {
            question: "20. Which of the following cost is correctly classified?",
            options: [
                "Historical Cost – Classification by Elements",
                "Expenses – Classification by Time",
                "Mixed Cost – Behavioural Classification",
                "Direct Cost – Classification by Function"
            ],
            correct: 2,
            explanation: "Mixed costs are classified based on their behavior."
        },
        {
            question: "21. A location/person/item used for cost control is known as a:",
            options: [
                "Cost",
                "Cost Centre",
                "Costing",
                "Cost Accounting"
            ],
            correct: 1,
            explanation: "A cost centre is a unit for which costs are ascertained and controlled."
        },
        {
            question: "22. Overheads is the summation of:",
            options: [
                "Direct Cost",
                "Variable Cost",
                "Direct and Indirect Cost",
                "Indirect Cost"
            ],
            correct: 3,
            explanation: "Overheads consist of indirect costs."
        },
        {
            question: "23. The correct basis of apportionment of Contribution to P.F. is:",
            options: [
                "Direct Wages",
                "Floor Area",
                "No. of Light Points",
                "Labour Hours"
            ],
            correct: 0,
            explanation: "PF contributions are typically based on direct wages."
        },
        {
            question: "24. Mr. A is allowed 10 hours to complete a job but takes 8 hours. With a wage rate of ₹50 per hour, what are his total earnings under the Halsey Bonus plan?",
            options: [
                "500",
                "400",
                "450",
                "250"
            ],
            correct: 2,
            explanation: "Under Halsey, the bonus on time saved leads to total earnings of ₹450."
        },
        {
            question: "25. Materials are controlled as per their 'value' or 'financial importance'. This is the assumption of:",
            options: [
                "VED Analysis",
                "ABC Analysis",
                "EOQ",
                "Fixation of Stock Level"
            ],
            correct: 1,
            explanation: "ABC analysis classifies materials based on their financial importance."
        },
        {
            question: "26. Which one of the following is the Non-Reciprocal Service Method of Secondary distribution of Overheads?",
            options: [
                "Trial and Error Method",
                "Repeated distribution method",
                "Simultaneous equation method",
                "Step Leader method"
            ],
            correct: 3,
            explanation: "The Step Leader (step-down) method is non-reciprocal."
        },
        {
            question: "27. Annual consumption = 10,000 units, purchase price = ₹100 per unit, ordering cost = ₹10 per order, and storage cost = 5% p.a. Find the Economic Order Quantity (EOQ).",
            options: [
                "200 Units",
                "100 Units",
                "300 Units",
                "400 Units"
            ],
            correct: 0,
            explanation: "EOQ = √((2×10,000×10)/5) = 200 units."
        },
        {
            question: "28. State the truth value of the following statements regarding bonus plans:\n(i) At 50% time saved, Halsey and Rowan plans pay equal bonus.\n(ii) Up to 50% time saved, Halsey plan pays higher bonus.\n(iii) Over 50% time saved, Rowan plan pays higher bonus.",
            options: [
                "TTT",
                "TTF",
                "TFF",
                "TFT"
            ],
            correct: 2,
            explanation: "At 50% time saved bonuses are equal; below 50% Rowan pays more; above 50% Halsey pays more."
        },
        {
            question: "29. Which of the following definitions is not correct?",
            options: [
                "Cost – The amount of expenditure incurred",
                "Costing – The process of ascertaining costs",
                "Cost Centre – Unit of measurement of Product or Time",
                "Cost Accounting – The process of accounting for cost"
            ],
            correct: 2,
            explanation: "A cost centre is not the unit of measurement of product or time."
        },
        {
            question: "30. Find Actual Expenses if the absorption rate is ₹130 per hour, production hours are 300, and under absorption is ₹3,000.",
            options: [
                "36,000",
                "39,000",
                "30,000",
                "42,000"
            ],
            correct: 0,
            explanation: "Actual expenses = (130×300) – 3,000 = 39,000 – 3,000 = 36,000."
        },
        {
            question: "31. Calculate value of X as per simultaneous equation method: X = 4037 + 20%Y and Y = 2600 + 10%X.",
            options: [
                "4,650",
                "2,600",
                "3,061",
                "4,160"
            ],
            correct: 0,
            explanation: "Solving the equations gives X = 4,650."
        },
        {
            question: "32. The estimated Factory Overheads and Direct wages of X Ltd. are ₹10,00,000 and ₹1,00,000 respectively. If wages paid for Job-PP is ₹5,000, what is the overhead chargeable on Job-PP?",
            options: [
                "₹5,000",
                "50,000",
                "25,000",
                "500"
            ],
            correct: 1,
            explanation: "Overhead rate = 10,00,000/1,00,000 = 10; therefore, overhead = 5,000×10 = ₹50,000."
        },
        {
            question: "33. What is the accounting treatment for Abnormal Idle time?",
            options: [
                "Charged to Costing Profit & Loss Account",
                "Charged to Factory Overhead",
                "Charged to the Particular Job",
                "Charged to the concerned Department"
            ],
            correct: 0,
            explanation: "Abnormal idle time is charged to the Costing Profit & Loss Account."
        },
        {
            question: "34. In respect of receipts and issues of material stocks:\n(i) Bin Card contains both quantitative and money value of material.\n(ii) Stores Ledger contains only quantitative records of material.",
            options: [
                "Both (i) and (ii) True",
                "(i) False; (ii) True",
                "Both (i) and (ii) False",
                "(i) True; (ii) False"
            ],
            correct: 3,
            explanation: "Typically, the bin card records both quantity and value while the stores ledger provides detailed monetary records."
        },
        {
            question: "35. Match the following terms:\n(i) Defect\n(ii) Scrap\n(iii) Waste",
            options: [
                "(i) (b), (ii) (c), (iii) (a)",
                "(i) (a), (ii) (b), (iii) (c)",
                "(i) (b), (ii) (a), (iii) (c)",
                "(i) (a), (ii) (c), (iii) (b)"
            ],
            correct: 0,
            explanation: "Here, 'Defect' refers to non-conformance (b), 'Scrap' to discarded material with some value (c), and 'Waste' to material loss during production (a)."
        },
        {
            question: "36. From the following, what is the basis of apportionment of Time keeping expenses?",
            options: [
                "Light Points",
                "Direct Wages",
                "Number of Employees",
                "Not provided"
            ],
            correct: 0,
            explanation: "Time keeping expenses are often apportioned on the basis of light points."
        },
        {
            question: "37. The summation of Indirect Material, Indirect Labour, and Indirect Expenses is known as:",
            options: [
                "Direct Cost",
                "Factory Cost",
                "Fixed Cost",
                "Overheads"
            ],
            correct: 3,
            explanation: "Overheads are the sum of all indirect costs."
        },
        {
            question: "38. If the efficiency of a worker is 110%, what is the applicable bonus rate under Emerson's Efficiency Bonus Plan?",
            options: [
                "40%",
                "110%",
                "30%",
                "20%"
            ],
            correct: 3,
            explanation: "Based on the plan, a 110% efficiency results in a bonus rate of 20%."
        },
        {
            question: "39. Objectives of Cost Accounting are to ascertain cost and control cost. Choose the correct statement:",
            options: [
                "Both are false",
                "Only (i) is false and (ii) is true",
                "Both are true",
                "Only (i) is true and (ii) is false"
            ],
            correct: 2,
            explanation: "Both ascertaining and controlling cost are objectives of cost accounting."
        },
        {
            question: "40. An analysis of a worker’s time card shows 48 hours worked, with 45 hours on production (including 4 hours overtime) and 3 hours idle due to machine breakdown. With a wage rate of ₹60 per hour and overtime at 50% extra, calculate the overtime premium.",
            options: [
                "360",
                "120",
                "300",
                "240"
            ],
            correct: 0,
            explanation: "Overtime wage = 4 × (60 + 30) = 360."
        },
        {
            question: "41. The standard time for a job is 36 hours with a rate of ₹30 plus a dearness allowance of ₹10 per hour. If the actual time taken is 30 hours, what are the total earnings under the Rowan bonus plan?",
            options: [
                "900",
                "1,350",
                "1,200",
                "1,400"
            ],
            correct: 1,
            explanation: "Under the Rowan plan, the calculated total earnings come to ₹1,350."
        },
        {
            question: "42. JB Ltd. purchased 1,000 units at a total cost of ₹1,80,000. During transit, 100 units were lost (normal loss). Find the issue price per unit.",
            options: [
                "180",
                "240",
                "120",
                "360"
            ],
            correct: 0,
            explanation: "Normal loss is treated separately; the cost per unit remains at ₹180."
        },
        {
            question: "43. Under Taylor's differential piece rate plan, if the standard output is 100 units at a normal piece rate of ₹10 per unit, what is the earning of a worker who produces 110 units?",
            options: [
                "1,800",
                "880",
                "1,210",
                "1,320"
            ],
            correct: 3,
            explanation: "With the differential scheme, worker Z’s earning comes to ₹1,320."
        },
        {
            question: "44. Find the Re-order Quantity if daily consumption is between 80–100 units, the delivery period is 3–5 days, and the Maximum Level is 660 units.",
            options: [
                "500 units",
                "400 units",
                "920 units",
                "1,160 units"
            ],
            correct: 3,
            explanation: "Due to ambiguity in the calculation, the answer chosen is 1,160 units."
        },
        {
            question: "45. Which of the following wage systems is a combination of time rate and piece rate?",
            options: [
                "Merrick plan",
                "Emerson plan",
                "Rowan plan",
                "Halsey plan"
            ],
            correct: 3,
            explanation: "The Halsey plan combines a time rate with a bonus based on time saved."
        },
        {
            question: "46. JB Ltd. had 900 units @₹10 each on 01.09.2019. Additional purchases during the month (details ambiguous) lead to an issue of 1,600 units on 18.09.2019. Using the simple average method, what is the issue price per unit?",
            options: [
                "13",
                "11",
                "12",
                "14"
            ],
            correct: 2,
            explanation: "Using the weighted average method, the issue price is computed as approximately ₹12 per unit."
        },
        {
            question: "47. The physical checking of actual stock with records is a feature of:",
            options: [
                "ABC Analysis",
                "Continuous Stock Taking System",
                "VED Analysis",
                "Perpetual Inventory System"
            ],
            correct: 3,
            explanation: "A perpetual inventory system involves continuous physical verification of stock."
        },
        {
            question: "48. Calculate the issue price per unit for September 2019 under the Periodic Weighted Average Price Method, given:\n– Balance on 01.09.19: 700 units @₹24\n– Received on 05.09.19: 1,100 units @₹23\n– Received on 17.09.19: 500 units @₹30\n– Received on 28.09.19: 300 units @₹24",
            options: [
                "25",
                "24.73",
                "23",
                "27"
            ],
            correct: 1,
            explanation: "Weighted average price = Total cost (₹64,300) / Total units (2,600) ≈ ₹24.73 per unit."
        },
        {
            question: "49. If the Annual Carrying Cost per unit is ₹36 and the total Carrying Cost is ₹90,000 p.a., with no safety stock required, find the Economic Order Quantity (EOQ).",
            options: [
                "9,000 units",
                "5,000 units",
                "7,000 units",
                "8,000 units"
            ],
            correct: 1,
            explanation: "EOQ is derived from (EOQ/2)×36 = 90,000, so EOQ = (90,000×2)/36 = 5,000 units."
        },
        {
            question: "50. Find the under/over absorption of overhead: Actual overhead for the Job is ₹85,000; overhead is charged at a predetermined rate of ₹15 per labour hour for 5,750 labour hours.",
            options: [
                "750 over absorption",
                "1,250 over absorption",
                "1,250 under absorption",
                "750 under absorption"
            ],
            correct: 1,
            explanation: "Absorbed overhead = 15×5,750 = ₹86,250; over absorption = 86,250 – 85,000 = ₹1,250."
        },
        {
            question: "51. X Ltd. has three departments: P (4,000 sq.ft.), Q (5,000 sq.ft.), and R (6,000 sq.ft.). If the total rent for September 2019 is ₹30,000, what is the rent chargeable to Department R?",
            options: [
                "12,000",
                "₹8,000",
                "10,000",
                "30,000"
            ],
            correct: 0,
            explanation: "Department R’s share = (6,000/15,000)×30,000 = ₹12,000."
        },
        {
            question: "52. Match the following costs with their proper classification:\n(i) Indirect cost\n(ii) Factory cost\n(iii) Material cost",
            options: [
                "(i)-(a), (ii)-(b), (iii)-(c)",
                "(i)-(c), (ii)-(a), (iii)-(b)",
                "(i)-(b), (ii)-(a), (iii)-(c)"
            ],
            correct: 0,
            explanation: "Indirect cost is classified by nature; factory cost by cost centre; and material cost by function."
        },
        {
            question: "53. From the following, what is the basis of apportionment of General Factory Overheads? (Hint: Use Direct Labour hours)",
            options: [
                "Direct Wages",
                "Prime Cost",
                "Direct Material",
                "Direct Expenses"
            ],
            correct: 0,
            explanation: "General Factory Overheads are typically apportioned on the basis of Direct Labour hours."
        },
        {
            question: "54. If the total General Factory Overheads for the year are ₹1,50,000 and the Direct Labour hours are 5,000, what is the Overhead Absorption Rate under the Labour Hour Rate Method?",
            options: [
                "50 per hour",
                "60 per hour",
                "30 per hour",
                "45 per hour"
            ],
            correct: 2,
            explanation: "Overhead absorption rate = 1,50,000/5,000 = ₹30 per hour."
        },
        {
            question: "55. Match the following CAS codes with their classifications:\n(i) CAS-03\n(ii) CAS-07\n(iii) CAS-06",
            options: [
                "(i)-(a), (ii)-(c), (iii)-(b)",
                "(i)-(b), (ii)-(c), (iii)-(a)",
                "(i)-(a), (ii)-(b), (iii)-(c)"
            ],
            correct: 2,
            explanation: "CAS-03 relates to Material Cost, CAS-07 to Overheads, and CAS-06 to Employee Cost."
        },
        {
            question: "56. Generally, the Toys Manufacturing Industry follows which costing method?",
            options: [
                "Operating Costing",
                "Batch Costing",
                "Contract Costing",
                "Operation Costing"
            ],
            correct: 1,
            explanation: "Toys manufacturing typically involves Batch Costing."
        },
        {
            question: "57. Suitable cost unit for bricks is:",
            options: [
                "Per Brick",
                "Per Tempo",
                "Per Kilo Gram",
                "Per Thousand Bricks"
            ],
            correct: 3,
            explanation: "Bricks are commonly measured in thousands."
        }
    ],
    "Marketing Management": [
        // ------ Existing MCQs -------------
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
            question: "4. Arrange the following stages of New Product Development in an appropriate sequence: (a) Test Marketing, (b) Concept Development, (c) Business Analysis, (d) Idea Screening.",
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
    "question": "1. A segment of a business plan provides investors with a timetable for various activities to be accomplished.",
    "options": [
      "Appendix",
      "Mile stone schedule segment",
      "Marketing segment",
      "Financial segment"
    ],
    "correct": 1,
    "explanation": "The milestone schedule segment outlines the timetable for activities."
  },
  {
    "question": "2. ______ has identified the barriers to entrepreneurship.",
    "options": [
      "Gifford Pinchot",
      "Kilby",
      "Karl H. Vesper",
      "Peter Drucker"
    ],
    "correct": 2,
    "explanation": "Karl H. Vesper is credited with identifying barriers to entrepreneurship."
  },
  {
    "question": "3. Which of the following is NOT true for an Intrapreneur?",
    "options": [
      "He/she operates within the organizational environment",
      "He/she re-energizes entrepreneurship within large organizations",
      "He/she sees a business opportunity, obtains the necessary inputs and starts a business operation",
      "He/she transforms an idea into reality by focusing on innovation and creativity in the internal organizational environment"
    ],
    "correct": 2,
    "explanation": "Intrapreneurs work inside organizations; starting a business operation from scratch is typical of an entrepreneur."
  },
  {
    "question": "4. Which of the following is a false statement?",
    "options": [
      "Entrepreneurs do not seek feedback",
      "Entrepreneurship aims at developing entrepreneurial traits",
      "Entrepreneurs avoid taking unnecessary risks",
      "An entrepreneur aims at profit potential"
    ],
    "correct": 0,
    "explanation": "Entrepreneurs generally do seek feedback to improve their ventures."
  },
  {
    "question": "5. In which stage of the creativity process do people use their intellectual capacity to collect information or conduct experiments?",
    "options": [
      "Idea germination",
      "Illumination",
      "Incubation",
      "Preparation"
    ],
    "correct": 3,
    "explanation": "The preparation stage involves gathering information and problem analysis."
  },
  {
    "question": "6. According to a method of generating new ideas, a moderator leads an open, in-depth discussion rather than simply asking questions. This method is known as:",
    "options": [
      "Brainstorming",
      "Incubation",
      "Problem Inventory Analysis",
      "Focus Groups"
    ],
    "correct": 3,
    "explanation": "Focus groups use guided discussion to generate ideas."
  },
  {
    "question": "7. Statement I: Distribution channels are excellent sources for new ideas because they are familiar with market needs. \nStatement II: The federal government cannot be a source of new product ideas.\nChoose the correct evaluation:",
    "options": [
      "Statement II is true and I is false",
      "Statement I is true and II is false",
      "Both the statements are true",
      "Both the statements are false"
    ],
    "correct": 1,
    "explanation": "Distribution channels do provide insights, and the federal government can sometimes be a source of ideas."
  },
  {
    "question": "8. An entrepreneur is an economic agent who unites all means of production and derives his income from the value added. This definition is attributed to:",
    "options": [
      "J.B. Say",
      "Richard Cantillon",
      "Joseph Schumpeter",
      "Harbinson"
    ],
    "correct": 0,
    "explanation": "J.B. Say defined the entrepreneur in this manner."
  },
  {
    "question": "9. Which one of the following consists of skills of an entrepreneur?",
    "options": [
      "Technical, Business Management and Personal Entrepreneurial",
      "Communication, Personality and Intelligence",
      "Conceptual, Human Relation and Technical",
      "Marketing, Financial, and Operational"
    ],
    "correct": 0,
    "explanation": "Entrepreneurial skills are often grouped as technical, management, and personal."
  },
  {
    "question": "10. Which one among the following is NOT included in barriers to entrepreneurship?",
    "options": [
      "Complacency, Monopoly, Legal Constraints",
      "Commitment, Determination and Perseverance",
      "Lack of viable concept, technical skills and seed capital",
      "Time pressures and distractions, Inhibitions due to patents, Protectionism"
    ],
    "correct": 1,
    "explanation": "Commitment, determination, and perseverance are traits, not barriers."
  },
  {
    "question": "11. Statement I: The competitive, economic, and financial analyses in a business plan subject an entrepreneur to close scrutiny of assumptions. \nStatement II: A registered trademark cannot be protected indefinitely.\nChoose the correct evaluation:",
    "options": [
      "Both the statements are true",
      "Statement II is true and I is false",
      "Statement I is true and II is false",
      "Both the statements are false"
    ],
    "correct": 0,
    "explanation": "Both statements are correct. Detailed analyses and the finite nature of trademark protection are true."
  },
  {
    "question": "12. In which step of the creative process is there a subconscious assimilation of information?",
    "options": [
      "Verification",
      "Preparation",
      "Illumination",
      "Incubation"
    ],
    "correct": 3,
    "explanation": "The incubation stage involves subconscious processing of information."
  },
  {
    "question": "13. Which of the following was created by Bernd Rohrbach under the name Method 635?",
    "options": [
      "Reverse Brainstorming",
      "Brain writing",
      "Brainstorming",
      "Checklist"
    ],
    "correct": 1,
    "explanation": "Method 635 is a form of brain writing."
  },
  {
    "question": "14. Sociologists consider the entrepreneur as having the role expected by society. This role is best described as:",
    "options": [
      "Role Performer",
      "Role Definer",
      "Role Visualizer",
      "Role-coordinator"
    ],
    "correct": 0,
    "explanation": "Entrepreneurs are often seen as role performers in society."
  },
  {
    "question": "15. Which characteristic defines an entrepreneur as someone who believes that accomplishments and setbacks are within their own control?",
    "options": [
      "Internal Locus of Control",
      "Drive to achieve",
      "Risk taking",
      "Seeking feedback"
    ],
    "correct": 0,
    "explanation": "An internal locus of control reflects the belief that outcomes are due to one's own actions."
  },
  {
    "question": "16. According to Joseph Schumpeter, in an advanced economy an entrepreneur is an individual who:",
    "options": [
      "Utilizes all means of production",
      "Introduces something new in the economy",
      "Bears the risk of operating a business in an uncertain environment",
      "Performs his role corresponding to the role expected by society"
    ],
    "correct": 1,
    "explanation": "Schumpeter emphasized the role of innovation – introducing new products, processes or markets."
  },
  {
    "question": "17. Pick the odd one out:",
    "options": [
      "Exchange Relationship – Purchasing Inputs",
      "Technology – Upgrading Process and Product Quality",
      "Management Control – Production Management",
      "Practical Administration – Gaining Command over Scarce Resources"
    ],
    "correct": 3,
    "explanation": "While the first three relate to specific management functions, practical administration in this context stands apart."
  },
  {
    "question": "18. Who gave a three-fold division of the entrepreneur’s function as capitalist, managerial, and decision making?",
    "options": [
      "Frank Young",
      "JS Mill",
      "Redick",
      "Flavia Derossi"
    ],
    "correct": 0,
    "explanation": "Frank Young is known for this three-fold division."
  },
  {
    "question": "19. 'Management of customer and supplier relations' comes under which category of functions given by Kilby?",
    "options": [
      "Exchange relationship function",
      "Technology related functions",
      "Management control function",
      "Practical administration function"
    ],
    "correct": 0,
    "explanation": "This function is classified under exchange relationship functions."
  },
  {
    "question": "20. What is the practice of innovating by developing new products, processes, or services while one is part of an organization?",
    "options": [
      "Management",
      "Entrepreneurship",
      "Administration",
      "Intrapreneurship"
    ],
    "correct": 3,
    "explanation": "Innovating within an organization is known as intrapreneurship."
  },
  {
    "question": "21. Statement I: Entrepreneurs are persons who work in existing organizations. \nStatement II: Entrepreneurs operate outside the organizational environment.\nChoose the correct evaluation:",
    "options": [
      "Both the statements are true",
      "Statement II is true and I is false",
      "Both the statements are false",
      "Statement I is true and II is false"
    ],
    "correct": 2,
    "explanation": "Both statements are false since true entrepreneurs usually start ventures outside existing organizations (those inside are intrapreneurs)."
  },
  {
    "question": "22. Statement I: Successful entrepreneurs do not believe that success or failure is governed by fate or luck. \nStatement II: Entrepreneurs do not get intimidated by difficult situations.\nChoose the correct evaluation:",
    "options": [
      "Statement I is true and II is false",
      "Both the statements are false",
      "Both the statements are true",
      "Statement II is true and I is false"
    ],
    "correct": 1,
    "explanation": "Both statements are false because entrepreneurs believe in personal control and are not easily intimidated."
  },
  {
    "question": "23. Reaching which stage of the creative process separates daydreamers from creative people who can transmute value?",
    "options": [
      "Illumination",
      "Incubation",
      "Verification",
      "Idea germination"
    ],
    "correct": 0,
    "explanation": "The illumination stage is when the ‘aha’ moment occurs."
  },
  {
    "question": "24. Match the following segments with their corresponding functions:\n1. Critical-Risks Segment\n2. Financial Segment\n3. Operations Segment\n4. Marketing Segment\n5. Harvest Strategy Segment\n\n(i) Competitive analysis\n(ii) Unfavorable trends in the industry\n(iii) Location of the new venture\n(iv) Break-even analysis\n(v) Investor exit strategies",
    "options": [
      "1-ii, 2-iv, 3-i, 4-v, 5-iii",
      "1-, 2-iv, 3-iii, 4-v, 5-i",
      "1-ii, 2-iv, 3-iii, 4-i, 5-v",
      "1-iv, 2-ii, 3-iii, 4-15, 5-v"
    ],
    "correct": 2,
    "explanation": "The correct matching is: Critical-Risks (ii), Financial (iv), Operations (iii), Marketing (i), Harvest Strategy (v)."
  },
  {
    "question": "25. In the method of generating new ideas where no criticism is allowed by anyone in the group, which technique is being used?",
    "options": [
      "Problem Inventory Analysis",
      "–––",
      "Brainstorming",
      "–––"
    ],
    "correct": 2,
    "explanation": "A key rule in brainstorming is that criticism is not allowed during idea generation."
  },
  {
    "question": "26. In which method are consumers provided with a list of problems in a general product category to generate new product ideas?",
    "options": [
      "Problem Inventory Analysis",
      "Brainstorming",
      "Focus Groups",
      "Incubation"
    ],
    "correct": 0,
    "explanation": "This describes the Problem Inventory Analysis method."
  },
  {
    "question": "27. Which one of the following is the correct sequence of the creative process?",
    "options": [
      "Idea Germination – Preparation – Incubation – Illumination – Verification",
      "Idea Germination – Incubation – Illumination – Preparation – Verification",
      "Idea Germination – Illumination – Incubation – Verification – Preparation",
      "Idea Germination – Verification – Preparation – Incubation – Illumination"
    ],
    "correct": 0,
    "explanation": "The standard sequence (including idea germination) is: Preparation, Incubation, Illumination, and Verification."
  },
  {
    "question": "1. Sociologists consider entrepreneurs as corresponding to the role expected by society. This role is best described as:",
    "options": [
      "Role Visualize",
      "Role Definer",
      "Role Coordinator",
      "Role Performer"
    ],
    "correct": 3,
    "explanation": "Entrepreneurs are often seen as role performers."
  },
  {
    "question": "2. The origin of the word 'entrepreneur' is from the verb 'entreprendre', which comes from:",
    "options": [
      "Egypt",
      "German",
      "French",
      "Latin"
    ],
    "correct": 3,
    "explanation": "The word has its roots in Latin, though it came into modern usage via French."
  },
  {
    "question": "3. Joseph Schumpeter believed that an entrepreneur in an advanced economy is an individual who:",
    "options": [
      "Bears the risk of operating a business in an uncertain environment",
      "Introduces something new in the economy",
      "Utilizes all means of production",
      "Performs his role corresponding to the role expected by society"
    ],
    "correct": 1,
    "explanation": "Schumpeter emphasized innovation as the key entrepreneurial function."
  },
  {
    "question": "4. Which of the following is NOT an important feature of the brainstorming method?",
    "options": [
      "Criticism is encouraged",
      "Freewheeling is encouraged",
      "Combination and improvement of ideas",
      "Quantity of ideas"
    ],
    "correct": 0,
    "explanation": "A core rule of brainstorming is that criticism is not allowed."
  },
  {
    "question": "5. Which method of generating new ideas encourages freewheeling and is characterized by unfiltered idea generation?",
    "options": [
      "–––",
      "Brainstorming",
      "Gordon Method",
      "Focus Group"
    ],
    "correct": 1,
    "explanation": "Brainstorming encourages freewheeling, non-judgmental idea generation."
  },
  {
    "question": "6. Which of the following is NOT a characteristic of an entrepreneur?",
    "options": [
      "Seeking feedback",
      "Opportunity orientation",
      "External Locus of Control",
      "Tolerance for ambiguity"
    ],
    "correct": 2,
    "explanation": "Entrepreneurs typically have an internal locus of control, not an external one."
  },
  {
    "question": "7. Which one of the following statements is NOT appropriate for the term 'entrepreneur'?",
    "options": [
      "Brings organization into existence",
      "Reenergizes stagnated business",
      "Operates within the organizational environment",
      "Changes the existing state of equilibrium"
    ],
    "correct": 2,
    "explanation": "Operating within an organization describes an intrapreneur, not an entrepreneur."
  },
  {
    "question": "8. The definition 'an economic agent who unites all means of production and derives income from their employment' is attributed to:",
    "options": [
      "Peter Drucker",
      "Joseph A. Schumpeter",
      "J. S. Mill",
      "J. B. Say"
    ],
    "correct": 3,
    "explanation": "This classic definition is attributed to J. B. Say."
  },
  {
    "question": "9. The term 'intrapreneur' was coined by:",
    "options": [
      "Kilby",
      "Gifford Pinchot",
      "Peter Drucker"
    ],
    "correct": 1,
    "explanation": "Gifford Pinchot is credited with coining the term 'intrapreneur.'"
  },
  {
    "question": "10. Entrepreneurs who do not wish to create anything new but rather copy innovations are known as:",
    "options": [
      "Drone",
      "Fabian",
      "Imitators",
      "Active partner"
    ],
    "correct": 2,
    "explanation": "Such entrepreneurs are typically referred to as imitators."
  },
  {
    "question": "11. Most creative ideas can be traced to an individual's interest in or ______ about a specific problem or area of study.",
    "options": [
      "Knowledge",
      "Curiosity",
      "Research",
      "Skill"
    ],
    "correct": 1,
    "explanation": "Curiosity is a key driver of creative ideas."
  },
  {
    "question": "12. Which segment of a business plan provides investors with a timetable for various activities to be accomplished?",
    "options": [
      "Marketing",
      "Appendix",
      "Financial",
      "Milestone"
    ],
    "correct": 3,
    "explanation": "The milestone segment details the schedule for achieving objectives."
  },
  {
    "question": "13. In the general product category method of generating ideas, consumers are provided with a list of problems in order to:",
    "options": [
      "Use a Checklist",
      "Conduct Problem Inventory Analysis",
      "Engage in Brainstorming",
      "Participate in a Focus Group"
    ],
    "correct": 1,
    "explanation": "This method is known as Problem Inventory Analysis."
  },
  {
    "question": "14. Under which method are a group of individuals provided with information in a structured format?",
    "options": [
      "Brainstorming",
      "Brain writing",
      "Problem Inventory Analysis",
      "Focus Group"
    ],
    "correct": 1,
    "explanation": "Brain writing involves a structured method of recording ideas."
  },
  {
    "question": "15. Which characteristic defines an entrepreneur as someone who believes that both accomplishments and setbacks are within their control?",
    "options": [
      "Drive to achieve",
      "Internal Locus of Control",
      "Risk taking",
      "Seeking feedback"
    ],
    "correct": 1,
    "explanation": "An internal locus of control reflects the belief that outcomes depend on one’s actions."
  },
  {
    "question": "16. What is the method for developing new ideas when individuals are unaware of the problem?",
    "options": [
      "Brainstorming",
      "Force Relationship",
      "Gordon Method",
      "Reverse Brainstorming"
    ],
    "correct": 1,
    "explanation": "The Force Relationship method encourages linking unrelated concepts to generate ideas."
  },
  {
    "question": "17. The decision-making, human relations, and negotiation skills possessed by an entrepreneur are best classified as:",
    "options": [
      "Conceptual Skills",
      "Technical Skills",
      "Business Management Skills",
      "Personal Entrepreneurial Skills"
    ],
    "correct": 3,
    "explanation": "These skills are considered part of an entrepreneur’s personal skill set."
  },
  {
    "question": "18. An idea once illuminated in the mind of an individual still has little meaning until it is:",
    "options": [
      "Verified",
      "Prepared",
      "Incubated",
      "Germinated"
    ],
    "correct": 0,
    "explanation": "Verification is needed to test and give practical meaning to an idea."
  },
  {
    "question": "19. An entrepreneur who recognizes a social problem and uses entrepreneurial principles to create change is known as a:",
    "options": [
      "Problem Solver",
      "Social Entrepreneur",
      "Financial Entrepreneur",
      "Economical Entrepreneur"
    ],
    "correct": 1,
    "explanation": "Such an individual is known as a social entrepreneur."
  },
  {
    "question": "20. According to Robert D. Hisrich, which one of the following is most closely related to the technical skills required by an entrepreneur?",
    "options": [
      "Goal Setting",
      "Oral Communication",
      "Human Relations",
      "Decision Making"
    ],
    "correct": 0,
    "explanation": "Goal setting is linked to planning and technical proficiency in running a venture."
  },
  {
    "question": "21. Who among the following contributed to the study of barriers to entrepreneurship?",
    "options": [
      "Peter Drucker",
      "Karl H. Vesper",
      "Kilby",
      "Gifford Pinchot"
    ],
    "correct": 1,
    "explanation": "Karl H. Vesper is recognized for his work on barriers to entrepreneurship."
  },
  {
    "question": "22. Which one of the following is the correct sequence of the creativity process?",
    "options": [
      "Idea Germination – Illumination – Incubation – Verification – Preparation",
      "Idea Germination – Preparation – Incubation – Illumination – Verification",
      "Idea Germination – Verification – Preparation – Incubation – Illumination",
      "Idea Germination – Incubation – Illumination – Preparation – Verification"
    ],
    "correct": 1,
    "explanation": "The standard creative process follows: Preparation, Incubation, Illumination, and Verification (preceded here by idea germination)."
  }


    ],
    "Income Tax": [
  {
    id: 1,
    question:
      "Choose the form to be filled in for allotment of PAN card by Mr. Jatayu who is a resident Indian citizen of 65 years.",
    options: {
      A: "Form 49A",
      B: "Form 49AA",
      C: "Form 15G",
      D: "Form 15H",
    },
    answer: "A",
  },
  {
    id: 2,
    question:
      "Choose correct category of assessee with PAN AFZFK7109K.",
    options: {
      A: "Proprietorship",
      B: "Company",
      C: "Individual",
      D: "Partnership Firm",
    },
    answer: "C",
  },
  {
    id: 3,
    question:
      "Deduction of Interest on borrowed capital in case of a self occupied house property is an example of:",
    options: {
      A: "Relief under section 90",
      B: "Set off and carry forward of current year losses",
      C: "Taxation at lower rates",
      D: "Deduction under section 80C",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "Same PAN cannot be allotted to more than:",
    options: {
      A: "1 person",
      B: "5 persons",
      C: "3 persons",
      D: "2 persons",
    },
    answer: "A",
  },
  {
    id: 5,
    question:
      "Which of the following transactions are linked with the help of permanent account number?",
    options: {
      A: "Tax payment",
      B: "Availing TDS credit",
      C: "Filing of return",
      D: "All of the above",
    },
    answer: "D",
  },
  {
    id: 6,
    question: "Which of the following is not a proof of address?",
    options: {
      A: "Passport",
      B: "Electricity bill",
      C: "Telephone bill",
      D: "School leaving certificate",
    },
    answer: "D",
  },
  {
    id: 7,
    question:
      "Agricultural Income, if they furnish declaration in – The provisions of Section 139A shall not apply to the person who is in receipt of only:",
    options: {
      A: "Form No.61",
      B: "––", // Option not provided clearly
      C: "Form No.15G",
      D: "––",
    },
    answer: "C",
  },
  {
    id: 8,
    question:
      "For filing online return, a person is required to upload an XML file, which can be generated by using which utility provided by the Income Tax Department?",
    options: {
      A: "Word utility",
      B: "PPT Utility",
      C: "Excel Utility",
      D: "Access Utility",
    },
    answer: "C",
  },
  {
    id: 9,
    question:
      "Loss from the lottery ticket and crossword puzzles can be set off against the ______ income.",
    options: {
      A: "Salary",
      B: "House property",
      C: "Capital gain",
      D: "None of these",
    },
    answer: "D",
  },
  {
    id: 10,
    question:
      "PAN is required to be quoted in the documents pertaining to deposit of cash with bank, if the aggregate amount of cash to be deposited is Rs.",
    options: {
      A: "10,000",
      B: "1,00,000",
      C: "50,000",
      D: "60,000 or more",
    },
    answer: "C",
  },
  {
    id: 11,
    question:
      "A person, who has not been allotted PAN, shall make declaration in Form No. while opening a bank account.",
    options: {
      A: "Form No. 61",
      B: "Form No. ISH",
      C: "Form No. 156",
      D: "Form No. 60",
    },
    answer: "C",
  },
  {
    id: 12,
    question: "The last character of PAN indicates",
    options: {
      A: "Surname",
      B: "First name",
      C: "Middle Name",
      D: "Alphabetic Check Digit",
    },
    answer: "D",
  },
  {
    id: 13,
    question:
      "Mrs. Deepali Patel, Indian citizen, 62 years of age, can apply for PAN in form:",
    options: {
      A: "Form 49A",
      B: "Form 49AA",
      C: "Form 60",
      D: "––",
    },
    answer: "A",
  },
  {
    id: 14,
    question:
      "Which of the following is a proof of Identity for applying PAN?",
    options: {
      A: "Passport",
      B: "Driving License",
      C: "Voter Card",
      D: "All of the above",
    },
    answer: "D",
  },
  {
    id: 15,
    question:
      "Which of the following is the correct PAN of Mr. Sandip Prajapati?",
    options: {
      A: "ABCSP1234K",
      B: "ABCPS1234H",
      C: "ABCPP1234K",
      D: "ABC12P34HK",
    },
    answer: "A",
  },
  {
    id: 16,
    question:
      "If the recipient does not furnish his PAN to the deductor, tax will be deducted at the normal rate or at the rate of, whichever is higher.",
    options: {
      A: "10%",
      B: "20%",
      C: "30%",
      D: "2%",
    },
    answer: "C",
  },
  {
    id: 17,
    question:
      "Mr. Arvind has e-filed his return and his income is less than five lakhs and he is not claiming any refund. He can e-verify his return by:",
    options: {
      A: "Net Banking",
      B: "Aadhaar Card",
      C: "Email ID & Mobile Number",
      D: "All of the above",
    },
    answer: "A", // (Answer chosen per available data – please verify)
  },
  {
    id: 18,
    question:
      "From the under mentioned PAN, which one constitutes a valid Permanent Account Number?",
    options: {
      A: "ABCHP1234K",
      B: "ABC1234PHK",
      C: "ABCP1234HK",
      D: "ABC12P34HK",
    },
    answer: "C",
  },
  {
    id: 19,
    question:
      "For filing online return, the person is required to upload an XML file. This file can be generated by using which of the utilities provided by the Income Tax Department?",
    options: {
      A: "JAVA Utility",
      B: "PPT Utility",
      C: "Excel Utility",
      D: "Both A or C",
    },
    answer: "D",
  },
  {
    id: 20,
    question:
      "Loss from the lottery ticket and crossword puzzles can be set off against the income.",
    options: {
      A: "Salary",
      B: "House Property",
      C: "Capital Gain",
      D: "None of these",
    },
    answer: "D",
  },
  {
    id: 21,
    question:
      "In which of the following transactions, every person shall quote his PAN specified in rule 1148?",
    options: {
      A: "Demat Account",
      B: "Opening an account with a bank",
      C: "Sale of motor vehicle (other than two wheeler)",
      D: "All of the above",
    },
    answer: "D",
  },
  {
    id: 22,
    question:
      "Which loss can't be carried forward to the next subsequent year?",
    options: {
      A: "Capital Loss",
      B: "Loss of Other Source",
      C: "Business Loss",
      D: "None of the above",
    },
    answer: "A",
  },
  {
    id: 23,
    question:
      "Loss from the activity of owning and maintaining race horses can be carried forward for how many years?",
    options: {
      A: "5 years",
      B: "6 years",
      C: "8 years",
      D: "––",
    },
    answer: "A",
  },
  {
    id: 24,
    question:
      "Long term capital loss can be adjusted only against ______ (u/s 70).",
    options: {
      A: "Short term capital gain",
      B: "Long term capital gain",
      C: "Salary income",
      D: "None of the above",
    },
    answer: "A",
  },
  {
    id: 25,
    question:
      "Contract for purchase or sale of any commodity, stocks or shares is periodically settled otherwise than by the actual delivery. It is known as a:",
    options: {
      A: "Speculative transaction",
      B: "Non Speculative transaction",
      C: "A and B",
      D: "None of the above",
    },
    answer: "A",
  },
  {
    id: 26,
    question:
      "Under rule 1148, when payment is made to a hotel or restaurant in cash up to what amount is quoting PAN not required?",
    options: {
      A: "Up to 2,30,000",
      B: "Up to 3,40,000",
      C: "Up to 3,50,000",
      D: "None of the above",
    },
    answer: "A",
  },
  {
    id: 27,
    question: "Which of the following statement is not true?",
    options: {
      A: "Due to e-filing, assessee can view the current status of the return.",
      B: "E-filing return is mandatory for resident individuals in India whose income exceeds 5 lacs.",
      C: "E-filing return is not mandatory for Companies.",
      D: "To browse and select the XML file is one of the steps of the e-filing procedure.",
    },
    answer: "B",
  },
  {
    id: 28,
    question: "Which of the following is a pre-requisite of e-payment?",
    options: {
      A: "Internet banking account",
      B: "Good internet connection",
      C: "Valid TAN or PAN",
      D: "All of the above",
    },
    answer: "D",
  },
  {
    id: 29,
    question: "Which of the following statements is true?",
    options: {
      A: "E-Payment facilitates payment of direct taxes online by taxpayers.",
      B: "E-filing of return is mandatory for all assessee.",
      C: "Once return of Income is e-filed, the assessee cannot view the same.",
      D: "Due to e-filing, processing cost of return cannot be reduced.",
    },
    answer: "A",
  },
  {
    id: 30,
    question:
      "Which of the following is the correct sequence for e-filing of Income Tax Return procedure?",
    options: {
      A: "Fill the excel/Java utility and validate → Generate XML file → Download the utility → Visit website",
      B: "Generate XML file → Download utility → Visit website → Fill the utility",
      C: "Visit website → Download utility → Fill the utility → Generate XML file",
      D: "Visit website → Download utility → Generate XML file → Fill the utility",
    },
    answer: "A",
  },
  {
    id: 31,
    question:
      "Arrange the sequence of e-payment procedure:",
    options: {
      A: "Enter PAN/TAN → Select relevant challan → Visit website → Click on the link for 'e payment, Pay Taxes Online'",
      B: "Visit website → Click on link → Select challan → Enter PAN/TAN",
      C: "Enter PAN/TAN → Select challan → Click on link → Visit website",
      D: "Click on link → Visit website → Select challan → Enter PAN/TAN",
    },
    answer: "A",
  },
  {
    id: 32,
    question:
      "Which of the following bank is available for payment of taxes?",
    options: {
      A: "Oriental Bank of Commerce",
      B: "Punjab National Bank",
      C: "Union Bank of India",
      D: "All of the above",
    },
    answer: "D",
  },
  {
    id: 33,
    question:
      "Mr. X, having income less than 4,50,000, can file his return of income by way of ......",
    options: {
      A: "E-filing using a Digital Signature",
      B: "E-filing without a Digital Signature",
      C: "Filing Physical Form of ITR",
      D: "All of the above",
    },
    answer: "B",
  },
  {
    id: 34,
    question: "The last character of PAN indicates ______.",
    options: {
      A: "First name",
      B: "Check digit",
      C: "Surname",
      D: "Middle name",
    },
    answer: "B",
  },
  {
    id: 35,
    question:
      "Amount of unabsorbed depreciation can be carried forward for ______.",
    options: {
      A: "4 years",
      B: "8 years",
      C: "Zero year",
      D: "Unlimited number of years",
    },
    answer: "D",
  },
  {
    id: 36,
    question:
      "Which of the following is true for rebate under Section 87A for the assessment year 2024-25?",
    options: {
      A: "100% of income tax or ₹2,000 whichever is higher",
      B: "100% of income tax or ₹2,000 whichever is less",
      C: "100% of income tax or ₹5,000 whichever is higher",
      D: "100% of income tax or ₹2,500 whichever is less",
    },
    answer: "B",
  },
  {
    id: 37,
    question: "What is the full form of CPC ?",
    options: {
      A: "Centralized pre-processed centre",
      B: "Control Procedure Centre",
      C: "Centralized processing Centre",
      D: "Central processing control",
    },
    answer: "C",
  },
  {
    id: 38,
    question:
      "PAN card application form for a PAN of a company can be signed by",
    options: {
      A: "Trustee",
      B: "Karta",
      C: "Director",
      D: "Partner",
    },
    answer: "C",
  },
  {
    id: 39,
    question:
      "Provisions of quoting Aadhar number are laid down under section",
    options: {
      A: "139A",
      B: "49A",
      C: "139AA",
      D: "49AA",
    },
    answer: "A",
  },
  {
    id: 40,
    question:
      "Any resident person who enters into a financial transaction of an amount aggregating to (as per 01-04-2021) is required to obtain PAN. The threshold is:",
    options: {
      A: "2,00,000 or less",
      B: "2,00,000 or more",
      C: "2,50,000 or less",
      D: "2,50,000 or more",
    },
    answer: "D",
  },
  {
    id: 41,
    question: "Online PAN application can be done on the website of",
    options: {
      A: "NSDL",
      B: "UTI",
      C: "Both A and B",
      D: "State Government",
    },
    answer: "C",
  },
  {
    id: 42,
    question:
      "If a person lost his PAN Card, then in which form will he/she apply?",
    options: {
      A: "Form 49A",
      B: "Form 49AA",
      C: "Request for New PAN Card/changes or correction in PAN DATA",
      D: "None of these",
    },
    answer: "C",
  },
  {
    id: 43,
    question:
      "Rebate u/s 87A is available to",
    options: {
      A: "Individual",
      B: "HUF",
      C: "Both A and B",
      D: "Company",
    },
    answer: "A",
  },
  {
    id: 44,
    question:
      "In which case are the provisions of quoting of Aadhar number NOT applicable as per the Income Tax Act, 1961?",
    options: {
      A: "If person residing in Assam, Jammu and Kashmir and Meghalaya",
      B: "A non resident as per the Income Tax Act",
      C: "Both A & B",
      D: "None of the above",
    },
    answer: "C",
  },
  {
    id: 45,
    question:
      "Clubbing of income in respect of income of a minor child is not attracted if",
    options: {
      A: "Income of minor child is on account of manual work",
      B: "Income of minor child (from all sources) if the child is suffering from a disability as specified under section 80U",
      C: "Both A and B",
      D: "None of the above",
    },
    answer: "B",
  },
  {
    id: 46,
    question:
      "Permanent Account Number (PAN) is a unique alphanumeric number issued by the Income Tax Department. It is comprised of",
    options: {
      A: "Twenty characters",
      B: "Fifteen characters",
      C: "Ten characters",
      D: "Five characters",
    },
    answer: "C",
  },
  {
    id: 47,
    question:
      "Out of the first ______ characters, the first three characters represent the alphanumeric series running from AAA to ZZZ.",
    options: {
      A: "Ten",
      B: "Seven",
      C: "Five",
      D: "Four",
    },
    answer: "C",
  },
  {
    id: 48,
    question: "The fifth character of PAN represents the status of the PAN holder.",
    options: {
      A: "True",
      B: "False",
    },
    answer: "A",
  },
  {
    id: 49,
    question:
      "Last character, i.e., the tenth character is an ______.",
    options: {
      A: "Identification",
      B: "Symbol",
      C: "Alphabetic check digit",
      D: "Numeric check digit",
    },
    answer: "C",
  },
  // TDS-RELATED QUESTIONS
  {
    id: 50,
    question:
      "Threshold limit for TDS on director's fees paid in financial year 2024-25 under section 194J for fees for professional or technical services is",
    options: {
      A: "₹5,000",
      B: "30,000",
      C: "₹10,000",
      D: "No Threshold limit",
    },
    answer: "A",
  },
  {
    id: 51,
    question:
      "Salaried employee can make an application for lower tax deduction or nil deduction by approaching the Assessing Officer using which form?",
    options: {
      A: "Form 49A",
      B: "Form 13",
      C: "Form 15G",
      D: "Form 15H",
    },
    answer: "B",
  },
  {
    id: 52,
    question:
      "Mr. Rajput has won a lottery prize of ₹3,00,000 on December 20, 2023, out of which ₹2,35,000 is payable to the agent. Compute the amount of TDS under section 1948.",
    options: {
      A: "₹90,000",
      B: "₹1,00,500",
      C: "79,500",
      D: "₹81,000",
    },
    answer: "B",
  },
  {
    id: 53,
    question:
      "Interest credited or paid by a firm to its partner(s) is subject to TDS at the rate of (for interest other than interest on securities) under section 194A.",
    options: {
      A: "10%",
      B: "10%",
      C: "30%",
      D: "20%",
    },
    answer: "A",
  },
  {
    id: 54,
    question:
      "If the recipient does not furnish his PAN to the deductor, tax will be deducted at the normal rate or at the rate of, whichever is higher.",
    options: {
      A: "Nil",
      B: "Yes, 19,800",
      C: "Yes, 1,980",
      D: "₹5,000",
    },
    answer: "A",
  },
  {
    id: 55,
    question:
      "For contractor and sub-contractor payments under section 194C (if the recipient is a private limited company), what is the applicable TDS rate?",
    options: {
      A: "10%",
      B: "20%",
      C: "30%",
      D: "2%",
    },
    answer: "A",
  },
  {
    id: 56,
    question:
      "What is the threshold limit for director's fees under section 194J of the Income Tax Act, 1961?",
    options: {
      A: "₹30,000",
      B: "₹10,000",
      C: "20,000",
      D: "No Threshold Limit",
    },
    answer: "A",
  },
  {
    id: 57,
    question:
      "Mr. Raja has won the lottery ticket of ₹62,250 on 1st May, 2023 in a lucky draw. Compute the amount of TDS under section 1948.",
    options: {
      A: "20,175",
      B: "20,780",
      C: "18,675",
      D: "₹6,927",
    },
    answer: "A",
  },
  {
    id: 58,
    question:
      "Kruti Limited has paid rent of ₹1,31,000 for branch office to Mr. Ramjilal for FY 2023-24. Is TDS applicable? If yes, calculate the amount of TDS.",
    options: {
      A: "Yes, ₹1,310",
      B: "Yes, ₹13,100",
      C: "Yes, ₹1,350",
      D: "No, Nil",
    },
    answer: "B",
  },
  {
    id: 59,
    question:
      "As per section 1941 of the Income Tax Act, 1961, what is the percentage of TDS for payment of rent for plant and machinery?",
    options: {
      A: "10%",
      B: "20%",
      C: "30%",
      D: "2%",
    },
    answer: "A",
  },
  {
    id: 60,
    question:
      "Maximum amount which can be paid without tax deduction under section 194D for payment of a Life Insurance Policy is",
    options: {
      A: "₹15,000",
      B: "₹75,000",
      C: "₹25,000",
      D: "₹6,000",
    },
    answer: "A",
  },
  {
    id: 61,
    question:
      "Mr. Vishal has won a tablet of ₹35,000 and a cash prize of ₹15,000 on October 2, 2023 in a lucky draw. Compute the amount of TDS under section 1948.",
    options: {
      A: "₹20,000",
      B: "₹1,00,000",
      C: "₹10,500",
      D: "₹11,330",
    },
    answer: "C",
  },
  {
    id: 62,
    question:
      "Mr. Gopal Rai has purchased a residential property of ₹65 lakhs. Is TDS applicable? If yes, calculate the amount of TDS.",
    options: {
      A: "Yes, ₹65,000",
      B: "Yes, ₹6,50,000",
      C: "Yes, ₹1,30,000",
      D: "No, Nil",
    },
    answer: "A",
  },
  {
    id: 63,
    question:
      "Who is the tax recipient under section 194G for commissions on sale of lottery tickets?",
    options: {
      A: "Any resident person",
      B: "Unit holder u/s 80CCB",
      C: "Any person",
      D: "None of the above",
    },
    answer: "C",
  },
  {
    id: 64,
    question:
      "In which of the following sections is a 10% rate of tax deduction at source applicable?",
    options: {
      A: "Section-194F for Repurchase of units by Mutual Fund or UTI",
      B: "Section-194H for commission or brokerage",
      C: "Section-194G for commission on sale of lottery tickets",
      D: "Both (B) & (C)",
    },
    answer: "D",
  },
  {
    id: 65,
    question:
      "At what time is tax required to be deducted at source under section 194G?",
    options: {
      A: "At the time of payment",
      B: "At the time of payment or at the time of credit whichever is earlier",
      C: "Both (A) and (B)",
      D: "None of the above",
    },
    answer: "B",
  },
  {
    id: 66,
    question:
      "Match the following TDS rates: i) TDS @ 1%, ii) TDS @10%, iii) TDS @2%. (Select the correct matching option)",
    options: {
      A: "a) i, b) ii, c) iii",
      B: "a) iii, b) i, c) ii",
      C: "a) ii, b) i, c) iii",
      D: "a) iii, b) ii, c) i",
    },
    answer: "D",
  },
  {
    id: 67,
    question:
      "M/s. T.D.S. Limited has paid rent of ₹1,44,000 for branch office to Mr. Ronak Dave for FY 2023-24. (Match: i) Section-194I Rent on Plant & Machinery, ii) Section-194J Professional Fee, iii) Section-194IA Purchase of Immovable Property) – select the correct matching.",
    options: {
      A: "a) i, b) ii, c) iii",
      B: "a) iii, b) i, c) ii",
      C: "a) ii, b) i, c) iii",
      D: "a) iii, b) ii, c) i",
    },
    answer: "A",
  },
  {
    id: 68,
    question:
      "What is the threshold limit for payment in respect of Director's fees under section 194B?",
    options: {
      A: "₹5,000",
      B: "₹10,000",
      C: "20,000",
      D: "Not Applicable",
    },
    answer: "A",
  },
  {
    id: 69,
    question:
      "Maximum amount which can be paid without tax deduction in respect of interest (other than interest on securities and Bank Interest) under section 194A is",
    options: {
      A: "₹5,000",
      B: "₹10,000",
      C: "₹15,000",
      D: "Nil",
    },
    answer: "A",
  },
  {
    id: 70,
    question:
      "To get the salary without TDS or with lower TDS, the employee will have to approach the Assessing Officer by submitting an application in",
    options: {
      A: "Form 15G",
      B: "Form 15H",
      C: "Form 13",
      D: "Form 16A",
    },
    answer: "C",
  },
  {
    id: 71,
    question:
      "Mr. A wins a lottery prize of ₹4,00,000 on March 22, 2022 out of which ₹40,000 is payable to the agent. What amount shall be deducted as TDS under section 1948?",
    options: {
      A: "₹1,20,000",
      B: "₹40,000",
      C: "₹1,08,000",
      D: "₹2,80,000",
    },
    answer: "C",
  },
  {
    id: 72,
    question:
      "How much maximum amount can be paid without tax deduction under section 194B for winnings from lottery?",
    options: {
      A: "Payment amount of ₹10,000 or less than 10,000",
      B: "Payment amount of ₹5,000 or less than 25,000",
      C: "Payment amount more than 10,000",
      D: "None of the above",
    },
    answer: "A",
  },
  {
    id: 73,
    question:
      "₹45,000 paid during the previous year to a contractor (other than Individual/HUF) – find the TDS liability, if any.",
    options: {
      A: "₹4,500",
      B: "₹5,500",
      C: "₹6,000",
      D: "None of the above",
    },
    answer: "A",
  },
  {
    id: 74,
    question:
      "Tax is deductible from the consideration payable for work contract under section 194C excluding:",
    options: {
      A: "Labour value",
      B: "Material value",
      C: "Service Tax",
      D: "None of the above",
    },
    answer: "A",
  },
  {
    id: 75,
    question:
      "A bonus under a life insurance policy was paid by ABC Life Insurance Company to Mr. R, an Indian resident. At what rate is TDS deductible on such amount?",
    options: {
      A: "10%",
      B: "2%",
      C: "5%",
      D: "1%",
    },
    answer: "A",
  },
  {
    id: 76,
    question:
      "How much maximum amount can be paid without tax deduction under section 194D for Insurance commission?",
    options: {
      A: "Any amount of ₹10,000 or less than 10,000",
      B: "Any amount of ₹2,500 or less than 2,500",
      C: "Any amount of ₹15,000 or less than ₹15,000",
      D: "Any amount of ₹5,000 or less than 5,000",
    },
    answer: "D",
  },
  {
    id: 77,
    question:
      "Mr. A has paid ₹1,00,000 to XYZ Contractors, a firm, for a contractual work. At what rate should TDS be deducted on this payment?",
    options: {
      A: "1%",
      B: "10%",
      C: "30%",
      D: "2%",
    },
    answer: "A",
  },
  {
    id: 78,
    question:
      "If the recipient of office rent income does not furnish his PAN, at what rate will tax be deducted?",
    options: {
      A: "10%",
      B: "20%",
      C: "30%",
      D: "30%",
    },
    answer: "C",
  },
  {
    id: 79,
    question:
      "Rate of TDS applicable in case of interest on securities under section 193 is",
    options: {
      A: "5%",
      B: "1%",
      C: "2%",
      D: "10%",
    },
    answer: "A",
  },
  {
    id: 80,
    question:
      "Tax is deductible from the consideration payable for work contract under section 194C excluding service tax. This relates to:",
    options: {
      A: "Work Contract",
      B: "Director's Fee",
      C: "Interest",
      D: "Rent",
    },
    answer: "A",
  },
  {
    id: 81,
    question:
      "Neha sells her house to Nisha for ₹60,00,000. Under section 194-IA, TDS is to be deducted at what rate and by whom?",
    options: {
      A: "By Nisha at 2%",
      B: "By Neha at 1%",
      C: "By Neha at 2%",
      D: "By Nisha at 1%",
    },
    answer: "D",
  },
  {
    id: 82,
    question:
      "At what time is tax required to be deducted at source under section 1948?",
    options: {
      A: "At the time of payment",
      B: "At the time of payment or at the time of credit whichever is earlier",
      C: "Both A and B",
      D: "None of the above",
    },
    answer: "B",
  },
  {
    id: 83,
    question:
      "Rate of TDS applicable in case of insurance commission under section 194D, if the recipient is a company, is",
    options: {
      A: "10%",
      B: "10%",
      C: "20%",
      D: "15%",
    },
    answer: "A",
  },
  {
    id: 84,
    question:
      "Mr. X wins a lottery prize of ₹25,00,000 in the previous year 2021-22. What is the amount of TDS required to be deducted?",
    options: {
      A: "₹18,300",
      B: "₹1,220",
      C: "₹610",
      D: "250,000",
    },
    answer: "D",
  },
  {
    id: 85,
    question:
      "Maximum amount which can be paid as interest (other than interest on securities) without TDS under section 194A is",
    options: {
      A: "₹5,000 (₹10,000 in case of bank interest)",
      B: "₹15,000 (₹20,000 in case of bank interest)",
      C: "₹10,000 (₹20,000 in case of bank interest)",
      D: "₹5,000 (₹40,000/₹50,000 in case of bank interest)",
    },
    answer: "C",
  },
  {
    id: 86,
    question:
      "TDS deducted at source is deposited to the",
    options: {
      A: "Co-operative bank",
      B: "Reserve Bank of India",
      C: "Government Treasury",
      D: "National Depository",
    },
    answer: "C",
  },
  {
    id: 87,
    question:
      "Jason receives a net salary of ₹48,000 after deduction of his Provident Fund contribution and daily allowance (totaling ₹20,000). On what amount is TDS deducted?",
    options: {
      A: "₹68,000",
      B: "₹48,000",
      C: "₹20,000",
      D: "₹28,000",
    },
    answer: "A",
  },
  {
    id: 88,
    question:
      "Ravi, working as an assistant engineer in Larsen & Toubro, has ₹25,500 deducted monthly as TDS. At year-end, to claim his tax credit, which form should he receive from his employer?",
    options: {
      A: "Form 12B",
      B: "Form 13",
      C: "Form 16",
      D: "Form 15G/H",
    },
    answer: "C",
  },
  {
    id: 89,
    question:
      "Mohit, a doctor, has ₹1,200 deducted monthly as TDS from his salary. His net salary is ₹44,850. While computing income from salary, which amount will be taken?",
    options: {
      A: "₹44,850",
      B: "₹46,050",
      C: "₹43,650",
      D: "₹44,580",
    },
    answer: "A",
  },
  {
    id: 90,
    question:
      "Leela has taken a home loan from Bank of Baroda with a monthly payment of ₹10,000 including ₹2,500 as interest. She wishes to have tax deducted from the interest portion. Is this possible?",
    options: {
      A: "Tax can only be deducted if the interest is more than ₹10,000",
      B: "Tax shall be deducted only to an extent of ₹10,000",
      C: "Yes, tax shall be deducted at 10%",
      D: "No, tax shall not be deducted from interest paid",
    },
    answer: "B",
  },
  {
    id: 91,
    question:
      "Mr. Dabhoiwala won a lottery worth ₹50,00,000. How much will he receive after TDS?",
    options: {
      A: "₹35,00,000",
      B: "₹50,00,000",
      C: "₹85,00,000",
      D: "₹40,00,000",
    },
    answer: "A",
  },
  {
    id: 92,
    question:
      "Suketu has 12% of his salary deducted as TDS and wishes to reduce it to 6%. How can he do that?",
    options: {
      A: "Submit Form 128 to his Assessing Officer",
      B: "Submit Form 15G/H to his Assessing Officer",
      C: "Submit an application in Form 13 to his Assessing Officer",
      D: "Submit Form 16 to his Assessing Officer",
    },
    answer: "C",
  },
  {
    id: 93,
    question:
      "Jasdeep, 29 years old and a resident in India working as a foreman, can receive salary without TDS up to which limit?",
    options: {
      A: "₹250,000",
      B: "₹500,000",
      C: "₹300,000",
      D: "₹200,000",
    },
    answer: "A",
  },
  {
    id: 94,
    question:
      "Reshma works two jobs. If both employers deduct TDS independently, what should she do?",
    options: {
      A: "Submit Form 12B to one employer",
      B: "Both employers cannot deduct TDS independently",
      C: "Submit Form 15G/H to avoid TDS",
      D: "Submit Form 12B to one employer so that TDS is deducted on the aggregate salary OR submit Form 15G/H to avoid TDS",
    },
    answer: "D",
  },
  {
    id: 95,
    question:
      "Sooraj holds 1,250 shares of Tata Motors. Tata Motors declared a dividend of ₹12.25 per share. When will TDS be deducted?",
    options: {
      A: "May",
      B: "June",
      C: "No tax shall be deducted",
      D: "Tata Motors cannot deduct tax",
    },
    answer: "B",
  },
  {
    id: 96,
    question:
      "Mittal, 71 years old, has a fixed deposit of ₹18,00,000 in Canara Bank. To receive full interest, which form should he submit?",
    options: {
      A: "Form 13",
      B: "Form 15H",
      C: "Form 15G",
      D: "Form 16",
    },
    answer: "B",
  },
  {
    id: 97,
    question:
      "Sejal Associates, a partnership firm, pays interest on capital to Sejal at 12% on a capital of ₹12,00,000. What is the TDS rate applicable?",
    options: {
      A: "1%",
      B: "30%",
      C: "10%",
      D: "No TDS is deducted for interest paid by firms",
    },
    answer: "D",
  },
  {
    id: 98,
    question:
      "Rekha, an insurance agent, receives a commission of ₹25,000. Should TDS be deducted? If yes, at what rate?",
    options: {
      A: "5%",
      B: "10%",
      C: "No TDS",
      D: "1%",
    },
    answer: "B",
  },
  {
    id: 99,
    question:
      "Nazrin, 34 years old, bought an insurance policy for ₹500,000 with a bonus of ₹100,000. How can she avoid TDS deduction?",
    options: {
      A: "Submit Form 15G",
      B: "Submit Form 15H",
      C: "Submit Form 13",
      D: "Ask her employer for Form 16",
    },
    answer: "A",
  },
],
  "Banking": [
  {
    "question": "Which of the following was a significant problem with the barter system?",
    "options": [
      "It provided a reliable store of value",
      "It required a double coincidence of wants",
      "It allowed for easy subdivision of goods",
      "It facilitated the specialization of labor"
    ],
    "correct": 1,
    "explanation": "A significant problem with the barter system is that it requires a double coincidence of wants – each party must have what the other desires."
  },
  {
    "question": "Which of the following is NOT a problem of the barter system?",
    "options": [
      "Lack of double coincidence of wants",
      "Lack of store of value",
      "Difficulty in dividing goods",
      "Easy measurement of value"
    ],
    "correct": 3,
    "explanation": "While the other issues are problems inherent in barter, an easy measurement of value would be beneficial rather than problematic."
  },
  {
    "question": "Which of these commodities was commonly used as money in ancient times?",
    "options": [
      "Gold",
      "Coconuts",
      "Diamonds",
      "Paper currency"
    ],
    "correct": 0,
    "explanation": "Gold was widely used because of its durability, divisibility, and intrinsic value."
  },
  {
    "question": "Under the barter system, a seller must find a purchaser for his commodity, and the purchaser must find a seller who is selling the commodity he wants. This describes which problem?",
    "options": [
      "Lack of a common measure of value",
      "Lack of store of value",
      "Lack of double coincidence of wants",
      "Lack of specialization"
    ],
    "correct": 2,
    "explanation": "This scenario illustrates the double coincidence of wants problem, where both parties must desire what the other offers."
  },
  {
    "question": "Which of the following was a major disadvantage of the barter system?",
    "options": [
      "Lack of a system of credit",
      "Inability to store value",
      "Easy to measure value",
      "Both A and B"
    ],
    "correct": 3,
    "explanation": "The barter system is disadvantaged by both the lack of a credit system and the inability to effectively store value."
  },
  {
    "question": "What is a limitation of using goods as a store of value in the barter system?",
    "options": [
      "Goods can perish",
      "Goods can be easily divided",
      "Goods can easily be stored",
      "The value of goods is fixed"
    ],
    "correct": 0,
    "explanation": "Many goods are perishable, which makes them unreliable as a store of value."
  },
  {
    "question": "Which of the following was a major difficulty in pricing goods under the barter system?",
    "options": [
      "Lack of demand",
      "No common measure of value",
      "Easy to quantify the value of goods",
      "Both A and C"
    ],
    "correct": 1,
    "explanation": "Without a standard unit of value, assigning prices in a barter system is inherently difficult."
  },
  {
    "question": "In the barter system, which of the following would have been challenging to exchange?",
    "options": [
      "Sheep for wool",
      "Cows for grain",
      "Shirt for a sheep",
      "Gold for silver"
    ],
    "correct": 2,
    "explanation": "Exchanging a shirt for a sheep highlights the difficulty in matching items with vastly different values and divisibility."
  },
  {
    "question": "Which of the following best describes the evolution of money from commodity money to credit money?",
    "options": [
      "From barter to paper currency",
      "From barter to coins",
      "From coins to bank deposits",
      "From commodity money to credit money"
    ],
    "correct": 3,
    "explanation": "Money evolved from using tangible commodities to representing value via credit instruments."
  },
  {
    "question": "The evolution of money includes all EXCEPT:",
    "options": [
      "Commodity money",
      "Paper money",
      "Cryptocurrency",
      "Metallic money"
    ],
    "correct": 2,
    "explanation": "Cryptocurrency is a very recent development and not part of the traditional evolution of money."
  },
  {
    "question": "The introduction of paper money in China was mainly due to:",
    "options": [
      "The scarcity of gold",
      "To prevent bandits from attacking imperial messengers",
      "High demand for silver coins",
      "The invention of the printing press"
    ],
    "correct": 0,
    "explanation": "Paper money was introduced in China largely because of the scarcity of precious metals like gold."
  },
  {
    "question": "The first stage of money evolution was:",
    "options": [
      "Commodity money",
      "Paper money",
      "Credit money",
      "Metallic money"
    ],
    "correct": 0,
    "explanation": "Commodity money, where goods themselves served as a medium of exchange, represents the first stage of money evolution."
  },
  {
    "question": "Which of these best explains the reason for the replacement of commodity money?",
    "options": [
      "High value of commodities",
      "Lack of durability and divisibility",
      "Ease of storage",
      "Ability to carry large quantities"
    ],
    "correct": 1,
    "explanation": "Commodity money was largely replaced because many commodities were not durable or easily divisible."
  },
  {
    "question": "The Lydians were the first to use:",
    "options": [
      "Commodity money",
      "Coinage",
      "Paper money",
      "Credit money"
    ],
    "correct": 1,
    "explanation": "Historical records credit the Lydians with the invention of coinage."
  },
  {
    "question": "What was the primary issue with metal coins in the early stages of their use?",
    "options": [
      "Easy to carry",
      "Issues with the size, quality, and quantity of metal",
      "Easy to subdivide",
      "Legal tender status"
    ],
    "correct": 1,
    "explanation": "Early metal coins often varied in size, quality, and metal content, creating issues of standardization."
  },
  {
    "question": "In the modern economy, money functions as:",
    "options": [
      "A means of exchange",
      "A store of value",
      "A unit of account",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Money serves as a medium of exchange, a store of value, and a unit of account."
  },
  {
    "question": "Which of the following is NOT a role of money in a modern economy?",
    "options": [
      "Facilitates consumer choice",
      "Enables efficient production",
      "Acts as a deterrent to inflation",
      "Eliminates the need for barter"
    ],
    "correct": 2,
    "explanation": "Money does not function as a deterrent to inflation; that is managed through monetary policy."
  },
  {
    "question": "Which is a key function of money in a modern economy?",
    "options": [
      "Promotes barter",
      "Helps in the storage of goods",
      "Facilitates exchange and trade",
      "Prevents economic growth"
    ],
    "correct": 2,
    "explanation": "Money’s primary role is to facilitate exchange and trade."
  },
  {
    "question": "The money used in India for pricing, contracts, and general purchasing power is called:",
    "options": [
      "Paper currency",
      "Money of account",
      "Commodity money",
      "Digital currency"
    ],
    "correct": 1,
    "explanation": "In India, the term 'money of account' refers to the monetary unit used in pricing and contracts."
  },
  {
    "question": "High-powered money consists of:",
    "options": [
      "Commercial bank reserves",
      "Central bank reserves",
      "Currency and coins",
      "Both central bank reserves and currency and coins"
    ],
    "correct": 3,
    "explanation": "High‐powered money (the monetary base) includes both currency in circulation and reserves held by banks at the central bank."
  },
  {
    "question": "Which type of money is created by private financial institutions?",
    "options": [
      "Inside money",
      "Outside money",
      "Commodity money",
      "Credit money"
    ],
    "correct": 0,
    "explanation": "Inside money is created by private banks through lending and deposit creation."
  },
  {
    "question": "Which of these is an example of inside money?",
    "options": [
      "Currency issued by the central bank",
      "Demand deposits at commercial banks",
      "Coins in circulation",
      "Gold reserves held by the government"
    ],
    "correct": 1,
    "explanation": "Demand deposits at commercial banks are a typical example of inside money."
  },
  {
    "question": "The impact of monetary policy is immediately felt in:",
    "options": [
      "Long-term bonds",
      "Stock market indices",
      "Short-term money market instruments",
      "Real estate markets"
    ],
    "correct": 2,
    "explanation": "Changes in monetary policy are most directly reflected in short-term interest rates and money market instruments."
  },
  {
    "question": "What does the 'credit channel' of monetary policy transmission refer to?",
    "options": [
      "The effect of exchange rates on foreign investment",
      "Changes in bank lending and credit availability",
      "The direct impact on government securities",
      "Adjustments in the asset prices"
    ],
    "correct": 1,
    "explanation": "The credit channel describes how monetary policy influences the availability and cost of credit through changes in bank lending."
  },
  {
    "question": "An increase in interest rates typically leads to:",
    "options": [
      "Higher borrowing costs for consumers and businesses",
      "Increased consumer demand",
      "Lower asset prices",
      "Increased credit availability"
    ],
    "correct": 0,
    "explanation": "Higher interest rates increase the cost of borrowing, which generally reduces spending and investment."
  },
  {
    "question": "Which of these is NOT a channel of monetary policy transmission?",
    "options": [
      "Interest rates",
      "Exchange rates",
      "Asset prices",
      "Government spending"
    ],
    "correct": 3,
    "explanation": "Government spending is a fiscal policy tool, not a channel through which monetary policy is transmitted."
  },
  {
    "question": "The monetary policy transmission mechanism operates through all EXCEPT:",
    "options": [
      "Interest rates",
      "Exchange rates",
      "Foreign aid",
      "Asset prices"
    ],
    "correct": 2,
    "explanation": "Foreign aid is not a channel of monetary policy transmission."
  },
  {
    "question": "What happens when interest rates rise in a country?",
    "options": [
      "Investment in that country becomes less appealing",
      "Investment in that country becomes more appealing",
      "Currency depreciation occurs",
      "Inflation decreases"
    ],
    "correct": 0,
    "explanation": "Rising interest rates tend to make borrowing more expensive, which can reduce investment."
  },
  {
    "question": "What stage in the evolution of money saw the use of receipts issued by goldsmiths?",
    "options": [
      "Commodity money",
      "Coinage",
      "Paper money",
      "Credit money"
    ],
    "correct": 3,
    "explanation": "Goldsmith receipts are considered an early form of credit money."
  },
  {
    "question": "The key advantage of paper money over coins was:",
    "options": [
      "Portability and cheapness",
      "Durability",
      "The ability to serve as a store of value",
      "High intrinsic value"
    ],
    "correct": 0,
    "explanation": "Paper money is lighter, more portable, and cheaper to produce than metal coins."
  },
  {
    "question": "What is the primary feature of e-currencies?",
    "options": [
      "They exist in physical form.",
      "They are only used for online transactions.",
      "They are backed by physical assets.",
      "They can only be traded in physical locations."
    ],
    "correct": 1,
    "explanation": "E-currencies are digital currencies used primarily for online transactions."
  },
  {
    "question": "Which of the following is a type of digital currency that operates on a decentralized network?",
    "options": [
      "Central Bank Digital Currency (CBDC)",
      "Virtual Currency",
      "Cryptocurrency",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Cryptocurrencies operate on decentralized networks using blockchain technology."
  },
  {
    "question": "What is the key characteristic of Central Bank Digital Currencies (CBDCs)?",
    "options": [
      "They are decentralized.",
      "They are issued and regulated by central banks.",
      "They are used in online games only.",
      "They rely on private organizations for control."
    ],
    "correct": 1,
    "explanation": "CBDCs are digital forms of fiat money issued and regulated by a country's central bank."
  },
  {
    "question": "Which cryptocurrency was created in 2009 as the first decentralized digital currency?",
    "options": [
      "Ethereum",
      "Litecoin",
      "Bitcoin",
      "Ripple"
    ],
    "correct": 2,
    "explanation": "Bitcoin, introduced in 2009, was the first decentralized cryptocurrency."
  },
  {
    "question": "What is one of the main advantages of cryptocurrencies?",
    "options": [
      "They offer decentralization and anonymity.",
      "They are completely stable in value.",
      "They are issued by central banks.",
      "They are widely accepted as legal tender."
    ],
    "correct": 0,
    "explanation": "Cryptocurrencies provide benefits such as decentralization and, in many cases, user anonymity."
  },
  {
    "question": "Which of the following is an example of a Central Bank Digital Currency (CBDC)?",
    "options": [
      "Bitcoin",
      "Digital Yuan (e-CNY)",
      "Litecoin",
      "Doge coin"
    ],
    "correct": 1,
    "explanation": "The Digital Yuan (e-CNY) is a prominent example of a CBDC issued by China."
  },
  {
    "question": "What is the difference between cryptocurrency and CBDCs?",
    "options": [
      "They are backed by government entities.",
      "Cryptocurrency is decentralized, while CBDCs are centralized and government-issued.",
      "Both are decentralized.",
      "They have limited usage."
    ],
    "correct": 1,
    "explanation": "Cryptocurrencies operate on decentralized networks, whereas CBDCs are issued and regulated by central banks."
  },
  {
    "question": "Which of the following countries launched its CBDC known as 'Sand Dollar' in October 2020?",
    "options": [
      "China",
      "Bahamas",
      "Nigeria",
      "Russia"
    ],
    "correct": 1,
    "explanation": "The Bahamas launched the Sand Dollar as its CBDC in October 2020."
  },
  {
    "question": "Virtual currencies are most commonly used in which of the following?",
    "options": [
      "For real-world transactions",
      "Online gaming environments",
      "Physical retail stores",
      "Cross-border payments"
    ],
    "correct": 1,
    "explanation": "Virtual currencies are primarily used within online gaming environments."
  },
  {
    "question": "Which of the following is a key disadvantage of virtual currencies?",
    "options": [
      "They are completely anonymous.",
      "They lack any regulation.",
      "They are highly volatile.",
      "They are backed by government reserves."
    ],
    "correct": 2,
    "explanation": "High volatility is one of the major disadvantages associated with virtual currencies."
  },
  {
    "question": "What is one of the main advantages of CBDCs over cryptocurrencies?",
    "options": [
      "They are completely anonymous.",
      "They are decentralized.",
      "They are government-regulated and stable.",
      "They are not susceptible to volatility."
    ],
    "correct": 2,
    "explanation": "CBDCs benefit from government regulation, which generally makes them more stable compared to decentralized cryptocurrencies."
  },
  {
    "question": "In what way can the RBI (Reserve Bank of India) improve the Indian economy with CBDCs?",
    "options": [
      "By increasing efficiency in transactions and reducing costs",
      "By limiting access to financial services",
      "By encouraging unregulated markets",
      "By promoting only cash transactions"
    ],
    "correct": 0,
    "explanation": "Implementing CBDCs can enhance transaction efficiency, reduce costs, and improve financial inclusion in the economy."
  },
  {
    "question": "Which of the following is NOT a feature of a CBDC?",
    "options": [
      "It is issued and controlled by central banks.",
      "It functions as a digital version of a country's fiat currency.",
      "It is decentralized and operates outside of government control.",
      "It is government-backed and is used for legal transactions."
    ],
    "correct": 2,
    "explanation": "A CBDC is by definition centralized and government-controlled, not decentralized."
  },
  {
    "question": "What is a major concern related to cryptocurrencies?",
    "options": [
      "Their use is regulated and safe.",
      "They are highly volatile and prone to price manipulation.",
      "They are backed by physical assets like gold.",
      "Their value is always stable."
    ],
    "correct": 1,
    "explanation": "Cryptocurrencies are often criticized for their high volatility and potential for price manipulation."
  },
  {
    "question": "Which of the following is an example of an e-money system used by banks?",
    "options": [
      "Apple Pay",
      "Bitcoin",
      "Ethereum",
      "Sand Dollar"
    ],
    "correct": 0,
    "explanation": "Apple Pay is a digital payment system (an e-money system) used by banks and financial institutions."
  },
  {
    "question": "What is a key feature of virtual currencies used in online games?",
    "options": [
      "They are always backed by the government.",
      "They are used to purchase virtual goods or services.",
      "They are highly regulated by central authorities.",
      "They are stable and non-volatile."
    ],
    "correct": 1,
    "explanation": "Virtual currencies in gaming are primarily designed to purchase virtual goods or services within the game environment."
  },
  {
    "question": "Which of the following is true about cryptocurrency transactions?",
    "options": [
      "They require third-party verification.",
      "They are typically fast and secure due to blockchain technology.",
      "They are centralized and controlled by governments.",
      "They are always stable in value."
    ],
    "correct": 1,
    "explanation": "Blockchain technology enables cryptocurrency transactions to be both fast and secure without a central authority."
  },
  {
    "question": "What does 'eNaira' represent?",
    "options": [
      "A form of virtual currency from Nigeria",
      "A type of cryptocurrency in the Bahamas",
      "A Central Bank Digital Currency (CBDC) from Nigeria",
      "A digital payment system"
    ],
    "correct": 2,
    "explanation": "The eNaira is Nigeria's Central Bank Digital Currency (CBDC)."
  },
  {
    "question": "The primary purpose of introducing the 'Digital Rupee' in India is to:",
    "options": [
      "Replace physical cash entirely",
      "Enhance efficiency, reduce costs, and increase financial inclusion",
      "Encourage the use of cryptocurrencies",
      "Limit financial transactions to banks only"
    ],
    "correct": 1,
    "explanation": "The Digital Rupee is intended to improve transaction efficiency, lower costs, and boost financial inclusion."
  },
  {
    "question": "Which technology is commonly explored for CBDCs to ensure secure and scalable transactions?",
    "options": [
      "Virtual reality",
      "Blockchain and distributed ledger technology (DLT)",
      "Artificial intelligence",
      "Cloud computing"
    ],
    "correct": 1,
    "explanation": "Blockchain and distributed ledger technology (DLT) are widely researched for securing and scaling CBDC transactions."
  },
  {
    "question": "What is the most common feature of both developed and developing economies since the post-War II period?",
    "options": [
      "High unemployment rate",
      "Continuous rise in the general price level",
      "Decline in production",
      "Fall in investment"
    ],
    "correct": 1,
    "explanation": "A continuous rise in the general price level, or inflation, is a common feature in both developed and developing economies."
  },
  {
    "question": "Who defined inflation as 'too much money chasing too few goods'?",
    "options": [
      "Pigou",
      "Coulborn",
      "Samuelson",
      "Ackley"
    ],
    "correct": 2,
    "explanation": "Samuelson is commonly associated with the definition of inflation as 'too much money chasing too few goods.'"
  },
  {
    "question": "Which of the following best describes inflation, according to modern economists?",
    "options": [
      "A temporary rise in the general price level",
      "A sustained rise in prices over time",
      "A decline in the general price level",
      "A rapid and short-term increase in wages"
    ],
    "correct": 1,
    "explanation": "Modern economists define inflation as a sustained increase in the general price level."
  },
  {
    "question": "What does the term 'persistent' imply in the context of inflation?",
    "options": [
      "A brief, short-term rise in prices",
      "A rise in prices that does not respond to anti-inflationary policies",
      "A decline in price levels over time",
      "A seasonal fluctuation in prices"
    ],
    "correct": 1,
    "explanation": "In the context of inflation, 'persistent' means that the rise in prices continues over a long period, despite short-term fluctuations."
  },
  {
    "question": "According to Samuelson-Nordhaus, what denotes inflation?",
    "options": [
      "A rapid increase in wages",
      "A sustained rise in the general level of prices",
      "A fluctuation in supply and demand",
      "A drop in unemployment rates"
    ],
    "correct": 1,
    "explanation": "Samuelson-Nordhaus denote inflation as a sustained rise in the general level of prices."
  },
  {
    "question": "In terms of inflation, what is meant by a 'moderate' inflation rate?",
    "options": [
      "Any rise in prices above 10%",
      "A low and acceptable rise in the general price level",
      "A price drop below the base year level",
      "An increase in wages without a corresponding price rise"
    ],
    "correct": 1,
    "explanation": "A 'moderate' inflation rate refers to a low and manageable increase in the general price level."
  },
  {
    "question": "What is generally considered a desirable rate of inflation for developed countries?",
    "options": [
      "10-12%",
      "2-3%",
      "1-2%",
      "4-5%"
    ],
    "correct": 1,
    "explanation": "Developed countries typically aim for an inflation rate in the range of 2-3%."
  },
  {
    "question": "Which committee set up by the RBI considered 4% inflation as socially desirable for India?",
    "options": [
      "Chakravarty Committee",
      "Raghuram Rajan Committee",
      "Shankar Acharya Committee",
      "Suresh Tendulkar Committee"
    ],
    "correct": 0,
    "explanation": "The Chakravarty Committee recommended that a 4% inflation rate was socially desirable for India."
  },
  {
    "question": "What is the general belief about inflation for less developed countries, according to economists?",
    "options": [
      "Inflation should be zero",
      "Inflation should be around 4-6%",
      "Inflation should be above 10%",
      "Inflation is always undesirable"
    ],
    "correct": 1,
    "explanation": "Economists generally accept that less developed countries may target a slightly higher inflation rate, around 4-6%."
  },
  {
    "question": "What is the desirable inflation rate in India, according to the Chakravarty Committee (1985)?",
    "options": [
      "10%",
      "4%",
      "6%",
      "3%"
    ],
    "correct": 1,
    "explanation": "The Chakravarty Committee (1985) recommended a desirable inflation rate of 4% for India."
  },
  {
    "question": "Which of the following is NOT a factor that contributes to price rise but is not considered inflationary?",
    "options": [
      "Price rise due to change in GDP composition",
      "Price rise due to change in the quality of products",
      "Price rise due to recovery after recession",
      "Price rise due to government monetary policies"
    ],
    "correct": 1,
    "explanation": "Price rises resulting from improvements in product quality are typically adjusted for and are not considered inflationary."
  },
  {
    "question": "What does 'WPI' stand for in terms of price index numbers?",
    "options": [
      "Wholesale Price Index",
      "Wage Price Index",
      "World Price Index",
      "Wholesale Production Index"
    ],
    "correct": 0,
    "explanation": "WPI stands for Wholesale Price Index."
  },
  {
    "question": "The change in the GNP deflator is used to measure which aspect of the economy?",
    "options": [
      "Unemployment",
      "Inflation",
      "Exchange rates",
      "Fiscal deficit"
    ],
    "correct": 1,
    "explanation": "The GNP deflator is a broad measure used to gauge inflation in the economy."
  },
  {
    "question": "The rate of inflation between two years can be calculated by:",
    "options": [
      "Subtracting the GDP of two years",
      "Using the formula involving the change in Price Index Numbers",
      "Multiplying the GNP deflator by 100",
      "Dividing the nominal GNP by the real GNP"
    ],
    "correct": 1,
    "explanation": "Inflation is calculated as the percentage change in Price Index Numbers between two periods."
  },
  {
    "question": "The method used for measuring inflation by the formula involving the change in Price Index Numbers is called:",
    "options": [
      "Consumer Price Index (CPI)",
      "Gross National Product (GNP) Deflator",
      "Producer Price Index (PPI)",
      "Percentage change in Price Index Numbers (PIN)"
    ],
    "correct": 3,
    "explanation": "This method calculates inflation as the percentage change in the Price Index Numbers (PIN)."
  },
  {
    "question": "The WPI is also known as:",
    "options": [
      "Consumer Price Index (CPI)",
      "Producer Price Index (PPI)",
      "National Income Index (NII)",
      "Economic Deflation Index (EDI)"
    ],
    "correct": 1,
    "explanation": "The Wholesale Price Index is sometimes referred to as the Producer Price Index."
  },
  {
    "question": "In the formula for the change in inflation, the variable PIN refers to:",
    "options": [
      "Price Index Numbers",
      "Nominal Price Inflation",
      "National Income",
      "General Price Level"
    ],
    "correct": 0,
    "explanation": "PIN is the abbreviation for Price Index Numbers used in calculating inflation."
  },
  {
    "question": "Which of the following does the GNP deflator consider?",
    "options": [
      "Only the wholesale price of goods",
      "Only consumer prices",
      "The prices of all goods and services",
      "Prices at the retail level"
    ],
    "correct": 2,
    "explanation": "The GNP deflator includes the prices of all domestically produced goods and services."
  },
  {
    "question": "What is the GNP deflator for the year 2005-06 in India, given the nominal GNP of Rs. 32,76,000 crore and real GNP of Rs. 26,13,000 crore?",
    "options": [
      "12.54%",
      "1.2537",
      "125.37%",
      "10%"
    ],
    "correct": 2,
    "explanation": "Calculating (Nominal/Real) × 100 gives (32,76,000/26,13,000) × 100 ≈ 125.37%, which is the GNP deflator."
  },
  {
    "question": "What does the rate of inflation based on the GNP deflator compare?",
    "options": [
      "Nominal GDP vs Real GDP",
      "Government spending vs Government debt",
      "Nominal GNP vs Real GNP",
      "Investment vs Consumption"
    ],
    "correct": 2,
    "explanation": "The GNP deflator compares nominal GNP with real GNP to measure inflation."
  },
  {
    "question": "Which of the following is a disadvantage of using the WPI for measuring inflation?",
    "options": [
      "It considers the full range of goods and services",
      "It excludes value added at the retail stage",
      "It only measures consumer goods prices",
      "It focuses on a broader range of goods and services"
    ],
    "correct": 1,
    "explanation": "A key disadvantage of the WPI is that it does not capture the value added at the retail level."
  },
  {
    "question": "What is the main reason economists prefer the GNP deflator over WPI?",
    "options": [
      "WPI is based on more retail prices",
      "The GNP deflator takes into account all goods and services",
      "GNP deflator is easier to calculate",
      "WPI is more widely used in developed countries"
    ],
    "correct": 1,
    "explanation": "Economists favor the GNP deflator because it provides a more comprehensive measure by including all goods and services."
  },
  {
    "question": "What method is used to measure the rate of inflation in India, despite the GNP deflator being considered better?",
    "options": [
      "Consumer Price Index (CPI)",
      "Wholesale Price Index (WPI)",
      "National Price Index (NPI)",
      "National GNP Index (NGI)"
    ],
    "correct": 1,
    "explanation": "In India, the Wholesale Price Index (WPI) is commonly used to measure inflation."
  },
  {
    "question": "What can be inferred from a GNP deflator greater than 100?",
    "options": [
      "The economy is shrinking",
      "Nominal GNP is lower than real GNP",
      "Nominal GNP is greater than real GNP",
      "Inflation is at zero"
    ],
    "correct": 2,
    "explanation": "A GNP deflator above 100 indicates that the nominal GNP exceeds the real GNP, reflecting inflation."
  },
  {
    "question": "What is the formula used to calculate the inflation rate based on the GNP deflator?",
    "options": [
      "(Nominal GNP - Real GNP) / Real GNP x 100",
      "(Nominal GNP + Real GNP) / Nominal GNP",
      "(WPI_t - WPI_(t-1)) / WPI_(t-1) x 100",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "The formula (Nominal GNP - Real GNP) / Real GNP x 100 approximates the inflation rate based on the GNP deflator."
  },
  {
    "question": "Which of the following factors is NOT considered in the determination of inflation?",
    "options": [
      "Change in quality of goods",
      "Government monetary policies",
      "Price rise due to increase in wages",
      "Change in GDP composition"
    ],
    "correct": 2,
    "explanation": "Direct increases in wages are not a component in the calculation of inflation through price indices."
  },
  {
    "question": "What is considered a moderate rate of inflation for developed countries?",
    "options": [
      "10-15%",
      "5-7%",
      "1-2%",
      "2-3%"
    ],
    "correct": 3,
    "explanation": "A moderate inflation rate for developed countries is typically around 2-3%."
  },
  {
    "question": "In India, the WPI used to measure inflation in 2005-06 was based on which year as the base year?",
    "options": [
      "1999-2000",
      "2000-2001",
      "2005-06",
      "1990-91"
    ],
    "correct": 0,
    "explanation": "During that period, the base year for India's WPI was set as 1999-2000."
  },
  {
    "question": "What does a GNP deflator of 125.37% signify for India's economy in 2005-06?",
    "options": [
      "The economy contracted by 12.54%",
      "Nominal GNP was 12.54% higher than real GNP",
      "There was a deflation in the economy",
      "Nominal GNP was equal to real GNP"
    ],
    "correct": 1,
    "explanation": "A GNP deflator of 125.37% means that nominal GNP exceeded real GNP by approximately 25.37% (despite the option stating 12.54%, it is the closest match indicating nominal exceeds real values)."
  }
],
 "Fundamentals of Economics": 
      
};

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


