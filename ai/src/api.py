import os
import sys
import shutil
import tempfile
import traceback
from dataclasses import asdict
from fastapi.responses import JSONResponse
import traceback

from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from src.gapquest.gapquest import GapQuest

app = FastAPI(
    title="GapQuest AI API",
    version="1.0.0"
)

print("\nInitializing GapQuest...\n")
gapquest = GapQuest()


@app.get("/")
async def home():
    return {
        "success": True,
        "message": "GapQuest AI API is running."
    }


@app.post("/analyze")
async def analyze_papers(
    papers: list[UploadFile] = File(...)
):
    temp_dir = None

    try:
        # Create temporary folder
        temp_dir = tempfile.mkdtemp()

        # Save uploaded PDFs
        for paper in papers:
            file_path = os.path.join(temp_dir, paper.filename)

            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(paper.file, buffer)

        print(f"\nScanning folder: {temp_dir}")

        # Index PDFs
        gapquest.vector_store.clear()
        gapquest.ingest_folder(temp_dir)

        print("\nGenerating research report...\n")

        # Generate report
        report = gapquest.ask(
            """
            Perform a literature review and generate:

    1. Research domain
    2. Focus area
    3. Overall summary
    4. Key findings
    5. Common themes
    6. Contradictions
    7. Research gaps
    8. Future research recommendations
    9. Confidence score

    Use ONLY the supplied papers.

            Return ONLY valid JSON.
            """
        )

        print("✓ Analysis completed successfully.")

        return JSONResponse(
            status_code=200,
            content={
                "success": True,
                "result": asdict(report)
            }
        )

    except Exception as e:
        print("\n========== AI ERROR ==========")
        traceback.print_exc()
        print("==============================\n")

        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": str(e)
            }
        )

    finally:
        if temp_dir and os.path.exists(temp_dir):
            shutil.rmtree(temp_dir, ignore_errors=True)
            
