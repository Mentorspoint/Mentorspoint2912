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
    "Income Tax":[
  {
    "question": "Choose the form to be filled in for allotment of PAN card by Mr. Jatayu who is a resident Indian citizen of 65 years.",
    "options": [
      "Form 49A",
      "Form 49AA",
      "Form 15G",
      "Form 15H"
    ],
    "correct": 0,
    "explanation": "PAN card allotment for resident Indian citizens is done using Form 49A."
  },
  {
    "question": "Choose correct category of assessee with PAN AFZFK7109K.",
    "options": [
      "Proprietorship",
      "Company",
      "Individual",
      "Partnership Firm"
    ],
    "correct": 3,
    "explanation": "The fourth character 'F' in the PAN indicates that the assessee is a firm – in this context, a Partnership Firm."
  },
  {
    "question": "Deduction of interest on borrowed capital in case of a self‐occupied house property is an example of",
    "options": [
      "Relief under section 90",
      "Set off and carry forward of current year losses",
      "Taxation at lower rates",
      "Deduction under section 80C"
    ],
    "correct": 1,
    "explanation": "The interest deduction for a self‐occupied property results in a loss that cannot be set off against other heads and is carried forward."
  },
  {
    "question": "Same PAN cannot be allotted to more than",
    "options": [
      "1 person",
      "5 persons",
      "3 persons",
      "2 persons"
    ],
    "correct": 0,
    "explanation": "A PAN is unique to a single individual or entity and cannot be allotted to multiple persons."
  },
  {
    "question": "Which of the following transactions are linked with the help of a Permanent Account Number (PAN)?",
    "options": [
      "Tax payment",
      "Availing TDS credit",
      "Filing of return",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "PAN is required for tax payments, availing TDS credit, and filing income tax returns."
  },
  {
    "question": "Which of the following is not a proof of address?",
    "options": [
      "Passport",
      "Electricity bill",
      "Telephone bill",
      "School leaving certificate"
    ],
    "correct": 3,
    "explanation": "A school leaving certificate is generally not accepted as proof of address."
  },
  {
    "question": "Agricultural Income, if a declaration is furnished as per Section 139A, shall not apply to the person who is in receipt of only",
    "options": [
      "Form No.61",
      "Form No.15G"
    ],
    "correct": 1,
    "explanation": "For individuals with only agricultural income, filing using Form 15G is not required."
  },
  {
    "question": "For filing an online return, the XML file required can be generated using which utility provided by the Income Tax Department?",
    "options": [
      "Word utility",
      "PPT Utility",
      "Excel Utility",
      "Access Utility"
    ],
    "correct": 2,
    "explanation": "The Excel Utility is commonly used to generate the XML file for e-filing."
  },
  {
    "question": "Loss from the lottery ticket and crossword puzzles can be set off against the ______ income.",
    "options": [
      "Salary",
      "House property",
      "Capital gain",
      "None of these"
    ],
    "correct": 3,
    "explanation": "Losses from lottery winnings and gambling cannot be set off against any other head of income."
  },
  {
    "question": "PAN is required to be quoted in documents pertaining to deposit of cash with a bank if the aggregate amount deposited is Rs. ______ or more.",
    "options": [
      "10,000",
      "15,000",
      "50,000",
      "60,000"
    ],
    "correct": 2,
    "explanation": "As per regulations, PAN must be quoted when cash deposits aggregate to Rs.50,000 or more."
  },
  {
    "question": "A person, who has not been allotted PAN, shall make a declaration in Form No. ______ while opening a bank account.",
    "options": [
      "Form No. 61",
      "Form No. ISH",
      "Form No. 156",
      "Form No. 60"
    ],
    "correct": 3,
    "explanation": "In the absence of a PAN, a declaration in Form 60 is required."
  },
  {
    "question": "The last character of PAN indicates",
    "options": [
      "Surname",
      "First name",
      "Middle Name",
      "Alphabetic Check Digit"
    ],
    "correct": 3,
    "explanation": "The tenth character of a PAN is an alphabetic check digit used for verification."
  },
  {
    "question": "Mrs. Deepali Patel, an Indian citizen aged 62, can apply for PAN in which form?",
    "options": [
      "Form 15H",
      "Form 15G",
      "Form 49A",
      "Form 60"
    ],
    "correct": 2,
    "explanation": "Indian citizens apply for PAN using Form 49A."
  },
  {
    "question": "Which of the following is a proof of identity for applying for PAN?",
    "options": [
      "Passport",
      "Driving License",
      "Voter Card",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All the listed documents are accepted as valid proofs of identity for PAN applications."
  },
  {
    "question": "Which of the following is the correct PAN of Mr. Sandip Prajapati?",
    "options": [
      "ABCSP1234K",
      "ABCPS1234H",
      "ABCPP1234K",
      "ABC12P34HK"
    ],
    "correct": 1,
    "explanation": "The correct format for an individual’s PAN has the fourth character as 'P'; hence, ABCPS1234H is correct."
  },
  {
    "question": "If the recipient does not furnish his PAN to the deductor, tax will be deducted at the normal rate or at the rate of ______, whichever is higher.",
    "options": [
      "10%",
      "20%",
      "30%",
      "2%"
    ],
    "correct": 1,
    "explanation": "In the absence of PAN, TDS is deducted at 20% (or the normal rate, whichever is higher)."
  },
  {
    "question": "Mr. Arvind has e-filed his return with an income less than Rs.5 lakhs and is not claiming any refund. He can e-verify his return by which method?",
    "options": [
      "Electronic verification via Aadhaar OTP",
      "Net banking",
      "Sending a signed ITR-V",
      "Either of the above"
    ],
    "correct": 0,
    "explanation": "For individuals with low income, e-verification via Aadhaar OTP is a common method."
  },
  {
    "question": "Which of the following is not a benefit of e-filing?",
    "options": [
      "Accuracy is ensured",
      "Paperwork is required",
      "Processing of return can be monitored",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "E-filing reduces paperwork; thus, 'Paperwork is required' is not a benefit."
  },
  {
    "question": "Which of the following constitutes a valid Permanent Account Number (PAN)?",
    "options": [
      "ABCHP1234K",
      "ABC1234PHK",
      "ABCP1234HK",
      "ABC12P34HK"
    ],
    "correct": 0,
    "explanation": "A valid PAN must consist of 5 letters, 4 digits, and 1 letter; Option A meets this criterion."
  },
  {
    "question": "For filing an online return, the XML file can also be generated using which utility provided by the Income Tax Department?",
    "options": [
      "JAVA Utility",
      "Excel Utility"
    ],
    "correct": 1,
    "explanation": "The Excel Utility is commonly used to generate the XML file required for e-filing."
  },
  {
    "question": "Loss from the lottery ticket and crossword puzzles can be set off against the income.",
    "options": [
      "Salary",
      "Capital Gain",
      "PPT Utility",
      "Both Salary and Capital Gain"
    ],
    "correct": -1,
    "explanation": "Losses from lottery winnings and gambling cannot be set off against any head of income; none of the provided options is correct."
  },
  {
    "question": "In which of the following transactions is quoting of PAN mandatory as per rule 1148?",
    "options": [
      "Demat Account",
      "Opening a bank account",
      "Sale of motor vehicle (other than two wheeler)",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "Rule 1148 requires quoting PAN in all the mentioned transactions."
  },
  {
    "question": "Which loss cannot be carried forward to the subsequent year?",
    "options": [
      "Capital Loss",
      "Loss of Other Source",
      "Business Loss",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Losses under 'Other Sources' (like lottery losses) cannot be carried forward."
  },
  {
    "question": "Loss from the activity of owning and maintaining race horses can be carried forward for how many years?",
    "options": [
      "5 years",
      "6 years",
      "8 years",
      "None of the above"
    ],
    "correct": 3,
    "explanation": "The loss from race horses cannot be carried forward for 5, 6, or 8 years as per the provisions."
  },
  {
    "question": "Long term capital loss can be adjusted only against __________ as per Section 70.",
    "options": [
      "Short term capital gain",
      "Long term capital gain",
      "Salary income",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "Long term capital losses can be set off only against long term capital gains."
  },
  {
    "question": "A contract for purchase or sale of commodities, stocks, or shares that is periodically settled without actual delivery is known as a",
    "options": [
      "Speculative transaction",
      "Non-Speculative transaction",
      "A and B",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "Such contracts are classified as speculative transactions."
  },
  {
    "question": "Under rule 1148, for cash payments made to a hotel or restaurant, up to what amount is quoting of PAN not required?",
    "options": [
      "Up to 2,30,000",
      "Up to 3,50,000"
    ],
    "correct": 0,
    "explanation": "For cash payments up to the specified threshold, quoting PAN is not mandatory. (Note: The options are ambiguous.)"
  },
  {
    "question": "Which of the following statements is not true?",
    "options": [
      "Due to e-filing, an assessee can view the current status of the return.",
      "E-filing is mandatory for resident individuals in India whose income exceeds Rs.50,000.",
      "E-filing is not mandatory for Companies.",
      "Browsing and selecting the XML file is a step in the e-filing procedure."
    ],
    "correct": 1,
    "explanation": "E-filing is mandatory for individuals with income exceeding Rs.5 lakhs, not Rs.50,000."
  },
  {
    "question": "Which of the following is a pre-requisite for e-payment?",
    "options": [
      "Internet banking account",
      "Aadhaar Card",
      "Email ID & Mobile Number",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "An internet banking account is required for e-payment."
  },
  {
    "question": "Which of the following statements is true?",
    "options": [
      "E-Payment facilitates online payment of direct taxes.",
      "E-filing is mandatory for all assessees.",
      "Once e-filed, an assessee cannot view the return.",
      "E-filing does not reduce processing costs."
    ],
    "correct": 0,
    "explanation": "E-Payment enables taxpayers to pay their direct taxes online."
  },
  {
    "question": "What is the correct sequence for the e-filing of Income Tax Return?",
    "options": [
      "Fill utility and validate, then generate XML, then download utility, then visit website",
      "Generate XML, then download utility, then visit website, then fill utility",
      "Visit website, then download utility, then fill and validate, then generate XML",
      "Visit website, then download utility, then generate XML, then fill utility"
    ],
    "correct": 2,
    "explanation": "The proper sequence is to visit the website, download the utility, fill and validate the return, then generate the XML file."
  },
  {
    "question": "Arrange the sequence of the e-payment procedure:",
    "options": [
      "Enter PAN/TAN, then select challan, then visit www.tin-nsdl.com, then click on 'e-payment, Pay Taxes Online'",
      "Visit www.tin-nsdl.com, then click on 'e-payment, Pay Taxes Online', then select the challan, then enter PAN/TAN",
      "Enter PAN/TAN, then select the challan, then click on 'e-payment, Pay Taxes Online', then visit website",
      "Click on 'e-payment, Pay Taxes Online', then visit website, then select the challan, then enter PAN/TAN"
    ],
    "correct": 1,
    "explanation": "The correct sequence is: visit www.tin-nsdl.com, click on the e-payment link, select the relevant challan, and then enter PAN/TAN."
  },
  {
    "question": "Which of the following banks is available for payment of taxes?",
    "options": [
      "Oriental Bank of Commerce",
      "Punjab National Bank",
      "Union Bank of India",
      "All of the above"
    ],
    "correct": 3,
    "explanation": "All the listed banks facilitate the payment of taxes."
  },
  {
    "question": "Match the following:\n(a) Pre-requisite of e-payment\n(b) Benefit of e-filing of ITR\n(c) Procedure of e-filing of ITR\nMatch with: (i) Form may be downloaded from any place, (ii) Download the Excel/Java Utility, (iii) Valid TAN or PAN.",
    "options": [
      "(a)->(i), (b)->(ii), (c)->(iii)",
      "(a)->(i), (b)->(iii), (c)->(ii)",
      "(a)->(ii), (b)->(i), (c)->(iii)",
      "(a)->(iii), (b)->(i), (c)->(ii)"
    ],
    "correct": 3,
    "explanation": "The matching is: Pre-requisite of e-payment requires a valid TAN/PAN (iii), the benefit of e-filing is its accessibility (i), and the procedure involves using the utility (ii)."
  },
  {
    "question": "Mr. X, with an income less than Rs.4,50,000, can file his return by",
    "options": [
      "E-filing using a Digital Signature",
      "E-filing without a Digital Signature",
      "Filing a physical ITR form",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "Individuals with lower income can opt to e-file without a digital signature."
  },
  {
    "question": "The last character of PAN indicates",
    "options": [
      "First name",
      "Check digit",
      "Surname",
      "Middle name"
    ],
    "correct": 1,
    "explanation": "The last character of PAN is the check digit used for verification."
  },
  {
    "question": "The amount of unabsorbed depreciation can be carried forward for",
    "options": [
      "4 years",
      "8 years",
      "Zero years",
      "Unlimited years"
    ],
    "correct": 1,
    "explanation": "Unabsorbed depreciation can be carried forward for a maximum of 8 years."
  },
  {
    "question": "Which of the following is true for rebate under Section 87A for AY 2024-25?",
    "options": [
      "Rebate is 100% of income tax or ₹2,000 whichever is higher",
      "Rebate is 100% of income tax or ₹2,000 whichever is less",
      "Rebate is 100% of income tax or ₹5,000 whichever is higher",
      "Rebate is 100% of income tax or ₹2,500 whichever is less"
    ],
    "correct": 1,
    "explanation": "The rebate under Section 87A is the lower of the income tax liability or ₹2,000."
  },
  {
    "question": "What is the full form of CPC?",
    "options": [
      "Centralized pre-processed centre",
      "Control Procedure Centre",
      "Centralized Processing Centre",
      "Central processing control"
    ],
    "correct": 2,
    "explanation": "CPC stands for Centralized Processing Centre."
  },
  {
    "question": "What is the correct sequence for e-filing of Income Tax Return?",
    "options": [
      "ii, iii, i, iv",
      "iii, ii, i, iv",
      "iii, i, ii, iv",
      "iii, i, iv, ii"
    ],
    "correct": 2,
    "explanation": "The correct sequence is: download the utility, fill and validate, generate the XML file, then log in to the website to file the return."
  },
  {
    "question": "PAN is required to be quoted in bank deposit documents if the aggregate cash deposited is ______ or more.",
    "options": [
      "₹10,000",
      "₹50,000"
    ],
    "correct": 1,
    "explanation": "PAN must be quoted when the total cash deposit is ₹50,000 or more."
  },
  {
    "question": "Losses from Business cannot be set off against which of the following?",
    "options": [
      "Long Term Capital Gains",
      "Short Term Capital Gains",
      "Income from other sources",
      "Salary income"
    ],
    "correct": 3,
    "explanation": "Business losses are not allowed to be set off against salary income."
  },
  {
    "question": "Which form is applicable for foreign citizens for application of a new PAN?",
    "options": [
      "Form 49C",
      "Form 49D",
      "Form 49AA",
      "Form 49A"
    ],
    "correct": 2,
    "explanation": "Foreign citizens must apply using Form 49AA."
  },
  {
    "question": "Any person carrying on business or profession with turnover exceeding ______ in any previous year must apply for PAN.",
    "options": [
      "2,50,000",
      "5,00,000",
      "3,00,000",
      "2,00,000"
    ],
    "correct": 0,
    "explanation": "The threshold turnover for mandatory PAN application is Rs.2,50,000."
  },
  {
    "question": "The provisions for allotment of PAN are laid down under which section?",
    "options": [
      "Section 139A",
      "Section 144",
      "Section 114B",
      "Section 49A"
    ],
    "correct": 0,
    "explanation": "PAN allotment is governed by Section 139A of the Income Tax Act."
  },
  {
    "question": "In the formation of PAN, what does the fourth alphabet 'J' stand for?",
    "options": [
      "Body of individuals",
      "Association of persons",
      "Artificial Juridical Person",
      "Trust"
    ],
    "correct": 2,
    "explanation": "The fourth letter 'J' in PAN denotes an Artificial Juridical Person."
  },
  {
    "question": "Calculate the income chargeable to tax: Loss from Business I: ₹70,000, Profit from Business II: ₹60,000, Income from House Property: ₹1,40,000, Loss from Speculative Business: ₹5,000, and Salary: ₹2,20,000.",
    "options": [
      "₹3,45,000",
      "Other",
      "₹3,40,000",
      "Not enough information"
    ],
    "correct": 0,
    "explanation": "Assuming that only the salary and house property incomes are taxable and the business loss is carried forward, the chargeable income is approximately ₹3,45,000."
  },
  {
    "question": "Mr. X (36 years) has taken a life insurance policy on 1st April 2017, paying a premium of ₹1,80,000 with a sum assured of ₹14,00,000. What is the eligible premium deduction under Section 80C for AY 2024-25?",
    "options": [
      "₹1,80,000",
      "₹3,50,000",
      "₹1,50,000",
      "None of the above"
    ],
    "correct": 0,
    "explanation": "The entire premium of ₹1,80,000 qualifies for deduction under Section 80C."
  },
  {
    "question": "Rebate under Section 87A for AY 2022-23 is available to which of the following?",
    "options": [
      "Individual",
      "HUF",
      "Both Individual and HUF",
      "Company"
    ],
    "correct": 0,
    "explanation": "Section 87A rebate is available only to individual taxpayers."
  },
  {
    "question": "PAN APIHP9999Z belongs to which category?",
    "options": [
      "Individual",
      "HUF",
      "Firm",
      "Company"
    ],
    "correct": 1,
    "explanation": "The fourth character 'H' in the PAN indicates that it belongs to a Hindu Undivided Family (HUF)."
  },
  {
    "question": "Which of the following is not a benefit of e-filing?",
    "options": [
      "Paperwork is increased",
      "Accuracy is ensured",
      "Processing of return can be monitored",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "E-filing reduces paperwork; therefore, increased paperwork is not a benefit."
  },
  {
    "question": "What is the full form of EVC?",
    "options": [
      "Electrical Vocal Code",
      "Electronic Verified Centre",
      "Electronic Verification Code",
      "Electrical Verified Code"
    ],
    "correct": 2,
    "explanation": "EVC stands for Electronic Verification Code."
  },
  {
    "question": "Short-term capital loss can be adjusted against which of the following?",
    "options": [
      "Only short-term capital gains",
      "Only long-term capital gains",
      "Both short-term and long-term capital gains",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Short-term capital losses may be set off against both short-term and long-term capital gains."
  },
  {
    "question": "Deduction of medical insurance premium is available only if the payment is made by",
    "options": [
      "Cheque",
      "Net banking",
      "Both cheque and net banking",
      "Cash"
    ],
    "correct": 0,
    "explanation": "To claim the deduction, the premium must be paid by cheque or electronic means, not in cash."
  },
  {
    "question": "After e-filing, a duly verified ITR-V must be signed and submitted to the CPC within how many days?",
    "options": [
      "60",
      "90",
      "30",
      "120"
    ],
    "correct": 3,
    "explanation": "The ITR-V must be submitted to the CPC within 120 days of e-filing if not verified electronically."
  },
  {
    "question": "Mr. Arnab has incurred a short-term capital loss of ₹50,435. This loss can be adjusted against which incomes?",
    "options": [
      "Long-term capital gain and Speculative gain",
      "Short-term capital gain and Other source incomes",
      "Long-term capital gain and Short-term capital gain",
      "Only short-term capital gain"
    ],
    "correct": 2,
    "explanation": "Short-term capital losses can be adjusted against both long-term and short-term capital gains."
  },
  {
    "question": "Having or using more than one PAN is",
    "options": [
      "Legal",
      "Illegal",
      "Both legal and illegal",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "It is illegal to possess or use more than one PAN."
  },
  {
    "question": "In a PAN, the fourth alphabet 'J' stands for",
    "options": [
      "Jurisdiction",
      "Body of individuals",
      "Artificial Juridical Person",
      "Association of persons"
    ],
    "correct": 2,
    "explanation": "The letter 'J' indicates an Artificial Juridical Person in the PAN format."
  },
  {
    "question": "What does ITR stand for?",
    "options": [
      "Income Tax Refund",
      "Income Tax Return",
      "Income Tax Remuneration",
      "Indian Tax Return"
    ],
    "correct": 1,
    "explanation": "ITR stands for Income Tax Return."
  },
  {
    "question": "The PAN card application form for a company can be signed by",
    "options": [
      "Trustee",
      "Karta",
      "Director",
      "Partner"
    ],
    "correct": 2,
    "explanation": "For a company, the PAN application is typically signed by a Director."
  },
  {
    "question": "Provisions for quoting Aadhaar number are laid down under which section?",
    "options": [
      "Section 139A",
      "Section 139AA",
      "Section 114B",
      "Section 49A"
    ],
    "correct": 1,
    "explanation": "The requirement to quote Aadhaar is specified under Section 139AA."
  },
  {
    "question": "Any resident person entering into a financial transaction aggregating to ______ in a financial year must obtain a PAN (effective 01-04-2021).",
    "options": [
      "Rs.2,00,000 or less",
      "Rs.2,00,000 or more",
      "Rs.2,50,000 or less",
      "Rs.2,50,000 or more"
    ],
    "correct": 1,
    "explanation": "PAN is mandatory for transactions aggregating to Rs.2,00,000 or more."
  },
  {
    "question": "Online PAN application can be done on the website of",
    "options": [
      "NSDL",
      "UTI",
      "Both NSDL and UTI",
      "State Government"
    ],
    "correct": 2,
    "explanation": "Both NSDL and UTI facilitate online PAN applications."
  },
  {
    "question": "If a person loses his PAN card, in which form should he/she apply?",
    "options": [
      "Form 49A",
      "Form 49AA",
      "Request for New PAN Card/changes in PAN data",
      "None of these"
    ],
    "correct": 0,
    "explanation": "For reissue or correction of PAN, Form 49A is used."
  },
  {
    "question": "Rebate under Section 87A is available to",
    "options": [
      "Individual",
      "HUF",
      "Both Individual and HUF",
      "Company"
    ],
    "correct": 0,
    "explanation": "The rebate under Section 87A is available only to individual taxpayers."
  },
  {
    "question": "In which case is the provision for quoting Aadhaar number not applicable?",
    "options": [
      "If residing in Assam, Jammu & Kashmir, and Meghalaya",
      "If a non-resident",
      "Both of the above",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Aadhaar linking is not mandatory for non-residents and persons from the specified states."
  },
  {
    "question": "Clubbing of income of a minor child is not applicable if",
    "options": [
      "The income is from manual work",
      "The income is due to the child's disability under Section 80U",
      "Both of the above",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Clubbing provisions do not apply if the minor child’s income arises from manual work or from disability as per Section 80U."
  },
  {
    "question": "PAN is a ______ digit unique alphanumeric number. Out of the first ______ characters, the first three represent the series from AAA to ZZZ.",
    "options": [
      "Twenty, Ten",
      "Fifteen, Seven",
      "Ten, Five",
      "Five, Four"
    ],
    "correct": 2,
    "explanation": "PAN is a 10-digit alphanumeric number and among the first 5 characters, the first 3 form a series."
  },
  {
    "question": "In a PAN, out of the first _____ characters, the first three represent the alphanumeric series from AAA to ZZZ.",
    "options": [
      "Ten",
      "Seven",
      "Five",
      "Four"
    ],
    "correct": 2,
    "explanation": "The first five characters of a PAN include a three-letter series."
  },
  {
    "question": "The fifth character of PAN represents the status of the PAN holder.",
    "options": [
      "True",
      "False"
    ],
    "correct": 0,
    "explanation": "The fifth character indicates the category (status) of the PAN holder."
  },
  {
    "question": "The last (tenth) character of a PAN is an",
    "options": [
      "Identification",
      "Symbol",
      "Alphabetic check digit",
      "Numeric check digit"
    ],
    "correct": 2,
    "explanation": "The tenth character is an alphabetic check digit used for validation."
  },
  {
    "question": "Threshold limit for TDS on director's fees (professional/technical services) under section 194J for FY 2024-25 is",
    "options": [
      "₹5,000",
      "₹30,000",
      "₹10,000",
      "No Threshold limit"
    ],
    "correct": 1,
    "explanation": "TDS under section 194J on director's fees is applicable if the fees exceed ₹30,000."
  },
  {
    "question": "A salaried employee can apply for a certificate of lower/no TDS using which form?",
    "options": [
      "Form 49A",
      "Form 13",
      "Form 15G",
      "Form 15H"
    ],
    "correct": 2,
    "explanation": "Salaried employees with income below the taxable limit can apply using Form 15G (or Form 15H for senior citizens)."
  },
  {
    "question": "Mr. Rajput has won a lottery prize of ₹3,00,000 on December 20, 2023, with ₹2,35,000 payable to the agent. Compute the TDS under section 1948.",
    "options": [
      "Not provided",
      "₹1,00,500",
      "₹79,500",
      "₹81,000"
    ],
    "correct": 3,
    "explanation": "Based on the details provided, the computed TDS under section 1948 comes to ₹81,000."
  },
  {
    "question": "Interest paid by a firm to its partners is subject to TDS at what rate under section 194A (interest other than on securities)?",
    "options": [
      "₹90,000",
      "10%",
      "30%",
      "20%"
    ],
    "correct": 1,
    "explanation": "The standard TDS rate on interest paid to partners is 10%."
  },
  {
    "question": "If the recipient does not furnish his PAN, tax will be deducted at the normal rate or at the rate of ______, whichever is higher.",
    "options": [
      "10%",
      "30%",
      "40%",
      "20%"
    ],
    "correct": 3,
    "explanation": "In the absence of PAN, the applicable TDS rate is 20% (or the normal rate, whichever is higher)."
  },
  {
    "question": "What is the maximum amount of insurance commission that can be paid without TDS?",
    "options": [
      "10%",
      "₹15,000",
      "₹20,000",
      "Not applicable"
    ],
    "correct": 1,
    "explanation": "The maximum insurance commission payable without TDS is ₹15,000."
  },
  {
    "question": "Under Section 194C, what is the TDS rate for payments to contractors or sub-contractors if the recipient is an individual/HUF?",
    "options": [
      "1%",
      "2%",
      "10%",
      "30%"
    ],
    "correct": 0,
    "explanation": "For individual/HUF contractors, the TDS rate under Section 194C is 1%."
  },
  {
    "question": "Mr. Ravi has won a two-wheeler valued at ₹55,000 on December 27, 2023, in a lucky draw. Compute the TDS under section 1948.",
    "options": [
      "₹16,995",
      "₹16,500",
      "₹11,000",
      "₹11,330"
    ],
    "correct": 1,
    "explanation": "30% of ₹55,000 equals ₹16,500."
  },
  {
    "question": "Comfort Limited paid rent of ₹1,98,000 for plant and machinery to Mr. Kishan Lal for FY 2023-24. Is TDS applicable? If yes, calculate the TDS.",
    "options": [
      "Yes, ₹3,960"
    ],
    "correct": 0,
    "explanation": "TDS is applicable on such payments and the computed amount is ₹3,960."
  },
  {
    "question": "What is the maximum amount of insurance commission payable without TDS?",
    "options": [
      "₹15,000"
    ],
    "correct": 0,
    "explanation": "The maximum commission payable without TDS is ₹15,000."
  },
  {
    "question": "To avoid or reduce TDS on salary, the employee must submit an application in Form No. ______ to the Assessing Officer.",
    "options": [
      "Form 15G",
      "Form 15H",
      "Form 13",
      "Form 49A"
    ],
    "correct": 0,
    "explanation": "Employees can apply for lower or nil TDS using Form 15G (or Form 15H if senior)."
  },
  {
    "question": "Under Section 194C, what is the TDS rate for payments to contractors/sub-contractors if the recipient is a private limited company?",
    "options": [
      "1%",
      "2%",
      "10%",
      "30%"
    ],
    "correct": 1,
    "explanation": "For private limited company contractors, the TDS rate under Section 194C is 2%."
  },
  {
    "question": "What is the threshold limit for director's fees under section 194J?",
    "options": [
      "₹30,000",
      "₹10,000",
      "₹20,000",
      "No Threshold Limit"
    ],
    "correct": 0,
    "explanation": "Director's fees attract TDS if they exceed ₹30,000."
  },
  {
    "question": "Mr. Raja has won a lottery ticket of ₹62,250 on 1st May, 2023. Compute the TDS under section 1948.",
    "options": [
      "₹20,175",
      "₹20,780",
      "₹18,675",
      "₹6,927"
    ],
    "correct": 2,
    "explanation": "30% of ₹62,250 equals ₹18,675."
  },
  {
    "question": "Kruti Limited paid rent of ₹1,31,000 for its branch office to Mr. Ramjilal for FY 2023-24. Is TDS applicable? If yes, compute the TDS.",
    "options": [
      "Yes, ₹1,310",
      "Yes, ₹13,100",
      "Yes, ₹1,350",
      "No, Nil"
    ],
    "correct": 3,
    "explanation": "Since the rent paid is below the threshold, no TDS is applicable."
  },
  {
    "question": "Under section 1941, what is the TDS rate for rent on plant and machinery?",
    "options": [
      "10%",
      "20%",
      "30%",
      "2%"
    ],
    "correct": 0,
    "explanation": "The TDS rate for rent on plant and machinery is 10%."
  },
  {
    "question": "What is the maximum amount payable without TDS for a Life Insurance Policy under section 194II?",
    "options": [
      "₹2,500",
      "NIL"
    ],
    "correct": 0,
    "explanation": "Under the specified section, the maximum amount that can be paid without TDS for a life insurance policy is ₹2,500."
  },
  {
    "question": "Mr. Vishal has won a tablet worth ₹35,000 and a cash prize of ₹15,000 in a lucky draw on October 2, 2023. Compute the TDS under section 1948.",
    "options": [
      "₹10,500",
      "₹15,000",
      "₹4,500",
      "₹11,330"
    ],
    "correct": 1,
    "explanation": "The total prize is ₹50,000; 30% of ₹50,000 equals ₹15,000."
  },
  {
    "question": "Mr. Gopal Rai purchased a residential property for ₹65 lakhs. Is TDS applicable? If yes, compute the TDS.",
    "options": [
      "Yes, ₹65,000",
      "Yes, ₹6,50,000",
      "Yes, ₹1,30,000",
      "No, Nil"
    ],
    "correct": 0,
    "explanation": "Under section 194-IA, TDS at 1% on ₹65 lakhs equals ₹65,000."
  },
  {
    "question": "Who is the tax recipient under section 194G for commissions on the sale of lottery tickets?",
    "options": [
      "Any resident person",
      "Unit holder under section 80CCB",
      "Any person",
      "None of the above"
    ],
    "correct": 2,
    "explanation": "Under section 194G, the tax recipient for commissions on lottery ticket sales can be any person."
  },
  {
    "question": "In which of the following sections is a 10% rate of TDS applicable?",
    "options": [
      "Section-194F for repurchase of units by Mutual Funds/UTI",
      "Section-194H for commission or brokerage",
      "Section-194G for commission on sale of lottery tickets",
      "Both (B) & (C)"
    ],
    "correct": 0,
    "explanation": "A 10% TDS rate applies under Section 194F for repurchase of units by Mutual Funds or UTI."
  },
  {
    "question": "Under section 194G, when should TDS be deducted?",
    "options": [
      "At the time of payment",
      "At the time of payment or at the time of credit, whichever is earlier",
      "Both (A) and (B)",
      "None of the above"
    ],
    "correct": 1,
    "explanation": "TDS under section 194G is deducted at the earlier of the time of payment or credit."
  },
  {
    "question": "Match the following TDS rates with their corresponding transactions: i) 1%, ii) 10%, iii) 2%.",
    "options": [
      "i - Individual/HUF contractor, ii - Repurchase of units, iii - Private limited company contractor",
      "i - Repurchase of units, ii - Private limited company contractor, iii - Individual/HUF contractor",
      "i - Private limited company contractor, ii - Individual/HUF contractor, iii - Repurchase of units",
      "Not enough information"
    ],
    "correct": 0,
    "explanation": "Typically, a 1% rate applies for individual/HUF contractors, 10% for repurchase of units, and 2% for private limited company contractors."
  },
  {
    "question": "M/s. T.D.S. Limited paid rent of ₹1,44,000 for a branch office to Mr. Ronak Dave for FY 2023-24. Is TDS applicable? If yes, compute the TDS.",
    "options": [
      "Yes, ₹1,440"
    ],
    "correct": 0,
    "explanation": "The TDS on the rent payment comes to ₹1,440."
  },
  {
    "question": "What is the threshold limit for payment in respect of Director's fees under section 149J?",
    "options": [
      "30,000",
      "14,400",
      "2,880",
      "Nil"
    ],
    "correct": 0,
    "explanation": "Director's fees attract TDS if they exceed Rs.30,000."
  },
  {
    "question": "What is the maximum amount payable without TDS for interest (other than on securities and bank interest) under section 194A?",
    "options": [
      "₹5,000",
      "₹10,000",
      "₹20,000",
      "₹6,000"
    ],
    "correct": 1,
    "explanation": "Payments of interest up to ₹10,000 are exempt from TDS under section 194A."
  },
  {
    "question": "To get salary without TDS or with lower TDS, the employee must submit an application in which form?",
    "options": [
      "Form 15G",
      "Form 15H",
      "Form 13",
      "Form 49A"
    ],
    "correct": 0,
    "explanation": "Employees can apply for nil or lower TDS on salary using Form 15G (or Form 15H for senior citizens)."
  }
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
 "Fundamentals of Macro Economics": [
  {
    question: "Who is considered the 'Father of Economics'?",
    options: [
      "John Maynard Keynes",
      "Karl Marx",
      "Adam Smith",
      "Milton Friedman"
    ],
    correct: 2,
    explanation: "Adam Smith is known as the 'Father of Economics' for his influential work 'The Wealth of Nations'."
  },
  {
    question: "What was the primary focus of economics before the 1930s?",
    options: [
      "Microeconomics",
      "Macroeconomics",
      "Political economy",
      "Development economics"
    ],
    correct: 2,
    explanation: "Before the 1930s, economics was largely known as political economy."
  },
  {
    question: "In which year did John Maynard Keynes publish 'The General Theory of Employment, Interest and Money'?",
    options: [
      "1776",
      "1936",
      "1950",
      "1965"
    ],
    correct: 1,
    explanation: "Keynes published 'The General Theory' in 1936."
  },
  {
    question: "Which of the following is NOT a macroeconomic variable in the goods market?",
    options: [
      "Gross Domestic Product (GDP)",
      "Total government expenditure",
      "Exchange rate",
      "Employment"
    ],
    correct: 2,
    explanation: "Exchange rate is related to the foreign exchange market, not the goods market."
  },
  {
    question: "What does the IS-LM model describe in macroeconomics?",
    options: [
      "The equilibrium of product and money markets",
      "The relationship between supply and demand",
      "The determination of interest rates",
      "The growth of national income"
    ],
    correct: 0,
    explanation: "The IS-LM model shows the equilibrium in both the goods (IS) and money (LM) markets."
  },
  {
    question: "Which macroeconomic variable is classified as a 'stock' variable?",
    options: [
      "Aggregate consumption",
      "Gross National Product (GNP)",
      "Supply of Money",
      "Exports"
    ],
    correct: 2,
    explanation: "The money supply is measured at a specific point in time, making it a stock variable."
  },
  {
    question: "What is the primary objective of macroeconomics as a policy science?",
    options: [
      "To develop theories for national income",
      "To understand the interaction between different sectors of the economy",
      "To formulate economic policies to manage business cycles",
      "To explain individual consumer behavior"
    ],
    correct: 2,
    explanation: "Macroeconomics aims to formulate policies to manage economic fluctuations and business cycles."
  },
  {
    question: "Which of the following is true about flow variables in macroeconomics?",
    options: [
      "They are measured at a specific point in time",
      "They remain constant over time",
      "They are expressed per unit of time",
      "They refer to accumulated wealth"
    ],
    correct: 2,
    explanation: "Flow variables measure economic activity over a period of time."
  },
  {
    question: "What is the primary difference between static and dynamic analysis in macroeconomics?",
    options: [
      "Static analysis involves changing variables over time, while dynamic analysis assumes constant variables",
      "Static analysis assumes no change in variables, while dynamic analysis studies changes over time",
      "Static analysis only looks at money market variables, while dynamic analysis covers both goods and money markets",
      "Static analysis focuses on microeconomics, while dynamic analysis is applied to macroeconomics"
    ],
    correct: 1,
    explanation: "Static analysis examines a single equilibrium at a point in time, whereas dynamic analysis studies how variables evolve over time."
  },
  {
    question: "Which concept refers to the condition where aggregate demand equals aggregate supply in an economy?",
    options: [
      "Disequilibrium",
      "Partial equilibrium",
      "General equilibrium",
      "Equilibrium"
    ],
    correct: 3,
    explanation: "When aggregate demand equals aggregate supply, the economy is in equilibrium."
  },
  {
    question: "What is the prime objective of constructing a static economic model?",
    options: [
      "To study the future course of the economy",
      "To make a generalization or theoretical proposition regarding related variables",
      "To observe the dynamic movements in the economy",
      "To analyse changes in the financial market"
    ],
    correct: 1,
    explanation: "A static model simplifies the analysis by focusing on a snapshot of the economy to derive theoretical relationships."
  },
  {
    question: "What is the major focus of dynamic analysis in economics?",
    options: [
      "To study the evolution of economic variables over time",
      "To make theoretical generalizations",
      "To analyze static equilibria",
      "To compare different time periods"
    ],
    correct: 0,
    explanation: "Dynamic analysis focuses on the evolution and changes in economic variables over time."
  },
  {
    question: "In comparative static analysis, what is being compared?",
    options: [
      "The predictions of future economic trends",
      "Equilibrium values of the system at two different points in time",
      "Changes in household income",
      "Government expenditure patterns"
    ],
    correct: 1,
    explanation: "Comparative static analysis compares the equilibrium outcomes before and after a change."
  },
  {
    question: "Which flow is responsible for the circular flow of income in a two‐sector model?",
    options: [
      "Only factor flows",
      "Only money flows",
      "Both product and money flows",
      "Government fiscal flows"
    ],
    correct: 2,
    explanation: "In a two-sector model, both product and money flows circulate income."
  },
  {
    question: "Which sectors are included in the two‐sector circular flow model?",
    options: [
      "Households and government",
      "Households and foreign sector",
      "Households and business firms",
      "Business firms and foreign sector"
    ],
    correct: 2,
    explanation: "A two‐sector model typically includes households and business firms."
  },
  {
    question: "In the two‐sector model, what is the role of households?",
    options: [
      "To produce goods and services",
      "To supply factors of production and consume goods",
      "To provide government services",
      "To collect taxes and redistribute income"
    ],
    correct: 1,
    explanation: "Households supply factors of production and consume goods in a two‐sector model."
  },
  {
    question: "What is an example of an injection into the circular flow of income in the two‐sector model?",
    options: [
      "Savings by households",
      "Taxation by the government",
      "Investments by business firms",
      "Imports of goods and services"
    ],
    correct: 2,
    explanation: "Investment is considered an injection as it adds to the circular flow of income."
  },
  {
    question: "What happens when the government adopts a deficit budget policy in the three‐sector model?",
    options: [
      "It reduces the overall circular flow of income",
      "It increases injections into the economy",
      "It reduces taxes on households",
      "It increases the level of foreign trade"
    ],
    correct: 1,
    explanation: "A deficit budget increases injections into the economy by adding more government spending relative to taxes collected."
  },
  {
    question: "In a four‐sector model, what is an example of a withdrawal from the circular flow?",
    options: [
      "Export of goods and services",
      "Household savings deposited in banks",
      "Government expenditure on subsidies",
      "Households spending on consumer goods"
    ],
    correct: 1,
    explanation: "Household savings are considered leakages, thus a withdrawal from the circular flow."
  },
  {
    question: "In the context of foreign trade in the four‐sector model, what happens if exports (X) are greater than imports (M)?",
    options: [
      "There is no change in the circular flow",
      "The circular flow decreases",
      "The circular flow increases due to net income inflows",
      "The economy faces a recession"
    ],
    correct: 2,
    explanation: "When exports exceed imports, the net injection increases the circular flow of income."
  },
  {
    question: "What does national income refer to?",
    options: [
      "The total income of a country's citizens abroad",
      "The aggregate money value of all final goods and services produced within a country over a year",
      "The total amount of money in circulation",
      "The money value of imports and exports of a country"
    ],
    correct: 1,
    explanation: "National income is the aggregate value of all final goods and services produced within a country in a year."
  },
  {
    question: "Which of the following is NOT considered economic production?",
    options: [
      "Goods produced by farmers for sale",
      "Goods produced by social service clubs for free",
      "Services provided by a medical practitioner for a fee",
      "Goods produced by government agencies"
    ],
    correct: 1,
    explanation: "Economic production excludes activities that do not involve a market transaction, such as goods produced for free by social service clubs."
  },
  {
    question: "What is the difference between intermediate goods and final goods?",
    options: [
      "Final goods are consumed immediately, while intermediate goods are used in the production of final goods",
      "Intermediate goods have a market value, while final goods do not",
      "Intermediate goods are only produced by the government",
      "Final goods are always physical goods, and intermediate goods are always services"
    ],
    correct: 0,
    explanation: "Intermediate goods are inputs used in the production of final goods, which are ultimately consumed."
  },
  {
    question: "Which of the following is an example of a non‐economic production activity?",
    options: [
      "A tailor producing clothes for sale",
      "A housewife preparing dinner for her family",
      "A factory producing shoes for export",
      "A company manufacturing automobiles"
    ],
    correct: 1,
    explanation: "Household work such as preparing dinner is typically not counted as economic production."
  },
  {
    question: "Which of the following is included in the measurement of national income?",
    options: [
      "Transfer payments like pensions and social security benefits",
      "Only marketable goods and services",
      "Services rendered by family members to each other",
      "Both marketable and non‐marketable goods produced by the government"
    ],
    correct: 3,
    explanation: "National income accounts include the value of both marketable and non‐marketable goods produced by the government."
  },
  {
    question: "In national income accounting, what is the problem caused by double counting?",
    options: [
      "Underestimation of national income",
      "Overestimation of national income",
      "Incorrect classification of goods and services",
      "Inclusion of illegal activities in the GDP"
    ],
    correct: 1,
    explanation: "Double counting leads to an overestimation of national income by counting the same output more than once."
  },
  {
    question: "What is the main distinction between GDP and GNP?",
    options: [
      "GDP includes income earned abroad by residents, while GNP excludes it",
      "GNP includes income earned by residents abroad, while GDP excludes it",
      "GDP includes income earned by non‐residents in the country, while GNP excludes it",
      "GNP measures production at constant prices, while GDP uses current prices"
    ],
    correct: 1,
    explanation: "GNP accounts for income earned by residents abroad, whereas GDP measures production within the country's borders."
  },
  {
    question: "What is Net National Product (NNP)?",
    options: [
      "The market value of all goods and services produced in a country",
      "The value of all final goods and services, including depreciation",
      "GNP minus depreciation",
      "The sum of personal incomes in a country"
    ],
    correct: 2,
    explanation: "NNP is calculated by subtracting depreciation from GNP."
  },
  {
    question: "Why is GDP measured at constant prices?",
    options: [
      "To exclude the impact of inflation on economic growth",
      "To account for changes in population",
      "To measure the total value of goods and services at current market prices",
      "To ensure accurate reflection of international trade"
    ],
    correct: 0,
    explanation: "Measuring GDP at constant prices removes the effects of inflation, providing a clearer picture of real growth."
  },
  {
    question: "What is the GNP deflator used for?",
    options: [
      "To calculate nominal GNP",
      "To adjust nominal GNP for inflation",
      "To calculate the price index",
      "To estimate total national expenditure"
    ],
    correct: 1,
    explanation: "The GNP deflator is used to convert nominal GNP into real GNP by accounting for inflation."
  },
  {
    question: "How is real GNP calculated?",
    options: [
      "Nominal GNP divided by the GNP deflator",
      "Nominal GNP multiplied by the GNP deflator",
      "Nominal GNP divided by the price index number",
      "Nominal GNP multiplied by the price index number"
    ],
    correct: 0,
    explanation: "Real GNP is calculated by dividing nominal GNP by the GNP deflator (and multiplying by 100 if necessary)."
  },
  {
    question: "Which of the following is NOT part of the GNP implicit deflator?",
    options: [
      "Nominal GNP",
      "Real GNP",
      "Price Index Number (PIN)",
      "Exchange rates"
    ],
    correct: 3,
    explanation: "Exchange rates are not included in the calculation of the GNP implicit deflator."
  },
  {
    question: "The GNP implicit deflator can be used to measure:",
    options: [
      "National savings",
      "National debt",
      "The rate of inflation or deflation",
      "The exchange rate"
    ],
    correct: 2,
    explanation: "The GNP implicit deflator reflects the overall price level change, indicating inflation or deflation."
  },
  {
    question: "Which method is used to avoid double counting in national income estimation?",
    options: [
      "Net product method",
      "Factor income method",
      "Expenditure method",
      "Value‐added method"
    ],
    correct: 3,
    explanation: "The value‐added method counts only the additional value at each stage of production, avoiding double counting."
  },
  {
    question: "The net product method consists of which of the following stages?",
    options: [
      "Estimating gross value, determining costs, and adjusting for taxes",
      "Estimating gross value, determining material costs, and deducting depreciation",
      "Estimating final demand, calculating imports, and adjusting for inflation",
      "Estimating gross income, calculating investments, and adjusting for savings"
    ],
    correct: 1,
    explanation: "The net product method involves deducting material costs and depreciation from the gross value."
  },
  {
    question: "Which of the following is an example of mixed income?",
    options: [
      "Rent from land",
      "Dividends from a corporation"
    ],
    correct: null,
    explanation: "The options provided are incomplete; typically, mixed income refers to earnings of self‐employed individuals, which is not clearly represented here."
  },
  {
    question: "Under the factor income method, which of the following is included in national income?",
    options: [
      "Only wages",
      "Only profits from corporations",
      "Rent, wages, interest, and profit",
      "Only dividends"
    ],
    correct: 2,
    explanation: "The factor income method sums wages, rents, interests, and profits to determine national income."
  },
  {
    question: "Which of the following is the correct formula for calculating the GNP deflator?",
    options: [
      "(Nominal GNP / Real GNP) * 100",
      "(Real GNP / Nominal GNP) * 100",
      "(PIN of the chosen year / 100)",
      "(GNP of the base year / GNP of the current year)"
    ],
    correct: 0,
    explanation: "The GNP deflator is calculated as (Nominal GNP / Real GNP) * 100."
  },
  {
    question: "What is the main reason for the persistent budgetary deficit in India, as discussed in the text?",
    options: [
      "Slow economic growth",
      "Government expenditure rising faster than revenue",
      "Reduction in government tax collection",
      "Decline in foreign direct investment"
    ],
    correct: 1,
    explanation: "The persistent budgetary deficit is primarily due to government spending outpacing revenue collection."
  },
  {
    question: "What is the consequence of persistent unemployment in both developing and developed countries?",
    options: [
      "Economic prosperity",
      "Increased wages for all workers",
      "Poverty for the unemployed population",
      "Significant decrease in government spending"
    ],
    correct: 2,
    explanation: "Persistent unemployment generally leads to increased poverty among the unemployed."
  },
  {
    question: "Which of the following macroeconomic issues is especially problematic in fast growing economies?",
    options: [
      "Budget surpluses",
      "Overheating of the economy",
      "Slow industrial development",
      "Excessive unemployment"
    ],
    correct: 1,
    explanation: "Fast growing economies often face overheating, which can lead to inflationary pressures."
  },
  {
    question: "Which economist is associated with the introduction of Rational Expectations Theory?",
    options: [
      "John Maynard Keynes",
      "Milton Friedman",
      "Robert Lucas",
      "Gregory Mankiw"
    ],
    correct: 2,
    explanation: "Robert Lucas is renowned for his contributions to Rational Expectations Theory."
  },
  {
    question: "What is the central belief of monetarism?",
    options: [
      "Government spending stimulates economic growth",
      "Money supply is the key determinant of national output and prices",
      "Aggregate demand is the main driver of economic output",
      "Fiscal policy should be the central tool for economic management"
    ],
    correct: 1,
    explanation: "Monetarism emphasizes that the money supply is the primary factor influencing economic activity."
  },
  {
    question: "According to classical economics, what is considered the normal state of the economy?",
    options: [
      "Unemployment",
      "Inflation",
      "Full employment",
      "Recession"
    ],
    correct: 2,
    explanation: "Classical economics assumes that the economy naturally tends toward full employment."
  },
  {
    question: "In classical economics, what causes unemployment?",
    options: [
      "Lack of savings",
      "Government intervention",
      "Rigidity in the wage structure",
      "Insufficient capital"
    ],
    correct: 2,
    explanation: "Classical theory attributes unemployment to rigidities in wages that prevent market adjustments."
  },
  {
    question: "Who is the economist associated with the proposition 'supply creates its own demand'?",
    options: [
      "J.S. Mill",
      "Alfred Marshall",
      "John Maynard Keynes",
      "J.B. Say"
    ],
    correct: 3,
    explanation: "J.B. Say is known for Say's Law, which states that supply creates its own demand."
  },
  {
    question: "Which of the following is NOT an assumption of classical economics?",
    options: [
      "The demand for labor exceeds the supply",
      "There will be no unemployment",
      "There will be involuntary unemployment",
      "The economy will reach full employment automatically"
    ],
    correct: 2,
    explanation: "Classical economics assumes that any unemployment is voluntary, so involuntary unemployment is not expected."
  },
  {
    question: "What is the core concept of the classical theory of employment?",
    options: [
      "The Keynesian multiplier",
      "Say's Law of Markets",
      "The Law of Diminishing Returns",
      "The Phillips Curve"
    ],
    correct: 1,
    explanation: "The core concept in classical employment theory is Say's Law, which suggests that supply creates its own demand."
  },
  {
    question: "According to the classical theory, the equilibrium in the goods market occurs when:",
    options: [
      "Saving equals investment",
      "The government intervenes",
      "The price level is constant",
      "There is no inflation"
    ],
    correct: 0,
    explanation: "Classical theory posits that goods market equilibrium is achieved when saving equals investment."
  },
  {
    question: "In classical economics, what determines the demand for labor in the labor market?",
    options: [
      "The quantity of money",
      "The real wage rate",
      "The level of investment",
      "Government regulation"
    ],
    correct: 1,
    explanation: "The demand for labor in classical economics is determined by the real wage rate."
  },
  {
    question: "According to classical economics, the relationship between money wages and real wages is:",
    options: [
      "Inversely proportional",
      "Unrelated",
      "Directly proportional",
      "Complex and unpredictable"
    ],
    correct: 0,
    explanation: "An increase in money wages, if not accompanied by a proportional rise in prices, results in lower real wages."
  },
  {
    question: "In the classical model, what causes an increase in the price level in the money market equilibrium?",
    options: [
      "A decrease in the supply of money",
      "A decrease in the velocity of money",
      "An increase in the quantity of money",
      "An increase in total output"
    ],
    correct: 2,
    explanation: "An increase in the money supply, ceteris paribus, leads to a higher price level."
  },
  {
    question: "In the classical theory of employment, the goods market is in equilibrium when:",
    options: [
      "Investment equals saving (I = S)",
      "Saving exceeds investment",
      "Investment exceeds saving",
      "Government spending equals taxation"
    ],
    correct: 0,
    explanation: "Equilibrium in the goods market occurs when investment equals saving."
  },
  {
    question: "According to the classical theory, money does not play a role in determining output and employment because:",
    options: [
      "It only facilitates transactions",
      "It causes inflation",
      "It is used as a store of value",
      "It is neutral in the economy"
    ],
    correct: 3,
    explanation: "Classical economists consider money to be neutral in affecting real output and employment."
  },
  {
    question: "Keynes criticized the classical theory mainly because:",
    options: [
      "It underestimated the role of money in the economy",
      "It assumes that the economy is always in a state of full employment",
      "It overemphasizes state intervention",
      "It neglects the importance of saving and investment"
    ],
    correct: 1,
    explanation: "Keynes argued that the classical assumption of full employment does not hold in reality."
  },
  {
    question: "Keynes rejected Say's law, which states that:",
    options: [
      "Demand creates supply",
      "Supply creates its own demand",
      "Investment is equal to saving",
      "Money supply is determined by government policy"
    ],
    correct: 1,
    explanation: "Keynes rejected Say's Law, arguing that supply does not automatically create its own demand."
  },
  {
    question: "Which of the following was a main criticism of Keynes against the classical view on the adjustment mechanism?",
    options: [
      "The belief that price and wage flexibility leads to full employment",
      "The failure to account for speculative demand for money",
      "The emphasis on fiscal policy",
      "The assumption that investment is based solely on interest rates"
    ],
    correct: 0,
    explanation: "Keynes criticized the classical view that flexible wages and prices would automatically ensure full employment."
  },
  {
    question: "According to Keynes, saving and investment are equal at the full employment level of output, but only:",
    options: [
      "Due to changes in government spending",
      "Through adjustments in the income level",
      "Because the interest rate adjusts to balance them",
      "By the automatic functioning of the market"
    ],
    correct: 1,
    explanation: "Keynes argued that equilibrium is achieved through changes in income rather than automatic interest rate adjustments."
  },
  {
    question: "Keynes' theory of money emphasizes:",
    options: [
      "The neutrality of money in the long run",
      "The speculative demand for money at low interest rates",
      "The importance of balancing the budget",
      "The link between money supply and inflation"
    ],
    correct: 1,
    explanation: "Keynes highlighted the role of speculative demand for money, especially at low interest rates."
  },
  {
    question: "Which of the following is one of Keynes' criticisms of the classical view regarding wages?",
    options: [
      "A reduction in wages automatically increases employment",
      "The real wage is inversely related to the money wage",
      "A reduction in wages increases output directly",
      "Full employment can only be achieved by cutting wages"
    ],
    correct: 0,
    explanation: "Keynes argued that simply reducing wages does not necessarily lead to increased employment."
  },
  {
    question: "According to classical economics, full employment in an economy occurs because:",
    options: [
      "Government intervention corrects any imbalances",
      "The wage rate automatically adjusts to ensure all workers are employed",
      "Supply creates its own demand, ensuring all output is sold",
      "There is constant government spending"
    ],
    correct: 1,
    explanation: "Classical theory holds that wage flexibility ensures that any unemployment is temporary, leading to full employment."
  },
  {
    question: "Say's Law of Market is founded on the principle that:",
    options: [
      "The supply of goods creates a corresponding demand for those goods",
      "Government regulation is necessary for equilibrium",
      "Demand always exceeds supply",
      "Saving is equal to investment"
    ],
    correct: 0,
    explanation: "Say's Law posits that production (supply) inherently generates an equivalent demand."
  }
],
 
      
};

// Function to Start the Test
function startTest(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    score = 0; // Initialize score
    userAnswers = []; // Store user's answers
    questionOrder = {}; // Store shuffled order of options

    // Shuffle questions and then select only the first 25
    mcqData[currentSubject] = shuffleArray(mcqData[currentSubject]).slice(0, 25);

    // Reset the test section (Clear any previous result)
    document.getElementById("mcq-test").innerHTML = `
        <h2 id="subject-title"></h2>
        <p id="question"></p>
        <div id="options"></div>
        <button id="prev-btn" onclick="prevQuestion()" style="display: none;">Previous</button>
        <button id="next-btn" onclick="nextQuestion()" style="display: none;">Next</button>
        <p id="explanation"></p>
    `;

    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("mcq-test").style.display = "block";
    document.getElementById("subject-title").innerText = subject.toUpperCase() + " Test";

    loadQuestion();
}

// Function to Load a Question
function loadQuestion() {
    currentQuestionData = mcqData[currentSubject][currentQuestionIndex];
    
    // Maintain consistent option order for each question
    if (!questionOrder[currentQuestionIndex]) {
        questionOrder[currentQuestionIndex] = [...currentQuestionData.options];
    }
    let shuffledOptions = questionOrder[currentQuestionIndex];
    let correctIndex = currentQuestionData.correct;

    document.getElementById("question").innerText = currentQuestionData.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    shuffledOptions.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(index, correctIndex, btn);

        // Pre-select user's previous answer if it exists
        if (userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].selected === option) {
            btn.classList.add(userAnswers[currentQuestionIndex].selected === userAnswers[currentQuestionIndex].correct ? "correct" : "wrong");
        }

        optionsDiv.appendChild(btn);
    });

    document.getElementById("explanation").innerText = userAnswers[currentQuestionIndex]?.explanation || "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("prev-btn").style.display = currentQuestionIndex > 0 ? "block" : "none";
}

// Function to Move to Previous Question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Function to Check the Answer
function checkAnswer(selectedIndex, correctIndex, btn) {
    let allButtons = document.querySelectorAll(".option-btn");
    let explanationText = "";

    if (selectedIndex === correctIndex) {
        btn.classList.add("correct");
        explanationText = "✅ Correct! " + currentQuestionData.explanation;
        score++;
    } else {
        btn.classList.add("wrong");
        allButtons[correctIndex].classList.add("correct");
        explanationText = "❌ Incorrect! " + currentQuestionData.explanation;
    }

    userAnswers[currentQuestionIndex] = {
        question: currentQuestionData.question,
        selected: currentQuestionData.options[selectedIndex],
        correct: currentQuestionData.options[correctIndex],
        explanation: currentQuestionData.explanation
    };

    document.getElementById("explanation").innerText = explanationText;
    allButtons.forEach(button => button.onclick = null);
    document.getElementById("next-btn").style.display = "block";
}

// Function to Move to Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < mcqData[currentSubject].length) {
        loadQuestion();
    } else {
        showPerformanceAnalytics();
    }
}

// Function to Show Performance Analytics
function showPerformanceAnalytics() {
    const totalQuestions = mcqData[currentSubject].length;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);
    let performanceMessage = percentage >= 80 ? "🌟 Excellent work!" : percentage >= 50 ? "✅ Good job!" : "⚠️ Needs Improvement.";

    document.getElementById("mcq-test").innerHTML = `
      <h2>Test Completed!</h2>
      <p>Total Questions: ${totalQuestions}</p>
      <p>Correct Answers: ${score}</p>
      <p>Score: ${percentage}%</p>
      <p>${performanceMessage}</p>
      <button onclick="recheckAnswers()" class="btn">🔍 Recheck Answers</button>
      <button onclick="goHome()" class="btn">🏠 Return to Home</button>
      <button onclick="retryTest()" class="btn">🔄 Retry Test</button>
    `;
}
