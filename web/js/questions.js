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
        },
        {
            subject: "History",
            question: "The Kalinga War, which deeply influenced Ashoka to embrace Buddhism, was fought in which year?",
            options: [
                "321 BCE"
,                "261 BCE"
,                "232 BCE"
,                "185 BCE"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Brahmi script found on Ashoka's inscriptions was first deciphered in 1837 by which scholar?",
            options: [
                "William Jones"
,                "Alexander Cunningham"
,                "James Prinsep"
,                "John Marshall"
            ],
            answer: 2
        },
        {
            subject: "History",
            question: "The Greek ambassador Megasthenes, author of Indica, identified 'Sandrocottus' with which Indian ruler?",
            options: [
                "Bindusara"
,                "Chandragupta Maurya"
,                "Ashoka"
,                "Chandragupta I"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The first Buddhist council was held at Rajgriha under the patronage of which ruler?",
            options: [
                "Ajatashatru"
,                "Bimbisara"
,                "Kalashoka"
,                "Ashoka"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "Which Buddhist council, held in Kashmir during the reign of Kanishka, is regarded as the fourth council?",
            options: [
                "The First Buddhist Council"
,                "The Second Buddhist Council"
,                "The Third Buddhist Council"
,                "The Fourth Buddhist Council"
            ],
            answer: 3
        },
        {
            subject: "History",
            question: "The Nasik prasasti (inscription) records the achievements of which Satavahana ruler?",
            options: [
                "Satakarni I"
,                "Gautamiputra Satakarni"
,                "Hala"
,                "Pulumavi"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Hathigumpha inscription of Kalinga refers to which king of the Chedi dynasty?",
            options: [
                "Kharavela"
,                "Rudradaman I"
,                "Pravara Sena"
,                "Kadphises I"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "The Allahabad (Prayag) pillar inscription is a prasasti composed by Harisena in praise of which ruler?",
            options: [
                "Chandragupta I"
,                "Samudragupta"
,                "Skandagupta"
,                "Kumaragupta"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "Where did the Buddha deliver his first sermon, the Dhammachakkappavattana, to his five disciples?",
            options: [
                "Sarnath (Isipatana)"
,                "Bodh Gaya"
,                "Lumbini"
,                "Shravasti"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "The Gayatri Mantra of the Rigveda is addressed to which deity?",
            options: [
                "Agni"
,                "Indra"
,                "Varuna"
,                "Savitri (the Sun-god)"
            ],
            answer: 3
        },
        {
            subject: "History",
            question: "In the Chola system of local self-government, the village assembly of the Brahmin-dominated villages was known as?",
            options: [
                "Sabha"
,                "Ur"
,                "Nagaram"
,                "Gana"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "Which Delhi sultan is said to have died in 1210 while playing chaugan (polo) at Lahore?",
            options: [
                "Iltutmish"
,                "Qutb-ud-din Aibak"
,                "Balban"
,                "Razia"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "Which Delhi sultan introduced the silver tanka and the copper jital as standard coins of the sultanate?",
            options: [
                "Qutb-ud-din Aibak"
,                "Razia"
,                "Iltutmish"
,                "Alauddin Khalji"
            ],
            answer: 2
        },
        {
            subject: "History",
            question: "Which Delhi sultan is famous for his policy of 'blood and iron' to crush the power of the nobles?",
            options: [
                "Balban"
,                "Muhammad bin Tughlaq"
,                "Firoz Shah Tughlaq"
,                "Alauddin Khalji"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "The experiment with token (bronze) currency, which ended in failure, was undertaken by which sultan?",
            options: [
                "Alauddin Khalji"
,                "Firoz Shah Tughlaq"
,                "Muhammad bin Tughlaq"
,                "Balban"
            ],
            answer: 2
        },
        {
            subject: "History",
            question: "The Alai Darwaza, regarded as an early masterpiece of Indo-Islamic architecture using the true arch and dome, was built by?",
            options: [
                "Qutb-ud-din Aibak"
,                "Iltutmish"
,                "Alauddin Khalji"
,                "Firoz Shah Tughlaq"
            ],
            answer: 2
        },
        {
            subject: "History",
            question: "The Battle of Talikota (1565), which led to the downfall of the Vijayanagara empire, was fought against an alliance of which powers?",
            options: [
                "The Bahmani successor kingdoms"
,                "The Mughal empire"
,                "The Portuguese of Goa"
,                "The Hoysalas of Dwarasamudra"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "Krishnadevaraya, the greatest ruler of Vijayanagara and author of Amuktamalyada, belonged to which dynasty?",
            options: [
                "Sangama dynasty"
,                "Saluva dynasty"
,                "Tuluva dynasty"
,                "Aravidu dynasty"
            ],
            answer: 2
        },
        {
            subject: "History",
            question: "Mahmud Gawan, whose famous madrasa still stands at Bidar, was the prime minister of which kingdom?",
            options: [
                "Vijayanagara"
,                "Bahmani kingdom"
,                "Ahmadnagar"
,                "Golconda"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "Which Sikh guru compiled the Adi Granth and completed the construction of the Harmandir Sahib at Amritsar?",
            options: [
                "Guru Angad"
,                "Guru Ram Das"
,                "Guru Arjan"
,                "Guru Hargobind"
            ],
            answer: 2
        },
        {
            subject: "History",
            question: "The poet and musician Amir Khusrau was a disciple of which Sufi saint?",
            options: [
                "Moinuddin Chishti"
,                "Nizamuddin Auliya"
,                "Baba Farid"
,                "Salim Chishti"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "In the First Battle of Panipat (1526), Babur defeated which ruler?",
            options: [
                "Rana Sanga"
,                "Sher Shah Suri"
,                "Ibrahim Lodi"
,                "Medini Rai"
            ],
            answer: 2
        },
        {
            subject: "History",
            question: "The Regulating Act of 1773 appointed which official as the first Governor-General of Fort William in Bengal?",
            options: [
                "Warren Hastings"
,                "Robert Clive"
,                "Lord Cornwallis"
,                "Lord William Bentinck"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "The Permanent Settlement of 1793, which fixed the land revenue of Bengal, was introduced by which Governor-General?",
            options: [
                "Lord Wellesley"
,                "Lord Cornwallis"
,                "Lord Ripon"
,                "Lord Dalhousie"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "Which Governor-General adopted the Doctrine of Lapse to annex several Indian states?",
            options: [
                "Lord Canning"
,                "Lord Dalhousie"
,                "Lord Curzon"
,                "Lord Dufferin"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Ilbert Bill controversy of 1883, which provoked the European community, occurred during the viceroyalty of which Viceroy?",
            options: [
                "Lord Lytton"
,                "Lord Ripon"
,                "Lord Dufferin"
,                "Lord Lansdowne"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "Which constitutional reform of 1909 introduced separate electorates for Muslims in British India?",
            options: [
                "Indian Councils Act 1892"
,                "Morley-Minto Reforms 1909"
,                "Montagu-Chelmsford Reforms 1919"
,                "Government of India Act 1935"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Partition of Bengal in 1905 was carried out by which Viceroy?",
            options: [
                "Lord Minto"
,                "Lord Hardinge"
,                "Lord Curzon"
,                "Lord Ripon"
            ],
            answer: 2
        },
        {
            subject: "History",
            question: "Who presided over the first session of the Indian National Congress held in Bombay in 1885?",
            options: [
                "Dadabhai Naoroji"
,                "W.C. Bonnerjee"
,                "Surendranath Banerjee"
,                "A.O. Hume"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Congress split into Moderates and Extremists at which session?",
            options: [
                "Calcutta session (1906)"
,                "Surat session (1907)"
,                "Benares session (1905)"
,                "Lucknow session (1916)"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "Which Congress session saw the reunion of Moderates and Extremists and concluded a pact with the Muslim League?",
            options: [
                "Calcutta session (1906)"
,                "Lucknow session (1916)"
,                "Lahore session (1929)"
,                "Nagpur session (1920)"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "Which committee was appointed by the British government to inquire into the Jallianwala Bagh massacre?",
            options: [
                "Simon Committee"
,                "Hunter Committee"
,                "Cripps Committee"
,                "Wavell Commission"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "Indians boycotted the Simon Commission of 1927-28 mainly because it?",
            options: [
                "had no Indian member"
,                "opposed provincial autonomy"
,                "was headed by the Viceroy"
,                "was sent to impose fresh taxes"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "The Nehru Report of 1928, which outlined a constitution for India, was prepared under the chairmanship of whom?",
            options: [
                "Motilal Nehru"
,                "M.A. Jinnah"
,                "Tej Bahadur Sapru"
,                "C.R. Das"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "Who presided over the Lahore session of 1929 in which the Purna Swaraj resolution was adopted?",
            options: [
                "Jawaharlal Nehru"
,                "Motilal Nehru"
,                "Sarojini Naidu"
,                "Vallabhbhai Patel"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "The Dandi Salt March, which launched the Civil Disobedience Movement, began on which date?",
            options: [
                "6 April 1930"
,                "12 March 1930"
,                "5 February 1922"
,                "26 January 1930"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Gandhi-Irwin Pact of March 1931 was signed between Mahatma Gandhi and which Viceroy?",
            options: [
                "Lord Chelmsford"
,                "Lord Irwin"
,                "Lord Reading"
,                "Lord Linlithgow"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Cripps Mission of 1942 offered Indians, as a post-war constitutional settlement,?",
            options: [
                "complete independence immediately"
,                "a dominion status with the right to secede"
,                "a federal union with no right to secede"
,                "continuation of the existing system"
            ],
            answer: 1
        },
        {
            subject: "History",
            question: "The Quit India resolution was adopted by the All-India Congress Committee at its Bombay session on which date?",
            options: [
                "8 August 1942"
,                "9 August 1942"
,                "22 July 1942"
,                "15 August 1942"
            ],
            answer: 0
        },
        {
            subject: "History",
            question: "Which of the following was a member of the Cabinet Mission that arrived in India in 1946?",
            options: [
                "Pethick-Lawrence"
,                "Lord Wavell"
,                "Lord Linlithgow"
,                "Lord Irwin"
            ],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Indian Constitution abolishes untouchability and forbids its practice?",
            options: [
                "Article 14"
,                "Article 15"
,                "Article 17"
,                "Article 21"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Constitution is described by Dr. B.R. Ambedkar as the 'heart and soul' of the Constitution?",
            options: [
                "Article 19"
,                "Article 21"
,                "Article 30"
,                "Article 32"
            ],
            answer: 3
        },
        {
            subject: "General Knowledge",
            question: "The Right to Constitutional Remedies, which allows citizens to move the Supreme Court under Article 32, falls under which Part of the Constitution?",
            options: [
                "Part II"
,                "Part III"
,                "Part IV"
,                "Part V"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Constitution guarantees freedom of speech and expression?",
            options: [
                "Article 19(1)(a)"
,                "Article 19(1)(b)"
,                "Article 20"
,                "Article 21"
            ],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "The Directive Principles of State Policy are contained in which Articles of the Constitution?",
            options: [
                "Articles 12 to 35"
,                "Articles 36 to 51"
,                "Articles 68 to 80"
,                "Articles 148 to 151"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Constitution empowers Parliament to amend the Constitution by way of addition, variation or repeal?",
            options: [
                "Article 13"
,                "Article 32"
,                "Article 360"
,                "Article 368"
            ],
            answer: 3
        },
        {
            subject: "General Knowledge",
            question: "Which Amendment to the Constitution, passed in 1976, is often referred to as a 'mini-constitution' because of the large number of changes it introduced?",
            options: [
                "42nd Amendment"
,                "44th Amendment"
,                "52nd Amendment"
,                "73rd Amendment"
            ],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "Which Amendment to the Constitution gave constitutional status to Panchayati Raj institutions?",
            options: [
                "72nd Amendment"
,                "73rd Amendment"
,                "74th Amendment"
,                "86th Amendment"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Under which Article of the Constitution can the President impose President's Rule in a State on the report of the Governor?",
            options: [
                "Article 352"
,                "Article 356"
,                "Article 360"
,                "Article 365"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Constitution deals with the declaration of a National Emergency?",
            options: [
                "Article 352"
,                "Article 356"
,                "Article 360"
,                "Article 368"
            ],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "A Financial Emergency can be declared under which Article of the Constitution?",
            options: [
                "Article 352"
,                "Article 356"
,                "Article 360"
,                "Article 368"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Constitution provides for the establishment of the Finance Commission?",
            options: [
                "Article 280"
,                "Article 281"
,                "Article 312"
,                "Article 324"
            ],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Constitution deals with the power of Parliament to create All India Services?",
            options: [
                "Article 123"
,                "Article 263"
,                "Article 308"
,                "Article 312"
            ],
            answer: 3
        },
        {
            subject: "General Knowledge",
            question: "The Election Commission of India is established under which Article of the Constitution?",
            options: [
                "Article 315"
,                "Article 320"
,                "Article 324"
,                "Article 340"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Constitution defines a Money Bill?",
            options: [
                "Article 108"
,                "Article 110"
,                "Article 112"
,                "Article 123"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Judicial review of laws is implied in the Constitution primarily under which Article?",
            options: [
                "Article 13"
,                "Article 14"
,                "Article 32"
,                "Article 226"
            ],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "The power of granting pardons, reprieves and remissions rests with the President under which Article of the Constitution?",
            options: [
                "Article 61"
,                "Article 72"
,                "Article 143"
,                "Article 161"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Which Article of the Constitution makes the Uniform Civil Code a Directive Principle of State Policy?",
            options: [
                "Article 39"
,                "Article 44"
,                "Article 48"
,                "Article 51"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Which Amendment to the Constitution is known for shifting the ground of declaring an Internal Emergency from 'internal disturbance' to 'armed rebellion'?",
            options: [
                "42nd Amendment"
,                "44th Amendment"
,                "52nd Amendment"
,                "61st Amendment"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Under the Constitution, residuary powers of legislation vest in which list of the Seventh Schedule?",
            options: [
                "Union List"
,                "State List"
,                "Concurrent List"
,                "Residuary List of the States"
            ],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "The Reserve Bank of India was established in which year?",
            options: [
                "1930"
,                "1935"
,                "1947"
,                "1949"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The repo rate is best described as the rate at which:",
            options: [
                "Commercial banks lend to the general public"
,                "The RBI lends short-term funds to commercial banks against securities"
,                "Commercial banks park surplus funds with the RBI"
,                "The RBI lends long-term funds to state governments"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Cash Reserve Ratio (CRR) refers to the portion of a bank's deposits that must be:",
            options: [
                "Invested in government securities"
,                "Maintained as liquid cash with the RBI"
,                "Held as gold or Special Drawing Rights"
,                "Lent to priority sector borrowers"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The Monetary Policy Committee (MPC) of India, constituted in 2016, has how many members?",
            options: [
                "5"
,                "6"
,                "7"
,                "8"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The inflation target set for the Reserve Bank of India under the RBI Act is:",
            options: [
                "6% with a tolerance band of ±2%"
,                "5% with a tolerance band of ±1%"
,                "4% with a tolerance band of ±2%"
,                "3% with a tolerance band of ±1%"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "NITI Aayog was created by replacing which body?",
            options: [
                "Finance Commission"
,                "Planning Commission"
,                "National Development Council"
,                "Inter-State Council"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Fiscal deficit of the Union Government is defined as:",
            options: [
                "Revenue expenditure minus revenue receipts"
,                "Total expenditure minus total receipts excluding borrowings"
,                "Total expenditure minus revenue receipts"
,                "Revenue deficit plus interest payments"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The Goods and Services Tax (GST) was introduced in India on which date?",
            options: [
                "1 April 2016"
,                "1 January 2017"
,                "1 July 2017"
,                "1 April 2018"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which Amendment to the Constitution paved the way for the introduction of GST in India?",
            options: [
                "99th Amendment"
,                "100th Amendment"
,                "101st Amendment"
,                "102nd Amendment"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "MGNREGA, which guarantees wage employment in rural areas, was enacted in which year?",
            options: [
                "2001"
,                "2004"
,                "2005"
,                "2006"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which committee's methodology, based on consumption expenditure, is most commonly used for poverty estimation in India?",
            options: [
                "Rangarajan Committee"
,                "Tendulkar Committee"
,                "Narasimham Committee"
,                "Kelkar Committee"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "NABARD, the apex institution for agricultural and rural credit in India, was established in which year?",
            options: [
                "1975"
,                "1982"
,                "1988"
,                "1992"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The Securities and Exchange Board of India (SEBI) was given statutory powers under an Act of Parliament in which year?",
            options: [
                "1988"
,                "1992"
,                "1995"
,                "1999"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The Pradhan Mantri Jan Dhan Yojana, launched in 2014, is primarily aimed at:",
            options: [
                "Providing crop insurance to farmers"
,                "Ensuring access to basic banking services and financial inclusion"
,                "Promoting housing for the urban poor"
,                "Supplying LPG connections to poor households"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The current account of the Balance of Payments includes:",
            options: [
                "Foreign direct investment inflows"
,                "Portfolio investment flows"
,                "Trade in goods and services along with unilateral transfers"
,                "Change in foreign exchange reserves"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "The longest river of peninsular India is the:",
            options: [
                "Krishna"
,                "Godavari"
,                "Narmada"
,                "Kaveri"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The black soil of the Deccan Plateau, ideal for cotton cultivation, is also locally known as:",
            options: [
                "Bhabar"
,                "Regur"
,                "Karewa"
,                "Bhangar"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The Tropic of Cancer passes through how many Indian states?",
            options: [
                "6"
,                "7"
,                "8"
,                "9"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which mountain range, regarded as one of the world's biodiversity hotspots, lies along the western edge of peninsular India?",
            options: [
                "Aravalli Range"
,                "Vindhyan Range"
,                "Western Ghats"
,                "Shiwalik Range"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "The Aravalli Hills are significant because they are:",
            options: [
                "The oldest fold mountains of India"
,                "The youngest fold mountains of India"
,                "A volcanic mountain range"
,                "Part of the Himalayan range system"
            ],
            answer: 0
        },
        {
            subject: "General Knowledge",
            question: "The Sundarbans delta is formed by which river system?",
            options: [
                "Godavari and Krishna"
,                "Narmada and Tapi"
,                "Ganga and Brahmaputra"
,                "Mahanadi and Brahmani"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "The Narmada river flows to the Arabian Sea through which type of valley?",
            options: [
                "V-shaped young valley"
,                "Rift valley"
,                "Deltaic estuary"
,                "U-shaped glacial valley"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The Deccan Traps of western India were formed by:",
            options: [
                "Sedimentary deposition in a shallow sea"
,                "Accumulation of glacial moraines"
,                "Solidification of basaltic lava flows"
,                "Fold mountain-building processes"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which of the following rivers originates near Nasik in Maharashtra and flows eastward into the Bay of Bengal?",
            options: [
                "Narmada"
,                "Godavari"
,                "Tapi"
,                "Sabarmati"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "Mawsynram in Meghalaya receives the highest average rainfall in the world largely because of:",
            options: [
                "The retreating northeast monsoon"
,                "Western disturbances from the Mediterranean"
,                "The funnelling of southwest monsoon winds by the Khasi hills"
,                "Proximity to the equatorial low-pressure belt year-round"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which soil type is most suitable for cultivation of tea and coffee and is common in Kerala and Karnataka?",
            options: [
                "Alluvial soil"
,                "Laterite soil"
,                "Desert soil"
,                "Peaty soil"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The rivers of the Himalayan origin are considered perennial because they are fed by:",
            options: [
                "Only monsoon rainfall"
,                "Only underground springs"
,                "Both snowmelt and monsoon rainfall"
,                "Equatorial rainfall throughout the year"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "The Great Barrier Reef, the world's largest coral reef system, lies off the coast of:",
            options: [
                "Brazil"
,                "Indonesia"
,                "Australia"
,                "South Africa"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "The Suez Canal connects the Mediterranean Sea with which other sea?",
            options: [
                "Black Sea"
,                "Red Sea"
,                "Arabian Sea"
,                "Caspian Sea"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "The 'Ring of Fire', a zone of frequent volcanoes and earthquakes, encircles which ocean?",
            options: [
                "Atlantic Ocean"
,                "Indian Ocean"
,                "Pacific Ocean"
,                "Arctic Ocean"
            ],
            answer: 2
        },
        {
            subject: "Science",
            question: "Which is the lightest element in the periodic table?",
            options: [
                "Helium"
,                "Hydrogen"
,                "Lithium"
,                "Carbon"
            ],
            answer: 1
        },
        {
            subject: "Science",
            question: "The U R Rao Satellite Centre, a major ISRO centre, is located in which city?",
            options: [
                "Thiruvananthapuram"
,                "Hyderabad"
,                "Bengaluru"
,                "Sriharikota"
            ],
            answer: 2
        },
        {
            subject: "Science",
            question: "The Chandrayaan-3 mission achieved a soft landing of the Vikram lander near which region of the Moon in August 2023?",
            options: [
                "Lunar north pole"
,                "Lunar south pole"
,                "Sea of Tranquillity"
,                "Far side equator"
            ],
            answer: 1
        },
        {
            subject: "Science",
            question: "Aditya-L1, India's first dedicated solar observatory mission, is placed in a halo orbit around which point?",
            options: [
                "Sun-Earth Lagrange point L1"
,                "Sun-Earth Lagrange point L2"
,                "Sun-Earth Lagrange point L4"
,                "Earth-Moon Lagrange point L1"
            ],
            answer: 0
        },
        {
            subject: "Science",
            question: "Which gas is most abundant in Earth's atmosphere by volume?",
            options: [
                "Oxygen"
,                "Carbon dioxide"
,                "Argon"
,                "Nitrogen"
            ],
            answer: 3
        },
        {
            subject: "Science",
            question: "Photosynthesis in plants primarily takes place in which cell organelle?",
            options: [
                "Mitochondrion"
,                "Ribosome"
,                "Chloroplast"
,                "Golgi apparatus"
            ],
            answer: 2
        },
        {
            subject: "Science",
            question: "The chemical symbol 'Au' stands for which element?",
            options: [
                "Silver"
,                "Gold"
,                "Aluminium"
,                "Argon"
            ],
            answer: 1
        },
        {
            subject: "Science",
            question: "What is the SI unit of electric current?",
            options: [
                "Volt"
,                "Ohm"
,                "Ampere"
,                "Watt"
            ],
            answer: 2
        },
        {
            subject: "Science",
            question: "Which of the following is a vector quantity?",
            options: [
                "Speed"
,                "Velocity"
,                "Temperature"
,                "Mass"
            ],
            answer: 1
        },
        {
            subject: "Science",
            question: "The phenomenon of bending of light as it passes from one medium to another is called:",
            options: [
                "Reflection"
,                "Diffraction"
,                "Polarisation"
,                "Refraction"
            ],
            answer: 3
        },
        {
            subject: "Science",
            question: "Which vitamin is synthesised in the human body on exposure to sunlight?",
            options: [
                "Vitamin A"
,                "Vitamin B12"
,                "Vitamin D"
,                "Vitamin C"
            ],
            answer: 2
        },
        {
            subject: "Science",
            question: "The powerhouse of the cell, where ATP is produced, is the:",
            options: [
                "Mitochondrion"
,                "Nucleus"
,                "Lysosome"
,                "Endoplasmic reticulum"
            ],
            answer: 0
        },
        {
            subject: "Science",
            question: "Insulin, a hormone regulating blood sugar, is secreted by which organ?",
            options: [
                "Liver"
,                "Thyroid"
,                "Adrenal gland"
,                "Pancreas"
            ],
            answer: 3
        },
        {
            subject: "Science",
            question: "Which of the following is the most electronegative element?",
            options: [
                "Oxygen"
,                "Fluorine"
,                "Chlorine"
,                "Nitrogen"
            ],
            answer: 1
        },
        {
            subject: "Science",
            question: "Rusting of iron is a chemical process best described as:",
            options: [
                "Reduction"
,                "Neutralisation"
,                "Oxidation"
,                "Saponification"
            ],
            answer: 2
        },
        {
            subject: "Science",
            question: "The most abundant greenhouse gas in Earth's atmosphere is:",
            options: [
                "Carbon dioxide"
,                "Methane"
,                "Nitrous oxide"
,                "Water vapour"
            ],
            answer: 3
        },
        {
            subject: "Science",
            question: "The Ramsar Convention is an international treaty for the conservation of:",
            options: [
                "Wetlands"
,                "Migratory birds"
,                "Forests"
,                "Deserts"
            ],
            answer: 0
        },
        {
            subject: "Science",
            question: "Project Tiger, launched in India in 1973, is aimed at the conservation of:",
            options: [
                "Lion"
,                "Elephant"
,                "Leopard"
,                "Tiger"
            ],
            answer: 3
        },
        {
            subject: "Science",
            question: "Which Indian biosphere reserve is located in the Nilgiri Hills and is part of UNESCO's World Network of Biosphere Reserves?",
            options: [
                "Nilgiri Biosphere Reserve"
,                "Nanda Devi Biosphere Reserve"
,                "Panna Biosphere Reserve"
,                "Similipal Biosphere Reserve"
            ],
            answer: 0
        },
        {
            subject: "Science",
            question: "The 'Coral Triangle', the global centre of marine biodiversity, lies in which ocean region?",
            options: [
                "North Atlantic"
,                "Mediterranean"
,                "Indo-Pacific"
,                "South Atlantic"
            ],
            answer: 2
        },
        {
            subject: "Science",
            question: "Satellite Launch Vehicle missions are undertaken by which Indian organisation?",
            options: [
                "DRDO"
,                "ISRO"
,                "BEL"
,                "BDL"
            ],
            answer: 1
        },
        {
            subject: "Science",
            question: "The LVM3 launch vehicle carried the Chandrayaan-3 spacecraft. What does LVM stand for?",
            options: [
                "Launch Vehicle Mark"
,                "Lunar Vehicle Module"
,                "Launch Vehicle Mission"
,                "Light Vehicle Module"
            ],
            answer: 0
        },
        {
            subject: "Science",
            question: "The Agni series of ballistic missiles is developed by which organisation?",
            options: [
                "ISRO"
,                "HAL"
,                "BDL"
,                "DRDO"
            ],
            answer: 3
        },
        {
            subject: "Science",
            question: "India's first nuclear research reactor, APSARA, achieved criticality in 1956 with technical assistance from which country?",
            options: [
                "Soviet Union"
,                "United States"
,                "France"
,                "United Kingdom"
            ],
            answer: 2
        },
        {
            subject: "Science",
            question: "Which radioactive isotope is commonly used as fuel in nuclear reactors?",
            options: [
                "Uranium-238"
,                "Uranium-235"
,                "Carbon-14"
,                "Radon-222"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which organisation developed the Prithvi missile?",
            options: [
                "ISRO"
,                "BEL"
,                "DRDO"
,                "HAL"
            ],
            answer: 2
        },
        {
            subject: "Technology",
            question: "The 'Digital India' programme was launched by the Government of India in which year?",
            options: [
                "2014"
,                "2015"
,                "2016"
,                "2013"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Aadhaar is a 12-digit unique identity number issued by which authority?",
            options: [
                "Unique Identification Authority of India (UIDAI)"
,                "Election Commission of India"
,                "National Informatics Centre"
,                "Reserve Bank of India"
            ],
            answer: 0
        },
        {
            subject: "Technology",
            question: "UPI, the unified payments interface used by apps like BHIM, is operated by which entity?",
            options: [
                "Reserve Bank of India"
,                "State Bank of India"
,                "Ministry of Electronics and Information Technology"
,                "National Payments Corporation of India"
            ],
            answer: 3
        },
        {
            subject: "Technology",
            question: "In computing, what does 'CPU' stand for?",
            options: [
                "Computer Primary Utility"
,                "Central Processing Unit"
,                "Central Program Utility"
,                "Core Processing User"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "1 gigabyte (GB) is approximately equal to how many megabytes (MB)?",
            options: [
                "100"
,                "512"
,                "1024"
,                "2048"
            ],
            answer: 2
        },
        {
            subject: "Technology",
            question: "In computer networking, what does 'LAN' stand for?",
            options: [
                "Wide Area Network"
,                "Local Area Network"
,                "Metropolitan Area Network"
,                "Long Access Node"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "MEITY, the nodal ministry for the Digital India programme and IT policy, stands for:",
            options: [
                "Ministry of Electronics and Information Technology"
,                "Ministry of Education and Information Technology"
,                "Ministry of Energy and Information Technology"
,                "Ministry of Electronics and Infrastructure Technology"
            ],
            answer: 0
        },
        {
            subject: "Technology",
            question: "The National Internet Exchange of India (NIXI) is responsible for facilitating which activity?",
            options: [
                "Allocating IP addresses to foreign governments"
,                "Regulating television broadcasting"
,                "Exchanging domestic internet traffic within India"
,                "Manufacturing networking hardware"
            ],
            answer: 2
        },
        {
            subject: "Technology",
            question: "BrahMos supersonic cruise missile is a joint venture of India with which country?",
            options: [
                "France"
,                "Israel"
,                "United States"
,                "Russia"
            ],
            answer: 3
        },
        {
            subject: "Technology",
            question: "The indigenously developed Tejas light combat aircraft is manufactured by which public sector company?",
            options: [
                "Hindustan Aeronautics Limited (HAL)"
,                "Bharat Electronics Limited"
,                "Bharat Dynamics Limited"
,                "Mishra Dhatu Nigam Limited"
            ],
            answer: 0
        },
        {
            subject: "Technology",
            question: "The PARAM series of supercomputers was developed by which Indian R&D organisation?",
            options: [
                "National Informatics Centre"
,                "Centre for Development of Advanced Computing (C-DAC)"
,                "Bharat Electronics Limited"
,                "Indian Space Research Organisation"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "The Indian Computer Emergency Response Team (CERT-In), which handles cyber security incidents, functions under which ministry?",
            options: [
                "Ministry of Home Affairs"
,                "Ministry of Electronics and Information Technology"
,                "Ministry of Defence"
,                "Ministry of Communications"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "5G mobile communication technology primarily offers which advantage over 4G?",
            options: [
                "Longer life of cell towers only"
,                "Analogue voice transmission"
,                "Exclusive use of satellite links"
,                "Higher data speeds and lower latency"
            ],
            answer: 3
        },
        {
            subject: "Technology",
            question: "India's primary space launch centre at Sriharikota is known by which name?",
            options: [
                "Vikram Sarabhai Space Centre"
,                "Satish Dhawan Space Centre"
,                "Thumba Equatorial Rocket Launching Station"
,                "Liquid Propulsion Systems Centre"
            ],
            answer: 1
        },
        {
            subject: "CSE",
            question: "Which Indian supercomputing programme is developed by C-DAC?",
            options: [
                "PARAM"
,                "PRITHVI"
,                "MIHIR"
,                "VAJRA"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "In Boolean algebra, which law states that A + A·B = A?",
            options: [
                "Absorption law"
,                "De Morgan's law"
,                "Distributive law"
,                "Commutative law"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "Which sorting algorithm has the best average-case time complexity of O(n log n) and is based on the divide-and-conquer strategy?",
            options: [
                "Merge sort"
,                "Bubble sort"
,                "Insertion sort"
,                "Selection sort"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "Which Indian IT company was founded in 1981 by Narayana Murthy and six other co-founders?",
            options: [
                "Infosys"
,                "Wipro"
,                "TCS"
,                "HCL Technologies"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "Which indigenously developed light combat aircraft did the Indian Air Force formally induct into service in 2016?",
            options: [
                "Tejas"
,                "AMCA"
,                "Ghatak"
,                "AURA"
            ],
            answer: 0
        },
        {
            subject: "ECE",
            question: "Which Indian space organisation operates the Satish Dhawan Space Centre at Sriharikota?",
            options: [
                "ISRO"
,                "DRDO"
,                "BEL"
,                "CSIR-NAL"
            ],
            answer: 0
        },
        {
            subject: "ECE",
            question: "Which modulation scheme is most bandwidth-efficient among the following?",
            options: [
                "QPSK"
,                "OOK"
,                "FSK"
,                "BPSK"
            ],
            answer: 0
        },
        {
            subject: "ECE",
            question: "What is the standard radiation pattern shape of a half-wave dipole antenna in free space?",
            options: [
                "Figure-of-eight"
,                "Perfectly isotropic"
,                "Pencil beam"
,                "Cardioid"
            ],
            answer: 0
        },
        {
            subject: "ECE",
            question: "Which theorem states that the Fourier transform of a convolution of two signals equals the product of their Fourier transforms?",
            options: [
                "Convolution theorem"
,                "Parseval's theorem"
,                "Nyquist theorem"
,                "Sampling theorem"
            ],
            answer: 0
        },
        {
            subject: "ECE",
            question: "India's first indigenously built rocket launch facility, originally called the Thumba Equatorial Rocket Launching Station, is located in which state?",
            options: [
                "Kerala"
,                "Karnataka"
,                "Andhra Pradesh"
,                "Odisha"
            ],
            answer: 0
        },
        {
            subject: "EEE",
            question: "Which type of power plant uses the heat released from nuclear fission to generate electricity?",
            options: [
                "Nuclear power plant"
,                "Hydroelectric plant"
,                "Geothermal plant"
,                "Wind farm"
            ],
            answer: 0
        },
        {
            subject: "EEE",
            question: "In a three-phase transformer, a star-delta (Y-Δ) connection is commonly used on the transmission side for which purpose?",
            options: [
                "Stepping down voltage with a phase shift"
,                "Increasing frequency"
,                "Compensating armature reaction"
,                "Reducing core losses only"
            ],
            answer: 0
        },
        {
            subject: "EEE",
            question: "Which Indian public sector company is the largest electricity generator in the country?",
            options: [
                "NTPC"
,                "NHPC"
,                "POWERGRID"
,                "SJVN"
            ],
            answer: 0
        },
        {
            subject: "EEE",
            question: "In an induction motor, the rotating magnetic field in the stator rotates at a speed known as the:",
            options: [
                "Synchronous speed"
,                "Slip speed"
,                "Rotor speed"
,                "Pull-out speed"
            ],
            answer: 0
        },
        {
            subject: "EEE",
            question: "What is the standard frequency of the AC supply maintained by the Indian power grid?",
            options: [
                "50 Hz"
,                "60 Hz"
,                "40 Hz"
,                "100 Hz"
            ],
            answer: 0
        },
        {
            subject: "MECH",
            question: "Which law of thermodynamics states that the entropy of a perfect crystal approaches zero as the temperature approaches absolute zero?",
            options: [
                "Second law"
,                "Zeroth law"
,                "First law"
,                "Third law"
            ],
            answer: 3
        },
        {
            subject: "MECH",
            question: "Which manufacturing process uses an electron beam in a vacuum to fuse metal powder layer by layer?",
            options: [
                "Electron beam melting"
,                "Sand casting"
,                "Forging"
,                "Electrical discharge machining"
            ],
            answer: 0
        },
        {
            subject: "MECH",
            question: "Which alloying element is primarily added to steel to improve hardenability and corrosion resistance?",
            options: [
                "Chromium"
,                "Sulphur"
,                "Lead"
,                "Silicon"
            ],
            answer: 0
        },
        {
            subject: "MECH",
            question: "India's first large-scale integrated steel plant, built with Soviet collaboration in the 1950s, is located at:",
            options: [
                "Bhilai"
,                "Durgapur"
,                "Rourkela"
,                "Jamshedpur"
            ],
            answer: 0
        },
        {
            subject: "MECH",
            question: "In the Rankine cycle used in thermal power plants, the working fluid is heated in the boiler to produce:",
            options: [
                "Superheated steam"
,                "Saturated liquid"
,                "Refrigerant vapour"
,                "Compressed air"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "Which data structure follows the LIFO (Last In, First Out) principle?",
            options: [
                "Stack"
,                "Queue"
,                "Heap"
,                "Graph"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "A relation is in which normal form when all transitive dependencies on the primary key have been removed?",
            options: [
                "First Normal Form"
,                "Second Normal Form"
,                "Third Normal Form"
,                "Boyce-Codd Normal Form"
            ],
            answer: 2
        },
        {
            subject: "CSE",
            question: "Which transport-layer protocol is connectionless and gives no guarantee of delivery or ordering?",
            options: [
                "TCP"
,                "UDP"
,                "ICMP"
,                "IP"
            ],
            answer: 1
        },
        {
            subject: "CSE",
            question: "How many conditions must hold simultaneously for a deadlock to occur?",
            options: [
                "Two"
,                "Three"
,                "Four"
,                "Six"
            ],
            answer: 2
        },
        {
            subject: "CSE",
            question: "Which of the following is NOT one of the four pillars of object-oriented programming?",
            options: [
                "Encapsulation"
,                "Polymorphism"
,                "Inheritance"
,                "Compilation"
            ],
            answer: 3
        },
        {
            subject: "CSE",
            question: "What is the worst-case time complexity of searching in a sorted array using binary search?",
            options: [
                "O(1)"
,                "O(log n)"
,                "O(n)"
,                "O(n log n)"
            ],
            answer: 1
        },
        {
            subject: "CSE",
            question: "Which OSI model layer is responsible for logical addressing and routing of packets between networks?",
            options: [
                "Data Link Layer"
,                "Network Layer"
,                "Transport Layer"
,                "Session Layer"
            ],
            answer: 1
        },
        {
            subject: "CSE",
            question: "Which Git command creates a new branch and immediately switches to it?",
            options: [
                "git branch feature -a"
,                "git checkout -b feature"
,                "git merge feature"
,                "git init feature"
            ],
            answer: 1
        },
        {
            subject: "CSE",
            question: "In HTTP, which status code indicates that the requested resource could not be found?",
            options: [
                "200"
,                "301"
,                "404"
,                "500"
            ],
            answer: 2
        },
        {
            subject: "CSE",
            question: "What is the average-case time complexity of a lookup operation in a well-implemented hash table?",
            options: [
                "O(1)"
,                "O(log n)"
,                "O(n)"
,                "O(n squared)"
            ],
            answer: 0
        },
        {
            subject: "CSE",
            question: "How do threads belonging to the same process differ from separate processes?",
            options: [
                "Threads do not exist in memory at all"
,                "Threads each have their own separate address space"
,                "Threads share the address space of their process"
,                "Threads can never run concurrently"
            ],
            answer: 2
        },
        {
            subject: "CSE",
            question: "In a DBMS, which ACID property is broken if a transaction fails halfway through?",
            options: [
                "Isolation"
,                "Atomicity"
,                "Durability"
,                "Consistency"
            ],
            answer: 1
        },
        {
            subject: "CSE",
            question: "Which sorting algorithm guarantees O(n log n) worst-case time complexity and is also stable?",
            options: [
                "Quick Sort"
,                "Merge Sort"
,                "Heap Sort"
,                "Insertion Sort"
            ],
            answer: 1
        },
        {
            subject: "CSE",
            question: "Which protocol is used to resolve human-readable domain names into IP addresses?",
            options: [
                "DHCP"
,                "DNS"
,                "ARP"
,                "FTP"
            ],
            answer: 1
        },
        {
            subject: "CSE",
            question: "What exactly is a page fault?",
            options: [
                "A hardware error in the RAM chip"
,                "A request for a virtual page that is not currently loaded in physical memory"
,                "Corruption of the page table by malware"
,                "An overflow of the call stack pointer"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "In the Software Development Life Cycle, which phase produces the Software Requirements Specification document?",
            options: [
                "Design"
,                "Requirements Analysis"
,                "Implementation"
,                "Maintenance"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which type of testing verifies individual components or units of software in isolation?",
            options: [
                "Integration testing"
,                "Unit testing"
,                "System testing"
,                "Acceptance testing"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "In RESTful API design, which HTTP method is idempotent and is normally used to replace an entire resource?",
            options: [
                "POST"
,                "PUT"
,                "PATCH"
,                "CONNECT"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which technique is the most effective defence against SQL injection attacks?",
            options: [
                "Limiting the length of user input fields"
,                "Using parameterised queries or prepared statements"
,                "Encrypting the database file at rest"
,                "Adding a CAPTCHA to the login form"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "The OAuth 2.0 protocol is primarily designed to handle:",
            options: [
                "Authorization, granting limited access without sharing user credentials"
,                "Compressing HTTP payloads"
,                "Encrypting database columns"
,                "Load balancing across servers"
            ],
            answer: 0
        },
        {
            subject: "Technology",
            question: "Which statement about the AES encryption algorithm is correct?",
            options: [
                "It is an asymmetric algorithm based on prime factorisation"
,                "It is a symmetric-key algorithm using the same key for encryption and decryption"
,                "It uses a 512-bit public and private key pair"
,                "It is used only for generating digital signatures"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "What is the primary purpose of the daily stand-up meeting in Scrum?",
            options: [
                "To demonstrate finished work to stakeholders"
,                "To synchronise progress, plans and impediments among the team"
,                "To review source code line by line"
,                "To negotiate the project budget"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Continuous Integration in a software team means:",
            options: [
                "Collecting requirements from customers continuously"
,                "Frequently integrating small changes with an automated build and test pipeline"
,                "Writing documentation alongside every feature"
,                "Deploying every commit straight to production"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Which of the following is valid JSON?",
            options: [
                "{name: 'Anil'}"
,                "{'name': 'Anil'}"
,                "{\"name\": \"Anil\"}"
,                "{\"name\" = \"Anil\"}"
            ],
            answer: 2
        },
        {
            subject: "Technology",
            question: "What is the time complexity of searching for a key in a balanced binary search tree?",
            options: [
                "O(1)"
,                "O(log n)"
,                "O(n)"
,                "O(n log n)"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "What does the S in HTTPS provide compared with plain HTTP?",
            options: [
                "Session persistence across requests"
,                "TLS encryption of the traffic"
,                "Static content caching"
,                "Server-side scripting"
            ],
            answer: 1
        },
        {
            subject: "Technology",
            question: "Regression testing is performed primarily to verify that:",
            options: [
                "The software meets its performance targets"
,                "Recent changes have not broken existing functionality"
,                "The code follows the team's style guidelines"
,                "Newly added features work as specified"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "A jacket priced at Rs. 800 is sold after successive discounts of 20% and then 10%. What is the selling price?",
            options: [
                "Rs. 560"
,                "Rs. 576"
,                "Rs. 600"
,                "Rs. 624"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "What is 15% of 240 plus 12% of 300?",
            options: [
                "68"
,                "72"
,                "76"
,                "80"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "A train 120 metres long crosses a pole in 12 seconds. What is its speed in km/h?",
            options: [
                "30 km/h"
,                "36 km/h"
,                "40 km/h"
,                "45 km/h"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "Rs. 72 is divided between two people in the ratio 5 : 3. What is the larger share?",
            options: [
                "Rs. 40"
,                "Rs. 42"
,                "Rs. 45"
,                "Rs. 48"
            ],
            answer: 2
        },
        {
            subject: "Mathematics",
            question: "The average of five numbers is 27. If the average of four of them is 25, what is the fifth number?",
            options: [
                "30"
,                "32"
,                "35"
,                "37"
            ],
            answer: 2
        },
        {
            subject: "Mathematics",
            question: "An article costing Rs. 450 is sold at a profit of 20%. What is the selling price?",
            options: [
                "Rs. 520"
,                "Rs. 540"
,                "Rs. 560"
,                "Rs. 580"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "Two fair dice are thrown once. What is the probability that the sum of the numbers equals 7?",
            options: [
                "1/6"
,                "1/9"
,                "5/36"
,                "1/12"
            ],
            answer: 0
        },
        {
            subject: "Mathematics",
            question: "What is the simple interest on Rs. 5000 at 8% per annum for 2 years?",
            options: [
                "Rs. 750"
,                "Rs. 800"
,                "Rs. 850"
,                "Rs. 900"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "A can finish a job in 12 days and B can finish it in 18 days. Working together, how long will they take?",
            options: [
                "6 days"
,                "7.2 days"
,                "7.5 days"
,                "8 days"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "The population of a town rises from 400 to 520 in one year. What is the percentage increase?",
            options: [
                "25%"
,                "30%"
,                "35%"
,                "40%"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "A father is 3 times as old as his son. In 12 years he will be twice as old as his son. What is the sum of their present ages?",
            options: [
                "44 years"
,                "46 years"
,                "48 years"
,                "50 years"
            ],
            answer: 2
        },
        {
            subject: "Mathematics",
            question: "The HCF of two numbers is 12 and their LCM is 144. If one of the numbers is 36, what is the other?",
            options: [
                "44"
,                "48"
,                "54"
,                "60"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "What is the value of (0.08 cubed + 0.02 cubed) divided by (0.08 squared - 0.08 x 0.02 + 0.02 squared)?",
            options: [
                "0.1"
,                "0.06"
,                "0.12"
,                "0.01"
            ],
            answer: 0
        },
        {
            subject: "Mathematics",
            question: "A boat travels 20 km/h downstream and 12 km/h upstream. What is its speed in still water?",
            options: [
                "14 km/h"
,                "16 km/h"
,                "18 km/h"
,                "20 km/h"
            ],
            answer: 1
        },
        {
            subject: "Mathematics",
            question: "A 40 litre mixture contains milk and water in the ratio 5 : 3. If 8 litres of water are added, what is the new ratio of milk to water?",
            options: [
                "5 : 4"
,                "3 : 2"
,                "25 : 23"
,                "7 : 5"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which is the best way to answer the interview opener Tell me about yourself?",
            options: [
                "Give a detailed account of your personal and family life"
,                "Give a concise summary of your relevant background, skills and why you want this role"
,                "Recite your entire resume word for word from the very beginning"
,                "Describe every job you have held since school in full detail"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "When an interviewer asks about your greatest weakness, which response is most appropriate?",
            options: [
                "Say that you have no real weaknesses"
,                "Name a genuine weakness and explain the concrete steps you are taking to improve it"
,                "Name a strength disguised as a weakness, such as being a perfectionist"
,                "Describe a weakness that has nothing to do with the job"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "How should you handle the question about your salary expectations?",
            options: [
                "Refuse to discuss money at any point in the interview"
,                "Quote a figure far above the market rate to test the company"
,                "State a researched, realistic range based on market rates and the value you bring"
,                "Say you will accept whatever is offered without any discussion"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which is the best first step when you have a conflict with a colleague?",
            options: [
                "Complain about them to the rest of the teammates"
,                "Discuss the issue directly and privately with the colleague, focusing on the problem rather than the person"
,                "Escalate the matter immediately to the HR department"
,                "Stop speaking to the colleague entirely"
            ],
            answer: 1
        },
        {
            subject: "General Knowledge",
            question: "When asked why we should hire you, which answer is the strongest?",
            options: [
                "Because I really need this job right now"
,                "Because I am the hardest worker in any room"
,                "Because my skills and experience match the key requirements of the role, as shown by my results"
,                "Because I will accept a lower salary than other candidates"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "You made an error that put a project deadline at risk. What is the best response?",
            options: [
                "Hide it so the team does not lose confidence in you"
,                "Blame the faulty tools or another teammate"
,                "Accept responsibility, inform stakeholders early, and present a plan to fix it and prevent recurrence"
,                "Wait and see whether anyone notices the mistake"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which answer about where you see yourself in five years is most appropriate?",
            options: [
                "Sitting in your chair, running this team"
,                "Working in a completely different industry"
,                "Growing into a role with more responsibility and contributing to this team's goals"
,                "Doing exactly the same task with no change at all"
            ],
            answer: 2
        },
        {
            subject: "General Knowledge",
            question: "Which question is best to ask the interviewer near the end of the interview?",
            options: [
                "How soon can I get a raise?"
,                "What does success look like in this role in the first six months, and what challenges is the team facing?"
,                "Do you monitor employees' internet usage?"
,                "Is it okay to leave early on Fridays?"
            ],
            answer: 1
        },
        {
            subject: "ECE",
            question: "A 12 V supply is applied across a 4 kOhm resistor. What current flows through it?",
            options: [
                "3 mA"
,                "4 mA"
,                "48 mA"
,                "0.33 mA"
            ],
            answer: 0
        },
        {
            subject: "ECE",
            question: "Which component stores energy in an electric field?",
            options: [
                "Inductor"
,                "Capacitor"
,                "Transformer"
,                "PN junction diode"
            ],
            answer: 1
        },
        {
            subject: "ECE",
            question: "In frequency modulation, which parameter of the carrier is varied in proportion to the message signal?",
            options: [
                "Amplitude"
,                "Frequency"
,                "Polarisation"
,                "Antenna height"
            ],
            answer: 1
        },
        {
            subject: "ECE",
            question: "An amplifier has a voltage gain of 20. What is its approximate gain in decibels?",
            options: [
                "13 dB"
,                "20 dB"
,                "26 dB"
,                "40 dB"
            ],
            answer: 2
        },
        {
            subject: "ECE",
            question: "According to the Nyquist sampling theorem, a signal with a maximum frequency component of 4 kHz must be sampled at a minimum rate of:",
            options: [
                "2 kHz"
,                "4 kHz"
,                "8 kHz"
,                "16 kHz"
            ],
            answer: 2
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
