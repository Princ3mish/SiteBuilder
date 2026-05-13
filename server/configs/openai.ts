import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.AI_API_KEY,
});

export const PROMPT_MODEL = 'openai/gpt-4o-mini';      // fast & cheap for prompt enhancement
export const GENERATION_MODEL = 'openrouter/optimus-alpha:free';        // free tier model for website generation

export default openai