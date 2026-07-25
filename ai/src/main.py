from fastapi import FastAPI, UploadFile, File
from typing import List
import shutil
import os

from src.preprocessing.document_processor import DocumentProcessor
from src.ai.embedding_engine import EmbeddingEngine


app = FastAPI(
    title="GapQuest AI Service"
)


UPLOAD_DIR = "temp_papers"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)


@app.get("/")
def home():
    return {
        "success": True,
        "message": "GapQuest AI Service Running"
    }


@app.post("/analyze")
async def analyze(
    papers: List[UploadFile] = File(...)
):

    try:

        all_chunks = []

        processor = DocumentProcessor()
        engine = EmbeddingEngine()


        for paper in papers:

            file_path = os.path.join(
                UPLOAD_DIR,
                paper.filename
            )

            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(
                    paper.file,
                    buffer
                )


            chunks = processor.process_pdf(
                file_path
            )

            chunks = engine.embed_chunks(
                chunks
            )


            all_chunks.extend(
                chunks
            )


        return {
            "success": True,
            "message": "Analysis completed",
            "papers_analyzed": len(papers),
            "chunks_created": len(all_chunks)
        }


    except Exception as e:

        print("AI ERROR:", e)

        return {
            "success": False,
            "message": str(e)
        }