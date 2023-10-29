import React, { useState } from "react";
import OpenAI from "openai";
import DefaultSpinner from "../Atom/Spinner";
import InputForm from "../Atom/InputFormOpenAI";
import APIResponse from "../Atom/ResponsAPI";

const FormOpenAI = () => {

  const Apikey = import.meta.env.VITE_REACT_APP_OPENAI_API_KEY

  const openai = new OpenAI({
    apiKey: Apikey,
    dangerouslyAllowBrowser: true
  });

  const [apiResponse, setAPIResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const AICLick = async (prompt) => {
    setLoading(true);

    const promptWithBadminton = `Jawablah pertanyaan hanya tentang bulutangkis dan tidak menjawab pertanyaan selain bulutangkis: ${prompt}`;
    const unrelatedKeywords = ["football", "soccer", "baseball", "tennis", "pencipta", "penyanyi", "pelukis", "kartun", "animasi"];
    const isUnrelated = unrelatedKeywords.some((keyword) => prompt.toLowerCase().includes(keyword.toLowerCase()));

    if (isUnrelated) {
      setAPIResponse("Maaf, kami kurang paham");
    } else {
      try {
        const response = await openai.completions.create({
          model: "text-davinci-003",
          prompt: promptWithBadminton,
          max_tokens: 3000,
          temperature: 1,
        });

        setAPIResponse(response.choices[0].text);
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <InputForm onAIClick={AICLick} />
      <div className="w-full flex justify-center">
        <p className="flex items-center">{loading ? <DefaultSpinner /> : ""}</p>
      </div>
      <APIResponse apiResponse={apiResponse} />
    </>
  );
};

export default FormOpenAI;
