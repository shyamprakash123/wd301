import React from "react";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Not Found</h1>
      <button
        id="backToHomeButton"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
}
