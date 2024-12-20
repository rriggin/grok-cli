import { OpenAI } from 'openai';
import { validateApiKey } from '../utils/validation.js';

export function createOpenAIClient() {
  validateApiKey();
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
}