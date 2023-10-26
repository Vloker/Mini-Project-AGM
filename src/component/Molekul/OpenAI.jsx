import React, { useState } from "react";
import OpenAI from "openai";
import { AiOutlineSend } from "react-icons/ai";
import DefaultSpinner from "../Atom/Spinner";

const FormOpenAI = () => {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const AICLick = async () => {
    setLoading(true);

    // Menambahkan prompt yang spesifik seputar badminton
    const promptWithBadminton = `Bulutangkis adalah olahraga yang populer. Jawablah pertanyaan berikut tentang bulutangkis:\n\n${prompt}`;

    // Menentukan kata kunci yang mengindikasikan pertanyaan tidak berhubungan dengan badminton
    const unrelatedKeywords = ["football", "soccer", "baseball", "tennis", "pencipta", "penyanyi", "pelukis"]; // Kata kunci yang tidak berhubungan

    // Memeriksa apakah pertanyaan mengandung kata kunci yang tidak berhubungan
    const isUnrelated = unrelatedKeywords.some(keyword => prompt.toLowerCase().includes(keyword.toLowerCase()));


    if (isUnrelated){
        setResponse("Maaf, kami kurang paham");
    }else{
        try {
            const response = await openai.completions.create({
              model: "gpt-3.5-turbo-instruct",
              prompt: promptWithBadminton,
              max_tokens: 3000
            });
    
            setResponse(response.choices[0].text);
          } catch (error) {
            console.log(error);
          }
        }
        setLoading(false);
      };

  return (
    <>
      <div className="w-full flex items-center relative rounded-lg border border-gray-200 p-2">
        <textarea
          className="border-none w-full resize-none outline-none p-2 pr-10 pl-2"
          id=""
          rows="1"
          placeholder="Ask a Badminton Question"
          name="text_ai"
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>

        <button className="absolute p-2 right-2" onClick={AICLick}>
          <AiOutlineSend className="w-5 h-5" />
        </button>
      </div>
        <div className="w-full flex justify-center">
            <p className="flex items-center">{loading ? <DefaultSpinner /> : ""}</p>
        </div>
      <div className="w-full flex justify-center relative rounded-lg border border-gray-200 py-5 px-5">
        <p>{response}</p>
      </div>
    </>
  );
};

export default FormOpenAI;
