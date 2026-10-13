// ============================================================
// BrainQuest - Question Bank
// ------------------------------------------------------------
// To add more questions later, just add another object to RAW:
//   { subject: "Science", question: "...",
//     options: ["A", "B", "C", "D"], answer: 0 }
// `answer` is the index (0-3) of the correct option.
// Keep all four options unique.
// ============================================================

(function () {
    "use strict";

    var SUBJECTS = [
        "Technology",
        "Science",
        "Mathematics",
        "General Knowledge",
        "History",
        "CSE",
        "ECE",
        "EEE",
        "MECH"
    ];

    var RAW = [

        // ---------------- Technology ----------------
        {
            subject: "Technology",
            question: "What does \"CPU\" stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Control Processing Unit"
            ],
            answer: 0
        },
        {
            subject: "Technology",
            question: "Which language is used to style web pages?",
            options: ["HTML", "CSS", "JavaScript", "SQL"],
            answer: 1
        },
        {
            subject: "Technology",
            question: "What does \"HTTP\" stand for?",
            options: [
                "HyperText Transfer Protocol",
                "High Transfer Text Protocol",
                "Hyperlink Text Transfer Program",
                "Home Tool Transfer Protocol"
            ],
            answer: 0
        },
        {
            subject: "Technology",
            question: "Which company developed the Android operating system?",
            options: ["Apple", "Google", "Microsoft", "IBM"],
            answer: 1
        },
        {
            subject: "Technology",
            question: "What does \"RAM\" stand for?",
            options: [
                "Read Access Memory",
                "Random Access Memory",
                "Rapid Access Module",
                "Run Access Memory"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which of these is a JavaScript library?",
            options: ["Django", "React", "Laravel", "Flask"],
            answer: 1
        },
        {
            subject: "Technology",
            question: "What does \"AI\" stand for?",
            options: [
                "Automatic Input",
                "Artificial Intelligence",
                "Advanced Interface",
                "Applied Integration"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which file extension is used for Python files?",
            options: [".py", ".pt", ".pyt", ".pn"],
            answer: 0
        },

        // ---------------- Science ----------------
        {
            subject: "Science",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "H2O2"],
            answer: 0
        },
        {
            subject: "Science",
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Mercury"],
            answer: 1
        },
        {
            subject: "Science",
            question: "Which force keeps planets in orbit around the Sun?",
            options: ["Magnetism", "Gravity", "Friction", "Electricity"],
            answer: 1
        },
        {
            subject: "Science",
            question: "Which part of the cell is called the powerhouse?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
            answer: 2
        },
        {
            subject: "Science",
            question: "Which gas do plants absorb from the air for photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            answer: 2
        },
        {
            subject: "Science",
            question: "What is the boiling point of water at sea level in Celsius?",
            options: ["50", "90", "100", "120"],
            answer: 2
        },
        {
            subject: "Science",
            question: "Which is the largest organ in the human body?",
            options: ["Heart", "Liver", "Skin", "Lungs"],
            answer: 2
        },
        {
            subject: "Science",
            question: "How many bones are in the adult human body?",
            options: ["206", "201", "195", "230"],
            answer: 0
        },

        // ---------------- Mathematics ----------------
        {
            subject: "Mathematics",
            question: "What is 7 × 8?",
            options: ["54", "56", "64", "48"],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "What is the value of π (pi) to two decimal places?",
            options: ["3.14", "3.41", "3.12", "3.16"],
            answer: 0
        },
        {
            subject: "Mathematics",
            question: "What is the square root of 144?",
            options: ["11", "12", "13", "14"],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "How many degrees are there in the angles of a triangle in total?",
            options: ["90", "180", "270", "360"],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "What is 15% of 200?",
            options: ["15", "30", "45", "20"],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "Which of these is a prime number?",
            options: ["21", "17", "27", "33"],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "What is 9 squared?",
            options: ["18", "72", "81", "99"],
            answer: 2
        },
        {
            subject: "Mathematics",
            question: "What comes next: 2, 4, 8, 16, ... ?",
            options: ["18", "24", "32", "20"],
            answer: 2
        },

        // ---------------- General Knowledge ----------------
        {
            subject: "General Knowledge",
            question: "How many continents are there on Earth?",
            options: ["5", "6", "7", "8"],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: 3
        },
        {
            subject: "General Knowledge",
            question: "What color do you get by mixing blue and yellow?",
            options: ["Green", "Purple", "Orange", "Brown"],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "How many days are there in a leap year?",
            options: ["364", "365", "366", "367"],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "What is the currency of Japan?",
            options: ["Won", "Yuan", "Yen", "Ringgit"],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "How many players from one team are on the field in football (soccer)?",
            options: ["9", "10", "11", "12"],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which animal is known as the \"Ship of the Desert\"?",
            options: ["Horse", "Camel", "Donkey", "Llama"],
            answer: 1
        },

        // ---------------- History ----------------
        {
            subject: "History",
            question: "In which year did World War II end?",
            options: ["1918", "1939", "1945", "1950"],
            answer: 2
        },
        {
            subject: "History",
            question: "Who was the first President of the United States?",
            options: [
                "Abraham Lincoln",
                "George Washington",
                "Thomas Jefferson",
                "John Adams"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Great Wall is located in which country?",
            options: ["Japan", "India", "China", "Mongolia"],
            answer: 2
        },
        {
            subject: "History",
            question: "Who was the first person to walk on the Moon?",
            options: [
                "Neil Armstrong",
                "Buzz Aldrin",
                "Yuri Gagarin",
                "Michael Collins"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "Which ancient civilization built the pyramids of Giza?",
            options: ["Romans", "Greeks", "Egyptians", "Persians"],
            answer: 2
        },
        {
            subject: "History",
            question: "Who was the primary author of the U.S. Declaration of Independence?",
            options: [
                "Benjamin Franklin",
                "Thomas Jefferson",
                "George Washington",
                "John Adams"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The French Revolution began in which year?",
            options: ["1776", "1789", "1799", "1815"],
            answer: 1
        },
        {
            subject: "History",
            question: "Who was known as the \"Maid of Orleans\"?",
            options: [
                "Cleopatra",
                "Joan of Arc",
                "Queen Victoria",
                "Catherine the Great"
            ],
            answer: 1
        },

        // =========================================================
        // HARD QUESTIONS - tougher, expert-level facts
        // =========================================================

        // ---------------- Technology (hard) ----------------
        {
            subject: "Technology",
            question: "What is the time complexity of binary search on a sorted array?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which port does HTTPS use by default?",
            options: ["21", "80", "443", "8080"],
            answer: 2
        },
        {
            subject: "Technology",
            question: "Who is widely regarded as the world's first computer programmer?",
            options: ["Alan Turing", "Ada Lovelace", "Grace Hopper", "Charles Babbage"],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which data structure follows First-In-First-Out (FIFO) order?",
            options: ["Stack", "Queue", "Tree", "Graph"],
            answer: 1
        },

        // ---------------- Science (hard) ----------------
        {
            subject: "Science",
            question: "What is the atomic number of uranium?",
            options: ["88", "92", "94", "96"],
            answer: 1
        },
        {
            subject: "Science",
            question: "Which subatomic particle carries no electric charge?",
            options: ["Proton", "Electron", "Neutron", "Positron"],
            answer: 2
        },
        {
            subject: "Science",
            question: "Which gas makes up the largest share of Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
            answer: 1
        },
        {
            subject: "Science",
            question: "Which organ in the human body produces insulin?",
            options: ["Liver", "Pancreas", "Kidney", "Spleen"],
            answer: 1
        },

        // ---------------- Mathematics (hard) ----------------
        {
            subject: "Mathematics",
            question: "What is the derivative of sin(x) with respect to x?",
            options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
            answer: 0
        },
        {
            subject: "Mathematics",
            question: "What is the value of 0! (zero factorial)?",
            options: ["0", "1", "Undefined", "Infinity"],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "What is the sum of the interior angles of a hexagon?",
            options: ["540°", "720°", "900°", "1080°"],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "What is the 10th prime number?",
            options: ["23", "27", "29", "31"],
            answer: 2
        },

        // ---------------- General Knowledge (hard) ----------------
        {
            subject: "General Knowledge",
            question: "Which is the smallest country in the world by area?",
            options: ["Monaco", "Vatican City", "San Marino", "Malta"],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "How many keys does a standard full-size piano have?",
            options: ["76", "81", "88", "92"],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which element has the chemical symbol \"W\"?",
            options: ["Titanium", "Tungsten", "Tin", "Tantalum"],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "In which country is the ancient city of Petra located?",
            options: ["Egypt", "Jordan", "Israel", "Turkey"],
            answer: 1
        },

        // ---------------- History (hard) ----------------
        {
            subject: "History",
            question: "In which year did the Berlin Wall fall?",
            options: ["1961", "1979", "1989", "1991"],
            answer: 2
        },
        {
            subject: "History",
            question: "Who was the first Emperor of Rome?",
            options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
            answer: 1
        },
        {
            subject: "History",
            question: "In which year did the Titanic sink?",
            options: ["1905", "1912", "1918", "1923"],
            answer: 1
        },
        {
            subject: "History",
            question: "The Battle of Hastings took place in which year?",
            options: ["1066", "1215", "1453", "1492"],
            answer: 0
        },

        // =========================================================
        // B.TECH ENGINEERING QUESTIONS (CSE / ECE / EEE / MECH)
        // =========================================================

        // ---------------- CSE: Computer Science & Engineering ----------------
        {
            subject: "CSE",
            question: "What is the average-case time complexity of Quicksort?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: 1
        },
        {
            subject: "CSE",
            question: "In Big-O notation, which complexity grows the fastest as n increases?",
            options: ["O(n²)", "O(log n)", "O(2ⁿ)", "O(n log n)"],
            answer: 2
        },
        {
            subject: "CSE",
            question: "Which data structure does the CPU use to manage function calls and recursion?",
            options: ["Heap", "Stack", "Queue", "Graph"],
            answer: 1
        },
        {
            subject: "CSE",
            question: "What is the worst-case lookup time in a hash table with many collisions?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            answer: 2
        },
        {
            subject: "CSE",
            question: "Which database normal form removes transitive dependencies?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            answer: 2
        },
        {
            subject: "CSE",
            question: "How many bits are in an IPv6 address?",
            options: ["32", "64", "128", "256"],
            answer: 2
        },
        {
            subject: "CSE",
            question: "Which CPU scheduling algorithm can starve low-priority processes?",
            options: [
                "First-Come-First-Served",
                "Round Robin",
                "Priority Scheduling",
                "None of these"
            ],
            answer: 2
        },
        {
            subject: "CSE",
            question: "What is the main purpose of a compiler's symbol table?",
            options: [
                "Store identifiers and their attributes",
                "Store generated machine code",
                "Allocate main memory",
                "Handle hardware interrupts"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "In an operating system, what is 'thrashing'?",
            options: [
                "Excessive paging that leaves little CPU time for work",
                "Deleting unused files automatically",
                "Running two operating systems at once",
                "A type of disk defragmentation"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "Which SQL command is a DDL (Data Definition Language) statement?",
            options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
            answer: 2
        },
        {
            subject: "CSE",
            question: "What is the time complexity of building a binary heap from n elements (heapify)?",
            options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
            answer: 0
        },
        {
            subject: "CSE",
            question: "Which traversal of a Binary Search Tree visits nodes in sorted (ascending) order?",
            options: ["Preorder", "Inorder", "Postorder", "Level order"],
            answer: 1
        },
        {
            subject: "CSE",
            question: "In ACID properties of databases, what does the 'I' stand for?",
            options: ["Integrity", "Isolation", "Independence", "Indexing"],
            answer: 1
        },
        {
            subject: "CSE",
            question: "Which TCP mechanisms provide reliable, ordered data delivery?",
            options: [
                "Sequence numbers and acknowledgements",
                "Broadcasting and multicasting",
                "DNS resolution only",
                "Port forwarding"
            ],
            answer: 0
        },

        // ---------------- ECE: Electronics & Communication ----------------
        {
            subject: "ECE",
            question: "How many flip-flops are required to build a MOD-10 counter?",
            options: ["3", "4", "5", "10"],
            answer: 1
        },
        {
            subject: "ECE",
            question: "A MOD-16 ripple counter is built using how many flip-flops?",
            options: ["4", "8", "16", "2"],
            answer: 0
        },
        {
            subject: "ECE",
            question: "How many distinct states does a 4-bit binary counter have?",
            options: ["4", "8", "16", "32"],
            answer: 2
        },
        {
            subject: "ECE",
            question: "Which flip-flop eliminates the invalid state found in a basic SR latch?",
            options: ["D flip-flop", "JK flip-flop", "T flip-flop", "SR flip-flop"],
            answer: 1
        },
        {
            subject: "ECE",
            question: "According to the Nyquist theorem, the minimum sampling rate for a signal with a maximum frequency of 4 kHz is:",
            options: ["2 kHz", "4 kHz", "8 kHz", "16 kHz"],
            answer: 2
        },
        {
            subject: "ECE",
            question: "What is the output of an XOR gate when both inputs are 1?",
            options: ["0", "1", "High impedance", "Undefined"],
            answer: 0
        },
        {
            subject: "ECE",
            question: "Which modulation scheme varies the amplitude of the carrier signal?",
            options: ["AM", "FM", "PM", "PWM"],
            answer: 0
        },
        {
            subject: "ECE",
            question: "In a half adder, the SUM output is produced by which logic gate?",
            options: ["AND", "OR", "XOR", "NAND"],
            answer: 2
        },
        {
            subject: "ECE",
            question: "The Boolean expression A + A'B simplifies to:",
            options: ["A", "B", "A + B", "AB"],
            answer: 2
        },
        {
            subject: "ECE",
            question: "The bandwidth of an AM signal with message bandwidth fm is:",
            options: ["fm", "2fm", "3fm", "fm / 2"],
            answer: 1
        },
        {
            subject: "ECE",
            question: "Which device converts alternating current (AC) into direct current (DC)?",
            options: ["Rectifier", "Inverter", "Transformer", "Oscillator"],
            answer: 0
        },
        {
            subject: "ECE",
            question: "How many unique states does a 3-bit Gray code counter have?",
            options: ["3", "6", "8", "16"],
            answer: 2
        },
        {
            subject: "ECE",
            question: "What is the main advantage of a synchronous counter over an asynchronous (ripple) counter?",
            options: [
                "It uses fewer flip-flops",
                "It has no cumulative propagation delay",
                "It is always cheaper",
                "It needs no clock"
            ],
            answer: 1
        },
        {
            subject: "ECE",
            question: "A multiplexer with 3 select lines can select how many input channels?",
            options: ["3", "6", "8", "16"],
            answer: 2
        },

        // ---------------- EEE: Electrical & Electronics Engineering ----------------
        {
            subject: "EEE",
            question: "In a purely inductive AC circuit, the current lags the voltage by:",
            options: ["0°", "45°", "90°", "180°"],
            answer: 2
        },
        {
            subject: "EEE",
            question: "What is the power factor of a purely resistive circuit?",
            options: ["0", "0.5", "1", "Infinite"],
            answer: 2
        },
        {
            subject: "EEE",
            question: "Kirchhoff's Current Law is based on the conservation of:",
            options: ["Energy", "Charge", "Momentum", "Mass"],
            answer: 1
        },
        {
            subject: "EEE",
            question: "The time constant (τ) of a series RC circuit is given by:",
            options: ["R × C", "R / C", "C / R", "1 / (R × C)"],
            answer: 0
        },
        {
            subject: "EEE",
            question: "A transformer works on the principle of:",
            options: ["Self induction", "Mutual induction", "Electrostatics", "Thermoelectricity"],
            answer: 1
        },
        {
            subject: "EEE",
            question: "In a 3-phase star (Y) connection, the line voltage equals the phase voltage multiplied by:",
            options: ["1", "√2", "√3", "3"],
            answer: 2
        },
        {
            subject: "EEE",
            question: "What is the synchronous speed of a 4-pole induction motor at 50 Hz?",
            options: ["750 rpm", "1440 rpm", "1500 rpm", "3000 rpm"],
            answer: 2
        },
        {
            subject: "EEE",
            question: "What is the SI unit of magnetic flux?",
            options: ["Tesla", "Weber", "Henry", "Gauss"],
            answer: 1
        },
        {
            subject: "EEE",
            question: "In a series RLC circuit at resonance, the impedance is:",
            options: [
                "Maximum",
                "Minimum and purely resistive",
                "Zero",
                "Infinite"
            ],
            answer: 1
        },
        {
            subject: "EEE",
            question: "Thevenin's theorem replaces a linear network with:",
            options: [
                "A voltage source in series with a resistance",
                "A current source in parallel with a resistance",
                "Two independent voltage sources",
                "A single resistor only"
            ],
            answer: 0
        },
        {
            subject: "EEE",
            question: "Real power in a single-phase AC circuit is given by:",
            options: ["V × I", "V × I × cos φ", "V × I × sin φ", "V / I"],
            answer: 1
        },
        {
            subject: "EEE",
            question: "The RMS value of a sinusoidal voltage with peak value Vm is:",
            options: ["Vm / 2", "Vm / √2", "Vm", "2 × Vm"],
            answer: 1
        },
        {
            subject: "EEE",
            question: "Which of these is a passive electronic component?",
            options: ["Transistor", "Diode", "Resistor", "Op-Amp"],
            answer: 2
        },
        {
            subject: "EEE",
            question: "The average real power consumed by a purely reactive circuit is:",
            options: ["Maximum", "Zero", "Equal to V × I", "Infinite"],
            answer: 1
        },

        // ---------------- MECH: Mechanical Engineering ----------------
        {
            subject: "MECH",
            question: "In a four-stroke IC engine, how many crankshaft revolutions complete one cycle?",
            options: ["1", "2", "3", "4"],
            answer: 1
        },
        {
            subject: "MECH",
            question: "Which thermodynamic cycle is used in steam power plants?",
            options: ["Otto cycle", "Diesel cycle", "Rankine cycle", "Brayton cycle"],
            answer: 2
        },
        {
            subject: "MECH",
            question: "What is the approximate value of the universal gas constant R?",
            options: ["8.314 J/mol·K", "0.287 J/kg·K", "9.81 m/s²", "1.38 × 10⁻²³ J/K"],
            answer: 0
        },
        {
            subject: "MECH",
            question: "The ratio of stress to strain within the elastic limit is called:",
            options: ["Poisson's ratio", "Young's modulus", "Bulk modulus", "Shear modulus"],
            answer: 1
        },
        {
            subject: "MECH",
            question: "For a simply supported beam with a central point load, the maximum bending moment occurs at:",
            options: ["The supports", "The centre", "Both ends", "Quarter span"],
            answer: 1
        },
        {
            subject: "MECH",
            question: "The first law of thermodynamics is a statement of the conservation of:",
            options: ["Mass", "Momentum", "Energy", "Entropy"],
            answer: 2
        },
        {
            subject: "MECH",
            question: "In a Rankine cycle, the working fluid is:",
            options: ["Air", "Water / steam", "Refrigerant", "Nitrogen"],
            answer: 1
        },
        {
            subject: "MECH",
            question: "Which type of gear is used to connect two parallel shafts?",
            options: ["Bevel gear", "Spur gear", "Worm gear", "Hypoid gear"],
            answer: 1
        },
        {
            subject: "MECH",
            question: "The efficiency of a Carnot engine depends only on:",
            options: [
                "The working substance",
                "The source and sink temperatures",
                "The pressure",
                "The volume"
            ],
            answer: 1
        },
        {
            subject: "MECH",
            question: "In manufacturing, what does 'CNC' stand for?",
            options: [
                "Computer Numerical Control",
                "Central Numeric Code",
                "Computer Network Control",
                "Controlled Numeric Cutting"
            ],
            answer: 0
        },
        {
            subject: "MECH",
            question: "Poisson's ratio for most metals lies approximately in the range:",
            options: ["0 to 0.1", "0.25 to 0.35", "0.5 to 0.7", "0.9 to 1.1"],
            answer: 1
        },
        {
            subject: "MECH",
            question: "Which cycle models the ideal petrol (spark-ignition) engine?",
            options: ["Otto cycle", "Diesel cycle", "Rankine cycle", "Brayton cycle"],
            answer: 0
        },
        {
            subject: "MECH",
            question: "In a diesel engine, ignition of the fuel occurs due to:",
            options: [
                "A spark plug",
                "High temperature from compression",
                "A battery discharge",
                "An electric glow arc"
            ],
            answer: 1
        },
        {
            subject: "MECH",
            question: "How many degrees of freedom does a rigid body have in 3D space?",
            options: ["3", "4", "6", "9"],
            answer: 2
        },

        // =========================================================
        // EXPANDED SET - more questions in every subject
        // =========================================================

        // ---------------- Technology (expanded) ----------------
        {
            subject: "Technology",
            question: "What does \"GPU\" stand for?",
            options: [
                "Graphics Processing Unit",
                "General Processing Unit",
                "Grid Program Utility",
                "Graphical Power Unit"
            ],
            answer: 0
        },
        {
            subject: "Technology",
            question: "Which service translates human-readable domain names into IP addresses?",
            options: ["DHCP", "DNS", "FTP", "SMTP"],
            answer: 1
        },
        {
            subject: "Technology",
            question: "What does \"SSD\" stand for in storage?",
            options: [
                "Secure System Disk",
                "Standard Storage Device",
                "Solid State Drive",
                "Serial Static Drive"
            ],
            answer: 2
        },
        {
            subject: "Technology",
            question: "Which HTTP status code means the requested resource was not found?",
            options: ["200", "301", "500", "404"],
            answer: 3
        },
        {
            subject: "Technology",
            question: "What does \"SQL\" stand for?",
            options: [
                "Standard Query Logic",
                "Structured Query Language",
                "Sequential Query Layer",
                "Simple Query Language"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which tool is a distributed version control system?",
            options: ["Git", "Docker", "Nginx", "Redis"],
            answer: 0
        },

        // ---------------- Science (expanded) ----------------
        {
            subject: "Science",
            question: "What is the approximate speed of light in a vacuum?",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"],
            answer: 0
        },
        {
            subject: "Science",
            question: "Who proposed the theory of general relativity?",
            options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
            answer: 2
        },
        {
            subject: "Science",
            question: "Which is the most abundant element in the universe?",
            options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
            answer: 1
        },
        {
            subject: "Science",
            question: "Which blood type is known as the universal donor?",
            options: ["AB+", "A-", "O-", "B+"],
            answer: 2
        },
        {
            subject: "Science",
            question: "Which planet is the hottest in the solar system?",
            options: ["Mercury", "Mars", "Jupiter", "Venus"],
            answer: 3
        },
        {
            subject: "Science",
            question: "What is the pH of a neutral solution at 25 °C?",
            options: ["7", "1", "14", "0"],
            answer: 0
        },

        // ---------------- Mathematics (expanded) ----------------
        {
            subject: "Mathematics",
            question: "What is the determinant of the 2×2 identity matrix?",
            options: ["0", "1", "2", "-1"],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "What is the integral of 1/x with respect to x?",
            options: ["ln|x| + C", "x + C", "1/x² + C", "-1/x + C"],
            answer: 0
        },
        {
            subject: "Mathematics",
            question: "How many faces does a cube have?",
            options: ["4", "8", "6", "12"],
            answer: 2
        },
        {
            subject: "Mathematics",
            question: "What is log₁₀(1000)?",
            options: ["2", "10", "100", "3"],
            answer: 3
        },
        {
            subject: "Mathematics",
            question: "The sum of the first n natural numbers is:",
            options: ["n(n+1)/2", "n²", "n(n−1)/2", "2n"],
            answer: 0
        },
        {
            subject: "Mathematics",
            question: "What is the probability of getting heads on a single fair coin toss?",
            options: ["1/4", "1/2", "1", "0"],
            answer: 1
        },

        // ---------------- General Knowledge (expanded) ----------------
        {
            subject: "General Knowledge",
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "Thailand", "South Korea"],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "What is the national bird of India?",
            options: ["Eagle", "Parrot", "Peacock", "Swan"],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which is the largest mammal in the world?",
            options: ["African elephant", "Giraffe", "Hippopotamus", "Blue whale"],
            answer: 3
        },
        {
            subject: "General Knowledge",
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Perth"],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "How many colors are traditionally said to be in a rainbow?",
            options: ["5", "6", "7", "8"],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            answer: 1
        },

        // ---------------- History (expanded) ----------------
        {
            subject: "History",
            question: "Who was the first Prime Minister of India?",
            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
            answer: 1
        },
        {
            subject: "History",
            question: "In which year did India gain independence?",
            options: ["1945", "1950", "1947", "1930"],
            answer: 2
        },
        {
            subject: "History",
            question: "Who led the voyage that reached the Americas in 1492?",
            options: [
                "Vasco da Gama",
                "Ferdinand Magellan",
                "Amerigo Vespucci",
                "Christopher Columbus"
            ],
            answer: 3
        },
        {
            subject: "History",
            question: "The Renaissance began in which country?",
            options: ["Italy", "France", "England", "Spain"],
            answer: 0
        },
        {
            subject: "History",
            question: "Which empire was founded by Genghis Khan?",
            options: ["Ottoman Empire", "Mongol Empire", "Persian Empire", "Roman Empire"],
            answer: 1
        },
        {
            subject: "History",
            question: "In which year did World War I begin?",
            options: ["1912", "1918", "1914", "1920"],
            answer: 2
        },

        // ---------------- CSE (expanded) ----------------
        {
            subject: "CSE",
            question: "Which sorting algorithm is stable with O(n log n) worst-case time?",
            options: ["Quicksort", "Heapsort", "Merge sort", "Selection sort"],
            answer: 2
        },
        {
            subject: "CSE",
            question: "Which of these is NOT a relational database?",
            options: ["PostgreSQL", "MySQL", "Oracle", "MongoDB"],
            answer: 3
        },
        {
            subject: "CSE",
            question: "Which data structure does BFS use to traverse a graph?",
            options: ["Stack", "Queue", "Heap", "Set"],
            answer: 1
        },
        {
            subject: "CSE",
            question: "In public-key cryptography, which key encrypts a message to a recipient?",
            options: [
                "The recipient's private key",
                "The sender's private key",
                "The recipient's public key",
                "A shared password"
            ],
            answer: 2
        },
        {
            subject: "CSE",
            question: "What does the 'A' in the CAP theorem stand for?",
            options: ["Atomicity", "Availability", "Authentication", "Aggregation"],
            answer: 1
        },
        {
            subject: "CSE",
            question: "What is the main purpose of a page table in virtual memory?",
            options: [
                "To map virtual addresses to physical addresses",
                "To store file contents",
                "To compress data",
                "To schedule threads"
            ],
            answer: 0
        },

        // ---------------- ECE (expanded) ----------------
        {
            subject: "ECE",
            question: "What is the binary equivalent of the decimal number 13?",
            options: ["1011", "1101", "1110", "1001"],
            answer: 1
        },
        {
            subject: "ECE",
            question: "A MOD-12 counter counts through states 0 to:",
            options: ["12", "10", "11", "9"],
            answer: 2
        },
        {
            subject: "ECE",
            question: "With J = 1 and K = 1, a JK flip-flop on a clock edge will:",
            options: ["Hold its state", "Reset to 0", "Set to 1", "Toggle its output"],
            answer: 3
        },
        {
            subject: "ECE",
            question: "How many select lines does a 16:1 multiplexer require?",
            options: ["2", "4", "8", "16"],
            answer: 1
        },
        {
            subject: "ECE",
            question: "Which logic gate is called a universal gate?",
            options: ["AND", "OR", "NAND", "XOR"],
            answer: 2
        },
        {
            subject: "ECE",
            question: "What does a full adder have that a half adder does not?",
            options: ["A sum output", "A carry input", "Two AND gates", "An XOR gate"],
            answer: 1
        },

        // ---------------- EEE (expanded) ----------------
        {
            subject: "EEE",
            question: "What is the SI unit of electrical resistance?",
            options: ["Volt", "Ohm", "Ampere", "Watt"],
            answer: 1
        },
        {
            subject: "EEE",
            question: "In a parallel circuit, which quantity is the same across every branch?",
            options: ["Current", "Resistance", "Voltage", "Power"],
            answer: 2
        },
        {
            subject: "EEE",
            question: "What is the SI unit of capacitance?",
            options: ["Henry", "Coulomb", "Ohm", "Farad"],
            answer: 3
        },
        {
            subject: "EEE",
            question: "A diode normally allows current to flow in:",
            options: ["One direction only", "Both directions", "No direction", "Alternating cycles"],
            answer: 0
        },
        {
            subject: "EEE",
            question: "Which law states that V = I × R?",
            options: ["Faraday's law", "Ohm's law", "Lenz's law", "Coulomb's law"],
            answer: 1
        },
        {
            subject: "EEE",
            question: "What is the time period of a 50 Hz AC supply?",
            options: ["0.02 s", "0.05 s", "0.2 s", "0.5 s"],
            answer: 0
        },

        // ---------------- MECH (expanded) ----------------
        {
            subject: "MECH",
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Pascal", "Watt"],
            answer: 1
        },
        {
            subject: "MECH",
            question: "Which of these is a vector quantity?",
            options: ["Mass", "Temperature", "Velocity", "Speed"],
            answer: 2
        },
        {
            subject: "MECH",
            question: "Which material property describes resistance to being scratched?",
            options: ["Ductility", "Malleability", "Toughness", "Hardness"],
            answer: 3
        },
        {
            subject: "MECH",
            question: "The second law of thermodynamics states that the entropy of an isolated system tends to:",
            options: ["Decrease", "Increase", "Stay exactly constant", "Become zero"],
            answer: 1
        },
        {
            subject: "MECH",
            question: "What is the SI unit of pressure?",
            options: ["Newton", "Joule", "Pascal", "Watt"],
            answer: 2
        },
        {
            subject: "MECH",
            question: "Mechanical advantage is the ratio of:",
            options: [
                "Output force to input force",
                "Input force to output force",
                "Output distance to input distance",
                "Work to time"
            ],
            answer: 0
        }
    ];

    // Give every question a stable id so we can avoid repeats in a run.
    var QUESTION_BANK = RAW.map(function (q, index) {
        return {
            id: index,
            subject: q.subject,
            question: q.question,
            options: q.options.slice(),
            answer: q.answer
        };
    });

    // ---------------------------------------------------------
    // Validate the bank (helps catch typos when adding questions)
    // ---------------------------------------------------------
    QUESTION_BANK.forEach(function (q) {

        var uniqueOptions = new Set(q.options);

        if (q.options.length !== 4 || uniqueOptions.size !== 4) {
            console.warn("[BrainQuest] Question does not have 4 unique options:", q);
        }

        if (q.answer < 0 || q.answer > 3) {
            console.warn("[BrainQuest] Question answer index out of range:", q);
        }

        if (SUBJECTS.indexOf(q.subject) === -1) {
            console.warn("[BrainQuest] Unknown subject:", q.subject);
        }

    });

    window.BrainQuest = window.BrainQuest || {};

    window.BrainQuest.SUBJECTS = SUBJECTS;
    window.BrainQuest.QUESTION_BANK = QUESTION_BANK;

})();
