// APIResponse.js
import React from "react";

function APIResponse({ apiResponse }) {
  return (
    <div className="w-full flex justify-center relative rounded-lg border border-gray-200 py-5 px-5">
      <p>{apiResponse}</p>
    </div>
  );
}

export default APIResponse;
