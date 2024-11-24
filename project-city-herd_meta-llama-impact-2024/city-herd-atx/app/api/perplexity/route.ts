import { PerplexityAI } from '@perplexity/sdk';

const perplexity = new PerplexityAI({
  apiKey: process.env.PERPLEXITY_API_KEY
});

export async function POST(req: Request) {
  const { city, state, zipCode, categories } = await req.json();
  
  const queries = categories.map(category => {
    return `${category} resources, services, and information in ${city}, ${state} ${zipCode}`;
  });

  const results = await Promise.all(queries.map(async query => {
    const response = await perplexity.search(query);
    return {
      category: query.split(' ')[0],
      sources: response.results.map(result => ({
        url: result.url,
        title: result.title,
        snippet: result.snippet
      }))
    };
  }));

  return Response.json({ results });
} 