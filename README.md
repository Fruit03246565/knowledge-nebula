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

Without AI credentials, keyword retrieval returns original excerpts, explicitly labeled as source retrieval mode. With `AI_API_KEY`, the backend creates embeddings and uses cosine similarity for semantic search, then asks the configured chat model to answer with numbered references. Credentials remain on the server. Configured providers receive document passages and questions. Do not upload confidential documents without checking your provider's terms.

Documents and embeddings persist in `server/library.json` (ignored by Git). This is a single-user local prototype, bound to localhost. It has no multi-user authentication or production access controls. Documents uploaded before AI configuration need to be re-uploaded to obtain embeddings. The API sends source metadata before the answer through NDJSON; model-generated answer tokens are not streamed individually. There is no automatic topic clustering yet.

```sh
npm run build
npm start
```

The production server serves `dist` and `/api` at http://127.0.0.1:3001.

## Attribution and license

The original Galaxy renderer and galaxy parameters are adapted from [Cohenjikan/shiyun](https://github.com/Cohenjikan/shiyun), copyright © 2026 Cohenjikan — 诗云 / Poetry Cloud. The original renderer, shaders and bloom presentation are retained; the document interface and retrieval backend are new. This derivative project retains the **PolyForm Noncommercial License 1.0.0** in [LICENSE](LICENSE). It is not an unrestricted commercial-use template.
