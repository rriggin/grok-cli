import { API_CONFIG } from '../config/constants.js';

export async function sendGrokRequest(question) {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHAT}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      messages: [{ role: "user", content: question }],
      model: API_CONFIG.MODEL,
      stream: false
    })
  });

  const data = await response.text();
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} - ${data}`);
  }

  return JSON.parse(data);
}