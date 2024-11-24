import { LlamaStack } from "@llama-stack/sdk";
import { StreamingTextResponse } from 'ai';
import { AstraDB } from "@datastax/astra-db-ts";

const llama = new LlamaStack({
  apiKey: process.env.LLAMA_STACK_API_KEY,
  version: "3.2"
});

const astraDb = new AstraDB(process.env.ASTRA_DB_APPLICATION_TOKEN, process.env.ASTRA_DB_API_ENDPOINT, process.env.ASTRA_DB_NAMESPACE);

export async function POST(req: Request) {
  try {
    const { messages, useRag, llm, similarityMetric, language = 'en' } = await req.json();
    const latestMessage = messages[messages?.length - 1]?.content;

    let docContext = '';
    if (useRag) {
      const embedding = await llama.embeddings.create({
        input: latestMessage,
        model: "llama-3.2-70b"
      });

      const collection = await astraDb.collection(`chat_${similarityMetric}`);
      const localCollection = await astraDb.collection('local_knowledge');
      
      const [generalDocs, localDocs] = await Promise.all([
        collection.find(null, {
          sort: { $vector: embedding.data[0].embedding },
          limit: 3,
        }).toArray(),
        localCollection.find(
          { language },
          {
            sort: { $vector: embedding.data[0].embedding },
            limit: 2,
          }
        ).toArray()
      ]);
      
      docContext = `
        START CONTEXT
        ${[...generalDocs, ...localDocs].map(doc => doc.content).join("\n")}
        END CONTEXT
      `;
    }

    const completion = await llama.chat.completions.create({
      messages: [...messages],
      model: "llama-3.2-70b",
      stream: true,
      context: docContext,
      system_prompt: `You are a bilingual (English/Spanish) AI assistant for Austin, TX. 
        Respond in the same language as the user's query. 
        If the answer is not in the context, say "I don't have enough information to answer that question" in the appropriate language.
        Format responses using markdown and include citations when available.`,
    });

    return new StreamingTextResponse(completion.body);
  } catch (e) {
    throw e;
  }
}
