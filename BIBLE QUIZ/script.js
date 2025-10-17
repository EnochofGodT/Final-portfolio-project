const questions = [
  {
    question: "How many cities of refuge were designated in Deuteronomy?",
    options: ["Six", "Nine", "Three", "Twelve"],
    answer: "Six",
  },
  {
    question: "Who interpreted Pharaoh's dream?",
    options: ["Joseph", "Moses", "Daniel", "Elijah"],
    answer: "Joseph",
  },
  {
    question: "What is the first book in the New Testament?",
    options: ["Mark", "Luke", "John", "Matthew"],
    answer: "Matthew",
  },
  {
    question: "Who baptized Jesus?",
    options: ["John the Baptist", "Peter", "Paul", "James"],
    answer: "John the Baptist",
  },
  {
    question: "Who was the first king of Israel?",
    options: ["Saul", "David", "Solomon", "Samuel"],
    answer: "Saul",
  },
  {
    question: "How many days did God take to create the world?",
    options: ["6", "7", "5", "3"],
    answer: "6",
  },
  {
    question: "What is the shortest ",
    options: ["Jesus wept.", "Pray continually.", "Rejoice always.", "God is love."],
    answer: "Jesus wept.",
  },
  {
    question: "Who led the Israelites out of Egypt?",
    options: ["Moses", "Aaron", "Joshua", "Joseph"],
    answer: "Moses",
  },
  {
    question: "What was the name of the garden where Adam and Eve lived?",
    options: ["Eden", "Galilee", "Bethel", "Gethsemane"],
    answer: "Eden",  
  },
  {
    question: "Who denied Jesus three times?",
    options: ["Peter", "Judas", "Thomas", "John"],
    answer: "Peter",
  },
  {
    question: "How many books are in the Bible?",
    options: ["66", "72", "60", "39"],
    answer: "66",
  },
  {
    question: "Who killed Goliath?",
    options: ["David", "Saul", "Samson", "Jonathan"],
    answer: "David",
  },
  {
    question: "What is the last book of the New Testament?",
    options: ["Revelation", "Jude", "Acts", "Hebrews"],
    answer: "Revelation",  
  },
  {
    question: "How many disciples did Jesus have?",
    options: ["12", "10", "7", "3"],
    answer: "12",
  },
  {
    question: "Who was the high priest when David ate the consecrated bread?",
    options: ["Abiathar", "Ahimelek", "Zadok", "Aaron"],
    answer: "Ahimelek",
  },
  {
    question: "Which prophet had a vision of a valley of dry bones?",
    options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
    answer: "Ezekiel",
  },
  {
    question: "What king was struck with leprosy for burning incense in the temple?",
    options: ["Uzziah", "Hezekiah", "Saul", "Rehoboam"],
    answer: "Uzziah",
  },
  {
    question: "Which New Testament book has only one chapter?",
    options: ["Philemon", "Titus", "2 John", "James"],
    answer: "Philemon",
  },
  {
    question: "Which disciple was a tax collector?",
    options: ["Matthew", "Peter", "James", "Andrew"],
    answer: "Matthew",
  },
  {
    question: "What is the name of Abraham’s second wife?",
    options: ["Sarah", "Hagar", "Keturah", "Milcah"],
    answer: "Keturah",
  },
  {
    question: "Who wrote the majority of the Psalms?",
    options: ["David", "Solomon", "Asaph", "Moses"],
    answer: "David",
  },
  {
    question: "How many people were saved on Noah’s Ark?",
    options: ["8", "7", "12", "10"],
    answer: "8",
  },
  {
    question: "What city did Paul escape from in a basket through the wall?",
    options: ["Damascus", "Ephesus", "Corinth", "Antioch"],
    answer: "Damascus",
  },
  {
    question: "Who was the only female judge of Israel?",
    options: ["Deborah", "Ruth", "Esther", "Hannah"],
    answer: "Deborah",
  },
  {
    question: "Which Old Testament prophet married a prostitute as commanded by God?",
    options: ["Hosea", "Isaiah", "Jeremiah", "Ezekiel"],
    answer: "Hosea",
  },
  {
    question: "Who was the left-handed judge who killed Eglon, king of Moab?",
    options: ["Ehud", "Shamgar", "Gideon", "Jephthah"],
    answer: "Ehud",
  },
  {
    question: "What is the longest chapter in the Bible?",
    options: ["Psalm 119", "Psalm 23", "Isaiah 53", "Genesis 1"],
    answer: "Psalm 119",
  },
  {
    question: "Who prophesied the valley of dry bones?",
    options: ["Ezekiel", "Daniel", "Jeremiah", "Amos"],
    answer: "Ezekiel",
    
  },
  {
    question: "What king saw the writing on the wall?",
    options: ["Belshazzar", "Nebuchadnezzar", "Darius", "Artaxerxes"],
    answer: "Belshazzar",
  },
  {
    question: "What is the only book in the Bible that doesn't mention God?",
    options: ["Esther", "Song of Solomon", "Ecclesiastes", "Philemon"],
    answer: "Esther",
  },
  {
  question: "Which apostle was a tentmaker by trade?",
    options: ["Paul", "Peter", "James", "Barnabas"],
    answer: "Paul",
  },
  {
    question: "Who fell asleep during Paul’s preaching and died?",
    options: ["Eutychus", "Timothy", "Silas", "John Mark"],
    answer: "Eutychus",
  },
  {
    question: "Who was the Roman governor that tried Jesus?",
    options: ["Pontius Pilate", "Herod", "Caesar", "Felix"],
    answer: "Pontius Pilate",
  },
  {
    question: "How many chapters are in the book of Isaiah?",
    options: ["66", "52", "40", "39"],
    answer: "66",
  },
  {
    question: "Which disciple was also known as Didymus?",
    options: ["Thomas", "Matthew", "Philip", "Bartholomew"],
    answer: "Thomas",
  },
  {
    question: "Where did Elijah challenge the prophets of Baal?",
    options: ["Mount Carmel", "Mount Sinai", "Mount Zion", "Mount Nebo"],
    answer: "Mount Carmel",
  },
  {
    question: "Who was stoned to death while Saul watched?",
    options: ["Stephen", "James", "John", "Peter"],
    answer: "Stephen",
  },
  {
    question: "What was the name of the rich man who buried Jesus?",
    options: ["Joseph of Arimathea", "Nicodemus", "Simon", "Zacchaeus"],
    answer: "Joseph of Arimathea",
  },
  {
    question: "Who dreamed of a statue made of gold, silver, bronze, iron, and clay?",
    options: ["Nebuchadnezzar", "Daniel", "Joseph", "Solomon"],
    answer: "Nebuchadnezzar",
  },
  {
    question: "Who built the ark?",
    options: ["Noah", "Moses", "Abraham", "David"],
    answer: "Noah",
  },
  {
    question: "What did Jesus turn water into?",
    options: ["Wine", "Milk", "Oil", "Honey"],
    answer: "Wine",
  },
  {
    question: "Who was swallowed by a great fish?",
    options: ["Jonah", "Moses", "Elijah", "Peter"],
    answer: "Jonah",
  },
  {
    question: "What did God create on the first day?",
    options: ["Light", "Earth", "Sky", "Animals"],
    answer: "Light",
  },
  {
    question: "Who was the first man created?",
    options: ["Adam", "Noah", "Seth", "Cain"],
    answer: "Adam",
  }
];

