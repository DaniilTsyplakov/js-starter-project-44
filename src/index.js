import readlineSync from 'readline-sync';
import playBrainCalc from '../games/brain-calc.js';
import playBrainEven from '../games/brain-even.js';
import playBrainGCD from '../games/brain-gcd.js';
import playBrainProgression from '../games/brain-progression.js';
import playBrainPrime from '../games/brain-prime.js';

const runGame = (gameName) => {
  switch (gameName) {
    case '1':
      playBrainEven();
      break;
    case '2':
      playBrainCalc();
      break;
    case '3':
      playBrainGCD();
      break;
    case '4':
      playBrainProgression();
      break;
    case '5':
      playBrainPrime();
      break;
    default:
      console.log(`Unknown game: ${gameName}`);
  }
};
console.log('Choose game:');
console.log('1. Brain Even');
console.log('2. Brain Calc');
console.log('3. Brain GCD');
console.log('4. Brain Progressive');
console.log('5. Brain Prime');
const choice = readlineSync.question('Enter the number of the game: ');
runGame(choice);
