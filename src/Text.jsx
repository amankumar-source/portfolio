
import React, { useState, useEffect } from "react";

const Text = () => {
  const texts = [
    "Hi, I’m Aman Kumar"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true); // fade in
      }, 500); // wait for fade-out before switching text
    }, 3000); // change every 3s

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <h1
      className={`text-center transition-all duration-700 text-2xl md:text-6xl font-extrabold tracking-wide 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent
        ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
    >
      {texts[index]}
    </h1>
  );
};

export default Text;
