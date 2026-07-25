import axios from "axios";
import { useState } from "react";
import { Upload, FileText, X } from "lucide-react";

function UploadBoard({ setActivePage }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selected]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, i) => i !== index)
    );
  };

  const handleAnalyze = async () => {
    if (files.length === 0) {
      alert("Please upload at least one PDF.");
      return;
    }

    try {
      setLoading(true);
      setActivePage("processing");
      localStorage.removeItem("analysisResult");
      
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("papers", file);
      });

      const response = await axios.post(
        "http://localhost:5000/api/analysis",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("AI Response:", response.data);

      // Store AI result so the Results page can use it later
      localStorage.setItem(
        "analysisResult",
        JSON.stringify(response.data)
      );

      setActivePage("results");

    } catch (error) {
      console.error("FULL ERROR OBJECT:", error);
      console.error("ERROR RESPONSE:", error?.response?.data);
      console.error("ERROR STATUS:", error?.response?.status);


      alert(
         "AI Error: " +
        JSON.stringify(error?.response?.data || error.message)
      );

      setActivePage("upload");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 py-10">

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

        <div
          className="
          border-2
          border-dashed
          border-[#1CB5B9]/30
          rounded-3xl
          bg-[#0B0B0B]
          relative
          overflow-hidden
          min-h-[650px]
          h-auto
          pb-44
          "
        >

          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#1CB5B9 1px, transparent 1px), linear-gradient(90deg,#1CB5B9 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">

            <div className="w-24 h-24 rounded-full border border-[#1CB5B9]/30 flex items-center justify-center mb-8">
              <Upload size={40} className="text-[#1CB5B9]" />
            </div>

            <h2 className="text-5xl font-bold mb-6">
              Bring Your Research Corpus
            </h2>

            <p className="text-[#D9D9D9] max-w-2xl mb-8">
              Upload review papers, journal articles,
              conference papers and research surveys.
            </p>

            <label
              className="
              bg-[#1CB5B9]
              text-black
              px-8
              py-4
              rounded-xl
              font-semibold
              cursor-pointer
              hover:scale-105
              transition
              "
            >
              Choose PDFs

              <input
                type="file"
                multiple
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            <p className="mt-5 text-sm tracking-[4px] text-[#D9D9D9] uppercase">
              Or drag & drop files here
            </p>

          </div>

          {files.length > 0 && (
            <div
              className="
              absolute
              left-8
              bottom-8
              right-8
              flex
              flex-wrap
              gap-4
              items-start
              "
            >
              {files.map((file, index) => (
                <div
                  key={index}
                  className="
                  w-[280px]
                  bg-[#111111]
                  border
                  border-[#1CB5B9]/20
                  rounded-xl
                  p-4
                  flex
                  justify-between
                  items-center
                  hover:border-[#1CB5B9]
                  transition
                  "
                >
                  <div className="flex items-center gap-3">
                    <FileText className="text-[#1CB5B9]" />

                    <div>
                      <p className="text-sm">{file.name}</p>

                      <p className="text-xs text-[#D9D9D9]">
                        {(file.size / 1024).toFixed(0)} KB
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="
                    w-8
                    h-8
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-gray-300
                    hover:bg-red-500
                    hover:text-white
                    transition
                    z-20
                    "
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="
          bg-[#111111]
          border
          border-[#1CB5B9]/20
          rounded-3xl
          p-8
          "
        >
          <h3 className="text-2xl font-bold mb-8 text-[#1CB5B9]">
            Research Pipeline
          </h3>

          <div className="space-y-8">
            <div><span className="text-[#1CB5B9]">01</span><p className="mt-2">Upload Papers</p></div>
            <div><span className="text-[#1CB5B9]">02</span><p className="mt-2">AI Summarization</p></div>
            <div><span className="text-[#1CB5B9]">03</span><p className="mt-2">Theme Detection</p></div>
            <div><span className="text-[#1CB5B9]">04</span><p className="mt-2">Contradiction Analysis</p></div>
            <div><span className="text-[#1CB5B9]">05</span><p className="mt-2">Research Gap Discovery</p></div>
            <div><span className="text-[#1CB5B9]">06</span><p className="mt-2">Future Recommendations</p></div>
          </div>
        </div>

      </div>

      {files.length > 0 && (

        <div className="mt-12">

          <div className="flex justify-center mb-5">

            <div
              className="
              bg-[#111111]
              border
              border-[#1CB5B9]/20
              rounded-full
              px-6
              py-3
              text-[#D9D9D9]
              "
            >
              ✅ {files.length} Research Paper{files.length > 1 ? "s" : ""} Ready for Analysis
            </div>

          </div>

          <div className="text-center">

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="
              bg-[#1CB5B9]
              text-black
              px-10
              py-5
              rounded-2xl
              text-lg
              font-bold
              hover:scale-105
              transition
              disabled:opacity-50
              "
            >
              {loading ? "Analyzing..." : "Analyze Research Papers →"}
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default UploadBoard;