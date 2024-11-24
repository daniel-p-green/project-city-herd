import { AstraDB } from "@datastax/astra-db-ts";
import { LlamaStack } from "@llama-stack/sdk";
import { driverLicenseSpanish } from '../data/austin-drivers-license-es';

const llama = new LlamaStack({
  apiKey: process.env.LLAMA_STACK_API_KEY,
  version: "3.2"
});

const astraDb = new AstraDB(
  process.env.ASTRA_DB_APPLICATION_TOKEN,
  process.env.ASTRA_DB_API_ENDPOINT,
  process.env.ASTRA_DB_NAMESPACE
);

async function seedLocalContent() {
  const collection = await astraDb.collection('local_knowledge');
  
  for (const section of driverLicenseSpanish.sections) {
    const embedding = await llama.embeddings.create({
      input: `${section.title}\n${section.content}`,
      model: "llama-3.2-70b"
    });

    await collection.insertOne({
      title: section.title,
      content: section.content,
      category: section.category,
      language: driverLicenseSpanish.metadata.language,
      source: driverLicenseSpanish.metadata.source,
      citations: driverLicenseSpanish.metadata.citations,
      $vector: embedding.data[0].embedding
    });
  }
}

seedLocalContent().catch(console.error); 