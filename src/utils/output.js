import chalk from 'chalk';
import ora from 'ora';

export function createSpinner(message) {
  return ora(message).start();
}

export function displayResponse(content) {
  console.log(chalk.green('\nGrok says:'));
  console.log(content);
}

export function displayError(error) {
  console.error(chalk.red('Error:', error.message));
}

export function displayColoredMessage(message, color) {
  console.log(chalk[color](message));
}