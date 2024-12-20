import { displayColoredMessage } from '../utils/output.js';

export function greetUser(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Invalid name provided');
  }
  const uppercaseName = name.toUpperCase();
  let message = `Hello, ${uppercaseName}!`;
  displayColoredMessage(message, 'blue');
}