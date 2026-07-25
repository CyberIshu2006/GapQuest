from dataclasses import dataclass

from src.models.knowledge_chunk import KnowledgeChunk


@dataclass
class RetrievedChunk:
    """
    Represents a retrieved chunk along with
    its similarity score.
    """

    chunk: KnowledgeChunk

    similarity: float

    distance: float
