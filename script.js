const questionsEasy = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const questionsDifficult = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "difficult",
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "difficult",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "difficult",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "difficult",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "difficult",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "difficult",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "difficult",
    question:
      "The C programming language was created by this American computer scientist. ",
    correct_answer: "Dennis Ritchie",
    incorrect_answers: ["Tim Berners Lee", "al-Khwarizmi", "Willis Ware"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "difficult",
    question: "In computing, what does MIDI stand for?",
    correct_answer: "Musical Instrument Digital Interface",
    incorrect_answers: [
      "Musical Interface of Digital Instruments",
      "Modular Interface of Digital Instruments",
      "Musical Instrument Data Interface",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "difficult",
    question:
      "The Python programming language gets its name from the British comedy group 'Monty Python's Flying Circus'",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "difficult",
    question: "What language does Node.js use?",
    correct_answer: "JavaScript",
    incorrect_answers: ["Java", "Java Source", "Joomla Source Code"],
  },
];

// GLOBAL VARIABLES

let startButton = document.getElementById("start_button");
let nextButton = document.getElementById("next_button");
let questionNumber = document.getElementById("question_number");

let landingPage = document.getElementById("landing-page");
let questionContainer = document.getElementById("question_container");
let resultPage = document.getElementById("result-page");

let howManyCorrect = 0;
let howManyIncorrect = 0;

// FUNCTIONS

function shuffle(array) {
  let shuffledArray = [];
  let usedIndexes = [];

  let i = 0;
  while (i < array.length) {
    let randomIndex = Math.floor(Math.random() * array.length);
    if (!usedIndexes.includes(randomIndex)) {
      shuffledArray.push(array[randomIndex]);
      usedIndexes.push(randomIndex);
      i++;
    }
  }
  return shuffledArray;
}

function selectingAnswer(eventData) {
  if (eventData.target.classList.contains("correct")) {
    eventData.target.style.backgroundColor = "green";
    howManyCorrect++;
  } else if (eventData.target.classList.contains("incorrect")) {
    eventData.target.style.backgroundColor = "red";
    howManyIncorrect++;
  }

  let siblingsArray = eventData.target.parentNode.childNodes;
  let answersArray = [];
  siblingsArray.forEach((element) => {
    if (element.classList.contains("answer")) {
      answersArray.push(element);
    }
  });
  answersArray.forEach((element) => {
    element.removeEventListener("click", selectingAnswer);
  });
}

function showQuestions(difficultyLevel, numberOfQuestions) {
  if (difficultyLevel === "easy") {
    shuffledQuestionsArray = shuffle(questionsEasy);
  } else {
    shuffledQuestionsArray = shuffle(questionsDifficult);
  }

  for (let i = 0; i < numberOfQuestions; i++) {
    // create question
    let question = document.createElement("div");
    question.className = "question";
    questionContainer.appendChild(question);

    let questionTitle = document.createElement("p");
    questionTitle.className = "question_title";
    questionTitle.innerText = shuffledQuestionsArray[i].question;
    question.appendChild(questionTitle);

    let correctAnswer = shuffledQuestionsArray[i].correct_answer;
    let incorrectAnswers = shuffledQuestionsArray[i].incorrect_answers;

    let allAnswersArray = [];
    incorrectAnswers.forEach((element) => {
      allAnswersArray.push(element);
    });
    allAnswersArray.push(correctAnswer);

    let shuffledAllAnswersArray = shuffle(allAnswersArray);

    shuffledAllAnswersArray.forEach((element) => {
      let answer = document.createElement("div");
      answer.className = "answer";
      if (element === correctAnswer) {
        answer.classList.add("correct");
      } else {
        answer.classList.add("incorrect");
      }
      answer.innerText = element;
      answer.addEventListener("click", selectingAnswer);
      question.appendChild(answer);
    });
    questionNumber.innerText = `Question 1 / ${numberOfQuestions}`;

    if (i != 0) {
      question.style.display = "none";
    }
  }
}

let indexOfNextQuestion = 1;
function nextQuestion() {
  let questions = document.getElementsByClassName("question");
  if (indexOfNextQuestion != questions.length) {
    questions[indexOfNextQuestion - 1].style.display = "none";
    questions[indexOfNextQuestion].style.display = "flex";
    questionNumber.innerText = `Question ${indexOfNextQuestion + 1} / ${
      questions.length
    }`;
  } else {
    questionContainer.style.display = "none";
    resultPage.style.display = "flex";
    resultPage.innerText = `correct: ${howManyCorrect}, incorrect: ${howManyIncorrect}, skipped: ${
      questions.length - (howManyCorrect + howManyIncorrect)
    }`;
  }
  return indexOfNextQuestion++;
}

function startQuiz() {
  let numberOfQuestions = document.getElementById("number_input").value;
  let difficultyLevel = document.getElementById("easy-or-difficult").value;
  landingPage.style.display = "none";
  questionContainer.style.display = "flex";
  showQuestions(difficultyLevel, numberOfQuestions);
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

window.onload = function () {};
