const readline = require('readline');

const questions = [
  { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
  { q: "2 + 2 = ?", options: ["3", "4", "5", "6"], answer: 1 },
  { q: "Which planet is known as Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: 1 },
  { q: "Who wrote Hamlet?", options: ["Charles Dickens", "Shakespeare", "Hemingway", "Tolstoy"], answer: 1 },
  { q: "What is H2O?", options: ["Salt", "Water", "Iron", "Oxygen"], answer: 1 }
];

function startGame() {
  console.log("=== BrainQuest - Knowledge Survival Game ===");
  console.log("Survive by answering correctly. Get it wrong and you lose!\n");
  let score = 0;
  let i = 0;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  
  function ask() {
    if (i >= questions.length) {
      rl.close();
      console.log(`\nVictory! You survived! Score: ${score}/${questions.length}`);
      return;
    }
    const q = questions[i];
    console.log(`Question ${i+1}/${questions.length}: ${q.q}`);
    q.options.forEach((opt, idx) => console.log(`${idx+1}. ${opt}`));
    rl.question("Your answer (1-4): ", (ans) => {
      const choice = parseInt(ans);
      if (choice === q.answer + 1) {
        console.log("Correct!\n");
        score++;
        i++;
        ask();
      } else {
        rl.close();
        console.log(`\nGame Over! Wrong answer. Final score: ${score}/${questions.length}`);
      }
    });
  }
  ask();
}

startGame();
