"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import useDebounce from "./hooks/useDebounce";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue);

  const handleInputChange = (event) => {
    console.count("hi");
    setInputValue(event.target.value);
  };

  return (
    <main>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <br />
        <br />
        <span>{debouncedValue}</span>
      </div>
    </main>
  );
}
