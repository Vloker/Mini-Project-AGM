// InputForm.js
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const InputForm = ({ onAIClick }) => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="w-full flex items-center relative rounded-lg border border-gray-200 p-2">
      <textarea
        className="border-none w-full resize-none outline-none p-2 pr-10 pl-2"
        rows="1"
        placeholder="Ask a Badminton Question"
        name="text_ai"
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>

      <button className="absolute p-2 right-2" onClick={() => onAIClick(prompt)}>
        <AiOutlineSend className="w-5 h-5" />
      </button>
    </div>
  );
}

export default InputForm;
