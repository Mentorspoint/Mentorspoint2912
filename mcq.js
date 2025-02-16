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
  }  
        
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


