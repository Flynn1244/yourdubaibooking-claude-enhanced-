import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Q", the digital concierge for Quintessence, a high-end luxury travel and lifestyle management service.
Your tone is sophisticated, polite, brief, and incredibly helpful. You cater to ultra-high-net-worth individuals.
You help with:
1. Travel recommendations (hotels, jets, destinations).
2. Restaurant reservations (Michelin star).
3. Exclusive event access.

If you don't know an answer, politely suggest they contact their dedicated lifestyle manager via the enquiry form on the page.
Keep responses under 100 words unless asked for a detailed itinerary.
`;

export const sendConciergeMessage = async (message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview'; 
    
    // Transform history for the chat API
    // Note: The new SDK chat logic maintains state if we use a chat session, 
    // but for this stateless service function, we might just use generateContent with system instruction context 
    // or start a chat if we were persisting the object. 
    // For simplicity in this demo, we will use generateContent with the history appended as context if needed, 
    // OR ideally, use ai.chats.create() if we were keeping the instance alive.
    // Let's use a fresh chat for this request pattern to ensure system instructions are respected.

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "I apologize, I am unable to process your request at this moment.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Our concierge service is currently experiencing high volume. Please try again shortly.");
  }
};