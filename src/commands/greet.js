import { displayColoredMessage } from '../utils/output.js';

export function greetUser(name = 'friend', options) {
  let message = `Hello, ${name}!`;
  if (options.uppercase) {
    message = message.toUpperCase();
  }
  displayColoredMessage(message, 'blue');
}