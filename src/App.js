import React, { useState } from "react";
import useGenerateRandomColor from "./useGenerateRandomColor";

import "./App.css";

export const App = () => {
  const [quote, setQuote] = useState({
    content: "Computers are like bikinis. They save people a lot of guesswork.",
    author: "Sam Ewing",
  });
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const { color, generateColor } = useGenerateRandomColor();
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#" + color,
      }}
    >
      <div>
        <div className="quote-container">
          <div id="quote-box">
            <div
              className="quote-text-and-author"
              style={{
                color: "#" + color,
              }}
            >
              {" "}
              <div>
                <div
                  className="quote-text"
                  style={{
                    filter: "brightness(60%)",
                  }}
                >
                  {!loading && <span id="text">{quote.content}</span>}
                </div>
                <br />
                <div
                  className="quote-author"
                  style={{
                    filter: "brightness(60%)",
                  }}
                >
                  {!loading && <span id="author">- {quote.author}</span>}
                </div>
              </div>
            </div>
            <button
              className="button"
              id="new-quote"
              onClick={() => {
                generateColor();
                handleClick();
              }}
              style={{
                color: "#" + color,
              }}
            >
              <span
                style={{
                  filter: "brightness(60%)",
                }}
              >
                get new
              </span>
            </button>
            <a
              className="button"
              id="tweet-quote"
              target="_top"
              href="twitter.com/intent/tweet"
            >
              {""}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
