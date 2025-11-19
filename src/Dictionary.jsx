import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "3oa2b4640a831a6act8f0d75a77730e5";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word..."
          className="word-search"
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
