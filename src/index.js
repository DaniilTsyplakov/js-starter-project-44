import readlineSync from 'readline-sync';
import playBrainCalc from '../games/brain-calc.js';
import playBrainEven from '../games/brain-even.js';

const runGame = (gameName) => {
  switch (gameName) {
    case '1':
      playBrainEven();
      break;
    case '2':
      playBrainCalc();
      break;
    default:
      throw new Error(`Unknown game: ${gameName}`);
  }
};
console.log('Choose game:');
console.log('1. Brain Even');
console.log('2. Brain Calc');
const choice = readlineSync.question('Enter the number of the game: ');
runGame(choice);
