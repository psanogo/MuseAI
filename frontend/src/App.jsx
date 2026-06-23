import { useState } from "react";

export default function App() {
  const [idea, setIdea] = useState("");
  const [tone, setTone] = useState("Creative");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateContent = async () => {
    if (!idea) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea, tone }),
      });

      const data = await res.json();
      setResult(data.output);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🎨 MuseAI</h1>

      <textarea
        placeholder="Type your idea..."
        className="w-full p-3 text-black rounded mb-3"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <select
        className="p-2 text-black mb-3"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option>Creative</option>
        <option>Dark</option>
        <option>Funny</option>
        <option>Inspirational</option>
      </select>

      <button
        onClick={generateContent}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      <div className="mt-6 whitespace-pre-wrap bg-gray-900 p-4 rounded">
        {result}
      </div>
    </div>
  );
}
