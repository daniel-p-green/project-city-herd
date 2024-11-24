import { LlamaStack } from "@llama-stack/sdk";
import { AstraDB } from "@datastax/astra-db-ts";

const llama = new LlamaStack({
  apiKey: process.env.LLAMA_STACK_API_KEY,
  version: "3.2"
});

export async function processResourceToVectors(resource) {
  const embedding = await llama.embeddings.create({
    input: `${resource.title}\n${resource.snippet}`,
    model: "llama-3.2-70b"
  });

  return {
    url: resource.url,
    title: resource.title,
    content: resource.snippet,
    category: resource.category,
    embedding: embedding.data[0].embedding
  };
} 