import json
import requests


class LLMProvider:
    """
    Local LLM provider using Ollama.
    """

    def __init__(self):

        print("\nLoading Ollama...")

        self.url = "http://localhost:11434/api/generate"
        self.model = "llama3.2:3b"

        print("✓ Ollama ready.\n")


    def _clean_json(self, text):

        text = text.strip()

        if "```json" in text:
            text = text.split("```json")[1]

        if "```" in text:
            text = text.split("```")[0]

        return text.strip()



    def _normalize_keys(self, data):

        if "Domain" in data:
            data["domain"] = data.pop("Domain")


        if "Focus Area" in data:
            data["focus_area"] = data.pop("Focus Area")


        if "Overall Summary" in data:
            data["summary"] = data.pop("Overall Summary")


        if "Confidence Score" in data:
            data["confidence_score"] = data.pop(
                "Confidence Score"
            )


        if "Research Gaps" in data:
            data["research_gaps"] = data.pop(
                "Research Gaps"
            )


        if "Future Research Recommendations" in data:
            data["future_recommendations"] = data.pop(
                "Future Research Recommendations"
            )


        sections = [
            "key_findings",
            "common_themes",
            "contradictions",
            "research_gaps",
            "future_recommendations"
        ]


        for section in sections:

            if section not in data:
                data[section] = []


            fixed_items = []


            for item in data[section]:


                if isinstance(item, str):

                    fixed_items.append(
                        {
                            "text": item,
                            "evidence": []
                        }
                    )


                elif isinstance(item, dict):

                    fixed_items.append(
                        {
                            "text":
                                item.get("text")
                                or item.get("Theme")
                                or item.get("Topic")
                                or item.get("Description")
                                or "",

                            "evidence":
                                item.get(
                                    "evidence",
                                    []
                                )
                        }
                    )


            data[section] = fixed_items


        return data




    def generate(self, prompt: str) -> dict:


        response = requests.post(

            self.url,

            json={

                "model": self.model,

                "prompt": prompt,

                "stream": False,

                "format": "json",

                "options": {

                    "temperature": 0.2,

                    "num_ctx": 16384

                }

            },

            timeout=600

        )



        if response.status_code != 200:

            raise RuntimeError(
                response.text
            )



        result = response.json()


        text = result.get(
            "response",
            ""
        )


        print("\n========== OLLAMA RAW RESPONSE ==========")
        print(text)
        print("=========================================")



        text = self._clean_json(text)



        try:

            data = json.loads(text)


        except Exception:

            print("\nINVALID JSON RECEIVED:")
            print(text)

            raise RuntimeError(
                "Ollama returned invalid JSON"
            )



        data = self._normalize_keys(data)


        print("\n========== FINAL DATA ==========")
        print(
            json.dumps(
                data,
                indent=2
            )
        )


        return data