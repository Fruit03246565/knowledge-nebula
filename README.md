# Knowledge Nebula · 知云

A document workspace with an explorable galaxy, document ingestion, passage retrieval and source-grounded AI answers.

## Run locally

Node.js 22.12+ is required.

```sh
npm ci
cp .env.example .env
npm run dev
```

Open the Vite URL. Upload a text-based PDF, TXT or Markdown document, ask a question, then select a citation to inspect the source passage. Up to 15 MB / 250,000 characters per file. Scanned PDFs need external OCR.

Without AI credentials, keyword retrieval returns original excerpts, explicitly labeled as source retrieval mode. With a DeepSeek `AI_API_KEY`, the backend retrieves passages by keyword and asks DeepSeek to answer with numbered references. Uploads also produce an AI summary of the first 10,000 characters. Optional embedding support requires an embedding-compatible provider and an explicit `AI_EMBEDDING_MODEL`; DeepSeek configuration leaves this blank. Credentials remain on the server. Configured providers receive document passages and questions. Do not upload confidential documents without checking your provider's terms.

Documents and embeddings persist in `server/library.json` (ignored by Git). This is a single-user local prototype, bound to localhost. It has no multi-user authentication or production access controls. Documents uploaded before AI configuration need to be re-uploaded to obtain embeddings. The API sends source metadata before the answer through NDJSON; model-generated answer tokens are not streamed individually. When embeddings are enabled, documents receive a preliminary similarity group based on their first passage; the UI does not yet arrange documents by those groups.

```sh
npm run build
npm start
```

The production server serves `dist` and `/api` at http://127.0.0.1:3001.