let timer;
let timeLeft = 15;

let currentQuestion;
let questionPool = [...questions].sort(() => 0.5 - Math.random());

const timeDisplay = document.getElementById("time-remaining");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const continueBtn = document.getElementById("continue-btn");

function loadQuestion() {
  feedback.style.display = "none";
  continueBtn.style.display = "none";
  optionsContainer.innerHTML = "";

  if (questionPool.length === 0) {
    questionText.textContent =" Quiz Complete!";
    return;
  }
  currentQuestion = questionPool.pop();
  questionText.textContent = currentQuestion.question;

  let shuffled = [...currentQuestion.options].sort(() => 0.5 - Math.random());

  shuffled.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(btn, opt);
    optionsContainer.appendChild(btn);
  });
  startTimer();
}
// New function 1
function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  timeDisplay.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      autoRevealAnswer();
    }
  }, 1000);
}


// New function 2
function autoRevealAnswer() {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === currentQuestion.answer) {
      b.classList.add("correct");
    }
  });

  feedback.innerHTML = `
    <div>Time's up!</div>
  `;
  feedback.style.color = "#ff4d4d";
  feedback.style.display = "block";
  continueBtn.style.display = "block";

  setTimeout(() => {
    loadQuestion();
  }, 1000);
}





function checkAnswer(btn, selected) {
  clearInterval(timer);
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(b => b.disabled = true);

  if (selected === currentQuestion.answer) {
    btn.classList.add("correct");
    feedback.textContent = "Correct!";
    feedback.style.color = "#00cc66";
  } else {
    btn.classList.add("wrong");
    feedback.textContent = "Wrong!";
    feedback.style.color = "#ff4d4d";
    
    
    buttons.forEach(b => {
      if (b.textContent === currentQuestion.answer) {
        b.classList.add("correct");
      }
    });
  }

  feedback.style.display = "block";
  continueBtn.style.display = "block";

  setTimeout(() => {
    loadQuestion();
  }, 1000);
}

continueBtn.onclick = loadQuestion;

loadQuestion();