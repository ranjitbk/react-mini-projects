import axios from "axios";
import React, { useEffect, useState } from "react";
import "./quotes-generator.scss";

function QuoteGenerator(props) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios("https://api.quotable.io/random");
      setQuote(response.data);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="quote-generator">
      <h1>Random Quote Generator</h1>
      <blockquote>
        <p>{quote.content}</p>
        <footer>- {author}</footer>
      </blockquote>
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
