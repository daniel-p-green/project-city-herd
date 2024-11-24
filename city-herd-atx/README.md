# City Herd ATX 🌆

## Mission
To empower Austin residents with an AI-powered assistant that makes city services and information accessible to everyone, regardless of language or technical expertise.

## Vision
Creating inclusive, user-friendly access to city resources through a two-stage development approach:

1. **City Herd Rancher**: A DataStax-powered wizard for gathering and validating city-specific information
2. **City Herd Chatbot**: A Llama 3.2-powered multilingual assistant

## Features

### Stage 1: City Herd Rancher
- Automated resource gathering using Perplexity.ai
- User-driven content validation
- DataStax vector database integration
- Multilingual support (English/Spanish)

### Stage 2: City Herd Chatbot
- Llama 3.2 LLM integration
- Real-time multilingual support
- Persona-based responses
- RAG-enhanced knowledge retrieval

## Tech Stack
- Frontend: Next.js 14
- AI: Llama Stack 3.2
- Database: DataStax Astra DB
- Resource Gathering: Perplexity.ai
- Vector Search: DataStax Enterprise

## Getting Started

### Prerequisites
- Node.js 18+
- DataStax Astra DB account
- Llama Stack API key
- Perplexity.ai API key

### Installation bash
Clone the repository
git clone https://github.com/your-org/city-herd-atx.git
Install dependencies
cd city-herd-atx
npm install
Set up environment variables
cp .env.example .env.local
Edit .env.local with your API keys
Run development server
npm run dev

### Environment Variables
plaintext
LLAMA_STACK_API_KEY=your_llama_key
ASTRA_DB_APPLICATION_TOKEN=your_astra_token
ASTRA_DB_API_ENDPOINT=your_astra_endpoint
ASTRA_DB_NAMESPACE=your_namespace
PERPLEXITY_API_KEY=your_perplexity_key
NEXT_PUBLIC_CITY=Austin
NEXT_PUBLIC_STATE=TX

## Contributing
We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License
MIT

## Acknowledgments
- DataStax for vector database support
- Llama Stack team for LLM infrastructure
- City of Austin for open data resources

## Project Status
Currently in active development:
- Stage 1 (Rancher): Beta testing
- Stage 2 (Chatbot): Development

A