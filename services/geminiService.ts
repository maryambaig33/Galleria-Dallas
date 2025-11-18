import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { STORES, EVENTS } from '../constants';

// Prepare context for the AI
const storeContext = STORES.map(s => `${s.name} (${s.category}) on Level ${s.level}. ${s.description}`).join('\n');
const eventContext = EVENTS.map(e => `${e.title} on ${e.date}: ${e.description}`).join('\n');

const SYSTEM_INSTRUCTION = `
You are the "Galleria Luxe Concierge", an AI assistant for the Galleria Dallas luxury shopping center.
Your tone should be sophisticated, helpful, warm, and concise.
You have access to the following information about the mall:

STORES & DINING:
${storeContext}

EVENTS:
${eventContext}

GENERAL INFO:
- The Ice Skating Center is on Level 1 (Center Court).
- The Westin Galleria Dallas hotel is attached to the mall.
- Valet parking is available at the North entrance near Nordstrom and the Grand Lux Cafe entrance.
- Hours: Mon-Sat 10AM-8PM, Sun 12PM-6PM.

If asked about a store not listed, strictly say: "I don't have current information on that specific boutique, but I can guide you to our directory or guest services."
Do not make up store locations.
Keep responses under 3 sentences unless the user asks for a detailed itinerary.
`;

let chatSession: Chat | null = null;

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I'm currently offline due to a configuration issue (Missing API Key).";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I apologize, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
};
