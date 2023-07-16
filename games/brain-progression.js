import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
// Функция для генерации арифметической прогрессии
const generateProgression = () => {
  const length = Math.floor(Math.random() * 6 + 5);
  const start = Math.floor(Math.random() * 50 + 1);
  const step = Math.floor(Math.random() * 10 + 1);

  const progression = [];
  let currentNumber = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(currentNumber);
    currentNumber += step;
  }
  return progression;
};

// Функция для скрытия элементов прогрессии
const hideElement = (progression, index) => {
  const progressionWithHidden = [...progression];
  progressionWithHidden[index] = '..';
  return progressionWithHidden.join(' ');
};

const playBrainProgression = () => {
  const name = greetUser();
  console.log('What number is missing in the progression?');
  let correctAnswerCount = 0;

  while (correctAnswerCount < 3) {
    const progression = generateProgression();
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const hiddenNumber = progression[hiddenIndex];
    const question = hideElement(progression, hiddenIndex);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(hiddenNumber)) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was'${hiddenNumber}'`
      );
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playBrainProgression;
