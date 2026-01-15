import { GoogleGenAI } from "@google/genai";

// Initialize the client with proper API key handling
const getApiKey = (): string => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured. Please set it in your .env.local file.");
  }
  return apiKey;
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

const SYSTEM_INSTRUCTION = `
You are "Q", the digital concierge for Your Dubai Booking, a high-end luxury travel and lifestyle management service.
Your tone is sophisticated, polite, brief, and incredibly helpful. You cater to ultra-high-net-worth individuals.
You help with:
1. Travel recommendations (hotels, jets, destinations).
2. Restaurant reservations (Michelin star).
3. Exclusive event access.
4. Desert safaris and yacht rentals.
5. VIP nightlife access.

If you don't know an answer, politely suggest they contact their dedicated lifestyle manager via the enquiry form on the page.
Keep responses under 100 words unless asked for a detailed itinerary.
`;

export const sendConciergeMessage = async (
  message: string, 
  history: {role: 'user' | 'model', text: string}[]
): Promise<string> => {
  try {
    if (!message.trim()) {
      throw new Error("Message cannot be empty");
    }

    const model = 'gemini-1.5-flash'; // Using stable model name
    
    // Create chat with system instruction and history
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.slice(0, -1).map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      }))
    });

    // Send the current message
    const result = await chat.sendMessage(message);
    
    if (!result || !result.text) {
      return "I apologize, I am unable to process your request at this moment. Please try again or contact us via the enquiry form.";
    }
    
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("API_KEY")) {
        throw new Error("AI service configuration error. Please contact support.");
      }
      if (error.message.includes("quota") || error.message.includes("rate limit")) {
        throw new Error("Our concierge service is currently experiencing high volume. Please try again shortly.");
      }
    }
    
    throw new Error("Our concierge service is temporarily unavailable. Please try again or contact us via the enquiry form.");
  }
};