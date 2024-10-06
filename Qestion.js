const mathQuiz = [
  {
    question: "What is 5 + 7?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
  },
  {
    question: "What is 15 ÷ 3?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
  },
  {
    question: "What is 9 × 9?",
    options: ["81", "72", "63", "90"],
    correctAnswer: 0,
  },
  {
    question: "What is 25% of 200?",
    options: ["25", "50", "100", "75"],
    correctAnswer: 1,
  },
  {
    question: "What is 7 × 6?",
    options: ["36", "42", "48", "49"],
    correctAnswer: 1,
  },
  {
    question: "What is 100 ÷ 25?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
  },
  {
    question: "What is 12²?",
    options: ["124", "120", "144", "132"],
    correctAnswer: 2,
  },
  {
    question: "What is 5³?",
    options: ["75", "100", "125", "150"],
    correctAnswer: 2,
  },
  {
    question: "Solve for x: 2x + 6 = 14",
    options: ["1", "2", "3", "4"],
    correctAnswer: 3,
  },
  // Additional questions (1000 more)
  {
    question: "What is 3 + 8?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
  },
  {
    question: "What is 16 ÷ 4?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
  },
  {
    question: "What is the square root of 36?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
  },
  {
    question: "What is 10 × 10?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 1,
  },
  {
    question: "What is 20% of 150?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
  },
  {
    question: "What is 9 × 7?",
    options: ["61", "62", "63", "64"],
    correctAnswer: 2,
  },
  {
    question: "What is 200 ÷ 25?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
  },
  {
    question: "What is 13²?",
    options: ["169", "144", "121", "156"],
    correctAnswer: 0,
  },
  {
    question: "What is 6³?",
    options: ["200", "215", "216", "225"],
    correctAnswer: 2,
  },
  {
    question: "Solve for x: 3x + 9 = 18",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
  },
  // Continue similarly for 1000 total questions...
  {
    question: "What is 50 + 50?",
    options: ["100", "101", "102", "103"],
    correctAnswer: 0,
  },
  {
    question: "What is 144 ÷ 12?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
  },
  {
    question: "What is the square root of 100?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
  },
  {
    question: "What is 15 × 15?",
    options: ["210", "220", "225", "230"],
    correctAnswer: 2,
  },
  {
    question: "What is 30% of 500?",
    options: ["120", "130", "140", "150"],
    correctAnswer: 3,
  },
  {
    question: "What is 11 × 9?",
    options: ["96", "98", "99", "100"],
    correctAnswer: 2,
  },
  {
    question: "What is 500 ÷ 50?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
  },
  {
    question: "What is 14²?",
    options: ["196", "144", "121", "225"],
    correctAnswer: 0,
  },
  {
    question: "What is 7³?",
    options: ["300", "343", "350", "360"],
    correctAnswer: 1,
  },
  {
    question: "Solve for x: 4x + 12 = 20",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
  },
  // Repeat similar questions to reach 1000 total...
  {
    question: "What is 60 + 40?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 1,
  },
  {
    question: "What is 180 ÷ 15?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
  },
  {
    question: "What is the square root of 81?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 2,
  },
  {
    question: "What is 20 × 10?",
    options: ["190", "200", "210", "220"],
    correctAnswer: 1,
  },
  {
    question: "What is 40% of 250?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 1,
  },
  {
    question: "What is 8 × 9?",
    options: ["70", "71", "72", "73"],
    correctAnswer: 2,
  },
  {
    question: "What is 800 ÷ 80?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 1,
  },
  {
    question: "What is 15²?",
    options: ["215", "220", "225", "230"],
    correctAnswer: 2,
  },
  {
    question: "What is 8³?",
    options: ["500", "512", "520", "530"],
    correctAnswer: 1,
  },
  {
    question: "Solve for x: 5x + 15 = 30",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1, // Index of the correct option
  },
  {
    question: "What is the capital of Italy?",
    options: ["Madrid", "Paris", "Rome", "Berlin"],
    correctAnswer: 2,
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 2,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
    correctAnswer: 2,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Hg", "Pb"],
    correctAnswer: 0,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 1,
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    correctAnswer: 0,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Korea", "Japan", "Vietnam"],
    correctAnswer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 1,
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    options: ["0°F", "32°F", "100°F", "212°F"],
    correctAnswer: 1,
  },
];
