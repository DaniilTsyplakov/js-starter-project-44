#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const operators = ['+', '-', '*'];

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
const calculateExpression = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const playBrainCalc = () => {
  const name = greetUser();
  console.log('What is the result of the expression?');

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const operator = getRandomElement(operators);

    const expression = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculateExpression(number1, operator, number2);
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default playBrainCalc;
