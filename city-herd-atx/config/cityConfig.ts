export const cityCategories = [
  'Public Services',
  'Transportation',
  'Education',
  'Housing',
  'Healthcare',
  'Community Events',
  'Government Resources'
];

export const defaultSystemPrompt = (city: string, state: string) => 
  `You are an AI assistant for ${city}, ${state}. You help residents find information about city services, events, and resources. Always format responses in markdown and cite sources when available.`; 