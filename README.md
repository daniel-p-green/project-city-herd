# Project: City Herd

## Mission
**“Lead. Herd. Ship.”**
Empower cities starting with Austin, TX as MVP to build single-source-of-truth, Meta Llama-powered chatbots that make local services and information accessible to everyone—regardless of language, technical expertise, or unique city needs

## Two-Stage Development Approach

### Stage 1: City Herd Rancher
A DataStax-powered wizard for gathering and validating city-specific information:
- Automated resource gathering using Perplexity.ai
- User-driven content validation
- DataStax vector database integration
- Multilingual support (English/Spanish)

### Stage 2: City Herd Chatbot
A Llama 3.2-powered multilingual assistant:
- Accessible via Facebook app tab or standalone website
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

### Installation

bash
Clone the repository
git clone https://github.com/your-org/city-herd-atx.git

### Install dependencies
cd city-herd-atx
pnpm install

### Set up environment variables
cp .env.example .env.local

### Environment Variables

LLAMA_STACK_API_KEY=your_llama_key
ASTRA_DB_APPLICATION_TOKEN=your_astra_token
ASTRA_DB_API_ENDPOINT=your_astra_endpoint
ASTRA_DB_NAMESPACE=your_namespace
PERPLEXITY_API_KEY=your_perplexity_key
NEXT_PUBLIC_CITY=Austin
NEXT_PUBLIC_STATE=TX
