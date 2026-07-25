# GapQuest

GapQuest is an AI-powered web application that helps analyze multiple research papers and identify potential research gaps. Instead of manually reading and comparing dozens of papers, users can upload PDFs and receive a structured analysis containing summaries, common themes, contradictions, and possible research directions.

The project was built using a React frontend, a Node.js backend, and a Python AI service powered by Retrieval-Augmented Generation (RAG). For inference, GapQuest uses Ollama so everything runs locally without relying on paid APIs.

---

## How it works

1. Upload one or more research papers in PDF format.
2. The frontend sends the files to the backend.
3. The backend forwards them to the AI service.
4. The AI service:
   - extracts text from the PDFs
   - splits the content into semantic chunks
   - creates embeddings
   - stores them in a ChromaDB vector database
   - retrieves the most relevant context
   - generates a structured response using a local LLM
5. The backend returns the generated report.
6. The frontend displays the results.

---

## Features

- Upload multiple research papers
- Automatic text extraction
- Semantic chunking
- Vector search using ChromaDB
- AI-generated summaries
- Theme identification across papers
- Contradiction detection
- Research gap suggestions
- Local inference using Ollama

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios

### Backend

- Node.js
- Express
- Multer
- Axios

### AI Service

- Python
- FastAPI
- ChromaDB
- BAAI BGE Embeddings
- Ollama
- Llama 3.2

---

## Project Structure

```text
GapQuest
│
├── frontend
├── backend
├── ai
└── README.md
```

---

## Prerequisites

Before getting started, make sure the following are installed:

- Node.js (v18+)
- npm
- Python 3.11
- Ollama

Download Ollama from:

https://ollama.com/download

Pull the required model:

```bash
ollama pull llama3.2:3b
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/CyberIshu2006/GapQuest.git
cd GapQuest
```

### AI Service

```bash
cd ai
pip install -r requirements.txt --break-system-packages
```

Create an `.env` file inside the `ai` directory.

The required environment variables are not included in the repository. Ask one of the project contributors for the values.

### Backend

```bash
cd backend
npm install
```

Create a `.env` file using the provided `.env.example`.

### Frontend

```bash
cd frontend
npm install
```

---

## Running the project

Start Ollama first.

```bash
ollama serve
```

Open three terminals.

### Terminal 1

```bash
cd ai
uvicorn src.api:app --reload
```

### Terminal 2

```bash
cd backend
npm start
```

### Terminal 3

```bash
cd frontend
npm run dev
```

After all three services are running, open the frontend in your browser and upload one or more research papers to begin the analysis.

---

## Notes

- Environment files are intentionally ignored by Git.
- The vector database is recreated for every analysis request.
- Ollama must be running before starting the AI service.
- Performance depends on the size and number of uploaded papers.

---

## Future Improvements

Some features planned for future versions include:

- Persistent vector storage
- Support for additional LLMs
- Export reports as PDF
- Research paper comparison view
- Citation generation
- User authentication

---

## Contributors

This project was developed as part of an academic project.

Contributions and suggestions are always welcome.
