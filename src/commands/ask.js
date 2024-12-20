import { sendGrokRequest } from '../services/grok.js';
import { validateApiKey } from '../utils/validation.js';
import { createSpinner, displayResponse, displayError } from '../utils/output.js';

export async function askQuestion(question) {
  validateApiKey();
  const spinner = createSpinner('Thinking...');
  
  try {
    const data = await sendGrokRequest(question);
    spinner.stop();
    displayResponse(data.choices[0].message.content);
  } catch (error) {
    spinner.stop();
    displayError(error);
    process.exit(1);
  }
}