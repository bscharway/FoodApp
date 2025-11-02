import { useEffect, useState } from "react";
import styles from "./search.module.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData }) {
  const [inputValue, setInputValue] = useState("pizza");
  const [query, setQuery] = useState("pizza");
  // Syntax of a useEffect hoolk
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${BASE_URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  function handleKeyDown(e){
    if (e.key === "Enter"){
      setQuery(inputValue);
    }
  }
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} 
        type="text"
      ></input>
    </div>
  );
}
