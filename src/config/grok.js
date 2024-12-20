export const GROK_API_URL = 'https://api.x.ai/v1/chat/completions';

export function createGrokConfig() {
  return {
    headers: {
      'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  };
}